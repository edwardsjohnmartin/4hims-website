var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(g){var window=this;'use strict';var V$a=function(a,b){this.u=a>>>0;this.j=b>>>0},X$a=function(a){if(!a)return W$a||(W$a=new V$a(0,0));
if(!/^\d+$/.test(a))return null;g.Eba(a);return new V$a(g.ae,g.be)},Y$a=function(a,b,c){null!=c&&("string"===typeof c&&X$a(c),g.Ge(a,b,1),"number"===typeof c?(a=a.j,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.ae=b,g.be=c,g.Ce(a,g.ae),g.Ce(a,g.be)):(c=X$a(c),a=a.j,b=c.j,g.Ce(a,c.u),g.Ce(a,b)))},Z$a=function(a,b,c){b=g.sba(b,c);
null!=b&&(g.Ge(a,c,0),a.j.j.push(b?1:0))},aab=function(a){g.J.call(this,a,-1,$$a)},bab=function(a){g.J.call(this,a)},cab=function(a){g.J.call(this,a)},dab=function(a){g.J.call(this,a)},eab=function(a){g.J.call(this,a)},Y7=function(a){g.Lj(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Ua()).toString(36));
return a},Z7=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.ega(a.u,b,c)},fab=function(a){if(a instanceof g.om)return a;
if("function"==typeof a.bj)return a.bj(!1);if(g.Oa(a)){var b=0,c=new g.om;c.next=function(){for(;;){if(b>=a.length)return g.B3;if(b in a)return g.sm(a[b++]);b++}};
return c}throw Error("Not implemented");},gab=function(a,b,c){if(g.Oa(a))g.tc(a,b,c);
else for(a=fab(a);;){var d=a.next();if(d.done)break;b.call(c,d.value,void 0,a)}},hab=function(a,b){var c=[];
gab(b,function(d){try{var e=g.Co.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.Mka(e)&&c.push(d)},a);
return c},iab=function(a,b){hab(a,b).forEach(function(c){g.Co.prototype.remove.call(this,c)},a)},jab=function(a){if(a.V){if(a.V.locationOverrideToken)return{locationOverrideToken:a.V.locationOverrideToken};
if(null!=a.V.latitudeE7&&null!=a.V.longitudeE7)return{latitudeE7:a.V.latitudeE7,longitudeE7:a.V.longitudeE7}}return null},kab=function(a,b){g.Wb(a,b)||a.push(b)},lab=function(a){var b=0,c;
for(c in a)b++;return b},mab=function(a,b){return g.zf(a,b)},nab=function(a){try{return g.C.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},$7=function(a){if(g.C.JSON)try{return g.C.JSON.parse(a)}catch(b){}return nab(a)},oab=function(a,b,c,d){var e=new g.Bj(null);
a&&g.Cj(e,a);b&&g.Dj(e,b);c&&g.Ej(e,c);d&&(e.J=d);return e},a8=function(a,b){g.Jx[a]=!0;
var c=g.Hx();c&&c.publish.apply(c,arguments);g.Jx[a]=!1},b8=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.lo;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=
a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",pab(this,a.capabilities||""),qab(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",
this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},pab=function(a,b){a.capabilities.clear();
g.wm(b.split(","),g.Ta(mab,rab)).forEach(function(c){a.capabilities.add(c)})},qab=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},c8=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},d8=function(a,b){return!!b&&(a.id==b||a.uuid==b)},sab=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},tab=function(a){return new c8(a)},uab=function(a){return Array.isArray(a)?g.Ok(a,tab):[]},e8=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},vab=function(a){return Array.isArray(a)?"["+g.Ok(a,e8).join(",")+"]":"null"},wab=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},xab=function(a){return g.Ok(a,function(b){return{key:b.id,
name:b.name}})},yab=function(a,b){return g.Ub(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},f8=function(a,b){return g.Ub(a,function(c){return d8(c,b)})},zab=function(){var a=(0,g.Ez)();
a&&iab(a,a.j.bj(!0))},g8=function(){var a=g.Hz("yt-remote-connected-devices")||[];
g.lc(a);return a},Aab=function(a){if(g.Xb(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.Ok(a,function(d,e){return 0==e?d:d.substring(c.length)})},Bab=function(a){g.Gz("yt-remote-connected-devices",a,86400)},h8=function(){if(Cab)return Cab;
var a=g.Hz("yt-remote-device-id");a||(a=wab(),g.Gz("yt-remote-device-id",a,31536E3));for(var b=g8(),c=1,d=a;g.Wb(b,d);)c++,d=a+"#"+c;return Cab=d},Dab=function(){var a=g8(),b=h8();
g.Jz()&&g.sc(a,b);a=Aab(a);if(g.Xb(a))try{g.xma("remote_sid")}catch(c){}else try{g.Eu("remote_sid",a.join(","),-1)}catch(c){}},Eab=function(){return g.Hz("yt-remote-session-browser-channel")},Fab=function(){return g.Hz("yt-remote-local-screens")||[]},Gab=function(){g.Gz("yt-remote-lounge-token-expiration",!0,86400)},Hab=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.Ok(Fab(),function(d){return d.loungeToken}),c=g.Ok(a,function(d){return d.loungeToken});
g.Od(c,function(d){return!g.Wb(b,d)})&&Gab();
g.Gz("yt-remote-local-screens",a,31536E3)},i8=function(a){a||(g.Iz("yt-remote-session-screen-id"),g.Iz("yt-remote-session-video-id"));
Dab();a=g8();g.Zb(a,h8());Bab(a)},Iab=function(){if(!j8){var a=g.Lo();
a&&(j8=new g.zo(a))}},Jab=function(){Iab();
return j8?!!j8.get("yt-remote-use-staging-server"):!1},Kab=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},Lab=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},Mab=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},k8=function(a){a.length?Nab(a.shift(),function(){k8(a)}):Oab()},Pab=function(a){return"chrome-extension://"+a+"/cast_sender.js"},Nab=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.dj(d,g.ig(a));(document.head||document.documentElement).appendChild(d)},Qab=function(){var a=Kab(),b=[];
if(1<a){var c=a-1;b.push("//web.archive.org/web/20220808101855/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20220808101855/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},Oab=function(){var a=Mab();
a&&a(!1,"No cast extension found")},Sab=function(){if(Rab){var a=2,b=Mab(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;Nab("//web.archive.org/web/20220808101855/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",Oab,c)}},Uab=function(){Sab();
var a=Qab();a.push("//web.archive.org/web/20220808101855/https://www.gstatic.com/eureka/clank/cast_sender.js");k8(a)},Wab=function(){Sab();
var a=Qab();a.push.apply(a,g.t(Vab.map(Pab)));a.push("//web.archive.org/web/20220808101855/https://www.gstatic.com/eureka/clank/cast_sender.js");k8(a)},Xab=function(){this.j=l8();
this.j.gp("/client_streamz/youtube/living_room/mdx/channel/opened",{Mh:3,Lh:"channel_type"})},Yab=function(a,b){a.j.Uq("/client_streamz/youtube/living_room/mdx/channel/opened",b)},Zab=function(){this.j=l8();
this.j.gp("/client_streamz/youtube/living_room/mdx/channel/closed",{Mh:3,Lh:"channel_type"})},$ab=function(a,b){a.j.Uq("/client_streamz/youtube/living_room/mdx/channel/closed",b)},abb=function(){this.j=l8();
this.j.gp("/client_streamz/youtube/living_room/mdx/channel/message_received",{Mh:3,Lh:"channel_type"})},bbb=function(a,b){a.j.Uq("/client_streamz/youtube/living_room/mdx/channel/message_received",b)},cbb=function(){this.j=l8();
this.j.gp("/client_streamz/youtube/living_room/mdx/channel/error",{Mh:3,Lh:"channel_type"})},dbb=function(a,b){a.j.Uq("/client_streamz/youtube/living_room/mdx/channel/error",b)},ebb=function(){this.j=l8();
this.j.gp("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")},fbb=function(){this.j=l8();
this.j.gp("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")},m8=function(a,b,c){g.K.call(this);
this.I=null!=c?(0,g.Sa)(a,c):a;this.qh=b;this.D=(0,g.Sa)(this.AU,this);this.j=!1;this.u=0;this.B=this.qc=null;this.C=[]},n8=function(a,b,c){g.K.call(this);
this.C=null!=c?a.bind(c):a;this.qh=b;this.B=null;this.j=!1;this.u=0;this.qc=null},gbb=function(a){a.qc=g.Ph(function(){a.qc=null;
a.j&&!a.u&&(a.j=!1,gbb(a))},a.qh);
var b=a.B;a.B=null;a.C.apply(null,b)},o8=function(){},hbb=function(){g.hf.call(this,"p")},ibb=function(){g.hf.call(this,"o")},jbb=function(){var a=new g.C.TextEncoder;
return new g.C.ReadableStream({start:function(b){for(var c=g.r(["test\r\n","test\r\n"]),d=c.next();!d.done;d=c.next())b.enqueue(a.encode(d.value));b.close()}})},kbb=function(a){return(a=/\/\/([^\/]+)\//.exec(a))?a[1].endsWith("google.com"):!1},mbb=function(a,b){if(!lbb){lbb=!0;
var c;a:{if(c=g.C.navigator)if(c=c.userAgent)break a;c=""}(-1==c.indexOf("Chrome")||-1!=c.indexOf("Edg")?0:90<=parseInt(/Chrome\/(\d+)/.exec(c)[1],10))&&kbb(a)&&window&&window.document&&kbb(window.document.URL)&&(c=document.createElement("meta"),c.httpEquiv="origin-trial",c.content="A0eNbltY1nd4MP7XTHXnTxWogDL6mWTdgIIKfKOTJoUHNbFFMZQBoiHHjJ9UK9lgYndWFaxOWR7ld8uUjcWmcwIAAAB/eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkZldGNoVXBsb2FkU3RyZWFtaW5nIiwiZXhwaXJ5IjoxNjM2NTAyMzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
document.head.appendChild(c),(new Request("",{body:new ReadableStream,method:"POST"})).headers.has("Content-Type")||(g.C.fetch(a+"?ot=1",{method:"POST",body:"test\r\n"}).catch(b),g.C.fetch(a+"?ot=2",{method:"POST",body:jbb(),VW:!1}).catch(b),g.C.fetch(a+"?ot=3",{method:"POST",body:jbb(),VW:!0}).catch(b)))}},obb=function(){return nbb=nbb||new g.Tf},pbb=function(a){g.hf.call(this,"serverreachability",a)},p8=function(a){var b=obb();
b.dispatchEvent(new pbb(b,a))},qbb=function(a,b){g.hf.call(this,"statevent",a);
this.stat=b},q8=function(a){var b=obb();
b.dispatchEvent(new qbb(b,a))},rbb=function(a,b,c,d){g.hf.call(this,"timingevent",a);
this.size=b;this.ow=d},r8=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.C.setTimeout(function(){a()},b)},sbb=function(){},s8=function(a,b,c,d){this.D=a;
this.C=b;this.Kc=c;this.Cc=d||1;this.eb=new g.Qj(this);this.ub=45E3;a=g.jG?125:void 0;this.gb=new g.Oh(a);this.Ha=null;this.B=!1;this.N=this.Xa=this.J=this.Ka=this.ra=this.Eb=this.V=null;this.Y=[];this.j=null;this.W=0;this.I=this.qa=null;this.Nb=-1;this.Ea=!1;this.yb=0;this.Ua=null;this.yc=this.Sa=this.pc=this.va=!1;this.u=new tbb},tbb=function(){this.B=null;
this.j="";this.u=!1},vbb=function(a,b,c){a.Ka=1;
a.J=Y7(b.clone());a.N=c;a.va=!0;ubb(a,null)},ubb=function(a,b){a.ra=Date.now();
t8(a);a.Xa=a.J.clone();Z7(a.Xa,"t",a.Cc);a.W=0;var c=a.D.Ka;a.u=new tbb;a.j=wbb(a.D,c?b:null,!a.N);0<a.yb&&(a.Ua=new n8((0,g.Sa)(a.ML,a,a.j),a.yb));a.eb.Na(a.j,"readystatechange",a.DU);b=a.Ha?g.Ff(a.Ha):{};a.N?(a.qa||(a.qa="POST"),b["Content-Type"]="application/x-www-form-urlencoded",a.j.send(a.Xa,a.qa,a.N,b)):(a.qa="GET",a.j.send(a.Xa,a.qa,null,b));p8(1)},xbb=function(a){return a.j?"GET"==a.qa&&2!=a.Ka&&a.D.Ee:!1},Bbb=function(a,b,c){for(var d=!0,e;!a.Ea&&a.W<c.length;)if(e=ybb(a,c),e==u8){4==b&&
(a.I=4,q8(14),d=!1);
break}else if(e==zbb){a.I=4;q8(15);d=!1;break}else Abb(a,e);xbb(a)&&e!=u8&&e!=zbb&&(a.u.j="",a.W=0);4!=b||0!=c.length||a.u.u||(a.I=1,q8(16),d=!1);a.B=a.B&&d;d?0<c.length&&!a.yc&&(a.yc=!0,a.D.iJ(a)):(v8(a),w8(a))},ybb=function(a,b){var c=a.W,d=b.indexOf("\n",c);
if(-1==d)return u8;c=Number(b.substring(c,d));if(isNaN(c))return zbb;d+=1;if(d+c>b.length)return u8;b=b.slice(d,d+c);a.W=d+c;return b},t8=function(a){a.Eb=Date.now()+a.ub;
Cbb(a,a.ub)},Cbb=function(a,b){if(null!=a.V)throw Error("WatchDog timer not null");
a.V=r8((0,g.Sa)(a.BU,a),b)},x8=function(a){a.V&&(g.C.clearTimeout(a.V),a.V=null)},w8=function(a){a.D.Of()||a.Ea||Dbb(a.D,a)},v8=function(a){x8(a);
g.df(a.Ua);a.Ua=null;a.gb.stop();g.Rj(a.eb);if(a.j){var b=a.j;a.j=null;b.abort();b.dispose()}},Abb=function(a,b){try{var c=a.D;
if(0!=c.qg&&(c.j==a||Ebb(c.u,a)))if(!a.Sa&&Ebb(c.u,a)&&3==c.qg){try{var d=c.Fe.j.parse(b)}catch(A){d=null}if(Array.isArray(d)&&3==d.length){var e=d;if(0==e[0])a:{if(!c.N){if(c.j)if(c.j.ra+3E3<a.ra)y8(c),z8(c);else break a;Fbb(c);q8(18)}}else c.Dd=e[1],0<c.Dd-c.Sa&&37500>e[2]&&c.gb&&0==c.Y&&!c.W&&(c.W=r8((0,g.Sa)(c.EU,c),6E3));if(1>=Gbb(c.u)&&c.Vc){try{c.Vc()}catch(A){}c.Vc=void 0}}else A8(c,11)}else if((a.Sa||c.j==a)&&y8(c),!g.eb(b))for(e=c.Fe.j.parse(b),b=0;b<e.length;b++){var f=e[b];c.Sa=f[0];f=
f[1];if(2==c.qg)if("c"==f[0]){c.C=f[1];c.yc=f[2];var h=f[3];null!=h&&(c.NL=h);var l=f[5];null!=l&&"number"===typeof l&&0<l&&(c.Xa=1.5*l);d=c;var m=a.j;if(m){var n=g.Hi(m,"X-Client-Wire-Protocol");if(n){var p=d.u;!p.j&&(g.jb(n,"spdy")||g.jb(n,"quic")||g.jb(n,"h2"))&&(p.C=p.D,p.j=new Set,p.u&&(Hbb(p,p.u),p.u=null))}if(d.va){var q=g.Hi(m,"X-HTTP-Session-Id");q&&(d.hh=q,g.Lj(d.Ha,d.va,q))}}c.qg=3;c.D&&c.D.TL();c.Qc&&(c.kd=Date.now()-a.ra);d=c;var v=a;d.rd=Ibb(d,d.Ka?d.yc:null,d.Cc);if(v.Sa){Jbb(d.u,v);
var w=v,y=d.Xa;y&&w.setTimeout(y);w.V&&(x8(w),t8(w));d.j=v}else Kbb(d);0<c.B.length&&B8(c)}else"stop"!=f[0]&&"close"!=f[0]||A8(c,7);else 3==c.qg&&("stop"==f[0]||"close"==f[0]?"stop"==f[0]?A8(c,7):c.disconnect():"noop"!=f[0]&&c.D&&c.D.SL(f),c.Y=0)}p8(4)}catch(A){}},Lbb=function(a,b){this.j=a;
this.map=b;this.context=null},Mbb=function(a){this.D=a||10;
g.C.PerformanceNavigationTiming?(a=g.C.performance.getEntriesByType("navigation"),a=0<a.length&&("hq"==a[0].nextHopProtocol||"h2"==a[0].nextHopProtocol)):a=!!(g.C.chrome&&g.C.chrome.loadTimes&&g.C.chrome.loadTimes()&&g.C.chrome.loadTimes().wasFetchedViaSpdy);this.C=a?this.D:1;this.j=null;1<this.C&&(this.j=new Set);this.u=null;this.B=[]},Nbb=function(a){return a.u?!0:a.j?a.j.size>=a.C:!1},Gbb=function(a){return a.u?1:a.j?a.j.size:0},Ebb=function(a,b){return a.u?a.u==b:a.j?a.j.has(b):!1},Hbb=function(a,
b){a.j?a.j.add(b):a.u=b},Jbb=function(a,b){a.u&&a.u==b?a.u=null:a.j&&a.j.has(b)&&a.j.delete(b)},Obb=function(a){if(null!=a.u)return a.B.concat(a.u.Y);
if(null!=a.j&&0!==a.j.size){var b=a.B;a=g.r(a.j.values());for(var c=a.next();!c.done;c=a.next())b=b.concat(c.value.Y);return b}return g.bc(a.B)},Pbb=function(a,b){var c=new sbb;
if(g.C.Image){var d=new Image;d.onload=g.Ta(C8,c,d,"TestLoadImage: loaded",!0,b);d.onerror=g.Ta(C8,c,d,"TestLoadImage: error",!1,b);d.onabort=g.Ta(C8,c,d,"TestLoadImage: abort",!1,b);d.ontimeout=g.Ta(C8,c,d,"TestLoadImage: timeout",!1,b);g.C.setTimeout(function(){if(d.ontimeout)d.ontimeout()},1E4);
d.src=a}else b(!1)},C8=function(a,b,c,d,e){try{b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null,e(d)}catch(f){}},Qbb=function(){this.j=new o8},Rbb=function(a,b,c){var d=c||"";
try{g.Aj(a,function(e,f){var h=e;g.Pa(e)&&(h=g.fi(e));b.push(d+f+"="+encodeURIComponent(h))})}catch(e){throw b.push(d+"type="+encodeURIComponent("_badmap")),e;
}},D8=function(a,b,c){return c&&c.sZ?c.sZ[a]||b:b},Sbb=function(a){this.B=[];
this.yc=this.rd=this.Ha=this.Cc=this.j=this.hh=this.va=this.Ea=this.J=this.Eb=this.V=null;this.Pe=this.Ua=0;this.Ne=D8("failFast",!1,a);this.gb=this.W=this.N=this.I=this.D=null;this.Kc=!0;this.Id=this.Dd=this.Sa=-1;this.pc=this.Y=this.ra=0;this.Me=D8("baseRetryDelayMs",5E3,a);this.bf=D8("retryDelaySeedMs",1E4,a);this.Oe=D8("forwardChannelMaxRetries",2,a);this.Cd=D8("forwardChannelRequestTimeoutMs",2E4,a);this.Qd=a&&a.F2a||void 0;this.Ee=a&&a.D2a||!1;this.Xa=void 0;this.Ka=a&&a.J4||!1;this.C="";this.u=
new Mbb(a&&a.n1a);this.Fe=new Qbb;this.ub=a&&a.D1a||!1;this.yb=a&&a.v1a||!1;this.ub&&this.yb&&(this.yb=!1);this.sf=a&&a.i1a||!1;a&&a.F1a&&(this.Kc=!1);this.Qc=!this.ub&&this.Kc&&a&&a.s1a||!1;this.Vc=void 0;this.kd=0;this.eb=!1;this.qa=null;this.oi=!a||!1!==a.u1a;this.Nb=null},z8=function(a){a.j&&(Tbb(a),a.j.cancel(),a.j=null)},Ubb=function(a){z8(a);
a.N&&(g.C.clearTimeout(a.N),a.N=null);y8(a);a.u.cancel();a.I&&("number"===typeof a.I&&g.C.clearTimeout(a.I),a.I=null)},B8=function(a){Nbb(a.u)||a.I||(a.I=!0,g.Eh(a.PL,a),a.ra=0)},Wbb=function(a,b){if(Gbb(a.u)>=a.u.C-(a.I?1:0))return!1;
if(a.I)return a.B=b.Y.concat(a.B),!0;if(1==a.qg||2==a.qg||a.ra>=(a.Ne?0:a.Oe))return!1;a.I=r8((0,g.Sa)(a.PL,a,b),Vbb(a,a.ra));a.ra++;return!0},Ybb=function(a,b){var c;
b?c=b.Kc:c=a.Ua++;var d=a.Ha.clone();g.Lj(d,"SID",a.C);g.Lj(d,"RID",c);g.Lj(d,"AID",a.Sa);E8(a,d);a.J&&a.V&&g.Pj(d,a.J,a.V);c=new s8(a,a.C,c,a.ra+1);null===a.J&&(c.Ha=a.V);b&&(a.B=b.Y.concat(a.B));b=Xbb(a,c,1E3);c.setTimeout(Math.round(.5*a.Cd)+Math.round(.5*a.Cd*Math.random()));Hbb(a.u,c);vbb(c,d,b)},E8=function(a,b){a.Ea&&g.of(a.Ea,function(c,d){g.Lj(b,d,c)});
a.D&&g.Aj({},function(c,d){g.Lj(b,d,c)})},Xbb=function(a,b,c){c=Math.min(a.B.length,c);
var d=a.D?(0,g.Sa)(a.D.FU,a.D,a):null;a:for(var e=a.B,f=-1;;){var h=["count="+c];-1==f?0<c?(f=e[0].j,h.push("ofs="+f)):f=0:h.push("ofs="+f);for(var l=!0,m=0;m<c;m++){var n=e[m].j,p=e[m].map;n-=f;if(0>n)f=Math.max(0,e[m].j-100),l=!1;else try{Rbb(p,h,"req"+n+"_")}catch(q){d&&d(p)}}if(l){d=h.join("&");break a}}a=a.B.splice(0,c);b.Y=a;return d},Kbb=function(a){a.j||a.N||(a.pc=1,g.Eh(a.OL,a),a.Y=0)},Fbb=function(a){if(a.j||a.N||3<=a.Y)return!1;
a.pc++;a.N=r8((0,g.Sa)(a.OL,a),Vbb(a,a.Y));a.Y++;return!0},Tbb=function(a){null!=a.qa&&(g.C.clearTimeout(a.qa),a.qa=null)},Zbb=function(a){a.j=new s8(a,a.C,"rpc",a.pc);
null===a.J&&(a.j.Ha=a.V);a.j.yb=0;var b=a.rd.clone();g.Lj(b,"RID","rpc");g.Lj(b,"SID",a.C);g.Lj(b,"CI",a.gb?"0":"1");g.Lj(b,"AID",a.Sa);g.Lj(b,"TYPE","xmlhttp");E8(a,b);a.J&&a.V&&g.Pj(b,a.J,a.V);a.Xa&&a.j.setTimeout(a.Xa);var c=a.j;a=a.yc;c.Ka=1;c.J=Y7(b.clone());c.N=null;c.va=!0;ubb(c,a)},y8=function(a){null!=a.W&&(g.C.clearTimeout(a.W),a.W=null)},Dbb=function(a,b){var c=null;
if(a.j==b){y8(a);Tbb(a);a.j=null;var d=2}else if(Ebb(a.u,b))c=b.Y,Jbb(a.u,b),d=1;else return;if(0!=a.qg)if(a.Id=b.Nb,b.B)if(1==d){c=b.N?b.N.length:0;b=Date.now()-b.ra;var e=a.ra;d=obb();d.dispatchEvent(new rbb(d,c,b,e));B8(a)}else Kbb(a);else if(e=b.getLastError(),3==e||0==e&&0<a.Id||!(1==d&&Wbb(a,b)||2==d&&Fbb(a)))switch(c&&0<c.length&&(b=a.u,b.B=b.B.concat(c)),e){case 1:A8(a,5);break;case 4:A8(a,10);break;case 3:A8(a,6);break;default:A8(a,2)}},Vbb=function(a,b){var c=a.Me+Math.floor(Math.random()*
a.bf);
a.isActive()||(c*=2);return c*b},A8=function(a,b){if(2==b){var c=null;
a.D&&(c=null);var d=(0,g.Sa)(a.S4,a);c||(c=new g.Bj("//web.archive.org/web/20220808101855/https://www.google.com/images/cleardot.gif"),g.C.location&&"http"==g.C.location.protocol||g.Cj(c,"https"),Y7(c));Pbb(c.toString(),d)}else q8(2);a.qg=0;a.D&&a.D.RL(b);$bb(a);Ubb(a)},$bb=function(a){a.qg=0;
a.Nb=[];if(a.D){var b=Obb(a.u);if(0!=b.length||0!=a.B.length)g.cc(a.Nb,b),g.cc(a.Nb,a.B),a.u.B.length=0,g.bc(a.B),a.B.length=0;a.D.QL()}},acb=function(a){if(0==a.qg)return a.Nb;
var b=[];g.cc(b,Obb(a.u));g.cc(b,a.B);return b},Ibb=function(a,b,c){var d=g.Mj(c);
""!=d.j?(b&&g.Dj(d,b+"."+d.j),g.Ej(d,d.B)):(d=g.C.location,d=oab(d.protocol,b?b+"."+d.hostname:d.hostname,+d.port,c));b=a.va;c=a.hh;b&&c&&g.Lj(d,b,c);g.Lj(d,"VER",a.NL);E8(a,d);return d},wbb=function(a,b,c){if(b&&!a.Ka)throw Error("Can't create secondary domain capable XhrIo object.");
b=c&&a.Ee&&!a.Qd?new g.Ai(new g.wj({BS:!0})):new g.Ai(a.Qd);b.J=a.Ka;return b},bcb=function(){},ccb=function(){if(g.Cc&&!g.zc(10))throw Error("Environmental error: no available transport.");
},G8=function(a,b){g.Tf.call(this);
this.j=new Sbb(b);this.I=a;this.u=b&&b.a_||null;a=b&&b.ZZ||null;b&&b.m1a&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"});this.j.V=a;a=b&&b.I1a||null;b&&b.kQ&&(a?a["X-WebChannel-Content-Type"]=b.kQ:a={"X-WebChannel-Content-Type":b.kQ});b&&b.aO&&(a?a["X-WebChannel-Client-Profile"]=b.aO:a={"X-WebChannel-Client-Profile":b.aO});this.j.Eb=a;(a=b&&b.G1a)&&!g.eb(a)&&(this.j.J=a);this.J=b&&b.J4||!1;this.D=b&&b.p2a||!1;(b=b&&b.kZ)&&!g.eb(b)&&(this.j.va=b,g.yf(this.u,b)&&g.Cf(this.u,
b));this.C=new F8(this)},dcb=function(a){hbb.call(this);
a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var b=a.__sm__;b?this.data=(this.metadataKey=g.vf(b))?g.Df(b,this.metadataKey):b:this.data=a},ecb=function(a){ibb.call(this);
this.status=1;this.errorCode=a},F8=function(a){this.j=a},fcb=function(a,b){this.u=a;
this.j=b},gcb=function(a){return acb(a.j).map(function(b){b=b.map;
"__data__"in b&&(b=b.__data__,b=a.u.D?nab(b):b);return b})},H8=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.C.setTimeout(function(){a()},b)},J8=function(a){I8.dispatchEvent(new hcb(I8,a))},hcb=function(a,b){g.hf.call(this,"statevent",a);
this.stat=b},K8=function(a,b,c,d){this.j=a;
this.C=b;this.J=c;this.I=d||1;this.u=45E3;this.B=new g.Qj(this);this.D=new g.Oh;this.D.setInterval(250)},jcb=function(a,b,c){a.pu=1;
a.Vo=Y7(b.clone());a.Rq=c;a.va=!0;icb(a,null)},kcb=function(a,b,c,d,e){a.pu=1;
a.Vo=Y7(b.clone());a.Rq=null;a.va=c;e&&(a.nS=!1);icb(a,d)},icb=function(a,b){a.ou=Date.now();
L8(a);a.Xo=a.Vo.clone();Z7(a.Xo,"t",a.I);a.XA=0;a.Eh=a.j.oF(a.j.gx()?b:null);0<a.mF&&(a.VA=new n8((0,g.Sa)(a.UL,a,a.Eh),a.mF));a.B.Na(a.Eh,"readystatechange",a.HU);b=a.Qq?g.Ff(a.Qq):{};a.Rq?(a.WA="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.Eh.send(a.Xo,a.WA,a.Rq,b)):(a.WA="GET",a.nS&&!g.kf&&(b.Connection="close"),a.Eh.send(a.Xo,a.WA,null,b));a.j.dl(1)},ncb=function(a,b){var c=a.XA,d=b.indexOf("\n",c);
if(-1==d)return lcb;c=Number(b.substring(c,d));if(isNaN(c))return mcb;d+=1;if(d+c>b.length)return lcb;b=b.slice(d,d+c);a.XA=d+c;return b},pcb=function(a,b){a.ou=Date.now();
L8(a);var c=b?window.location.hostname:"";a.Xo=a.Vo.clone();g.Lj(a.Xo,"DOMAIN",c);g.Lj(a.Xo,"t",a.I);try{a.xl=new ActiveXObject("htmlfile")}catch(m){M8(a);a.Wo=7;J8(22);N8(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in O8)f=O8[f];else if(f in ocb)f=O8[f]=ocb[f];else{var h=f.charCodeAt(0);if(31<h&&127>h)var l=f;else{if(256>h){if(l="\\x",16>h||256<h)l+="0"}else l="\\u",4096>h&&(l+="0");l+=h.toString(16).toUpperCase()}f=
O8[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.Ag(g.fg("b/12014412"),d);a.xl.open();a.xl.write(g.yg(c));a.xl.close();a.xl.parentWindow.m=(0,g.Sa)(a.H2,a);a.xl.parentWindow.d=(0,g.Sa)(a.pR,a,!0);a.xl.parentWindow.rpcClose=(0,g.Sa)(a.pR,a,!1);c=a.xl.createElement("DIV");a.xl.parentWindow.document.body.appendChild(c);d=g.mg(a.Xo.toString());d=g.Vg(g.lg(d));d=g.Ag(g.fg("b/12014412"),'<iframe src="'+d+'"></iframe>');g.tda(c,d);a.j.dl(1)},L8=function(a){a.nF=
Date.now()+a.u;
qcb(a,a.u)},qcb=function(a,b){if(null!=a.uu)throw Error("WatchDog timer not null");
a.uu=H8((0,g.Sa)(a.GU,a),b)},rcb=function(a){a.uu&&(g.C.clearTimeout(a.uu),a.uu=null)},N8=function(a){a.j.Of()||a.Pq||a.j.YA(a)},M8=function(a){rcb(a);
g.df(a.VA);a.VA=null;a.D.stop();g.Rj(a.B);if(a.Eh){var b=a.Eh;a.Eh=null;b.abort();b.dispose()}a.xl&&(a.xl=null)},scb=function(a,b){try{a.j.VL(a,b),a.j.dl(4)}catch(c){}},ucb=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;tcb(a,b,function(h){h?c(!0):g.C.setTimeout(function(){ucb(a,b,c,d,f)},f)})}},tcb=function(a,b,c){var d=new Image;
d.onload=function(){try{P8(d),c(!0)}catch(e){}};
d.onerror=function(){try{P8(d),c(!1)}catch(e){}};
d.onabort=function(){try{P8(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{P8(d),c(!1)}catch(e){}};
g.C.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a},P8=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},vcb=function(a){this.j=a;
this.u=new o8},wcb=function(a){var b=Q8(a.j,a.Rx,"/mail/images/cleardot.gif");
Y7(b);ucb(b.toString(),5E3,(0,g.Sa)(a.nX,a),3,2E3);a.dl(1)},xcb=function(a){var b=a.j.V;
if(null!=b)J8(5),b?(J8(11),R8(a.j,a,!1)):(J8(12),R8(a.j,a,!0));else if(a.gi=new K8(a),a.gi.Qq=a.pF,b=a.j,b=Q8(b,b.gx()?a.ex:null,a.qF),J8(5),!g.Cc||g.zc(10))Z7(b,"TYPE","xmlhttp"),kcb(a.gi,b,!1,a.ex,!1);else{Z7(b,"TYPE","html");var c=a.gi;a=!!a.ex;c.pu=3;c.Vo=Y7(b.clone());pcb(c,a)}},ycb=function(a,b,c){this.j=1;
this.u=[];this.B=[];this.D=new o8;this.N=a||null;this.V=null!=b?b:null;this.J=c||!1},zcb=function(a,b){this.j=a;
this.map=b;this.context=null},Acb=function(a,b,c,d){g.hf.call(this,"timingevent",a);
this.size=b;this.ow=d},Bcb=function(a){g.hf.call(this,"serverreachability",a)},Dcb=function(a){a.IU(1,0);
a.ZA=Q8(a,null,a.rF);Ccb(a)},Ecb=function(a){a.tp&&(a.tp.abort(),a.tp=null);
a.Af&&(a.Af.cancel(),a.Af=null);a.qn&&(g.C.clearTimeout(a.qn),a.qn=null);S8(a);a.Gi&&(a.Gi.cancel(),a.Gi=null);a.Yo&&(g.C.clearTimeout(a.Yo),a.Yo=null)},Fcb=function(a,b){if(0==a.j)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new zcb(a.JU++,b));2!=a.j&&3!=a.j||Ccb(a)},Gcb=function(a){var b=0;
a.Af&&b++;a.Gi&&b++;return b},Ccb=function(a){a.Gi||a.Yo||(a.Yo=H8((0,g.Sa)(a.ZL,a),0),a.wu=0)},Jcb=function(a,b){if(1==a.j){if(!b){a.ix=Math.floor(1E5*Math.random());
b=a.ix++;var c=new K8(a,"",b);c.Qq=a.Ml;var d=Hcb(a),e=a.ZA.clone();g.Lj(e,"RID",b);g.Lj(e,"CVER","1");T8(a,e);jcb(c,e,d);a.Gi=c;a.j=2}}else 3==a.j&&(b?Icb(a,b):0==a.u.length||a.Gi||Icb(a))},Icb=function(a,b){if(b)if(6<a.Sq){a.u=a.B.concat(a.u);
a.B.length=0;var c=a.ix-1;b=Hcb(a)}else c=b.J,b=b.Rq;else c=a.ix++,b=Hcb(a);var d=a.ZA.clone();g.Lj(d,"SID",a.C);g.Lj(d,"RID",c);g.Lj(d,"AID",a.xu);T8(a,d);c=new K8(a,a.C,c,a.wu+1);c.Qq=a.Ml;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Gi=c;jcb(c,d,b)},T8=function(a,b){a.ih&&(a=a.ih.dM())&&g.of(a,function(c,d){g.Lj(b,d,c)})},Hcb=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.Sq&&0<b){var d=a.u[0].j;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={St:e.St},f++){e.St=a.u[f].j;var h=a.u[f].map;e.St=6>=a.Sq?f:e.St-d;try{g.of(h,function(l){return function(m,n){c.push("req"+l.St+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.St+"_type="+encodeURIComponent("_badmap"))}}a.B=a.B.concat(a.u.splice(0,b));
return c.join("&")},Kcb=function(a){a.Af||a.qn||(a.I=1,a.qn=H8((0,g.Sa)(a.YL,a),0),a.vu=0)},Mcb=function(a){if(a.Af||a.qn||3<=a.vu)return!1;
a.I++;a.qn=H8((0,g.Sa)(a.YL,a),Lcb(a,a.vu));a.vu++;return!0},R8=function(a,b,c){a.IE=c;
a.Nl=b.pn;a.J||Dcb(a)},S8=function(a){null!=a.Tq&&(g.C.clearTimeout(a.Tq),a.Tq=null)},Lcb=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},U8=function(a,b){if(2==b||9==b){var c=null;
a.ih&&(c=null);var d=(0,g.Sa)(a.R4,a);c||(c=new g.Bj("//web.archive.org/web/20220808101855/https://www.google.com/images/cleardot.gif"),Y7(c));tcb(c.toString(),1E4,d)}else J8(2);Ncb(a,b)},Ncb=function(a,b){a.j=0;
a.ih&&a.ih.aM(b);Ocb(a);Ecb(a)},Ocb=function(a){a.j=0;
a.Nl=-1;if(a.ih)if(0==a.B.length&&0==a.u.length)a.ih.sF();else{var b=g.bc(a.B),c=g.bc(a.u);a.B.length=0;a.u.length=0;a.ih.sF(b,c)}},Q8=function(a,b,c){var d=g.Mj(c);
if(""!=d.j)b&&g.Dj(d,b+"."+d.j),g.Ej(d,d.B);else{var e=window.location;d=oab(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.hx&&g.of(a.hx,function(f,h){g.Lj(d,h,f)});
g.Lj(d,"VER",a.Sq);T8(a,d);return d},Pcb=function(){},Qcb=function(){this.j=[];
this.u=[]},Rcb=function(){},l8=function(){if(!V8){V8=new g.Rh(new Rcb);
var a=g.Wt("client_streamz_web_flush_count",-1);-1!==a&&(V8.C=a)}return V8},Scb=function(a){g.hf.call(this,"channelMessage");
this.message=a},Tcb=function(a){g.hf.call(this,"channelError");
this.error=a},Ucb=function(a,b){this.action=a;
this.params=b||{}},W8=function(a,b){g.K.call(this);
this.j=new g.Vn(this.z2,0,this);g.M(this,this.j);this.qh=5E3;this.u=0;if("function"===typeof a)b&&(a=(0,g.Sa)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.Sa)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},Vcb=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.ra=a;this.J=b;this.B=new g.yo;this.u=new W8(this.R3,this);this.j=null;this.W=!1;this.I=null;this.V="";this.N=this.D=0;this.C=[];this.Ka=c;this.Y=d;this.Sa=e;this.Ha=new Xab;this.qa=new Zab;this.Ea=new abb;this.va=new cbb;this.Ua=new ebb;this.Xa=new fbb},Wcb=function(a){if(a.j){var b=a.Y(),c=a.j.Ml||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.j.Ml=c}},X8=function(a){this.port=this.domain="";
this.j="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.pi(4,a))||"";b&&(this.port=":"+b);this.domain=g.qi(a)||"";a=g.sb();0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.rb(a,"10.0")&&(this.u=!1))},Y8=function(a,b){var c=a.j;
a.u&&(c="https://"+a.domain+a.port+a.j);return g.wi(c+b,{})},Xcb=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ta(a.C,d,!0),onError:g.Ta(a.B,e),onTimeout:g.Ta(a.D,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.vu(b,a)},Ycb=function(a,b){g.Tf.call(this);
var c=this;this.Rc=a();this.Rc.subscribe("handlerOpened",this.NU,this);this.Rc.subscribe("handlerClosed",this.LU,this);this.Rc.subscribe("handlerError",function(d,e){c.onError(e)});
this.Rc.subscribe("handlerMessage",this.MU,this);this.j=b},Zcb=function(a,b,c){var d=this;
c=void 0===c?function(){return""}:c;
var e=void 0===e?new ccb:e;var f=void 0===f?new g.yo:f;this.pathPrefix=a;this.j=b;this.ra=c;this.D=f;this.N=null;this.V=this.J=0;this.channel=null;this.I=0;this.B=new W8(function(){d.B.isActive();var h;0===(null==(h=d.channel)?void 0:Gbb((new fcb(h,h.j)).j.u))&&d.connect(d.N,d.J)});
this.C={};this.u={};this.W=!1;this.logger=null;this.Y=[];this.Dg=void 0;this.Ha=new Xab;this.qa=new Zab;this.Ea=new abb;this.va=new cbb},$cb=function(a){g.Mf(a.channel,"m",function(){a.I=3;
a.B.reset();a.N=null;a.J=0;for(var b=g.r(a.Y),c=b.next();!c.done;c=b.next())c=c.value,a.channel&&a.channel.send(c);a.Y=[];a.X("webChannelOpened");Yab(a.Ha,"WEB_CHANNEL")});
g.Mf(a.channel,"n",function(){a.I=0;a.B.isActive()||a.X("webChannelClosed");var b,c=null==(b=a.channel)?void 0:gcb(new fcb(b,b.j));c&&(a.Y=[].concat(g.t(c)));$ab(a.qa,"WEB_CHANNEL")});
g.Mf(a.channel,"p",function(b){var c=b.data;"gracefulReconnect"===c[0]?(a.B.start(),a.channel&&a.channel.close()):a.X("webChannelMessage",new Ucb(c[0],c[1]));a.Dg=b.statusCode;bbb(a.Ea,"WEB_CHANNEL")});
g.Mf(a.channel,"o",function(){401===a.Dg||a.B.start();a.X("webChannelError");dbb(a.va,"WEB_CHANNEL")})},adb=function(a){var b=a.ra();
b?a.C["x-youtube-lounge-xsrf-token"]=b:delete a.C["x-youtube-lounge-xsrf-token"]},bdb=function(a){g.Tf.call(this);
this.j=a();this.j.subscribe("webChannelOpened",this.QU,this);this.j.subscribe("webChannelClosed",this.OU,this);this.j.subscribe("webChannelError",this.onError,this);this.j.subscribe("webChannelMessage",this.PU,this)},cdb=function(a,b,c,d,e){function f(){return new Vcb(Y8(a,"/bc"),b,!1,c,d)}
c=void 0===c?function(){return""}:c;
return g.T("enable_mdx_web_channel_desktop")?new bdb(function(){return new Zcb(Y8(a,"/wc"),b,c)}):new Ycb(f,e)},gdb=function(){var a=ddb;
edb();Z8.push(a);fdb()},$8=function(a,b){edb();
var c=hdb(a,String(b));g.Xb(Z8)?idb(c):(fdb(),g.tc(Z8,function(d){d(c)}))},a9=function(a){$8("CP",a)},edb=function(){Z8||(Z8=g.Ha("yt.mdx.remote.debug.handlers_")||[],g.Fa("yt.mdx.remote.debug.handlers_",Z8))},idb=function(a){var b=(b9+1)%50;
b9=b;c9[b]=a;d9||(d9=49==b)},fdb=function(){var a=Z8;
if(c9[0]){var b=d9?b9:-1;do{b=(b+1)%50;var c=c9[b];g.tc(a,function(d){d(c)})}while(b!=b9);
c9=Array(50);b9=-1;d9=!1}},hdb=function(a,b){var c=(Date.now()-jdb)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},e9=function(a){g.Uy.call(this);
this.I=a;this.screens=[]},kdb=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},ldb=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.wm(a.screens,function(f){return!!yab(b,f)});
for(var d=0,e=b.length;d<e;d++)c=kdb(a,b[d])||c;return c},mdb=function(a,b){var c=a.screens.length;
a.screens=g.wm(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},ndb=function(a,b,c,d,e){g.Uy.call(this);
this.B=a;this.J=b;this.C=c;this.I=d;this.D=e;this.u=0;this.j=null;this.qc=NaN},g9=function(a){e9.call(this,"LocalScreenService");
this.u=a;this.j=NaN;f9(this);this.info("Initializing with "+vab(this.screens))},odb=function(a){if(a.screens.length){var b=g.Ok(a.screens,function(d){return d.id}),c=Y8(a.u,"/pairing/get_lounge_token_batch");
Xcb(a.u,c,{screen_ids:b.join(",")},(0,g.Sa)(a.JY,a),(0,g.Sa)(a.IY,a))}},f9=function(a){if(g.T("deprecate_pair_servlet_enabled"))return ldb(a,[]);
var b=uab(Fab());b=g.wm(b,function(c){return!c.uuid});
return ldb(a,b)},h9=function(a,b){Hab(g.Ok(a.screens,sab));
b&&Gab()},qdb=function(a,b){g.Uy.call(this);
this.I=b;b=(b=g.Hz("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.I(),e=0,f=d.length;e<f;++e){var h=d[e].id;c[h]=g.Wb(b,h)}this.j=c;this.D=a;this.B=this.C=NaN;this.u=null;pdb("Initialized with "+g.fi(this.j))},rdb=function(a,b,c){var d=Y8(a.D,"/pairing/get_screen_availability");
Xcb(a.D,d,{lounge_token:b.token},(0,g.Sa)(function(e){e=e.screens||[];for(var f=0,h=e.length;f<h;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.Sa)(function(){c(!1)},a))},tdb=function(a,b){a:if(lab(b)!=lab(a.j))var c=!1;
else{c=g.xf(b);for(var d=0,e=c.length;d<e;++d)if(!a.j[c[d]]){c=!1;break a}c=!0}c||(pdb("Updated online screens: "+g.fi(a.j)),a.j=b,a.X("screenChange"));sdb(a)},i9=function(a){isNaN(a.B)||g.ru(a.B);
a.B=g.pu((0,g.Sa)(a.YJ,a),0<a.C&&a.C<g.Ua()?2E4:1E4)},pdb=function(a){$8("OnlineScreenService",a)},udb=function(a){var b={};
g.tc(a.I(),function(c){c.token?b[c.token]=c.id:this.Ze("Requesting availability of screen w/o lounge token.")});
return b},sdb=function(a){a=g.xf(g.pf(a.j,function(b){return b}));
g.lc(a);a.length?g.Gz("yt-remote-online-screen-ids",a.join(","),60):g.Iz("yt-remote-online-screen-ids")},j9=function(a,b){b=void 0===b?!1:b;
e9.call(this,"ScreenService");this.C=a;this.J=b;this.j=this.u=null;this.B=[];this.D={};vdb(this)},xdb=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var h=a.hj(),l=c?f8(h,c):null;c&&(a.J||l)||(l=f8(h,b));if(l){l.uuid=b;var m=k9(a,l);rdb(a.j,m,function(n){e(n?m:null)})}else c?wdb(a,c,(0,g.Sa)(function(n){var p=k9(this,new c8({name:d,
screenId:c,loungeToken:n,dialId:b||""}));rdb(this.j,p,function(q){e(q?p:null)})},a),f):e(null)},ydb=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},zdb=function(a,b,c){rdb(a.j,b,c)},wdb=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){f=h&&h.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.vu(Y8(a.C,"/pairing/get_lounge_token_batch"),e)},Adb=function(a){a.screens=a.u.hj();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+vab(a.screens))},vdb=function(a){Bdb(a);
a.u=new g9(a.C);a.u.subscribe("screenChange",(0,g.Sa)(a.TY,a));Adb(a);a.J||(a.B=uab(g.Hz("yt-remote-automatic-screen-cache")||[]));Bdb(a);a.info("Initializing automatic screens: "+vab(a.B));a.j=new qdb(a.C,(0,g.Sa)(a.hj,a,!0));a.j.subscribe("screenChange",(0,g.Sa)(function(){this.X("onlineScreenChange")},a))},k9=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=f8(a.B,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.B.push(b),a.J||Cdb(a));Bdb(a);a.D[b.uuid]=b.id;g.Gz("yt-remote-device-id-map",a.D,31536E3);return b},Cdb=function(a){a=g.wm(a.B,function(b){return"shortLived"!=b.idType});
g.Gz("yt-remote-automatic-screen-cache",g.Ok(a,sab))},Bdb=function(a){a.D=g.Hz("yt-remote-device-id-map")||{}},l9=function(a,b,c){g.Uy.call(this);
this.va=c;this.B=a;this.j=b;this.C=null},m9=function(a,b){a.C=b;
a.X("sessionScreen",a.C)},Ddb=function(a,b){a.C&&(a.C.token=b,k9(a.B,a.C));
a.X("sessionScreen",a.C)},n9=function(a,b){$8(a.va,b)},o9=function(a,b,c){l9.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.u=null;this.Y=(0,g.Sa)(this.VU,this);this.qa=(0,g.Sa)(this.R2,this);this.W=g.pu(function(){Edb(d,null)},12E4);
this.J=this.D=this.I=this.N=0;this.ra=!1;this.V="unknown"},Gdb=function(a,b){g.ru(a.J);
a.J=0;0==b?Fdb(a):a.J=g.pu(function(){Fdb(a)},b)},Fdb=function(a){Hdb(a,"getLoungeToken");
g.ru(a.D);a.D=g.pu(function(){Idb(a,null)},3E4)},Hdb=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.fi());
var c={};c.type=b;a.u?a.u.sendMessage("urn:x-cast:com.google.youtube.mdx",c,function(){},(0,g.Sa)(function(){n9(this,"Failed to send message: "+b+".")},a)):n9(a,"Sending yt message without session: "+g.fi(c))},Jdb=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.UO(b,function(c){m9(a,c)},function(){return a.Sh()},5)):a.Sh(Error("Waiting for session status timed out."))},Ldb=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+
JSON.stringify(b));
var d=new c8(b);Kdb(a,d,function(e){e?(a.ra=!0,k9(a.B,d),m9(a,d),a.V="unknown",Gdb(a,c)):(g.$t(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.Sh())},5)},Edb=function(a,b){g.ru(a.W);
a.W=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?Ldb(a,{name:a.j.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.$t(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),Jdb(a,b.screenId))):(g.$t(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),Jdb(a,b.screenId)):Jdb(a,b.screenId):a.Sh(Error("Waiting for session status timed out."))},Idb=function(a,b){g.ru(a.D);
a.D=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.V=c,Gdb(a,3E4)):(Ddb(a,b.loungeToken),a.ra=!1,a.V="unknown",Gdb(a,b.loungeTokenRefreshIntervalMs))},Kdb=function(a,b,c,d){g.ru(a.I);
a.I=0;zdb(a.B,b,function(e){e||0>d?c(e):a.I=g.pu(function(){Kdb(a,b,c,d-1)},300)})},Mdb=function(a){g.ru(a.N);
a.N=0;g.ru(a.I);a.I=0;g.ru(a.W);a.W=0;g.ru(a.D);a.D=0;g.ru(a.J);a.J=0},p9=function(a,b,c,d){l9.call(this,a,b,"DialSession");
this.config_=d;this.u=this.N=null;this.qa="";this.Ka=c;this.Ha=null;this.W=function(){};
this.V=NaN;this.Ea=(0,g.Sa)(this.WU,this);this.D=function(){};
this.J=this.I=0;this.Y=!1;this.ra="unknown"},q9=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.u)?0:b.getDialAppInfo))},Ndb=function(a){a.D=a.B.gM(a.qa,a.j.label,a.j.friendlyName,q9(a),function(b,c){a.D=function(){};
a.Y=!0;m9(a,b);"shortLived"==b.idType&&0<c&&r9(a,c)},function(b){a.D=function(){};
a.Sh(b)})},Odb=function(a){var b={};
b.pairingCode=a.qa;b.theme=a.Ka;Jab()&&(b.env_useStageMdx=1);return g.ui(b)},Pdb=function(a){return new Promise(function(b){a.qa=wab();
if(a.Ha){var c=new chrome.cast.DialLaunchResponse(!0,Odb(a));b(c);Ndb(a)}else a.W=function(){g.ru(a.V);a.W=function(){};
a.V=NaN;var d=new chrome.cast.DialLaunchResponse(!0,Odb(a));b(d);Ndb(a)},a.V=g.pu(function(){a.W()},100)})},Rdb=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new c8(b);return(new Promise(function(e){Qdb(a,d,function(f){f?(a.Y=!0,k9(a.B,d),m9(a,d),r9(a,c)):g.$t(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):Pdb(a)})},Sdb=function(a,b){var c=a.N.receiver.label,d=a.j.friendlyName;
return(new Promise(function(e){xdb(a.B,c,b,d,function(f){f&&f.token&&m9(a,f);e(f)},function(f){n9(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):Pdb(a)})},Qdb=function(a,b,c,d){g.ru(a.I);
a.I=0;zdb(a.B,b,function(e){e||0>d?c(e):a.I=g.pu(function(){Qdb(a,b,c,d-1)},300)})},r9=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
q9(a)&&(g.ru(a.J),a.J=0,0==b?Tdb(a):a.J=g.pu(function(){Tdb(a)},b))},Tdb=function(a){q9(a)&&a.u.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.ra=c,r9(a,3E4)):(a.Y=!1,a.ra="unknown",Ddb(a,b.loungeToken),r9(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.ra="noLoungeTokenResponse";r9(a,3E4)})},Udb=function(a){g.ru(a.I);
a.I=0;g.ru(a.J);a.J=0;a.D();a.D=function(){};
g.ru(a.V)},s9=function(a,b){l9.call(this,a,b,"ManualSession");
this.u=g.pu((0,g.Sa)(this.Mv,this,null),150)},t9=function(a,b){g.Uy.call(this);
this.config_=b;this.u=a;this.N=b.appId||"233637DE";this.C=b.theme||"cl";this.V=b.disableCastApi||!1;this.I=b.forceMirroring||!1;this.j=null;this.J=!1;this.B=[];this.D=(0,g.Sa)(this.F1,this)},Vdb=function(a,b){return b?g.Ub(a.B,function(c){return d8(b,c.label)},a):null},u9=function(a){$8("Controller",a)},ddb=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},v9=function(a){return a.J||!!a.B.length||!!a.j},w9=function(a,b,c){b!=a.j&&(g.df(a.j),(a.j=b)?(c?a.X("yt-remote-cast2-receiver-resumed",
b.j):a.X("yt-remote-cast2-receiver-selected",b.j),b.subscribe("sessionScreen",(0,g.Sa)(a.nR,a,b)),b.subscribe("sessionFailed",function(){return Wdb(a,b)}),b.getScreen()?a.X("yt-remote-cast2-session-change",b.getScreen()):c&&a.j.Mv(null)):a.X("yt-remote-cast2-session-change",null))},Wdb=function(a,b){a.j==b&&a.X("yt-remote-cast2-session-failed")},Xdb=function(a){var b=a.u.fM(),c=a.j&&a.j.j;
a=g.Ok(b,function(d){c&&d8(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=Vdb(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},deb=function(a,b,c,d){d.disableCastApi?x9("Cannot initialize because disabled by Mdx config."):Ydb()?Zdb(b,d)&&($db(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?aeb(a,c):(window.__onGCastApiAvailable=function(e,f){e?aeb(a,c):(y9("Failed to load cast API: "+f),beb(!1),$db(!1),g.Iz("yt-remote-cast-available"),g.Iz("yt-remote-cast-receiver"),
ceb(),c(!1))},d.loadCastApiSetupScript?g.Kz("https://web.archive.org/web/20220808101855/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=Kab()&&Uab():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?Oab():89<=Kab()?Wab():(Sab(),k8(Vab.map(Pab))))):x9("Cannot initialize because not running Chrome")},ceb=function(){x9("dispose");
var a=z9();a&&a.dispose();g.Fa("yt.mdx.remote.cloudview.instance_",null);eeb(!1);g.Mx(feb);feb.length=0},A9=function(){return!!g.Hz("yt-remote-cast-installed")},geb=function(){var a=g.Hz("yt-remote-cast-receiver");
return a?a.friendlyName:null},heb=function(){x9("clearCurrentReceiver");
g.Iz("yt-remote-cast-receiver")},ieb=function(){return A9()?z9()?z9().getCastSession():(y9("getCastSelector: Cast is not initialized."),null):(y9("getCastSelector: Cast API is not installed!"),null)},jeb=function(){A9()?z9()?B9()?(x9("Requesting cast selector."),z9().requestSession()):(x9("Wait for cast API to be ready to request the session."),feb.push(g.Lx("yt-remote-cast2-api-ready",jeb))):y9("requestCastSelector: Cast is not initialized."):y9("requestCastSelector: Cast API is not installed!")},
C9=function(a,b){B9()?z9().setConnectedScreenStatus(a,b):y9("setConnectedScreenStatus called before ready.")},Ydb=function(){var a=0<=g.sb().search(/ (CrMo|Chrome|CriOS)\//);
return g.VD||a},keb=function(a,b){z9().init(a,b)},Zdb=function(a,b){var c=!1;
z9()||(a=new t9(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.Gz("yt-remote-cast-available",d);a8("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){x9("onReceiverSelected: "+d.friendlyName);
g.Gz("yt-remote-cast-receiver",d);a8("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){x9("onReceiverResumed: "+d.friendlyName);
g.Gz("yt-remote-cast-receiver",d);a8("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){x9("onSessionChange: "+e8(d));
d||g.Iz("yt-remote-cast-receiver");a8("yt-remote-cast2-session-change",d)}),g.Fa("yt.mdx.remote.cloudview.instance_",a),c=!0);
x9("cloudview.createSingleton_: "+c);return c},z9=function(){return g.Ha("yt.mdx.remote.cloudview.instance_")},aeb=function(a,b){beb(!0);
$db(!1);keb(a,function(c){c?(eeb(!0),g.Nx("yt-remote-cast2-api-ready")):(y9("Failed to initialize cast API."),beb(!1),g.Iz("yt-remote-cast-available"),g.Iz("yt-remote-cast-receiver"),ceb());b(c)})},x9=function(a){$8("cloudview",a)},y9=function(a){$8("cloudview",a)},beb=function(a){x9("setCastInstalled_ "+a);
g.Gz("yt-remote-cast-installed",a)},B9=function(){return!!g.Ha("yt.mdx.remote.cloudview.apiReady_")},eeb=function(a){x9("setApiReady_ "+a);
g.Fa("yt.mdx.remote.cloudview.apiReady_",a)},$db=function(a){g.Fa("yt.mdx.remote.cloudview.initializing_",a)},D9=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.I=this.J=0;this.trackData=null;this.hasNext=this.Am=!1;this.N=this.D=this.j=this.C=0;this.B=NaN;this.u=!1;this.reset(a)},leb=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.Am=!1;a.hasNext=!1;a.J=0;a.I=g.Ua();a.C=0;a.j=0;a.D=0;a.N=0;a.B=NaN;a.u=!1},E9=function(a){return a.Mc()?(g.Ua()-a.I)/1E3:0},F9=function(a,b){a.J=b;
a.I=g.Ua()},G9=function(a){switch(a.playerState){case 1:case 1081:return(g.Ua()-a.I)/1E3+a.J;
case -1E3:return 0}return a.J},H9=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&leb(a)},meb=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.Gf(a.trackData);b.hasPrevious=a.Am;b.hasNext=a.hasNext;b.playerTime=a.J;b.playerTimeAt=a.I;b.seekableStart=a.C;b.seekableEnd=a.j;b.duration=a.D;b.loadedTime=a.N;b.liveIngestionTime=a.B;return b},J9=function(a,b){g.Uy.call(this);
this.B=0;this.C=a;this.I=[];this.D=new Qcb;this.u=this.j=null;this.V=(0,g.Sa)(this.h0,this);this.J=(0,g.Sa)(this.Hz,this);this.N=(0,g.Sa)(this.g0,this);this.W=(0,g.Sa)(this.l0,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.sK,this),neb(this))):c=3;0!=c&&(b?this.sK(c):g.pu((0,g.Sa)(function(){this.sK(c)},this),0));
(a=ieb())&&I9(this,a);this.subscribe("yt-remote-cast2-session-change",this.W)},K9=function(a){return new D9(a.C.getPlayerContextData())},neb=function(a){g.tc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "),function(b){this.I.push(this.C.subscribe(b,g.Ta(this.D1,b),this))},a)},oeb=function(a){g.tc(a.I,function(b){this.C.unsubscribeByKey(b)},a);
a.I.length=0},L9=function(a){return 1==a.getState()},M9=function(a,b){var c=a.D;
50>c.j.length+c.u.length&&a.D.enqueue(b)},peb=function(a,b,c){var d=K9(a);
F9(d,c);-1E3!=d.playerState&&(d.playerState=b);N9(a,d)},O9=function(a,b,c){a.C.sendMessage(b,c)},N9=function(a,b){oeb(a);
a.C.setPlayerContextData(meb(b));neb(a)},I9=function(a,b){a.u&&(a.u.removeUpdateListener(a.V),a.u.removeMediaListener(a.J),a.Hz(null));
a.u=b;a.u&&(a9("Setting cast session: "+a.u.sessionId),a.u.addUpdateListener(a.V),a.u.addMediaListener(a.J),a.u.media.length&&a.Hz(a.u.media[0]))},qeb=function(a){var b=a.j.media,c=a.j.customData;
if(b&&c){var d=K9(a);b.contentId!=d.videoId&&a9("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;F9(d,a.j.getEstimatedTime());N9(a,d)}else a9("No cast media video. Ignoring state update.")},P9=function(a,b,c){return(0,g.Sa)(function(d){this.Ze("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.Ze("Retrying "+b+" using MDx browser channel."),O9(this,b,c))},a)},S9=function(a,b,c,d){d=void 0===d?!1:d;
g.Uy.call(this);var e=this;this.I=NaN;this.qa=!1;this.V=this.N=this.Y=this.ra=NaN;this.W=[];this.D=this.J=this.C=this.j=this.u=null;this.Ha=a;this.Ea=d;this.W.push(g.sx(window,"beforeunload",function(){e.Wu(2)}));
this.B=[];this.j=new D9;this.Ka=b.id;this.va=b.idType;this.u=cdb(this.Ha,c,this.kM,"shortLived"==this.va,this.Ka);this.u.Na("channelOpened",function(){reb(e)});
this.u.Na("channelClosed",function(){Q9("Channel closed");isNaN(e.I)?i8(!0):i8();e.dispose()});
this.u.Na("channelError",function(f){i8();isNaN(e.Ly())?(1==f&&"shortLived"==e.va&&e.X("browserChannelAuthError",f),Q9("Channel error: "+f+" without reconnection"),e.dispose()):(e.qa=!0,Q9("Channel error: "+f+" with reconnection in "+e.Ly()+" ms"),R9(e,2))});
this.u.Na("channelMessage",function(f){seb(e,f)});
this.u.Mo(b.token);this.subscribe("remoteQueueChange",function(){var f=e.j.videoId;g.Jz()&&g.Gz("yt-remote-session-video-id",f)})},teb=function(a){return g.Ub(a.B,function(b){return"LOUNGE_SCREEN"==b.type})},Q9=function(a){$8("conn",a)},R9=function(a,b){a.X("proxyStateChange",b)},ueb=function(a){a.I=g.pu(function(){Q9("Connecting timeout");
a.Wu(1)},2E4)},veb=function(a){g.ru(a.I);
a.I=NaN},web=function(a){g.ru(a.ra);
a.ra=NaN},yeb=function(a){xeb(a);
a.Y=g.pu(function(){T9(a,"getNowPlaying")},2E4)},xeb=function(a){g.ru(a.Y);
a.Y=NaN},reb=function(a){Q9("Channel opened");
a.qa&&(a.qa=!1,web(a),a.ra=g.pu(function(){Q9("Timing out waiting for a screen.");a.Wu(1)},15E3))},Aeb=function(a,b){var c=null;
if(b){var d=teb(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Fa("yt.mdx.remote.remoteClient_",c);b&&(veb(a),web(a));c=a.u.Ev()&&isNaN(a.I);b==c?b&&(R9(a,1),T9(a,"getSubtitlesTrack")):b?(a.TO()&&a.j.reset(),R9(a,1),T9(a,"getNowPlaying"),zeb(a)):a.Wu(1)},Beb=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.j.videoId&&(g.Bf(b.params)?a.j.trackData=null:a.j.trackData=b.params,a.X("remotePlayerChange"))},Ceb=function(a,b,c){var d=b.params.videoId||b.params.video_id,e=parseInt(b.params.currentIndex,10);
a.j.listId=b.params.listId||a.j.listId;H9(a.j,d,e);a.X("remoteQueueChange",c)},Eeb=function(a,b){b.params=b.params||{};
Ceb(a,b,"NOW_PLAYING_MAY_CHANGE");Deb(a,b);a.X("autoplayDismissed")},Deb=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
F9(a.j,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.j.playerState&&(c=-1E3);a.j.playerState=c;c=Number(b.params.loadedTime);a.j.N=isNaN(c)?0:c;a.j.wj(Number(b.params.duration));c=a.j;var d=Number(b.params.liveIngestionTime);c.B=d;c.u=isNaN(d)?!1:!0;c=a.j;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.j=isNaN(b)?0:b;1==a.j.playerState?yeb(a):xeb(a);a.X("remotePlayerChange")},Feb=function(a,b){if(-1E3!=a.j.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.j.playerState=c;b=parseInt(b.params.currentTime,10);F9(a.j,isNaN(b)?0:b);a.X("remotePlayerChange")}},Geb=function(a,b){var c="true"==b.params.muted;
a.j.volume=parseInt(b.params.volume,10);a.j.muted=c;a.X("remotePlayerChange")},Heb=function(a,b){a.J=b.params.videoId;
a.X("nowAutoplaying",parseInt(b.params.timeout,10))},Ieb=function(a,b){a.J=b.params.videoId||null;
a.X("autoplayUpNext",a.J)},Jeb=function(a,b){a.D=b.params.autoplayMode;
a.X("autoplayModeChange",a.D);"DISABLED"==a.D&&a.X("autoplayDismissed")},Keb=function(a,b){var c="true"==b.params.hasNext;
a.j.Am="true"==b.params.hasPrevious;a.j.hasNext=c;a.X("previousNextChange")},seb=function(a,b){b=b.message;
b.params?Q9("Received: action="+b.action+", params="+g.fi(b.params)):Q9("Received: action="+b.action+" {}");switch(b.action){case "loungeStatus":b=$7(b.params.devices);a.B=g.Ok(b,function(d){return new b8(d)});
b=!!g.Ub(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
Aeb(a,b);b=a.FP("mlm");a.X("multiStateLoopEnabled",b);break;case "loungeScreenDisconnected":g.$b(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
Aeb(a,!1);break;case "remoteConnected":var c=new b8($7(b.params.device));g.Ub(a.B,function(d){return d.equals(c)})||kab(a.B,c);
break;case "remoteDisconnected":c=new b8($7(b.params.device));g.$b(a.B,function(d){return d.equals(c)});
break;case "gracefulDisconnect":break;case "playlistModified":Ceb(a,b,"QUEUE_MODIFIED");break;case "nowPlaying":Eeb(a,b);break;case "onStateChange":Deb(a,b);break;case "onAdStateChange":Feb(a,b);break;case "onVolumeChanged":Geb(a,b);break;case "onSubtitlesTrackChanged":Beb(a,b);break;case "nowAutoplaying":Heb(a,b);break;case "autoplayDismissed":a.X("autoplayDismissed");break;case "autoplayUpNext":Ieb(a,b);break;case "onAutoplayModeChanged":Jeb(a,b);break;case "onHasPreviousNextChanged":Keb(a,b);break;
case "requestAssistedSignIn":a.X("assistedSignInRequested",b.params.authCode);break;case "onLoopModeChanged":a.X("loopModeChange",b.params.loopMode);break;default:Q9("Unrecognized action: "+b.action)}},zeb=function(a){g.ru(a.V);
a.V=g.pu(function(){a.Wu(1)},864E5)},T9=function(a,b,c){c?Q9("Sending: action="+b+", params="+g.fi(c)):Q9("Sending: action="+b);
a.u.sendMessage(b,c)},Leb=function(a){e9.call(this,"ScreenServiceProxy");
this.Mf=a;this.j=[];this.j.push(this.Mf.$_s("screenChange",(0,g.Sa)(this.aV,this)));this.j.push(this.Mf.$_s("onlineScreenChange",(0,g.Sa)(this.f1,this)))},Qeb=function(a,b){Iab();
if(!j8||!j8.get("yt-remote-disable-remote-module-for-dev")){b=g.Q("MDX_CONFIG")||b;zab();Dab();U9||(U9=new X8(b?b.loungeApiHost:void 0),Jab()&&(U9.j="/api/loungedev"));V9||(V9=g.Ha("yt.mdx.remote.deferredProxies_")||[],g.Fa("yt.mdx.remote.deferredProxies_",V9));Meb();var c=W9();if(!c){var d=new j9(U9,b?b.disableAutomaticScreenCache||!1:!1);g.Fa("yt.mdx.remote.screenService_",d);c=W9();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});g.Fa("yt.mdx.remote.enableConnectWithInitialState_",b?b.enableConnectWithInitialState||!1:!1);deb(a,d,function(f){f?X9()&&C9(X9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){a8("yt-remote-receiver-availability-change")})},e)}b&&!g.Ha("yt.mdx.remote.initialized_")&&(g.Fa("yt.mdx.remote.initialized_",!0),Y9("Initializing: "+g.fi(b)),
Z9.push(g.Lx("yt-remote-cast2-api-ready",function(){a8("yt-remote-api-ready")})),Z9.push(g.Lx("yt-remote-cast2-availability-change",function(){a8("yt-remote-receiver-availability-change")})),Z9.push(g.Lx("yt-remote-cast2-receiver-selected",function(){$9(null);
a8("yt-remote-auto-connect","cast-selector-receiver")})),Z9.push(g.Lx("yt-remote-cast2-receiver-resumed",function(){a8("yt-remote-receiver-resumed","cast-selector-receiver")})),Z9.push(g.Lx("yt-remote-cast2-session-change",Neb)),Z9.push(g.Lx("yt-remote-connection-change",function(f){f?C9(X9(),"YouTube TV"):a$()||(C9(null,null),heb())})),Z9.push(g.Lx("yt-remote-cast2-session-failed",function(){a8("yt-remote-connection-failed")})),a=Oeb(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.T("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),Y9(" -- with channel params: "+g.fi(a)),a?(g.Gz("yt-remote-session-app",a.app),g.Gz("yt-remote-session-name",a.name)):(g.Iz("yt-remote-session-app"),g.Iz("yt-remote-session-name")),g.Fa("yt.mdx.remote.channelParams_",a),c.start(),X9()||Peb())}},Reb=function(){var a=W9().Mf.$_gos();
var b=b$();b&&c$()&&(yab(a,b)||a.push(b));return xab(a)},Teb=function(){var a=Seb();
!a&&A9()&&geb()&&(a={key:"cast-selector-receiver",name:geb()});return a},Seb=function(){var a=Reb(),b=b$();
b||(b=a$());return g.Ub(a,function(c){return b&&d8(b,c.key)?!0:!1})},b$=function(){var a=X9();
if(!a)return null;var b=W9().hj();return f8(b,a)},Neb=function(a){Y9("remote.onCastSessionChange_: "+e8(a));
if(a){var b=b$();if(b&&b.id==a.id){if(C9(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))d$&&(d$.token=a),(b=c$())&&b.Mo(a)}else b&&e$(),f$(a,1)}else c$()&&e$()},e$=function(){B9()?z9().stopSession():y9("stopSession called before API ready.");
var a=c$();a&&(a.disconnect(1),Ueb(null))},Veb=function(){var a=c$();
return!!a&&3!=a.getProxyState()},Y9=function(a){$8("remote",a)},W9=function(){if(!Web){var a=g.Ha("yt.mdx.remote.screenService_");
Web=a?new Leb(a):null}return Web},X9=function(){return g.Ha("yt.mdx.remote.currentScreenId_")},Xeb=function(a){g.Fa("yt.mdx.remote.currentScreenId_",a)},Yeb=function(){return g.Ha("yt.mdx.remote.connectData_")},$9=function(a){g.Fa("yt.mdx.remote.connectData_",a)},c$=function(){return g.Ha("yt.mdx.remote.connection_")},Ueb=function(a){var b=c$();
$9(null);a||Xeb("");g.Fa("yt.mdx.remote.connection_",a);V9&&(g.tc(V9,function(c){c(a)}),V9.length=0);
b&&!a?a8("yt-remote-connection-change",!1):!b&&a&&a8("yt-remote-connection-change",!0)},a$=function(){var a=g.Jz();
if(!a)return null;var b=W9();if(!b)return null;b=b.hj();return f8(b,a)},f$=function(a,b){X9();
b$()&&b$();if(g$)d$=a;else{Xeb(a.id);var c=g.Ha("yt.mdx.remote.enableConnectWithInitialState_")||!1;a=new S9(U9,a,Oeb(),c);a.connect(b,Yeb());a.subscribe("beforeDisconnect",function(d){a8("yt-remote-before-disconnect",d)});
a.subscribe("beforeDispose",function(){c$()&&(c$(),Ueb(null))});
a.subscribe("browserChannelAuthError",function(){var d=b$();d&&"shortLived"==d.idType&&(B9()?z9().handleBrowserChannelAuthError():y9("refreshLoungeToken called before API ready."))});
Ueb(a)}},Peb=function(){var a=a$();
a?(Y9("Resume connection to: "+e8(a)),f$(a,0)):(i8(),heb(),Y9("Skipping connecting because no session screen found."))},Meb=function(){var a=Oeb();
if(g.Bf(a)){a=h8();var b=g.Hz("yt-remote-session-name")||"",c=g.Hz("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Fa("yt.mdx.remote.channelParams_",a)}},Oeb=function(){return g.Ha("yt.mdx.remote.channelParams_")||{}},$eb=function(a,b,c){g.K.call(this);
var d=this;this.u=a;this.G=b;this.hc=c;this.events=new g.RD(this);this.W=this.events.P(this.G,"onVolumeChange",function(e){Zeb(d,e)});
this.D=!1;this.I=new g.RJ(64);this.j=new g.Vn(this.yS,500,this);this.B=new g.Vn(this.zS,1E3,this);this.N=new m8(this.y5,0,this);this.C={};this.V=new g.Vn(this.lT,1E3,this);this.J=new n8(this.seekTo,1E3,this);g.M(this,this.events);this.events.P(b,"onCaptionsTrackListChanged",this.O0);this.events.P(b,"captionschanged",this.e0);this.events.P(b,"captionssettingschanged",this.HS);this.events.P(b,"videoplayerreset",this.xD);this.events.P(b,"mdxautoplaycancel",function(){d.hc.oO()});
a=this.hc;a.isDisposed();a.subscribe("proxyStateChange",this.kR,this);a.subscribe("remotePlayerChange",this.Mz,this);a.subscribe("remoteQueueChange",this.xD,this);a.subscribe("previousNextChange",this.hR,this);a.subscribe("nowAutoplaying",this.bR,this);a.subscribe("autoplayDismissed",this.FQ,this);g.M(this,this.j);g.M(this,this.B);g.M(this,this.N);g.M(this,this.V);g.M(this,this.J);this.HS();this.xD();this.Mz()},Zeb=function(a,b){if(h$(a)){a.hc.unsubscribe("remotePlayerChange",a.Mz,a);
var c=Math.round(b.volume);b=!!b.muted;var d=K9(a.hc);if(c!==d.volume||b!==d.muted)a.hc.setVolume(c,b),a.V.start();a.hc.subscribe("remotePlayerChange",a.Mz,a)}},afb=function(a){a.Wb(0);
a.j.stop();a.Sb(new g.RJ(64))},bfb=function(a,b){if(h$(a)&&!a.D){var c=null;
b&&(c={style:a.G.getSubtitlesUserSettings()},g.Hf(c,b));a.hc.jM(a.G.getVideoData(1).videoId,c);a.C=K9(a.hc).trackData}},cfb=function(a,b){var c=a.G.getPlaylist();
if(null==c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.G.getVideoData(1);a.hc.playVideo(c.videoId,b,d,e,c.playerParams,c.Y,jab(c));a.Sb(new g.RJ(1))},dfb=function(a,b){if(b){var c=a.G.getOption("captions","tracklist",{xP:1});
c&&c.length?(a.G.setOption("captions","track",b),a.D=!1):(a.G.loadModule("captions"),a.D=!0)}else a.G.setOption("captions","track",{})},h$=function(a){return K9(a.hc).videoId===a.G.getVideoData(1).videoId},i$=function(){g.X.call(this,{F:"div",
L:"ytp-mdx-popup-dialog",T:{role:"dialog"},S:[{F:"div",L:"ytp-mdx-popup-dialog-inner-content",S:[{F:"div",L:"ytp-mdx-popup-title",Z:"You're signed out"},{F:"div",L:"ytp-mdx-popup-description",Z:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{F:"div",L:"ytp-mdx-privacy-popup-buttons",S:[{F:"button",Ca:["ytp-button","ytp-mdx-privacy-popup-cancel"],Z:"Cancel"},{F:"button",Ca:["ytp-button","ytp-mdx-privacy-popup-confirm"],
Z:"Confirm"}]}]}]});this.j=new g.zL(this,250);this.cancelButton=this.ya("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.ya("ytp-mdx-privacy-popup-confirm");g.M(this,this.j);this.P(this.cancelButton,"click",this.u);this.P(this.confirmButton,"click",this.B)},j$=function(a){g.X.call(this,{F:"div",
L:"ytp-remote",S:[{F:"div",L:"ytp-remote-display-status",S:[{F:"div",L:"ytp-remote-display-status-icon",S:[g.VEa()]},{F:"div",L:"ytp-remote-display-status-text",Z:"{{statustext}}"}]}]});this.api=a;this.j=new g.zL(this,250);g.M(this,this.j);this.P(a,"presentingplayerstatechange",this.onStateChange);this.Oc(a.Ab())},k$=function(a,b){g.RQ.call(this,"Play on",0,a,b);
this.G=a;this.zq={};this.P(a,"onMdxReceiversChange",this.D);this.P(a,"presentingplayerstatechange",this.D);this.D()},efb=function(a){g.GN.call(this,a);
this.Nm={key:wab(),name:"This computer"};this.Jj=null;this.subscriptions=[];this.JJ=this.hc=null;this.zq=[this.Nm];this.wp=this.Nm;this.Xd=new g.RJ(64);this.SP=0;this.Cg=-1;this.Uz=!1;this.Sz=this.ew=null;if(!g.MF(this.player.R())&&!g.NF(this.player.R())){a=this.player;var b=g.gN(a);b&&(b=b.Op())&&(b=new k$(a,b),g.M(this,b));b=new j$(a);g.M(this,b);g.qN(a,b.element,4);this.ew=new i$;g.M(this,this.ew);g.qN(a,this.ew.element,4);this.Uz=!!a$()}},l$=function(a){a.Sz&&(a.player.removeEventListener("presentingplayerstatechange",
a.Sz),a.Sz=null)},ffb=function(a,b,c){a.Xd=c;
a.player.X("presentingplayerstatechange",new g.jJ(c,b))},m$=function(a,b){if(b.key!==a.wp.key)if(b.key===a.Nm.key)e$();
else{var c;(c=!a.player.R().K("mdx_enable_privacy_disclosure_ui"))||(c=((c=g.Q("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.Q("SESSION_INDEX")&&!g.Q("LOGGED_IN")))||a.Uz||!a.ew);(c?0:g.dG(a.player.R())||g.gG(a.player.R()))&&gfb(a);a.wp=b;if(!a.player.R().K("disable_mdx_connection_in_mdx_module_for_music_web")||!g.NF(a.player.R())){var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&a.player.R().K("should_clear_video_data_on_player_cued_unstarted"))a=
null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.length;l++)h[l]=g.BN(f,l).videoId}else h=[e];f=a.player.getCurrentTime(1);a={videoIds:h,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.Y,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=jab(c))&&(a.locationInfo=c)}Y9("Connecting to: "+g.fi(b));"cast-selector-receiver"==b.key?($9(a||null),b=a||null,B9()?z9().setLaunchParams(b):y9("setLaunchParams called before ready.")):!a&&Veb()&&
X9()==b.key?a8("yt-remote-connection-change",!0):(e$(),$9(a||null),a=W9().hj(),(b=f8(a,b.key))&&f$(b,1))}}},gfb=function(a){a.player.Ab().Mc()?a.player.pauseVideo():(a.Sz=function(b){!a.Uz&&g.lJ(b,8)&&(a.player.pauseVideo(),l$(a))},a.player.addEventListener("presentingplayerstatechange",a.Sz));
a.ew&&a.ew.wd();c$()||(g$=!0)};
g.$p.prototype.Hp=g.ba(1,function(){return g.ld(this,6)});
g.ce.prototype.cB=g.ba(0,function(){var a=g.ne(this);return 4294967296*g.ne(this)+(a>>>0)});
var W$a,hfb=g.Ve(function(a,b,c){if(1!==a.u)return!1;g.D(b,c,g.oe(a.j));return!0},g.We),ifb=g.Ve(function(a,b,c,d){if(1!==a.u)return!1;
g.zd(b,c,d,g.oe(a.j));return!0},g.We),jfb=g.Ve(function(a,b,c){if(0!==a.u)return!1;
g.D(b,c,g.ee(a.j));return!0},g.Xe),kfb=g.Ve(function(a,b,c,d){if(0!==a.u)return!1;
g.zd(b,c,d,g.ee(a.j));return!0},g.Xe),lfb=g.Ve(function(a,b,c){if(0!==a.u)return!1;
g.D(b,c,g.me(a.j));return!0},g.Ye),mfb=g.Ve(function(a,b,c,d){if(0!==a.u)return!1;
g.zd(b,c,d,g.me(a.j));return!0},g.Ye),nfb=g.Ve(function(a,b,c){if(1!==a.u)return!1;
g.D(b,c,a.j.cB());return!0},function(a,b,c){Y$a(a,c,g.ld(b,c))}),ofb=g.Ve(function(a,b,c){if(1!==a.u&&2!==a.u)return!1;
b=g.pd(b,c);if(2==a.u){c=g.ce.prototype.cB;var d=g.me(a.j)>>>0;for(d=a.j.j+d;a.j.j<d;)b.push(c.call(a.j))}else b.push(a.j.cB());return!0},function(a,b,c){b=g.pd(b,c);
if(null!=b)for(var d=0;d<b.length;d++)Y$a(a,c,b[d])}),pfb=g.Ve(function(a,b,c){if(0!==a.u)return!1;
g.D(b,c,g.te(a.j));return!0},Z$a),qfb=g.Ve(function(a,b,c,d){if(0!==a.u)return!1;
g.zd(b,c,d,g.te(a.j));return!0},Z$a),rfb=g.Ve(function(a,b,c){if(2!==a.u)return!1;
a=g.ze(a);g.xd(b,c,a);return!0},function(a,b,c){b=g.pd(b,c);
if(null!=b)for(var d=0;d<b.length;d++){var e=b[d];null!=e&&g.He(a,c,g.waa(e))}}),sfb=g.Ve(function(a,b,c,d){if(2!==a.u)return!1;
g.zd(b,c,d,g.ze(a));return!0},g.oca),tfb=g.Ve(function(a,b,c,d,e){if(2!==a.u)return!1;
g.we(a,g.wba(b,d,c),e);return!0},g.pca),$$a=[1];
g.u(aab,g.J);g.u(bab,g.J);var ufb=[aab,1,g.u3,[bab,1,hfb,2,jfb]];g.u(cab,g.J);g.u(dab,g.J);g.u(eab,g.J);
var vfb=[1,2],wfb=[g.Sh,1,g.t3,5,nfb,2,tfb,[cab,1,g.v3,[dab,1,g.t3,2,g.t3,3,pfb],vfb,2,g.v3,[eab,1,g.t3,2,g.t3,3,lfb,4,pfb],vfb],3,rfb,6,ofb,4,g.u3,[g.Th,1,g.u3,[g.Uh,1,sfb,g.Xh,2,mfb,g.Xh,3,qfb,g.Xh],2,tfb,[g.Vh,1,kfb,g.Wh,2,ifb,g.Wh,3,g.v3,ufb,g.Wh]]],ocb={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},O8={"'":"\\'"},rab={Uba:"atp",XOa:"ska",CLa:"que",GCa:"mus",WOa:"sus",mqa:"dsp",WMa:"seq",WBa:"mic",Cla:"dpa",Qca:"cds",wCa:"mlm",
xla:"dsdtr",aEa:"ntb"};b8.prototype.equals=function(a){return a?this.id==a.id:!1};
var j8,Cab="",Rab=Lab("loadCastFramework")||Lab("loadCastApplicationFramework"),Vab=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Xa(m8,g.K);g.k=m8.prototype;g.k.zU=function(a){this.C=arguments;this.j=!1;this.qc?this.B=g.Ua()+this.qh:this.qc=g.Ph(this.D,this.qh)};
g.k.stop=function(){this.qc&&(g.C.clearTimeout(this.qc),this.qc=null);this.B=null;this.j=!1;this.C=[]};
g.k.pause=function(){++this.u};
g.k.resume=function(){this.u&&(--this.u,!this.u&&this.j&&(this.j=!1,this.I.apply(null,this.C)))};
g.k.ea=function(){this.stop();m8.Ke.ea.call(this)};
g.k.AU=function(){this.qc&&(g.C.clearTimeout(this.qc),this.qc=null);this.B?(this.qc=g.Ph(this.D,this.B-g.Ua()),this.B=null):this.u?this.j=!0:(this.j=!1,this.I.apply(null,this.C))};g.u(n8,g.K);g.k=n8.prototype;g.k.lF=function(a){this.B=arguments;this.qc||this.u?this.j=!0:gbb(this)};
g.k.stop=function(){this.qc&&(g.C.clearTimeout(this.qc),this.qc=null,this.j=!1,this.B=null)};
g.k.pause=function(){this.u++};
g.k.resume=function(){this.u--;this.u||!this.j||this.qc||(this.j=!1,gbb(this))};
g.k.ea=function(){g.K.prototype.ea.call(this);this.stop()};o8.prototype.stringify=function(a){return g.C.JSON.stringify(a,void 0)};
o8.prototype.parse=function(a){return g.C.JSON.parse(a,void 0)};g.Xa(hbb,g.hf);g.Xa(ibb,g.hf);var lbb=!1;var nbb=null;g.Xa(pbb,g.hf);g.Xa(qbb,g.hf);g.Xa(rbb,g.hf);sbb.prototype.info=function(){};
sbb.prototype.warning=function(){};var zbb={},u8={};g.k=s8.prototype;g.k.setTimeout=function(a){this.ub=a};
g.k.DU=function(a){a=a.target;var b=this.Ua;b&&3==g.Di(a)?b.lF():this.ML(a)};
g.k.ML=function(a){try{if(a==this.j)a:{var b=g.Di(this.j),c=this.j.u,d=this.j.getStatus();if(!(3>b)&&(3!=b||g.jG||this.j&&(this.u.u||g.Fi(this.j)||g.Gi(this.j)))){this.Ea||4!=b||7==c||(8==c||0>=d?p8(3):p8(2));x8(this);var e=this.j.getStatus();this.Nb=e;b:if(xbb(this)){var f=g.Gi(this.j);a="";var h=f.length,l=4==g.Di(this.j);if(!this.u.B){if("undefined"===typeof TextDecoder){v8(this);w8(this);var m="";break b}this.u.B=new g.C.TextDecoder}for(c=0;c<h;c++)this.u.u=!0,a+=this.u.B.decode(f[c],{stream:l&&
c==h-1});f.splice(0,h);this.u.j+=a;this.W=0;m=this.u.j}else m=g.Fi(this.j);if(this.B=200==e){if(this.pc&&!this.Sa){b:{if(this.j){var n=g.Hi(this.j,"X-HTTP-Initial-Response");if(n&&!g.eb(n)){var p=n;break b}}p=null}if(e=p)this.Sa=!0,Abb(this,e);else{this.B=!1;this.I=3;q8(12);v8(this);w8(this);break a}}this.va?(Bbb(this,b,m),g.jG&&this.B&&3==b&&(this.eb.Na(this.gb,"tick",this.CU),this.gb.start())):Abb(this,m);4==b&&v8(this);this.B&&!this.Ea&&(4==b?Dbb(this.D,this):(this.B=!1,t8(this)))}else 400==e&&
0<m.indexOf("Unknown SID")?(this.I=3,q8(12)):(this.I=0,q8(13)),v8(this),w8(this)}}}catch(q){}finally{}};
g.k.CU=function(){if(this.j){var a=g.Di(this.j),b=g.Fi(this.j);this.W<b.length&&(x8(this),Bbb(this,a,b),this.B&&4!=a&&t8(this))}};
g.k.cancel=function(){this.Ea=!0;v8(this)};
g.k.BU=function(){this.V=null;var a=Date.now();0<=a-this.Eb?(2!=this.Ka&&(p8(3),q8(17)),v8(this),this.I=2,w8(this)):Cbb(this,this.Eb-a)};
g.k.getLastError=function(){return this.I};Mbb.prototype.cancel=function(){this.B=Obb(this);if(this.u)this.u.cancel(),this.u=null;else if(this.j&&0!==this.j.size){for(var a=g.r(this.j.values()),b=a.next();!b.done;b=a.next())b.value.cancel();this.j.clear()}};g.k=Sbb.prototype;g.k.NL=8;g.k.qg=1;g.k.connect=function(a,b,c,d){this.oi&&g.Eh((0,g.Sa)(this.P3,this,a));q8(0);this.Cc=a;this.Ea=b||{};c&&void 0!==d&&(this.Ea.OSID=c,this.Ea.OAID=d);this.gb=this.Kc;this.Ha=Ibb(this,null,this.Cc);B8(this)};
g.k.disconnect=function(){Ubb(this);if(3==this.qg){var a=this.Ua++,b=this.Ha.clone();g.Lj(b,"SID",this.C);g.Lj(b,"RID",a);g.Lj(b,"TYPE","terminate");E8(this,b);a=new s8(this,this.C,a);a.Ka=2;a.J=Y7(b.clone());b=!1;g.C.navigator&&g.C.navigator.sendBeacon&&(b=g.C.navigator.sendBeacon(a.J.toString(),""));!b&&g.C.Image&&((new Image).src=a.J,b=!0);b||(a.j=wbb(a.D,null),a.j.send(a.J));a.ra=Date.now();t8(a)}$bb(this)};
g.k.P3=function(a){try{mbb(a,function(){})}catch(b){}};
g.k.Of=function(){return 0==this.qg};
g.k.getState=function(){return this.qg};
g.k.PL=function(a){if(this.I)if(this.I=null,1==this.qg){if(!a){this.Ua=Math.floor(1E5*Math.random());a=this.Ua++;var b=new s8(this,"",a),c=this.V;this.Eb&&(c?(c=g.Ff(c),g.Hf(c,this.Eb)):c=this.Eb);null!==this.J||this.yb||(b.Ha=c,c=null);var d;if(this.ub)a:{for(var e=d=0;e<this.B.length;e++){b:{var f=this.B[e];if("__data__"in f.map&&(f=f.map.__data__,"string"===typeof f)){f=f.length;break b}f=void 0}if(void 0===f)break;d+=f;if(4096<d){d=e;break a}if(4096===d||e===this.B.length-1){d=e+1;break a}}d=
1E3}else d=1E3;d=Xbb(this,b,d);e=this.Ha.clone();g.Lj(e,"RID",a);g.Lj(e,"CVER",22);this.va&&g.Lj(e,"X-HTTP-Session-Id",this.va);E8(this,e);c&&(this.yb?d="headers="+g.Tg(g.fga(c))+"&"+d:this.J&&g.Pj(e,this.J,c));Hbb(this.u,b);this.sf&&g.Lj(e,"TYPE","init");this.ub?(g.Lj(e,"$req",d),g.Lj(e,"SID","null"),b.pc=!0,vbb(b,e,null)):vbb(b,e,d);this.qg=2}}else 3==this.qg&&(a?Ybb(this,a):0==this.B.length||Nbb(this.u)||Ybb(this))};
g.k.OL=function(){this.N=null;Zbb(this);if(this.Qc&&!(this.eb||null==this.j||0>=this.kd)){var a=2*this.kd;this.qa=r8((0,g.Sa)(this.d0,this),a)}};
g.k.d0=function(){this.qa&&(this.qa=null,this.gb=!1,this.eb=!0,q8(10),z8(this),Zbb(this))};
g.k.iJ=function(a){this.j==a&&this.Qc&&!this.eb&&(Tbb(this),this.eb=!0,q8(11))};
g.k.EU=function(){null!=this.W&&(this.W=null,z8(this),Fbb(this),q8(19))};
g.k.S4=function(a){a?q8(2):q8(1)};
g.k.isActive=function(){return!!this.D&&this.D.isActive(this)};
g.k=bcb.prototype;g.k.TL=function(){};
g.k.SL=function(){};
g.k.RL=function(){};
g.k.QL=function(){};
g.k.isActive=function(){return!0};
g.k.FU=function(){};g.Xa(G8,g.Tf);G8.prototype.open=function(){this.j.D=this.C;this.J&&(this.j.Ka=!0);this.j.connect(this.I,this.u||void 0)};
G8.prototype.close=function(){this.j.disconnect()};
G8.prototype.send=function(a){var b=this.j;if("string"===typeof a){var c={};c.__data__=a;a=c}else this.D&&(c={},c.__data__=g.fi(a),a=c);b.B.push(new Lbb(b.Pe++,a));3==b.qg&&B8(b)};
G8.prototype.ea=function(){this.j.D=null;delete this.C;this.j.disconnect();delete this.j;G8.Ke.ea.call(this)};
g.Xa(dcb,hbb);g.Xa(ecb,ibb);g.Xa(F8,bcb);F8.prototype.TL=function(){this.j.dispatchEvent("m")};
F8.prototype.SL=function(a){this.j.dispatchEvent(new dcb(a))};
F8.prototype.RL=function(a){this.j.dispatchEvent(new ecb(a))};
F8.prototype.QL=function(){this.j.dispatchEvent("n")};var I8=new g.Tf;g.u(hcb,g.hf);g.k=K8.prototype;g.k.Qq=null;g.k.jn=!1;g.k.uu=null;g.k.nF=null;g.k.ou=null;g.k.pu=null;g.k.Vo=null;g.k.Xo=null;g.k.Rq=null;g.k.Eh=null;g.k.XA=0;g.k.xl=null;g.k.WA=null;g.k.Wo=null;g.k.bx=-1;g.k.nS=!0;g.k.Pq=!1;g.k.mF=0;g.k.VA=null;var mcb={},lcb={};g.k=K8.prototype;g.k.setTimeout=function(a){this.u=a};
g.k.HU=function(a){a=a.target;var b=this.VA;b&&3==g.Di(a)?b.lF():this.UL(a)};
g.k.UL=function(a){try{if(a==this.Eh)a:{var b=g.Di(this.Eh),c=this.Eh.u,d=this.Eh.getStatus();if(g.Cc&&!g.zc(10)||g.kf&&!g.yc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.Fi(this.Eh))break a;this.Pq||4!=b||7==c||(8==c||0>=d?this.j.dl(3):this.j.dl(2));rcb(this);var e=this.Eh.getStatus();this.bx=e;var f=g.Fi(this.Eh);if(this.jn=200==e){4==b&&M8(this);if(this.va){for(a=!0;!this.Pq&&this.XA<f.length;){var h=ncb(this,f);if(h==lcb){4==b&&(this.Wo=4,J8(15),a=!1);break}else if(h==mcb){this.Wo=4;J8(16);a=
!1;break}else scb(this,h)}4==b&&0==f.length&&(this.Wo=1,J8(17),a=!1);this.jn=this.jn&&a;a||(M8(this),N8(this))}else scb(this,f);this.jn&&!this.Pq&&(4==b?this.j.YA(this):(this.jn=!1,L8(this)))}else 400==e&&0<f.indexOf("Unknown SID")?(this.Wo=3,J8(13)):(this.Wo=0,J8(14)),M8(this),N8(this)}}catch(l){}finally{}};
g.k.H2=function(a){H8((0,g.Sa)(this.G2,this,a),0)};
g.k.G2=function(a){this.Pq||(rcb(this),scb(this,a),L8(this))};
g.k.pR=function(a){H8((0,g.Sa)(this.F2,this,a),0)};
g.k.F2=function(a){this.Pq||(M8(this),this.jn=a,this.j.YA(this),this.j.dl(4))};
g.k.cancel=function(){this.Pq=!0;M8(this)};
g.k.GU=function(){this.uu=null;var a=Date.now();0<=a-this.nF?(2!=this.pu&&this.j.dl(3),M8(this),this.Wo=2,J8(18),N8(this)):qcb(this,this.nF-a)};
g.k.getLastError=function(){return this.Wo};g.k=vcb.prototype;g.k.pF=null;g.k.gi=null;g.k.TD=!1;g.k.AS=null;g.k.cC=null;g.k.xI=null;g.k.qF=null;g.k.Fj=null;g.k.pn=-1;g.k.ex=null;g.k.Rx=null;g.k.connect=function(a){this.qF=a;a=Q8(this.j,null,this.qF);J8(3);this.AS=Date.now();var b=this.j.N;null!=b?(this.ex=b[0],(this.Rx=b[1])?(this.Fj=1,wcb(this)):(this.Fj=2,xcb(this))):(Z7(a,"MODE","init"),this.gi=new K8(this),this.gi.Qq=this.pF,kcb(this.gi,a,!1,null,!0),this.Fj=0)};
g.k.nX=function(a){if(a)this.Fj=2,xcb(this);else{J8(4);var b=this.j;b.Nl=b.tp.pn;U8(b,9)}a&&this.dl(2)};
g.k.oF=function(a){return this.j.oF(a)};
g.k.abort=function(){this.gi&&(this.gi.cancel(),this.gi=null);this.pn=-1};
g.k.Of=function(){return!1};
g.k.VL=function(a,b){this.pn=a.bx;if(0==this.Fj)if(b){try{var c=this.u.parse(b)}catch(d){a=this.j;a.Nl=this.pn;U8(a,2);return}this.ex=c[0];this.Rx=c[1]}else a=this.j,a.Nl=this.pn,U8(a,2);else if(2==this.Fj)if(this.TD)J8(7),this.xI=Date.now();else if("11111"==b){if(J8(6),this.TD=!0,this.cC=Date.now(),a=this.cC-this.AS,!g.Cc||g.zc(10)||500>a)this.pn=200,this.gi.cancel(),J8(12),R8(this.j,this,!0)}else J8(8),this.cC=this.xI=Date.now(),this.TD=!1};
g.k.YA=function(){this.pn=this.gi.bx;if(this.gi.jn)0==this.Fj?this.Rx?(this.Fj=1,wcb(this)):(this.Fj=2,xcb(this)):2==this.Fj&&((!g.Cc||g.zc(10)?!this.TD:200>this.xI-this.cC)?(J8(11),R8(this.j,this,!1)):(J8(12),R8(this.j,this,!0)));else{0==this.Fj?J8(9):2==this.Fj&&J8(10);var a=this.j;this.gi.getLastError();a.Nl=this.pn;U8(a,2)}};
g.k.gx=function(){return this.j.gx()};
g.k.isActive=function(){return this.j.isActive()};
g.k.dl=function(a){this.j.dl(a)};g.k=ycb.prototype;g.k.Ml=null;g.k.hx=null;g.k.Gi=null;g.k.Af=null;g.k.rF=null;g.k.ZA=null;g.k.WL=null;g.k.aB=null;g.k.ix=0;g.k.JU=0;g.k.ih=null;g.k.Yo=null;g.k.qn=null;g.k.Tq=null;g.k.tp=null;g.k.IE=null;g.k.xu=-1;g.k.XL=-1;g.k.Nl=-1;g.k.wu=0;g.k.vu=0;g.k.Sq=8;g.Xa(Acb,g.hf);g.Xa(Bcb,g.hf);g.k=ycb.prototype;g.k.connect=function(a,b,c,d,e){J8(0);this.rF=b;this.hx=c||{};d&&void 0!==e&&(this.hx.OSID=d,this.hx.OAID=e);this.J?(H8((0,g.Sa)(this.bO,this,a),100),Dcb(this)):this.bO(a)};
g.k.disconnect=function(){Ecb(this);if(3==this.j){var a=this.ix++,b=this.ZA.clone();g.Lj(b,"SID",this.C);g.Lj(b,"RID",a);g.Lj(b,"TYPE","terminate");T8(this,b);a=new K8(this,this.C,a);a.pu=2;a.Vo=Y7(b.clone());(new Image).src=a.Vo.toString();a.ou=Date.now();L8(a)}Ocb(this)};
g.k.bO=function(a){this.tp=new vcb(this);this.tp.pF=this.Ml;this.tp.u=this.D;this.tp.connect(a)};
g.k.Of=function(){return 0==this.j};
g.k.getState=function(){return this.j};
g.k.ZL=function(a){this.Yo=null;Jcb(this,a)};
g.k.YL=function(){this.qn=null;this.Af=new K8(this,this.C,"rpc",this.I);this.Af.Qq=this.Ml;this.Af.mF=0;var a=this.WL.clone();g.Lj(a,"RID","rpc");g.Lj(a,"SID",this.C);g.Lj(a,"CI",this.IE?"0":"1");g.Lj(a,"AID",this.xu);T8(this,a);if(!g.Cc||g.zc(10))g.Lj(a,"TYPE","xmlhttp"),kcb(this.Af,a,!0,this.aB,!1);else{g.Lj(a,"TYPE","html");var b=this.Af,c=!!this.aB;b.pu=3;b.Vo=Y7(a.clone());pcb(b,c)}};
g.k.VL=function(a,b){if(0!=this.j&&(this.Af==a||this.Gi==a))if(this.Nl=a.bx,this.Gi==a&&3==this.j)if(7<this.Sq){try{var c=this.D.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.qn){if(this.Af)if(this.Af.ou+3E3<this.Gi.ou)S8(this),this.Af.cancel(),this.Af=null;else break a;Mcb(this);J8(19)}}else this.XL=a[1],0<this.XL-this.xu&&37500>a[2]&&this.IE&&0==this.vu&&!this.Tq&&(this.Tq=H8((0,g.Sa)(this.KU,this),6E3));else U8(this,11)}else null!=b&&U8(this,11);else if(this.Af==
a&&S8(this),!g.eb(b))for(a=this.D.parse(b),b=0;b<a.length;b++)c=a[b],this.xu=c[0],c=c[1],2==this.j?"c"==c[0]?(this.C=c[1],this.aB=c[2],c=c[3],null!=c?this.Sq=c:this.Sq=6,this.j=3,this.ih&&this.ih.cM(),this.WL=Q8(this,this.gx()?this.aB:null,this.rF),Kcb(this)):"stop"==c[0]&&U8(this,7):3==this.j&&("stop"==c[0]?U8(this,7):"noop"!=c[0]&&this.ih&&this.ih.bM(c),this.vu=0)};
g.k.KU=function(){null!=this.Tq&&(this.Tq=null,this.Af.cancel(),this.Af=null,Mcb(this),J8(20))};
g.k.YA=function(a){if(this.Af==a){S8(this);this.Af=null;var b=2}else if(this.Gi==a)this.Gi=null,b=1;else return;this.Nl=a.bx;if(0!=this.j)if(a.jn)if(1==b){b=Date.now()-a.ou;var c=I8;c.dispatchEvent(new Acb(c,a.Rq?a.Rq.length:0,b,this.wu));Ccb(this);this.B.length=0}else Kcb(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.Nl)){if(d=1==b)this.Gi||this.Yo||1==this.j||2<=this.wu?d=!1:(this.Yo=H8((0,g.Sa)(this.ZL,this,a),Lcb(this,this.wu)),this.wu++,d=!0);d=!(d||2==b&&Mcb(this))}if(d)switch(c){case 1:U8(this,
5);break;case 4:U8(this,10);break;case 3:U8(this,6);break;case 7:U8(this,12);break;default:U8(this,2)}}};
g.k.IU=function(a){if(!g.Wb(arguments,this.j))throw Error("Unexpected channel state: "+this.j);};
g.k.R4=function(a){a?J8(2):(J8(1),Ncb(this,8))};
g.k.oF=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.Ai;a.J=!1;return a};
g.k.isActive=function(){return!!this.ih&&this.ih.isActive(this)};
g.k.dl=function(a){var b=I8;b.dispatchEvent(new Bcb(b,a))};
g.k.gx=function(){return!(!g.Cc||g.zc(10))};
g.k=Pcb.prototype;g.k.cM=function(){};
g.k.bM=function(){};
g.k.aM=function(){};
g.k.sF=function(){};
g.k.dM=function(){return{}};
g.k.isActive=function(){return!0};g.k=Qcb.prototype;g.k.enqueue=function(a){this.u.push(a)};
g.k.isEmpty=function(){return 0===this.j.length&&0===this.u.length};
g.k.clear=function(){this.j=[];this.u=[]};
g.k.contains=function(a){return g.Wb(this.j,a)||g.Wb(this.u,a)};
g.k.remove=function(a){var b=this.j;var c=(0,g.tXa)(b,a);0<=c?(g.Yb(b,c),b=!0):b=!1;return b||g.Zb(this.u,a)};
g.k.Qj=function(){for(var a=[],b=this.j.length-1;0<=b;--b)a.push(this.j[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};Rcb.prototype.flush=function(a,b){a=void 0===a?[]:a;b=void 0===b?!1:b;if(g.T("enable_client_streamz_web")){a=g.r(a);for(var c=a.next();!c.done;c=a.next())c=g.nea(c.value),c={serializedIncrementBatch:g.Ac(g.Ue(c,wfb))},g.Dv("streamzIncremented",c,{mK:b})}};var V8;g.u(Scb,g.hf);g.u(Tcb,g.hf);g.Xa(W8,g.K);g.k=W8.prototype;g.k.z2=function(){this.qh=Math.min(3E5,2*this.qh);this.B();this.u&&this.start()};
g.k.start=function(){var a=this.qh+15E3*Math.random();g.Wn(this.j,a);this.u=Date.now()+a};
g.k.stop=function(){this.j.stop();this.u=0};
g.k.isActive=function(){return this.j.isActive()};
g.k.reset=function(){this.j.stop();this.qh=5E3};g.Xa(Vcb,Pcb);g.k=Vcb.prototype;g.k.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.k.Ig=function(a){return this.B.Ig(a)};
g.k.X=function(a,b){return this.B.X.apply(this.B,arguments)};
g.k.dispose=function(){this.W||(this.W=!0,g.df(this.B),this.disconnect(),g.df(this.u),this.u=null,this.Y=function(){return""})};
g.k.isDisposed=function(){return this.W};
g.k.connect=function(a,b,c){if(!this.j||2!=this.j.getState()){this.V="";this.u.stop();this.I=a||null;this.D=b||0;a=this.ra+"/test";b=this.ra+"/bind";var d=new ycb(c?c.firstTestResults:null,c?c.secondTestResults:null,this.Ka),e=this.j;e&&(e.ih=null);d.ih=this;this.j=d;Wcb(this);if(this.j){d=g.Q("ID_TOKEN");var f=this.j.Ml||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.j.Ml=f}e?(3!=e.getState()&&0==Gcb(e)||e.getState(),this.j.connect(a,b,this.J,e.C,e.xu)):c?this.j.connect(a,
b,this.J,c.sessionId,c.arrayId):this.j.connect(a,b,this.J)}};
g.k.disconnect=function(a){this.N=a||0;this.u.stop();Wcb(this);this.j&&(3==this.j.getState()&&Jcb(this.j),this.j.disconnect());this.N=0};
g.k.sendMessage=function(a,b){a={_sc:a};b&&g.Hf(a,b);this.u.isActive()||2==(this.j?this.j.getState():0)?this.C.push(a):this.Ev()&&(Wcb(this),Fcb(this.j,a))};
g.k.cM=function(){this.u.reset();this.I=null;this.D=0;if(this.C.length){var a=this.C;this.C=[];for(var b=0,c=a.length;b<c;++b)Fcb(this.j,a[b])}this.X("handlerOpened");Yab(this.Ha,"BROWSER_CHANNEL")};
g.k.aM=function(a){var b=2==a&&401==this.j.Nl;4==a||b||this.u.start();this.X("handlerError",a,b);dbb(this.va,"BROWSER_CHANNEL")};
g.k.sF=function(a,b){if(!this.u.isActive())this.X("handlerClosed");else if(b)for(var c=0,d=b.length;c<d;++c){var e=b[c].map;e&&this.C.push(e)}$ab(this.qa,"BROWSER_CHANNEL");a&&this.Ua.j.vF("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",a.length);b&&this.Xa.j.vF("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",b.length)};
g.k.dM=function(){var a={v:2};this.V&&(a.gsessionid=this.V);0!=this.D&&(a.ui=""+this.D);0!=this.N&&(a.ui=""+this.N);this.I&&g.Hf(a,this.I);return a};
g.k.bM=function(a){"S"==a[0]?this.V=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),this.j.disconnect()):this.X("handlerMessage",new Ucb(a[0],a[1]));bbb(this.Ea,"BROWSER_CHANNEL")};
g.k.Ev=function(){return!!this.j&&3==this.j.getState()};
g.k.Mo=function(a){(this.J.loungeIdToken=a)||this.u.stop();if(this.Sa&&this.j){var b=this.j.Ml||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.j.Ml=b}};
g.k.Hp=function(){return this.J.id};
g.k.Np=function(){return this.u.isActive()?this.u.u-Date.now():NaN};
g.k.ot=function(){var a=this.u;g.Xn(a.j);a.start()};
g.k.R3=function(){this.u.isActive();0==Gcb(this.j)&&this.connect(this.I,this.D)};X8.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
X8.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
X8.prototype.D=function(a){a(Error("request timed out"))};g.u(Ycb,g.Tf);g.k=Ycb.prototype;g.k.connect=function(a,b,c){this.Rc.connect(a,b,c)};
g.k.disconnect=function(a){this.Rc.disconnect(a)};
g.k.ot=function(){this.Rc.ot()};
g.k.Hp=function(){return this.Rc.Hp()};
g.k.Np=function(){return this.Rc.Np()};
g.k.Ev=function(){return this.Rc.Ev()};
g.k.NU=function(){this.dispatchEvent("channelOpened");var a=this.Rc,b=this.j;g.Gz("yt-remote-session-browser-channel",{firstTestResults:[""],secondTestResults:!a.j.IE,sessionId:a.j.C,arrayId:a.j.xu});g.Gz("yt-remote-session-screen-id",b);a=g8();b=h8();g.Wb(a,b)||a.push(b);Bab(a);Dab()};
g.k.LU=function(){this.dispatchEvent("channelClosed")};
g.k.MU=function(a){this.dispatchEvent(new Scb(a))};
g.k.onError=function(a){this.dispatchEvent(new Tcb(a?1:0))};
g.k.sendMessage=function(a,b){this.Rc.sendMessage(a,b)};
g.k.Mo=function(a){this.Rc.Mo(a)};
g.k.dispose=function(){this.Rc.dispose()};g.k=Zcb.prototype;
g.k.connect=function(a,b){a=void 0===a?{}:a;b=void 0===b?0:b;2!==this.I&&(this.B.stop(),this.N=a,this.J=b,adb(this),(a=g.Q("ID_TOKEN"))?this.C["x-youtube-identity-token"]=a:delete this.C["x-youtube-identity-token"],this.j&&(this.u.device=this.j.device,this.u.name=this.j.name,this.u.app=this.j.app,this.u.id=this.j.id,this.j.WZ&&(this.u.mdxVersion=""+this.j.WZ),this.j.theme&&(this.u.theme=this.j.theme),this.j.capabilities&&(this.u.capabilities=this.j.capabilities)),0!==this.J?this.u.ui=""+this.J:delete this.u.ui,
Object.assign(this.u,this.N),this.channel=new G8(this.pathPrefix,{kZ:"gsessionid",ZZ:this.C,a_:this.u}),this.channel.open(),this.I=2,$cb(this))};
g.k.disconnect=function(a){this.V=void 0===a?0:a;this.B.stop();adb(this);this.channel&&(0!==this.V?this.u.ui=""+this.V:delete this.u.ui,this.channel.close());this.V=0};
g.k.Np=function(){return this.B.isActive()?this.B.u-Date.now():NaN};
g.k.ot=function(){var a=this.B;g.Xn(a.j);a.start()};
g.k.sendMessage=function(a,b){this.channel&&(adb(this),a=Object.assign({},{_sc:a},b),this.channel.send(a))};
g.k.Mo=function(a){a||this.B.stop();a?this.C["X-YouTube-LoungeId-Token"]=a:delete this.C["X-YouTube-LoungeId-Token"]};
g.k.Hp=function(){return this.j?this.j.id:""};
g.k.X=function(a){return this.D.X.apply(this.D,[a].concat(g.t(g.Aa.apply(1,arguments))))};
g.k.subscribe=function(a,b,c){return this.D.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.D.unsubscribe(a,b,c)};
g.k.Ig=function(a){return this.D.Ig(a)};
g.k.dispose=function(){this.W||(this.W=!0,g.df(this.D),this.disconnect(),g.df(this.B),this.ra=function(){return""})};
g.k.isDisposed=function(){return this.W};g.u(bdb,g.Tf);g.k=bdb.prototype;g.k.connect=function(a,b){this.j.connect(a,b)};
g.k.disconnect=function(a){this.j.disconnect(a)};
g.k.ot=function(){this.j.ot()};
g.k.Hp=function(){return this.j.Hp()};
g.k.Np=function(){return this.j.Np()};
g.k.Ev=function(){return 3===this.j.I};
g.k.QU=function(){this.dispatchEvent("channelOpened")};
g.k.OU=function(){this.dispatchEvent("channelClosed")};
g.k.PU=function(a){this.dispatchEvent(new Scb(a))};
g.k.onError=function(){this.dispatchEvent(new Tcb(401===this.j.Dg?1:0))};
g.k.sendMessage=function(a,b){this.j.sendMessage(a,b)};
g.k.Mo=function(a){this.j.Mo(a)};
g.k.dispose=function(){this.j.dispose()};var jdb=Date.now(),Z8=null,c9=Array(50),b9=-1,d9=!1;g.Xa(e9,g.Uy);e9.prototype.hj=function(){return this.screens};
e9.prototype.contains=function(a){return!!yab(this.screens,a)};
e9.prototype.get=function(a){return a?f8(this.screens,a):null};
e9.prototype.info=function(a){$8(this.I,a)};g.u(ndb,g.Uy);g.k=ndb.prototype;g.k.start=function(){!this.j&&isNaN(this.qc)&&this.ER()};
g.k.stop=function(){this.j&&(this.j.abort(),this.j=null);isNaN(this.qc)||(g.ru(this.qc),this.qc=NaN)};
g.k.ea=function(){this.stop();g.Uy.prototype.ea.call(this)};
g.k.ER=function(){this.qc=NaN;this.j=g.vu(Y8(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.J},timeout:5E3,onSuccess:(0,g.Sa)(this.SU,this),onError:(0,g.Sa)(this.RU,this),onTimeout:(0,g.Sa)(this.TU,this)})};
g.k.SU=function(a,b){this.j=null;a=b.screen||{};a.dialId=this.C;a.name=this.I;b=-1;this.D&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.X("pairingComplete",new c8(a),b)};
g.k.RU=function(a){this.j=null;a.status&&404==a.status?this.u>=xfb.length?this.X("pairingFailed",Error("DIAL polling timed out")):(a=xfb[this.u],this.qc=g.pu((0,g.Sa)(this.ER,this),a),this.u++):this.X("pairingFailed",Error("Server error "+a.status))};
g.k.TU=function(){this.j=null;this.X("pairingFailed",Error("Server not responding"))};
var xfb=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Xa(g9,e9);g.k=g9.prototype;g.k.start=function(){f9(this)&&this.X("screenChange");!g.Hz("yt-remote-lounge-token-expiration")&&odb(this);g.ru(this.j);this.j=g.pu((0,g.Sa)(this.start,this),1E4)};
g.k.add=function(a,b){f9(this);kdb(this,a);h9(this,!1);this.X("screenChange");b(a);a.token||odb(this)};
g.k.remove=function(a,b){var c=f9(this);mdb(this,a)&&(h9(this,!1),c=!0);b(a);c&&this.X("screenChange")};
g.k.GE=function(a,b,c,d){var e=f9(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,h9(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.X("screenChange")};
g.k.ea=function(){g.ru(this.j);g9.Ke.ea.call(this)};
g.k.JY=function(a){f9(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}h9(this,!b);b&&$8(this.I,"Missed "+b+" lounge tokens.")};
g.k.IY=function(a){$8(this.I,"Requesting lounge tokens failed: "+a)};g.u(qdb,g.Uy);g.k=qdb.prototype;g.k.start=function(){var a=parseInt(g.Hz("yt-remote-fast-check-period")||"0",10);(this.C=g.Ua()-144E5<a?0:a)?i9(this):(this.C=g.Ua()+3E5,g.Gz("yt-remote-fast-check-period",this.C),this.YJ())};
g.k.isEmpty=function(){return g.Bf(this.j)};
g.k.update=function(){pdb("Updating availability on schedule.");var a=this.I(),b=g.pf(this.j,function(c,d){return c&&!!f8(a,d)},this);
tdb(this,b)};
g.k.ea=function(){g.ru(this.B);this.B=NaN;this.u&&(this.u.abort(),this.u=null);g.Uy.prototype.ea.call(this)};
g.k.YJ=function(){g.ru(this.B);this.B=NaN;this.u&&this.u.abort();var a=udb(this);if(lab(a)){var b=Y8(this.D,"/pairing/get_screen_availability");this.u=Xcb(this.D,b,{lounge_token:g.xf(a).join(",")},(0,g.Sa)(this.X1,this,a),(0,g.Sa)(this.W1,this))}else tdb(this,{}),i9(this)};
g.k.X1=function(a,b){this.u=null;var c=g.xf(udb(this));if(g.pc(c,g.xf(a))){b=b.screens||[];c={};for(var d=0,e=b.length;d<e;++d)c[a[b[d].loungeToken]]="online"==b[d].status;tdb(this,c);i9(this)}else this.Ze("Changing Screen set during request."),this.YJ()};
g.k.W1=function(a){this.Ze("Screen availability failed: "+a);this.u=null;i9(this)};
g.k.Ze=function(a){$8("OnlineScreenService",a)};g.Xa(j9,e9);g.k=j9.prototype;g.k.start=function(){this.u.start();this.j.start();this.screens.length&&(this.X("screenChange"),this.j.isEmpty()||this.X("onlineScreenChange"))};
g.k.add=function(a,b,c){this.u.add(a,b,c)};
g.k.remove=function(a,b,c){this.u.remove(a,b,c);this.j.update()};
g.k.GE=function(a,b,c,d){this.u.contains(a)?this.u.GE(a,b,c,d):(a="Updating name of unknown screen: "+a.name,$8(this.I,a),d(Error(a)))};
g.k.hj=function(a){return a?this.screens:g.ac(this.screens,g.wm(this.B,function(b){return!this.contains(b)},this))};
g.k.fM=function(){return g.wm(this.hj(!0),function(a){return!!this.j.j[a.id]},this)};
g.k.gM=function(a,b,c,d,e,f){var h=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new ndb(this.C,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.df(l);e(k9(h,m),n)});
l.subscribe("pairingFailed",function(m){g.df(l);f(m)});
l.start();return(0,g.Sa)(l.stop,l)};
g.k.UU=function(a,b,c,d){g.vu(Y8(this.C,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.Sa)(function(e,f){e=new c8(f.screen||{});if(!e.name||ydb(this,e.name)){a:{f=e.name;for(var h=2,l=b(f,h);ydb(this,l);){h++;if(20<h)break a;l=b(f,h)}f=l}e.name=f}c(k9(this,e))},this),
onError:(0,g.Sa)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.Sa)(function(){d(Error("pairing request timed out."))},this)})};
g.k.ea=function(){g.df(this.u);g.df(this.j);j9.Ke.ea.call(this)};
g.k.TY=function(){Adb(this);this.X("screenChange");this.j.update()};
j9.prototype.dispose=j9.prototype.dispose;g.Xa(l9,g.Uy);g.k=l9.prototype;g.k.getScreen=function(){return this.C};
g.k.Sh=function(a){this.isDisposed()||(a&&(n9(this,""+a),this.X("sessionFailed")),this.C=null,this.X("sessionScreen",null))};
g.k.info=function(a){$8(this.va,a)};
g.k.hM=function(){return null};
g.k.qK=function(a){var b=this.j;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.Sa)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.Sa)(function(){n9(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.ea=function(){this.qK("");l9.Ke.ea.call(this)};g.u(o9,l9);g.k=o9.prototype;g.k.pK=function(a){if(this.u){if(this.u==a)return;n9(this,"Overriding cast session with new session object");Mdb(this);this.ra=!1;this.V="unknown";this.u.removeUpdateListener(this.Y);this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.qa)}this.u=a;this.u.addUpdateListener(this.Y);this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.qa);Hdb(this,"getMdxSessionStatus")};
g.k.Mv=function(a){this.info("launchWithParams no-op for Cast: "+g.fi(a))};
g.k.stop=function(){this.u?this.u.stop((0,g.Sa)(function(){this.Sh()},this),(0,g.Sa)(function(){this.Sh(Error("Failed to stop receiver app."))},this)):this.Sh(Error("Stopping cast device without session."))};
g.k.qK=function(){};
g.k.ea=function(){this.info("disposeInternal");Mdb(this);this.u&&(this.u.removeUpdateListener(this.Y),this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.qa));this.u=null;l9.prototype.ea.call(this)};
g.k.R2=function(a,b){if(!this.isDisposed())if(b)if(b=$7(b),g.Pa(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.fi(b)),a){case "mdxSessionStatus":Edb(this,b);break;case "loungeToken":Idb(this,b);break;default:n9(this,"Unknown youtube message: "+a)}else n9(this,"Unable to parse message.");else n9(this,"No data in message.")};
g.k.UO=function(a,b,c,d){g.ru(this.N);this.N=0;xdb(this.B,this.j.label,a,this.j.friendlyName,(0,g.Sa)(function(e){e?b(e):0<=d?(n9(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.N=g.pu((0,g.Sa)(this.UO,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.hM=function(){return this.u};
g.k.VU=function(a){this.isDisposed()||a||(n9(this,"Cast session died."),this.Sh())};g.u(p9,l9);g.k=p9.prototype;g.k.pK=function(a){this.u=a;this.u.addUpdateListener(this.Ea)};
g.k.Mv=function(a){this.Ha=a;this.W()};
g.k.stop=function(){Udb(this);this.u?this.u.stop((0,g.Sa)(this.Sh,this,null),(0,g.Sa)(this.Sh,this,"Failed to stop DIAL device.")):this.Sh()};
g.k.ea=function(){Udb(this);this.u&&this.u.removeUpdateListener(this.Ea);this.u=null;l9.prototype.ea.call(this)};
g.k.WU=function(a){this.isDisposed()||a||(n9(this,"DIAL session died."),this.D(),this.D=function(){},this.Sh())};g.u(s9,l9);s9.prototype.stop=function(){this.Sh()};
s9.prototype.pK=function(){};
s9.prototype.Mv=function(){g.ru(this.u);this.u=NaN;var a=f8(this.B.hj(),this.j.label);a?m9(this,a):this.Sh(Error("No such screen"))};
s9.prototype.ea=function(){g.ru(this.u);this.u=NaN;l9.prototype.ea.call(this)};g.u(t9,g.Uy);g.k=t9.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.N,[chrome.cast.Capability.AUDIO_OUT]);this.V||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.I?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.Sa)(this.I1,this);c=new chrome.cast.ApiConfig(c,(0,g.Sa)(this.lR,this),e,d,a);c.customDialLaunchCallback=(0,g.Sa)(this.w0,this);
chrome.cast.initialize(c,(0,g.Sa)(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.D),gdb(),this.u.subscribe("onlineScreenChange",(0,g.Sa)(this.iM,this)),this.B=Xdb(this),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Sa)(function(f){this.Ze("Failed to set initial custom receivers: "+g.fi(f))},this)),this.X("yt-remote-cast2-availability-change",v9(this)),b(!0))},this),(0,g.Sa)(function(f){this.Ze("Failed to initialize API: "+g.fi(f));
b(!1)},this))};
g.k.b4=function(a,b){u9("Setting connected screen ID: "+a+" -> "+b);if(this.j){var c=this.j.getScreen();if(!a||c&&c.id!=a)u9("Unsetting old screen status: "+this.j.j.friendlyName),w9(this,null)}if(a&&b){if(!this.j){c=f8(this.u.hj(),a);if(!c){u9("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){u9("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=Vdb(this,c);a||(u9("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.B.push(a),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Sa)(function(d){this.Ze("Failed to set initial custom receivers: "+g.fi(d))},this)));
u9("setConnectedScreenStatus: new active receiver: "+a.friendlyName);w9(this,new s9(this.u,a),!0)}this.j.qK(b)}else u9("setConnectedScreenStatus: no screen.")};
g.k.d4=function(a){this.isDisposed()?this.Ze("Setting connection data on disposed cast v2"):this.j?this.j.Mv(a):this.Ze("Setting connection data without a session")};
g.k.YU=function(){this.isDisposed()?this.Ze("Stopping session on disposed cast v2"):this.j?(this.j.stop(),w9(this,null)):u9("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.Sa)(this.lR,this),(0,g.Sa)(this.b2,this))};
g.k.ea=function(){this.u.unsubscribe("onlineScreenChange",(0,g.Sa)(this.iM,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.D);var a=ddb,b=g.Ha("yt.mdx.remote.debug.handlers_");g.Zb(b||[],a);g.df(this.j);g.Uy.prototype.ea.call(this)};
g.k.Ze=function(a){$8("Controller",a)};
g.k.nR=function(a,b){this.j==a&&(b||w9(this,null),this.X("yt-remote-cast2-session-change",b))};
g.k.F1=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),u9("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.j)if(this.j.j.label!=a.label)u9("onReceiverAction_: Stopping active receiver: "+this.j.j.friendlyName),this.j.stop();else{u9("onReceiverAction_: Casting to active receiver.");this.j.getScreen()&&this.X("yt-remote-cast2-session-change",this.j.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:w9(this,
new s9(this.u,a));break;case chrome.cast.ReceiverType.DIAL:w9(this,new p9(this.u,a,this.C,this.config_));break;case chrome.cast.ReceiverType.CAST:w9(this,new o9(this.u,a,this.config_));break;default:this.Ze("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.j&&this.j.j.label==a.label?this.j.stop():this.Ze("Stopping receiver w/o session: "+a.friendlyName)}else this.Ze("onReceiverAction_ called without receiver.")};
g.k.w0=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.Ze("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.j?this.j.j:null;if(!c||c.label!=b.label)return this.Ze("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.j.getScreen())return u9("Reselecting dial screen."),
this.X("yt-remote-cast2-session-change",this.j.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.Ze('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);w9(this,new p9(this.u,b,this.C,this.config_))}b=this.j;b.N=a;b.N.appState==chrome.cast.DialAppState.RUNNING?(a=b.N.extraData||{},c=a.screenId||null,q9(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=Rdb(b,{name:b.j.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.N.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.$t(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=Sdb(b,c)):a=Sdb(b,c)):a=Pdb(b);return a};
g.k.lR=function(a){var b=this;if(!this.isDisposed()&&!this.I){u9("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.j)if(c.receiverType==chrome.cast.ReceiverType.CAST)u9("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),w9(this,new o9(this.u,c,this.config_),!0);else{this.Ze("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.j.j,e=f8(this.u.hj(),
d.label);e&&d8(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(u9("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.df(this.j),this.j=new o9(this.u,c,this.config_),this.j.subscribe("sessionScreen",(0,g.Sa)(this.nR,this,this.j)),this.j.subscribe("sessionFailed",function(){return Wdb(b,b.j)}),this.j.Mv(null));
this.j.pK(a)}}};
g.k.XU=function(){return this.j?this.j.hM():null};
g.k.b2=function(a){this.isDisposed()||(this.Ze("Failed to estabilish a session: "+g.fi(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&w9(this,null),this.X("yt-remote-cast2-session-failed"))};
g.k.I1=function(a){u9("Receiver availability updated: "+a);if(!this.isDisposed()){var b=v9(this);this.J=a==chrome.cast.ReceiverAvailability.AVAILABLE;v9(this)!=b&&this.X("yt-remote-cast2-availability-change",v9(this))}};
g.k.iM=function(){this.isDisposed()||(this.B=Xdb(this),u9("Updating custom receivers: "+g.fi(this.B)),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Sa)(function(){this.Ze("Failed to set custom receivers.")},this)),this.X("yt-remote-cast2-availability-change",v9(this)))};
t9.prototype.setLaunchParams=t9.prototype.d4;t9.prototype.setConnectedScreenStatus=t9.prototype.b4;t9.prototype.stopSession=t9.prototype.YU;t9.prototype.getCastSession=t9.prototype.XU;t9.prototype.requestSession=t9.prototype.requestSession;t9.prototype.init=t9.prototype.init;t9.prototype.dispose=t9.prototype.dispose;var feb=[];g.k=D9.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";leb(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.Am=a.hasPrevious,this.hasNext=a.hasNext,this.J=a.playerTime,this.I=a.playerTimeAt,this.C=a.seekableStart,this.j=a.seekableEnd,this.D=a.duration,this.N=a.loadedTime,this.B=a.liveIngestionTime,this.u=
!isNaN(this.B))};
g.k.Mc=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.wj=function(a){this.D=isNaN(a)?0:a};
g.k.getDuration=function(){return this.u?this.D+E9(this):this.D};
g.k.clone=function(){return new D9(meb(this))};g.u(J9,g.Uy);g.k=J9.prototype;g.k.getState=function(){return this.B};
g.k.Np=function(){return this.C.getReconnectTimeout()};
g.k.ot=function(){this.C.reconnect()};
g.k.play=function(){L9(this)?(this.j?this.j.play(null,g.Zf,P9(this,"play")):O9(this,"play"),peb(this,1,G9(K9(this))),this.X("remotePlayerChange")):M9(this,this.play)};
g.k.pause=function(){L9(this)?(this.j?this.j.pause(null,g.Zf,P9(this,"pause")):O9(this,"pause"),peb(this,2,G9(K9(this))),this.X("remotePlayerChange")):M9(this,this.pause)};
g.k.seekTo=function(a){if(L9(this)){if(this.j){var b=K9(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Mc()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.j.seek(c,g.Zf,P9(this,"seekTo",{newTime:a}))}else O9(this,"seekTo",{newTime:a});peb(this,3,a);this.X("remotePlayerChange")}else M9(this,g.Ta(this.seekTo,a))};
g.k.stop=function(){if(L9(this)){this.j?this.j.stop(null,g.Zf,P9(this,"stopVideo")):O9(this,"stopVideo");var a=K9(this);a.index=-1;a.videoId="";leb(a);N9(this,a);this.X("remotePlayerChange")}else M9(this,this.stop)};
g.k.setVolume=function(a,b){if(L9(this)){var c=K9(this);if(this.u){if(c.volume!=a){var d=Math.round(a)/100;this.u.setReceiverVolumeLevel(d,(0,g.Sa)(function(){a9("set receiver volume: "+d)},this),(0,g.Sa)(function(){this.Ze("failed to set receiver volume.")},this))}c.muted!=b&&this.u.setReceiverMuted(b,(0,g.Sa)(function(){a9("set receiver muted: "+b)},this),(0,g.Sa)(function(){this.Ze("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);O9(this,"setVolume",e)}c.muted=b;c.volume=a;N9(this,c)}else M9(this,g.Ta(this.setVolume,a,b))};
g.k.jM=function(a,b){if(L9(this)){var c=K9(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.fi(b.style),g.Hf(a,c.trackData));O9(this,"setSubtitlesTrack",a);N9(this,c)}else M9(this,g.Ta(this.jM,a,b))};
g.k.setAudioTrack=function(a,b){L9(this)?(b=b.getLanguageInfo().getId(),O9(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=K9(this),a.audioTrackId=b,N9(this,a)):M9(this,g.Ta(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;h=void 0===h?null:h;var l=K9(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);H9(l,a,c||0);void 0!==b&&(F9(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);h&&(m.locationInfo=g.fi(h));O9(this,"setPlaylist",m);d||N9(this,l)};
g.k.MD=function(a,b){if(L9(this)){if(a&&b){var c=K9(this);H9(c,a,b);N9(this,c)}O9(this,"previous")}else M9(this,g.Ta(this.MD,a,b))};
g.k.nextVideo=function(a,b){if(L9(this)){if(a&&b){var c=K9(this);H9(c,a,b);N9(this,c)}O9(this,"next")}else M9(this,g.Ta(this.nextVideo,a,b))};
g.k.Nu=function(){if(L9(this)){O9(this,"clearPlaylist");var a=K9(this);a.reset();N9(this,a);this.X("remotePlayerChange")}else M9(this,this.Nu)};
g.k.oO=function(){L9(this)?O9(this,"dismissAutoplay"):M9(this,this.oO)};
g.k.dispose=function(){if(3!=this.B){var a=this.B;this.B=3;this.X("proxyStateChange",a,this.B)}g.Uy.prototype.dispose.call(this)};
g.k.ea=function(){oeb(this);this.C=null;this.D.clear();I9(this,null);g.Uy.prototype.ea.call(this)};
g.k.sK=function(a){if((a!=this.B||2==a)&&3!=this.B&&0!=a){var b=this.B;this.B=a;this.X("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)b=a=this.D,0===b.j.length&&(b.j=b.u,b.j.reverse(),b.u=[]),a.j.pop().apply(this);else 3==a&&this.dispose()}};
g.k.D1=function(a,b){this.X(a,b)};
g.k.h0=function(a){if(!a)this.Hz(null),I9(this,null);else if(this.u.receiver.volume){a=this.u.receiver.volume;var b=K9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)a9("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,N9(this,b)}};
g.k.Hz=function(a){a9("Cast media: "+!!a);this.j&&this.j.removeUpdateListener(this.N);if(this.j=a)this.j.addUpdateListener(this.N),qeb(this),this.X("remotePlayerChange")};
g.k.g0=function(a){a?(qeb(this),this.X("remotePlayerChange")):this.Hz(null)};
g.k.QK=function(){O9(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.l0=function(){var a=ieb();a&&I9(this,a)};
g.k.Ze=function(a){$8("CP",a)};g.u(S9,g.Uy);g.k=S9.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.videoIds,f=b.playerParams,h=b.clickTrackingParams,l=b.index,m={videoId:d},n=b.currentTime,p=b.locationInfo;b=b.loopMode;void 0!==n&&(m.currentTime=5>=n?0:n);f&&(m.playerParams=f);p&&(m.locationInfo=p);h&&(m.clickTrackingParams=h);c&&(m.listId=c);e&&0<e.length&&(m.videoIds=e.join(","));void 0!==l&&(m.currentIndex=l);this.Ea&&(m.loopMode=b||"LOOP_MODE_OFF");c&&(this.j.listId=c);this.j.videoId=d;this.j.index=l||0;this.j.state=3;F9(this.j,
n);this.D="UNSUPPORTED";c=this.Ea?"setInitialState":"setPlaylist";Q9("Connecting with "+c+" and params: "+g.fi(m));this.u.connect({method:c,params:g.fi(m)},a,Eab())}else Q9("Connecting without params"),this.u.connect({},a,Eab());ueb(this)};
g.k.Mo=function(a){this.u.Mo(a)};
g.k.dispose=function(){this.isDisposed()||(g.Fa("yt.mdx.remote.remoteClient_",null),this.X("beforeDispose"),R9(this,3));g.Uy.prototype.dispose.call(this)};
g.k.ea=function(){veb(this);xeb(this);web(this);g.ru(this.N);this.N=NaN;g.ru(this.V);this.V=NaN;this.C=null;g.tx(this.W);this.W.length=0;this.u.dispose();g.Uy.prototype.ea.call(this);this.D=this.J=this.B=this.j=this.u=null};
g.k.FP=function(a){if(!this.B||0===this.B.length)return!1;for(var b=g.r(this.B),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.k.AY=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.Ly())?this.u.Ev()&&isNaN(this.I)&&(a=1):a=2);return a};
g.k.Wu=function(a){Q9("Disconnecting with "+a);g.Fa("yt.mdx.remote.remoteClient_",null);veb(this);this.X("beforeDisconnect",a);1==a&&i8();this.u.disconnect(a);this.dispose()};
g.k.yY=function(){var a=this.j;this.C&&(a=this.j.clone(),H9(a,this.C,a.index));return meb(a)};
g.k.e4=function(a){var b=this,c=new D9(a);c.videoId&&c.videoId!=this.j.videoId&&(this.C=c.videoId,g.ru(this.N),this.N=g.pu(function(){if(b.C){var e=b.C;b.C=null;b.j.videoId!=e&&T9(b,"getNowPlaying")}},5E3));
var d=[];this.j.listId==c.listId&&this.j.videoId==c.videoId&&this.j.index==c.index||d.push("remoteQueueChange");this.j.playerState==c.playerState&&this.j.volume==c.volume&&this.j.muted==c.muted&&G9(this.j)==G9(c)&&g.fi(this.j.trackData)==g.fi(c.trackData)||d.push("remotePlayerChange");this.j.reset(a);g.tc(d,function(e){this.X(e)},this)};
g.k.TO=function(){var a=this.u.Hp(),b=g.Ub(this.B,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.Ly=function(){return this.u.Np()};
g.k.vY=function(){return this.D||"UNSUPPORTED"};
g.k.wY=function(){return this.J||""};
g.k.ZU=function(){!isNaN(this.Ly())&&this.u.ot()};
g.k.a4=function(a,b){T9(this,a,b);zeb(this)};
g.k.kM=function(){var a=g.Fu("SID","")||"",b=g.Fu("SAPISID","")||"",c=g.Fu("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.Ac(g.bb(a),2);b=g.Ac(g.bb(b),2);c=g.Ac(g.bb(c),2);return g.Ac(g.bb(a+","+b+","+c),2)};
S9.prototype.subscribe=S9.prototype.subscribe;S9.prototype.unsubscribeByKey=S9.prototype.Ig;S9.prototype.getProxyState=S9.prototype.AY;S9.prototype.disconnect=S9.prototype.Wu;S9.prototype.getPlayerContextData=S9.prototype.yY;S9.prototype.setPlayerContextData=S9.prototype.e4;S9.prototype.getOtherConnectedRemoteId=S9.prototype.TO;S9.prototype.getReconnectTimeout=S9.prototype.Ly;S9.prototype.getAutoplayMode=S9.prototype.vY;S9.prototype.getAutoplayVideoId=S9.prototype.wY;S9.prototype.reconnect=S9.prototype.ZU;
S9.prototype.sendMessage=S9.prototype.a4;S9.prototype.getXsrfToken=S9.prototype.kM;S9.prototype.isCapabilitySupportedOnConnectedDevices=S9.prototype.FP;g.u(Leb,e9);g.k=Leb.prototype;g.k.hj=function(a){return this.Mf.$_gs(a)};
g.k.contains=function(a){return!!this.Mf.$_c(a)};
g.k.get=function(a){return this.Mf.$_g(a)};
g.k.start=function(){this.Mf.$_st()};
g.k.add=function(a,b,c){this.Mf.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.Mf.$_r(a,b,c)};
g.k.GE=function(a,b,c,d){this.Mf.$_un(a,b,c,d)};
g.k.ea=function(){for(var a=0,b=this.j.length;a<b;++a)this.Mf.$_ubk(this.j[a]);this.j.length=0;this.Mf=null;e9.prototype.ea.call(this)};
g.k.aV=function(){this.X("screenChange")};
g.k.f1=function(){this.X("onlineScreenChange")};
j9.prototype.$_st=j9.prototype.start;j9.prototype.$_gspc=j9.prototype.UU;j9.prototype.$_gsppc=j9.prototype.gM;j9.prototype.$_c=j9.prototype.contains;j9.prototype.$_g=j9.prototype.get;j9.prototype.$_a=j9.prototype.add;j9.prototype.$_un=j9.prototype.GE;j9.prototype.$_r=j9.prototype.remove;j9.prototype.$_gs=j9.prototype.hj;j9.prototype.$_gos=j9.prototype.fM;j9.prototype.$_s=j9.prototype.subscribe;j9.prototype.$_ubk=j9.prototype.Ig;var d$=null,g$=!1,U9=null,V9=null,Web=null,Z9=[];g.u($eb,g.K);g.k=$eb.prototype;g.k.ea=function(){g.K.prototype.ea.call(this);this.j.stop();this.B.stop();this.N.stop();var a=this.hc;a.unsubscribe("proxyStateChange",this.kR,this);a.unsubscribe("remotePlayerChange",this.Mz,this);a.unsubscribe("remoteQueueChange",this.xD,this);a.unsubscribe("previousNextChange",this.hR,this);a.unsubscribe("nowAutoplaying",this.bR,this);a.unsubscribe("autoplayDismissed",this.FQ,this);this.hc=this.u=null};
g.k.Sj=function(a){var b=g.Aa.apply(1,arguments);if(2!=this.hc.B)if(h$(this)){if(!K9(this.hc).isAdPlaying()||"control_seek"!==a)switch(a){case "control_toggle_play_pause":K9(this.hc).Mc()?this.hc.pause():this.hc.play();break;case "control_play":this.hc.play();break;case "control_pause":this.hc.pause();break;case "control_seek":this.J.lF(b[0],b[1]);break;case "control_subtitles_set_track":bfb(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":b=
this.G.getCurrentTime();cfb(this,0===b?void 0:b);break;case "control_seek":cfb(this,b[0]);break;case "control_subtitles_set_track":bfb(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}};
g.k.e0=function(a){this.N.zU(a)};
g.k.y5=function(a){this.Sj("control_subtitles_set_track",g.Bf(a)?null:a)};
g.k.HS=function(){var a=this.G.getOption("captions","track");g.Bf(a)||bfb(this,a)};
g.k.Wb=function(a){this.u.Wb(a,this.G.getVideoData().lengthSeconds)};
g.k.O0=function(){g.Bf(this.C)||dfb(this,this.C);this.D=!1};
g.k.kR=function(a,b){this.B.stop();2===b&&this.zS()};
g.k.Mz=function(){if(h$(this)){this.j.stop();var a=K9(this.hc);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.u.Cg=1;break;case 1082:case 1083:this.u.Cg=0;break;default:this.u.Cg=-1}switch(a.playerState){case 1081:case 1:this.Sb(new g.RJ(8));this.yS();break;case 1085:case 3:this.Sb(new g.RJ(9));break;case 1083:case 0:this.Sb(new g.RJ(2));this.J.stop();this.Wb(this.G.getVideoData().lengthSeconds);break;case 1084:this.Sb(new g.RJ(4));break;case 2:this.Sb(new g.RJ(4));this.Wb(G9(a));
break;case -1:this.Sb(new g.RJ(64));break;case -1E3:this.Sb(new g.RJ(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback.",XB:2}))}a=K9(this.hc).trackData;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.C=a,dfb(this,a));a=K9(this.hc);-1===a.volume||Math.round(this.G.getVolume())===a.volume&&this.G.isMuted()===a.muted||this.V.isActive()||this.lT()}else afb(this)};
g.k.hR=function(){this.G.X("mdxpreviousnextchange")};
g.k.xD=function(){h$(this)||afb(this)};
g.k.bR=function(a){isNaN(a)||this.G.X("mdxnowautoplaying",a)};
g.k.FQ=function(){this.G.X("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){h$(this)&&this.hc.setAudioTrack(this.G.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===K9(this.hc).playerState?cfb(this,a):b&&this.hc.seekTo(a)};
g.k.lT=function(){var a=this;if(h$(this)){var b=K9(this.hc);this.events.xc(this.W);b.muted?this.G.mute():this.G.unMute();this.G.setVolume(b.volume);this.W=this.events.P(this.G,"onVolumeChange",function(c){Zeb(a,c)})}};
g.k.yS=function(){this.j.stop();if(!this.hc.isDisposed()){var a=K9(this.hc);a.Mc()&&this.Sb(new g.RJ(8));this.Wb(G9(a));this.j.start()}};
g.k.zS=function(){this.B.stop();this.j.stop();var a=this.hc.Np();2==this.hc.B&&!isNaN(a)&&this.B.start()};
g.k.Sb=function(a){this.B.stop();var b=this.I;if(!g.WJ(b,a)){var c=g.W(a,2);c!==g.W(this.I,2)&&this.G.xw(c);this.I=a;ffb(this.u,b,a)}};g.u(i$,g.X);i$.prototype.wd=function(){this.j.show()};
i$.prototype.Ib=function(){this.j.hide()};
i$.prototype.u=function(){a8("mdx-privacy-popup-cancel");this.Ib()};
i$.prototype.B=function(){a8("mdx-privacy-popup-confirm");this.Ib()};g.u(j$,g.X);j$.prototype.onStateChange=function(a){this.Oc(a.state)};
j$.prototype.Oc=function(a){if(3===this.api.getPresentingPlayerType()){var b={RECEIVER_NAME:this.api.getOption("remote","currentReceiver").name};a=g.W(a,128)?g.yJ("Error on $RECEIVER_NAME",b):a.Mc()||g.W(a,4)?g.yJ("Playing on $RECEIVER_NAME",b):g.yJ("Connected to $RECEIVER_NAME",b);this.Ja("statustext",a);this.j.show()}else this.j.hide()};g.u(k$,g.RQ);k$.prototype.D=function(){var a=this.G.getOption("remote","receivers");a&&1<a.length&&!this.G.getOption("remote","quickCast")?(this.zq=g.uc(a,this.j,this),g.SQ(this,g.Ok(a,this.j)),a=this.G.getOption("remote","currentReceiver"),a=this.j(a),this.options[a]&&this.Hj(a),this.enable(!0)):this.enable(!1)};
k$.prototype.j=function(a){return a.key};
k$.prototype.Jk=function(a){return"cast-selector-receiver"===a?"Cast...":this.zq[a].name};
k$.prototype.Kg=function(a){g.RQ.prototype.Kg.call(this,a);this.G.setOption("remote","currentReceiver",this.zq[a]);this.qb.Ib()};g.u(efb,g.GN);g.k=efb.prototype;
g.k.create=function(){var a=this.player.R(),b=g.KF(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:a.K("mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:a.K("enable_dial_short_lived_lounge_token"),enableCastLoungeToken:a.K("enable_cast_short_lived_lounge_token")};Qeb(b,a);this.subscriptions.push(g.Lx("yt-remote-before-disconnect",this.b0,this));this.subscriptions.push(g.Lx("yt-remote-connection-change",this.J1,this));this.subscriptions.push(g.Lx("yt-remote-receiver-availability-change",this.jR,
this));this.subscriptions.push(g.Lx("yt-remote-auto-connect",this.H1,this));this.subscriptions.push(g.Lx("yt-remote-receiver-resumed",this.G1,this));this.subscriptions.push(g.Lx("mdx-privacy-popup-confirm",this.r3,this));this.subscriptions.push(g.Lx("mdx-privacy-popup-cancel",this.q3,this));this.jR()};
g.k.load=function(){this.player.cancelPlayback();g.GN.prototype.load.call(this);this.Jj=new $eb(this,this.player,this.hc);var a=(a=Yeb())?a.currentTime:0;var b=Veb()?new J9(c$(),void 0):null;0==a&&b&&(a=G9(K9(b)));0!==a&&this.Wb(a);ffb(this,this.Xd,this.Xd);this.player.Um(6)};
g.k.unload=function(){this.player.X("mdxautoplaycanceled");this.wp=this.Nm;g.ef(this.Jj,this.hc);this.hc=this.Jj=null;g.GN.prototype.unload.call(this);this.player.Um(5);l$(this)};
g.k.ea=function(){g.Mx(this.subscriptions);g.GN.prototype.ea.call(this)};
g.k.Om=function(a){var b=g.Aa.apply(1,arguments);this.loaded&&this.Jj.Sj.apply(this.Jj,[a].concat(g.t(b)))};
g.k.getAdState=function(){return this.Cg};
g.k.Am=function(){return this.hc?K9(this.hc).Am:!1};
g.k.hasNext=function(){return this.hc?K9(this.hc).hasNext:!1};
g.k.Wb=function(a,b){this.SP=a||0;this.player.X("progresssync",a,b);this.player.La("onVideoProgress",a||0)};
g.k.getCurrentTime=function(){return this.SP};
g.k.getProgressState=function(){var a=K9(this.hc),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:this.player.R().K("web_player_mdx_allow_seeking_change_killswitch")?this.player.eg():!a.isAdPlaying()&&this.player.eg(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.u?a.B+E9(a):a.B,isAtLiveHead:1>=(a.u?a.j+E9(a):a.j)-this.getCurrentTime(),loaded:a.N,seekableEnd:a.u?a.j+E9(a):a.j,seekableStart:0<
a.C?a.C+E9(a):a.C}};
g.k.nextVideo=function(){this.hc&&this.hc.nextVideo()};
g.k.MD=function(){this.hc&&this.hc.MD()};
g.k.b0=function(a){1===a&&(this.JJ=this.hc?K9(this.hc):null)};
g.k.J1=function(){var a=Veb()?new J9(c$(),void 0):null;if(a){var b=this.wp;this.loaded&&this.unload();this.hc=a;this.JJ=null;b.key!==this.Nm.key&&(this.wp=b,this.load())}else g.df(this.hc),this.hc=null,this.loaded&&(this.unload(),(a=this.JJ)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,G9(a)));this.player.X("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.jR=function(){var a=[this.Nm],b=a.concat,c=Reb();A9()&&g.Hz("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.zq=b.call(a,c);a=Teb()||this.Nm;m$(this,a);this.player.La("onMdxReceiversChange")};
g.k.H1=function(){var a=Teb();m$(this,a)};
g.k.G1=function(){this.wp=Teb()};
g.k.r3=function(){this.Uz=!0;l$(this);g$=!1;d$&&f$(d$,1);d$=null};
g.k.q3=function(){this.Uz=!1;l$(this);m$(this,this.Nm);this.wp=this.Nm;g$=!1;d$=null;this.player.playVideo()};
g.k.vg=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.zq;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?jeb():m$(this,b)),this.loaded?this.wp:this.Nm;case "quickCast":return 2===this.zq.length&&"cast-selector-receiver"===this.zq[1].key?(b&&jeb(),!0):!1}};
g.k.QK=function(){this.hc.QK()};
g.k.xj=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.FN("remote",efb);})(_yt_player);


}
/*
     FILE ARCHIVED ON 10:18:55 Aug 08, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:16:42 Aug 08, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 264.869
  exclusion.robots: 0.127
  exclusion.robots.policy: 0.116
  RedisCDXSource: 3.895
  esindex: 0.018
  LoadShardBlock: 232.21 (3)
  PetaboxLoader3.datanode: 419.813 (4)
  CDXLines.iter: 21.067 (3)
  load_resource: 249.296
  PetaboxLoader3.resolve: 41.565
*/