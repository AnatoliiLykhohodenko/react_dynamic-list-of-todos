(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(2),l=c(1),i=(c(10),c(11),c(12),c(5)),d=c.n(i);function r(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var o=c(0),j=[],b=function(e){var t=e.setTodo,c=e.query,s=e.filterBy,a=e.setLoading,i=Object(l.useState)([]),b=Object(n.a)(i,2),u=b[0],h=b[1];return Object(l.useEffect)((function(){a(!0),r("/todos").then((function(e){j=e,h(e),a(!1)}))}),[]),Object(l.useMemo)((function(){c&&("all"===s&&h(j.filter((function(e){return e.title.includes(c)}))),"active"===s&&h(j.filter((function(e){return e.title.includes(c)&&!e.completed}))),"completed"===s&&h(j.filter((function(e){return e.title.includes(c)&&e.completed})))),c||("all"===s&&h(j),"active"===s&&h(j.filter((function(e){return!e.completed}))),"completed"===s&&h(j.filter((function(e){return e.completed}))))}),[c,s]),Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:u.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(o.jsx)("td",{className:"is-vcentered",children:e.id}),Object(o.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(o.jsx)("i",{className:"fas fa-check"})}),Object(o.jsx)("td",{className:"is-vcentered",children:Object(o.jsx)("p",{className:d()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return t(e)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})},u=function(e){var t=e.query,c=e.setQuery,s=e.setFilterBy;return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){s(e.target.value.toLocaleLowerCase())},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(o.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},h=(c(14),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})}),m=function(e){var t=e.todo,c=e.setTodo,s=Object(l.useState)({}),a=Object(n.a)(s,2),i=a[0],d=a[1],j=Object(l.useState)(!0),b=Object(n.a)(j,2),u=b[0],m=b[1];return Object(l.useEffect)((function(){var e;(e=t.userId,r("/users/".concat(e))).then((function(e){d(e),m(!1)}))}),[]),Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),u?Object(o.jsx)(h,{}):Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c({})}})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(o.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(o.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(o.jsx)("a",{href:"mailto:".concat(i.email),children:i.name})]})]})]})]})},O=function(){var e=Object(l.useState)({userId:0,id:0,title:"",completed:!1}),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(""),i=Object(n.a)(a,2),d=i[0],r=i[1],j=Object(l.useState)("all"),O=Object(n.a)(j,2),x=O[0],f=O[1],p=Object(l.useState)(!1),N=Object(n.a)(p,2),v=N[0],y=N[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Title"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(u,{query:d,setQuery:r,setFilterBy:f})}),Object(o.jsxs)("div",{className:"block",children:[v&&Object(o.jsx)(h,{}),Object(o.jsx)(b,{setTodo:s,query:d,filterBy:x,setLoading:y})]})]})})}),c.id&&Object(o.jsx)(m,{todo:c,setTodo:s})]})};a.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5f64ce83.chunk.js.map