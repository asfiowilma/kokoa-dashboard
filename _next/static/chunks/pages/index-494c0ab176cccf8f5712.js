(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2584:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return E}});var n=i(5893),r=i(9835),o=i(6156),s=i(7294),c=i(9598),a=i(4407),u=i(8874),l=i.n(u),f=function(){var e=(0,s.useContext)(c.g).setActivities;(0,s.useEffect)((function(){t()}),[]),(0,s.useEffect)((function(){var e=setInterval((function(){return t()}),9e5);return function(){return clearInterval(e)}}));var t=function(){(0,a.ir)().then((function(){(0,a.az)().then((function(t){e(t.data),t.data.length>0&&l().create("Skelefire",{body:"New updates found!",icon:"/kokoa-skelefire.png",onClick:function(){window.focus(),this.close()}})}))}))};return(0,n.jsx)("div",{className:"hidden"})};function h(){var e=(0,s.useContext)(c.g),t=e.skelefire,i=e.togglePower,r=t.isActive;return(0,n.jsxs)("div",{className:"card bg-base-100 shadow-lg",children:[t.isActive&&(0,n.jsx)(f,{}),(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsx)("div",{className:"form-control",children:(0,n.jsxs)("label",{className:"cursor-pointer label",children:[(0,n.jsxs)("span",{className:"label-text",children:["Skelefire"," ",(0,n.jsx)("div",{className:"badge ".concat(r?"badge-success":"badge-error"," ml-2 mr-auto"),children:r?"ON":"OFF"})]}),(0,n.jsx)("input",{type:"checkbox",readOnly:!0,onClick:function(){i()},checked:r,className:"toggle"})]})}),(0,n.jsx)("div",{className:"form-control",children:(0,n.jsxs)("label",{className:"cursor-pointer label",children:[(0,n.jsxs)("span",{className:"label-text",children:["Strawberry"," ",(0,n.jsx)("div",{className:"badge badge-error ml-2 mr-auto",children:"OFF"})]}),(0,n.jsx)("input",{type:"checkbox",readOnly:!0,checked:"",className:"toggle"})]})}),(0,n.jsx)("div",{className:"form-control",children:(0,n.jsxs)("label",{className:"cursor-pointer label",children:[(0,n.jsxs)("span",{className:"label-text",children:["Matcha ",(0,n.jsx)("div",{className:"badge badge-error ml-2 mr-auto",children:"OFF"})]}),(0,n.jsx)("input",{type:"checkbox",readOnly:!0,checked:"",className:"toggle"})]})})]})]})}var d=i(18),v=i(2713),b=i(2562),p=i(1486);function g(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function m(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?g(Object(i),!0).forEach((function(t){(0,o.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function w(){var e=(0,s.useState)("All"),t=e[0],i=e[1],r=(0,s.useState)([]),o=r[0],a=r[1],u=(0,s.useContext)(c.g),l=u.skelefire,f=u.countUnreadActivities;(0,s.useEffect)((function(){a(l.activities),f()}),[]),(0,s.useEffect)((function(){h(t),f()}),[l.activities]);var h=function(e){var t,n=(null===(t=l.courses.find((function(t){return t.shortname===e})))||void 0===t?void 0:t.courseID)||0;i(e),a(l.activities.filter((function(e){return!n||e.course===n})))},g=[{shortname:"All"}].concat((0,d.Z)(l.courses));return(0,n.jsx)("div",{className:"card bg-base-100 shadow-lg md:col-span-2 row-span-2",children:(0,n.jsxs)("div",{className:"card-body flex flex-col gap-3",children:[(0,n.jsx)(v.Z,{}),(0,n.jsx)(p.Z,m({},{coursesTabs:g,activeTab:t,onTabChange:h})),(0,n.jsx)(b.Z,{activities:o,isOverview:!0})]})})}var _=i(2585);function y(){return(0,n.jsx)("div",{className:"card shadow-lg bg-base-100",children:(0,n.jsxs)("div",{className:"card-body space-y-4",children:[(0,n.jsxs)("div",{className:"card-title flex justify-between",children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(_.CLk,{className:"w-6 h-6 mr-2"})," Strawberry"," "]}),(0,n.jsx)("button",{className:"btn btn-sm btn-ghost",children:"refresh"})]}),(0,n.jsxs)("div",{className:"alert flex justify-between items-center",children:[(0,n.jsx)("div",{children:"New Offers"}),(0,n.jsx)("div",{className:"badge badge-primary badge-outline",children:"12"})]}),(0,n.jsxs)("div",{className:"flex bg-neutral-content text-neutral rounded-box h-full px-3 items-center cursor-pointer",children:[(0,n.jsx)(_.CLk,{}),(0,n.jsx)(_.CLk,{}),(0,n.jsx)(_.CLk,{})]})]})})}var k=i(7735);function N(e){var t=e.matkul;return(0,n.jsx)("div",{className:"card shadow-lg bg-base-100",children:(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsxs)("div",{className:"card-title flex justify-between",children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(k.Xkc,{className:"w-6 h-6 mr-2"})," Matcha"]}),(0,n.jsx)("button",{className:"btn btn-sm btn-ghost",children:"refresh"})]}),(0,n.jsx)("div",{className:"card bordered max-h-28 overflow-y-auto scrollbar scrollbar-hidden",children:(0,n.jsx)("table",{className:"table table-compact w-full text-center",children:(0,n.jsx)("tbody",{children:t.map((function(e,t){return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e}),(0,n.jsx)("td",{children:2===t?(0,n.jsx)("div",{className:"badge badge-secondary badge-sm",children:"not published"}):"101.92"}),(0,n.jsx)("td",{children:2===t?(0,n.jsx)("div",{className:"badge badge-accent badge-sm",children:"empty"}):"A"})]},t)}))})})})]})})}function j(){return(0,n.jsx)("div",{className:"card shadow-lg bg-base-100",children:(0,n.jsx)("div",{className:"card-body",children:(0,n.jsx)("div",{className:"card-title flex justify-between",children:(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(_.Omh,{className:"w-6 h-6 mr-2"})," Tiramisu"]})})})})}function x(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function O(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?x(Object(i),!0).forEach((function(t){(0,o.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):x(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function P(){var e=(0,s.useContext)(c.g),t=e.skelefire,i=e.setCourses,r=e.setActivities;return(0,s.useEffect)((function(){0==t.courses.length&&(console.log("dashboard useeffects"),(0,a.Tw)().then((function(e){return i(e.data)})),(0,a.az)().then((function(e){return r(e.data)})))}),[]),(0,n.jsxs)("div",{className:"w-full grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid-rows-3",children:[(0,n.jsx)(h,{}),(0,n.jsx)(w,{}),(0,n.jsx)(y,{}),(0,n.jsx)(N,O({},{matkul:["Gamedev","Gamedev","Gamedev","Gamedev","Gamedev","Gamedev"]})),(0,n.jsx)(j,{})]})}function E(){return(0,n.jsx)(r.Z,{labelName:"sidebar",children:(0,n.jsx)(P,{})})}},8581:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(2584)}])},8874:function(e,t,i){e.exports=function(){"use strict";var e={errors:{incompatible:"".concat("PushError:"," Push.js is incompatible with browser."),invalid_plugin:"".concat("PushError:"," plugin class missing from plugin manifest (invalid plugin). Please check the documentation."),invalid_title:"".concat("PushError:"," title of notification must be a string"),permission_denied:"".concat("PushError:"," permission request declined"),sw_notification_error:"".concat("PushError:"," could not show a ServiceWorker notification due to the following reason: "),sw_registration_error:"".concat("PushError:"," could not register the ServiceWorker due to the following reason: "),unknown_interface:"".concat("PushError:"," unable to create notification: unknown interface")}};function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),e}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var l=function(){function e(t){n(this,e),this._win=t,this.GRANTED="granted",this.DEFAULT="default",this.DENIED="denied",this._permissions=[this.GRANTED,this.DEFAULT,this.DENIED]}return o(e,[{key:"request",value:function(e,t){return arguments.length>0?this._requestWithCallback.apply(this,arguments):this._requestAsPromise()}},{key:"_requestWithCallback",value:function(e,t){var i,n=this,r=this.get(),o=!1,s=function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n._win.Notification.permission;o||(o=!0,void 0===i&&n._win.webkitNotifications&&(i=n._win.webkitNotifications.checkPermission()),i===n.GRANTED||0===i?e&&e():t&&t())};r!==this.DEFAULT?s(r):this._win.webkitNotifications&&this._win.webkitNotifications.checkPermission?this._win.webkitNotifications.requestPermission(s):this._win.Notification&&this._win.Notification.requestPermission?(i=this._win.Notification.requestPermission(s))&&i.then&&i.then(s).catch((function(){t&&t()})):e&&e()}},{key:"_requestAsPromise",value:function(){var e=this,t=this.get(),i=t!==this.DEFAULT,n=this._win.Notification&&this._win.Notification.requestPermission,r=this._win.webkitNotifications&&this._win.webkitNotifications.checkPermission;return new Promise((function(o,s){var c,a=!1,u=function(t){a||(a=!0,function(t){return t===e.GRANTED||0===t}(t)?o():s())};i?u(t):r?e._win.webkitNotifications.requestPermission((function(e){u(e)})):n?(c=e._win.Notification.requestPermission(u))&&c.then&&c.then(u).catch(s):o()}))}},{key:"has",value:function(){return this.get()===this.GRANTED}},{key:"get",value:function(){return this._win.Notification&&this._win.Notification.permission?this._win.Notification.permission:this._win.webkitNotifications&&this._win.webkitNotifications.checkPermission?this._permissions[this._win.webkitNotifications.checkPermission()]:navigator.mozNotification?this.GRANTED:this._win.external&&this._win.external.msIsSiteMode?this._win.external.msIsSiteMode()?this.GRANTED:this.DEFAULT:this.GRANTED}}]),e}(),f=function(){function e(){n(this,e)}return o(e,null,[{key:"isUndefined",value:function(e){return void 0===e}},{key:"isNull",value:function(e){return null===obj}},{key:"isString",value:function(e){return"string"==typeof e}},{key:"isFunction",value:function(e){return e&&"[object Function]"==={}.toString.call(e)}},{key:"isObject",value:function(e){return"object"===t(e)}},{key:"objectMerge",value:function(e,t){for(var i in t)e.hasOwnProperty(i)&&this.isObject(e[i])&&this.isObject(t[i])?this.objectMerge(e[i],t[i]):e[i]=t[i]}}]),e}(),h=function e(t){n(this,e),this._win=t},d=function(e){function t(){return n(this,t),u(this,c(t).apply(this,arguments))}return s(t,h),o(t,[{key:"isSupported",value:function(){return void 0!==this._win.Notification}},{key:"create",value:function(e,t){return new this._win.Notification(e,{icon:f.isString(t.icon)||f.isUndefined(t.icon)||f.isNull(t.icon)?t.icon:t.icon.x32,body:t.body,tag:t.tag,requireInteraction:t.requireInteraction})}},{key:"close",value:function(e){e.close()}}]),t}(),v=function(t){function i(){return n(this,i),u(this,c(i).apply(this,arguments))}return s(i,h),o(i,[{key:"isSupported",value:function(){return void 0!==this._win.navigator&&void 0!==this._win.navigator.serviceWorker}},{key:"getFunctionBody",value:function(e){var t=e.toString().match(/function[^{]+{([\s\S]*)}$/);return null!=t&&t.length>1?t[1]:null}},{key:"create",value:function(t,i,n,r,o){var s=this;this._win.navigator.serviceWorker.register(r),this._win.navigator.serviceWorker.ready.then((function(r){var c={id:t,link:n.link,origin:document.location.href,onClick:f.isFunction(n.onClick)?s.getFunctionBody(n.onClick):"",onClose:f.isFunction(n.onClose)?s.getFunctionBody(n.onClose):""};void 0!==n.data&&null!==n.data&&(c=Object.assign(c,n.data)),r.showNotification(i,{icon:n.icon,body:n.body,vibrate:n.vibrate,tag:n.tag,data:c,requireInteraction:n.requireInteraction,silent:n.silent}).then((function(){r.getNotifications().then((function(e){r.active.postMessage(""),o(e)}))})).catch((function(t){throw new Error(e.errors.sw_notification_error+t.message)}))})).catch((function(t){throw new Error(e.errors.sw_registration_error+t.message)}))}},{key:"close",value:function(){}}]),i}(),b=function(e){function t(){return n(this,t),u(this,c(t).apply(this,arguments))}return s(t,h),o(t,[{key:"isSupported",value:function(){return void 0!==this._win.navigator.mozNotification}},{key:"create",value:function(e,t){var i=this._win.navigator.mozNotification.createNotification(e,t.body,t.icon);return i.show(),i}}]),t}(),p=function(e){function t(){return n(this,t),u(this,c(t).apply(this,arguments))}return s(t,h),o(t,[{key:"isSupported",value:function(){return void 0!==this._win.external&&void 0!==this._win.external.msIsSiteMode}},{key:"create",value:function(e,t){return this._win.external.msSiteModeClearIconOverlay(),this._win.external.msSiteModeSetIconOverlay(f.isString(t.icon)||f.isUndefined(t.icon)?t.icon:t.icon.x16,e),this._win.external.msSiteModeActivate(),null}},{key:"close",value:function(){this._win.external.msSiteModeClearIconOverlay()}}]),t}(),g=function(e){function t(){return n(this,t),u(this,c(t).apply(this,arguments))}return s(t,h),o(t,[{key:"isSupported",value:function(){return void 0!==this._win.webkitNotifications}},{key:"create",value:function(e,t){var i=this._win.webkitNotifications.createNotification(t.icon,e,t.body);return i.show(),i}},{key:"close",value:function(e){e.cancel()}}]),t}();return new(function(){function t(e){n(this,t),this._currentId=0,this._notifications={},this._win=e,this.Permission=new l(e),this._agents={desktop:new d(e),chrome:new v(e),firefox:new b(e),ms:new p(e),webkit:new g(e)},this._configuration={serviceWorker:"/serviceWorker.min.js",fallback:function(e){}}}return o(t,[{key:"_closeNotification",value:function(t){var i=!0,n=this._notifications[t];if(void 0!==n){if(i=this._removeNotification(t),this._agents.desktop.isSupported())this._agents.desktop.close(n);else if(this._agents.webkit.isSupported())this._agents.webkit.close(n);else{if(!this._agents.ms.isSupported())throw i=!1,new Error(e.errors.unknown_interface);this._agents.ms.close()}return i}return!1}},{key:"_addNotification",value:function(e){var t=this._currentId;return this._notifications[t]=e,this._currentId++,t}},{key:"_removeNotification",value:function(e){var t=!1;return this._notifications.hasOwnProperty(e)&&(delete this._notifications[e],t=!0),t}},{key:"_prepareNotification",value:function(e,t){var i,n=this;return i={get:function(){return n._notifications[e]},close:function(){n._closeNotification(e)}},t.timeout&&setTimeout((function(){i.close()}),t.timeout),i}},{key:"_serviceWorkerCallback",value:function(e,t,i){var n=this,r=this._addNotification(e[e.length-1]);navigator&&navigator.serviceWorker&&(navigator.serviceWorker.addEventListener("message",(function(e){var t=JSON.parse(e.data);"close"===t.action&&Number.isInteger(t.id)&&n._removeNotification(t.id)})),i(this._prepareNotification(r,t))),i(null)}},{key:"_createCallback",value:function(e,t,i){var n,r=this,o=null;if(t=t||{},n=function(e){r._removeNotification(e),f.isFunction(t.onClose)&&t.onClose.call(r,o)},this._agents.desktop.isSupported())try{o=this._agents.desktop.create(e,t)}catch(n){var s=this._currentId,c=this.config().serviceWorker;this._agents.chrome.isSupported()&&this._agents.chrome.create(s,e,t,c,(function(e){return r._serviceWorkerCallback(e,t,i)}))}else this._agents.webkit.isSupported()?o=this._agents.webkit.create(e,t):this._agents.firefox.isSupported()?this._agents.firefox.create(e,t):this._agents.ms.isSupported()?o=this._agents.ms.create(e,t):(t.title=e,this.config().fallback(t));if(null!==o){var a=this._addNotification(o),u=this._prepareNotification(a,t);f.isFunction(t.onShow)&&o.addEventListener("show",t.onShow),f.isFunction(t.onError)&&o.addEventListener("error",t.onError),f.isFunction(t.onClick)&&o.addEventListener("click",t.onClick),o.addEventListener("close",(function(){n(a)})),o.addEventListener("cancel",(function(){n(a)})),i(u)}i(null)}},{key:"create",value:function(t,i){var n,r=this;if(!f.isString(t))throw new Error(e.errors.invalid_title);return n=this.Permission.has()?function(e,n){try{r._createCallback(t,i,e)}catch(e){n(e)}}:function(n,o){r.Permission.request().then((function(){r._createCallback(t,i,n)})).catch((function(){o(e.errors.permission_denied)}))},new Promise(n)}},{key:"count",value:function(){var e,t=0;for(e in this._notifications)this._notifications.hasOwnProperty(e)&&t++;return t}},{key:"close",value:function(e){var t;for(t in this._notifications)if(this._notifications.hasOwnProperty(t)&&this._notifications[t].tag===e)return this._closeNotification(t)}},{key:"clear",value:function(){var e,t=!0;for(e in this._notifications)this._notifications.hasOwnProperty(e)&&(t=t&&this._closeNotification(e));return t}},{key:"supported",value:function(){var e=!1;for(var t in this._agents)this._agents.hasOwnProperty(t)&&(e=e||this._agents[t].isSupported());return e}},{key:"config",value:function(e){return(void 0!==e||null!==e&&f.isObject(e))&&f.objectMerge(this._configuration,e),this._configuration}},{key:"extend",value:function(t){var i,n={}.hasOwnProperty;if(!n.call(t,"plugin"))throw new Error(e.errors.invalid_plugin);for(var r in n.call(t,"config")&&f.isObject(t.config)&&null!==t.config&&this.config(t.config),i=new(0,t.plugin)(this.config()))n.call(i,r)&&f.isFunction(i[r])&&(this[r]=i[r])}}]),t}())("undefined"!=typeof window?window:i.g)}()}},function(e){e.O(0,[980,415,260,617,876,885,841,770,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);