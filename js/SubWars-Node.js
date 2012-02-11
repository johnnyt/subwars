smalltalk.addPackage('SubWars-Node', {});
smalltalk.addClass('WebServer', smalltalk.Object, ['port', 'app', 'dirname', 'faye', 'app', 'express', 'bayeux', 'fs'], 'SubWars-Node');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
self['@dirname'] = __dirname;
(self['@port']=smalltalk.send(smalltalk.send((typeof process == 'undefined' ? nil : process), "_env", []), "_at_", ["PORT"]));
(($receiver = self['@port']) == nil || $receiver == undefined) ? (function(){return (self['@port']=(5000));})() : $receiver;
(self['@fs']=smalltalk.send(self, "_require_", ["fs"]));
(self['@express']=smalltalk.send(self, "_require_", ["express"]));
(self['@faye']=smalltalk.send(self, "_require_", [unescape("./lib/faye-node.js")]));
(self['@app']=smalltalk.send(self['@express'], "_createServer", []));
(self['@bayeux']=smalltalk.send(smalltalk.send(self['@faye'], "_at_", ["NodeAdapter"]), "_newValue_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("mount", "__minus_gt", [unescape("/faye")]),smalltalk.send("timeout", "__minus_gt", [(45)])])]));
smalltalk.send(self['@bayeux'], "_attach_", [self['@app']]);
(function($rec){smalltalk.send($rec, "_configure", []);return smalltalk.send($rec, "_initializeRoutes", []);})(self);
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09%3Cself%5B%27@dirname%27%5D%20%3D%20__dirname%3E.%0A%0A%09port%20%3A%3D%20process%20env%20at%3A%20%27PORT%27.%20%22Heroku%20will%20provide%20a%20port%20in%20production%22%0A%09port%20ifNil%3A%20%5B%20port%20%3A%3D%205000%20%5D.%0A%0A%09fs%20%3A%3D%20self%20require%3A%20%27fs%27.%0A%09express%20%3A%3D%20self%20require%3A%20%27express%27.%0A%09faye%20%3A%3D%20self%20require%3A%20%27./lib/faye-node.js%27.%0A%09app%20%3A%3D%20express%20createServer.%0A%09bayeux%20%3A%3D%20%28faye%20at%3A%20%27NodeAdapter%27%29%20newValue%3A%20%23%7B%20%27mount%27%20-%3E%20%27/faye%27%20.%20%27timeout%27%20-%3E%2045%20%7D.%0A%09bayeux%20attach%3A%20app.%0A%09%0A%09self%0A%09%09configure%3B%0A%09%09initializeRoutes.'),
messageSends: ["initialize", "at:", "env", "ifNil:", "require:", "createServer", "newValue:", unescape("-%3E"), "attach:", "configure", "initializeRoutes"],
referencedClasses: []
}),
smalltalk.WebServer);

smalltalk.addMethod(
unescape('_start'),
smalltalk.method({
selector: unescape('start'),
category: 'starting',
fn: function (){
var self=this;
smalltalk.send(self['@app'], "_listen_do_", [smalltalk.send(self['@port'], "_asString", []), (function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send("Listening on port: ", "__comma", [smalltalk.send(self['@port'], "_asString", [])])]);})]);
return self;},
args: [],
source: unescape('start%0A%09app%20listen%3A%20port%20asString%20do%3A%20%5B%0A%09%09console%20log%3A%20%27Listening%20on%20port%3A%20%27%2C%20port%20asString%20%5D'),
messageSends: ["listen:do:", "asString", "log:", unescape("%2C")],
referencedClasses: []
}),
smalltalk.WebServer);

smalltalk.addMethod(
unescape('_initializeRoutes'),
smalltalk.method({
selector: unescape('initializeRoutes'),
category: 'initialization',
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_get_do_", [unescape("/"), (function(req, res){return smalltalk.send(res, "_render_", ["index"]);})]);return smalltalk.send($rec, "_put_do_", [unescape("/*"), (function(req, res){return smalltalk.send(self, "_handlePUT_respondTo_", [req, res]);})]);})(self['@app']);
return self;},
args: [],
source: unescape('initializeRoutes%0A%09app%0A%09%09get%3A%20%27/%27%20do%3A%20%5B%20%3Areq%20%3Ares%20%7C%20res%20render%3A%20%27index%27%20%5D%3B%0A%09%09put%3A%20%27/*%27%20do%3A%20%5B%20%3Areq%20%3Ares%20%7C%20self%20handlePUT%3A%20req%20respondTo%3A%20res%20%5D'),
messageSends: ["get:do:", "render:", "put:do:", "handlePUT:respondTo:"],
referencedClasses: []
}),
smalltalk.WebServer);

smalltalk.addMethod(
unescape('_configure'),
smalltalk.method({
selector: unescape('configure'),
category: 'initialization',
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_configure_", [(function(){return (function($rec){smalltalk.send($rec, "_set_val_", ["view options", smalltalk.HashedCollection._fromPairs_([smalltalk.send("layout", "__minus_gt", [false])])]);smalltalk.send($rec, "_set_val_", ["view engine", "jade"]);smalltalk.send($rec, "_use_", [smalltalk.send(self['@express'], "_logger", [])]);smalltalk.send($rec, "_use_", [smalltalk.send(self['@express'], "_static_", [smalltalk.send(self['@dirname'], "__comma", [unescape("/public")])])]);return smalltalk.send($rec, "_use_", [smalltalk.send(self['@app'], "_at_", ["router"])]);})(self['@app']);})]);smalltalk.send($rec, "_configure_with_", ["development", (function(){return smalltalk.send(self['@app'], "_use_", [smalltalk.send(self['@express'], "_errorHandler_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("dumpExceptions", "__minus_gt", [true]),smalltalk.send("showStack", "__minus_gt", [true])])])]);})]);return smalltalk.send($rec, "_configure_with_", ["production", (function(){return smalltalk.send(self['@app'], "_use_", [smalltalk.send(self['@express'], "_errorHandler", [])]);})]);})(self['@app']);
return self;},
args: [],
source: unescape('configure%0A%09app%20configure%3A%20%5B%20app%0A%09%09set%3A%20%27view%20options%27%20val%3A%20%23%7B%20%27layout%27%20-%3E%20false%20%7D%3B%0A%09%09set%3A%20%27view%20engine%27%20val%3A%20%27jade%27%3B%0A%09%09use%3A%20express%20logger%3B%0A%09%09use%3A%20%28express%20static%3A%20dirname%2C%20%27/public%27%29%3B%0A%09%09use%3A%20%28app%20at%3A%20%27router%27%29%20%5D%3B%0A%0A%09configure%3A%20%27development%27%20with%3A%20%5B%20app%0A%09%09use%3A%20%28express%20errorHandler%3A%20%23%7B%20%27dumpExceptions%27%20-%3E%20true%20.%20%27showStack%27%20-%3E%20true%20%7D%29%20%5D%3B%0A%0A%09configure%3A%20%27production%27%20with%3A%20%5B%20app%0A%09%09use%3A%20%28express%20errorHandler%29%20%5D'),
messageSends: ["configure:", "set:val:", unescape("-%3E"), "use:", "logger", "static:", unescape("%2C"), "at:", "configure:with:", "errorHandler:", "errorHandler"],
referencedClasses: []
}),
smalltalk.WebServer);

smalltalk.addMethod(
unescape('_handlePUT_respondTo_'),
smalltalk.method({
selector: unescape('handlePUT%3ArespondTo%3A'),
category: 'request handling',
fn: function (aRequest, aResponse){
var self=this;
var path=nil;
var stream=nil;
(path=smalltalk.send(".", "__comma", [smalltalk.send(smalltalk.send(aRequest, "_url", []), "_asString", [])]));
(stream=smalltalk.send(self['@fs'], "_createWriteStream_", [path]));
(function($rec){smalltalk.send($rec, "_setEncoding_", ["utf8"]);smalltalk.send($rec, "_on_do_", ["data", (function(chunk){return smalltalk.send(stream, "_write_", [chunk]);})]);return smalltalk.send($rec, "_on_do_", ["end", (function(){smalltalk.send(stream, "_end", []);return smalltalk.send(self, "_respondOKTo_", [aResponse]);})]);})(aRequest);
return self;},
args: ["aRequest", "aResponse"],
source: unescape('handlePUT%3A%20aRequest%20respondTo%3A%20aResponse%0A%09%7C%20path%20stream%20%7C%0A%09path%20%3A%3D%20%27.%27%2C%20aRequest%20url%20asString.%0A%09stream%20%3A%3D%20fs%20createWriteStream%3A%20path.%0A%09aRequest%0A%09%09setEncoding%3A%20%27utf8%27%3B%0A%09%09on%3A%20%27data%27%20do%3A%20%5B%20%3Achunk%20%7C%20stream%20write%3A%20chunk%20%5D%3B%0A%09%09on%3A%20%27end%27%20do%3A%20%5B%0A%09%09%09stream%20end.%0A%09%09%09self%20respondOKTo%3A%20aResponse%20%5D'),
messageSends: [unescape("%2C"), "asString", "url", "createWriteStream:", "setEncoding:", "on:do:", "write:", "end", "respondOKTo:"],
referencedClasses: []
}),
smalltalk.WebServer);

smalltalk.addMethod(
unescape('_respondOKTo_'),
smalltalk.method({
selector: unescape('respondOKTo%3A'),
category: 'request handling',
fn: function (aResponse){
var self=this;
smalltalk.send(aResponse, "_send_", ["Success"]);
return self;},
args: ["aResponse"],
source: unescape('respondOKTo%3A%20aResponse%0A%09aResponse%20send%3A%20%27Success%27.'),
messageSends: ["send:"],
referencedClasses: []
}),
smalltalk.WebServer);

smalltalk.addMethod(
unescape('_require_'),
smalltalk.method({
selector: unescape('require%3A'),
category: 'private',
fn: function (aModuleString){
var self=this;
return smalltalk.send((typeof require == 'undefined' ? nil : require), "_value_", [aModuleString]);
return self;},
args: ["aModuleString"],
source: unescape('require%3A%20aModuleString%0A%09%22call%20to%20the%20Node%20require%20function%22%0A%09%5Erequire%20value%3A%20aModuleString'),
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.WebServer);


smalltalk.addMethod(
unescape('_main'),
smalltalk.method({
selector: unescape('main'),
category: 'main',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_start", []);
return self;},
args: [],
source: unescape('main%0A%09%5Eself%20new%20start'),
messageSends: ["start", "new"],
referencedClasses: []
}),
smalltalk.WebServer.klass);


