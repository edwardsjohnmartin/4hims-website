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

define(["jquery"],function(s){function n(){o&&s(document).ready(function(){var n=s("#wsb-shell-preview-desktop .wsb-canvas:first, body > .wsb-canvas:first").first(),e=s('<div style="position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;"></div>'),o=n.find(".wsb-canvas-scrollable:first");n=1==o.length?o:n;var i=n.css("background-image"),t=i.match(/url\(.+?\)/gi);if(t&&t.length>0){var a=t[0],r=i.replace(a,"");r.length>0&&","===r[0]&&(r=r.substring(1)),r=s.trim(r);var c=n[0],d=n.css("background-repeat"),g=n.css("background-position"),u=c.style.backgroundPositionX,b=c.style.backgroundPositionY;n.css("background-image",r),n.css("background-repeat","repeat"),n.css("background-position","0% 0%"),c.style.backgroundPositionX="0%",c.style.backgroundPositionY="0%";var l=e[0];e.css("background-image",a),e.css("background-repeat",d),e.css("background-position",g),l.style.backgroundPositionX=u,l.style.backgroundPositionY=b,n.prepend(e),n.find(".wsb-canvas-page-container").css("z-index",2)}})}var e=/(msie) ([\w.]+)/.exec(window.navigator.userAgent.toLowerCase()),o=e&&3===e.length&&"msie"===e[1]&&parseInt(e[2],10)<10;return{fixBackground:n}});
//# sourceMappingURL=iebackground.js.map

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
  captures_list: 110.146
  exclusion.robots: 0.083
  exclusion.robots.policy: 0.076
  cdx.remote: 0.061
  esindex: 0.008
  LoadShardBlock: 70.229 (3)
  PetaboxLoader3.datanode: 84.314 (5)
  CDXLines.iter: 17.218 (3)
  load_resource: 143.301 (2)
  PetaboxLoader3.resolve: 72.981 (2)
*/