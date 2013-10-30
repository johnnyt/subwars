smalltalk.addPackage('SubWars');
smalltalk.addClass('BinaryPositionConverter', smalltalk.Object, ['bits'], 'SubWars');
smalltalk.addMethod(
smalltalk.method({
selector: "asString",
category: 'converting',
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
args: [],
source: "asString\x0a\x09^ (self integers collect: [ :int | self dictionary at: int+1 ]) join: ''",
messageSends: ["join:", "collect:", "at:", "+", "dictionary", "integers"],
referencedClasses: []
}),
smalltalk.BinaryPositionConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "bits",
category: 'accessing',
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
args: [],
source: "bits\x0a\x09^ bits ifNil: [ bits := Array new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.BinaryPositionConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "bits:",
category: 'accessing',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@bits"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"bits:",{anArray:anArray},smalltalk.BinaryPositionConverter)})},
args: ["anArray"],
source: "bits: anArray\x0a\x09bits := anArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.BinaryPositionConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "convertToInt:",
category: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return parseInt(aString, 2);;
return self}, function($ctx1) {$ctx1.fill(self,"convertToInt:",{aString:aString},smalltalk.BinaryPositionConverter)})},
args: ["aString"],
source: "convertToInt: aString\x0a\x09<return parseInt(aString, 2);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BinaryPositionConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "dictionary",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "0123456789bcdefghjkmnpqrstuvwxyz";
}, function($ctx1) {$ctx1.fill(self,"dictionary",{},smalltalk.BinaryPositionConverter)})},
args: [],
source: "dictionary\x0a\x09^ '0123456789bcdefghjkmnpqrstuvwxyz'",
messageSends: [],
referencedClasses: []
}),
smalltalk.BinaryPositionConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "hasInput",
category: 'querying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._bits())._size()).__gt_eq(self._intSize());
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasInput",{},smalltalk.BinaryPositionConverter)})},
args: [],
source: "hasInput\x0a\x09^ self bits size >= self intSize",
messageSends: [">=", "intSize", "size", "bits"],
referencedClasses: []
}),
smalltalk.BinaryPositionConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "intSize",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (5);
}, function($ctx1) {$ctx1.fill(self,"intSize",{},smalltalk.BinaryPositionConverter)})},
args: [],
source: "intSize\x0a\x09^ 5",
messageSends: [],
referencedClasses: []
}),
smalltalk.BinaryPositionConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "integers",
category: 'accessing',
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
args: [],
source: "integers\x0a\x09| ints |\x0a\x09ints := Array new.\x0a\x09[ self hasInput ] whileTrue: [\x0a\x09\x09ints add: self nextInteger ].\x0a\x09^ ints",
messageSends: ["new", "whileTrue:", "add:", "nextInteger", "hasInput"],
referencedClasses: ["Array"]
}),
smalltalk.BinaryPositionConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "nextBits",
category: 'accessing',
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
args: [],
source: "nextBits\x0a\x09| subarray |\x0a\x09subarray := (self bits) copyFrom: 1 to: self intSize.\x0a\x09self bits: (self bits copyFrom: self intSize + 1 to: self bits size).\x0a\x09^ subarray",
messageSends: ["copyFrom:to:", "intSize", "bits", "bits:", "+", "size"],
referencedClasses: []
}),
smalltalk.BinaryPositionConverter);

smalltalk.addMethod(
smalltalk.method({
selector: "nextInteger",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._convertToInt_(_st(self._nextBits())._join_(""));
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextInteger",{},smalltalk.BinaryPositionConverter)})},
args: [],
source: "nextInteger\x0a\x09^ self convertToInt: (self nextBits join: '')",
messageSends: ["convertToInt:", "join:", "nextBits"],
referencedClasses: []
}),
smalltalk.BinaryPositionConverter);


smalltalk.addMethod(
smalltalk.method({
selector: "merge:into:",
category: 'instance creation',
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
args: ["firstArray", "secondArray"],
source: "merge: firstArray into: secondArray\x0a\x09| length newArray |\x0a\x09length := firstArray size min: secondArray size.\x0a\x09newArray := Array new.\x0a\x09length timesRepeat: [\x0a\x09\x09newArray add: secondArray shift; add: firstArray shift ].\x0a\x09\x0a\x09^ self new\x0a\x09\x09bits: newArray;\x0a\x09\x09yourself",
messageSends: ["min:", "size", "new", "timesRepeat:", "add:", "shift", "bits:", "yourself"],
referencedClasses: ["Array"]
}),
smalltalk.BinaryPositionConverter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "merge:into:precision:",
category: 'instance creation',
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
args: ["firstArray", "secondArray", "aPrecision"],
source: "merge: firstArray into: secondArray precision: aPrecision\x0a\x09| length newArray |\x0a\x09length := firstArray size min: secondArray size.\x22) min: ((aPrecision * 5) / 2).\x22\x0a\x09newArray := Array new.\x0a\x09length timesRepeat: [\x0a\x09\x09newArray add: secondArray shift; add: firstArray shift ].\x0a\x09\x0a\x09^ self new\x0a\x09\x09bits: newArray;\x0a\x09\x09yourself",
messageSends: ["min:", "size", "new", "timesRepeat:", "add:", "shift", "bits:", "yourself"],
referencedClasses: ["Array"]
}),
smalltalk.BinaryPositionConverter.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newOn:",
category: 'instance creation',
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
args: ["anArray"],
source: "newOn: anArray\x0a\x09^ self new\x0a\x09\x09bits: anArray;\x0a\x09\x09yourself",
messageSends: ["bits:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.BinaryPositionConverter.klass);


smalltalk.addClass('CoordinateBinder', smalltalk.Object, ['value', 'bits', 'precision'], 'SubWars');
smalltalk.addMethod(
smalltalk.method({
selector: "averageBitLength",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._precision()).__star((2.5));
return $1;
}, function($ctx1) {$ctx1.fill(self,"averageBitLength",{},smalltalk.CoordinateBinder)})},
args: [],
source: "averageBitLength\x0a\x09^ self precision * 2.5",
messageSends: ["*", "precision"],
referencedClasses: []
}),
smalltalk.CoordinateBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "bitsNeeded",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"bitsNeeded",{},smalltalk.CoordinateBinder)})},
args: [],
source: "bitsNeeded\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CoordinateBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "maxCoord",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"maxCoord",{},smalltalk.CoordinateBinder)})},
args: [],
source: "maxCoord\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CoordinateBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "minCoord",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"minCoord",{},smalltalk.CoordinateBinder)})},
args: [],
source: "minCoord\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CoordinateBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "precision",
category: 'accessing',
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
args: [],
source: "precision\x0a\x09^ precision ifNil: [ precision := 1 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.CoordinateBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "precision:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@precision"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"precision:",{aNumber:aNumber},smalltalk.CoordinateBinder)})},
args: ["aNumber"],
source: "precision: aNumber\x0a\x09precision := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.CoordinateBinder);


smalltalk.addMethod(
smalltalk.method({
selector: "bind:precision:",
category: 'not yet classified',
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
args: ["aNumber", "aPrecision"],
source: "bind: aNumber precision: aPrecision\x0a\x09^ self new\x0a\x09\x09precision: aPrecision;\x0a\x09\x09value: aNumber;\x0a\x09\x09bind;\x0a\x09\x09bits",
messageSends: ["precision:", "new", "value:", "bind", "bits"],
referencedClasses: []
}),
smalltalk.CoordinateBinder.klass);


smalltalk.addClass('LatitudeBinder', smalltalk.CoordinateBinder, [], 'SubWars');
smalltalk.addMethod(
smalltalk.method({
selector: "bitsNeeded",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.floor(self._averageBitLength());;
return self}, function($ctx1) {$ctx1.fill(self,"bitsNeeded",{},smalltalk.LatitudeBinder)})},
args: [],
source: "bitsNeeded\x0a\x09<return Math.floor(self._averageBitLength());>",
messageSends: [],
referencedClasses: []
}),
smalltalk.LatitudeBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "maxValue",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (90);
}, function($ctx1) {$ctx1.fill(self,"maxValue",{},smalltalk.LatitudeBinder)})},
args: [],
source: "maxValue\x0a\x09^ 90.0",
messageSends: [],
referencedClasses: []
}),
smalltalk.LatitudeBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "minValue",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (-90);
}, function($ctx1) {$ctx1.fill(self,"minValue",{},smalltalk.LatitudeBinder)})},
args: [],
source: "minValue\x0a\x09^ -90.0",
messageSends: [],
referencedClasses: []
}),
smalltalk.LatitudeBinder);



smalltalk.addClass('LongitudeBinder', smalltalk.CoordinateBinder, [], 'SubWars');
smalltalk.addMethod(
smalltalk.method({
selector: "bitsNeeded",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.ceil(self._averageBitLength());;
return self}, function($ctx1) {$ctx1.fill(self,"bitsNeeded",{},smalltalk.LongitudeBinder)})},
args: [],
source: "bitsNeeded\x0a\x09<return Math.ceil(self._averageBitLength());>",
messageSends: [],
referencedClasses: []
}),
smalltalk.LongitudeBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "maxValue",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (180);
}, function($ctx1) {$ctx1.fill(self,"maxValue",{},smalltalk.LongitudeBinder)})},
args: [],
source: "maxValue\x0a\x09^ 180.0",
messageSends: [],
referencedClasses: []
}),
smalltalk.LongitudeBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "minValue",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (-180);
}, function($ctx1) {$ctx1.fill(self,"minValue",{},smalltalk.LongitudeBinder)})},
args: [],
source: "minValue\x0a\x09^ -180.0",
messageSends: [],
referencedClasses: []
}),
smalltalk.LongitudeBinder);



smalltalk.addClass('GeoHash', smalltalk.Object, ['latBits', 'lngBits', 'lat', 'lng', 'hash', 'latString', 'lngString'], 'SubWars');
smalltalk.GeoHash.comment="Precision | Size (Meters) | Size (Miles / Feet) | Rough Size (US) | Width | Height | # Tiles | Approx # Tiles\x0a1 | 5003530 | 3109 | Continent | 8 | 4 | 32 | 32\x0a2 | 625441 | 388 | State | 32 | 32 | 1024 | 1000\x0a3 | 123264 | 76 | County | 256 | 128 | 32768 | 32000\x0a4 | 19545 | 12 | City | 1024 | 1024 | 1048576 | 1m\x0a5 | 3803 | 2 | Postal Code | 8192 | 4096 | 33554432 | 33m\x0a6 | 610 | 2001 ft | Neighborhood | 32768 | 32768 | 1073741824 | 1b\x0a7 | 118 | 387 ft | Street | 262144 | 1310762 | 34359738368 | 34b\x0a8 | 19 | 62 ft | House / Office | 1048576 | 1048576 | 1099511600000 | 1t\x0a9 | 3.71 | 12 ft | Room | 8388608 | 4194304 | 35184372000000 | 35t\x0a10 | 0.6 | 2 ft | Desk | 33554432 | 33554432 | 1125899900000000 | 1.1quadrillion";
smalltalk.addMethod(
smalltalk.method({
selector: "encode",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._encodeToPrecision_((10));
return self}, function($ctx1) {$ctx1.fill(self,"encode",{},smalltalk.GeoHash)})},
args: [],
source: "encode\x0a\x09self encodeToPrecision: 10",
messageSends: ["encodeToPrecision:"],
referencedClasses: []
}),
smalltalk.GeoHash);

smalltalk.addMethod(
smalltalk.method({
selector: "encodeToPrecision:",
category: 'actions',
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
args: ["aNumber"],
source: "encodeToPrecision: aNumber\x0a\x09self latBits: ((RangedPositionEncoder newFrom: -90.0 to: 90.0) encode: self lat).\x0a\x09self lngBits: ((RangedPositionEncoder newFrom: -180.0 to: 180.0) encode: self lng).\x0a\x09latString := (self latBits \x22first: ((aNumber * 5)/2)+1\x22) join: ''.\x0a\x09lngString := (self lngBits \x22first: ((aNumber * 5)/2)+1\x22) join: ''.\x0a\x09self hash: ((BinaryPositionConverter\x0a\x09\x09\x09\x09merge: latBits\x0a\x09\x09\x09\x09into: lngBits\x0a\x09\x09\x09\x09precision: aNumber) asString first: aNumber)",
messageSends: ["latBits:", "encode:", "lat", "newFrom:to:", "lngBits:", "lng", "join:", "latBits", "lngBits", "hash:", "first:", "asString", "merge:into:precision:"],
referencedClasses: ["RangedPositionEncoder", "BinaryPositionConverter"]
}),
smalltalk.GeoHash);

smalltalk.addMethod(
smalltalk.method({
selector: "hash",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@hash"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"hash",{},smalltalk.GeoHash)})},
args: [],
source: "hash\x0a\x09^ hash",
messageSends: [],
referencedClasses: []
}),
smalltalk.GeoHash);

smalltalk.addMethod(
smalltalk.method({
selector: "hash:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@hash"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"hash:",{aString:aString},smalltalk.GeoHash)})},
args: ["aString"],
source: "hash: aString\x0a\x09hash := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.GeoHash);

smalltalk.addMethod(
smalltalk.method({
selector: "lat",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@lat"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"lat",{},smalltalk.GeoHash)})},
args: [],
source: "lat\x0a\x09^ lat",
messageSends: [],
referencedClasses: []
}),
smalltalk.GeoHash);

smalltalk.addMethod(
smalltalk.method({
selector: "lat:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@lat"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"lat:",{aNumber:aNumber},smalltalk.GeoHash)})},
args: ["aNumber"],
source: "lat: aNumber\x0a\x09lat := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.GeoHash);

smalltalk.addMethod(
smalltalk.method({
selector: "latBits",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@latBits"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"latBits",{},smalltalk.GeoHash)})},
args: [],
source: "latBits\x0a\x09^ latBits",
messageSends: [],
referencedClasses: []
}),
smalltalk.GeoHash);

smalltalk.addMethod(
smalltalk.method({
selector: "latBits:",
category: 'accessing',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@latBits"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"latBits:",{anArray:anArray},smalltalk.GeoHash)})},
args: ["anArray"],
source: "latBits: anArray\x0a\x09latBits := anArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.GeoHash);

smalltalk.addMethod(
smalltalk.method({
selector: "latString",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@latString"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"latString",{},smalltalk.GeoHash)})},
args: [],
source: "latString\x0a\x09^ latString",
messageSends: [],
referencedClasses: []
}),
smalltalk.GeoHash);

smalltalk.addMethod(
smalltalk.method({
selector: "lng",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@lng"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"lng",{},smalltalk.GeoHash)})},
args: [],
source: "lng\x0a\x09^ lng",
messageSends: [],
referencedClasses: []
}),
smalltalk.GeoHash);

smalltalk.addMethod(
smalltalk.method({
selector: "lng:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@lng"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"lng:",{aNumber:aNumber},smalltalk.GeoHash)})},
args: ["aNumber"],
source: "lng: aNumber\x0a\x09lng := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.GeoHash);

smalltalk.addMethod(
smalltalk.method({
selector: "lngBits",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@lngBits"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"lngBits",{},smalltalk.GeoHash)})},
args: [],
source: "lngBits\x0a\x09^ lngBits",
messageSends: [],
referencedClasses: []
}),
smalltalk.GeoHash);

smalltalk.addMethod(
smalltalk.method({
selector: "lngBits:",
category: 'accessing',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@lngBits"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"lngBits:",{anArray:anArray},smalltalk.GeoHash)})},
args: ["anArray"],
source: "lngBits: anArray\x0a\x09lngBits := anArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.GeoHash);

smalltalk.addMethod(
smalltalk.method({
selector: "lngString",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@lngString"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"lngString",{},smalltalk.GeoHash)})},
args: [],
source: "lngString\x0a\x09^ lngString",
messageSends: [],
referencedClasses: []
}),
smalltalk.GeoHash);

smalltalk.addMethod(
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("a GeoHash( ".__comma(self._hash())).__comma(" )");
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{},smalltalk.GeoHash)})},
args: [],
source: "printString\x0a\x09^ 'a GeoHash( ', self hash, ' )'",
messageSends: [",", "hash"],
referencedClasses: []
}),
smalltalk.GeoHash);


smalltalk.addMethod(
smalltalk.method({
selector: "encodeLat:lng:",
category: 'instance creation',
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
args: ["lat", "lng"],
source: "encodeLat: lat lng: lng\x0a\x09^ self new\x0a\x09\x09lat: lat;\x0a\x09\x09lng: lng;\x0a\x09\x09encode;\x0a\x09\x09yourself",
messageSends: ["lat:", "new", "lng:", "encode", "yourself"],
referencedClasses: []
}),
smalltalk.GeoHash.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "encodeLat:lng:precision:",
category: 'instance creation',
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
args: ["lat", "lng", "aNumber"],
source: "encodeLat: lat lng: lng precision: aNumber\x0a\x09^ self new\x0a\x09\x09lat: lat;\x0a\x09\x09lng: lng;\x0a\x09\x09encodeToPrecision: aNumber;\x0a\x09\x09yourself",
messageSends: ["lat:", "new", "lng:", "encodeToPrecision:", "yourself"],
referencedClasses: []
}),
smalltalk.GeoHash.klass);


smalltalk.addClass('RangedPositionEncoder', smalltalk.Object, ['rangeMin', 'rangeMax', 'min', 'max', 'bits', 'precision'], 'SubWars');
smalltalk.RangedPositionEncoder.comment="I encode the position of a value within a range and output a bitstring.\x0a\x0aExample:\x0a\x09| encoder |\x0a    encoder := RangedPositionEncoder newFrom: -180.0 to: 180.0.\x0a    encoder encode: -180.0. \x22=> #( 0 0 0 0 0 0 0 0 0 0 )\x22\x0a\x0ahttps://github.com/paulasmuth/redis_geohash/blob/master/lib/redis_geohash/geohash.rb#L58-L67";
smalltalk.addMethod(
smalltalk.method({
selector: "bits",
category: 'accessing',
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
args: [],
source: "bits\x0a\x09^ bits ifNil: [ bits := Array new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "bits:",
category: 'accessing',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@bits"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"bits:",{anArray:anArray},smalltalk.RangedPositionEncoder)})},
args: ["anArray"],
source: "bits: anArray\x0a\x09bits := anArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "encode:",
category: 'encoding',
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
args: ["aValue"],
source: "encode: aValue\x0a\x09self reset.\x0a\x09[ self needsRefinement ] whileTrue: [\x0a\x09\x09aValue >  self midpoint\x0a\x09\x09\x09ifTrue: [ self refinePositive ]\x0a\x09\x09\x09ifFalse: [ self refineNegative ]].\x0a\x0a\x09^ self bits",
messageSends: ["reset", "whileTrue:", "ifTrue:ifFalse:", "refinePositive", "refineNegative", ">", "midpoint", "needsRefinement", "bits"],
referencedClasses: []
}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "max",
category: 'accessing',
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
args: [],
source: "max\x0a\x09^ max ifNil: [ max := self rangeMax ]",
messageSends: ["ifNil:", "rangeMax"],
referencedClasses: []
}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "max:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@max"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"max:",{aNumber:aNumber},smalltalk.RangedPositionEncoder)})},
args: ["aNumber"],
source: "max: aNumber\x0a\x09max := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "midpoint",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._min()).__plus(self._max())).__slash((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"midpoint",{},smalltalk.RangedPositionEncoder)})},
args: [],
source: "midpoint\x0a\x09^ (self min + self max) / 2.0",
messageSends: ["/", "+", "max", "min"],
referencedClasses: []
}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "min",
category: 'accessing',
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
args: [],
source: "min\x0a\x09^ min ifNil: [ min := self rangeMin ]",
messageSends: ["ifNil:", "rangeMin"],
referencedClasses: []
}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "min:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@min"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"min:",{aNumber:aNumber},smalltalk.RangedPositionEncoder)})},
args: ["aNumber"],
source: "min: aNumber\x0a\x09min := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "needsRefinement",
category: 'querying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._bits())._size()).__lt(self._precision());
return $1;
}, function($ctx1) {$ctx1.fill(self,"needsRefinement",{},smalltalk.RangedPositionEncoder)})},
args: [],
source: "needsRefinement\x0a\x09^ self bits size < self precision",
messageSends: ["<", "precision", "size", "bits"],
referencedClasses: []
}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "precision",
category: 'accessing',
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
args: [],
source: "precision\x0a\x09^ precision ifNil: [ precision := 20 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "precision:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@precision"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"precision:",{anInteger:anInteger},smalltalk.RangedPositionEncoder)})},
args: ["anInteger"],
source: "precision: anInteger\x0a\x09precision := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "rangeMax",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@rangeMax"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rangeMax",{},smalltalk.RangedPositionEncoder)})},
args: [],
source: "rangeMax\x0a\x09^ rangeMax",
messageSends: [],
referencedClasses: []
}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "rangeMax:",
category: 'accessing',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rangeMax"]=aValue;
return self}, function($ctx1) {$ctx1.fill(self,"rangeMax:",{aValue:aValue},smalltalk.RangedPositionEncoder)})},
args: ["aValue"],
source: "rangeMax: aValue\x0a\x09rangeMax := aValue",
messageSends: [],
referencedClasses: []
}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "rangeMin",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@rangeMin"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rangeMin",{},smalltalk.RangedPositionEncoder)})},
args: [],
source: "rangeMin\x0a\x09^ rangeMin",
messageSends: [],
referencedClasses: []
}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "rangeMin:",
category: 'accessing',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rangeMin"]=aValue;
return self}, function($ctx1) {$ctx1.fill(self,"rangeMin:",{aValue:aValue},smalltalk.RangedPositionEncoder)})},
args: ["aValue"],
source: "rangeMin: aValue\x0a\x09rangeMin := aValue",
messageSends: [],
referencedClasses: []
}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "refineNegative",
category: 'encoding',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._bits())._add_((0));
self._max_(self._midpoint());
return self}, function($ctx1) {$ctx1.fill(self,"refineNegative",{},smalltalk.RangedPositionEncoder)})},
args: [],
source: "refineNegative\x0a\x09self bits add: 0.\x0a\x09self max: self midpoint",
messageSends: ["add:", "bits", "max:", "midpoint"],
referencedClasses: []
}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "refinePositive",
category: 'encoding',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._bits())._add_((1));
self._min_(self._midpoint());
return self}, function($ctx1) {$ctx1.fill(self,"refinePositive",{},smalltalk.RangedPositionEncoder)})},
args: [],
source: "refinePositive\x0a\x09self bits add: 1.\x0a\x09self min: self midpoint",
messageSends: ["add:", "bits", "min:", "midpoint"],
referencedClasses: []
}),
smalltalk.RangedPositionEncoder);

smalltalk.addMethod(
smalltalk.method({
selector: "reset",
category: 'encoding',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._bits_(nil);
_st($1)._min_(nil);
$2=_st($1)._max_(nil);
return self}, function($ctx1) {$ctx1.fill(self,"reset",{},smalltalk.RangedPositionEncoder)})},
args: [],
source: "reset\x0a\x09self\x0a\x09\x09bits: nil;\x0a\x09\x09min: nil;\x0a\x09\x09max: nil",
messageSends: ["bits:", "min:", "max:"],
referencedClasses: []
}),
smalltalk.RangedPositionEncoder);


smalltalk.addMethod(
smalltalk.method({
selector: "newFrom:to:",
category: 'instance creation',
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
args: ["aMinValue", "aMaxValue"],
source: "newFrom: aMinValue to: aMaxValue\x0a\x09^ self new\x0a\x09\x09rangeMin: aMinValue;\x0a\x09\x09rangeMax: aMaxValue;\x0a\x09\x09yourself",
messageSends: ["rangeMin:", "new", "rangeMax:", "yourself"],
referencedClasses: []
}),
smalltalk.RangedPositionEncoder.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newFrom:to:precision:",
category: 'instance creation',
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
args: ["aMinValue", "aMaxValue", "aPrecision"],
source: "newFrom: aMinValue to: aMaxValue precision: aPrecision\x0a\x09^ self new\x0a\x09\x09rangeMin: aMinValue;\x0a\x09\x09rangeMax: aMaxValue;\x0a\x09\x09precision: aPrecision;\x0a\x09\x09yourself",
messageSends: ["rangeMin:", "new", "rangeMax:", "precision:", "yourself"],
referencedClasses: []
}),
smalltalk.RangedPositionEncoder.klass);


smalltalk.addClass('SubWars', smalltalk.Object, [], 'SubWars');


smalltalk.addMethod(
smalltalk.method({
selector: "shift",
category: '*SubWars',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.shift();;
return self}, function($ctx1) {$ctx1.fill(self,"shift",{},smalltalk.Array)})},
args: [],
source: "shift\x0a\x09\x22Remove and answer my first item\x22\x0a\x09<return self.shift();>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

