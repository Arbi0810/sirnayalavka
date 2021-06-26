var ingEvents=function(s){var c={},v={};return c.findYMIds=function(){var a=[];if(void 0!==s.Ya&&void 0!==s.Ya._metrika)for(var e in s.Ya._metrika.hitParam)s.Ya._metrika.hitParam.hasOwnProperty(e)&&a.push(parseInt(e));return a},c.checkGAName=function(){return void 0!==s.ga?"ga":void 0!==s.__gaTracker?"__gaTracker":void 0},c.findGAIds=function(){var n=[],t=[];void 0!==s[v.nameGA]&&s[v.nameGA].getAll().forEach(function(a){var e=a.get("name");"t0"===e&&n.push("send"),null===/^(gtag_UA_.*)$/g.exec(e)&&"t0"!==e&&n.push(e+".send"),t.push(a.get("trackingId"))});return{GA:n,GT:t}},c.init=function(a){var e=a.debug,n=void 0===e||e,t=a.idsYM,i=void 0===t?this.findYMIds():t,r=a.idsGA,g=void 0===r?[]:r,s=a.idsGT,c=void 0===s?[]:s,o=a.nameGA,l=void 0===o?this.checkGAName():o;v.debug=n,v.idsYM=i,v.idsGA=g,v.idsGT=c,v.nameGA=l,v.init=!0;var _=this.findGAIds();0===v.idsGA.length&&(v.idsGA=_.GA),0===v.idsGT.length&&(v.idsGT=_.GT)},c.checkPrams=function(){!0!==v.init&&c.init({})},c.getParams=function(){return v},c.version=function(){return"Events script version: 4.0.8"},c.banner=function(){return"\n _                                           _\n(_)                                         | |\n _  _ __   __ _   ___  __    __  ___  _ __  | |_  ___\n| || '_ \\ / _` | / _ \\ \\ \\  / / / _ \\| '_ \\ | __|/ __|\n| || | | | (_| ||  __/  \\ \\/ / |  __/| | | || |_ \\__ \\\n|_||_| |_|\\__, | \\___|   \\__/   \\___||_| |_| \\__||___/\n           __/ |\n          |___/"},c.YMReachGoal=function(a){var e=a.type,n=void 0===e?"event":e,t=a.label,i=a.goalParams,r=void 0===i?{}:i;if(void 0!==t)for(var g=0;g<v.idsYM.length;g++)void 0!==s["yaCounter"+v.idsYM[g]]&&s["yaCounter"+v.idsYM[g]].reachGoal(t,r,c.callbackTrackersMessage(n,"ym","yaCounter"+v.idsYM[g],v.debug,t))},c.GAPageView=function(a){var e=a.page;if(void 0!==s._gaq&&(s._gaq.push(["_trackPageview",e]),c.callbackTrackersMessage("page","ga","_gaq",v.debug,e)),void 0!==s[v.nameGA])for(var n=0;n<v.idsGA.length;n++)s[v.nameGA](v.idsGA[n],"pageview",e,{hitCallback:ingCallbackTrackersMessage("page","ga","ga("+v.idsGA[n]+")",v.debug,e)});if(void 0!==s.gtag)for(var t=0;t<v.idsGT.length;t++)s.gtag("event","page_view",{send_to:v.idsGT[t],page_path:e}),c.callbackTrackersMessage("page","ga","gtag("+v.idsGT[t]+")",v.debug,e)},c.GAEvent=function(a){var e=a.category,n=a.action,t=a.label;if(void 0!==e&&void 0!==n&&void 0!==t){if(void 0!==s.pageTracker&&(s.pageTracker._trackEvent(e,n,t),c.callbackTrackersMessage("event","ga","pageTracker",v.debug,e,n,t)),void 0!==s._gaq&&(s._gaq.push(["_trackEvent",e,n,t]),c.callbackTrackersMessage("event","ga","_gaq",v.debug,e,n,t)),void 0!==s[v.nameGA])for(var i=0;i<v.idsGA.length;i++)s[v.nameGA](v.idsGA[i],"event",e,n,t,{hitCallback:ingCallbackTrackersMessage("event","ga","ga("+v.idsGA[i]+")",v.debug,e,n,t)});void 0!==s.gtag&&(s.gtag("event",n,{event_category:e,event_label:t}),c.callbackTrackersMessage("event","ga","gtag",v.debug,e,n,t))}},c.dataLayerPush=function(a,e){void 0!==s[a]&&(e.eventCallback=c.callbackTrackersMessage("push","dl",a,v.debug,e),s[a].push(e))},c.DataLayer=function(a,e){ingEvents.checkPrams(),ingEvents.listTrackers(),c.dataLayerPush(a,e)},c.Event=function(a){var e=a.category,n=a.action,t=a.label,i=a.ya_label,r=a.goalParams;ingEvents.checkPrams();try{var g=void 0===i&&void 0!==t?t:i;ingEvents.listTrackers(),ingEvents.YMReachGoal({type:"event",label:g,goalParams:r}),ingEvents.GAEvent({category:e,action:n,label:t})}catch(a){console.log(a.message)}},c.PageView=function(a){var e=a.page,n=a.label;ingEvents.checkPrams();try{ingEvents.listTrackers(),ingEvents.YMReachGoal({type:"page",label:n}),ingEvents.GAPageView({page:e})}catch(a){console.log(a.message)}},c.listTrackers=function(){var a="",e="IngEvent on tracker:";try{a+="GA ids: "+v.idsGA.join(", ")+"\n",a+="GT ids: "+v.idsGT.join(", ")+"\n",a+="YM ids: "+v.idsYM.join(", ")+"\n"}catch(a){console.log(e+"Some error!")}return!0===v.debug&&(console.group(e),console.log(a),console.groupEnd()),e+a},c.callbackTrackersMessage=function(a,e,n,t){var i="IngEvent callback parameters :\n\t";i+="[tracker  : "+e+"]\n\t",i+="[type     : "+a+"]\n";for(var r=arguments.length,g=Array(4<r?r-4:0),s=4;s<r;s++)g[s-4]=arguments[s];"ym"===e&&(i+="\t[label    : "+g[0]+"]\n");"ga"===e&&(i+="page"===a?"\t[page     : "+g[0]+"]\n":"\t[category : "+g[0]+"]\n\t[action   : "+g[1]+"]\n\t[label    : "+g[2]+"]\n");if("dl"===e){var c=g[0];i+="\t[data     : "+JSON.stringify(c)+"]\n"}return!0===t&&console.log(i),i},c}(window);function ingCallbackTrackersMessage(a,e,n,t){for(var i=arguments.length,r=Array(4<i?i-4:0),g=4;g<i;g++)r[g-4]=arguments[g];ingEvents.callbackTrackersMessage.apply(ingEvents,[a,e,n,t].concat(r))}function ing_events(a){var e=a.category,n=a.action,t=a.label,i=a.ya_label,r=a.goalParams;ingEvents.Event({category:e,action:n,label:t,ya_label:i,goalParams:r})}function ing_pageview(a){var e=a.page,n=a.label;ingEvents.PageView({page:e,label:n})}

var ingEventsConfig = {
    //debug  :true, //debug mode
//    idsYM  :[],   //Yandex Metrika id array
//    idsGA  :[],   //GA tracking name array
    //idsGT  :[],   //GA tracking id array
    //nameGA :'ga'    //GA tracking analytics names
};
window.onload = function() {
	// Init configurations
    ingEvents.init(ingEventsConfig);
}


$(document).ready(function(){
		$('#callback .button').click(function() {
		var name = $("#callback input[name='name']").val();
		var phone = $("#callback input[name='email']").val();
			if(name != "" && phone != "") {
			setTimeout(function() { 
			ingEvents.listTrackers(); ingEvents.dataLayerPush('dataLayer', {'event': 'callback_submit'});
			}, 2000);
			}
		});

		$('.quick-order-pro button[type="submit"]').click(function() {
		var name = $(".quick-order-pro input[name='fields[firstname]']").val();
		var phone = $(".quick-order-pro input[name='fields[telephone]']").val();
			if(name != "" && phone != "") {
			ingEvents.listTrackers(); ingEvents.dataLayerPush('dataLayer', {'event': 'order_submit'});
			}
		});

});