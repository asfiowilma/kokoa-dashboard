(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8116:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(5893),s=r(7757),a=r.n(s),c=r(2137),i=r(7294),l=r(9669),o=r.n(l),u=r(9346);function d(e){var t=e.category,r=e.description,n=e.date,s=e.startTime,a=e.endTime,c=new Date(n),i=s.split(":"),l=a.split(":"),d={id:localStorage.getItem("strawberry_course_siasisten"),category:t,desc:r,day:c.getDate(),month:c.getMonth()+1,start_hour:i[0],start_min:i[1],end_hour:l[0],end_min:l[1]};return o().post("".concat(u.T,"/strawberry/quicklog/"),d)}function f(){var e=(0,i.useState)(!1),t=e[0],r=e[1],s=(0,i.useState)(0),l=s[0],o=s[1],u=(0,i.useState)(""),f=u[0],b=u[1],m=(0,i.useState)((new Date).toISOString().substr(0,10)),g=m[0],h=m[1],p=(0,i.useState)(),x=p[0],v=p[1],j=(0,i.useState)(),w=j[0],y=j[1],N=function(){var e=(0,c.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={category:l,description:f,date:g,startTime:x,endTime:w},r(!0),e.next=4,d(t);case 4:r(!1),O();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){o(0),h((new Date).toISOString().substr(0,10)),b(""),v(),y()};return(0,n.jsxs)("form",{onSubmit:N,className:"form-control flex flex-col gap-3",children:[(0,n.jsxs)("select",{onChange:function(e){return o(e.target.value)},value:l,className:"select select-bordered select-accent select-sm w-full max-w-xs",children:[(0,n.jsx)("option",{disabled:"disabled",value:0,children:"Category"}),["Asistensi/Tutorial","Mengoreksi","Mengawas","Persiapan Asistensi","Membuat soal/tugas","Rapat","Sit in Kelas","Pengembangan Materi","Pengembangan apps","Persiapan infra","Dokumentasi","Persiapan kuliah","Penunjang","Input Data"].map((function(e,t){return(0,n.jsx)("option",{value:t<3?t+1:t+2,children:e},t)}))]}),(0,n.jsx)("textarea",{onChange:function(e){return b(e.target.value)},value:f,className:"textarea h-24 textarea-bordered textarea-accent",placeholder:"Description"}),(0,n.jsx)("input",{type:"date",value:g,onChange:function(e){return h(e.target.value)},className:"input flex-1 input-accent input-sm input-bordered"}),(0,n.jsxs)("div",{className:"grid grid-cols-3 gap-2",children:[(0,n.jsx)("input",{value:x,onChange:function(e){return v(e.target.value)},type:"time",className:"input input-accent input-bordered pr-0"}),(0,n.jsx)("input",{value:w,onChange:function(e){return y(e.target.value)},type:"time",className:"input input-accent input-bordered pr-0"}),(0,n.jsx)("div",{className:"btn btn-accent ".concat(t&&"loading"),onClick:N,children:t?"wait":"submit"})]})]})}},2584:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Z}});var n=r(5893),s=r(9835),a=r(6156),c=r(7294),i=r(9598),l=r(7757),o=r.n(l),u=r(2137),d=r(4707),f=r(8874),b=r.n(f),m=function(){var e=(0,c.useContext)(i.g).setActivities;(0,c.useEffect)((function(){t()}),[]),(0,c.useEffect)((function(){var e=setInterval((function(){return t()}),9e5);return function(){return clearInterval(e)}}));var t=function(){var t=(0,u.Z)(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.ir)();case 2:return t.next=4,(0,d.az)();case 4:r=t.sent,e(r.data),r.data.length>0&&b().create("Skelefire",{body:"New updates found!",icon:"/kokoa-dashboard/kokoa-skelefire.png",onClick:function(){window.focus(),this.close()}});case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,n.jsx)("div",{className:"hidden"})};function g(){var e=(0,c.useContext)(i.g),t=e.skelefire,r=e.togglePower,s=t.isActive;return(0,n.jsxs)("div",{className:"alert bg-base-100 shadow-lg",children:[t.isActive&&(0,n.jsx)(m,{}),(0,n.jsx)("div",{className:"form-control w-full",children:(0,n.jsxs)("label",{htmlFor:"skelefire-toggle",className:"cursor-pointer label",children:[(0,n.jsxs)("span",{className:"label-text",children:["Skelefire"," ",(0,n.jsx)("div",{className:"badge ".concat(s?"badge-success":"badge-error"," ml-2 mr-auto"),children:s?"ON":"OFF"})]}),(0,n.jsx)("input",{id:"skelefire-toggle",type:"checkbox",readOnly:!0,onClick:function(){r()},checked:s,className:"toggle"})]})})]})}var h=r(18),p=r(2713),x=r(2562),v=r(1486),j=r(4168);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(){var e=(0,c.useState)("All"),t=e[0],r=e[1],s=(0,c.useState)([]),a=s[0],l=s[1],o=(0,c.useContext)(i.g),u=o.skelefire,d=o.countUnreadActivities;(0,c.useEffect)((function(){l(u.activities),d()}),[]),(0,c.useEffect)((function(){f(t),d()}),[u.activities]);var f=function(e){var t,n=(null===(t=u.courses.find((function(t){return t.shortname===e})))||void 0===t?void 0:t.courseID)||0;r(e),l(u.activities.filter((function(e){return!n||e.course===n})))},b=[{shortname:"All"}].concat((0,h.Z)(u.courses));return(0,n.jsxs)("div",{className:"md:col-span-2 flex flex-col gap-4",children:[(0,n.jsx)(j.Z,{}),(0,n.jsx)("div",{className:"flex-1 card bg-base-100 shadow-lg md:col-span-2 row-span-2",children:(0,n.jsxs)("div",{className:"card-body flex flex-col gap-3",children:[(0,n.jsx)(p.Z,{}),(0,n.jsx)(v.Z,y({},{coursesTabs:b,activeTab:t,onTabChange:f})),(0,n.jsx)(x.Z,{activities:a,isOverview:!0})]})})]})}var O=r(2585),k=r(8116);function S(){var e=(0,c.useState)(),t=e[0],r=e[1],s=(0,c.useState)(""),a=s[0],i=s[1],l=(0,c.useState)(""),o=l[0],u=l[1];return(0,c.useEffect)((function(){r("true"==localStorage.getItem("strawberry_is_working")),u(localStorage.getItem("strawberry_course_scele")||""),i(localStorage.getItem("strawberry_course_name")||"")}),[]),(0,n.jsx)("div",{className:"card shadow-lg bg-base-100",children:(0,n.jsxs)("div",{className:"card-body space-y-4",children:[(0,n.jsxs)("div",{className:"card-title flex justify-between",children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(O.CLk,{className:"w-6 h-6 mr-2"})," Strawberry"," "]}),t?(0,n.jsx)("a",{href:"https://scele.cs.ui.ac.id/course/view.php?id=".concat(o),target:"_blank",children:(0,n.jsx)("div",{class:"badge badge-accent",children:a})}):(0,n.jsx)("button",{className:"btn btn-sm btn-ghost",children:"refresh"})]}),(0,n.jsx)(k.Z,{})]})})}var P=r(7735);function _(e){var t=e.matkul;return(0,n.jsx)("div",{className:"card shadow-lg bg-base-100",children:(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsxs)("div",{className:"card-title flex justify-between",children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(P.Xkc,{className:"w-6 h-6 mr-2"})," Matcha"]}),(0,n.jsx)("button",{className:"btn btn-sm btn-ghost",children:"refresh"})]}),(0,n.jsx)("div",{className:"card bordered max-h-28 overflow-y-auto scrollbar scrollbar-hidden",children:(0,n.jsx)("table",{className:"table table-compact w-full text-center",children:(0,n.jsx)("tbody",{children:t.map((function(e,t){return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e}),(0,n.jsx)("td",{children:2===t?(0,n.jsx)("div",{className:"badge badge-secondary badge-sm",children:"not published"}):"101.92"}),(0,n.jsx)("td",{children:2===t?(0,n.jsx)("div",{className:"badge badge-accent badge-sm",children:"empty"}):"A"})]},t)}))})})})]})})}function C(){return(0,n.jsx)("div",{className:"card shadow-lg bg-base-100",children:(0,n.jsx)("div",{className:"card-body",children:(0,n.jsx)("div",{className:"card-title flex justify-between",children:(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(O.Omh,{className:"w-6 h-6 mr-2"})," Tiramisu"]})})})})}function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function T(){var e=(0,c.useContext)(i.g),t=e.skelefire,r=e.setCourses,s=e.setActivities;return(0,c.useEffect)((function(){0==t.courses.length&&(console.log("dashboard useeffects"),(0,d.Tw)().then((function(e){return r(e.data)})),(0,d.az)().then((function(e){return s(e.data)})))}),[]),(0,n.jsxs)("div",{className:"w-full grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[(0,n.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,n.jsx)(g,{}),(0,n.jsx)(S,{})]}),(0,n.jsx)(N,{}),(0,n.jsx)(_,E({},{matkul:["Gamedev","Gamedev","Gamedev","Gamedev","Gamedev","Gamedev"]})),(0,n.jsx)(C,{})]})}function Z(){return(0,n.jsx)(s.Z,{labelName:"sidebar",children:(0,n.jsx)(T,{})})}},8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2584)}])}},function(e){e.O(0,[980,415,260,617,876,885,841,603,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);