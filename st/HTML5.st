Smalltalk current createPackage: 'HTML5' properties: #{}!
Object subclass: #IndexedDatabase
	instanceVariableNames: 'req db version'
	category: 'HTML5'!

!IndexedDatabase methodsFor: 'not yet classified'!

initialize
	super initialize.
	window at: #indexedDB put: window webkitIndexedDB.
	"window at: #IDBTransaction put: window webkitIDBTransaction."

	req := window indexedDB open: 'RulesDB'.
	req	addEventListener: 'success' do: [ :event |
		db := event target result.
		db setVersion: '1.0'.
		console log: 'Created DB' ].
	req addEventListener: 'error' do: [ :event |
		console log: 'Error: ', event message asString, ' (', event code asString, ')' ]
! !

Object subclass: #FileSystem
	instanceVariableNames: 'fs'
	category: 'HTML5'!
!FileSystem commentStamp!
Wrapper around HTML5 FileSystem
http://playground.html5rocks.com/#filesystem_apis!

!FileSystem methodsFor: 'error-handling'!

handleError: anError
	| msg |
<
switch (anError.code) {
    case FileError.QUOTA_EXCEEDED_ERR:
      msg = 'QUOTA_EXCEEDED_ERR';
      break;
    case FileError.NOT_FOUND_ERR:
      msg = 'NOT_FOUND_ERR';
      break;
    case FileError.SECURITY_ERR:
      msg = 'SECURITY_ERR';
      break;
    case FileError.INVALID_MODIFICATION_ERR:
      msg = 'INVALID_MODIFICATION_ERR';
      break;
    case FileError.INVALID_STATE_ERR:
      msg = 'INVALID_STATE_ERR';
      break;
    default:
      msg = 'Unknown Error';
      break;
  };>.
	console log: 'Error: ', msg
! !

!FileSystem methodsFor: 'initialization'!

initialize
	<window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem>.
	(window at: 'requestFileSystem') ifNotNil: [
		window requestFileSystem: (window at: 'TEMPORARY')
			size: 1024*1024
			onSuccess: [ :filesystem | self initializeFileSystem: filesystem ]
			onError: [ :error | self handleError: error ]].
!

initializeFileSystem: aDOMFileSystem
	fs := aDOMFileSystem.
! !

Object subclass: #GeoLocation
	instanceVariableNames: 'trackingWatchId geo onSuccess onError'
	category: 'HTML5'!
!GeoLocation commentStamp!
Wrapper around HTML5 GeoLocation
http://playground.html5rocks.com/#get_current_position

You can set the default onSuccess and onError callbacks:

| geo |
geo := GeoLocation new
	onSuccess: [ :position | window alert: position ];
	onError: [ :error | window alert: error ].
geo getCurrentPosition

Or you can provide a custom block:

| geo |
geo := GeoLocation new.
geo getCurrentPosition: [ :position | window alert: position ]!

!GeoLocation methodsFor: 'actions'!

getCurrentPosition
	geo
		getCurrentPosition: [ :position | onSuccess value: position ]
		onError: [ :error | onError value: error ]
!

watchPosition
	self watchPosition: onSuccess.
!

clearWatch
	trackingWatchId ifNotNil: [ geo clearWatch: trackingWatchId ].
	trackingWatchId := nil.
!

getCurrentPosition: aBlock
	geo getCurrentPosition: aBlock onError: onError
!

getCurrentPosition: aBlock onError: anErrorBlock
	geo getCurrentPosition: aBlock onError: anErrorBlock
!

watchPosition: aBlock
	self clearWatch.
	trackingWatchId := geo
		watchPosition: aBlock
		onError: onError
! !

!GeoLocation methodsFor: 'callbacks'!

onSuccess: aBlock
	onSuccess := aBlock
!

onError: aBlock
	onError := aBlock
!

onError
	^onError
!

onSuccess
	^onSuccess
! !

!GeoLocation methodsFor: 'initialization'!

initialize
	geo := navigator geolocation.
	onSuccess := [ :position | console log: position ].
	onError := [ :error | console log: error ].
! !

Object subclass: #WebDatabase
	instanceVariableNames: 'name description request db version'
	category: 'HTML5'!
!WebDatabase commentStamp!
HTML5 Web SQL Database

http://www.html5rocks.com/en/features/storage!

!WebDatabase methodsFor: 'accessing'!

db
	^db
!

name: aString
	name := aString.
!

name
	^name
!

description
	^description
!

description: aString
	description := aString
!

version: aString
	version := aString.
!

version
	^version
! !

!WebDatabase methodsFor: 'api'!

executeSql: aSqlString args: anArray onSuccess: aSuccessBlock onError: anErrorBlock
	db transaction: [ :tx |
		tx executeSql: aSqlString
			args: anArray
			onSuccess: aSuccessBlock
			onError: anErrorBlock ]
!

executeSql: aSqlString args: anArray
	self executeSql: aSqlString
		args: anArray
		onSuccess: []
		onError: [ :tx :error | console log: error ]
!

executeSql: aSqlString
	self executeSql: aSqlString
		args: []
		onSuccess: []
		onError: [ :tx :error | console log: error ]
! !

!WebDatabase methodsFor: 'initialization'!

initialize
	name ifNil: [ name := 'default' ].
	description ifNil: [ description := 'Default DB' ].
	version := ''.
	db := window openDatabase: name version: version description: description size: 1024.
! !

!WebDatabase class methodsFor: 'instance creation'!

named: aName description: aDescription
	^self basicNew
		name: aName;
		description: aDescription;
		initialize;
		yourself.
!

named: aName
	^self basicNew
		name: aName;
		description: '';
		initialize;
		yourself.
! !

Object subclass: #LocalStorage
	instanceVariableNames: 'scope'
	category: 'HTML5'!
!LocalStorage commentStamp!
LocalStorage is a wrapper around HTML5 Local Storage.
Take a look at: http://diveintohtml5.org/storage.html

Example

	| local |
	local := LocalStorage new.
	local at: 'message' put: 'Hello World!!'.
	Transcript show: (local at: 'message'); cr.!

!LocalStorage methodsFor: 'accessing'!

keys
	| keysArray |
	keysArray := #().
	0 to: (localStorage length - 1) do: [ :idx :key |
		key := localStorage key: idx.
		(key match: '^', scope)
			ifTrue: [ keysArray add: (key replace: ('^', scope) with: '') ]].
	^keysArray
!

scopedKey: aString
	(aString match: '^' , scope)
		ifTrue: [ ^aString ]
		ifFalse: [ ^scope , aString ]
!

values
	^self keys collect: [ :each | self at: each ]
!

at: aString
	^localStorage getItem: (self scopedKey: aString)
!

at: aString put: anObject
	localStorage
		setItem: (self scopedKey: aString) 
		value: anObject
!

delete: aString
	localStorage removeItem: (self scopedKey: aString)
!

includesKey: aString
	^self keys includes: aString
!

at: aKey ifAbsent: aBlock
	^(self includesKey: aKey)
		ifTrue: [ self at: aKey ]
		ifFalse: aBlock
!

at: aKey ifAbsentPut: anObject
	^self at: aKey ifAbsent: [
		self at: aKey put: anObject ]
! !

!LocalStorage methodsFor: 'initialization'!

initialize
	scope ifNil: [ scope := '' ]
!

initializeWithScope: aString
	scope := aString , '.'.
	self initialize.
! !

LocalStorage class instanceVariableNames: 'root'!

!LocalStorage class methodsFor: 'instance creation'!

withScope: aString
	^self new initializeWithScope: aString
! !

