Smalltalk current createPackage: 'SubWars-Client' properties: #{}!
Object subclass: #Ship
	instanceVariableNames: ''
	category: 'SubWars-Client'!

Object subclass: #Grid
	instanceVariableNames: 'array'
	category: 'SubWars-Client'!

!Grid methodsFor: 'accessing'!

at: aPoint
	^(array at: aPoint y) at: aPoint x
!

at: aPoint put: anObject
	|row|
	row := array at: aPoint y ifAbsent: [array at: aPoint y put: #()].
	row at: aPoint x put: anObject.
! !

!Grid methodsFor: 'initialization'!

initialize
	array := #()
! !

!Grid methodsFor: 'printing'!

printString
	^'a Grid(', String lf,
		((array collect: [:ea| ea join: String tab]) join: String lf),
		String lf, ')'
! !

Object subclass: #GeoHash
	instanceVariableNames: ''
	category: 'SubWars-Client'!

!GeoHash methodsFor: 'accessing'!

table
	^#(
	#( 'b'	'c'	'f'	'g'	'u'	'v'	'y'	'a' )
	#( '8'	'9'	'd'	'e'	's'	't'	'w'	'x' )
	#( '2'	'3'	'6'	'7'	'k'	'm'	'q'	'r' )
	#( '0'	'1'	'4'	'5'	'h'	'j'	'n'	'p' )
	)
! !

!GeoHash methodsFor: 'actions'!

generateGrid
	|str|
	self table withIndexDo: [:row :y|
		row withIndexDo: [:ch :x|
			str := x asString, '@', y asString, ' ', ch.
			console log: str]]
!

generateGridWithPrefix: aString
	|grid|
	grid := Grid new.
	self table withIndexDo: [:row :y|
		row withIndexDo: [:ch :x|
			grid at: x@y put: aString, ch]].
	^grid
! !

Object subclass: #Location
	instanceVariableNames: 'lat lng precision boundingMinLat boundingMaxLat boundingMinLng boundingMaxLng geoHash'
	category: 'SubWars-Client'!
!Location commentStamp!
GeoHash - encodes a lat,lng into a character string. The length of the string determines its precision.

http://geohash.org/site/tips.html
http://openlocation.org/geohash/geohash-js/
http://en.wikipedia.org/wiki/Geohash!

!Location methodsFor: 'accessing'!

precision: anInteger
	precision := anInteger
!

precision
	^precision
!

lat
	^lat
!

lng
	^lng
!

lng: aNumber
	lng := aNumber
!

lat: aNumber
	lat := aNumber
!

lat: lat lng: lng
	lat := lat.
	lng := lng.
	self updateGeoHash.
!

geoHash
	^geoHash ifNil: [ self updateGeoHash. geoHash ]
!

boundingMinLat
	^boundingMinLat
!

boundingMinLng
	^boundingMinLng
!

boundingMaxLng
	^boundingMaxLng
!

boundingMaxLat
	^boundingMaxLat
! !

!Location methodsFor: 'converting'!

decodeGeoHash: aString
	| minLat maxLat minLng maxLng isLongitude hashValue char |
	minLat := -90.
	maxLat := 90.
	minLng := -180.
	maxLng := 180.
	isLongitude := true.
	hashValue := 0.

	aString do: [
		char := (arguments at: 0) asLowercase.
		hashValue := ('0123456789bcdefghjkmnpqrstuvwxyz' indexOf: char) - 1.
		4 to: 0 by: -1 do: [ :bits :bit |
			"Right now '>>>>' gets turned into '>' - look at parser.js:3680" 
			<bit = eval('(hashValue >>' + '>> bits) & 1');>.
			isLongitude
				ifTrue: [ :mid |
					mid := (maxLng + minLng) / 2.
					bit = 1 ifTrue: [ minLng := mid ] ifFalse: [ maxLng := mid]]
				ifFalse: [ :mid |
					mid := (maxLat + minLat) / 2.
					bit = 1 ifTrue: [ minLat := mid ] ifFalse: [ maxLat := mid]].
			isLongitude := isLongitude not]].

	lat := (minLat + maxLat) / 2.
	lng := (minLng + maxLng) / 2
!

asGoogleLatLng
	^(google maps at: 'LatLng')
		newValue: lat
		value: lng
!

updateGeoHash
	| minLat maxLat minLng maxLng isLongitude chars bits hashValue |
	minLat := -90.
	maxLat := 90.
	minLng := -180.
	maxLng := 180.
	isLongitude := true.
	chars := #().
	bits := 0.
	hashValue := 0.

	[ chars size < precision ] whileTrue: [
		isLongitude
			ifTrue: [ :mid |
				mid := (maxLng+minLng) / 2.
				(lng > mid)
					ifTrue: [
						<hashValue = (hashValue << 1) + 1;>.
						minLng := mid ]
					ifFalse: [
						<hashValue = (hashValue << 1) + 0;>.
						maxLng := mid ]]
			ifFalse: [ :mid |
				mid := (maxLat+minLat) / 2.
				(lat > mid)
					ifTrue: [
						<hashValue = (hashValue << 1) + 1;>.
						minLat := mid ]
					ifFalse: [
						<hashValue = (hashValue << 1) + 0;>.
						maxLat := mid ]].

		isLongitude := isLongitude not.
		bits := bits + 1.
		(bits = 5) ifTrue: [
			chars add: ('0123456789bcdefghjkmnpqrstuvwxyz' at: (hashValue+1)).
			bits := 0.
			hashValue := 0 ]].

	boundingMinLat := minLat.
	boundingMaxLat := maxLat.
	boundingMinLng := minLng.
	boundingMaxLng := maxLng.

	geoHash := chars join: ''.
! !

!Location methodsFor: 'initialization'!

initialize
	super initialize.
	precision := 7.
! !

!Location methodsFor: 'printing'!

printString
	^'a Location( ', lat asString, ' ', lng asString, ' ', self geoHash, ' )'
! !

!Location class methodsFor: 'instance creation'!

decode: aString
	^self new
		decode: aString;
		yourself
!

newLat: aLatitude lng: aLongitude
	^self new
		lat: aLatitude;
		lng: aLongitude
!

newAtPARC
	^self new
		lat: 37.401119;
		lng: -122.149086
! !

Object subclass: #FayeClient
	instanceVariableNames: 'faye client'
	category: 'SubWars-Client'!

!FayeClient methodsFor: 'actions'!

disconnect
	client ifNotNil: [client disconnect]
! !

!FayeClient methodsFor: 'chat'!

chat: aString
	client publish: '/chat' val: aString
! !

!FayeClient methodsFor: 'initialization'!

initialize
	| loc url |
	faye := window at: 'Faye'.
	(faye at: 'Logging') at: 'logLevel' put: 'info'.
	faye at: 'logger' put: [ :msg | console log: msg ].
	
	loc := window location.
	url := location protocol, '//', location hostname.
	loc port asString = '' ifFalse: [ url := url, ':', loc port asString ].
	url := url, '/faye'.
	
	client := (faye at: 'Client') newValue: url.
	client bind: 'transport:down' do: [ console log: 'Transport down' ].
	client bind: 'transport:up' do: [ console log: 'Transport up' ].

	client subscribe: '/chat' do: [ :msg | window alert: msg ].
! !

Widget subclass: #SubWarsApp
	instanceVariableNames: 'div client geo currentLocation brand nav tools map polymaps consoleForm positionWatch'
	category: 'SubWars-Client'!

!SubWarsApp methodsFor: 'accessing'!

pageClasses
	^{ MapPage }
! !

!SubWarsApp methodsFor: 'actions'!

show
	self appendToJQuery: 'body' asJQuery
!

startTracking
	|getPositionBlock|
	self stopTracking.
	getPositionBlock := [geo getCurrentPosition: [:pos| self updateLat: pos coords latitude lng: pos coords longitude]].
	positionWatch := getPositionBlock valueWithInterval: 10 * 1000.
	getPositionBlock value.
	"geo watchPosition: [:position|
		self updateLat: position coords latitude
			lng: position coords longitude]"
!

stopTracking
	positionWatch ifNotNil: [
		window clearInterval: positionWatch.
		positionWatch := nil]
	"geo clearWatch"
!

destroy
	geo ifNotNil: [geo clearWatch].
	client ifNotNil: [client disconnect].
	div ifNotNil: [div asJQuery remove].
	positionWatch ifNotNil: [window clearInterval: positionWatch]
!

processConsoleCommand: aCommandString
	(aCommandString match: '^gh ')
		ifTrue: [window alert: 'I should lookup the GeoHash you provided']
		ifFalse: [client chat: aCommandString]
!

updateLat: aLat lng: aLng
	|loc geoJson coord|
	loc := Location newLat: aLat lng: aLng.
	loc updateGeoHash.
	map center: #{ 'lat' -> aLat . 'lon' -> aLng }.

	coord := Array new: 5.
	coord
		at: 1 put: (Array with: loc boundingMinLng with: loc boundingMinLat);
		at: 2 put: (Array with: loc boundingMaxLng with: loc boundingMinLat);
		at: 3 put: (Array with: loc boundingMaxLng with: loc boundingMaxLat);
		at: 4 put: (Array with: loc boundingMinLng with: loc boundingMaxLat);
		at: 5 put: (Array with: loc boundingMinLng with: loc boundingMinLat).
		
	geoJson := polymaps geoJson
		features: (Array new: #{ 'geometry' -> #{ 'coordinates' -> coord . 'type' -> 'LineString' } });
		on: 'load' do: [ :e | e features do: [ :feature |
			feature element setAttribute: 'style' val: 'stroke: red;']].

	map add: geoJson
! !

!SubWarsApp methodsFor: 'initialization'!

initialize
	super initialize.
	"client := FayeClient new."
	geo := GeoLocation new.
	currentLocation := Location newAtPARC.
	polymaps := window org polymaps.
! !

!SubWarsApp methodsFor: 'rendering'!

renderNavOn: html
	html div class: 'navbar navbar-fixed-top'; with: [
		html div class: 'navbar-inner'; with: [
			html div class: 'container-fluid'; with: [
				html a class: 'btn btn-navbar';
					at: 'data-toggle' put: 'collapse';
					at: 'data-target' put: '.nav-collapse';
					with: [html span class: 'icon-bar'. html span class: 'icon-bar'. html span class: 'icon-bar'].
				brand := html a class: 'brand'; href: '#'.
				html div class: 'nav-collapse'; with: [ 
					nav := html ul class: 'nav'.
					tools := html ul class: 'nav pull-right']]]]
!

updateTools
	tools contents: [:html|
		html li class: 'dropdown'; with: [
			html a href: '#'; class: 'dropdown-toggle'; at: 'data-toggle' put: 'dropdown'; with: [
				html with: 'Tools '.
				(html tag: 'b') class: 'caret'].
			html ul class: 'dropdown-menu'; with: [
				html li with: [html a with: 'Toggle IDE'; href: '#ide'; onClick: [:e| e preventDefault. window toggleAmberIDE]].
				html li class: 'divider'.
				html li with: [html a with: 'Browse SubWars'; href: '#browse'; onClick: [:e| e preventDefault. Browser openOn: SubWarsApp]].
				html li with: [html a with: 'Inspect SubWars'; href: '#inspect'; onClick: [:e| e preventDefault. SubWarsApp instance inspect]].
				html li with: [html a with: 'Restart SubWars'; href: '#restart'; onClick: [:e| e preventDefault. SubWarsApp restart]]]]]
!

renderOn: html
	div := html div id: 'subwars'; with: [
		self renderNavOn: html;
			renderMapOn: html;
			update;
			startTracking]
!

update
	self updateNav;
		updateTools
!

renderMapOn: html
	| svg |
	html div id: 'map'.
	<svg = document.getElementById("map").appendChild(org.polymaps.svg("svg"))>.
	map := window org polymaps map container: svg.
	map zoom: 16.
	"midnight-commander: 999"
	"SW-black-basic: 52152"
	<self['@map'].add(org.polymaps.image()
		.url(org.polymaps.url("http://{S}tile.cloudmade.com"
		+ "/4dc7790c1c744bdab4909fdb857d642d" // subwars
		+ "/52152/256/{Z}/{X}/{Y}.png")
		.hosts(["a.", "b.", "c.", ""])));>.
!

updateNav
	nav contents: [:html|
		"html li with: [
		consoleForm := html form class: 'form-search navbar-search pull-left'; with: [
			html input
				type: 'text';
				id: 'console';
				placeholder: 'Chat';
				class: 'search-query span1'].

		consoleForm asJQuery bind: 'submit' do: [:e :input|
			e preventDefault.
			input := '#console' asJQuery.
			self processConsoleCommand: input val.
			input val: '']]."
		html li with: [html a with: 'IDE'; href: '#ide'; onClick: [:e| e preventDefault. Browser openOn: SubWarsApp]]]
! !

SubWarsApp class instanceVariableNames: 'instance'!

!SubWarsApp class methodsFor: 'accessing'!

instance
	^instance ifNil: [instance := self new]
! !

!SubWarsApp class methodsFor: 'actions'!

start
	^self instance
		show;
		yourself
!

restart
	self instance ifNotNil: [self instance destroy].
	instance := nil.
	^self start
!

main
	self start
! !

