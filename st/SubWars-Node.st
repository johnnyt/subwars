Smalltalk current createPackage: 'SubWars-Node' properties: #{}!
Object subclass: #WebServer
	instanceVariableNames: 'port app dirname faye app express bayeux fs childProcess util'
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
	app := express createServer.
	
	self
		configure;
		initializeFaye;
		initializeRoutes.
!

initializeRoutes
	app
		get: '/' do: [ :req :res | res render: 'index' ];
		put: '/*' do: [ :req :res | self handlePUT: req respondTo: res ]
!

configure
	app configure: [ app
		set: 'view options' val: #{ 'layout' -> false };
		set: 'view engine' val: 'jade';
		use: express logger;
		use: (express static: dirname, '/public');
		use: (app at: 'router') ];

	configure: 'development' with: [ app
		use: (express errorHandler: #{ 'dumpExceptions' -> true . 'showStack' -> true }) ];

	configure: 'production' with: [ app
		use: (express errorHandler) ]
!

initializeFaye
	faye := self require: './lib/faye-node.js'.
	bayeux := faye NodeAdapter newValue: #{ 'mount' -> '/faye' }.
	bayeux attach: app.
! !

!WebServer methodsFor: 'private'!

require: aModuleString
	"call to the Node require function"
	^require value: aModuleString
! !

!WebServer methodsFor: 'request handling'!

handlePUT: aRequest respondTo: aResponse
	| path stream |
	('production' = app settings env) ifTrue: [
		self respondOKTo: aResponse. ^self].
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

