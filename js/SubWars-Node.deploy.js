smalltalk.addPackage('SubWars-Node', {});
smalltalk.addClass('WebServer', smalltalk.Object, ['port', 'app', 'dirname', 'faye', 'app', 'express', 'bayeux', 'fs', 'childProcess', 'util', 'redisStore'], 'SubWars-Node');
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
(self['@util']=smalltalk.send(self, "_require_", ["util"]));
(self['@childProcess']=smalltalk.send(self, "_require_", ["child_process"]));
(self['@fs']=smalltalk.send(self, "_require_", ["fs"]));
(self['@express']=smalltalk.send(self, "_require_", ["express"]));
(self['@faye']=smalltalk.send(self, "_require_", [unescape("./lib/faye-node.js")]));
(self['@app']=smalltalk.send(self['@express'], "_createServer", []));
(self['@redisStore']=smalltalk.send(smalltalk.send(self, "_require_", [unescape("connect-redis")]), "_value_", [self['@express']]));
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
(function($rec){smalltalk.send($rec, "_get_do_", [unescape("/"), (function(req, res){smalltalk.send(self, "_initializeVisitor_", [req]);return smalltalk.send(res, "_render_with_", ["index", smalltalk.HashedCollection._fromPairs_([smalltalk.send("session", "__minus_gt", [smalltalk.send(req, "_session", [])])])]);})]);return smalltalk.send($rec, "_put_do_", [unescape("/*"), (function(req, res){return smalltalk.send(self, "_handlePUT_respondTo_", [req, res]);})]);})(self['@app']);
return self;}
}),
smalltalk.WebServer);

smalltalk.addMethod(
unescape('_configure'),
smalltalk.method({
selector: unescape('configure'),
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_configure_", [(function(){return (function($rec){smalltalk.send($rec, "_set_val_", ["view options", smalltalk.HashedCollection._fromPairs_([smalltalk.send("layout", "__minus_gt", [false])])]);smalltalk.send($rec, "_set_val_", ["view engine", "jade"]);smalltalk.send($rec, "_use_", [smalltalk.send(self['@express'], "_logger", [])]);smalltalk.send($rec, "_use_", [smalltalk.send(self['@express'], "_static_", [smalltalk.send(self['@dirname'], "__comma", [unescape("/public")])])]);smalltalk.send($rec, "_use_", [smalltalk.send(self['@express'], "_cookieParser", [])]);smalltalk.send($rec, "_use_", [smalltalk.send(self['@express'], "_session_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("secret", "__minus_gt", [unescape("i%27m%20gonna%20getcha%21")]),smalltalk.send("store", "__minus_gt", [smalltalk.send(self['@redisStore'], "_new", [])])])])]);return smalltalk.send($rec, "_use_", [smalltalk.send(self['@app'], "_at_", ["router"])]);})(self['@app']);})]);smalltalk.send($rec, "_configure_with_", ["development", (function(){return smalltalk.send(self['@app'], "_use_", [smalltalk.send(self['@express'], "_errorHandler_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("dumpExceptions", "__minus_gt", [true]),smalltalk.send("showStack", "__minus_gt", [true])])])]);})]);return smalltalk.send($rec, "_configure_with_", ["production", (function(){return smalltalk.send(self['@app'], "_use_", [smalltalk.send(self['@express'], "_errorHandler", [])]);})]);})(self['@app']);
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
(function($rec){smalltalk.send($rec, "_setEncoding_", ["utf8"]);smalltalk.send($rec, "_on_do_", ["data", (function(chunk){return smalltalk.send(stream, "_write_", [chunk]);})]);return smalltalk.send($rec, "_on_do_", ["end", (function(){smalltalk.send(stream, "_end", []);smalltalk.send(self, "_recompileJS", []);return smalltalk.send(self, "_respondOKTo_", [aResponse]);})]);})(aRequest);
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
unescape('_recompileJS'),
smalltalk.method({
selector: unescape('recompileJS'),
fn: function (){
var self=this;
((($receiver = smalltalk.send("production", "__eq", [smalltalk.send(smalltalk.send(self['@app'], "_settings", []), "_env", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@childProcess'], "_exec_callback_", ["rake compile:all", (function(err, stdout, stderr){smalltalk.send(self['@util'], "_puts_", [stdout]);return smalltalk.send(self['@util'], "_puts_", [stderr]);})]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self['@childProcess'], "_exec_callback_", ["rake compile:all", (function(err, stdout, stderr){smalltalk.send(self['@util'], "_puts_", [stdout]);return smalltalk.send(self['@util'], "_puts_", [stderr]);})]);})]));
return self;}
}),
smalltalk.WebServer);

smalltalk.addMethod(
unescape('_initializeVisitor_'),
smalltalk.method({
selector: unescape('initializeVisitor%3A'),
fn: function (aRequest){
var self=this;
var newId=nil;
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["initial visitor_id"]);
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send(aRequest, "_session", [])]);
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_at_", [smalltalk.send(aRequest, "_session", []), "visitor_id"]);
smalltalk.send((smalltalk.Visitor || Visitor), "_nextId_", [(function(id){(function($rec){smalltalk.send($rec, "_log_", [unescape("-----------------")]);return smalltalk.send($rec, "_log_", [id]);})((typeof console == 'undefined' ? nil : console));return (newId=id);})]);
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [newId]);
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_at_", [smalltalk.send(aRequest, "_session", []), "visitor_id"]);
smalltalk.send(smalltalk.send(aRequest, "_cookies", []), "_at_put_", ["vid", smalltalk.send(smalltalk.send(aRequest, "_session", []), "_at_", ["visitor_id"])]);
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


smalltalk.addClass('Visitor', smalltalk.Object, ['id'], 'SubWars-Node');
smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
fn: function (){
var self=this;
return (($receiver = self['@id']) == nil || $receiver == undefined) ? (function(){return (-1);})() : $receiver;
return self;}
}),
smalltalk.Visitor);


smalltalk.Visitor.klass.iVarNames = ['redis','redisClient'];
smalltalk.addMethod(
unescape('_nextId'),
smalltalk.method({
selector: unescape('nextId'),
fn: function (){
var self=this;
try{smalltalk.send(self, "_initializeRedis", []);
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [unescape("---------------------------------%5Cn")]);
smalltalk.send(self['@redisClient'], "_incr_callback_", ["visitors:id", (function(err, res){return (function(){throw({name: 'stReturn', selector: '_nextId', fn: function(){return res}})})();})]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_nextId'){return e.fn()} throw(e)}}
}),
smalltalk.Visitor.klass);

smalltalk.addMethod(
unescape('_initializeRedis'),
smalltalk.method({
selector: unescape('initializeRedis'),
fn: function (){
var self=this;
(($receiver = self['@redis']) == nil || $receiver == undefined) ? (function(){return (self['@redis']=smalltalk.send((typeof require == 'undefined' ? nil : require), "_value_", ["redis"]));})() : $receiver;
(($receiver = self['@redisClient']) == nil || $receiver == undefined) ? (function(){return (self['@redisClient']=smalltalk.send(self['@redis'], "_createClient", []));})() : $receiver;
return self;}
}),
smalltalk.Visitor.klass);

smalltalk.addMethod(
unescape('_nextId_'),
smalltalk.method({
selector: unescape('nextId%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send(self, "_initializeRedis", []);
smalltalk.send(self['@redisClient'], "_incr_callback_", ["visitors:id", (function(err, res){return smalltalk.send(aBlock, "_value_", [res]);})]);
return self;}
}),
smalltalk.Visitor.klass);


