(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{21:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(15),a=t.n(c),i=(t(21),t(3)),u=t(4),o=t(2),s=function(e){var n=e.name,t=e.number,c=e.remove;return Object(r.jsx)("div",{children:Object(r.jsxs)("p",{children:[n," ",t,Object(r.jsx)("button",{onClick:c,children:"remove"})]})})},d=function(e){var n=e.filter,t=e.handleFilterChange;return Object(r.jsxs)("div",{children:["Filter: ",Object(r.jsx)("input",{value:n,onChange:t})]})},l=function(e){var n=e.handleSubmit,t=e.newName,c=e.handleNameChange,a=e.newNumber,i=e.handleNumberChange;return Object(r.jsxs)("form",{onSubmit:n,children:[Object(r.jsxs)("div",{children:["name: ",Object(r.jsx)("input",{value:t,onChange:c})]}),Object(r.jsxs)("div",{children:["number: ",Object(r.jsx)("input",{value:a,onChange:i})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"add"})})]})},b=function(e){var n=e.noti;return null===(null===n||void 0===n?void 0:n.message)?null:Object(r.jsx)("div",{className:(null===n||void 0===n?void 0:n.err)?"error":"noti",children:null===n||void 0===n?void 0:n.message})},j=t(5),m=t.n(j),h="/api/persons",f=function(){return m.a.get(h).then((function(e){return e.data}))},O=function(e){return m.a.post(h,e).then((function(e){return e.data}))},v=function(e){return m.a.put("".concat(h,"/").concat(e.id),e).then((function(e){return e.data}))},g=function(e){m.a.delete("".concat(h,"/").concat(e))},x=function(){var e=Object(o.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],a=Object(o.useState)(""),j=Object(u.a)(a,2),m=j[0],h=j[1],x=Object(o.useState)(""),p=Object(u.a)(x,2),w=p[0],C=p[1],N=Object(o.useState)(""),S=Object(u.a)(N,2),k=S[0],y=S[1],L=Object(o.useState)({message:null,error:!1}),F=Object(u.a)(L,2),T=F[0],A=F[1];Object(o.useEffect)((function(){f().then((function(e){return c(e)}))}),[]);var E=t.filter((function(e){return e.name.toLocaleLowerCase().includes(k.toLocaleLowerCase())}));return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(b,{noti:T}),Object(r.jsx)(d,{filter:k,handleFilterChange:function(e){y(e.target.value)}}),Object(r.jsx)("h3",{children:"Add a new"}),Object(r.jsx)(l,{handleSubmit:function(e){if(e.preventDefault(),t.map((function(e){return e.name})).includes(m))if(window.confirm("".concat(m," is already added to phonebook, replace with a new number?"))){h(""),C("");var n=t.find((function(e){return e.name===m})),r=Object(i.a)(Object(i.a)({},n),{},{number:w});v(r).then((function(e){return c(t.map((function(n){return n.id!==e.id?n:e})))})).catch((function(e){A({message:"".concat(m,"'s information has already been removed from server"),err:!0}),setTimeout((function(){A({message:null,err:!1})}),3e3),c(t.filter((function(e){return e.id!==n.id})))}))}else h(""),C("");else O({name:m,number:w}).then((function(e){c(t.concat(e)),h(""),C(""),A(Object(i.a)(Object(i.a)({},T),{},{message:"Added ".concat(m)})),setTimeout((function(){A({message:null,err:!1})}),3e3)}))},newName:m,handleNameChange:function(e){h(e.target.value)},newNumber:w,handleNumberChange:function(e){C(e.target.value)}}),Object(r.jsx)("h2",{children:"Numbers"}),!E.length&&Object(r.jsx)("h4",{children:"No result!"}),E.map((function(e){return Object(r.jsx)(s,{name:e.name,number:e.number,remove:function(){return n=e,void(window.confirm("Remove ".concat(n.name," ?"))&&(g(n.id),c(t.filter((function(e){return e.id!==n.id}))),A(Object(i.a)(Object(i.a)({},T),{},{message:"Removed ".concat(n.name)})),setTimeout((function(){A({message:null,err:!1})}),3e3)));var n}},e.name)}))]})};a.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.8beabff7.chunk.js.map