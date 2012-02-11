smalltalk.addPackage('SubWars-Client', {});
smalltalk.addClass('Location', smalltalk.Object, ['lat', 'lng', 'precision', 'boundingMinLat', 'boundingMaxLat', 'boundingMinLng', 'boundingMaxLng', 'geoHash'], 'SubWars-Client');
smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("a%20Location%28%20"), "__comma", [smalltalk.send(self['@lat'], "_asString", [])]), "__comma", [" "]), "__comma", [smalltalk.send(self['@lng'], "_asString", [])]), "__comma", [" "]), "__comma", [smalltalk.send(self, "_geoHash", [])]), "__comma", [unescape("%20%29")]);
return self;}
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_precision_'),
smalltalk.method({
selector: unescape('precision%3A'),
fn: function (anInteger){
var self=this;
self['@precision']=anInteger;
return self;}
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_precision'),
smalltalk.method({
selector: unescape('precision'),
fn: function (){
var self=this;
return self['@precision'];
return self;}
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_lat'),
smalltalk.method({
selector: unescape('lat'),
fn: function (){
var self=this;
return self['@lat'];
return self;}
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_lng'),
smalltalk.method({
selector: unescape('lng'),
fn: function (){
var self=this;
return self['@lng'];
return self;}
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_lng_'),
smalltalk.method({
selector: unescape('lng%3A'),
fn: function (aNumber){
var self=this;
self['@lng']=aNumber;
return self;}
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_lat_'),
smalltalk.method({
selector: unescape('lat%3A'),
fn: function (aNumber){
var self=this;
self['@lat']=aNumber;
return self;}
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
self['@precision']=(7);
return self;}
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_decodeGeoHash_'),
smalltalk.method({
selector: unescape('decodeGeoHash%3A'),
fn: function (aString){
var self=this;
var minLat=nil;
var maxLat=nil;
var minLng=nil;
var maxLng=nil;
var isLongitude=nil;
var hashValue=nil;
var char_=nil;
minLat=(-90);
maxLat=(90);
minLng=(-180);
maxLng=(180);
isLongitude=true;
hashValue=(0);
smalltalk.send(aString, "_do_", [(function(){char_=smalltalk.send(smalltalk.send((typeof arguments == 'undefined' ? nil : arguments), "_at_", [(0)]), "_asLowercase", []);hashValue=((($receiver = smalltalk.send("0123456789bcdefghjkmnpqrstuvwxyz", "_indexOf_", [char_])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]));return smalltalk.send((4), "_to_by_do_", [(0), (-1), (function(bits, bit){bit = eval('(hashValue >' + '> bits) & 1');;((($receiver = isLongitude).klass === smalltalk.Boolean) ? ($receiver ? (function(mid){mid=((($receiver = ((($receiver = maxLng).klass === smalltalk.Number) ? $receiver +minLng : smalltalk.send($receiver, "__plus", [minLng]))).klass === smalltalk.Number) ? $receiver /(2) : smalltalk.send($receiver, "__slash", [(2)]));return ((($receiver = smalltalk.send(bit, "__eq", [(1)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return minLng=mid;})() : (function(){return maxLng=mid;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return minLng=mid;}), (function(){return maxLng=mid;})]));})() : (function(mid){mid=((($receiver = ((($receiver = maxLat).klass === smalltalk.Number) ? $receiver +minLat : smalltalk.send($receiver, "__plus", [minLat]))).klass === smalltalk.Number) ? $receiver /(2) : smalltalk.send($receiver, "__slash", [(2)]));return ((($receiver = smalltalk.send(bit, "__eq", [(1)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return minLat=mid;})() : (function(){return maxLat=mid;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return minLat=mid;}), (function(){return maxLat=mid;})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(mid){mid=((($receiver = ((($receiver = maxLng).klass === smalltalk.Number) ? $receiver +minLng : smalltalk.send($receiver, "__plus", [minLng]))).klass === smalltalk.Number) ? $receiver /(2) : smalltalk.send($receiver, "__slash", [(2)]));return ((($receiver = smalltalk.send(bit, "__eq", [(1)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return minLng=mid;})() : (function(){return maxLng=mid;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return minLng=mid;}), (function(){return maxLng=mid;})]));}), (function(mid){mid=((($receiver = ((($receiver = maxLat).klass === smalltalk.Number) ? $receiver +minLat : smalltalk.send($receiver, "__plus", [minLat]))).klass === smalltalk.Number) ? $receiver /(2) : smalltalk.send($receiver, "__slash", [(2)]));return ((($receiver = smalltalk.send(bit, "__eq", [(1)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return minLat=mid;})() : (function(){return maxLat=mid;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return minLat=mid;}), (function(){return maxLat=mid;})]));})]));return isLongitude=smalltalk.send(isLongitude, "_not", []);})]);})]);
self['@lat']=((($receiver = ((($receiver = minLat).klass === smalltalk.Number) ? $receiver +maxLat : smalltalk.send($receiver, "__plus", [maxLat]))).klass === smalltalk.Number) ? $receiver /(2) : smalltalk.send($receiver, "__slash", [(2)]));
self['@lng']=((($receiver = ((($receiver = minLng).klass === smalltalk.Number) ? $receiver +maxLng : smalltalk.send($receiver, "__plus", [maxLng]))).klass === smalltalk.Number) ? $receiver /(2) : smalltalk.send($receiver, "__slash", [(2)]));
return self;}
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_asGoogleLatLng'),
smalltalk.method({
selector: unescape('asGoogleLatLng'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send((typeof google == 'undefined' ? nil : google), "_maps", []), "_at_", ["LatLng"]), "_newValue_value_", [self['@lat'], self['@lng']]);
return self;}
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_lat_lng_'),
smalltalk.method({
selector: unescape('lat%3Alng%3A'),
fn: function (lat, lng){
var self=this;
self['@lat']=self['@lat'];
self['@lng']=self['@lng'];
smalltalk.send(self, "_updateGeoHash", []);
return self;}
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_updateGeoHash'),
smalltalk.method({
selector: unescape('updateGeoHash'),
fn: function (){
var self=this;
var minLat=nil;
var maxLat=nil;
var minLng=nil;
var maxLng=nil;
var isLongitude=nil;
var chars=nil;
var bits=nil;
var hashValue=nil;
minLat=(-90);
maxLat=(90);
minLng=(-180);
maxLng=(180);
isLongitude=true;
chars=[];
bits=(0);
hashValue=(0);
(function(){while((function(){return ((($receiver = smalltalk.send(chars, "_size", [])).klass === smalltalk.Number) ? $receiver <self['@precision'] : smalltalk.send($receiver, "__lt", [self['@precision']]));})()) {(function(){((($receiver = isLongitude).klass === smalltalk.Boolean) ? ($receiver ? (function(mid){mid=((($receiver = ((($receiver = maxLng).klass === smalltalk.Number) ? $receiver +minLng : smalltalk.send($receiver, "__plus", [minLng]))).klass === smalltalk.Number) ? $receiver /(2) : smalltalk.send($receiver, "__slash", [(2)]));return ((($receiver = ((($receiver = self['@lng']).klass === smalltalk.Number) ? $receiver >mid : smalltalk.send($receiver, "__gt", [mid]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){hashValue = (hashValue << 1) + 1;;return minLng=mid;})() : (function(){hashValue = (hashValue << 1) + 0;;return maxLng=mid;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){hashValue = (hashValue << 1) + 1;;return minLng=mid;}), (function(){hashValue = (hashValue << 1) + 0;;return maxLng=mid;})]));})() : (function(mid){mid=((($receiver = ((($receiver = maxLat).klass === smalltalk.Number) ? $receiver +minLat : smalltalk.send($receiver, "__plus", [minLat]))).klass === smalltalk.Number) ? $receiver /(2) : smalltalk.send($receiver, "__slash", [(2)]));return ((($receiver = ((($receiver = self['@lat']).klass === smalltalk.Number) ? $receiver >mid : smalltalk.send($receiver, "__gt", [mid]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){hashValue = (hashValue << 1) + 1;;return minLat=mid;})() : (function(){hashValue = (hashValue << 1) + 0;;return maxLat=mid;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){hashValue = (hashValue << 1) + 1;;return minLat=mid;}), (function(){hashValue = (hashValue << 1) + 0;;return maxLat=mid;})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(mid){mid=((($receiver = ((($receiver = maxLng).klass === smalltalk.Number) ? $receiver +minLng : smalltalk.send($receiver, "__plus", [minLng]))).klass === smalltalk.Number) ? $receiver /(2) : smalltalk.send($receiver, "__slash", [(2)]));return ((($receiver = ((($receiver = self['@lng']).klass === smalltalk.Number) ? $receiver >mid : smalltalk.send($receiver, "__gt", [mid]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){hashValue = (hashValue << 1) + 1;;return minLng=mid;})() : (function(){hashValue = (hashValue << 1) + 0;;return maxLng=mid;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){hashValue = (hashValue << 1) + 1;;return minLng=mid;}), (function(){hashValue = (hashValue << 1) + 0;;return maxLng=mid;})]));}), (function(mid){mid=((($receiver = ((($receiver = maxLat).klass === smalltalk.Number) ? $receiver +minLat : smalltalk.send($receiver, "__plus", [minLat]))).klass === smalltalk.Number) ? $receiver /(2) : smalltalk.send($receiver, "__slash", [(2)]));return ((($receiver = ((($receiver = self['@lat']).klass === smalltalk.Number) ? $receiver >mid : smalltalk.send($receiver, "__gt", [mid]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){hashValue = (hashValue << 1) + 1;;return minLat=mid;})() : (function(){hashValue = (hashValue << 1) + 0;;return maxLat=mid;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){hashValue = (hashValue << 1) + 1;;return minLat=mid;}), (function(){hashValue = (hashValue << 1) + 0;;return maxLat=mid;})]));})]));isLongitude=smalltalk.send(isLongitude, "_not", []);bits=((($receiver = bits).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));return ((($receiver = smalltalk.send(bits, "__eq", [(5)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(chars, "_add_", [smalltalk.send("0123456789bcdefghjkmnpqrstuvwxyz", "_at_", [((($receiver = hashValue).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))])]);bits=(0);return hashValue=(0);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(chars, "_add_", [smalltalk.send("0123456789bcdefghjkmnpqrstuvwxyz", "_at_", [((($receiver = hashValue).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))])]);bits=(0);return hashValue=(0);})]));})()}})();
self['@boundingMinLat']=minLat;
self['@boundingMaxLat']=maxLat;
self['@boundingMinLng']=minLng;
self['@boundingMaxLng']=maxLng;
self['@geoHash']=smalltalk.send(chars, "_join_", [""]);
return self;}
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_geoHash'),
smalltalk.method({
selector: unescape('geoHash'),
fn: function (){
var self=this;
return (($receiver = self['@geoHash']) == nil || $receiver == undefined) ? (function(){smalltalk.send(self, "_updateGeoHash", []);return self['@geoHash'];})() : $receiver;
return self;}
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_boundingMinLat'),
smalltalk.method({
selector: unescape('boundingMinLat'),
fn: function (){
var self=this;
return self['@boundingMinLat'];
return self;}
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_boundingMinLng'),
smalltalk.method({
selector: unescape('boundingMinLng'),
fn: function (){
var self=this;
return self['@boundingMinLng'];
return self;}
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_boundingMaxLng'),
smalltalk.method({
selector: unescape('boundingMaxLng'),
fn: function (){
var self=this;
return self['@boundingMaxLng'];
return self;}
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_boundingMaxLat'),
smalltalk.method({
selector: unescape('boundingMaxLat'),
fn: function (){
var self=this;
return self['@boundingMaxLat'];
return self;}
}),
smalltalk.Location);


smalltalk.addMethod(
unescape('_decode_'),
smalltalk.method({
selector: unescape('decode%3A'),
fn: function (aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_decode_", [aString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Location.klass);

smalltalk.addMethod(
unescape('_newLat_lng_'),
smalltalk.method({
selector: unescape('newLat%3Alng%3A'),
fn: function (aLatitude, aLongitude){
var self=this;
return (function($rec){smalltalk.send($rec, "_lat_", [aLatitude]);return smalltalk.send($rec, "_lng_", [aLongitude]);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Location.klass);

smalltalk.addMethod(
unescape('_newAtPARC'),
smalltalk.method({
selector: unescape('newAtPARC'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_lat_", [(37.401119)]);return smalltalk.send($rec, "_lng_", [(-122.149086)]);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Location.klass);


smalltalk.addClass('FayeClient', smalltalk.Object, ['faye', 'client'], 'SubWars-Client');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
var loc=nil;
var url=nil;
(self['@faye']=smalltalk.send((typeof window == 'undefined' ? nil : window), "_at_", ["Faye"]));
smalltalk.send(smalltalk.send(self['@faye'], "_at_", ["Logging"]), "_at_put_", ["logLevel", "info"]);
smalltalk.send(self['@faye'], "_at_put_", ["logger", (function(msg){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [msg]);})]);
(loc=smalltalk.send((typeof window == 'undefined' ? nil : window), "_location", []));
(url=smalltalk.send(smalltalk.send(smalltalk.send((typeof location == 'undefined' ? nil : location), "_protocol", []), "__comma", [unescape("//")]), "__comma", [smalltalk.send((typeof location == 'undefined' ? nil : location), "_hostname", [])]));
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(loc, "_port", []), "_asString", []), "__eq", [""])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (url=smalltalk.send(smalltalk.send(url, "__comma", [":"]), "__comma", [smalltalk.send(smalltalk.send(loc, "_port", []), "_asString", [])]));})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (url=smalltalk.send(smalltalk.send(url, "__comma", [":"]), "__comma", [smalltalk.send(smalltalk.send(loc, "_port", []), "_asString", [])]));})]));
(url=smalltalk.send(url, "__comma", [unescape("/faye")]));
(self['@client']=smalltalk.send(smalltalk.send(self['@faye'], "_at_", ["Client"]), "_newValue_", [url]));
smalltalk.send(self['@client'], "_bind_do_", ["transport:down", (function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["Transport down"]);})]);
smalltalk.send(self['@client'], "_bind_do_", ["transport:up", (function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["Transport up"]);})]);
smalltalk.send(self['@client'], "_subscribe_do_", [unescape("/chat"), (function(msg){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [msg]);})]);
return self;}
}),
smalltalk.FayeClient);

smalltalk.addMethod(
unescape('_chat_'),
smalltalk.method({
selector: unescape('chat%3A'),
fn: function (aString){
var self=this;
smalltalk.send(self['@client'], "_publish_val_", [unescape("/chat"), aString]);
return self;}
}),
smalltalk.FayeClient);

smalltalk.addMethod(
unescape('_disconnect'),
smalltalk.method({
selector: unescape('disconnect'),
fn: function (){
var self=this;
(($receiver = self['@client']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@client'], "_disconnect", []);})() : nil;
return self;}
}),
smalltalk.FayeClient);



smalltalk.addClass('SubWarsApp', smalltalk.Widget, ['div', 'client', 'geo', 'currentLocation', 'brand', 'nav', 'tools', 'map', 'polymaps', 'consoleForm'], 'SubWars-Client');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
(self['@client']=smalltalk.send((smalltalk.FayeClient || FayeClient), "_new", []));
(self['@geo']=smalltalk.send((smalltalk.GeoLocation || GeoLocation), "_new", []));
(self['@currentLocation']=smalltalk.send((smalltalk.Location || Location), "_newAtPARC", []));
(self['@polymaps']=smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_org", []), "_polymaps", []));
return self;}
}),
smalltalk.SubWarsApp);

smalltalk.addMethod(
unescape('_pageClasses'),
smalltalk.method({
selector: unescape('pageClasses'),
fn: function (){
var self=this;
return [(smalltalk.MapPage || MapPage)];
return self;}
}),
smalltalk.SubWarsApp);

smalltalk.addMethod(
unescape('_renderNavOn_'),
smalltalk.method({
selector: unescape('renderNavOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("navbar%20navbar-fixed-top")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("navbar-inner")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("container-fluid")]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", [unescape("btn%20btn-navbar")]);smalltalk.send($rec, "_at_put_", [unescape("data-toggle"), "collapse"]);smalltalk.send($rec, "_at_put_", [unescape("data-target"), unescape(".nav-collapse")]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_span", []), "_class_", [unescape("icon-bar")]);smalltalk.send(smalltalk.send(html, "_span", []), "_class_", [unescape("icon-bar")]);return smalltalk.send(smalltalk.send(html, "_span", []), "_class_", [unescape("icon-bar")]);})]);})(smalltalk.send(html, "_a", []));(self['@brand']=(function($rec){smalltalk.send($rec, "_class_", ["brand"]);smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_with_", ["SubWars"]);})(smalltalk.send(html, "_a", [])));return (function($rec){smalltalk.send($rec, "_class_", [unescape("nav-collapse")]);return smalltalk.send($rec, "_with_", [(function(){(self['@nav']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["nav"]));return (self['@tools']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", [unescape("nav%20pull-right")]));})]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.SubWarsApp);

smalltalk.addMethod(
unescape('_updateTools'),
smalltalk.method({
selector: unescape('updateTools'),
fn: function (){
var self=this;
smalltalk.send(self['@tools'], "_contents_", [(function(html){return (function($rec){smalltalk.send($rec, "_class_", ["dropdown"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_class_", [unescape("dropdown-toggle")]);smalltalk.send($rec, "_at_put_", [unescape("data-toggle"), "dropdown"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_with_", ["Tools "]);return smalltalk.send(smalltalk.send(html, "_tag_", ["b"]), "_class_", ["caret"]);})]);})(smalltalk.send(html, "_a", []));return (function($rec){smalltalk.send($rec, "_class_", [unescape("dropdown-menu")]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", ["Toggle IDE"]);smalltalk.send($rec, "_href_", [unescape("%23ide")]);return smalltalk.send($rec, "_onClick_", [(function(e){smalltalk.send(e, "_preventDefault", []);return smalltalk.send((typeof window == 'undefined' ? nil : window), "_toggleAmberIDE", []);})]);})(smalltalk.send(html, "_a", []));})]);smalltalk.send(smalltalk.send(html, "_li", []), "_class_", ["divider"]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", ["Browse SubWars"]);smalltalk.send($rec, "_href_", [unescape("%23browse")]);return smalltalk.send($rec, "_onClick_", [(function(e){smalltalk.send(e, "_preventDefault", []);return smalltalk.send((smalltalk.Browser || Browser), "_openOn_", [(smalltalk.SubWarsApp || SubWarsApp)]);})]);})(smalltalk.send(html, "_a", []));})]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", ["Inspect SubWars"]);smalltalk.send($rec, "_href_", [unescape("%23inspect")]);return smalltalk.send($rec, "_onClick_", [(function(e){smalltalk.send(e, "_preventDefault", []);return smalltalk.send(smalltalk.send((smalltalk.SubWarsApp || SubWarsApp), "_instance", []), "_inspect", []);})]);})(smalltalk.send(html, "_a", []));})]);return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", ["Restart SubWars"]);smalltalk.send($rec, "_href_", [unescape("%23restart")]);return smalltalk.send($rec, "_onClick_", [(function(e){smalltalk.send(e, "_preventDefault", []);return smalltalk.send((smalltalk.SubWarsApp || SubWarsApp), "_restart", []);})]);})(smalltalk.send(html, "_a", []));})]);})]);})(smalltalk.send(html, "_ul", []));})]);})(smalltalk.send(html, "_li", []));})]);
return self;}
}),
smalltalk.SubWarsApp);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(self['@div']=(function($rec){smalltalk.send($rec, "_id_", ["subwars"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_renderNavOn_", [html]);smalltalk.send($rec, "_renderMapOn_", [html]);smalltalk.send($rec, "_update", []);return smalltalk.send($rec, "_startTracking", []);})(self);})]);})(smalltalk.send(html, "_div", [])));
return self;}
}),
smalltalk.SubWarsApp);

smalltalk.addMethod(
unescape('_show'),
smalltalk.method({
selector: unescape('show'),
fn: function (){
var self=this;
smalltalk.send(self, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;}
}),
smalltalk.SubWarsApp);

smalltalk.addMethod(
unescape('_update'),
smalltalk.method({
selector: unescape('update'),
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_updateNav", []);return smalltalk.send($rec, "_updateTools", []);})(self);
return self;}
}),
smalltalk.SubWarsApp);

smalltalk.addMethod(
unescape('_renderMapOn_'),
smalltalk.method({
selector: unescape('renderMapOn%3A'),
fn: function (html){
var self=this;
var svg=nil;
smalltalk.send(smalltalk.send(html, "_div", []), "_id_", ["map"]);
svg = document.getElementById("map").appendChild(org.polymaps.svg("svg"));
(self['@map']=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_org", []), "_polymaps", []), "_map", []), "_container_", [svg]));
smalltalk.send(self['@map'], "_zoom_", [(17)]);
self['@map'].add(org.polymaps.image()
		.url(org.polymaps.url("http://{S}tile.cloudmade.com"
		+ "/4dc7790c1c744bdab4909fdb857d642d" // subwars
		+ "/52152/256/{Z}/{X}/{Y}.png")
		.hosts(["a.", "b.", "c.", ""])));;
return self;}
}),
smalltalk.SubWarsApp);

smalltalk.addMethod(
unescape('_startTracking'),
smalltalk.method({
selector: unescape('startTracking'),
fn: function (){
var self=this;
smalltalk.send(self['@geo'], "_watchPosition_", [(function(position){return smalltalk.send(self, "_updateLat_lng_", [smalltalk.send(smalltalk.send(position, "_coords", []), "_latitude", []), smalltalk.send(smalltalk.send(position, "_coords", []), "_longitude", [])]);})]);
return self;}
}),
smalltalk.SubWarsApp);

smalltalk.addMethod(
unescape('_stopTracking'),
smalltalk.method({
selector: unescape('stopTracking'),
fn: function (){
var self=this;
smalltalk.send(self['@geo'], "_clearWatch", []);
return self;}
}),
smalltalk.SubWarsApp);

smalltalk.addMethod(
unescape('_destroy'),
smalltalk.method({
selector: unescape('destroy'),
fn: function (){
var self=this;
(($receiver = self['@geo']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@geo'], "_clearWatch", []);})() : nil;
(($receiver = self['@client']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@client'], "_disconnect", []);})() : nil;
(($receiver = self['@div']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_remove", []);})() : nil;
return self;}
}),
smalltalk.SubWarsApp);

smalltalk.addMethod(
unescape('_updateNav'),
smalltalk.method({
selector: unescape('updateNav'),
fn: function (){
var self=this;
smalltalk.send(self['@nav'], "_contents_", [(function(html){smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", ["IDE"]);smalltalk.send($rec, "_href_", [unescape("%23ide")]);return smalltalk.send($rec, "_onClick_", [(function(e){smalltalk.send(e, "_preventDefault", []);return smalltalk.send((smalltalk.Browser || Browser), "_openOn_", [(smalltalk.SubWarsApp || SubWarsApp)]);})]);})(smalltalk.send(html, "_a", []));})]);(self['@consoleForm']=(function($rec){smalltalk.send($rec, "_class_", [unescape("form-search%20navbar-search%20pull-left")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_type_", ["text"]);smalltalk.send($rec, "_id_", ["console"]);smalltalk.send($rec, "_placeholder_", ["Chat"]);return smalltalk.send($rec, "_class_", [unescape("search-query%20span1")]);})(smalltalk.send(html, "_input", []));})]);})(smalltalk.send(html, "_form", [])));return smalltalk.send(smalltalk.send(self['@consoleForm'], "_asJQuery", []), "_bind_do_", ["submit", (function(e, input){smalltalk.send(e, "_preventDefault", []);(input=smalltalk.send(unescape("%23console"), "_asJQuery", []));smalltalk.send(self, "_processConsoleCommand_", [smalltalk.send(input, "_val", [])]);return smalltalk.send(input, "_val_", [""]);})]);})]);
return self;}
}),
smalltalk.SubWarsApp);

smalltalk.addMethod(
unescape('_processConsoleCommand_'),
smalltalk.method({
selector: unescape('processConsoleCommand%3A'),
fn: function (aCommandString){
var self=this;
((($receiver = smalltalk.send(aCommandString, "_match_", [unescape("%5Egh%20")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["I should lookup the GeoHash you provided"]);})() : (function(){return smalltalk.send(self['@client'], "_chat_", [aCommandString]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["I should lookup the GeoHash you provided"]);}), (function(){return smalltalk.send(self['@client'], "_chat_", [aCommandString]);})]));
return self;}
}),
smalltalk.SubWarsApp);

smalltalk.addMethod(
unescape('_updateLat_lng_'),
smalltalk.method({
selector: unescape('updateLat%3Alng%3A'),
fn: function (aLat, aLng){
var self=this;
var loc=nil;
var geoJson=nil;
var coord=nil;
(loc=smalltalk.send((smalltalk.Location || Location), "_newLat_lng_", [aLat, aLng]));
smalltalk.send(loc, "_updateGeoHash", []);
smalltalk.send(self['@map'], "_center_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("lat", "__minus_gt", [aLat]),smalltalk.send("lon", "__minus_gt", [aLng])])]);
(coord=smalltalk.send((smalltalk.Array || Array), "_new_", [(5)]));
(function($rec){smalltalk.send($rec, "_at_put_", [(1), smalltalk.send((smalltalk.Array || Array), "_with_with_", [smalltalk.send(loc, "_boundingMinLng", []), smalltalk.send(loc, "_boundingMinLat", [])])]);smalltalk.send($rec, "_at_put_", [(2), smalltalk.send((smalltalk.Array || Array), "_with_with_", [smalltalk.send(loc, "_boundingMaxLng", []), smalltalk.send(loc, "_boundingMinLat", [])])]);smalltalk.send($rec, "_at_put_", [(3), smalltalk.send((smalltalk.Array || Array), "_with_with_", [smalltalk.send(loc, "_boundingMaxLng", []), smalltalk.send(loc, "_boundingMaxLat", [])])]);smalltalk.send($rec, "_at_put_", [(4), smalltalk.send((smalltalk.Array || Array), "_with_with_", [smalltalk.send(loc, "_boundingMinLng", []), smalltalk.send(loc, "_boundingMaxLat", [])])]);return smalltalk.send($rec, "_at_put_", [(5), smalltalk.send((smalltalk.Array || Array), "_with_with_", [smalltalk.send(loc, "_boundingMinLng", []), smalltalk.send(loc, "_boundingMinLat", [])])]);})(coord);
(geoJson=(function($rec){smalltalk.send($rec, "_features_", [smalltalk.send((smalltalk.Array || Array), "_new_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("geometry", "__minus_gt", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("coordinates", "__minus_gt", [coord]),smalltalk.send("type", "__minus_gt", ["LineString"])])])])])]);return smalltalk.send($rec, "_on_do_", ["load", (function(e){return smalltalk.send(smalltalk.send(e, "_features", []), "_do_", [(function(feature){return smalltalk.send(smalltalk.send(feature, "_element", []), "_setAttribute_val_", ["style", unescape("stroke%3A%20red%3B")]);})]);})]);})(smalltalk.send(self['@polymaps'], "_geoJson", [])));
smalltalk.send(self['@map'], "_add_", [geoJson]);
return self;}
}),
smalltalk.SubWarsApp);


smalltalk.SubWarsApp.klass.iVarNames = ['instance'];
smalltalk.addMethod(
unescape('_start'),
smalltalk.method({
selector: unescape('start'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_show", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_instance", []));
return self;}
}),
smalltalk.SubWarsApp.klass);

smalltalk.addMethod(
unescape('_instance'),
smalltalk.method({
selector: unescape('instance'),
fn: function (){
var self=this;
return (($receiver = self['@instance']) == nil || $receiver == undefined) ? (function(){return (self['@instance']=smalltalk.send(self, "_new", []));})() : $receiver;
return self;}
}),
smalltalk.SubWarsApp.klass);

smalltalk.addMethod(
unescape('_restart'),
smalltalk.method({
selector: unescape('restart'),
fn: function (){
var self=this;
(($receiver = smalltalk.send(self, "_instance", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_instance", []), "_destroy", []);})() : nil;
(self['@instance']=nil);
return smalltalk.send(self, "_start", []);
return self;}
}),
smalltalk.SubWarsApp.klass);


