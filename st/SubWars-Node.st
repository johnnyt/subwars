Smalltalk current createPackage: 'SubWars-Node' properties: #{}!
Object subclass: #WebServer
	instanceVariableNames: 'port app dirname faye app express bayeux fs childProcess util redisStore'
	category: 'SubWars-Node'!

!WebServer methodsFor: 'actions'!

recompileJS
	('production' = app settings env) ifFalse: [
		childProcess exec: 'rake compile:all' callback: [:err :stdout :stderr|
			util puts: stdout.
			util puts: stderr]]
! !

!WebServer methodsFor: 'initialization'!

initialize
	super initialize.
	<self['@dirname'] = __dirname>.

	port := process env at: 'PORT'. "Heroku will provide a port in production"
	port ifNil: [ port := 5000 ].

	util := self require: 'util'.
	childProcess := self require: 'child_process'.
	fs := self require: 'fs'.
	express := self require: 'express'.
	faye := self require: './lib/faye-node.js'.
	app := express createServer.
	redisStore := (self require: 'connect-redis') value: express.
	bayeux := (faye at: 'NodeAdapter') newValue: #{ 'mount' -> '/faye' . 'timeout' -> 45 }.
	bayeux attach: app.
	
	self
		configure;
		initializeRoutes.
!

initializeRoutes
	app
		get: '/' do: [ :req :res |
			self initializeVisitor: req.
			res render: 'index' with: #{ 'session' -> req session } ];
		put: '/*' do: [ :req :res | self handlePUT: req respondTo: res ]
!

configure
	app configure: [ app
		set: 'view options' val: #{ 'layout' -> false };
		set: 'view engine' val: 'jade';
		use: express logger;
		use: (express static: dirname, '/public');
		use: express cookieParser;
		use: (express session: #{ 'secret' -> 'i''m gonna getcha!!'. 'store' -> redisStore new });
		use: (app at: 'router')];

	configure: 'development' with: [ app
		use: (express errorHandler: #{ 'dumpExceptions' -> true . 'showStack' -> true }) ];

	configure: 'production' with: [ app
		use: (express errorHandler) ]
!

initializeVisitor: aRequest
	|newId|
	console log: 'initial visitor_id'.
	console log: aRequest session.
	console log: aRequest session at: 'visitor_id'.
	Visitor nextId: [:id| console log: '-----------------'; log: id. newId := id].
	console log: newId.
	"(aRequest session at: 'visitor_id') ifNil: [
		aRequest session at: 'visitor_id' put: Visitor nextId]."
	console log: aRequest session at: 'visitor_id'.
	aRequest cookies at: 'vid' put: (aRequest session at: 'visitor_id').
! !

!WebServer methodsFor: 'private'!

require: aModuleString
	"call to the Node require function"
	^require value: aModuleString
! !

!WebServer methodsFor: 'request handling'!

handlePUT: aRequest respondTo: aResponse
	| path stream |
	path := '.', aRequest url asString.
	stream := fs createWriteStream: path.
	aRequest
		setEncoding: 'utf8';
		on: 'data' do: [ :chunk | stream write: chunk ];
		on: 'end' do: [
			stream end.
			self recompileJS.
			self respondOKTo: aResponse ]
!

respondOKTo: aResponse
	aResponse send: 'Success'.
! !

!WebServer methodsFor: 'starting'!

start
	app listen: port asString do: [
		console log: 'Listening on port: ', port asString ]
! !

!WebServer class methodsFor: 'main'!

main
	^self new start
! !

Object subclass: #Visitor
	instanceVariableNames: 'id'
	category: 'SubWars-Node'!

!Visitor methodsFor: 'accessing'!

id
	^id ifNil: [-1]
! !

Visitor class instanceVariableNames: 'redis redisClient'!

!Visitor class methodsFor: 'accessing'!

nextId
	self initializeRedis.
	console log: '---------------------------------\n'.
	redisClient incr: 'visitors:id' callback: [:err :res| ^res].
!

initializeRedis
	redis ifNil: [redis := require value: 'redis'].
	redisClient ifNil: [redisClient := redis createClient]
!

nextId: aBlock
	self initializeRedis.
	redisClient incr: 'visitors:id' callback: [:err :res| aBlock value: res].
! !

