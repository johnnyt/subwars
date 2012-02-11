smalltalk.addPackage('SubWars-Node', {});
smalltalk.addClass('WebServer', smalltalk.Object, ['port', 'app', 'dirname', 'faye', 'app', 'express', 'bayeux', 'fs'], 'SubWars-Node');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
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
return self;}
}),
smalltalk.WebServer);

smalltalk.addMethod(
unescape('_start'),
smalltalk.method({
selector: unescape('start'),
fn: function (){
var self=this;
smalltalk.send(self['@app'], "_listen_do_", [smalltalk.send(self['@port'], "_asString", []), (function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send("Listening on port: ", "__comma", [smalltalk.send(self['@port'], "_asString", [])])]);})]);
return self;}
}),
smalltalk.WebServer);

smalltalk.addMethod(
unescape('_initializeRoutes'),
smalltalk.method({
selector: unescape('initializeRoutes'),
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_get_do_", [unescape("/"), (function(req, res){return smalltalk.send(res, "_render_", ["index"]);})]);return smalltalk.send($rec, "_put_do_", [unescape("/*"), (function(req, res){return smalltalk.send(self, "_handlePUT_respondTo_", [req, res]);})]);})(self['@app']);
return self;}
}),
smalltalk.WebServer);

smalltalk.addMethod(
unescape('_configure'),
smalltalk.method({
selector: unescape('configure'),
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_configure_", [(function(){return (function($rec){smalltalk.send($rec, "_set_val_", ["view options", smalltalk.HashedCollection._fromPairs_([smalltalk.send("layout", "__minus_gt", [false])])]);smalltalk.send($rec, "_set_val_", ["view engine", "jade"]);smalltalk.send($rec, "_use_", [smalltalk.send(self['@express'], "_logger", [])]);smalltalk.send($rec, "_use_", [smalltalk.send(self['@express'], "_static_", [smalltalk.send(self['@dirname'], "__comma", [unescape("/public")])])]);return smalltalk.send($rec, "_use_", [smalltalk.send(self['@app'], "_at_", ["router"])]);})(self['@app']);})]);smalltalk.send($rec, "_configure_with_", ["development", (function(){return smalltalk.send(self['@app'], "_use_", [smalltalk.send(self['@express'], "_errorHandler_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("dumpExceptions", "__minus_gt", [true]),smalltalk.send("showStack", "__minus_gt", [true])])])]);})]);return smalltalk.send($rec, "_configure_with_", ["production", (function(){return smalltalk.send(self['@app'], "_use_", [smalltalk.send(self['@express'], "_errorHandler", [])]);})]);})(self['@app']);
return self;}
}),
smalltalk.WebServer);

smalltalk.addMethod(
unescape('_handlePUT_respondTo_'),
smalltalk.method({
selector: unescape('handlePUT%3ArespondTo%3A'),
fn: function (aRequest, aResponse){
var self=this;
var path=nil;
var stream=nil;
(path=smalltalk.send(".", "__comma", [smalltalk.send(smalltalk.send(aRequest, "_url", []), "_asString", [])]));
(stream=smalltalk.send(self['@fs'], "_createWriteStream_", [path]));
(function($rec){smalltalk.send($rec, "_setEncoding_", ["utf8"]);smalltalk.send($rec, "_on_do_", ["data", (function(chunk){return smalltalk.send(stream, "_write_", [chunk]);})]);return smalltalk.send($rec, "_on_do_", ["end", (function(){smalltalk.send(stream, "_end", []);return smalltalk.send(self, "_respondOKTo_", [aResponse]);})]);})(aRequest);
return self;}
}),
smalltalk.WebServer);

smalltalk.addMethod(
unescape('_respondOKTo_'),
smalltalk.method({
selector: unescape('respondOKTo%3A'),
fn: function (aResponse){
var self=this;
smalltalk.send(aResponse, "_send_", ["Success"]);
return self;}
}),
smalltalk.WebServer);

smalltalk.addMethod(
unescape('_require_'),
smalltalk.method({
selector: unescape('require%3A'),
fn: function (aModuleString){
var self=this;
return smalltalk.send((typeof require == 'undefined' ? nil : require), "_value_", [aModuleString]);
return self;}
}),
smalltalk.WebServer);


smalltalk.addMethod(
unescape('_main'),
smalltalk.method({
selector: unescape('main'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_start", []);
return self;}
}),
smalltalk.WebServer.klass);


