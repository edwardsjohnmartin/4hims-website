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

define(["common/util/util.window"],function(e){function o(e){if(t.cookie.length>0){var o=t.cookie.indexOf(e+"=");if(-1!==o){o=o+e.length+1;var n=t.cookie.indexOf(";",o);return-1===n&&(n=t.cookie.length),unescape(t.cookie.substring(o,n))}}return""}function n(e,o,n){var i=new Date;n&&i.setDate(i.getDate()+n);var r=e+"="+escape(o)+((null===n||"undefined"==typeof n?"":"; expires="+i.toUTCString())+"; path=/");t.cookie=r}function i(e){n(e,"",-1)}var t=e.document;return{getCookie:o,setCookie:n,eraseCookie:i}});
//# sourceMappingURL=cookiemanager.js.map

}
/*
     FILE ARCHIVED ON 23:26:52 Mar 29, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:15:46 Aug 08, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 7069.958
  exclusion.robots: 0.097
  exclusion.robots.policy: 0.088
  cdx.remote: 0.072
  esindex: 0.009
  LoadShardBlock: 111.083 (3)
  PetaboxLoader3.datanode: 128.285 (4)
  CDXLines.iter: 24.847 (3)
  load_resource: 257.984
  PetaboxLoader3.resolve: 64.583
*/