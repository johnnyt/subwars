smalltalk.addPackage('SubWars-Client', {});
smalltalk.addClass('SubWarsApp', smalltalk.Widget, ['div', 'client', 'geo', 'currentLocation', 'brand', 'nav', 'tools', 'map', 'polymaps', 'consoleForm', 'positionWatch'], 'SubWars-Client');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
(self['@client']=smalltalk.send((smalltalk.FayeClient || FayeClient), "_new", []));
(self['@geo']=smalltalk.send((smalltalk.GeoLocation || GeoLocation), "_new", []));
(self['@currentLocation']=smalltalk.send((smalltalk.Location || Location), "_newAtPARC", []));
(self['@polymaps']=smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_org", []), "_polymaps", []));
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09client%20%3A%3D%20FayeClient%20new.%0A%09geo%20%3A%3D%20GeoLocation%20new.%0A%09currentLocation%20%3A%3D%20Location%20newAtPARC.%0A%09polymaps%20%3A%3D%20window%20org%20polymaps.'),
messageSends: ["initialize", "new", "newAtPARC", "polymaps", "org"],
referencedClasses: ["FayeClient", "GeoLocation", "Location"]
}),
smalltalk.SubWarsApp);

smalltalk.addMethod(
unescape('_pageClasses'),
smalltalk.method({
selector: unescape('pageClasses'),
category: 'accessing',
fn: function (){
var self=this;
return [(smalltalk.MapPage || MapPage)];
return self;},
args: [],
source: unescape('pageClasses%0A%09%5E%7B%20MapPage%20%7D'),
messageSends: [],
referencedClasses: ["MapPage"]
}),
smalltalk.SubWarsApp);

smalltalk.addMethod(
unescape('_renderNavOn_'),
smalltalk.method({
selector: unescape('renderNavOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("navbar%20navbar-fixed-top")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("navbar-inner")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("container-fluid")]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", [unescape("btn%20btn-navbar")]);smalltalk.send($rec, "_at_put_", [unescape("data-toggle"), "collapse"]);smalltalk.send($rec, "_at_put_", [unescape("data-target"), unescape(".nav-collapse")]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_span", []), "_class_", [unescape("icon-bar")]);smalltalk.send(smalltalk.send(html, "_span", []), "_class_", [unescape("icon-bar")]);return smalltalk.send(smalltalk.send(html, "_span", []), "_class_", [unescape("icon-bar")]);})]);})(smalltalk.send(html, "_a", []));(self['@brand']=(function($rec){smalltalk.send($rec, "_class_", ["brand"]);return smalltalk.send($rec, "_href_", [unescape("%23")]);})(smalltalk.send(html, "_a", [])));return (function($rec){smalltalk.send($rec, "_class_", [unescape("nav-collapse")]);return smalltalk.send($rec, "_with_", [(function(){(self['@nav']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["nav"]));return (self['@tools']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", [unescape("nav%20pull-right")]));})]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderNavOn%3A%20html%0A%09html%20div%20class%3A%20%27navbar%20navbar-fixed-top%27%3B%20with%3A%20%5B%0A%09%09html%20div%20class%3A%20%27navbar-inner%27%3B%20with%3A%20%5B%0A%09%09%09html%20div%20class%3A%20%27container-fluid%27%3B%20with%3A%20%5B%0A%09%09%09%09html%20a%20class%3A%20%27btn%20btn-navbar%27%3B%0A%09%09%09%09%09at%3A%20%27data-toggle%27%20put%3A%20%27collapse%27%3B%0A%09%09%09%09%09at%3A%20%27data-target%27%20put%3A%20%27.nav-collapse%27%3B%0A%09%09%09%09%09with%3A%20%5Bhtml%20span%20class%3A%20%27icon-bar%27.%20html%20span%20class%3A%20%27icon-bar%27.%20html%20span%20class%3A%20%27icon-bar%27%5D.%0A%09%09%09%09brand%20%3A%3D%20html%20a%20class%3A%20%27brand%27%3B%20href%3A%20%27%23%27.%0A%09%09%09%09html%20div%20class%3A%20%27nav-collapse%27%3B%20with%3A%20%5B%20%0A%09%09%09%09%09nav%20%3A%3D%20html%20ul%20class%3A%20%27nav%27.%0A%09%09%09%09%09tools%20%3A%3D%20html%20ul%20class%3A%20%27nav%20pull-right%27%5D%5D%5D%5D'),
messageSends: ["class:", "with:", "at:put:", "span", "a", "href:", "ul", "div"],
referencedClasses: []
}),
smalltalk.SubWarsApp);

smalltalk.addMethod(
unescape('_updateTools'),
smalltalk.method({
selector: unescape('updateTools'),
category: 'rendering',
fn: function (){
var self=this;
smalltalk.send(self['@tools'], "_contents_", [(function(html){return (function($rec){smalltalk.send($rec, "_class_", ["dropdown"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_class_", [unescape("dropdown-toggle")]);smalltalk.send($rec, "_at_put_", [unescape("data-toggle"), "dropdown"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_with_", ["Tools "]);return smalltalk.send(smalltalk.send(html, "_tag_", ["b"]), "_class_", ["caret"]);})]);})(smalltalk.send(html, "_a", []));return (function($rec){smalltalk.send($rec, "_class_", [unescape("dropdown-menu")]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", ["Toggle IDE"]);smalltalk.send($rec, "_href_", [unescape("%23ide")]);return smalltalk.send($rec, "_onClick_", [(function(e){smalltalk.send(e, "_preventDefault", []);return smalltalk.send((typeof window == 'undefined' ? nil : window), "_toggleAmberIDE", []);})]);})(smalltalk.send(html, "_a", []));})]);smalltalk.send(smalltalk.send(html, "_li", []), "_class_", ["divider"]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", ["Browse SubWars"]);smalltalk.send($rec, "_href_", [unescape("%23browse")]);return smalltalk.send($rec, "_onClick_", [(function(e){smalltalk.send(e, "_preventDefault", []);return smalltalk.send((smalltalk.Browser || Browser), "_openOn_", [(smalltalk.SubWarsApp || SubWarsApp)]);})]);})(smalltalk.send(html, "_a", []));})]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", ["Inspect SubWars"]);smalltalk.send($rec, "_href_", [unescape("%23inspect")]);return smalltalk.send($rec, "_onClick_", [(function(e){smalltalk.send(e, "_preventDefault", []);return smalltalk.send(smalltalk.send((smalltalk.SubWarsApp || SubWarsApp), "_instance", []), "_inspect", []);})]);})(smalltalk.send(html, "_a", []));})]);return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", ["Restart SubWars"]);smalltalk.send($rec, "_href_", [unescape("%23restart")]);return smalltalk.send($rec, "_onClick_", [(function(e){smalltalk.send(e, "_preventDefault", []);return smalltalk.send((smalltalk.SubWarsApp || SubWarsApp), "_restart", []);})]);})(smalltalk.send(html, "_a", []));})]);})]);})(smalltalk.send(html, "_ul", []));})]);})(smalltalk.send(html, "_li", []));})]);
return self;},
args: [],
source: unescape('updateTools%0A%09tools%20contents%3A%20%5B%3Ahtml%7C%0A%09%09html%20li%20class%3A%20%27dropdown%27%3B%20with%3A%20%5B%0A%09%09%09html%20a%20href%3A%20%27%23%27%3B%20class%3A%20%27dropdown-toggle%27%3B%20at%3A%20%27data-toggle%27%20put%3A%20%27dropdown%27%3B%20with%3A%20%5B%0A%09%09%09%09html%20with%3A%20%27Tools%20%27.%0A%09%09%09%09%28html%20tag%3A%20%27b%27%29%20class%3A%20%27caret%27%5D.%0A%09%09%09html%20ul%20class%3A%20%27dropdown-menu%27%3B%20with%3A%20%5B%0A%09%09%09%09html%20li%20with%3A%20%5Bhtml%20a%20with%3A%20%27Toggle%20IDE%27%3B%20href%3A%20%27%23ide%27%3B%20onClick%3A%20%5B%3Ae%7C%20e%20preventDefault.%20window%20toggleAmberIDE%5D%5D.%0A%09%09%09%09html%20li%20class%3A%20%27divider%27.%0A%09%09%09%09html%20li%20with%3A%20%5Bhtml%20a%20with%3A%20%27Browse%20SubWars%27%3B%20href%3A%20%27%23browse%27%3B%20onClick%3A%20%5B%3Ae%7C%20e%20preventDefault.%20Browser%20openOn%3A%20SubWarsApp%5D%5D.%0A%09%09%09%09html%20li%20with%3A%20%5Bhtml%20a%20with%3A%20%27Inspect%20SubWars%27%3B%20href%3A%20%27%23inspect%27%3B%20onClick%3A%20%5B%3Ae%7C%20e%20preventDefault.%20SubWarsApp%20instance%20inspect%5D%5D.%0A%09%09%09%09html%20li%20with%3A%20%5Bhtml%20a%20with%3A%20%27Restart%20SubWars%27%3B%20href%3A%20%27%23restart%27%3B%20onClick%3A%20%5B%3Ae%7C%20e%20preventDefault.%20SubWarsApp%20restart%5D%5D%5D%5D%5D'),
messageSends: ["contents:", "class:", "with:", "href:", "at:put:", "tag:", "a", "li", "onClick:", "preventDefault", "toggleAmberIDE", "openOn:", "inspect", "instance", "restart", "ul"],
referencedClasses: ["Browser", "SubWarsApp"]
}),
smalltalk.SubWarsApp);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(self['@div']=(function($rec){smalltalk.send($rec, "_id_", ["subwars"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_renderNavOn_", [html]);smalltalk.send($rec, "_renderMapOn_", [html]);smalltalk.send($rec, "_update", []);return smalltalk.send($rec, "_startTracking", []);})(self);})]);})(smalltalk.send(html, "_div", [])));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09div%20%3A%3D%20html%20div%20id%3A%20%27subwars%27%3B%20with%3A%20%5B%0A%09%09self%20renderNavOn%3A%20html%3B%0A%09%09%09renderMapOn%3A%20html%3B%0A%09%09%09update%3B%0A%09%09%09startTracking%5D'),
messageSends: ["id:", "with:", "renderNavOn:", "renderMapOn:", "update", "startTracking", "div"],
referencedClasses: []
}),
smalltalk.SubWarsApp);

smalltalk.addMethod(
unescape('_show'),
smalltalk.method({
selector: unescape('show'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;},
args: [],
source: unescape('show%0A%09self%20appendToJQuery%3A%20%27body%27%20asJQuery'),
messageSends: ["appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.SubWarsApp);

smalltalk.addMethod(
unescape('_update'),
smalltalk.method({
selector: unescape('update'),
category: 'rendering',
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_updateNav", []);return smalltalk.send($rec, "_updateTools", []);})(self);
return self;},
args: [],
source: unescape('update%0A%09self%20updateNav%3B%0A%09%09updateTools'),
messageSends: ["updateNav", "updateTools"],
referencedClasses: []
}),
smalltalk.SubWarsApp);

smalltalk.addMethod(
unescape('_renderMapOn_'),
smalltalk.method({
selector: unescape('renderMapOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
var svg=nil;
smalltalk.send(smalltalk.send(html, "_div", []), "_id_", ["map"]);
svg = document.getElementById("map").appendChild(org.polymaps.svg("svg"));
(self['@map']=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_org", []), "_polymaps", []), "_map", []), "_container_", [svg]));
smalltalk.send(self['@map'], "_zoom_", [(16)]);
self['@map'].add(org.polymaps.image()
		.url(org.polymaps.url("http://{S}tile.cloudmade.com"
		+ "/4dc7790c1c744bdab4909fdb857d642d" // subwars
		+ "/999/256/{Z}/{X}/{Y}.png")
		.hosts(["a.", "b.", "c.", ""])));;
return self;},
args: ["html"],
source: unescape('renderMapOn%3A%20html%0A%09%7C%20svg%20%7C%0A%09html%20div%20id%3A%20%27map%27.%0A%09%3Csvg%20%3D%20document.getElementById%28%22map%22%29.appendChild%28org.polymaps.svg%28%22svg%22%29%29%3E.%0A%09map%20%3A%3D%20window%20org%20polymaps%20map%20container%3A%20svg.%0A%09map%20zoom%3A%2016.%0A%09%22midnight-commander%3A%20999%22%0A%09%22SW-black-basic%3A%2052152%22%0A%09%3Cself%5B%27@map%27%5D.add%28org.polymaps.image%28%29%0A%09%09.url%28org.polymaps.url%28%22http%3A//%7BS%7Dtile.cloudmade.com%22%0A%09%09+%20%22/4dc7790c1c744bdab4909fdb857d642d%22%20//%20subwars%0A%09%09+%20%22/999/256/%7BZ%7D/%7BX%7D/%7BY%7D.png%22%29%0A%09%09.hosts%28%5B%22a.%22%2C%20%22b.%22%2C%20%22c.%22%2C%20%22%22%5D%29%29%29%3B%3E.'),
messageSends: ["id:", "div", "container:", "map", "polymaps", "org", "zoom:"],
referencedClasses: []
}),
smalltalk.SubWarsApp);

smalltalk.addMethod(
unescape('_startTracking'),
smalltalk.method({
selector: unescape('startTracking'),
category: 'actions',
fn: function (){
var self=this;
var getPositionBlock=nil;
smalltalk.send(self, "_stopTracking", []);
(getPositionBlock=(function(){return smalltalk.send(self['@geo'], "_getCurrentPosition_", [(function(pos){return smalltalk.send(self, "_updateLat_lng_", [smalltalk.send(smalltalk.send(pos, "_coords", []), "_latitude", []), smalltalk.send(smalltalk.send(pos, "_coords", []), "_longitude", [])]);})]);}));
(self['@positionWatch']=smalltalk.send(getPositionBlock, "_valueWithInterval_", [(10) * (1000)]));
smalltalk.send(getPositionBlock, "_value", []);
return self;},
args: [],
source: unescape('startTracking%0A%09%7CgetPositionBlock%7C%0A%09self%20stopTracking.%0A%09getPositionBlock%20%3A%3D%20%5Bgeo%20getCurrentPosition%3A%20%5B%3Apos%7C%20self%20updateLat%3A%20pos%20coords%20latitude%20lng%3A%20pos%20coords%20longitude%5D%5D.%0A%09positionWatch%20%3A%3D%20getPositionBlock%20valueWithInterval%3A%2010%20*%201000.%0A%09getPositionBlock%20value.%0A%09%22geo%20watchPosition%3A%20%5B%3Aposition%7C%0A%09%09self%20updateLat%3A%20position%20coords%20latitude%0A%09%09%09lng%3A%20position%20coords%20longitude%5D%22'),
messageSends: ["stopTracking", "getCurrentPosition:", "updateLat:lng:", "latitude", "coords", "longitude", "valueWithInterval:", unescape("*"), "value"],
referencedClasses: []
}),
smalltalk.SubWarsApp);

smalltalk.addMethod(
unescape('_stopTracking'),
smalltalk.method({
selector: unescape('stopTracking'),
category: 'actions',
fn: function (){
var self=this;
(($receiver = self['@positionWatch']) != nil && $receiver != undefined) ? (function(){smalltalk.send((typeof window == 'undefined' ? nil : window), "_clearInterval_", [self['@positionWatch']]);return (self['@positionWatch']=nil);})() : nil;
return self;},
args: [],
source: unescape('stopTracking%0A%09positionWatch%20ifNotNil%3A%20%5B%0A%09%09window%20clearInterval%3A%20positionWatch.%0A%09%09positionWatch%20%3A%3D%20nil%5D%0A%09%22geo%20clearWatch%22'),
messageSends: ["ifNotNil:", "clearInterval:"],
referencedClasses: []
}),
smalltalk.SubWarsApp);

smalltalk.addMethod(
unescape('_destroy'),
smalltalk.method({
selector: unescape('destroy'),
category: 'actions',
fn: function (){
var self=this;
(($receiver = self['@geo']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@geo'], "_clearWatch", []);})() : nil;
(($receiver = self['@client']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@client'], "_disconnect", []);})() : nil;
(($receiver = self['@div']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_remove", []);})() : nil;
(($receiver = self['@positionWatch']) != nil && $receiver != undefined) ? (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_clearInterval_", [self['@positionWatch']]);})() : nil;
return self;},
args: [],
source: unescape('destroy%0A%09geo%20ifNotNil%3A%20%5Bgeo%20clearWatch%5D.%0A%09client%20ifNotNil%3A%20%5Bclient%20disconnect%5D.%0A%09div%20ifNotNil%3A%20%5Bdiv%20asJQuery%20remove%5D.%0A%09positionWatch%20ifNotNil%3A%20%5Bwindow%20clearInterval%3A%20positionWatch%5D'),
messageSends: ["ifNotNil:", "clearWatch", "disconnect", "remove", "asJQuery", "clearInterval:"],
referencedClasses: []
}),
smalltalk.SubWarsApp);

smalltalk.addMethod(
unescape('_updateNav'),
smalltalk.method({
selector: unescape('updateNav'),
category: 'rendering',
fn: function (){
var self=this;
smalltalk.send(self['@nav'], "_contents_", [(function(html){smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){(self['@consoleForm']=(function($rec){smalltalk.send($rec, "_class_", [unescape("form-search%20navbar-search%20pull-left")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_type_", ["text"]);smalltalk.send($rec, "_id_", ["console"]);smalltalk.send($rec, "_placeholder_", ["Chat"]);return smalltalk.send($rec, "_class_", [unescape("search-query%20span1")]);})(smalltalk.send(html, "_input", []));})]);})(smalltalk.send(html, "_form", [])));return smalltalk.send(smalltalk.send(self['@consoleForm'], "_asJQuery", []), "_bind_do_", ["submit", (function(e, input){smalltalk.send(e, "_preventDefault", []);(input=smalltalk.send(unescape("%23console"), "_asJQuery", []));smalltalk.send(self, "_processConsoleCommand_", [smalltalk.send(input, "_val", [])]);return smalltalk.send(input, "_val_", [""]);})]);})]);return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", ["IDE"]);smalltalk.send($rec, "_href_", [unescape("%23ide")]);return smalltalk.send($rec, "_onClick_", [(function(e){smalltalk.send(e, "_preventDefault", []);return smalltalk.send((smalltalk.Browser || Browser), "_openOn_", [(smalltalk.SubWarsApp || SubWarsApp)]);})]);})(smalltalk.send(html, "_a", []));})]);})]);
return self;},
args: [],
source: unescape('updateNav%0A%09nav%20contents%3A%20%5B%3Ahtml%7C%0A%09%09html%20li%20with%3A%20%5B%0A%09%09consoleForm%20%3A%3D%20html%20form%20class%3A%20%27form-search%20navbar-search%20pull-left%27%3B%20with%3A%20%5B%0A%09%09%09html%20input%0A%09%09%09%09type%3A%20%27text%27%3B%0A%09%09%09%09id%3A%20%27console%27%3B%0A%09%09%09%09placeholder%3A%20%27Chat%27%3B%0A%09%09%09%09class%3A%20%27search-query%20span1%27%5D.%0A%0A%09%09consoleForm%20asJQuery%20bind%3A%20%27submit%27%20do%3A%20%5B%3Ae%20%3Ainput%7C%0A%09%09%09e%20preventDefault.%0A%09%09%09input%20%3A%3D%20%27%23console%27%20asJQuery.%0A%09%09%09self%20processConsoleCommand%3A%20input%20val.%0A%09%09%09input%20val%3A%20%27%27%5D%5D.%0A%09%09html%20li%20with%3A%20%5Bhtml%20a%20with%3A%20%27IDE%27%3B%20href%3A%20%27%23ide%27%3B%20onClick%3A%20%5B%3Ae%7C%20e%20preventDefault.%20Browser%20openOn%3A%20SubWarsApp%5D%5D%5D'),
messageSends: ["contents:", "with:", "li", "class:", "type:", "id:", "placeholder:", "input", "form", "bind:do:", "asJQuery", "preventDefault", "processConsoleCommand:", "val", "val:", "href:", "onClick:", "openOn:", "a"],
referencedClasses: ["Browser", "SubWarsApp"]
}),
smalltalk.SubWarsApp);

smalltalk.addMethod(
unescape('_processConsoleCommand_'),
smalltalk.method({
selector: unescape('processConsoleCommand%3A'),
category: 'actions',
fn: function (aCommandString){
var self=this;
((($receiver = smalltalk.send(aCommandString, "_match_", [unescape("%5Egh%20")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["I should lookup the GeoHash you provided"]);})() : (function(){return smalltalk.send(self['@client'], "_chat_", [aCommandString]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["I should lookup the GeoHash you provided"]);}), (function(){return smalltalk.send(self['@client'], "_chat_", [aCommandString]);})]));
return self;},
args: ["aCommandString"],
source: unescape('processConsoleCommand%3A%20aCommandString%0A%09%28aCommandString%20match%3A%20%27%5Egh%20%27%29%0A%09%09ifTrue%3A%20%5Bwindow%20alert%3A%20%27I%20should%20lookup%20the%20GeoHash%20you%20provided%27%5D%0A%09%09ifFalse%3A%20%5Bclient%20chat%3A%20aCommandString%5D'),
messageSends: ["ifTrue:ifFalse:", "match:", "alert:", "chat:"],
referencedClasses: []
}),
smalltalk.SubWarsApp);

smalltalk.addMethod(
unescape('_updateLat_lng_'),
smalltalk.method({
selector: unescape('updateLat%3Alng%3A'),
category: 'actions',
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
return self;},
args: ["aLat", "aLng"],
source: unescape('updateLat%3A%20aLat%20lng%3A%20aLng%0A%09%7Cloc%20geoJson%20coord%7C%0A%09loc%20%3A%3D%20Location%20newLat%3A%20aLat%20lng%3A%20aLng.%0A%09loc%20updateGeoHash.%0A%09map%20center%3A%20%23%7B%20%27lat%27%20-%3E%20aLat%20.%20%27lon%27%20-%3E%20aLng%20%7D.%0A%0A%09coord%20%3A%3D%20Array%20new%3A%205.%0A%09coord%0A%09%09at%3A%201%20put%3A%20%28Array%20with%3A%20loc%20boundingMinLng%20with%3A%20loc%20boundingMinLat%29%3B%0A%09%09at%3A%202%20put%3A%20%28Array%20with%3A%20loc%20boundingMaxLng%20with%3A%20loc%20boundingMinLat%29%3B%0A%09%09at%3A%203%20put%3A%20%28Array%20with%3A%20loc%20boundingMaxLng%20with%3A%20loc%20boundingMaxLat%29%3B%0A%09%09at%3A%204%20put%3A%20%28Array%20with%3A%20loc%20boundingMinLng%20with%3A%20loc%20boundingMaxLat%29%3B%0A%09%09at%3A%205%20put%3A%20%28Array%20with%3A%20loc%20boundingMinLng%20with%3A%20loc%20boundingMinLat%29.%0A%09%09%0A%09geoJson%20%3A%3D%20polymaps%20geoJson%0A%09%09features%3A%20%28Array%20new%3A%20%23%7B%20%27geometry%27%20-%3E%20%23%7B%20%27coordinates%27%20-%3E%20coord%20.%20%27type%27%20-%3E%20%27LineString%27%20%7D%20%7D%29%3B%0A%09%09on%3A%20%27load%27%20do%3A%20%5B%20%3Ae%20%7C%20e%20features%20do%3A%20%5B%20%3Afeature%20%7C%0A%09%09%09feature%20element%20setAttribute%3A%20%27style%27%20val%3A%20%27stroke%3A%20red%3B%27%5D%5D.%0A%0A%09map%20add%3A%20geoJson'),
messageSends: ["newLat:lng:", "updateGeoHash", "center:", unescape("-%3E"), "new:", "at:put:", "with:with:", "boundingMinLng", "boundingMinLat", "boundingMaxLng", "boundingMaxLat", "features:", "on:do:", "do:", "features", "setAttribute:val:", "element", "geoJson", "add:"],
referencedClasses: ["Location", "Array"]
}),
smalltalk.SubWarsApp);


smalltalk.SubWarsApp.klass.iVarNames = ['instance'];
smalltalk.addMethod(
unescape('_start'),
smalltalk.method({
selector: unescape('start'),
category: 'actions',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_show", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_instance", []));
return self;},
args: [],
source: unescape('start%0A%09%5Eself%20instance%0A%09%09show%3B%0A%09%09yourself'),
messageSends: ["show", "yourself", "instance"],
referencedClasses: []
}),
smalltalk.SubWarsApp.klass);

smalltalk.addMethod(
unescape('_instance'),
smalltalk.method({
selector: unescape('instance'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@instance']) == nil || $receiver == undefined) ? (function(){return (self['@instance']=smalltalk.send(self, "_new", []));})() : $receiver;
return self;},
args: [],
source: unescape('instance%0A%09%5Einstance%20ifNil%3A%20%5Binstance%20%3A%3D%20self%20new%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.SubWarsApp.klass);

smalltalk.addMethod(
unescape('_restart'),
smalltalk.method({
selector: unescape('restart'),
category: 'actions',
fn: function (){
var self=this;
(($receiver = smalltalk.send(self, "_instance", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_instance", []), "_destroy", []);})() : nil;
(self['@instance']=nil);
return smalltalk.send(self, "_start", []);
return self;},
args: [],
source: unescape('restart%0A%09self%20instance%20ifNotNil%3A%20%5Bself%20instance%20destroy%5D.%0A%09instance%20%3A%3D%20nil.%0A%09%5Eself%20start'),
messageSends: ["ifNotNil:", "instance", "destroy", "start"],
referencedClasses: []
}),
smalltalk.SubWarsApp.klass);

smalltalk.addMethod(
unescape('_main'),
smalltalk.method({
selector: unescape('main'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_start", []);
return self;},
args: [],
source: unescape('main%0A%09self%20start'),
messageSends: ["start"],
referencedClasses: []
}),
smalltalk.SubWarsApp.klass);


smalltalk.addClass('FayeClient', smalltalk.Object, ['faye', 'client'], 'SubWars-Client');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
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
return self;},
args: [],
source: unescape('initialize%0A%09%7C%20loc%20url%20%7C%0A%09faye%20%3A%3D%20window%20at%3A%20%27Faye%27.%0A%09%28faye%20at%3A%20%27Logging%27%29%20at%3A%20%27logLevel%27%20put%3A%20%27info%27.%0A%09faye%20at%3A%20%27logger%27%20put%3A%20%5B%20%3Amsg%20%7C%20console%20log%3A%20msg%20%5D.%0A%09%0A%09loc%20%3A%3D%20window%20location.%0A%09url%20%3A%3D%20location%20protocol%2C%20%27//%27%2C%20location%20hostname.%0A%09loc%20port%20asString%20%3D%20%27%27%20ifFalse%3A%20%5B%20url%20%3A%3D%20url%2C%20%27%3A%27%2C%20loc%20port%20asString%20%5D.%0A%09url%20%3A%3D%20url%2C%20%27/faye%27.%0A%09%0A%09client%20%3A%3D%20%28faye%20at%3A%20%27Client%27%29%20newValue%3A%20url.%0A%09client%20bind%3A%20%27transport%3Adown%27%20do%3A%20%5B%20console%20log%3A%20%27Transport%20down%27%20%5D.%0A%09client%20bind%3A%20%27transport%3Aup%27%20do%3A%20%5B%20console%20log%3A%20%27Transport%20up%27%20%5D.%0A%0A%09client%20subscribe%3A%20%27/chat%27%20do%3A%20%5B%20%3Amsg%20%7C%20window%20alert%3A%20msg%20%5D.'),
messageSends: ["at:", "at:put:", "log:", "location", unescape("%2C"), "protocol", "hostname", "ifFalse:", unescape("%3D"), "asString", "port", "newValue:", "bind:do:", "subscribe:do:", "alert:"],
referencedClasses: []
}),
smalltalk.FayeClient);

smalltalk.addMethod(
unescape('_chat_'),
smalltalk.method({
selector: unescape('chat%3A'),
category: 'chat',
fn: function (aString){
var self=this;
smalltalk.send(self['@client'], "_publish_val_", [unescape("/chat"), aString]);
return self;},
args: ["aString"],
source: unescape('chat%3A%20aString%0A%09client%20publish%3A%20%27/chat%27%20val%3A%20aString'),
messageSends: ["publish:val:"],
referencedClasses: []
}),
smalltalk.FayeClient);

smalltalk.addMethod(
unescape('_disconnect'),
smalltalk.method({
selector: unescape('disconnect'),
category: 'actions',
fn: function (){
var self=this;
(($receiver = self['@client']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@client'], "_disconnect", []);})() : nil;
return self;},
args: [],
source: unescape('disconnect%0A%09client%20ifNotNil%3A%20%5Bclient%20disconnect%5D'),
messageSends: ["ifNotNil:", "disconnect"],
referencedClasses: []
}),
smalltalk.FayeClient);



smalltalk.addClass('Location', smalltalk.Object, ['lat', 'lng', 'precision', 'boundingMinLat', 'boundingMaxLat', 'boundingMinLng', 'boundingMaxLng', 'geoHash'], 'SubWars-Client');
smalltalk.Location.comment=unescape('GeoHash%20-%20encodes%20a%20lat%2Clng%20into%20a%20character%20string.%20The%20length%20of%20the%20string%20determines%20its%20precision.%0A%0Ahttp%3A//geohash.org/site/tips.html%0Ahttp%3A//openlocation.org/geohash/geohash-js/%0Ahttp%3A//en.wikipedia.org/wiki/Geohash')
smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("a%20Location%28%20"), "__comma", [smalltalk.send(self['@lat'], "_asString", [])]), "__comma", [" "]), "__comma", [smalltalk.send(self['@lng'], "_asString", [])]), "__comma", [" "]), "__comma", [smalltalk.send(self, "_geoHash", [])]), "__comma", [unescape("%20%29")]);
return self;},
args: [],
source: unescape('printString%0A%09%5E%27a%20Location%28%20%27%2C%20lat%20asString%2C%20%27%20%27%2C%20lng%20asString%2C%20%27%20%27%2C%20self%20geoHash%2C%20%27%20%29%27'),
messageSends: [unescape("%2C"), "asString", "geoHash"],
referencedClasses: []
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_precision_'),
smalltalk.method({
selector: unescape('precision%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
self['@precision']=anInteger;
return self;},
args: ["anInteger"],
source: unescape('precision%3A%20anInteger%0A%09precision%20%3A%3D%20anInteger'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_precision'),
smalltalk.method({
selector: unescape('precision'),
category: 'accessing',
fn: function (){
var self=this;
return self['@precision'];
return self;},
args: [],
source: unescape('precision%0A%09%5Eprecision'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_lat'),
smalltalk.method({
selector: unescape('lat'),
category: 'accessing',
fn: function (){
var self=this;
return self['@lat'];
return self;},
args: [],
source: unescape('lat%0A%09%5Elat'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_lng'),
smalltalk.method({
selector: unescape('lng'),
category: 'accessing',
fn: function (){
var self=this;
return self['@lng'];
return self;},
args: [],
source: unescape('lng%0A%09%5Elng'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_lng_'),
smalltalk.method({
selector: unescape('lng%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
self['@lng']=aNumber;
return self;},
args: ["aNumber"],
source: unescape('lng%3A%20aNumber%0A%09lng%20%3A%3D%20aNumber'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_lat_'),
smalltalk.method({
selector: unescape('lat%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
self['@lat']=aNumber;
return self;},
args: ["aNumber"],
source: unescape('lat%3A%20aNumber%0A%09lat%20%3A%3D%20aNumber'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
self['@precision']=(7);
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09precision%20%3A%3D%207.'),
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_decodeGeoHash_'),
smalltalk.method({
selector: unescape('decodeGeoHash%3A'),
category: 'converting',
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
return self;},
args: ["aString"],
source: unescape('decodeGeoHash%3A%20aString%0A%09%7C%20minLat%20maxLat%20minLng%20maxLng%20isLongitude%20hashValue%20char%20%7C%0A%09minLat%20%3A%3D%20-90.%0A%09maxLat%20%3A%3D%2090.%0A%09minLng%20%3A%3D%20-180.%0A%09maxLng%20%3A%3D%20180.%0A%09isLongitude%20%3A%3D%20true.%0A%09hashValue%20%3A%3D%200.%0A%0A%09aString%20do%3A%20%5B%0A%09%09char%20%3A%3D%20%28arguments%20at%3A%200%29%20asLowercase.%0A%09%09hashValue%20%3A%3D%20%28%270123456789bcdefghjkmnpqrstuvwxyz%27%20indexOf%3A%20char%29%20-%201.%0A%09%094%20to%3A%200%20by%3A%20-1%20do%3A%20%5B%20%3Abits%20%3Abit%20%7C%0A%09%09%09%22Right%20now%20%27%3E%3E%3E%3E%27%20gets%20turned%20into%20%27%3E%27%20-%20look%20at%20parser.js%3A3680%22%20%0A%09%09%09%3Cbit%20%3D%20eval%28%27%28hashValue%20%3E%3E%27%20+%20%27%3E%3E%20bits%29%20%26%201%27%29%3B%3E.%0A%09%09%09isLongitude%0A%09%09%09%09ifTrue%3A%20%5B%20%3Amid%20%7C%0A%09%09%09%09%09mid%20%3A%3D%20%28maxLng%20+%20minLng%29%20/%202.%0A%09%09%09%09%09bit%20%3D%201%20ifTrue%3A%20%5B%20minLng%20%3A%3D%20mid%20%5D%20ifFalse%3A%20%5B%20maxLng%20%3A%3D%20mid%5D%5D%0A%09%09%09%09ifFalse%3A%20%5B%20%3Amid%20%7C%0A%09%09%09%09%09mid%20%3A%3D%20%28maxLat%20+%20minLat%29%20/%202.%0A%09%09%09%09%09bit%20%3D%201%20ifTrue%3A%20%5B%20minLat%20%3A%3D%20mid%20%5D%20ifFalse%3A%20%5B%20maxLat%20%3A%3D%20mid%5D%5D.%0A%09%09%09isLongitude%20%3A%3D%20isLongitude%20not%5D%5D.%0A%0A%09lat%20%3A%3D%20%28minLat%20+%20maxLat%29%20/%202.%0A%09lng%20%3A%3D%20%28minLng%20+%20maxLng%29%20/%202'),
messageSends: ["do:", "asLowercase", "at:", unescape("-"), "indexOf:", "to:by:do:", "ifTrue:ifFalse:", unescape("/"), unescape("+"), unescape("%3D"), "not"],
referencedClasses: []
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_asGoogleLatLng'),
smalltalk.method({
selector: unescape('asGoogleLatLng'),
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send((typeof google == 'undefined' ? nil : google), "_maps", []), "_at_", ["LatLng"]), "_newValue_value_", [self['@lat'], self['@lng']]);
return self;},
args: [],
source: unescape('asGoogleLatLng%0A%09%5E%28google%20maps%20at%3A%20%27LatLng%27%29%0A%09%09newValue%3A%20lat%0A%09%09value%3A%20lng'),
messageSends: ["newValue:value:", "at:", "maps"],
referencedClasses: []
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_lat_lng_'),
smalltalk.method({
selector: unescape('lat%3Alng%3A'),
category: 'accessing',
fn: function (lat, lng){
var self=this;
self['@lat']=self['@lat'];
self['@lng']=self['@lng'];
smalltalk.send(self, "_updateGeoHash", []);
return self;},
args: ["lat", "lng"],
source: unescape('lat%3A%20lat%20lng%3A%20lng%0A%09lat%20%3A%3D%20lat.%0A%09lng%20%3A%3D%20lng.%0A%09self%20updateGeoHash.'),
messageSends: ["updateGeoHash"],
referencedClasses: []
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_updateGeoHash'),
smalltalk.method({
selector: unescape('updateGeoHash'),
category: 'converting',
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
return self;},
args: [],
source: unescape('updateGeoHash%0A%09%7C%20minLat%20maxLat%20minLng%20maxLng%20isLongitude%20chars%20bits%20hashValue%20%7C%0A%09minLat%20%3A%3D%20-90.%0A%09maxLat%20%3A%3D%2090.%0A%09minLng%20%3A%3D%20-180.%0A%09maxLng%20%3A%3D%20180.%0A%09isLongitude%20%3A%3D%20true.%0A%09chars%20%3A%3D%20%23%28%29.%0A%09bits%20%3A%3D%200.%0A%09hashValue%20%3A%3D%200.%0A%0A%09%5B%20chars%20size%20%3C%20precision%20%5D%20whileTrue%3A%20%5B%0A%09%09isLongitude%0A%09%09%09ifTrue%3A%20%5B%20%3Amid%20%7C%0A%09%09%09%09mid%20%3A%3D%20%28maxLng+minLng%29%20/%202.%0A%09%09%09%09%28lng%20%3E%20mid%29%0A%09%09%09%09%09ifTrue%3A%20%5B%0A%09%09%09%09%09%09%3ChashValue%20%3D%20%28hashValue%20%3C%3C%201%29%20+%201%3B%3E.%0A%09%09%09%09%09%09minLng%20%3A%3D%20mid%20%5D%0A%09%09%09%09%09ifFalse%3A%20%5B%0A%09%09%09%09%09%09%3ChashValue%20%3D%20%28hashValue%20%3C%3C%201%29%20+%200%3B%3E.%0A%09%09%09%09%09%09maxLng%20%3A%3D%20mid%20%5D%5D%0A%09%09%09ifFalse%3A%20%5B%20%3Amid%20%7C%0A%09%09%09%09mid%20%3A%3D%20%28maxLat+minLat%29%20/%202.%0A%09%09%09%09%28lat%20%3E%20mid%29%0A%09%09%09%09%09ifTrue%3A%20%5B%0A%09%09%09%09%09%09%3ChashValue%20%3D%20%28hashValue%20%3C%3C%201%29%20+%201%3B%3E.%0A%09%09%09%09%09%09minLat%20%3A%3D%20mid%20%5D%0A%09%09%09%09%09ifFalse%3A%20%5B%0A%09%09%09%09%09%09%3ChashValue%20%3D%20%28hashValue%20%3C%3C%201%29%20+%200%3B%3E.%0A%09%09%09%09%09%09maxLat%20%3A%3D%20mid%20%5D%5D.%0A%0A%09%09isLongitude%20%3A%3D%20isLongitude%20not.%0A%09%09bits%20%3A%3D%20bits%20+%201.%0A%09%09%28bits%20%3D%205%29%20ifTrue%3A%20%5B%0A%09%09%09chars%20add%3A%20%28%270123456789bcdefghjkmnpqrstuvwxyz%27%20at%3A%20%28hashValue+1%29%29.%0A%09%09%09bits%20%3A%3D%200.%0A%09%09%09hashValue%20%3A%3D%200%20%5D%5D.%0A%0A%09boundingMinLat%20%3A%3D%20minLat.%0A%09boundingMaxLat%20%3A%3D%20maxLat.%0A%09boundingMinLng%20%3A%3D%20minLng.%0A%09boundingMaxLng%20%3A%3D%20maxLng.%0A%0A%09geoHash%20%3A%3D%20chars%20join%3A%20%27%27.'),
messageSends: ["whileTrue:", unescape("%3C"), "size", "ifTrue:ifFalse:", unescape("/"), unescape("+"), unescape("%3E"), "not", "ifTrue:", unescape("%3D"), "add:", "at:", "join:"],
referencedClasses: []
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_geoHash'),
smalltalk.method({
selector: unescape('geoHash'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@geoHash']) == nil || $receiver == undefined) ? (function(){smalltalk.send(self, "_updateGeoHash", []);return self['@geoHash'];})() : $receiver;
return self;},
args: [],
source: unescape('geoHash%0A%09%5EgeoHash%20ifNil%3A%20%5B%20self%20updateGeoHash.%20geoHash%20%5D'),
messageSends: ["ifNil:", "updateGeoHash"],
referencedClasses: []
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_boundingMinLat'),
smalltalk.method({
selector: unescape('boundingMinLat'),
category: 'accessing',
fn: function (){
var self=this;
return self['@boundingMinLat'];
return self;},
args: [],
source: unescape('boundingMinLat%0A%09%5EboundingMinLat'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_boundingMinLng'),
smalltalk.method({
selector: unescape('boundingMinLng'),
category: 'accessing',
fn: function (){
var self=this;
return self['@boundingMinLng'];
return self;},
args: [],
source: unescape('boundingMinLng%0A%09%5EboundingMinLng'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_boundingMaxLng'),
smalltalk.method({
selector: unescape('boundingMaxLng'),
category: 'accessing',
fn: function (){
var self=this;
return self['@boundingMaxLng'];
return self;},
args: [],
source: unescape('boundingMaxLng%0A%09%5EboundingMaxLng'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Location);

smalltalk.addMethod(
unescape('_boundingMaxLat'),
smalltalk.method({
selector: unescape('boundingMaxLat'),
category: 'accessing',
fn: function (){
var self=this;
return self['@boundingMaxLat'];
return self;},
args: [],
source: unescape('boundingMaxLat%0A%09%5EboundingMaxLat'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Location);


smalltalk.addMethod(
unescape('_decode_'),
smalltalk.method({
selector: unescape('decode%3A'),
category: 'instance creation',
fn: function (aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_decode_", [aString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aString"],
source: unescape('decode%3A%20aString%0A%09%5Eself%20new%0A%09%09decode%3A%20aString%3B%0A%09%09yourself'),
messageSends: ["decode:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Location.klass);

smalltalk.addMethod(
unescape('_newLat_lng_'),
smalltalk.method({
selector: unescape('newLat%3Alng%3A'),
category: 'instance creation',
fn: function (aLatitude, aLongitude){
var self=this;
return (function($rec){smalltalk.send($rec, "_lat_", [aLatitude]);return smalltalk.send($rec, "_lng_", [aLongitude]);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aLatitude", "aLongitude"],
source: unescape('newLat%3A%20aLatitude%20lng%3A%20aLongitude%0A%09%5Eself%20new%0A%09%09lat%3A%20aLatitude%3B%0A%09%09lng%3A%20aLongitude'),
messageSends: ["lat:", "lng:", "new"],
referencedClasses: []
}),
smalltalk.Location.klass);

smalltalk.addMethod(
unescape('_newAtPARC'),
smalltalk.method({
selector: unescape('newAtPARC'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_lat_", [(37.401119)]);return smalltalk.send($rec, "_lng_", [(-122.149086)]);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('newAtPARC%0A%09%5Eself%20new%0A%09%09lat%3A%2037.401119%3B%0A%09%09lng%3A%20-122.149086'),
messageSends: ["lat:", "lng:", "new"],
referencedClasses: []
}),
smalltalk.Location.klass);


smalltalk.addClass('GeoHash', smalltalk.Object, [], 'SubWars-Client');
smalltalk.addMethod(
unescape('_generateGrid'),
smalltalk.method({
selector: unescape('generateGrid'),
category: 'actions',
fn: function (){
var self=this;
var str=nil;
smalltalk.send(smalltalk.send(self, "_table", []), "_withIndexDo_", [(function(row, y){return smalltalk.send(row, "_withIndexDo_", [(function(ch, x){(str=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(x, "_asString", []), "__comma", [unescape("@")]), "__comma", [smalltalk.send(y, "_asString", [])]), "__comma", [" "]), "__comma", [ch]));return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [str]);})]);})]);
return self;},
args: [],
source: unescape('generateGrid%0A%09%7Cstr%7C%0A%09self%20table%20withIndexDo%3A%20%5B%3Arow%20%3Ay%7C%0A%09%09row%20withIndexDo%3A%20%5B%3Ach%20%3Ax%7C%0A%09%09%09str%20%3A%3D%20x%20asString%2C%20%27@%27%2C%20y%20asString%2C%20%27%20%27%2C%20ch.%0A%09%09%09console%20log%3A%20str%5D%5D'),
messageSends: ["withIndexDo:", "table", unescape("%2C"), "asString", "log:"],
referencedClasses: []
}),
smalltalk.GeoHash);

smalltalk.addMethod(
unescape('_table'),
smalltalk.method({
selector: unescape('table'),
category: 'accessing',
fn: function (){
var self=this;
return [["b", "c", "f", "g", "u", "v", "y", "a"], ["8", "9", "d", "e", "s", "t", "w", "x"], ["2", "3", "6", "7", "k", "m", "q", "r"], ["0", "1", "4", "5", "h", "j", "n", "p"]];
return self;},
args: [],
source: unescape('table%0A%09%5E%23%28%0A%09%23%28%20%27b%27%09%27c%27%09%27f%27%09%27g%27%09%27u%27%09%27v%27%09%27y%27%09%27a%27%20%29%0A%09%23%28%20%278%27%09%279%27%09%27d%27%09%27e%27%09%27s%27%09%27t%27%09%27w%27%09%27x%27%20%29%0A%09%23%28%20%272%27%09%273%27%09%276%27%09%277%27%09%27k%27%09%27m%27%09%27q%27%09%27r%27%20%29%0A%09%23%28%20%270%27%09%271%27%09%274%27%09%275%27%09%27h%27%09%27j%27%09%27n%27%09%27p%27%20%29%0A%09%29'),
messageSends: [],
referencedClasses: []
}),
smalltalk.GeoHash);

smalltalk.addMethod(
unescape('_generateGridWithPrefix_'),
smalltalk.method({
selector: unescape('generateGridWithPrefix%3A'),
category: 'actions',
fn: function (aString){
var self=this;
var grid=nil;
(grid=smalltalk.send((smalltalk.Grid || Grid), "_new", []));
smalltalk.send(smalltalk.send(self, "_table", []), "_withIndexDo_", [(function(row, y){return smalltalk.send(row, "_withIndexDo_", [(function(ch, x){return smalltalk.send(grid, "_at_put_", [smalltalk.send(x, "__at", [y]), smalltalk.send(aString, "__comma", [ch])]);})]);})]);
return grid;
return self;},
args: ["aString"],
source: unescape('generateGridWithPrefix%3A%20aString%0A%09%7Cgrid%7C%0A%09grid%20%3A%3D%20Grid%20new.%0A%09self%20table%20withIndexDo%3A%20%5B%3Arow%20%3Ay%7C%0A%09%09row%20withIndexDo%3A%20%5B%3Ach%20%3Ax%7C%0A%09%09%09grid%20at%3A%20x@y%20put%3A%20aString%2C%20ch%5D%5D.%0A%09%5Egrid'),
messageSends: ["new", "withIndexDo:", "table", "at:put:", unescape("@"), unescape("%2C")],
referencedClasses: ["Grid"]
}),
smalltalk.GeoHash);



smalltalk.addClass('Grid', smalltalk.Object, ['array'], 'SubWars-Client');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
(self['@array']=[]);
return self;},
args: [],
source: unescape('initialize%0A%09array%20%3A%3D%20%23%28%29'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Grid);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("a%20Grid%28"), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])]), "__comma", [smalltalk.send(smalltalk.send(self['@array'], "_collect_", [(function(ea){return smalltalk.send(ea, "_join_", [smalltalk.send((smalltalk.String || String), "_tab", [])]);})]), "_join_", [smalltalk.send((smalltalk.String || String), "_lf", [])])]), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])]), "__comma", [unescape("%29")]);
return self;},
args: [],
source: unescape('printString%0A%09%5E%27a%20Grid%28%27%2C%20String%20lf%2C%0A%09%09%28%28array%20collect%3A%20%5B%3Aea%7C%20ea%20join%3A%20String%20tab%5D%29%20join%3A%20String%20lf%29%2C%0A%09%09String%20lf%2C%20%27%29%27'),
messageSends: [unescape("%2C"), "lf", "join:", "collect:", "tab"],
referencedClasses: ["String"]
}),
smalltalk.Grid);

smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
category: 'accessing',
fn: function (aPoint){
var self=this;
return smalltalk.send(smalltalk.send(self['@array'], "_at_", [smalltalk.send(aPoint, "_y", [])]), "_at_", [smalltalk.send(aPoint, "_x", [])]);
return self;},
args: ["aPoint"],
source: unescape('at%3A%20aPoint%0A%09%5E%28array%20at%3A%20aPoint%20y%29%20at%3A%20aPoint%20x'),
messageSends: ["at:", "y", "x"],
referencedClasses: []
}),
smalltalk.Grid);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
category: 'accessing',
fn: function (aPoint, anObject){
var self=this;
var row=nil;
(row=smalltalk.send(self['@array'], "_at_ifAbsent_", [smalltalk.send(aPoint, "_y", []), (function(){return smalltalk.send(self['@array'], "_at_put_", [smalltalk.send(aPoint, "_y", []), []]);})]));
smalltalk.send(row, "_at_put_", [smalltalk.send(aPoint, "_x", []), anObject]);
return self;},
args: ["aPoint", "anObject"],
source: unescape('at%3A%20aPoint%20put%3A%20anObject%0A%09%7Crow%7C%0A%09row%20%3A%3D%20array%20at%3A%20aPoint%20y%20ifAbsent%3A%20%5Barray%20at%3A%20aPoint%20y%20put%3A%20%23%28%29%5D.%0A%09row%20at%3A%20aPoint%20x%20put%3A%20anObject.'),
messageSends: ["at:ifAbsent:", "y", "at:put:", "x"],
referencedClasses: []
}),
smalltalk.Grid);



smalltalk.addClass('Ship', smalltalk.Object, [], 'SubWars-Client');


