smalltalk.addPackage('SubWars-Tests');
smalltalk.addClass('BinaryPositionConverterTest', smalltalk.TestCase, [], 'SubWars-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testMerge",
category: 'testing',
fn: function (){
var self=this;
var converter;
function $BinaryPositionConverter(){return smalltalk.BinaryPositionConverter||(typeof BinaryPositionConverter=="undefined"?nil:BinaryPositionConverter)}
return smalltalk.withContext(function($ctx1) { 
converter=_st($BinaryPositionConverter())._merge_into_([(0), (0), (0), (0), (0)],[(1), (1), (1), (1), (1)]);
self._assert_equals_(_st(converter)._asString(),"pb");
return self}, function($ctx1) {$ctx1.fill(self,"testMerge",{converter:converter},smalltalk.BinaryPositionConverterTest)})},
args: [],
source: "testMerge\x0a\x09| converter |\x0a\x09converter := BinaryPositionConverter merge: #( 0 0 0 0 0 ) into: #( 1 1 1 1 1 ).\x0a\x09self assert: converter asString equals: 'pb'",
messageSends: ["merge:into:", "assert:equals:", "asString"],
referencedClasses: ["BinaryPositionConverter"]
}),
smalltalk.BinaryPositionConverterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMultiple",
category: 'testing',
fn: function (){
var self=this;
var converter;
function $BinaryPositionConverter(){return smalltalk.BinaryPositionConverter||(typeof BinaryPositionConverter=="undefined"?nil:BinaryPositionConverter)}
return smalltalk.withContext(function($ctx1) { 
converter=_st($BinaryPositionConverter())._newOn_([(0), (0), (0), (1), (1), (0), (0), (1), (0), (0)]);
_st(converter)._nextInteger();
self._assert_equals_(_st(converter)._nextInteger(),(4));
return self}, function($ctx1) {$ctx1.fill(self,"testMultiple",{converter:converter},smalltalk.BinaryPositionConverterTest)})},
args: [],
source: "testMultiple\x0a\x09| converter |\x0a\x09converter := BinaryPositionConverter newOn: #( 0 0 0 1 1 0 0 1 0 0 ).\x0a\x09converter nextInteger. \x22Throw away the first\x22\x0a\x09self assert: converter nextInteger equals: 4",
messageSends: ["newOn:", "nextInteger", "assert:equals:"],
referencedClasses: ["BinaryPositionConverter"]
}),
smalltalk.BinaryPositionConverterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSingle",
category: 'testing',
fn: function (){
var self=this;
var converter;
function $BinaryPositionConverter(){return smalltalk.BinaryPositionConverter||(typeof BinaryPositionConverter=="undefined"?nil:BinaryPositionConverter)}
return smalltalk.withContext(function($ctx1) { 
converter=_st($BinaryPositionConverter())._newOn_([(0), (0), (0), (1), (1)]);
self._assert_equals_(_st(converter)._nextInteger(),(3));
return self}, function($ctx1) {$ctx1.fill(self,"testSingle",{converter:converter},smalltalk.BinaryPositionConverterTest)})},
args: [],
source: "testSingle\x0a\x09| converter |\x0a\x09converter := BinaryPositionConverter newOn: #( 0 0 0 1 1 ).\x0a\x09self assert: converter nextInteger equals: 3",
messageSends: ["newOn:", "assert:equals:", "nextInteger"],
referencedClasses: ["BinaryPositionConverter"]
}),
smalltalk.BinaryPositionConverterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testString",
category: 'testing',
fn: function (){
var self=this;
var converter;
function $BinaryPositionConverter(){return smalltalk.BinaryPositionConverter||(typeof BinaryPositionConverter=="undefined"?nil:BinaryPositionConverter)}
return smalltalk.withContext(function($ctx1) { 
converter=_st($BinaryPositionConverter())._newOn_([(0), (0), (0), (0), (0), (1), (1), (1), (1), (1)]);
self._assert_equals_(_st(converter)._asString(),"0z");
return self}, function($ctx1) {$ctx1.fill(self,"testString",{converter:converter},smalltalk.BinaryPositionConverterTest)})},
args: [],
source: "testString\x0a\x09| converter |\x0a\x09converter := BinaryPositionConverter newOn: #( 0 0 0 0 0 1 1 1 1 1 ).\x0a\x09self assert: converter asString equals: '0z'",
messageSends: ["newOn:", "assert:equals:", "asString"],
referencedClasses: ["BinaryPositionConverter"]
}),
smalltalk.BinaryPositionConverterTest);



smalltalk.addClass('GeoHashTest', smalltalk.TestCase, [], 'SubWars-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "test",
category: 'testing',
fn: function (){
var self=this;
function $GeoHash(){return smalltalk.GeoHash||(typeof GeoHash=="undefined"?nil:GeoHash)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(_st(_st($GeoHash())._encodeLat_lng_((-180),(90)))._hash())._copyFrom_to_((1),(4)),"jbpb");
return self}, function($ctx1) {$ctx1.fill(self,"test",{},smalltalk.GeoHashTest)})},
args: [],
source: "test\x0a\x09self assert: ((GeoHash encodeLat: -180.0 lng: 90.0) hash copyFrom: 1 to: 4) equals: 'jbpb'.",
messageSends: ["assert:equals:", "copyFrom:to:", "hash", "encodeLat:lng:"],
referencedClasses: ["GeoHash"]
}),
smalltalk.GeoHashTest);



smalltalk.addClass('RangedPositionEncoderTest', smalltalk.TestCase, [], 'SubWars-Tests');
smalltalk.RangedPositionEncoderTest.comment="I test the ability to encode a value into a bitstream";
smalltalk.addMethod(
smalltalk.method({
selector: "testBorders",
category: 'testing',
fn: function (){
var self=this;
var encoder;
function $RangedPositionEncoder(){return smalltalk.RangedPositionEncoder||(typeof RangedPositionEncoder=="undefined"?nil:RangedPositionEncoder)}
return smalltalk.withContext(function($ctx1) { 
encoder=_st($RangedPositionEncoder())._newFrom_to_((-180),(180));
_st(encoder)._encode_((-180));
self._assert_equals_(_st(_st(encoder)._bits())._copyFrom_to_((1),(10)),[(0), (0), (0), (0), (0), (0), (0), (0), (0), (0)]);
_st(encoder)._encode_((180));
self._assert_equals_(_st(_st(encoder)._bits())._copyFrom_to_((1),(10)),[(1), (1), (1), (1), (1), (1), (1), (1), (1), (1)]);
return self}, function($ctx1) {$ctx1.fill(self,"testBorders",{encoder:encoder},smalltalk.RangedPositionEncoderTest)})},
args: [],
source: "testBorders\x0a\x09| encoder |\x0a\x09encoder := RangedPositionEncoder newFrom: -180.0 to: 180.0.\x0a\x0a\x09encoder encode: -180.0.\x0a\x09self assert: (encoder bits copyFrom: 1 to: 10) equals: #( 0 0 0 0 0 0 0 0 0 0 ).\x0a\x0a\x09encoder encode: 180.0.\x0a\x09self assert: (encoder bits copyFrom: 1 to: 10) equals: #( 1 1 1 1 1 1 1 1 1 1 ).",
messageSends: ["newFrom:to:", "encode:", "assert:equals:", "copyFrom:to:", "bits"],
referencedClasses: ["RangedPositionEncoder"]
}),
smalltalk.RangedPositionEncoderTest);



