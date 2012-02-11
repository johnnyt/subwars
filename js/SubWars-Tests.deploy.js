smalltalk.addPackage('SubWars-Tests', {});
smalltalk.addClass('LocationTest', smalltalk.TestCase, [], 'SubWars-Tests');
smalltalk.addMethod(
unescape('_testEncoding'),
smalltalk.method({
selector: unescape('testEncoding'),
fn: function (){
var self=this;
var loc=nil;
loc=smalltalk.send((smalltalk.Location || Location), "_newLat_lng_", [(37.401119), (-122.149086)]);
smalltalk.send(loc, "_precision_", [(9)]);
smalltalk.send(self, "_assert_equals_", ["9q9hu2ttr", smalltalk.send(loc, "_geoHash", [])]);
return self;}
}),
smalltalk.LocationTest);

smalltalk.addMethod(
unescape('_testDecoding'),
smalltalk.method({
selector: unescape('testDecoding'),
fn: function (){
var self=this;
var expectedLat=nil;
var expectedLng=nil;
var loc=nil;
expectedLat=(37.401119);
expectedLng=(-122.149086);
loc=smalltalk.send(smalltalk.send((smalltalk.Location || Location), "_new", []), "_decodeGeoHash_", ["9q9hu2ttr"]);
smalltalk.send(self, "_assert_description_", [((($receiver = smalltalk.send((smalltalk.Math || Math), "_abs_", [((($receiver = expectedLat).klass === smalltalk.Number) ? $receiver -smalltalk.send(loc, "_lat", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(loc, "_lat", [])]))])).klass === smalltalk.Number) ? $receiver <(0.1) : smalltalk.send($receiver, "__lt", [(0.1)])), smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(loc, "_lat", []), "_asString", []), "__comma", [" should be "]), "__comma", [smalltalk.send(expectedLat, "_asString", [])])]);
smalltalk.send(self, "_assert_description_", [((($receiver = smalltalk.send((smalltalk.Math || Math), "_abs_", [((($receiver = expectedLng).klass === smalltalk.Number) ? $receiver -smalltalk.send(loc, "_lng", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(loc, "_lng", [])]))])).klass === smalltalk.Number) ? $receiver <(0.1) : smalltalk.send($receiver, "__lt", [(0.1)])), smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(loc, "_lng", []), "_asString", []), "__comma", [" should be "]), "__comma", [smalltalk.send(expectedLng, "_asString", [])])]);
return self;}
}),
smalltalk.LocationTest);



