(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[823],{9835:function(e,t,i){"use strict";i.d(t,{Z:function(){return _}});var n=i(5893),r=(i(7294),i(9008));var s=i(6156),o=i(7375),c=i(1163),a=i(1664);function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function u(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){(0,s.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function h(e){var t=e.href,i=e.exact,r=e.children,s=(0,o.Z)(e,["href","exact","children"]),l=(0,c.useRouter)().pathname;return(i?l===t:l.startsWith(t))&&(s.className+=" active"),(0,n.jsx)(a.default,{href:t,as:"/kokoa-dashboard"+t,children:(0,n.jsx)("a",u(u({},s),{},{children:r}))})}h.defaultProps={exact:!1};var f=i(8193),d=i(2585),v=i(7735),p=i(2662),m=i(117),b=i(471);function x(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function w(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?x(Object(i),!0).forEach((function(t){(0,s.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):x(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function g(){var e=(0,m.Ap)(),t=e.sidebar,i=e.dispatch,r=function(e){return i({type:"set_expanded",payload:e})};return t.isExpanded?(0,n.jsx)(j,w({},{setExpanded:r})):(0,n.jsx)(y,w({},{setExpanded:r}))}function j(e){var t=e.setExpanded,i=(0,p.D)().skelefire;return(0,n.jsxs)("div",{className:"flex flex-col h-full bg-base-100 rounded-box shadow-lg transition transform origin-top-left",children:[(0,n.jsxs)("ul",{className:"flex-1 menu rounded-box p-4 w-72 overflow-y-auto ",children:[(0,n.jsx)("li",{children:(0,n.jsxs)(h,{href:"/",exact:!0,children:[(0,n.jsx)(f.V9Z,{className:"w-6 h-6 mr-2"})," Dashboard"]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(h,{href:"/settings",exact:!0,children:[(0,n.jsx)(f.xRF,{className:"w-6 h-6 mr-2"})," Settings"]})}),(0,n.jsx)("li",{className:"menu-title mt-4 mb-1",children:(0,n.jsx)("span",{children:"Notifiers"})}),(0,n.jsx)("li",{children:(0,n.jsxs)(h,{href:"/skelefire",exact:!0,children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(d.qVT,{className:"w-6 h-6 mr-2"})," Skelefire"]}),i.activities.length>0&&(0,n.jsx)("div",{className:"ml-auto badge border-none badge-accent bg-neutral-content",children:i.activities.length})]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(h,{href:"/strawberry",exact:!0,children:[(0,n.jsx)(d.CLk,{className:"w-6 h-6 mr-2"})," Strawberry"]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(h,{href:"/matcha",exact:!0,children:[(0,n.jsx)(v.Xkc,{className:"w-6 h-6 mr-2"})," Matcha"]})}),(0,n.jsx)("li",{className:"menu-title mt-4 mb-1",children:(0,n.jsx)("span",{children:"Apps"})}),(0,n.jsx)("li",{children:(0,n.jsxs)(h,{href:"/tiramisu",exact:!0,children:[(0,n.jsx)(d.Omh,{className:"w-6 h-6 mr-2"}),"Tiramisu"]})})]}),(0,n.jsxs)("div",{onClick:function(){return t(!1)},className:"btn btn-ghost flex items-center justify-between m-4",children:[(0,n.jsx)("div",{children:"collapse sidebar"})," ",(0,n.jsx)(b.oMI,{className:"w-6 h-6"})]})]})}function y(e){var t=e.setExpanded,i=(0,p.D)().skelefire;return(0,n.jsxs)("div",{className:"flex flex-col h-full bg-base-100 rounded-box shadow-lg transform origin-top-left",children:[(0,n.jsxs)("ul",{className:"flex-1 menu rounded-box overflow-y-auto",children:[(0,n.jsx)("li",{children:(0,n.jsx)(h,{href:"/",exact:!0,children:(0,n.jsx)(f.V9Z,{className:"w-6 h-6 mt-2"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(h,{href:"/settings",exact:!0,children:(0,n.jsx)(f.xRF,{className:"w-6 h-6"})})}),(0,n.jsx)("div",{className:"divider my-0"}),(0,n.jsx)("li",{children:(0,n.jsx)(h,{href:"/skelefire",exact:!0,children:(0,n.jsxs)("div",{className:"indicator",children:[(0,n.jsx)(d.qVT,{className:"w-6 h-6"}),i.activities.length>0&&(0,n.jsx)("div",{className:"indicator-item ml-auto badge border-none badge-accent bg-neutral-content",children:i.activities.length})]})})}),(0,n.jsx)("li",{children:(0,n.jsx)(h,{href:"/strawberry",exact:!0,children:(0,n.jsx)(d.CLk,{className:"w-6 h-6"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(h,{href:"/matcha",exact:!0,children:(0,n.jsx)(v.Xkc,{className:"w-6 h-6"})})}),(0,n.jsx)("div",{className:"divider my-0"}),(0,n.jsx)("li",{children:(0,n.jsx)(h,{href:"/tiramisu",exact:!0,children:(0,n.jsx)(d.Omh,{className:"w-6 h-6"})})})]}),(0,n.jsx)("div",{onClick:function(){return t(!0)},className:"btn btn-ghost rounded-box",children:(0,n.jsx)(b.i9j,{className:"w-6 h-6"})})]})}var k=i(8279);function _(e){var t=e.children;return(0,n.jsxs)("div",{children:[(0,n.jsxs)(r.default,{children:[(0,n.jsx)("title",{children:"Kokoa"}),(0,n.jsx)("link",{rel:"icon",href:"/kokoa-dashboard/kokoa-favicon.png"})]}),(0,n.jsxs)("div",{className:"flex flex-col items-center w-full min-h-screen h-screen bg-neutral",children:[(0,n.jsxs)("div",{className:"w-full flex-1 flex px-4 md:px-8 pt-4 md:pt-8",children:[(0,n.jsx)("aside",{className:"relative",children:(0,n.jsx)(g,{})}),(0,n.jsx)("div",{className:"flex-1 flex flex-col items-center pl-0 md:pl-6 overflow-auto scrollbar scrollbar-hidden",style:{maxHeight:"calc(100vh - 4rem)"},children:(0,n.jsx)("main",{className:"flex w-full flex-1 items-start",children:t})})]}),(0,n.jsx)(k.x7,{position:"bottom-right",toastOptions:{success:{className:"alert alert-success"},error:{style:{background:"red"}}}}),(0,n.jsx)("footer",{className:"flex items-center justify-center w-full h-8 ",children:"\xa9 Caramel Lyth"})]})]})}},2713:function(e,t,i){"use strict";i.d(t,{Z:function(){return d}});var n=i(7757),r=i.n(n),s=i(5893),o=i(2137),c=i(7294),a=i(4707),l=i(2585),u=i(8874),h=i.n(u),f=i(2662);function d(){var e=(0,c.useState)(!1),t=e[0],i=e[1],n=(0,f.D)(),u=n.skelefire,d=n.setActivities,v=n.countUnreadActivities,p=n.markAsRead;function m(){return(m=(0,o.Z)(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,(0,a.ir)();case 3:return e.next=5,(0,a.az)();case 5:t=e.sent,d(t.data),v(),i(!1),t.data.length>0&&h().create("Skelefire",{body:"New updates found!",icon:"/kokoa-dashboard/kokoa-skelefire.png",onClick:function(){window.focus(),this.close()}});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,s.jsxs)("div",{className:"card-title flex justify-between",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(l.qVT,{className:"w-6 h-6 mr-2"})," Skelefire"]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"dropdown dropdown-end dropdown-hover",children:[(0,s.jsx)("div",{tabIndex:"0",className:"m-1 btn btn-sm btn-ghost",children:"Actions"}),(0,s.jsxs)("ul",{className:"shadow menu dropdown-content bg-primary text-primary-content rounded-box w-52 text-base",children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{onClick:function(){var e=u.activities.filter((function(e){return e.selected})).map((function(e){return e.moduleID}));p(e)},children:"Mark selected as read"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{onClick:function(){var e=u.activities.map((function(e){return e.moduleID}));p(e)},children:"Mark all as read"})})]})]}),(0,s.jsx)("button",{onClick:function(){return m.apply(this,arguments)},className:"btn btn-sm btn-ghost ".concat(t&&"loading"),children:t?"loading":"refresh"})]})]})}},2562:function(e,t,i){"use strict";i.d(t,{Z:function(){return p}});var n=i(5893),r=i(6156),s=i(7294),o=i(8889),c=i(381),a=i.n(c),l=i(4578);function u(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function h(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?u(Object(i),!0).forEach((function(t){(0,r.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function f(e){var t=e.activity,i=e.isOverview,r=(0,s.useContext)(o.g),c=r.skelefire,u=r.markAsRead,f=r.setActivities;return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("input",{type:"checkbox",checked:t.selected,onClick:function(){f(c.activities.map((function(e){return e.moduleID==t.moduleID?h(h({},e),{},{selected:!e.selected}):e})))},readOnly:!0,className:"checkbox checkbox-sm"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"https://scele.cs.ui.ac.id/course/view.php?id=".concat(t.course),target:"_blank",className:"badge badge-accent",children:function(e){var t=c.courses.find((function(t){return t.courseID===e}));return null===t||void 0===t?void 0:t.shortname}(t.course)})}),(0,n.jsx)("td",{className:"".concat(i?"max-w-snippet":"max-w-prose"," truncate text-left"),children:t.content}),(0,n.jsx)("td",{children:a()(t.lastUpdated).fromNow()}),(0,n.jsx)("td",{children:(0,n.jsx)("button",{onClick:function(){return e=t.moduleID,u([e]);var e},className:"btn btn-sm btn-ghost",children:(0,n.jsx)(l.J$L,{})})})]})}function d(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function v(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?d(Object(i),!0).forEach((function(t){(0,r.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e){var t=e.activities,i=e.isOverview,r=(0,s.useContext)(o.g),c=r.skelefire,a=r.setActivities,l=(0,s.useState)(c.activities.every((function(e){return e.selected}))),u=l[0],h=l[1];return(0,n.jsxs)("div",{className:"".concat(i?"max-h-56":"max-h-80"," overflow-auto scrollbar scrollbar-hidden hover:scrollbar-width-1 hover:scrollbar-track-transparent hover:scrollbar-thumb-yellow-600 hover:scrollbar-track-radius-full pr-1.5"),children:[(0,n.jsxs)("table",{className:"table table-compact w-full text-center relative",children:[(0,n.jsx)("thead",{className:"sticky top-0 z-20",children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)("input",{type:"checkbox",checked:c.activities.every((function(e){return e.selected})),onClick:function(){h(!u),a(c.activities.map((function(e){return v(v({},e),{},{selected:u})})))},readOnly:!0,className:"checkbox checkbox-sm"})}),(0,n.jsx)("th",{children:"Course"}),(0,n.jsx)("th",{className:"text-left",children:"Activity Name"}),(0,n.jsx)("th",{children:"Last Update"}),(0,n.jsx)("th",{})]})}),0!=t.length&&(0,n.jsx)("tbody",{children:t.map((function(e){return(0,n.jsx)(f,{activity:e,isOverview:i},e.moduleID)}))})]}),0==t.length&&(0,n.jsx)("div",{className:"w-full pt-6 flex justify-center",children:(0,n.jsx)("img",{src:"/kokoa-dashboard/empty-inbox.svg",alt:"empty",className:i?"h-48":"h-60"})})]})}},4168:function(e,t,i){"use strict";i.d(t,{Z:function(){return o}});var n=i(5893),r=i(7294),s=i(8889);function o(){var e=(0,r.useContext)(s.g).skelefire;return(0,n.jsx)("div",{className:"grid grid-cols-2 grid-rows-3 md:grid-cols-6 md:grid-rows-none gap-4",children:e.courses.map((function(e){return(0,n.jsx)("a",{href:"https://scele.cs.ui.ac.id/course/view.php?id=".concat(e.courseID),target:"_blank",className:"btn bg-accent text-accent-content rounded-box",children:e.shortname},e.courseID)}))})}},1486:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var n=i(5893);i(7294);function r(e){var t=e.coursesTabs,i=e.activeTab,r=e.onTabChange;return(0,n.jsxs)("div",{className:"tabs",children:[t.map((function(e){return(0,n.jsxs)("div",{onClick:function(){return r(e.shortname)},className:"indicator tab tab-lifted ".concat(e.shortname===i&&"tab-active"),children:[e.shortname,e.unread>0&&(0,n.jsx)("div",{className:"badge ml-2 ".concat(e.shortname===i&&"badge-outline"),children:e.unread})]},e.shortname)})),(0,n.jsx)("div",{className:"flex-1 tab tab-lifted cursor-default"})]})}},2662:function(e,t,i){"use strict";i.d(t,{D:function(){return s}});var n=i(7294),r=i(8889);function s(){var e=n.useContext(r.g);if(void 0===e)throw new Error("useSkelefire must be used within a SkelefireProvider");return e}},8874:function(e,t,i){e.exports=function(){"use strict";var e={errors:{incompatible:"".concat("PushError:"," Push.js is incompatible with browser."),invalid_plugin:"".concat("PushError:"," plugin class missing from plugin manifest (invalid plugin). Please check the documentation."),invalid_title:"".concat("PushError:"," title of notification must be a string"),permission_denied:"".concat("PushError:"," permission request declined"),sw_notification_error:"".concat("PushError:"," could not show a ServiceWorker notification due to the following reason: "),sw_registration_error:"".concat("PushError:"," could not register the ServiceWorker due to the following reason: "),unknown_interface:"".concat("PushError:"," unable to create notification: unknown interface")}};function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),e}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var u=function(){function e(t){n(this,e),this._win=t,this.GRANTED="granted",this.DEFAULT="default",this.DENIED="denied",this._permissions=[this.GRANTED,this.DEFAULT,this.DENIED]}return s(e,[{key:"request",value:function(e,t){return arguments.length>0?this._requestWithCallback.apply(this,arguments):this._requestAsPromise()}},{key:"_requestWithCallback",value:function(e,t){var i,n=this,r=this.get(),s=!1,o=function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n._win.Notification.permission;s||(s=!0,void 0===i&&n._win.webkitNotifications&&(i=n._win.webkitNotifications.checkPermission()),i===n.GRANTED||0===i?e&&e():t&&t())};r!==this.DEFAULT?o(r):this._win.webkitNotifications&&this._win.webkitNotifications.checkPermission?this._win.webkitNotifications.requestPermission(o):this._win.Notification&&this._win.Notification.requestPermission?(i=this._win.Notification.requestPermission(o))&&i.then&&i.then(o).catch((function(){t&&t()})):e&&e()}},{key:"_requestAsPromise",value:function(){var e=this,t=this.get(),i=t!==this.DEFAULT,n=this._win.Notification&&this._win.Notification.requestPermission,r=this._win.webkitNotifications&&this._win.webkitNotifications.checkPermission;return new Promise((function(s,o){var c,a=!1,l=function(t){a||(a=!0,function(t){return t===e.GRANTED||0===t}(t)?s():o())};i?l(t):r?e._win.webkitNotifications.requestPermission((function(e){l(e)})):n?(c=e._win.Notification.requestPermission(l))&&c.then&&c.then(l).catch(o):s()}))}},{key:"has",value:function(){return this.get()===this.GRANTED}},{key:"get",value:function(){return this._win.Notification&&this._win.Notification.permission?this._win.Notification.permission:this._win.webkitNotifications&&this._win.webkitNotifications.checkPermission?this._permissions[this._win.webkitNotifications.checkPermission()]:navigator.mozNotification?this.GRANTED:this._win.external&&this._win.external.msIsSiteMode?this._win.external.msIsSiteMode()?this.GRANTED:this.DEFAULT:this.GRANTED}}]),e}(),h=function(){function e(){n(this,e)}return s(e,null,[{key:"isUndefined",value:function(e){return void 0===e}},{key:"isNull",value:function(e){return null===obj}},{key:"isString",value:function(e){return"string"==typeof e}},{key:"isFunction",value:function(e){return e&&"[object Function]"==={}.toString.call(e)}},{key:"isObject",value:function(e){return"object"===t(e)}},{key:"objectMerge",value:function(e,t){for(var i in t)e.hasOwnProperty(i)&&this.isObject(e[i])&&this.isObject(t[i])?this.objectMerge(e[i],t[i]):e[i]=t[i]}}]),e}(),f=function e(t){n(this,e),this._win=t},d=function(e){function t(){return n(this,t),l(this,c(t).apply(this,arguments))}return o(t,f),s(t,[{key:"isSupported",value:function(){return void 0!==this._win.Notification}},{key:"create",value:function(e,t){return new this._win.Notification(e,{icon:h.isString(t.icon)||h.isUndefined(t.icon)||h.isNull(t.icon)?t.icon:t.icon.x32,body:t.body,tag:t.tag,requireInteraction:t.requireInteraction})}},{key:"close",value:function(e){e.close()}}]),t}(),v=function(t){function i(){return n(this,i),l(this,c(i).apply(this,arguments))}return o(i,f),s(i,[{key:"isSupported",value:function(){return void 0!==this._win.navigator&&void 0!==this._win.navigator.serviceWorker}},{key:"getFunctionBody",value:function(e){var t=e.toString().match(/function[^{]+{([\s\S]*)}$/);return null!=t&&t.length>1?t[1]:null}},{key:"create",value:function(t,i,n,r,s){var o=this;this._win.navigator.serviceWorker.register(r),this._win.navigator.serviceWorker.ready.then((function(r){var c={id:t,link:n.link,origin:document.location.href,onClick:h.isFunction(n.onClick)?o.getFunctionBody(n.onClick):"",onClose:h.isFunction(n.onClose)?o.getFunctionBody(n.onClose):""};void 0!==n.data&&null!==n.data&&(c=Object.assign(c,n.data)),r.showNotification(i,{icon:n.icon,body:n.body,vibrate:n.vibrate,tag:n.tag,data:c,requireInteraction:n.requireInteraction,silent:n.silent}).then((function(){r.getNotifications().then((function(e){r.active.postMessage(""),s(e)}))})).catch((function(t){throw new Error(e.errors.sw_notification_error+t.message)}))})).catch((function(t){throw new Error(e.errors.sw_registration_error+t.message)}))}},{key:"close",value:function(){}}]),i}(),p=function(e){function t(){return n(this,t),l(this,c(t).apply(this,arguments))}return o(t,f),s(t,[{key:"isSupported",value:function(){return void 0!==this._win.navigator.mozNotification}},{key:"create",value:function(e,t){var i=this._win.navigator.mozNotification.createNotification(e,t.body,t.icon);return i.show(),i}}]),t}(),m=function(e){function t(){return n(this,t),l(this,c(t).apply(this,arguments))}return o(t,f),s(t,[{key:"isSupported",value:function(){return void 0!==this._win.external&&void 0!==this._win.external.msIsSiteMode}},{key:"create",value:function(e,t){return this._win.external.msSiteModeClearIconOverlay(),this._win.external.msSiteModeSetIconOverlay(h.isString(t.icon)||h.isUndefined(t.icon)?t.icon:t.icon.x16,e),this._win.external.msSiteModeActivate(),null}},{key:"close",value:function(){this._win.external.msSiteModeClearIconOverlay()}}]),t}(),b=function(e){function t(){return n(this,t),l(this,c(t).apply(this,arguments))}return o(t,f),s(t,[{key:"isSupported",value:function(){return void 0!==this._win.webkitNotifications}},{key:"create",value:function(e,t){var i=this._win.webkitNotifications.createNotification(t.icon,e,t.body);return i.show(),i}},{key:"close",value:function(e){e.cancel()}}]),t}();return new(function(){function t(e){n(this,t),this._currentId=0,this._notifications={},this._win=e,this.Permission=new u(e),this._agents={desktop:new d(e),chrome:new v(e),firefox:new p(e),ms:new m(e),webkit:new b(e)},this._configuration={serviceWorker:"/serviceWorker.min.js",fallback:function(e){}}}return s(t,[{key:"_closeNotification",value:function(t){var i=!0,n=this._notifications[t];if(void 0!==n){if(i=this._removeNotification(t),this._agents.desktop.isSupported())this._agents.desktop.close(n);else if(this._agents.webkit.isSupported())this._agents.webkit.close(n);else{if(!this._agents.ms.isSupported())throw i=!1,new Error(e.errors.unknown_interface);this._agents.ms.close()}return i}return!1}},{key:"_addNotification",value:function(e){var t=this._currentId;return this._notifications[t]=e,this._currentId++,t}},{key:"_removeNotification",value:function(e){var t=!1;return this._notifications.hasOwnProperty(e)&&(delete this._notifications[e],t=!0),t}},{key:"_prepareNotification",value:function(e,t){var i,n=this;return i={get:function(){return n._notifications[e]},close:function(){n._closeNotification(e)}},t.timeout&&setTimeout((function(){i.close()}),t.timeout),i}},{key:"_serviceWorkerCallback",value:function(e,t,i){var n=this,r=this._addNotification(e[e.length-1]);navigator&&navigator.serviceWorker&&(navigator.serviceWorker.addEventListener("message",(function(e){var t=JSON.parse(e.data);"close"===t.action&&Number.isInteger(t.id)&&n._removeNotification(t.id)})),i(this._prepareNotification(r,t))),i(null)}},{key:"_createCallback",value:function(e,t,i){var n,r=this,s=null;if(t=t||{},n=function(e){r._removeNotification(e),h.isFunction(t.onClose)&&t.onClose.call(r,s)},this._agents.desktop.isSupported())try{s=this._agents.desktop.create(e,t)}catch(n){var o=this._currentId,c=this.config().serviceWorker;this._agents.chrome.isSupported()&&this._agents.chrome.create(o,e,t,c,(function(e){return r._serviceWorkerCallback(e,t,i)}))}else this._agents.webkit.isSupported()?s=this._agents.webkit.create(e,t):this._agents.firefox.isSupported()?this._agents.firefox.create(e,t):this._agents.ms.isSupported()?s=this._agents.ms.create(e,t):(t.title=e,this.config().fallback(t));if(null!==s){var a=this._addNotification(s),l=this._prepareNotification(a,t);h.isFunction(t.onShow)&&s.addEventListener("show",t.onShow),h.isFunction(t.onError)&&s.addEventListener("error",t.onError),h.isFunction(t.onClick)&&s.addEventListener("click",t.onClick),s.addEventListener("close",(function(){n(a)})),s.addEventListener("cancel",(function(){n(a)})),i(l)}i(null)}},{key:"create",value:function(t,i){var n,r=this;if(!h.isString(t))throw new Error(e.errors.invalid_title);return n=this.Permission.has()?function(e,n){try{r._createCallback(t,i,e)}catch(e){n(e)}}:function(n,s){r.Permission.request().then((function(){r._createCallback(t,i,n)})).catch((function(){s(e.errors.permission_denied)}))},new Promise(n)}},{key:"count",value:function(){var e,t=0;for(e in this._notifications)this._notifications.hasOwnProperty(e)&&t++;return t}},{key:"close",value:function(e){var t;for(t in this._notifications)if(this._notifications.hasOwnProperty(t)&&this._notifications[t].tag===e)return this._closeNotification(t)}},{key:"clear",value:function(){var e,t=!0;for(e in this._notifications)this._notifications.hasOwnProperty(e)&&(t=t&&this._closeNotification(e));return t}},{key:"supported",value:function(){var e=!1;for(var t in this._agents)this._agents.hasOwnProperty(t)&&(e=e||this._agents[t].isSupported());return e}},{key:"config",value:function(e){return(void 0!==e||null!==e&&h.isObject(e))&&h.objectMerge(this._configuration,e),this._configuration}},{key:"extend",value:function(t){var i,n={}.hasOwnProperty;if(!n.call(t,"plugin"))throw new Error(e.errors.invalid_plugin);for(var r in n.call(t,"config")&&h.isObject(t.config)&&null!==t.config&&this.config(t.config),i=new(0,t.plugin)(this.config()))n.call(i,r)&&h.isFunction(i[r])&&(this[r]=i[r])}}]),t}())("undefined"!=typeof window?window:i.g)}()}}]);