(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[859],{9835:function(e,r,s){"use strict";s.d(r,{Z:function(){return y}});var t=s(5893),n=(s(7294),s(9008));var i=s(6156),c=s(7375),a=s(1163),l=s(1664);function o(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),s.push.apply(s,t)}return s}function d(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?o(Object(s),!0).forEach((function(r){(0,i.Z)(e,r,s[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))}))}return e}function h(e){var r=e.href,s=e.exact,n=e.children,i=(0,c.Z)(e,["href","exact","children"]),o=(0,a.useRouter)().pathname;return(s?o===r:o.startsWith(r))&&(i.className+=" active"),(0,t.jsx)(l.default,{href:r,as:"/kokoa-dashboard"+r,children:(0,t.jsx)("a",d(d({},i),{},{children:n}))})}h.defaultProps={exact:!1};var x=s(8193),f=s(2585),u=s(7735),j=s(2662),m=s(117),b=s(471);function p(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),s.push.apply(s,t)}return s}function v(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?p(Object(s),!0).forEach((function(r){(0,i.Z)(e,r,s[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):p(Object(s)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))}))}return e}function w(){var e=(0,m.Ap)(),r=e.sidebar,s=e.dispatch,n=function(e){return s({type:"set_expanded",payload:e})};return r.isExpanded?(0,t.jsx)(N,v({},{setExpanded:n})):(0,t.jsx)(g,v({},{setExpanded:n}))}function N(e){var r=e.setExpanded,s=(0,j.D)().skelefire;return(0,t.jsxs)("div",{className:"flex flex-col h-full bg-base-100 rounded-box shadow-lg transition transform origin-top-left",children:[(0,t.jsxs)("ul",{className:"flex-1 menu rounded-box p-4 w-72 overflow-y-auto ",children:[(0,t.jsx)("li",{children:(0,t.jsxs)(h,{href:"/",exact:!0,children:[(0,t.jsx)(x.V9Z,{className:"w-6 h-6 mr-2"})," Dashboard"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(h,{href:"/settings",exact:!0,children:[(0,t.jsx)(x.xRF,{className:"w-6 h-6 mr-2"})," Settings"]})}),(0,t.jsx)("li",{className:"menu-title mt-4 mb-1",children:(0,t.jsx)("span",{children:"Notifiers"})}),(0,t.jsx)("li",{children:(0,t.jsxs)(h,{href:"/skelefire",exact:!0,children:[(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)(f.qVT,{className:"w-6 h-6 mr-2"})," Skelefire"]}),s.activities.length>0&&(0,t.jsx)("div",{className:"ml-auto badge border-none badge-accent bg-neutral-content",children:s.activities.length})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(h,{href:"/strawberry",exact:!0,children:[(0,t.jsx)(f.CLk,{className:"w-6 h-6 mr-2"})," Strawberry"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(h,{href:"/matcha",exact:!0,children:[(0,t.jsx)(u.Xkc,{className:"w-6 h-6 mr-2"})," Matcha"]})}),(0,t.jsx)("li",{className:"menu-title mt-4 mb-1",children:(0,t.jsx)("span",{children:"Apps"})}),(0,t.jsx)("li",{children:(0,t.jsxs)(h,{href:"/tiramisu",exact:!0,children:[(0,t.jsx)(f.Omh,{className:"w-6 h-6 mr-2"}),"Tiramisu"]})})]}),(0,t.jsxs)("div",{onClick:function(){return r(!1)},className:"btn btn-ghost flex items-center justify-between m-4",children:[(0,t.jsx)("div",{children:"collapse sidebar"})," ",(0,t.jsx)(b.oMI,{className:"w-6 h-6"})]})]})}function g(e){var r=e.setExpanded,s=(0,j.D)().skelefire;return(0,t.jsxs)("div",{className:"flex flex-col h-full bg-base-100 rounded-box shadow-lg transform origin-top-left",children:[(0,t.jsxs)("ul",{className:"flex-1 menu rounded-box overflow-y-auto",children:[(0,t.jsx)("li",{children:(0,t.jsx)(h,{href:"/",exact:!0,children:(0,t.jsx)(x.V9Z,{className:"w-6 h-6 mt-2"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(h,{href:"/settings",exact:!0,children:(0,t.jsx)(x.xRF,{className:"w-6 h-6"})})}),(0,t.jsx)("div",{className:"divider my-0"}),(0,t.jsx)("li",{children:(0,t.jsx)(h,{href:"/skelefire",exact:!0,children:(0,t.jsxs)("div",{className:"indicator",children:[(0,t.jsx)(f.qVT,{className:"w-6 h-6"}),s.activities.length>0&&(0,t.jsx)("div",{className:"indicator-item ml-auto badge border-none badge-accent bg-neutral-content",children:s.activities.length})]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(h,{href:"/strawberry",exact:!0,children:(0,t.jsx)(f.CLk,{className:"w-6 h-6"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(h,{href:"/matcha",exact:!0,children:(0,t.jsx)(u.Xkc,{className:"w-6 h-6"})})}),(0,t.jsx)("div",{className:"divider my-0"}),(0,t.jsx)("li",{children:(0,t.jsx)(h,{href:"/tiramisu",exact:!0,children:(0,t.jsx)(f.Omh,{className:"w-6 h-6"})})})]}),(0,t.jsx)("div",{onClick:function(){return r(!0)},className:"btn btn-ghost rounded-box",children:(0,t.jsx)(b.i9j,{className:"w-6 h-6"})})]})}var O=s(8279);function y(e){var r=e.children;return(0,t.jsxs)("div",{children:[(0,t.jsxs)(n.default,{children:[(0,t.jsx)("title",{children:"Kokoa"}),(0,t.jsx)("link",{rel:"icon",href:"/kokoa-dashboard/kokoa-favicon.png"})]}),(0,t.jsxs)("div",{className:"flex flex-col items-center w-full min-h-screen h-screen bg-neutral",children:[(0,t.jsxs)("div",{className:"w-full flex-1 flex px-4 md:px-8 pt-4 md:pt-8",children:[(0,t.jsx)("aside",{className:"relative",children:(0,t.jsx)(w,{})}),(0,t.jsx)("div",{className:"flex-1 flex flex-col items-center pl-0 md:pl-6 overflow-auto scrollbar scrollbar-hidden",style:{maxHeight:"calc(100vh - 4rem)"},children:(0,t.jsx)("main",{className:"flex w-full flex-1 items-start",children:r})})]}),(0,t.jsx)(O.x7,{position:"bottom-right",toastOptions:{success:{className:"alert alert-success"},error:{style:{background:"red"}}}}),(0,t.jsx)("footer",{className:"flex items-center justify-center w-full h-8 ",children:"\xa9 Caramel Lyth"})]})]})}},8522:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return i}});var t=s(5893),n=s(9835);function i(){return(0,t.jsx)(n.Z,{children:"this is Siak"})}},2662:function(e,r,s){"use strict";s.d(r,{D:function(){return i}});var t=s(7294),n=s(8889);function i(){var e=t.useContext(n.g);if(void 0===e)throw new Error("useSkelefire must be used within a SkelefireProvider");return e}},6425:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/matcha",function(){return s(8522)}])}},function(e){e.O(0,[980,415,617,955,841,774,888,179],(function(){return r=6425,e(e.s=r);var r}));var r=e.O();_N_E=r}]);