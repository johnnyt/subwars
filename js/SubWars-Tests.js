smalltalk.addPackage('SubWars-Tests', {});
smalltalk.addClass('LocationTest', smalltalk.TestCase, [], 'SubWars-Tests');
smalltalk.addMethod(
unescape('_testEncoding'),
smalltalk.method({
selector: unescape('testEncoding'),
category: 'tests',
fn: function (){
var self=this;
var loc=nil;
loc=smalltalk.send((smalltalk.Location || Location), "_newLat_lng_", [(37.401119), (-122.149086)]);
smalltalk.send(loc, "_precision_", [(9)]);
smalltalk.send(self, "_assert_equals_", ["9q9hu2ttr", smalltalk.send(loc, "_geoHash", [])]);
return self;},
args: [],
source: unescape('testEncoding%0A%09%7C%20loc%20%7C%0A%09loc%20%3A%3D%20Location%20newLat%3A%2037.401119%20lng%3A%20-122.149086.%0A%09loc%20precision%3A%209.%0A%09self%20assert%3A%20%279q9hu2ttr%27%20equals%3A%20loc%20geoHash.'),
messageSends: ["newLat:lng:", "precision:", "assert:equals:", "geoHash"],
referencedClasses: ["Location"]
}),
smalltalk.LocationTest);

smalltalk.addMethod(
unescape('_testDecoding'),
smalltalk.method({
selector: unescape('testDecoding'),
category: 'tests',
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
return self;},
args: [],
source: unescape('testDecoding%0A%09%7C%20expectedLat%20expectedLng%20loc%20%7C%0A%09expectedLat%20%3A%3D%2037.401119.%0A%09expectedLng%20%3A%3D%20-122.149086.%0A%09loc%20%3A%3D%20Location%20new%20decodeGeoHash%3A%20%279q9hu2ttr%27.%0A%09self%20assert%3A%20%28Math%20abs%3A%20%28expectedLat%20-%20loc%20lat%29%29%20%3C%200.0001%20description%3A%20%28loc%20lat%20asString%2C%20%27%20should%20be%20%27%2C%20expectedLat%20asString%29.%0A%09self%20assert%3A%20%28Math%20abs%3A%20%28expectedLng%20-%20loc%20lng%29%29%20%3C%200.0001%20description%3A%20%28loc%20lng%20asString%2C%20%27%20should%20be%20%27%2C%20expectedLng%20asString%29.'),
messageSends: ["decodeGeoHash:", "new", "assert:description:", unescape("%3C"), "abs:", unescape("-"), "lat", unescape("%2C"), "asString", "lng"],
referencedClasses: ["Location", "Math"]
}),
smalltalk.LocationTest);



