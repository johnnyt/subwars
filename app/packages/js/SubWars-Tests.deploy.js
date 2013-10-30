smalltalk.addPackage('SubWars-Tests');
smalltalk.addClass('BinaryPositionConverterTest', smalltalk.TestCase, [], 'SubWars-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testMerge",
fn: function (){
var self=this;
var converter;
function $BinaryPositionConverter(){return smalltalk.BinaryPositionConverter||(typeof BinaryPositionConverter=="undefined"?nil:BinaryPositionConverter)}
return smalltalk.withContext(function($ctx1) { 
converter=_st($BinaryPositionConverter())._merge_into_([(0), (0), (0), (0), (0)],[(1), (1), (1), (1), (1)]);
self._assert_equals_(_st(converter)._asString(),"pb");
return self}, function($ctx1) {$ctx1.fill(self,"testMerge",{converter:converter},smalltalk.BinaryPositionConverterTest)})},
messageSends: ["merge:into:", "assert:equals:", "asString"]}),
smalltalk.BinaryPositionConverterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMultiple",
fn: function (){
var self=this;
var converter;
function $BinaryPositionConverter(){return smalltalk.BinaryPositionConverter||(typeof BinaryPositionConverter=="undefined"?nil:BinaryPositionConverter)}
return smalltalk.withContext(function($ctx1) { 
converter=_st($BinaryPositionConverter())._newOn_([(0), (0), (0), (1), (1), (0), (0), (1), (0), (0)]);
_st(converter)._nextInteger();
self._assert_equals_(_st(converter)._nextInteger(),(4));
return self}, function($ctx1) {$ctx1.fill(self,"testMultiple",{converter:converter},smalltalk.BinaryPositionConverterTest)})},
messageSends: ["newOn:", "nextInteger", "assert:equals:"]}),
smalltalk.BinaryPositionConverterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSingle",
fn: function (){
var self=this;
var converter;
function $BinaryPositionConverter(){return smalltalk.BinaryPositionConverter||(typeof BinaryPositionConverter=="undefined"?nil:BinaryPositionConverter)}
return smalltalk.withContext(function($ctx1) { 
converter=_st($BinaryPositionConverter())._newOn_([(0), (0), (0), (1), (1)]);
self._assert_equals_(_st(converter)._nextInteger(),(3));
return self}, function($ctx1) {$ctx1.fill(self,"testSingle",{converter:converter},smalltalk.BinaryPositionConverterTest)})},
messageSends: ["newOn:", "assert:equals:", "nextInteger"]}),
smalltalk.BinaryPositionConverterTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testString",
fn: function (){
var self=this;
var converter;
function $BinaryPositionConverter(){return smalltalk.BinaryPositionConverter||(typeof BinaryPositionConverter=="undefined"?nil:BinaryPositionConverter)}
return smalltalk.withContext(function($ctx1) { 
converter=_st($BinaryPositionConverter())._newOn_([(0), (0), (0), (0), (0), (1), (1), (1), (1), (1)]);
self._assert_equals_(_st(converter)._asString(),"0z");
return self}, function($ctx1) {$ctx1.fill(self,"testString",{converter:converter},smalltalk.BinaryPositionConverterTest)})},
messageSends: ["newOn:", "assert:equals:", "asString"]}),
smalltalk.BinaryPositionConverterTest);



smalltalk.addClass('GeoHashTest', smalltalk.TestCase, [], 'SubWars-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "test",
fn: function (){
var self=this;
function $GeoHash(){return smalltalk.GeoHash||(typeof GeoHash=="undefined"?nil:GeoHash)}
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(_st(_st($GeoHash())._encodeLat_lng_((-180),(90)))._hash())._copyFrom_to_((1),(4)),"jbpb");
return self}, function($ctx1) {$ctx1.fill(self,"test",{},smalltalk.GeoHashTest)})},
messageSends: ["assert:equals:", "copyFrom:to:", "hash", "encodeLat:lng:"]}),
smalltalk.GeoHashTest);



smalltalk.addClass('RangedPositionEncoderTest', smalltalk.TestCase, [], 'SubWars-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testBorders",
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
messageSends: ["newFrom:to:", "encode:", "assert:equals:", "copyFrom:to:", "bits"]}),
smalltalk.RangedPositionEncoderTest);



