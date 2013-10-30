Smalltalk current createPackage: 'SubWars-Tests'!
TestCase subclass: #BinaryPositionConverterTest
	instanceVariableNames: ''
	package: 'SubWars-Tests'!

!BinaryPositionConverterTest methodsFor: 'testing'!

testMerge
	| converter |
	converter := BinaryPositionConverter merge: #( 0 0 0 0 0 ) into: #( 1 1 1 1 1 ).
	self assert: converter asString equals: 'pb'
!

testMultiple
	| converter |
	converter := BinaryPositionConverter newOn: #( 0 0 0 1 1 0 0 1 0 0 ).
	converter nextInteger. "Throw away the first"
	self assert: converter nextInteger equals: 4
!

testSingle
	| converter |
	converter := BinaryPositionConverter newOn: #( 0 0 0 1 1 ).
	self assert: converter nextInteger equals: 3
!

testString
	| converter |
	converter := BinaryPositionConverter newOn: #( 0 0 0 0 0 1 1 1 1 1 ).
	self assert: converter asString equals: '0z'
! !

TestCase subclass: #GeoHashTest
	instanceVariableNames: ''
	package: 'SubWars-Tests'!

!GeoHashTest methodsFor: 'testing'!

test
	self assert: ((GeoHash encodeLat: -180.0 lng: 90.0) hash copyFrom: 1 to: 4) equals: 'jbpb'.
! !

TestCase subclass: #RangedPositionEncoderTest
	instanceVariableNames: ''
	package: 'SubWars-Tests'!
!RangedPositionEncoderTest commentStamp!
I test the ability to encode a value into a bitstream!

!RangedPositionEncoderTest methodsFor: 'testing'!

testBorders
	| encoder |
	encoder := RangedPositionEncoder newFrom: -180.0 to: 180.0.

	encoder encode: -180.0.
	self assert: (encoder bits copyFrom: 1 to: 10) equals: #( 0 0 0 0 0 0 0 0 0 0 ).

	encoder encode: 180.0.
	self assert: (encoder bits copyFrom: 1 to: 10) equals: #( 1 1 1 1 1 1 1 1 1 1 ).
! !

