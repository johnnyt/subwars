smalltalk.addPackage('HTML5', {});
smalltalk.addClass('IndexedDatabase', smalltalk.Object, ['req', 'db', 'version'], 'HTML5');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
smalltalk.send((typeof window == 'undefined' ? nil : window), "_at_put_", [smalltalk.symbolFor("indexedDB"), smalltalk.send((typeof window == 'undefined' ? nil : window), "_webkitIndexedDB", [])]);
(self['@req']=smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_indexedDB", []), "_open_", ["RulesDB"]));
smalltalk.send(self['@req'], "_addEventListener_do_", ["success", (function(event){(self['@db']=smalltalk.send(smalltalk.send(event, "_target", []), "_result", []));smalltalk.send(self['@db'], "_setVersion_", ["1.0"]);return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["Created DB"]);})]);
smalltalk.send(self['@req'], "_addEventListener_do_", ["error", (function(event){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("Error: ", "__comma", [smalltalk.send(smalltalk.send(event, "_message", []), "_asString", [])]), "__comma", [unescape("%20%28")]), "__comma", [smalltalk.send(smalltalk.send(event, "_code", []), "_asString", [])]), "__comma", [unescape("%29")])]);})]);
return self;}
}),
smalltalk.IndexedDatabase);



smalltalk.addClass('FileSystem', smalltalk.Object, ['fs'], 'HTML5');
smalltalk.addMethod(
unescape('_handleError_'),
smalltalk.method({
selector: unescape('handleError%3A'),
fn: function (anError){
var self=this;
var msg=nil;

switch (anError.code) {
    case FileError.QUOTA_EXCEEDED_ERR:
      msg = 'QUOTA_EXCEEDED_ERR';
      break;
    case FileError.NOT_FOUND_ERR:
      msg = 'NOT_FOUND_ERR';
      break;
    case FileError.SECURITY_ERR:
      msg = 'SECURITY_ERR';
      break;
    case FileError.INVALID_MODIFICATION_ERR:
      msg = 'INVALID_MODIFICATION_ERR';
      break;
    case FileError.INVALID_STATE_ERR:
      msg = 'INVALID_STATE_ERR';
      break;
    default:
      msg = 'Unknown Error';
      break;
  };;
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send("Error: ", "__comma", [msg])]);
return self;}
}),
smalltalk.FileSystem);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
(($receiver = smalltalk.send((typeof window == 'undefined' ? nil : window), "_at_", ["requestFileSystem"])) != nil && $receiver != undefined) ? (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_requestFileSystem_size_onSuccess_onError_", [smalltalk.send((typeof window == 'undefined' ? nil : window), "_at_", ["TEMPORARY"]), (1024) * (1024), (function(filesystem){return smalltalk.send(self, "_initializeFileSystem_", [filesystem]);}), (function(error){return smalltalk.send(self, "_handleError_", [error]);})]);})() : nil;
return self;}
}),
smalltalk.FileSystem);

smalltalk.addMethod(
unescape('_initializeFileSystem_'),
smalltalk.method({
selector: unescape('initializeFileSystem%3A'),
fn: function (aDOMFileSystem){
var self=this;
(self['@fs']=aDOMFileSystem);
return self;}
}),
smalltalk.FileSystem);



smalltalk.addClass('GeoLocation', smalltalk.Object, ['trackingWatchId', 'geo', 'onSuccess', 'onError'], 'HTML5');
smalltalk.addMethod(
unescape('_getCurrentPosition'),
smalltalk.method({
selector: unescape('getCurrentPosition'),
fn: function (){
var self=this;
smalltalk.send(self['@geo'], "_getCurrentPosition_onError_", [(function(position){return smalltalk.send(self['@onSuccess'], "_value_", [position]);}), (function(error){return smalltalk.send(self['@onError'], "_value_", [error]);})]);
return self;}
}),
smalltalk.GeoLocation);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
self['@geo']=smalltalk.send((typeof navigator == 'undefined' ? nil : navigator), "_geolocation", []);
self['@onSuccess']=(function(position){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [position]);});
self['@onError']=(function(error){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [error]);});
return self;}
}),
smalltalk.GeoLocation);

smalltalk.addMethod(
unescape('_watchPosition'),
smalltalk.method({
selector: unescape('watchPosition'),
fn: function (){
var self=this;
smalltalk.send(self, "_watchPosition_", [self['@onSuccess']]);
return self;}
}),
smalltalk.GeoLocation);

smalltalk.addMethod(
unescape('_onSuccess_'),
smalltalk.method({
selector: unescape('onSuccess%3A'),
fn: function (aBlock){
var self=this;
self['@onSuccess']=aBlock;
return self;}
}),
smalltalk.GeoLocation);

smalltalk.addMethod(
unescape('_onError_'),
smalltalk.method({
selector: unescape('onError%3A'),
fn: function (aBlock){
var self=this;
self['@onError']=aBlock;
return self;}
}),
smalltalk.GeoLocation);

smalltalk.addMethod(
unescape('_clearWatch'),
smalltalk.method({
selector: unescape('clearWatch'),
fn: function (){
var self=this;
(($receiver = self['@trackingWatchId']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@geo'], "_clearWatch_", [self['@trackingWatchId']]);})() : nil;
self['@trackingWatchId']=nil;
return self;}
}),
smalltalk.GeoLocation);

smalltalk.addMethod(
unescape('_onError'),
smalltalk.method({
selector: unescape('onError'),
fn: function (){
var self=this;
return self['@onError'];
return self;}
}),
smalltalk.GeoLocation);

smalltalk.addMethod(
unescape('_onSuccess'),
smalltalk.method({
selector: unescape('onSuccess'),
fn: function (){
var self=this;
return self['@onSuccess'];
return self;}
}),
smalltalk.GeoLocation);

smalltalk.addMethod(
unescape('_getCurrentPosition_'),
smalltalk.method({
selector: unescape('getCurrentPosition%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send(self['@geo'], "_getCurrentPosition_onError_", [aBlock, self['@onError']]);
return self;}
}),
smalltalk.GeoLocation);

smalltalk.addMethod(
unescape('_getCurrentPosition_onError_'),
smalltalk.method({
selector: unescape('getCurrentPosition%3AonError%3A'),
fn: function (aBlock, anErrorBlock){
var self=this;
smalltalk.send(self['@geo'], "_getCurrentPosition_onError_", [aBlock, anErrorBlock]);
return self;}
}),
smalltalk.GeoLocation);

smalltalk.addMethod(
unescape('_watchPosition_'),
smalltalk.method({
selector: unescape('watchPosition%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send(self, "_clearWatch", []);
self['@trackingWatchId']=smalltalk.send(self['@geo'], "_watchPosition_onError_", [aBlock, self['@onError']]);
return self;}
}),
smalltalk.GeoLocation);



smalltalk.addClass('WebDatabase', smalltalk.Object, ['name', 'description', 'request', 'db', 'version'], 'HTML5');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
(($receiver = self['@name']) == nil || $receiver == undefined) ? (function(){return self['@name']="default";})() : $receiver;
(($receiver = self['@description']) == nil || $receiver == undefined) ? (function(){return self['@description']="Default DB";})() : $receiver;
self['@version']="";
self['@db']=smalltalk.send((typeof window == 'undefined' ? nil : window), "_openDatabase_version_description_size_", [self['@name'], self['@version'], self['@description'], (1024)]);
return self;}
}),
smalltalk.WebDatabase);

smalltalk.addMethod(
unescape('_db'),
smalltalk.method({
selector: unescape('db'),
fn: function (){
var self=this;
return self['@db'];
return self;}
}),
smalltalk.WebDatabase);

smalltalk.addMethod(
unescape('_name_'),
smalltalk.method({
selector: unescape('name%3A'),
fn: function (aString){
var self=this;
self['@name']=aString;
return self;}
}),
smalltalk.WebDatabase);

smalltalk.addMethod(
unescape('_name'),
smalltalk.method({
selector: unescape('name'),
fn: function (){
var self=this;
return self['@name'];
return self;}
}),
smalltalk.WebDatabase);

smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
fn: function (){
var self=this;
return self['@description'];
return self;}
}),
smalltalk.WebDatabase);

smalltalk.addMethod(
unescape('_description_'),
smalltalk.method({
selector: unescape('description%3A'),
fn: function (aString){
var self=this;
self['@description']=aString;
return self;}
}),
smalltalk.WebDatabase);

smalltalk.addMethod(
unescape('_version_'),
smalltalk.method({
selector: unescape('version%3A'),
fn: function (aString){
var self=this;
self['@version']=aString;
return self;}
}),
smalltalk.WebDatabase);

smalltalk.addMethod(
unescape('_version'),
smalltalk.method({
selector: unescape('version'),
fn: function (){
var self=this;
return self['@version'];
return self;}
}),
smalltalk.WebDatabase);

smalltalk.addMethod(
unescape('_executeSql_args_onSuccess_onError_'),
smalltalk.method({
selector: unescape('executeSql%3Aargs%3AonSuccess%3AonError%3A'),
fn: function (aSqlString, anArray, aSuccessBlock, anErrorBlock){
var self=this;
smalltalk.send(self['@db'], "_transaction_", [(function(tx){return smalltalk.send(tx, "_executeSql_args_onSuccess_onError_", [aSqlString, anArray, aSuccessBlock, anErrorBlock]);})]);
return self;}
}),
smalltalk.WebDatabase);

smalltalk.addMethod(
unescape('_executeSql_args_'),
smalltalk.method({
selector: unescape('executeSql%3Aargs%3A'),
fn: function (aSqlString, anArray){
var self=this;
smalltalk.send(self, "_executeSql_args_onSuccess_onError_", [aSqlString, anArray, (function(){return nil;}), (function(tx, error){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [error]);})]);
return self;}
}),
smalltalk.WebDatabase);

smalltalk.addMethod(
unescape('_executeSql_'),
smalltalk.method({
selector: unescape('executeSql%3A'),
fn: function (aSqlString){
var self=this;
smalltalk.send(self, "_executeSql_args_onSuccess_onError_", [aSqlString, (function(){return nil;}), (function(){return nil;}), (function(tx, error){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [error]);})]);
return self;}
}),
smalltalk.WebDatabase);


smalltalk.addMethod(
unescape('_named_description_'),
smalltalk.method({
selector: unescape('named%3Adescription%3A'),
fn: function (aName, aDescription){
var self=this;
return (function($rec){smalltalk.send($rec, "_name_", [aName]);smalltalk.send($rec, "_description_", [aDescription]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_basicNew", []));
return self;}
}),
smalltalk.WebDatabase.klass);

smalltalk.addMethod(
unescape('_named_'),
smalltalk.method({
selector: unescape('named%3A'),
fn: function (aName){
var self=this;
return (function($rec){smalltalk.send($rec, "_name_", [aName]);smalltalk.send($rec, "_description_", [""]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_basicNew", []));
return self;}
}),
smalltalk.WebDatabase.klass);


smalltalk.addClass('LocalStorage', smalltalk.Object, ['scope'], 'HTML5');
smalltalk.addMethod(
unescape('_keys'),
smalltalk.method({
selector: unescape('keys'),
fn: function (){
var self=this;
var keysArray=nil;
keysArray=[];
smalltalk.send((0), "_to_do_", [((($receiver = smalltalk.send((typeof localStorage == 'undefined' ? nil : localStorage), "_length", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), (function(idx, key){key=smalltalk.send((typeof localStorage == 'undefined' ? nil : localStorage), "_key_", [idx]);return ((($receiver = smalltalk.send(key, "_match_", [smalltalk.send(unescape("%5E"), "__comma", [self['@scope']])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(keysArray, "_add_", [smalltalk.send(key, "_replace_with_", [smalltalk.send(unescape("%5E"), "__comma", [self['@scope']]), ""])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(keysArray, "_add_", [smalltalk.send(key, "_replace_with_", [smalltalk.send(unescape("%5E"), "__comma", [self['@scope']]), ""])]);})]));})]);
return keysArray;
return self;}
}),
smalltalk.LocalStorage);

smalltalk.addMethod(
unescape('_scopedKey_'),
smalltalk.method({
selector: unescape('scopedKey%3A'),
fn: function (aString){
var self=this;
try{((($receiver = smalltalk.send(aString, "_match_", [smalltalk.send(unescape("%5E"), "__comma", [self['@scope']])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_scopedKey_', fn: function(){return aString}})})();})() : (function(){return (function(){throw({name: 'stReturn', selector: '_scopedKey_', fn: function(){return smalltalk.send(self['@scope'], "__comma", [aString])}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_scopedKey_', fn: function(){return aString}})})();}), (function(){return (function(){throw({name: 'stReturn', selector: '_scopedKey_', fn: function(){return smalltalk.send(self['@scope'], "__comma", [aString])}})})();})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_scopedKey_'){return e.fn()} throw(e)}}
}),
smalltalk.LocalStorage);

smalltalk.addMethod(
unescape('_values'),
smalltalk.method({
selector: unescape('values'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_keys", []), "_collect_", [(function(each){return smalltalk.send(self, "_at_", [each]);})]);
return self;}
}),
smalltalk.LocalStorage);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
(($receiver = self['@scope']) == nil || $receiver == undefined) ? (function(){return self['@scope']="";})() : $receiver;
return self;}
}),
smalltalk.LocalStorage);

smalltalk.addMethod(
unescape('_initializeWithScope_'),
smalltalk.method({
selector: unescape('initializeWithScope%3A'),
fn: function (aString){
var self=this;
self['@scope']=smalltalk.send(aString, "__comma", ["."]);
smalltalk.send(self, "_initialize", []);
return self;}
}),
smalltalk.LocalStorage);

smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
fn: function (aString){
var self=this;
return smalltalk.send((typeof localStorage == 'undefined' ? nil : localStorage), "_getItem_", [smalltalk.send(self, "_scopedKey_", [aString])]);
return self;}
}),
smalltalk.LocalStorage);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
fn: function (aString, anObject){
var self=this;
smalltalk.send((typeof localStorage == 'undefined' ? nil : localStorage), "_setItem_value_", [smalltalk.send(self, "_scopedKey_", [aString]), anObject]);
return self;}
}),
smalltalk.LocalStorage);

smalltalk.addMethod(
unescape('_delete_'),
smalltalk.method({
selector: unescape('delete%3A'),
fn: function (aString){
var self=this;
smalltalk.send((typeof localStorage == 'undefined' ? nil : localStorage), "_removeItem_", [smalltalk.send(self, "_scopedKey_", [aString])]);
return self;}
}),
smalltalk.LocalStorage);

smalltalk.addMethod(
unescape('_includesKey_'),
smalltalk.method({
selector: unescape('includesKey%3A'),
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send(self, "_keys", []), "_includes_", [aString]);
return self;}
}),
smalltalk.LocalStorage);

smalltalk.addMethod(
unescape('_at_ifAbsent_'),
smalltalk.method({
selector: unescape('at%3AifAbsent%3A'),
fn: function (aKey, aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_includesKey_", [aKey]), "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_at_", [aKey]);}), aBlock]);
return self;}
}),
smalltalk.LocalStorage);

smalltalk.addMethod(
unescape('_at_ifAbsentPut_'),
smalltalk.method({
selector: unescape('at%3AifAbsentPut%3A'),
fn: function (aKey, anObject){
var self=this;
return smalltalk.send(self, "_at_ifAbsent_", [aKey, (function(){return smalltalk.send(self, "_at_put_", [aKey, anObject]);})]);
return self;}
}),
smalltalk.LocalStorage);


smalltalk.LocalStorage.klass.iVarNames = ['root'];
smalltalk.addMethod(
unescape('_withScope_'),
smalltalk.method({
selector: unescape('withScope%3A'),
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeWithScope_", [aString]);
return self;}
}),
smalltalk.LocalStorage.klass);


