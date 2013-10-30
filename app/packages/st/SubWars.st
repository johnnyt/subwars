Smalltalk current createPackage: 'SubWars'!
Object subclass: #BinaryPositionConverter
	instanceVariableNames: 'bits'
	package: 'SubWars'!

!BinaryPositionConverter methodsFor: 'accessing'!

bits
	^ bits ifNil: [ bits := Array new ]
!

bits: anArray
	bits := anArray
!

dictionary
	^ '0123456789bcdefghjkmnpqrstuvwxyz'
!

intSize
	^ 5
!

integers
	| ints |
	ints := Array new.
	[ self hasInput ] whileTrue: [
		ints add: self nextInteger ].
	^ ints
!

nextBits
	| subarray |
	subarray := (self bits) copyFrom: 1 to: self intSize.
	self bits: (self bits copyFrom: self intSize + 1 to: self bits size).
	^ subarray
! !

!BinaryPositionConverter methodsFor: 'converting'!

asString
	^ (self integers collect: [ :int | self dictionary at: int+1 ]) join: ''
! !

!BinaryPositionConverter methodsFor: 'private'!

convertToInt: aString
	<return parseInt(aString, 2);>
!

nextInteger
	^ self convertToInt: (self nextBits join: '')
! !

!BinaryPositionConverter methodsFor: 'querying'!

hasInput
	^ self bits size >= self intSize
! !

!BinaryPositionConverter class methodsFor: 'instance creation'!

merge: firstArray into: secondArray
	| length newArray |
	length := firstArray size min: secondArray size.
	newArray := Array new.
	length timesRepeat: [
		newArray add: secondArray shift; add: firstArray shift ].
	
	^ self new
		bits: newArray;
		yourself
!

merge: firstArray into: secondArray precision: aPrecision
	| length newArray |
	length := firstArray size min: secondArray size.") min: ((aPrecision * 5) / 2)."
	newArray := Array new.
	length timesRepeat: [
		newArray add: secondArray shift; add: firstArray shift ].
	
	^ self new
		bits: newArray;
		yourself
!

newOn: anArray
	^ self new
		bits: anArray;
		yourself
! !

Object subclass: #CoordinateBinder
	instanceVariableNames: 'value bits precision'
	package: 'SubWars'!

!CoordinateBinder methodsFor: 'accessing'!

averageBitLength
	^ self precision * 2.5
!

bitsNeeded
	self subclassResponsibility
!

maxCoord
	self subclassResponsibility
!

minCoord
	self subclassResponsibility
!

precision
	^ precision ifNil: [ precision := 1 ]
!

precision: aNumber
	precision := aNumber
! !

!CoordinateBinder class methodsFor: 'not yet classified'!

bind: aNumber precision: aPrecision
	^ self new
		precision: aPrecision;
		value: aNumber;
		bind;
		bits
! !

CoordinateBinder subclass: #LatitudeBinder
	instanceVariableNames: ''
	package: 'SubWars'!

!LatitudeBinder methodsFor: 'accessing'!

bitsNeeded
	<return Math.floor(self._averageBitLength());>
!

maxValue
	^ 90.0
!

minValue
	^ -90.0
! !

CoordinateBinder subclass: #LongitudeBinder
	instanceVariableNames: ''
	package: 'SubWars'!

!LongitudeBinder methodsFor: 'accessing'!

bitsNeeded
	<return Math.ceil(self._averageBitLength());>
!

maxValue
	^ 180.0
!

minValue
	^ -180.0
! !

Object subclass: #GeoHash
	instanceVariableNames: 'latBits lngBits lat lng hash latString lngString'
	package: 'SubWars'!
!GeoHash commentStamp!
Precision | Size (Meters) | Size (Miles / Feet) | Rough Size (US) | Width | Height | # Tiles | Approx # Tiles
1 | 5003530 | 3109 | Continent | 8 | 4 | 32 | 32
2 | 625441 | 388 | State | 32 | 32 | 1024 | 1000
3 | 123264 | 76 | County | 256 | 128 | 32768 | 32000
4 | 19545 | 12 | City | 1024 | 1024 | 1048576 | 1m
5 | 3803 | 2 | Postal Code | 8192 | 4096 | 33554432 | 33m
6 | 610 | 2001 ft | Neighborhood | 32768 | 32768 | 1073741824 | 1b
7 | 118 | 387 ft | Street | 262144 | 1310762 | 34359738368 | 34b
8 | 19 | 62 ft | House / Office | 1048576 | 1048576 | 1099511600000 | 1t
9 | 3.71 | 12 ft | Room | 8388608 | 4194304 | 35184372000000 | 35t
10 | 0.6 | 2 ft | Desk | 33554432 | 33554432 | 1125899900000000 | 1.1quadrillion!

!GeoHash methodsFor: 'accessing'!

hash
	^ hash
!

hash: aString
	hash := aString
!

lat
	^ lat
!

lat: aNumber
	lat := aNumber
!

latBits
	^ latBits
!

latBits: anArray
	latBits := anArray
!

latString
	^ latString
!

lng
	^ lng
!

lng: aNumber
	lng := aNumber
!

lngBits
	^ lngBits
!

lngBits: anArray
	lngBits := anArray
!

lngString
	^ lngString
! !

!GeoHash methodsFor: 'actions'!

encode
	self encodeToPrecision: 10
!

encodeToPrecision: aNumber
	self latBits: ((RangedPositionEncoder newFrom: -90.0 to: 90.0) encode: self lat).
	self lngBits: ((RangedPositionEncoder newFrom: -180.0 to: 180.0) encode: self lng).
	latString := (self latBits "first: ((aNumber * 5)/2)+1") join: ''.
	lngString := (self lngBits "first: ((aNumber * 5)/2)+1") join: ''.
	self hash: ((BinaryPositionConverter
				merge: latBits
				into: lngBits
				precision: aNumber) asString first: aNumber)
! !

!GeoHash methodsFor: 'printing'!

printString
	^ 'a GeoHash( ', self hash, ' )'
! !

!GeoHash class methodsFor: 'instance creation'!

encodeLat: lat lng: lng
	^ self new
		lat: lat;
		lng: lng;
		encode;
		yourself
!

encodeLat: lat lng: lng precision: aNumber
	^ self new
		lat: lat;
		lng: lng;
		encodeToPrecision: aNumber;
		yourself
! !

Object subclass: #RangedPositionEncoder
	instanceVariableNames: 'rangeMin rangeMax min max bits precision'
	package: 'SubWars'!
!RangedPositionEncoder commentStamp!
I encode the position of a value within a range and output a bitstring.

Example:
	| encoder |
    encoder := RangedPositionEncoder newFrom: -180.0 to: 180.0.
    encoder encode: -180.0. "=> #( 0 0 0 0 0 0 0 0 0 0 )"

https://github.com/paulasmuth/redis_geohash/blob/master/lib/redis_geohash/geohash.rb#L58-L67!

!RangedPositionEncoder methodsFor: 'accessing'!

bits
	^ bits ifNil: [ bits := Array new ]
!

bits: anArray
	bits := anArray
!

max
	^ max ifNil: [ max := self rangeMax ]
!

max: aNumber
	max := aNumber
!

midpoint
	^ (self min + self max) / 2.0
!

min
	^ min ifNil: [ min := self rangeMin ]
!

min: aNumber
	min := aNumber
!

precision
	^ precision ifNil: [ precision := 20 ]
!

precision: anInteger
	precision := anInteger
!

rangeMax
	^ rangeMax
!

rangeMax: aValue
	rangeMax := aValue
!

rangeMin
	^ rangeMin
!

rangeMin: aValue
	rangeMin := aValue
! !

!RangedPositionEncoder methodsFor: 'encoding'!

encode: aValue
	self reset.
	[ self needsRefinement ] whileTrue: [
		aValue >  self midpoint
			ifTrue: [ self refinePositive ]
			ifFalse: [ self refineNegative ]].

	^ self bits
!

refineNegative
	self bits add: 0.
	self max: self midpoint
!

refinePositive
	self bits add: 1.
	self min: self midpoint
!

reset
	self
		bits: nil;
		min: nil;
		max: nil
! !

!RangedPositionEncoder methodsFor: 'querying'!

needsRefinement
	^ self bits size < self precision
! !

!RangedPositionEncoder class methodsFor: 'instance creation'!

newFrom: aMinValue to: aMaxValue
	^ self new
		rangeMin: aMinValue;
		rangeMax: aMaxValue;
		yourself
!

newFrom: aMinValue to: aMaxValue precision: aPrecision
	^ self new
		rangeMin: aMinValue;
		rangeMax: aMaxValue;
		precision: aPrecision;
		yourself
! !

Object subclass: #SubWars
	instanceVariableNames: ''
	package: 'SubWars'!

!Array methodsFor: '*SubWars'!

shift
	"Remove and answer my first item"
	<return self.shift();>
! !

