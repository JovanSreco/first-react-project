(this["webpackJsonpfirst-react-project"]=this["webpackJsonpfirst-react-project"]||[]).push([[0],[,,,function(e,t,n){e.exports={overlay:"Modal_overlay__-eDQW",modal:"Modal_modal__oVrX3",modal__header:"Modal_modal__header__kSTsw",modal__content:"Modal_modal__content__1cEwT",modal__footer:"Modal_modal__footer__1AQfI"}},function(e,t,n){e.exports={container:"AddUser_container__3EPEo",input:"AddUser_input__38nUq",input__control:"AddUser_input__control__tFM3b",input__submit:"AddUser_input__submit__1RoWf"}},,,,,function(e,t,n){e.exports={card:"Card_card__zymaA"}},function(e,t,n){e.exports={button:"Button_button__k5uKs"}},function(e,t,n){e.exports={"users-list__item":"UsersListItem_users-list__item__EXMex"}},function(e,t,n){e.exports={"users-list":"UsersList_users-list__1Gpk-"}},,,,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(8),a=n.n(s),r=(n(22),n(13)),i=n(2),o=n(9),l=n.n(o),d=n(0),u=function(e){return Object(d.jsx)("div",{className:"".concat(l.a.card," ").concat(e.className),children:e.children})},j=n(10),_=n.n(j),m=function(e){return Object(d.jsx)("button",{onClick:e.onClick,type:e.type||"button",className:_.a.button,children:e.children})},b=n(3),h=n.n(b),O=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:h.a.overlay}),Object(d.jsxs)(u,{className:h.a.modal,children:[Object(d.jsx)("header",{className:h.a.modal__header,children:Object(d.jsx)("h2",{children:e.title})}),Object(d.jsx)("div",{className:h.a.modal__content,children:Object(d.jsx)("p",{children:e.content})}),Object(d.jsx)("footer",{className:h.a.modal__footer,children:Object(d.jsx)(m,{onClick:e.onCloseModal,children:"Close"})})]})]})},x=n(4),f=n.n(x),p=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)(""),o=Object(i.a)(r,2),l=o[0],j=o[1],_=Object(c.useState)(""),b=Object(i.a)(_,2),h=b[0],x=b[1];return Object(d.jsxs)("div",{className:f.a.container,children:[h&&Object(d.jsx)(O,{onCloseModal:function(){x(null)},title:h.title,content:h.content}),Object(d.jsx)(u,{className:f.a.input,children:Object(d.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),!s.trim().length||!l.trim().length)return x({title:"invalid Input",content:"Please Enter a Valid Name & Age"}),void console.log("active");if(+l<1)x({title:"invalid Age",content:"Please Enter a Valid Age"});else{var n={id:Math.random().toString(),username:s.trim(),age:l};e.onAddUser(n),a(""),j("")}},children:[Object(d.jsxs)("div",{className:f.a.input__control,children:[Object(d.jsx)("label",{htmlFor:"username",children:"Username"}),Object(d.jsx)("input",{type:"text",id:"username",value:s,onChange:function(e){a(e.target.value)}})]}),Object(d.jsxs)("div",{className:f.a.input__control,children:[Object(d.jsx)("label",{htmlFor:"age",children:"Age (Years)"}),Object(d.jsx)("input",{type:"number",id:"age",value:l,onChange:function(e){j(e.target.value)}})]}),Object(d.jsx)("div",{className:f.a.input__submit,children:Object(d.jsx)(m,{type:"submit",children:"Submit User"})})]})})]})},v=n(11),g=n.n(v),N=function(e){return Object(d.jsxs)("li",{className:g.a["users-list__item"],children:[Object(d.jsx)("span",{children:"".concat(e.username," (").concat(e.age," year old)")}),Object(d.jsx)("span",{children:Object(d.jsx)(m,{onClick:function(){e.onDelete(e.id)},children:"Delete"})})]})},U=n(12),A=n.n(U),y=function(e){if(e.items.length)return Object(d.jsx)(u,{className:A.a["users-list"],children:Object(d.jsx)("ul",{children:e.items.map((function(t){return Object(d.jsx)(N,{id:t.id,username:t.username,age:t.age,onDelete:e.onDeleteUser},t.id)}))})})};var C=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(p,{onAddUser:function(e){s((function(t){return[e].concat(Object(r.a)(t))}))}}),Object(d.jsx)(y,{items:n,onDeleteUser:function(e){var t=n.filter((function(t){return e!==t.id}));s(t)}})]})};a.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(C,{}))}],[[24,1,2]]]);
//# sourceMappingURL=main.1f071a26.chunk.js.map