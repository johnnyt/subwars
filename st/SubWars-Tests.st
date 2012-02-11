Smalltalk current createPackage: 'SubWars-Tests' properties: #{}!
TestCase subclass: #LocationTest
	instanceVariableNames: ''
	category: 'SubWars-Tests'!

!LocationTest methodsFor: 'tests'!

testEncoding
	| loc |
	loc := Location newLat: 37.401119 lng: -122.149086.
	loc precision: 9.
	self assert: '9q9hu2ttr' equals: loc geoHash.
!

testDecoding
	| expectedLat expectedLng loc |
	expectedLat := 37.401119.
	expectedLng := -122.149086.
	loc := Location new decodeGeoHash: '9q9hu2ttr'.
	self assert: (Math abs: (expectedLat - loc lat)) < 0.0001 description: (loc lat asString, ' should be ', expectedLat asString).
	self assert: (Math abs: (expectedLng - loc lng)) < 0.0001 description: (loc lng asString, ' should be ', expectedLng asString).
! !

