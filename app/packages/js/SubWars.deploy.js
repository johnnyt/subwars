smalltalk.addPackage('SubWars');
smalltalk.addClass('BinaryPositionConverter', smalltalk.Object, ['bits'], 'SubWars');
smalltalk.addMethod(
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._integers())._collect_((function(int){
return smalltalk.withContext(function($ctx2) {
return _st(self._dictionary())._at_(_st(int).__plus((1)));
}, function($ctx2) {$ctx2.fillBlock({int:int},$ctx1)})})))._join_("");
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.BinaryPositionConverter)})},
messageSends: ["join:", "collect:", "at:", "+", "dictionary", "integers"]}),
smalltalk.BinaryPositionConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "bits",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@bits"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@bits"]=_st($Array())._new();
$1=self["@bits"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"bits",{},smalltalk.BinaryPositionConverter)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.BinaryPositionConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "bits:",
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@bits"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"bits:",{anArray:anArray},smalltalk.BinaryPositionConverter)})},
messageSends: []}),
smalltalk.BinaryPositionConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "convertToInt:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return parseInt(aString, 2);;
return self}, function($ctx1) {$ctx1.fill(self,"convertToInt:",{aString:aString},smalltalk.BinaryPositionConverter)})},
messageSends: []}),
smalltalk.BinaryPositionConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "dictionary",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "0123456789bcdefghjkmnpqrstuvwxyz";
}, function($ctx1) {$ctx1.fill(self,"dictionary",{},smalltalk.BinaryPositionConverter)})},
messageSends: []}),
smalltalk.BinaryPositionConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "hasInput",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._bits())._size()).__gt_eq(self._intSize());
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasInput",{},smalltalk.BinaryPositionConverter)})},
messageSends: [">=", "intSize", "size", "bits"]}),
smalltalk.BinaryPositionConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "intSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (5);
}, function($ctx1) {$ctx1.fill(self,"intSize",{},smalltalk.BinaryPositionConverter)})},
messageSends: []}),
smalltalk.BinaryPositionConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "integers",
fn: function (){
var self=this;
var ints;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
ints=_st($Array())._new();
_st((function(){
return smalltalk.withContext(function($ctx2) {
return self._hasInput();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(ints)._add_(self._nextInteger());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=ints;
return $1;
}, function($ctx1) {$ctx1.fill(self,"integers",{ints:ints},smalltalk.BinaryPositionConverter)})},
messageSends: ["new", "whileTrue:", "add:", "nextInteger", "hasInput"]}),
smalltalk.BinaryPositionConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "nextBits",
fn: function (){
var self=this;
var subarray;
return smalltalk.withContext(function($ctx1) { 
var $1;
subarray=_st(self._bits())._copyFrom_to_((1),self._intSize());
self._bits_(_st(self._bits())._copyFrom_to_(_st(self._intSize()).__plus((1)),_st(self._bits())._size()));
$1=subarray;
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextBits",{subarray:subarray},smalltalk.BinaryPositionConverter)})},
messageSends: ["copyFrom:to:", "intSize", "bits", "bits:", "+", "size"]}),
smalltalk.BinaryPositionConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "nextInteger",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._convertToInt_(_st(self._nextBits())._join_(""));
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextInteger",{},smalltalk.BinaryPositionConverter)})},
messageSends: ["convertToInt:", "join:", "nextBits"]}),
smalltalk.BinaryPositionConverter);


smalltalk.addMethod(
smalltalk.method({
selector: "merge:into:",
fn: function (firstArray,secondArray){
var self=this;
var length,newArray;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3;
length=_st(_st(firstArray)._size())._min_(_st(secondArray)._size());
newArray=_st($Array())._new();
_st(length)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
$1=newArray;
_st($1)._add_(_st(secondArray)._shift());
$2=_st($1)._add_(_st(firstArray)._shift());
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$4=self._new();
_st($4)._bits_(newArray);
$5=_st($4)._yourself();
$3=$5;
return $3;
}, function($ctx1) {$ctx1.fill(self,"merge:into:",{firstArray:firstArray,secondArray:secondArray,length:length,newArray:newArray},smalltalk.BinaryPositionConverter.klass)})},
messageSends: ["min:", "size", "new", "timesRepeat:", "add:", "shift", "bits:", "yourself"]}),
smalltalk.BinaryPositionConverter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "merge:into:precision:",
fn: function (firstArray,secondArray,aPrecision){
var self=this;
var length,newArray;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3;
length=_st(_st(firstArray)._size())._min_(_st(secondArray)._size());
newArray=_st($Array())._new();
_st(length)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
$1=newArray;
_st($1)._add_(_st(secondArray)._shift());
$2=_st($1)._add_(_st(firstArray)._shift());
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$4=self._new();
_st($4)._bits_(newArray);
$5=_st($4)._yourself();
$3=$5;
return $3;
}, function($ctx1) {$ctx1.fill(self,"merge:into:precision:",{firstArray:firstArray,secondArray:secondArray,aPrecision:aPrecision,length:length,newArray:newArray},smalltalk.BinaryPositionConverter.klass)})},
messageSends: ["min:", "size", "new", "timesRepeat:", "add:", "shift", "bits:", "yourself"]}),
smalltalk.BinaryPositionConverter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newOn:",
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._bits_(anArray);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newOn:",{anArray:anArray},smalltalk.BinaryPositionConverter.klass)})},
messageSends: ["bits:", "new", "yourself"]}),
smalltalk.BinaryPositionConverter.klass);


smalltalk.addClass('CoordinateBinder', smalltalk.Object, ['value', 'bits', 'precision'], 'SubWars');
smalltalk.addMethod(
smalltalk.method({
selector: "averageBitLength",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._precision()).__star((2.5));
return $1;
}, function($ctx1) {$ctx1.fill(self,"averageBitLength",{},smalltalk.CoordinateBinder)})},
messageSends: ["*", "precision"]}),
smalltalk.CoordinateBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "bitsNeeded",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"bitsNeeded",{},smalltalk.CoordinateBinder)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CoordinateBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "maxCoord",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"maxCoord",{},smalltalk.CoordinateBinder)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CoordinateBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "minCoord",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"minCoord",{},smalltalk.CoordinateBinder)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CoordinateBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "precision",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@precision"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@precision"]=(1);
$1=self["@precision"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"precision",{},smalltalk.CoordinateBinder)})},
messageSends: ["ifNil:"]}),
smalltalk.CoordinateBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "precision:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@precision"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"precision:",{aNumber:aNumber},smalltalk.CoordinateBinder)})},
messageSends: []}),
smalltalk.CoordinateBinder);


smalltalk.addMethod(
smalltalk.method({
selector: "bind:precision:",
fn: function (aNumber,aPrecision){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._precision_(aPrecision);
_st($2)._value_(aNumber);
_st($2)._bind();
$3=_st($2)._bits();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"bind:precision:",{aNumber:aNumber,aPrecision:aPrecision},smalltalk.CoordinateBinder.klass)})},
messageSends: ["precision:", "new", "value:", "bind", "bits"]}),
smalltalk.CoordinateBinder.klass);


smalltalk.addClass('LatitudeBinder', smalltalk.CoordinateBinder, [], 'SubWars');
smalltalk.addMethod(
smalltalk.method({
selector: "bitsNeeded",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.floor(self._averageBitLength());;
return self}, function($ctx1) {$ctx1.fill(self,"bitsNeeded",{},smalltalk.LatitudeBinder)})},
messageSends: []}),
smalltalk.LatitudeBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "maxValue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (90);
}, function($ctx1) {$ctx1.fill(self,"maxValue",{},smalltalk.LatitudeBinder)})},
messageSends: []}),
smalltalk.LatitudeBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "minValue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (-90);
}, function($ctx1) {$ctx1.fill(self,"minValue",{},smalltalk.LatitudeBinder)})},
messageSends: []}),
smalltalk.LatitudeBinder);



smalltalk.addClass('LongitudeBinder', smalltalk.CoordinateBinder, [], 'SubWars');
smalltalk.addMethod(
smalltalk.method({
selector: "bitsNeeded",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.ceil(self._averageBitLength());;
return self}, function($ctx1) {$ctx1.fill(self,"bitsNeeded",{},smalltalk.LongitudeBinder)})},
messageSends: []}),
smalltalk.LongitudeBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "maxValue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (180);
}, function($ctx1) {$ctx1.fill(self,"maxValue",{},smalltalk.LongitudeBinder)})},
messageSends: []}),
smalltalk.LongitudeBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "minValue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (-180);
}, function($ctx1) {$ctx1.fill(self,"minValue",{},smalltalk.LongitudeBinder)})},
messageSends: []}),
smalltalk.LongitudeBinder);



smalltalk.addClass('GeoHash', smalltalk.Object, ['latBits', 'lngBits', 'lat', 'lng', 'hash', 'latString', 'lngString'], 'SubWars');
smalltalk.addMethod(
smalltalk.method({
selector: "encode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._encodeToPrecision_((10));
return self}, function($ctx1) {$ctx1.fill(self,"encode",{},smalltalk.GeoHash)})},
messageSends: ["encodeToPrecision:"]}),
smalltalk.GeoHash);

smalltalk.addMethod(
smalltalk.method({
selector: "encodeToPrecision:",
fn: function (aNumber){
var self=this;
function $RangedPositionEncoder(){return smalltalk.RangedPositionEncoder||(typeof RangedPositionEncoder=="undefined"?nil:RangedPositionEncoder)}
function $BinaryPositionConverter(){return smalltalk.BinaryPositionConverter||(typeof BinaryPositionConverter=="undefined"?nil:BinaryPositionConverter)}
return smalltalk.withContext(function($ctx1) { 
self._latBits_(_st(_st($RangedPositionEncoder())._newFrom_to_((-90),(90)))._encode_(self._lat()));
self._lngBits_(_st(_st($RangedPositionEncoder())._newFrom_to_((-180),(180)))._encode_(self._lng()));
self["@latString"]=_st(self._latBits())._join_("");
self["@lngString"]=_st(self._lngBits())._join_("");
self._hash_(_st(_st(_st($BinaryPositionConverter())._merge_into_precision_(self["@latBits"],self["@lngBits"],aNumber))._asString())._first_(aNumber));
return self}, function($ctx1) {$ctx1.fill(self,"encodeToPrecision:",{aNumber:aNumber},smalltalk.GeoHash)})},
messageSends: ["latBits:", "encode:", "lat", "newFrom:to:", "lngBits:", "lng", "join:", "latBits", "lngBits", "hash:", "first:", "asString", "merge:into:precision:"]}),
smalltalk.GeoHash);

smalltalk.addMethod(
smalltalk.method({
selector: "hash",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@hash"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"hash",{},smalltalk.GeoHash)})},
messageSends: []}),
smalltalk.GeoHash);

smalltalk.addMethod(
smalltalk.method({
selector: "hash:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@hash"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"hash:",{aString:aString},smalltalk.GeoHash)})},
messageSends: []}),
smalltalk.GeoHash);

smalltalk.addMethod(
smalltalk.method({
selector: "lat",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@lat"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"lat",{},smalltalk.GeoHash)})},
messageSends: []}),
smalltalk.GeoHash);

smalltalk.addMethod(
smalltalk.method({
selector: "lat:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@lat"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"lat:",{aNumber:aNumber},smalltalk.GeoHash)})},
messageSends: []}),
smalltalk.GeoHash);

smalltalk.addMethod(
smalltalk.method({
selector: "latBits",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@latBits"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"latBits",{},smalltalk.GeoHash)})},
messageSends: []}),
smalltalk.GeoHash);

smalltalk.addMethod(
smalltalk.method({
selector: "latBits:",
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@latBits"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"latBits:",{anArray:anArray},smalltalk.GeoHash)})},
messageSends: []}),
smalltalk.GeoHash);

smalltalk.addMethod(
smalltalk.method({
selector: "latString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@latString"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"latString",{},smalltalk.GeoHash)})},
messageSends: []}),
smalltalk.GeoHash);

smalltalk.addMethod(
smalltalk.method({
selector: "lng",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@lng"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"lng",{},smalltalk.GeoHash)})},
messageSends: []}),
smalltalk.GeoHash);

smalltalk.addMethod(
smalltalk.method({
selector: "lng:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@lng"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"lng:",{aNumber:aNumber},smalltalk.GeoHash)})},
messageSends: []}),
smalltalk.GeoHash);

smalltalk.addMethod(
smalltalk.method({
selector: "lngBits",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@lngBits"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"lngBits",{},smalltalk.GeoHash)})},
messageSends: []}),
smalltalk.GeoHash);

smalltalk.addMethod(
smalltalk.method({
selector: "lngBits:",
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@lngBits"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"lngBits:",{anArray:anArray},smalltalk.GeoHash)})},
messageSends: []}),
smalltalk.GeoHash);

smalltalk.addMethod(
smalltalk.method({
selector: "lngString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@lngString"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"lngString",{},smalltalk.GeoHash)})},
messageSends: []}),
smalltalk.GeoHash);

smalltalk.addMethod(
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("a GeoHash( ".__comma(self._hash())).__comma(" )");
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{},smalltalk.GeoHash)})},
messageSends: [",", "hash"]}),
smalltalk.GeoHash);


smalltalk.addMethod(
smalltalk.method({
selector: "encodeLat:lng:",
fn: function (lat,lng){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._lat_(lat);
_st($2)._lng_(lng);
_st($2)._encode();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"encodeLat:lng:",{lat:lat,lng:lng},smalltalk.GeoHash.klass)})},
messageSends: ["lat:", "new", "lng:", "encode", "yourself"]}),
smalltalk.GeoHash.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "encodeLat:lng:precision:",
fn: function (lat,lng,aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._lat_(lat);
_st($2)._lng_(lng);
_st($2)._encodeToPrecision_(aNumber);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"encodeLat:lng:precision:",{lat:lat,lng:lng,aNumber:aNumber},smalltalk.GeoHash.klass)})},
messageSends: ["lat:", "new", "lng:", "encodeToPrecision:", "yourself"]}),
smalltalk.GeoHash.klass);


smalltalk.addClass('RangedPositionEncoder', smalltalk.Object, ['rangeMin', 'rangeMax', 'min', 'max', 'bits', 'precision'], 'SubWars');
smalltalk.addMethod(
smalltalk.method({
selector: "bits",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@bits"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@bits"]=_st($Array())._new();
$1=self["@bits"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"bits",{},smalltalk.RangedPositionEncoder)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "bits:",
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@bits"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"bits:",{anArray:anArray},smalltalk.RangedPositionEncoder)})},
messageSends: []}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "encode:",
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._reset();
_st((function(){
return smalltalk.withContext(function($ctx2) {
return self._needsRefinement();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(aValue).__gt(self._midpoint());
if(smalltalk.assert($1)){
return self._refinePositive();
} else {
return self._refineNegative();
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=self._bits();
return $2;
}, function($ctx1) {$ctx1.fill(self,"encode:",{aValue:aValue},smalltalk.RangedPositionEncoder)})},
messageSends: ["reset", "whileTrue:", "ifTrue:ifFalse:", "refinePositive", "refineNegative", ">", "midpoint", "needsRefinement", "bits"]}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "max",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@max"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@max"]=self._rangeMax();
$1=self["@max"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"max",{},smalltalk.RangedPositionEncoder)})},
messageSends: ["ifNil:", "rangeMax"]}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "max:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@max"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"max:",{aNumber:aNumber},smalltalk.RangedPositionEncoder)})},
messageSends: []}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "midpoint",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._min()).__plus(self._max())).__slash((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"midpoint",{},smalltalk.RangedPositionEncoder)})},
messageSends: ["/", "+", "max", "min"]}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "min",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@min"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@min"]=self._rangeMin();
$1=self["@min"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"min",{},smalltalk.RangedPositionEncoder)})},
messageSends: ["ifNil:", "rangeMin"]}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "min:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@min"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"min:",{aNumber:aNumber},smalltalk.RangedPositionEncoder)})},
messageSends: []}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "needsRefinement",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._bits())._size()).__lt(self._precision());
return $1;
}, function($ctx1) {$ctx1.fill(self,"needsRefinement",{},smalltalk.RangedPositionEncoder)})},
messageSends: ["<", "precision", "size", "bits"]}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "precision",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@precision"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@precision"]=(20);
$1=self["@precision"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"precision",{},smalltalk.RangedPositionEncoder)})},
messageSends: ["ifNil:"]}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "precision:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@precision"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"precision:",{anInteger:anInteger},smalltalk.RangedPositionEncoder)})},
messageSends: []}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "rangeMax",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@rangeMax"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rangeMax",{},smalltalk.RangedPositionEncoder)})},
messageSends: []}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "rangeMax:",
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rangeMax"]=aValue;
return self}, function($ctx1) {$ctx1.fill(self,"rangeMax:",{aValue:aValue},smalltalk.RangedPositionEncoder)})},
messageSends: []}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "rangeMin",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@rangeMin"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rangeMin",{},smalltalk.RangedPositionEncoder)})},
messageSends: []}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "rangeMin:",
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rangeMin"]=aValue;
return self}, function($ctx1) {$ctx1.fill(self,"rangeMin:",{aValue:aValue},smalltalk.RangedPositionEncoder)})},
messageSends: []}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "refineNegative",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._bits())._add_((0));
self._max_(self._midpoint());
return self}, function($ctx1) {$ctx1.fill(self,"refineNegative",{},smalltalk.RangedPositionEncoder)})},
messageSends: ["add:", "bits", "max:", "midpoint"]}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "refinePositive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._bits())._add_((1));
self._min_(self._midpoint());
return self}, function($ctx1) {$ctx1.fill(self,"refinePositive",{},smalltalk.RangedPositionEncoder)})},
messageSends: ["add:", "bits", "min:", "midpoint"]}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "reset",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._bits_(nil);
_st($1)._min_(nil);
$2=_st($1)._max_(nil);
return self}, function($ctx1) {$ctx1.fill(self,"reset",{},smalltalk.RangedPositionEncoder)})},
messageSends: ["bits:", "min:", "max:"]}),
smalltalk.RangedPositionEncoder);


smalltalk.addMethod(
smalltalk.method({
selector: "newFrom:to:",
fn: function (aMinValue,aMaxValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._rangeMin_(aMinValue);
_st($2)._rangeMax_(aMaxValue);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newFrom:to:",{aMinValue:aMinValue,aMaxValue:aMaxValue},smalltalk.RangedPositionEncoder.klass)})},
messageSends: ["rangeMin:", "new", "rangeMax:", "yourself"]}),
smalltalk.RangedPositionEncoder.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newFrom:to:precision:",
fn: function (aMinValue,aMaxValue,aPrecision){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._rangeMin_(aMinValue);
_st($2)._rangeMax_(aMaxValue);
_st($2)._precision_(aPrecision);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newFrom:to:precision:",{aMinValue:aMinValue,aMaxValue:aMaxValue,aPrecision:aPrecision},smalltalk.RangedPositionEncoder.klass)})},
messageSends: ["rangeMin:", "new", "rangeMax:", "precision:", "yourself"]}),
smalltalk.RangedPositionEncoder.klass);


smalltalk.addClass('SubWars', smalltalk.Object, [], 'SubWars');


smalltalk.addMethod(
smalltalk.method({
selector: "shift",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.shift();;
return self}, function($ctx1) {$ctx1.fill(self,"shift",{},smalltalk.Array)})},
messageSends: []}),
smalltalk.Array);

