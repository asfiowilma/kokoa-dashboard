(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{9835:function(e,s,r){"use strict";r.d(s,{Z:function(){return N}});var a=r(5893),n=r(7294),l=r(9008),t=r(155);function i(e){var s=e.sidebarLabel;return(0,a.jsxs)("div",{className:"navbar w-full mb-4 px-0 lg:px-4 shadow-lg bg-base-100 text-base-content rounded-box shadow-lg",children:[(0,a.jsx)("div",{className:"flex-none flex lg:hidden drawer-button",children:(0,a.jsx)("label",{htmlFor:s,className:"btn btn-square btn-ghost",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block w-6 h-6 stroke-current",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})}),(0,a.jsxs)("div",{className:"navbar-center flex-1 mx-1 invisible sm:visible",children:[(0,a.jsx)("img",{src:"/kokoa-dashboard/kokoa-logo.png",alt:"kokoa",className:"h-10 w-10 mr-2"}),(0,a.jsx)("span",{className:"text-lg font-bold",children:"Kokoa"})]}),(0,a.jsx)("div",{className:"flex-none ",children:(0,a.jsx)("button",{className:"btn btn-square btn-ghost",children:(0,a.jsx)(t.bI9,{className:"inline-block w-6 h-6 stroke-current"})})}),(0,a.jsx)("div",{className:"flex-none",children:(0,a.jsx)("div",{className:"avatar",children:(0,a.jsx)("div",{className:"rounded-full w-10 h-10 m-1",children:(0,a.jsx)("img",{src:"/kokoa-dashboard/avatar.png"})})})})]})}var c=r(6156),o=r(7375),d=r(1163),h=r(1664);function x(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),r.push.apply(r,a)}return r}function m(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{};s%2?x(Object(r),!0).forEach((function(s){(0,c.Z)(e,s,r[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))}))}return e}function u(e){var s=e.href,r=e.exact,n=e.children,l=(0,o.Z)(e,["href","exact","children"]),t=(0,d.useRouter)().pathname;return(r?t===s:t.startsWith(s))&&(l.className+=" active"),(0,a.jsx)(h.default,{href:s,as:"/kokoa-dashboard"+s,children:(0,a.jsx)("a",m(m({},l),{},{children:n}))})}u.defaultProps={exact:!1};var f=r(8193),j=r(2585),b=r(7735),w=r(9598);function p(){var e=(0,n.useContext)(w.g).skelefire;return(0,a.jsxs)("ul",{className:"menu p-4 overflow-y-auto w-80 bg-base-100 rounded-box shadow-lg",children:[(0,a.jsx)("li",{children:(0,a.jsxs)(u,{href:"/",exact:!0,children:[(0,a.jsx)(f.V9Z,{className:"w-6 h-6 mr-2"})," Dashboard"]})}),(0,a.jsx)("li",{children:(0,a.jsxs)(u,{href:"/settings",exact:!0,children:[(0,a.jsx)(f.xRF,{className:"w-6 h-6 mr-2"})," Settings"]})}),(0,a.jsx)("li",{className:"menu-title mt-4 mb-1",children:(0,a.jsx)("span",{children:"Notifiers"})}),(0,a.jsx)("li",{children:(0,a.jsxs)(u,{href:"/skelefire",exact:!0,children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(j.qVT,{className:"w-6 h-6 mr-2"})," Skelefire"]}),e.activities.length>0&&(0,a.jsx)("div",{className:"ml-auto badge border-none badge-accent bg-neutral-content",children:e.activities.length})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)(u,{href:"/strawberry",exact:!0,children:[(0,a.jsx)(j.CLk,{className:"w-6 h-6 mr-2"})," Strawberry"]})}),(0,a.jsx)("li",{children:(0,a.jsxs)(u,{href:"/matcha",exact:!0,children:[(0,a.jsx)(b.Xkc,{className:"w-6 h-6 mr-2"})," Matcha"]})}),(0,a.jsx)("li",{className:"menu-title mt-4 mb-1",children:(0,a.jsx)("span",{children:"Apps"})}),(0,a.jsx)("li",{children:(0,a.jsxs)(u,{href:"/tiramisu",exact:!0,children:[(0,a.jsx)(j.Omh,{className:"w-6 h-6 mr-2"}),"Tiramisu"]})})]})}var v=r(8279);function N(e){var s=e.children,r=e.labelName;return(0,a.jsxs)("div",{children:[(0,a.jsxs)(l.default,{children:[(0,a.jsx)("title",{children:"Kokoa"}),(0,a.jsx)("link",{rel:"icon",href:"/kokoa-dashboard/kokoa-favicon.png"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center w-full min-h-screen h-screen bg-neutral",children:[(0,a.jsxs)("div",{className:"w-full flex-1 drawer drawer-mobile px-4 md:px-8 pt-4 md:pt-8",children:[(0,a.jsx)("input",{id:r,type:"checkbox",className:"drawer-toggle"}),(0,a.jsxs)("div",{className:"drawer-content flex flex-col items-center pl-0 md:pl-6 scrollbar scrollbar-hidden",children:[(0,a.jsx)(i,{sidebarLabel:r}),(0,a.jsx)("main",{className:"flex w-full flex-1 items-start",children:s})]}),(0,a.jsxs)("div",{className:"drawer-side",children:[(0,a.jsx)("label",{htmlFor:r,className:"drawer-overlay"}),(0,a.jsx)(p,{})]})]}),(0,a.jsx)(v.x7,{position:"bottom-right",toastOptions:{success:{className:"alert alert-success"},error:{style:{background:"red"}}}}),(0,a.jsx)("footer",{className:"flex items-center justify-center w-full h-8 ",children:"\xa9 Caramel Lyth"})]})]})}},4705:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return l}});var a=r(5893),n=r(9835);function l(){return(0,a.jsx)(n.Z,{labelName:"sidebar",children:"this is Tiramisu"})}},8653:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tiramisu",function(){return r(4705)}])}},function(e){e.O(0,[980,415,260,617,841,774,888,179],(function(){return s=8653,e(e.s=s);var s}));var s=e.O();_N_E=s}]);