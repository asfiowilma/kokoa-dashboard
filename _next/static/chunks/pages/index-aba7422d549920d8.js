(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(166)}])},985:function(e,s,t){"use strict";var a=t(5893),n=t(3990),c=t(9295),i=t(6267),l=t(7848);let r=e=>{let{isDashboard:s}=e,{stats:t,setStats:r}=(0,i.G)(),{isLoading:o}=(0,l.a)({queryKey:["stats"],queryFn:c.m$,onSuccess:e=>{r(e)}});return o?(0,a.jsx)("div",{className:"col-span-1 md:col-span-3 card shadow-lg bg- bg-base-300 animate-pulse md:card-normal",children:(0,a.jsx)("div",{className:"card-body grid place-items-center",children:(0,a.jsx)(n.crq,{className:"animate-spin w-8 h-8"})})}):(0,a.jsx)("div",{className:"".concat(s?"":"order-first"," col-span-1 md:col-span-3 card shadow-lg bg-base-100 md:card-normal"),children:(0,a.jsxs)("div",{className:"card-body flex flex-col ".concat(s?"":"lg:flex-row lg:items-center"," gap-2 md:gap-4"),children:[(0,a.jsxs)("div",{className:"flex-1 md:flex-none card-title flex items-center gap-2",children:[(0,a.jsx)(n.fvE,{})," Overall Progress"]}),(0,a.jsxs)("p",{className:"text-stone-400",children:["BYOC is ",((null==t?void 0:t.completed)/(null==t?void 0:t.total)*100).toFixed(2),"% complete!"]}),(0,a.jsx)("progress",{className:"flex-none ".concat(s?"":"lg:flex-1"," w-full progress progress-success bg-base-300 h-6"),value:(null==t?void 0:t.completed)/(null==t?void 0:t.total)}),(0,a.jsxs)("p",{className:"text-right -mt-8 mr-4 z-10 md:m-0",children:[null==t?void 0:t.completed,"/",null==t?void 0:t.total," tasks completed"]})]})})};s.Z=r},9082:function(e,s,t){"use strict";t.d(s,{Z:function(){return d}});var a=t(5893),n=t(7294),c=t(8562),i=t(6501),l=t(7536),r=t(1188);let o=["Asistensi/Tutorial","Mengoreksi","Mengawas","Persiapan Asistensi","Membuat soal/tugas","Rapat","Sit in Kelas","Pengembangan Materi","Pengembangan apps","Persiapan infra","Dokumentasi","Persiapan kuliah","Penunjang","Input Data"];function d(){let{register:e,handleSubmit:s,reset:t}=(0,l.cI)(),{activeCourse:d}=(0,r.Z)(),[u,m]=(0,n.useState)(!1),p=e=>{m(!0),(0,c.m1)({...e,id:d}).then(()=>{t(),i.ZP.success("We here to DROP SOME MONEY\uD83D\uDCB0\uD83D\uDCB5")}).catch(e=>i.ZP.error(e.message)).finally(()=>m(!1))};return(0,a.jsxs)("form",{onSubmit:s(p),className:"form-control flex flex-col gap-3",children:[(0,a.jsxs)("select",{className:"select bg-stone-800 select-sm w-full",...e("category"),children:[(0,a.jsx)("option",{disabled:!0,value:0,children:"Category"}),o.map((e,s)=>(0,a.jsx)("option",{value:s<3?s+1:s+2,children:e},s))]}),(0,a.jsx)("textarea",{...e("description"),className:"textarea h-24 bg-stone-800",placeholder:"Description"}),(0,a.jsx)("input",{type:"date",...e("date"),className:"input flex-1 input-sm bg-stone-800"}),(0,a.jsxs)("div",{className:"grid grid-cols-3 gap-2",children:[(0,a.jsx)("input",{...e("startTime"),type:"time",className:"input bg-stone-800 pr-2"}),(0,a.jsx)("input",{...e("endTime"),type:"time",className:"input bg-stone-800 pr-2"}),(0,a.jsx)("button",{type:"submit",className:"btn btn-accent ".concat(u&&"loading"),children:u?"":"submit"})]})]})}},166:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return b}});var a=t(5893),n=t(3780),c=t(7294),i=t(3014),l=t(5191),r=t(9869),o=t(4291),d=t(9121);function u(){let[e,s]=(0,c.useState)("All"),[t,n]=(0,c.useState)([]),{courses:u,activities:m,countUnreadActivities:p}=(0,d.D)();(0,c.useEffect)(()=>{n(m),p()},[]),(0,c.useEffect)(()=>{f(e),p()},[m]);let f=e=>{var t;let a=(null===(t=u.find(s=>s.shortname===e))||void 0===t?void 0:t.courseID)||0;s(e),n(m.filter(e=>!a||e.course===a))};var g=[{shortname:"All"},...u];return(0,a.jsxs)("div",{className:"md:col-span-2 lg:row-span-2 flex flex-col gap-4",children:[(0,a.jsx)(r.Z,{}),(0,a.jsx)("div",{className:"flex-1 card bg-base-100 shadow-lg md:col-span-2 row-span-2",children:(0,a.jsxs)("div",{className:"card-body flex flex-col gap-3",children:[(0,a.jsx)(i.Z,{}),(0,a.jsx)(o.Z,{coursesTabs:g,activeTab:e,onTabChange:f}),(0,a.jsx)(l.Z,{filteredActivities:t,isOverview:!0})]})})]})}var m=t(985),p=t(2585),f=t(9082),g=t(1188);function h(){let{courseData:e,activeCourse:s,setActiveCourse:t}=(0,g.Z)(),[n,i]=(0,c.useState)();return(0,c.useEffect)(()=>{i(e.find(e=>e.id==s))},[s]),(0,a.jsx)("div",{className:"card shadow-lg bg-base-100",children:(0,a.jsxs)("div",{className:"card-body space-y-4",children:[(0,a.jsxs)("div",{className:"card-title flex justify-between",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(p.CLk,{className:"w-6 h-6 mr-2"})," Strawberry"," "]}),(0,a.jsx)("a",{href:"https://scele.cs.ui.ac.id/course/view.php?id=".concat(null==n?void 0:n.sceleId),target:"_blank",children:(0,a.jsx)("div",{className:"badge badge-accent",children:null==n?void 0:n.name})})]}),(0,a.jsxs)("select",{name:"activeCourse",defaultValue:s.toString(),onChange:e=>t(parseInt(e.target.value)),className:"bg-neutral select mb-4",children:[(0,a.jsx)("option",{value:"",disabled:!0,children:"Select course"}),e.map(e=>(0,a.jsx)("option",{value:e.id,children:e.name},e.id))]}),(0,a.jsx)(f.Z,{})]})})}function x(){let{courses:e,setCourses:s,setActivities:t}=(0,d.D)();return(0,c.useEffect)(()=>{0==e.length&&(console.log("dashboard useeffects"),(0,n.Tw)().then(e=>s(e.data)),(0,n.az)().then(e=>t(e.data)))},[]),(0,a.jsxs)("div",{className:"w-full grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,a.jsx)(h,{}),(0,a.jsx)(m.Z,{isDashboard:!0})]}),(0,a.jsx)(u,{})]})}var v=t(366);function b(){return(0,a.jsx)(v.Z,{children:(0,a.jsx)(x,{})})}},9295:function(e,s,t){"use strict";t.d(s,{vr:function(){return f},q$:function(){return o},w_:function(){return d},Mp:function(){return u},m$:function(){return m},xJ:function(){return p}});var a=t(9669),n=t.n(a),c=t(4955),i=n().create({baseURL:c.T5,headers:{"Content-type":"application/json"}}),l=t(6501);let r=e=>(l.Am.error(e.message),null);async function o(){return await i.get("/biscotti/specializations/").then(e=>e.data).catch(e=>r(e))}async function d(e){return await i.get("/biscotti/courses/?specialization=".concat(e)).then(e=>e.data).catch(e=>r(e))}async function u(e){return i.get("/biscotti/modules/?course=".concat(e)).then(e=>e.data).catch(e=>r(e))}async function m(){return await i.get("/biscotti/tasks/stats").then(e=>e.data).catch(e=>r(e))}async function p(e,s){return await i.patch("/biscotti/tasks/".concat(e,"/"),{is_completed:s}).then(e=>e.data).catch(e=>r(e))}async function f(e){return await i.post("/biscotti/tasks/",e).then(e=>e.data).catch(e=>r(e))}},6267:function(e,s,t){"use strict";t.d(s,{G:function(){return c}});var a=t(4529),n=t(4466);let c=(0,a.Ue)()((0,n.tJ)((e,s)=>({specializations:[],courses:[],modules:[],activeSpecialization:null,activeCourse:null,stats:null,setActiveSpecialization:s=>e({activeSpecialization:s}),setActiveCourse:s=>e({activeCourse:s}),setSpecializations:s=>e({specializations:s}),setCourses:s=>e({courses:s}),setModules:s=>e({modules:s}),setStats:s=>e({stats:s}),addTask:(t,a)=>{let n=s().modules.find(e=>e.id==a);n.tasks=[...n.tasks,t],e({stats:{...s().stats,total:s().stats.total+1,incomplete:s().stats.incomplete+1},modules:s().modules.map(e=>e.id==a?n:e)})},toggleCompleteTask:(t,a,n)=>{let c=s().modules.find(e=>e.id==a);c.tasks=c.tasks.map(e=>e.id==t?{...e,is_completed:n}:e),e({stats:{...s().stats,completed:s().stats.completed+(n?1:-1),incomplete:s().stats.incomplete+(n?-1:1)},modules:s().modules.map(e=>e.id==a?c:e)})}}),{name:"biscotti-storage"}))},1188:function(e,s,t){"use strict";var a=t(4529),n=t(4466);let c=(0,a.Ue)()((0,n.tJ)((e,s)=>({courseData:[],activeCourse:0,isWorking:!0,setCourseData:s=>e({courseData:s}),addCourseData:t=>e({...s(),courseData:[...s().courseData,t]}),removeCourseData:t=>e({courseData:s().courseData.filter(e=>e.id!=t)}),setActiveCourse:s=>e({activeCourse:s}),setIsWorking:s=>e({isWorking:s})}),{name:"strawberry-storage"}));s.Z=c}},function(e){e.O(0,[980,617,955,609,885,876,987,536,848,691,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);