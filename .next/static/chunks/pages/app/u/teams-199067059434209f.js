(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[700],{6612:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/u/teams",function(){return s(9408)}])},1305:function(e,t,s){"use strict";s.d(t,{Z:function(){return f}});var a=s(1438),n=s(2951),r=s(8029),i=s(6042),l=s(9396),o=s(6567),c=s(5893),d=s(7294),m={chart:{type:"donut",foreColor:"#d4d7dc"},dataLabels:{enabled:!1},plotOptions:{pie:{expandOnClick:!1,donut:{labels:{show:!0,value:{show:!0,fontSize:"16px",fontFamily:"Helvetica, Arial, sans-serif",fontWeight:400,offsetY:1,formatter:function(e){return e}},total:{show:!0,label:"Total",fontSize:"14px",formatter:function(e){return e.globals.seriesTotals.reduce(function(e,t){return e+t},0)}}}}}},stroke:{show:!1,width:0},datasets:[{borderColor:["#ffff"]},],responsive:[{breakpoint:480,options:{chart:{width:250},legend:{position:"bottom"}}},]},u=s(5152),x=s.n(u)()(function(){return Promise.all([s.e(279),s.e(229)]).then(s.bind(s,7229))},{loadableGenerated:{webpack:function(){return[7229]}},ssr:!1}),f=function(e){(0,r.Z)(s,e);var t=(0,o.Z)(s);function s(e){var n;return(0,a.Z)(this,s),n=t.call(this,e),console.log(e.Tickets),n.state={series:[e.Tickets.todo,e.Tickets.inProgress,e.Tickets.done,e.Tickets.resolved,e.Tickets.tested,e.Tickets.hold,],options:(0,l.Z)((0,i.Z)({},m),{labels:["Todo","In-progress","Done","Resolved","Tested","Hold"]})},n}return(0,n.Z)(s,[{key:"render",value:function(){return(0,c.jsxs)("div",{className:"donut bg-gray-800 p-2 rounded-lg flex flex-col justify-center items-center",children:[(0,c.jsx)("p",{className:"text-gray-400 font-semibold text-sm",children:"Tickets"}),(0,c.jsx)(x,{options:this.state.options,series:this.state.series,labels:this.state.labels,type:"donut"})]})}}]),s}(d.Component)},5905:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var a=s(5893);function n(e){var t=e.type,s=void 0===t?"projects":t,n=e.title,r=e.description,i=e.data,l=void 0===i?[]:i,o=e.setFilteredData,c=void 0===o?[]:o,d=function(e){var t=e.target.value;"projects"==s&&c(l.filter(function(e){return e.project_name.toLowerCase().includes(t.toLowerCase())})),"teams"==s?c(l.filter(function(e){return e.team_name.toLowerCase().includes(t.toLowerCase())})):"employees"===s&&c(l.filter(function(e){return e.first_name.toLowerCase().includes(t.toLowerCase())||e.last_name.toLowerCase().includes(t.toLowerCase())}))};return(0,a.jsxs)("div",{className:"Search-module",children:[(0,a.jsxs)("div",{className:"Search-contents",children:[(0,a.jsx)("h1",{className:"font-semibold text-xl opacity-80",children:void 0===n?"SEARCH":n}),(0,a.jsx)("p",{className:"text-sm opacity-60 mt-1",children:void 0===r?"Take a dive in to the project and its attributes. Find anything you are looking for in this project":r})]}),(0,a.jsxs)("div",{className:"Search-bar bg-gray-900 py-2 border-2 border-black rounded-md flex flex-row justify-between items-center px-4 mt-4",children:[(0,a.jsx)("input",{placeholder:"Search ".concat(s,"..."),type:"text",className:"bg-transparent md:w-4/6 sm:w-[8rem] w-[8rem] focus:outline-0",onChange:d}),(0,a.jsxs)("button",{className:"bg-primary py-2 px-3 rounded-md",children:[(0,a.jsxs)("p",{className:"sm:flex hidden",children:["Find in “",s,"”"]}),(0,a.jsx)("p",{className:"sm:hidden flex",children:"Search"})]})]})]})}s(7294)},1072:function(e,t,s){"use strict";s.d(t,{Z:function(){return x}});var a=s(7568),n=s(655),r=s(5893),i=s(2453),l=s(1290),o=s(7294),c=s(5636),d=s(381),m=s.n(d),u=s(7597);function x(e){var t,s=e.projectId,d=void 0===s?null:s,x=e.teamId,f=void 0===x?null:x,h=e.isNewEmployee,p=e.setisNewEmployee,j=e.setIsTicketInfo,y=(0,o.useState)([]),g=y[0],v=y[1],w=(0,o.useState)(!1),b=w[0],N=w[1],T=(t=(0,a.Z)(function(){return(0,n.__generator)(this,function(e){switch(e.label){case 0:if(N(!0),!d)return[3,2];return[4,(0,c.D6)(d).then(function(e){e.data?(N(!1),v(e.data.result)):(console.log(e),N(!1),i.ZP.error("Error while fetching project tickets!"))})];case 1:return e.sent(),[3,4];case 2:if(!f)return[3,4];return[4,(0,c.GV)(f).then(function(e){e.data?(N(!1),v(e.data.result)):(console.log(e),N(!1),i.ZP.error("Error while fetching team tickets!"))})];case 3:e.sent(),e.label=4;case 4:return[2]}})}),function(){return t.apply(this,arguments)});return(0,o.useEffect)(function(){h&&(T(),p(!1))},[h]),(0,o.useEffect)(function(){T()},[]),(0,r.jsx)("div",{className:"flex flex-col justify-center items-center -mt-4",children:(0,r.jsx)("div",{className:"project_employees_data_table w-full",children:(0,r.jsx)(l.Z,{columns:[{title:"Title",width:150,render:function(e,t){var s=t.title,a=t.id;return(0,r.jsx)("div",{className:"underline cursor-pointer",onClick:function(){return j({id:a})},children:(0,r.jsx)("h1",{children:s})})},key:"title"},{title:"Description",dataIndex:"description",width:300,key:"description"},{title:"Project",render:function(e,t){var s=t.project;return(0,r.jsx)(u.Z,{title:s.project_name,type:"secondry",size:"md"})},key:"projectId"},{title:"Team",render:function(e,t){var s=t.team;return(0,r.jsx)(u.Z,{title:s.team_name,type:"pOrange",size:"md"})},key:"teamId"},{title:"Assigned to",render:function(e,t){var s=t.employee;return(0,r.jsx)(u.Z,{title:s.first_name+" "+s.last_name,type:"base",size:"md"})},key:"AssignedTo"},{title:"Status",render:function(e,t){var s=t.TicketStatus;return(0,r.jsx)("h1",{children:s.title})},key:"TicketStatus"},{title:"Piority",render:function(e,t){var s=t.TicketPiority;return(0,r.jsx)("h1",{children:s.title})},key:"TicketStatus"},{title:"Deadline",render:function(e,t){var s=t.deadline;return(0,r.jsx)("h1",{children:m()(s).format("MMMM Do YYYY")})},key:"Deadline"},],dataSource:g,scroll:{x:1e3},className:"rounded-none",style:{borderRadius:"0 !impotant"},loading:b})})})}},9408:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return et}});var a=s(7568),n=s(655),r=s(5893),i=s(2453),l=s(6477),o=s(2181),c=s(5737),d=s(6275),m=s(7294),u=s(1163),x=s(471),f=s(1649),h=s(5905),p=s(3588),j=s(5636),y=s(7597);function g(e){var t=e.teamName,s=void 0===t?"Team Name":t,a=e.tagTitle,n=e.employeesCount,i=void 0===n?"000":n,l=e.ticketsCount,o=void 0===l?"000":l;return(0,r.jsxs)("div",{className:"h-44 w-full md:w-96 bg-gray-900 rounded-md shadow-sm p-6 flex flex-col justify-between",children:[(0,r.jsxs)("div",{className:"flex flex-row",children:[(0,r.jsx)("div",{className:"team-main-Image rounded-lg w-14 h-14 bg-gray-700 flex justify-center items-center",children:(0,r.jsx)("h1",{className:"font-bold text-5xl",children:s[0]})}),(0,r.jsxs)("div",{className:"projects-container-main-info ml-3",children:[(0,r.jsx)("h4",{className:"pb-1 text-xl font-semibold",children:s}),(0,r.jsx)("div",{className:"team-tags flex flex-row",children:(0,r.jsx)(y.Z,{title:void 0===a?"Software Dev":a,type:"intermediate"})})]})]}),(0,r.jsxs)("div",{className:"team-attributes flex flex-row justify-evenly",children:[(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)("h1",{className:"text-secondry font-bold text-2xl",children:0==i?"000":i}),(0,r.jsx)("p",{className:"text-sm opacity-80",children:"Members"})]}),(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)("h1",{className:"text-intermediate font-bold text-2xl",children:0==o?"000":o}),(0,r.jsx)("p",{className:"text-sm opacity-80",children:"Tickets"})]})]})]})}function v(){return(0,r.jsxs)("div",{className:"animate-pulse h-44 w-full md:w-96 bg-gray-700 rounded-md shadow-sm p-6 flex flex-col justify-between",children:[(0,r.jsxs)("div",{className:"flex flex-row",children:[(0,r.jsx)("div",{className:"rounded-lg w-14 h-14 bg-gray-600 flex justify-center items-center"}),(0,r.jsxs)("div",{className:"teams-container-main-info ml-3",children:[(0,r.jsx)("h4",{className:"pb-1 text-xl font-semibold h-6 w-32 rounded-md bg-gray-600"}),(0,r.jsx)("div",{className:"teams-tags flex flex-row",children:(0,r.jsx)("h4",{className:"mt-4 text-xl font-semibold h-4 w-24 rounded-md bg-gray-600"})})]})]}),(0,r.jsxs)("div",{className:"projects-attributes flex flex-row justify-between",children:[(0,r.jsx)("div",{className:"flex flex-col items-center",children:(0,r.jsx)("div",{className:"rounded-lg w-20 h-10 bg-gray-600 flex justify-center items-center"})}),(0,r.jsx)("div",{className:"flex flex-col items-center",children:(0,r.jsx)("div",{className:"rounded-lg w-20 h-10 bg-gray-600 flex justify-center items-center"})}),(0,r.jsx)("div",{className:"flex flex-col items-center",children:(0,r.jsx)("div",{className:"rounded-lg w-20 h-10 bg-gray-600 flex justify-center items-center"})})]})]})}var w=s(5788),b=s(7516),N=s(9832),T=s(3299),Z=s(3838),k=s(603),C=s(442),_=s(2831),S=s(7527);function E(e){var t=function(t){e.setTeamName(t.team_name),e.setProjectSelected(t.team_project),e.setCreationPhase(1)},s=(0,k.Z)(C.Z.useForm(),1)[0];return(0,r.jsx)("div",{className:"w-full",children:(0,r.jsxs)(C.Z,{form:s,layout:"vertical",name:"create team - part 1",onFinish:t,style:{width:"100%"},scrollToFirstError:!0,children:[(0,r.jsx)(C.Z.Item,{name:"team_name",label:"Team's Name",rules:[{required:!0,message:"Please enter valid Team name"},{min:5,message:"Team name must be atleast 5 characters long!"},{whitespace:!0,message:"Team name must be atleast 1 non-whitespace character!"},],children:(0,r.jsx)(_.Z,{placeholder:"Enter a Team name",value:e.teamName})}),(0,r.jsx)(C.Z.Item,{name:"team_project",label:"Team's Project",rules:[{required:!0,message:"Please select a Team project!"},],children:(0,r.jsx)(S.Z,{placeholder:"Select a project for the team",children:e.projects.map(function(e){return(0,r.jsx)(S.Z.Option,{value:e.id,children:e.project_name},e.id)})})}),(0,r.jsx)("button",{className:"bg-primary h-12 p-2 rounded-md flex flex-row justify-center items-center w-full text-lg font-semibold mt-4 disabled:opacity-50",disabled:e.loading,children:(0,r.jsx)("p",{children:"Next"})})]})})}function P(e){var t=function(t){e.setTeamDetails(t.team_description),e.setTeamDomainSelected(t.team_domain),e.setIsSubmitted(!0)},s=(0,k.Z)(C.Z.useForm(),1)[0];return(0,r.jsx)("div",{className:"w-full",children:(0,r.jsxs)(C.Z,{form:s,layout:"vertical",name:"create Team - part 2",onFinish:t,style:{width:"100%"},scrollToFirstError:!0,disabled:e.loading,children:[(0,r.jsx)(C.Z.Item,{name:"team_domain",label:"Team Domain",rules:[{required:!0,message:"Please select a Team Domain!"},],children:(0,r.jsx)(S.Z,{placeholder:"Select your a domain for the team",children:e.teamDomains.map(function(e){return(0,r.jsx)(S.Z.Option,{value:e.id,children:e.title},e.id)})})}),(0,r.jsx)(C.Z.Item,{name:"team_description",label:"Team Description",rules:[{required:!0,message:"Please enter valid Team description"},{min:5,message:"Team description must be atleast 5 characters long!"},{whitespace:!0,message:"Team description must be atleast 1 non-whitespace character!"},],children:(0,r.jsx)(_.Z,{placeholder:"Enter a Team description"})}),(0,r.jsx)("button",{className:"bg-primary h-12 p-2 rounded-md flex flex-row justify-center items-center w-full text-lg font-semibold mt-4 disabled:opacity-50",disabled:e.loading,children:e.loading?(0,r.jsxs)("svg",{class:"animate-spin -ml-1 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,r.jsx)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),(0,r.jsx)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):(0,r.jsx)("p",{children:"Create Team"})})]})})}function I(e){var t=(0,T.useSession)(),s=t.data;t.status;var a=(0,m.useState)(!1),n=a[0],l=a[1],o=(0,m.useState)(null),c=o[0],d=o[1],u=(0,m.useState)(null),x=u[0],f=u[1],h=(0,m.useState)(null),y=h[0],g=h[1],v=(0,m.useState)(null),k=v[0],C=v[1],_=(0,m.useState)(0),S=_[0],I=_[1],F=(0,m.useState)([]),z=F[0],D=F[1],A=(0,m.useState)([]),q=A[0],M=A[1],L=(0,m.useState)(!1),R=L[0],H=L[1],O=function(){var t={team_name:c,description:x,team_domain_id:y,project_id:k,user_id:s.user.id};console.log("Team Payload: ",t),(0,j.Cm)(t).then(function(t){console.log("Create:",t),(null==t?void 0:t.error)?(i.ZP.error("Team Creation failed!"),l(!1)):(i.ZP.success("Team Created successfully!"),e.setIsCreateTeam(!1),e.setIsRefreshTeams(!0))})};return(0,m.useEffect)(function(){l(!0),(0,j.YH)().then(function(e){console.log("Team Domains: ",e.data),D(e.data),l(!1)}),l(!0),(0,j.Yw)().then(function(e){console.log("Projects: ",e.data),M(e.data),l(!1)})},[]),(0,m.useEffect)(function(){R&&(I(2),l(!0),O(),H(!1))},[R]),(0,r.jsxs)("div",{className:"create-team-container h-full w-full fixed overflow-hidden top-0 left-0 flex justify-center items-start",children:[(0,r.jsx)(Z.E.div,{initial:{y:-100,opacity:0},animate:{y:0,opacity:1},transition:{duration:.15},className:"flex flex-col items-center z-10 w-full",children:(0,r.jsxs)("div",{className:"w-11/12 md:w-[25rem] lg:w-[35rem] mt-20 ",children:[(0,r.jsxs)("div",{className:"flex flex-col items-center p-6 bg-gray-900 rounded-md",children:[(0,r.jsxs)("div",{className:"create-project-header flex flex-row justify-between w-full mb-6",children:[1==S||2==S?(0,r.jsxs)("button",{className:"back-btn flex flex-row items-center opacity-60 hover:opacity-100",onClick:function(){return I(0)},children:[(0,r.jsx)(b.YiX,{size:18}),(0,r.jsx)("h1",{className:"ml-2",children:"Back"})]}):(0,r.jsx)(r.Fragment,{}),(0,r.jsx)("h1",{className:"font-bold text-lg"}),(0,r.jsx)("button",{className:"cancel-btn opacity-60 hover:opacity-100",onClick:function(){return e.setIsCreateTeam(!1)},children:(0,r.jsx)(w.ySC,{size:24})})]}),(0,r.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,r.jsx)("svg",{width:"123",height:"97",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsxs)("g",{fill:"none","fill-rule":"evenodd",children:[(0,r.jsx)("circle",{fill:"#7B67EE",cx:"61.5",cy:"56.5",r:"39.5"}),(0,r.jsx)("path",{d:"M54.57 17.6A39.5 39.5 0 0 0 88.44 85.4 39.5 39.5 0 1 1 54.56 17.6z",fill:"#6C5AD4"}),(0,r.jsx)("path",{d:"M22.25 49.42a39.89 39.89 0 0 0-.54 10.1c-2.55 2.88-3.67 5.68-3.01 8.16 2.2 8.19 23.14 9.7 46.77 3.36 23.64-6.34 41.02-18.11 38.83-26.3-.73-2.74-3.57-4.73-7.9-5.93a39.65 39.65 0 0 0-5.3-7.98c17.32-.7 29.74 2.67 31.64 9.76 3.04 11.32-21.92 27.84-55.75 36.9C33.17 86.57 3.3 84.74.26 73.42c-1.88-7 6.96-16 21.99-24z",fill:"#C1B6FF",opacity:".4"}),(0,r.jsx)("path",{d:"M22 50.97a39.7 39.7 0 0 0-.2 1.54C12.4 58.61 7.24 65.1 8.66 70.37c2.7 10.11 28.57 11.97 57.76 4.15 29.19-7.82 50.65-22.36 47.94-32.47-1.46-5.45-9.64-8.5-21.45-8.94-.26-.36-.54-.72-.82-1.08 15.21-.26 25.97 2.95 27.68 9.36 2.89 10.77-20.86 26.49-53.03 35.11-32.18 8.62-60.6 6.88-63.5-3.89C1.55 66.3 9.04 58.26 22 50.97zm-.32 3.13c-.05.72-.07 1.45-.08 2.18-5.35 4.38-8.05 8.78-7.05 12.5 2.4 9 25.38 10.64 51.3 3.7 25.94-6.95 45.01-19.87 42.6-28.85-1.05-3.94-6.05-6.47-13.52-7.48-.36-.6-.74-1.2-1.13-1.77 9.9.72 16.67 3.57 17.95 8.36 2.58 9.62-17.83 23.44-45.58 30.88-27.76 7.44-52.35 5.67-54.92-3.95-1.24-4.6 2.81-10.19 10.43-15.57z",fill:"#C1B6FF",opacity:".4"}),(0,r.jsx)("circle",{fill:"#B4A7FF",cx:"34.5",cy:"29.5",r:"12.5"}),(0,r.jsx)("path",{d:"M29.45 18.06a12.5 12.5 0 0 0 15.1 18.88 12.5 12.5 0 1 1-15.1-18.88z",fill:"#9A8CED"}),(0,r.jsx)("path",{d:"M104.72 6.72l1.84-5.24a1 1 0 0 1 1.88 0l1.84 5.24 5.24 1.84a1 1 0 0 1 0 1.88l-5.24 1.84-1.84 5.24a1 1 0 0 1-1.88 0l-1.84-5.24-5.24-1.84a1 1 0 0 1 0-1.88l5.24-1.84zM75.93 4.93l.63-1.8a1 1 0 0 1 1.88 0l.63 1.8 1.8.63a1 1 0 0 1 0 1.88l-1.8.63-.63 1.8a1 1 0 0 1-1.88 0l-.63-1.8-1.8-.63a1 1 0 0 1 0-1.88l1.8-.63zM17.78 92.78l.28-.8a1 1 0 0 1 1.88 0l.28.8.8.28a1 1 0 0 1 0 1.88l-.8.28-.28.8a1 1 0 0 1-1.88 0l-.28-.8-.8-.28a1 1 0 0 1 0-1.88l.8-.28z",fill:"#E6E2FF"})]})}),(0,r.jsx)("h1",{className:"font-bold text-xl my-4",children:"Create a new Team"})]}),(0,r.jsx)(p.Z,{width:"w-full"}),(0,r.jsx)("div",{className:"w-full my-4",children:0==S?(0,r.jsx)(E,{setTeamName:d,teamName:c,setCreationPhase:I,loading:n,projects:q,setProjectSelected:C}):(0,r.jsx)(P,{loading:n,setTeamDetails:f,setCreationPhase:I,teamDomains:z,setTeamDomainSelected:g,setIsSubmitted:H})})]}),(0,r.jsx)("div",{className:"w-full flex justify-center items-center mt-8",children:(0,r.jsx)(N.Z,{current:S,labelPlacement:"vertical",items:[{title:"Name"},{title:"Details"},{title:"Create"},]})})]})}),(0,r.jsx)(Z.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},className:"h-full w-full bg-black bg-opacity-75 absolute top-0 left-0 z-0"})]})}var F=s(8193),z=s(1290),D=s(381),A=s.n(D),q=s(3802);function M(e){var t,s=e.teamId,l=e.isNewEmployee,o=e.setisNewEmployee,d=e.setIsEmployeeProfile,u=e.ownerId,x=(0,m.useState)(),f=x[0],h=x[1],p=(0,m.useState)(!1),y=p[0],g=p[1],v=(t=(0,a.Z)(function(){return(0,n.__generator)(this,function(e){switch(e.label){case 0:return g(!0),[4,(0,j.qs)(s).then(function(e){var t=e.result;console.log("TeamEmployeesData:",t),t&&g(!1),h(t)})];case 1:return e.sent(),[2]}})}),function(){return t.apply(this,arguments)}),w=function(e){(0,j.oZ)(e,s,u).then(function(e){console.log(e),e.error?i.ZP.error("Error while removing employee from team!"):(v(),i.ZP.success("Sucessfully removed employee from Team!"))})},b=function(e){console.log(e),i.ZP.error("Click on No")};return(0,m.useEffect)(function(){l&&(v(),o(!1))},[l]),(0,m.useEffect)(function(){v()},[]),(0,r.jsx)("div",{className:"flex flex-col justify-center items-center -mt-4",children:(0,r.jsx)("div",{className:"project_employees_data_table w-full",children:(0,r.jsx)(z.Z,{columns:[{title:"Name",width:100,render:function(e,t){var s=t.first_name,a=t.last_name,n=t.id;return(0,r.jsx)("div",{className:"underline cursor-pointer",onClick:function(){return d({id:n})},children:(0,r.jsxs)("h1",{children:[s," ",a]})})},key:"name",fixed:"left"},{title:"Age",width:100,dataIndex:"date_of_birth",key:"age",sorter:!0,render:function(e,t){var s=t.date_of_birth,a=A()().diff(s,"years",!1);return(0,r.jsxs)("p",{children:[a," years"]})}},{title:"Gender",dataIndex:"gender",key:"gender"},{title:"Email",dataIndex:"email",key:"email"},{title:"Phone Number",dataIndex:"phone_number",key:"phone_number"},{title:"Designation",dataIndex:"designation",render:function(e,t){var s=t.Designation;return(0,r.jsx)("div",{children:(0,r.jsx)("h1",{children:s.title})})}},{title:"Expertise",dataIndex:"expertise",key:"expertise"},{title:"Action",key:"id",width:100,render:function(e,t){var s=t.id;return(0,r.jsx)(q.Z,{grantPermissionFor:"manage_teams",children:(0,r.jsx)(c.Z,{title:"Remove Employee from project",description:"Are you sure to remove this employee from projectorate?",onConfirm:function(){w(s)},onCancel:b,okText:"Confirm",cancelText:"No",placement:"topLeft",children:(0,r.jsx)("button",{className:"p-2 bg-red-500 rounded-md text-sm text-white",children:"Remove"})})})}},],dataSource:f,scroll:{x:1e3},className:"rounded-t-none",loading:y})})})}var L=s(629),R=s(9327),H=s(7106);function O(e){var t=function(t){(0,j.uw)(e.teamId,t,e.ownerId).then(function(t){console.log(t),t.error?404==t.error.data.error?i.ZP.error("Project, team or employee not found!"):403==t.error.data.error&&i.ZP.warning("Employee is already assigned to this project!"):(i.ZP.success("Employee Sucessfully Added to the Team!"),e.setAssignEmployeesPanel(!1),e.setisNewEmployee(!0))})},s=function(){},a=(0,m.useState)(!1),n=a[0],l=a[1],o=(0,m.useState)([]),d=o[0],u=o[1];return(0,m.useEffect)(function(){l(!0),(0,j.lU)(e.projectId).then(function(e){e.error?(l(!1),i.ZP.error("Some error occoured while fetching project employees!")):(u(e.result),l(!1),console.log(e.result))})},[]),(0,r.jsxs)(L.Z,{title:"Assign Employee",onClose:function(){return e.setAssignEmployeesPanel(!1)},open:e.assignEmployeesPanel,bodyStyle:{paddingBottom:80},children:[(0,r.jsx)("h1",{className:"opacity-50 mb-4",children:"Note: Only the employees which are added in to project of this team are allowed to assign. If you want to add another employee to this team, first add him/her to this teams project!"}),(0,r.jsx)(p.Z,{color:"bg-gray-600",width:"w-full",opacity:"opacity-1"}),(0,r.jsxs)("div",{className:"mt-4 search-results",children:[n?(0,r.jsx)("div",{className:"w-full flex flex-col justify-center items-center",children:(0,r.jsxs)("svg",{class:"animate-spin -ml-1 h-10 w-10 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,r.jsx)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),(0,r.jsx)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}):0==d.length?(0,r.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,r.jsx)(H.hlP,{size:100}),(0,r.jsx)("h1",{children:"No employees found in project!"})]}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("h1",{className:"mb-4 font-bold text-lg",children:"Available Employees"})}),d.map(function(e,a){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"employee-card flex flex-row justify-between items-center py-4 px-4 mb-2 bg-gray-800 bg-opacity-50 rounded-lg border-2 border-gray-600",children:[(0,r.jsxs)("div",{className:"flex flex-row justify-center items-center",children:[(0,r.jsx)("div",{className:"bg-gray-600 bg-opacity-50 rounded-md h-14 w-14 flex justify-center items-center",children:(0,r.jsx)("p",{className:"font-extrabold text-2xl opacity-40",children:e.first_name[0]})}),(0,r.jsxs)("div",{className:"ml-2",children:[(0,r.jsxs)("h1",{className:"font-semibold text-lg",children:[e.first_name," ",e.last_name]}),(0,r.jsxs)("h1",{className:"m-0 text-md",children:["@",e.email]})]})]}),(0,r.jsx)(c.Z,{title:"Are you sure you want to add ".concat(e.first_name," to this project?"),onConfirm:function(){return t(e.id)},onCancel:s,okText:"Confirm",cancelText:"No",placement:"topLeft",children:(0,r.jsx)("button",{className:"bg-primary py-1 px-2 rounded-md flex flex-row justify-center items-center",children:(0,r.jsx)(R.s7o,{size:26})})})]},e.id+a)})})]})]})}var Y=s(1026),B=s(5936),U=s(1072),V=s(7153),X=s(9146),G=s(6042),K=s(9396);function Q(e){var t=e.teamInformation,s=e.setIsUpdateTeam,a=function(e){d(!0);var a=(0,K.Z)((0,G.Z)({},e),{id:t.id,user_id:l.user.id});(0,j.fo)(a).then(function(e){console.log(e),e.data?(i.ZP.success("Team updated Sucessfully!"),s(!1),d(!1)):(i.ZP.error("Team update Failed!"),d(!1))})},n=(0,T.useSession)(),l=n.data;n.status;var o=(0,m.useState)(!1),c=o[0],d=o[1],u=(0,m.useState)([]),x=u[0],f=u[1],h=(0,k.Z)(C.Z.useForm(),1)[0];return(0,m.useEffect)(function(){d(!0),(0,j.YH)().then(function(e){f(e.data),d(!1)})},[]),(0,r.jsx)("div",{className:"md:ml-4",children:(0,r.jsxs)(C.Z,{form:h,layout:"vertical",name:"create team",onFinish:a,style:{width:"100%"},scrollToFirstError:!0,disabled:c,children:[(0,r.jsx)(C.Z.Item,{name:"team_name",rules:[{required:!0,message:"Please enter valid team name"},{min:5,message:"Team name must be atleast 5 characters long!"},{whitespace:!0,message:"Team name must be atleast 1 non-whitespace character!"},],children:(0,r.jsx)(_.Z,{placeholder:"Enter a team name",defaultValue:t.team_name})}),(0,r.jsx)(C.Z.Item,{name:"team_domain_id",rules:[{required:!0,message:"Please select a team Domain!"},],children:(0,r.jsx)(S.Z,{placeholder:"Select your a domain for the team",children:x.map(function(e){return(0,r.jsx)(S.Z.Option,{value:e.id,children:e.title},e.id)})})}),(0,r.jsx)(C.Z.Item,{name:"description",rules:[{required:!0,message:"Please enter valid team description"},{min:5,message:"Team description must be atleast 5 characters long!"},{whitespace:!0,message:"Team description must be atleast 1 non-whitespace character!"},],children:(0,r.jsx)(_.Z,{placeholder:"Enter a Team description",defaultValue:t.description})}),(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("button",{className:"bg-white bg-opacity-10 hover:bg-opacity-20 transition-all w-24 h-10 p-2 mr-2 rounded-md flex flex-row justify-center items-center text-lg font-semibold mt-4 disabled:opacity-50",onClick:function(){return s(!1)},children:(0,r.jsx)("p",{children:"Cancel"})}),(0,r.jsx)("button",{className:"bg-primary w-24 h-10 p-2 rounded-md flex flex-row justify-center items-center text-lg font-semibold mt-4 disabled:opacity-50",disabled:c,children:c?(0,r.jsxs)("svg",{class:"animate-spin -ml-1 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,r.jsx)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),(0,r.jsx)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):(0,r.jsx)("p",{children:"Update"})})]})]})})}var W=s(1305),$=s(3854),J=s(5266),ee=["Employees","Tickets"];function et(){var e,t,s=function(e){el(e),_.push({pathname:"/app/u/teams",query:{teamId:e.id,teamName:e.name},shallow:!0})},b=function(){el(null),ed(null),_.replace({query:void 0,shallow:!0})},N=function(){(0,j.ps)(ei.id,eO.user.id).then(function(e){e.error?i.ZP.error("Error deleting Team!"):(i.ZP.success("Team Sucessfully deleted!"),b())})},Z=function(){},k=function(e){return R.find(function(t){return t.id==e})},C=function(e){eZ(e)},_=(0,u.useRouter)(),S=(0,m.useState)([]),E=S[0],P=S[1],z=(0,m.useState)([]),D=z[0],A=z[1],L=(0,m.useState)([]),R=L[0],H=L[1],G=(0,m.useState)(!1),K=G[0],et=G[1],es=(0,m.useState)(!1),ea=es[0],en=es[1],er=(0,m.useState)(null),ei=er[0],el=er[1],eo=(0,m.useState)(),ec=eo[0],ed=eo[1],em=(0,m.useState)(!1),eu=em[0],ex=em[1],ef=(0,m.useState)(!1),eh=ef[0],ep=ef[1],ej=(0,m.useState)(!1),ey=ej[0],eg=ej[1],ev=(0,m.useState)(!1),ew=ev[0],eb=ev[1],eN=(0,m.useState)(1),eT=eN[0],eZ=eN[1],ek=(0,m.useState)(!1),eC=ek[0],e_=ek[1],eS=(0,m.useState)({id:null}),eE=eS[0],eP=eS[1],eI=(0,m.useState)(!1),eF=eI[0],ez=eI[1],eD=(0,m.useState)(!0),eA=eD[0],eq=eD[1],eM=(0,m.useState)(null),eL=eM[0],eR=eM[1],eH=(0,T.useSession)(),eO=eH.data;function eY(){return(eY=(0,a.Z)(function(){var e,t;return(0,n.__generator)(this,function(e){switch(e.label){case 0:return eq(!0),[4,(0,j.YH)()];case 1:return H(e.sent().data),eq(!1),[2]}})})).apply(this,arguments)}eH.status,(0,m.useEffect)(function(){eB(),function(){eY.apply(this,arguments)}()},[]);var eB=(e=(0,a.Z)(function(){return(0,n.__generator)(this,function(e){switch(e.label){case 0:return eq(!0),[4,(0,j.qX)().then(function(e){P(e.data),A(e.data),et(!1),eq(!1)})];case 1:return e.sent(),[2]}})}),function(){return e.apply(this,arguments)});return(0,m.useEffect)(function(){K&&eB()},[K]),(0,m.useState)(function(){_.query.teamId&&_.query.teamName&&!ey&&(eg(!0),el({id:_.query.teamId,name:_.query.teamName}),(0,j.pH)(_.query.teamId).then(function(e){e.error?(404==e.error.error&&i.ZP.error("Team not found!"),b()):(eR(e.Tickets),ed(e.data))}))},[_.query,ey]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(J.S5,{}),(0,r.jsx)(q.Z,{grantPermissionFor:"manage_tickets",children:(0,r.jsxs)("div",{className:"absolute z-[999] bottom-4 right-4 flex flex-col items-end",children:[ew?(0,r.jsx)(Y.Z,{setIsCreateTicket:eb}):(0,r.jsx)(r.Fragment,{}),(0,r.jsx)("div",{className:"Create-ticket",onClick:function(){return eb(!0)},children:(0,r.jsx)(B.Z,{})})]})}),(0,r.jsxs)("div",{className:"teams",children:[(0,r.jsxs)("header",{className:"flex flex-row items-center justify-between border-b-2 border-b-gray-900 px-4 py-2 relative",children:[(0,r.jsxs)("div",{className:"flex flex-row items-center",children:[(0,r.jsx)("div",{className:"teams-panel-icon mr-3",children:(0,r.jsx)(F.PQz,{size:26})}),(0,r.jsx)("h1",{className:"text-lg font-bold hidden sm:flex",children:"Teams Panel"})]}),(0,r.jsx)("div",{className:"absolute -bottom-0 left-16 sm:left-48",children:ei?(0,r.jsxs)("div",{className:"border-x-2 border-t-2 border-gray-900 bg-gray-900 rounded-t-md px-4 py-2 flex flex-row justify-between items-center",children:[(0,r.jsx)("p",{children:ei.name}),(0,r.jsx)("div",{className:"ml-4 opacity-30 hover:opacity-100 transition-all cursor-pointer",onClick:function(){return b()},children:(0,r.jsx)(w.ySC,{size:14})})]}):(0,r.jsx)(r.Fragment,{})}),(0,r.jsx)("div",{className:"flex flex-row items-center",children:ei?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(q.Z,{grantPermissionFor:"manage_teams",children:(0,r.jsx)(l.Z,{placement:"bottom",title:"Create a new project in your company and add a workforce",mouseEnterDelay:.05,children:(0,r.jsxs)("button",{className:"bg-secondry mr-2 py-1 px-3 rounded-md flex flex-row justify-center items-center",onClick:function(){en(!0)},children:[(0,r.jsx)(f.gyF,{size:26}),(0,r.jsx)("p",{children:"Create Team"})]})})})})]}),ei&&ec?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(O,{assignEmployeesPanel:eh,setAssignEmployeesPanel:ep,setisNewEmployee:ex,projectId:ec.project.id,teamId:ei.id,ownerId:null==eO?void 0:eO.user.id}),(0,r.jsx)("div",{className:"".concat(ei.name,"-project bg-gray-900 bg-opacity-60"),children:(0,r.jsxs)("div",{className:"py-10 flex flex-col sm:flex-row justify-between sm:items-start px-3 sm:px-6",children:[(0,r.jsxs)("div",{className:"flex flex-row justify-start items-start",children:[(0,r.jsx)("div",{className:"bg-gray-700 md:flex hidden lg:h-52 lg:w-52 md:h-32 md:w-32 h-24 w-24 rounded-lg flex justify-center items-center",children:(0,r.jsx)("p",{className:"font-extrabold lg:text-[10rem] md:text-6xl text-3xl opacity-40",children:ei.name[0].toUpperCase()})}),eF?(0,r.jsx)(Q,{teamInformation:ec,setIsUpdateTeam:ez}):(0,r.jsxs)("div",{className:"flex flex-col justify-center sm:ml-4",children:[(0,r.jsxs)("h1",{className:"text-3xl font-bold text-secondry ",children:[null==ec?void 0:ec.team_name.toUpperCase()," |"," ",null==ec?void 0:ec.project.project_name.toUpperCase()]}),(0,r.jsx)("p",{className:"font-medium mt-2 text-sm md:text-md lg:text-lg sm:w-32 lg:w-96 md:w-32 w-full",children:null==ec?void 0:ec.description}),(0,r.jsx)("div",{className:"mt-2",children:(0,r.jsx)(y.Z,{title:null===(t=k(null==ec?void 0:ec.teamDomainsId))||void 0===t?void 0:t.title,type:"intermediate",size:"md"})}),(0,r.jsxs)("div",{className:"flex mt-3",children:[(0,r.jsxs)("div",{className:"bg-gray-800 px-3 py-1 flex justify-center items-center rounded-md",children:[(0,r.jsx)($.Otr,{}),(0,r.jsx)("p",{className:"ml-2 opacity-80",children:ec._count.UserTeams})]}),(0,r.jsxs)("div",{className:"ml-3 bg-gray-800 px-3 py-1 flex justify-center items-center rounded-md",children:[(0,r.jsx)($.Kaj,{}),(0,r.jsx)("p",{className:"ml-2 opacity-80",children:ec._count.Tickets})]})]}),(0,r.jsx)("div",{className:"mt-3 opacity-50",children:"Estimated completion: 16/05/2025"})]})]}),(0,r.jsxs)("div",{className:"flex flex-col item-start sm:items-end",children:[(0,r.jsx)(q.Z,{grantPermissionFor:"manage_teams",children:(0,r.jsxs)("div",{className:"project-actions flex flex-row mt-4 sm:mt-0",children:[(0,r.jsx)(l.Z,{placement:"topRight",title:"Add employees to work on this team",mouseEnterDelay:.05,children:(0,r.jsx)("button",{className:"bg-white bg-opacity-10 hover:bg-opacity-25 transition-all mr-2 p-2 rounded-lg flex flex-row justify-center items-center",onClick:function(){return ep(!0)},children:(0,r.jsx)(F.Zev,{size:24})})}),(0,r.jsx)(l.Z,{placement:"topRight",title:"Edit this team",mouseEnterDelay:.05,children:(0,r.jsx)("button",{className:"".concat(eF?"bg-primary":"bg-white bg-opacity-10 hover:bg-opacity-25","  transition-all mr-2 p-2 rounded-lg flex flex-row justify-center items-center"),onClick:function(){return ez(!eF)},children:(0,r.jsx)(F.$iz,{size:24})})}),(0,r.jsx)(l.Z,{placement:"topRight",title:"Remove this team",mouseEnterDelay:.05,children:(0,r.jsx)(c.Z,{title:"Remove Team from Projectorate?",description:"Are you sure to remove this team? ",onConfirm:function(){N(ei.id)},onCancel:Z,okText:"Confirm",cancelText:"No",placement:"bottomLeft",children:(0,r.jsx)("button",{className:"bg-white bg-opacity-10 hover:bg-opacity-25 transition-all mr-2 p-2 rounded-lg flex flex-row justify-center items-center",children:(0,r.jsx)(x.Fuw,{size:24})})})})]})}),(0,r.jsx)("div",{className:"project-statistics mt-3",children:(0,r.jsx)(W.Z,{Tickets:eL})})]})]})}),(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)(d.Z,{defaultActiveKey:"1",type:"card",size:32,onChange:function(e){C(e)},items:ee.map(function(e,t){var s=String(t+1);return{label:"".concat(e),key:s}})})}),1==eT?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(X.Z,{isEmployeeProfile:eE,setIsEmployeeProfile:eP}),(0,r.jsx)(M,{teamId:ei.id,isNewEmployee:eu,setisNewEmployee:ex,setIsEmployeeProfile:eP,ownerId:null==eO?void 0:eO.user.id})]}):2==eT?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(V.Z,{isTicketInfo:eC,setIsTicketInfo:e_}),(0,r.jsx)(U.Z,{teamId:ei.id,isNewEmployee:eu,setisNewEmployee:ex,setIsTicketInfo:e_})]}):(0,r.jsx)(r.Fragment,{})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"Search-Teams-section px-4 my-4",children:(0,r.jsx)(h.Z,{title:"SEARCH TEAMS",type:"teams",description:"Take a dive in to the teams and its attributes. Find anything you are looking for in this team",data:E,setFilteredData:A})}),(0,r.jsx)(p.Z,{color:"bg-gray-900",width:"w-full",opacity:"opacity-1"}),(0,r.jsxs)("div",{className:"All-teams-stack mt-4 px-4",children:[(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("h1",{className:"font-bold text-xl",children:"ALL TEAMS"}),(0,r.jsx)("p",{className:"text-sm opacity-60 mt-1",children:"Projectorate."})]}),(0,r.jsxs)("div",{className:"Projects py-4",children:[eA||0!=D.length?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)("div",{className:"w-full flex justify-center items-center",children:(0,r.jsx)(o.ZP,{status:"404",title:"No teams found!",subTitle:"Could not found teams, please create new team for your in your workspace."})}),(0,r.jsx)("div",{class:"inline-grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-4 w-full",children:K&&eA?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v,{}),(0,r.jsx)(v,{}),(0,r.jsx)(v,{}),(0,r.jsx)(v,{}),(0,r.jsx)(v,{}),(0,r.jsx)(v,{})]}):D.map(function(e){var t;return(0,r.jsx)("div",{className:"team_container cursor-pointer",onClick:function(){s({name:e.team_name,id:e.id})},children:(0,r.jsx)(g,{teamName:e.team_name,employeesCount:e._count.UserTeams,ticketsCount:e._count.Tickets,tagTitle:null===(t=k(e.teamDomainsId))||void 0===t?void 0:t.title})},e.id)})})]})]}),ea?(0,r.jsx)(I,{setIsRefreshTeams:et,setIsCreateTeam:en}):(0,r.jsx)(r.Fragment,{})]})]})]})}}},function(e){e.O(0,[874,955,57,90,907,442,483,838,385,312,512,774,888,179],function(){return e(e.s=6612)}),_N_E=e.O()}]);