(this["webpackJsonpfirst-react-project"]=this["webpackJsonpfirst-react-project"]||[]).push([[0],[,,function(e,t,n){e.exports={overlay:"Modal_overlay__lArzM",modal:"Modal_modal__1-mDz",modal__header:"Modal_modal__header__2zreI",modal__content:"Modal_modal__content__1Wadb",modal__footer:"Modal_modal__footer__PTbqe"}},,function(e,t,n){e.exports={container:"AddUser_container__2U0K7",input:"AddUser_input__77Vz3",input__control:"AddUser_input__control__13kXw",input__submit:"AddUser_input__submit__2lg2A"}},,,,,,function(e,t,n){e.exports={card:"Card_card__3v1nd"}},function(e,t,n){e.exports={button:"Button_button__3bx3e"}},function(e,t,n){e.exports={"users-list__item":"UsersListItem_users-list__item__3hemo"}},function(e,t,n){e.exports={"users-list":"UsersList_users-list__lv0Jc"}},,,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(9),o=n.n(r),a=(n(22),n(14)),s=n(7),l=n(10),i=n.n(l),d=n(0),u=function(e){return Object(d.jsx)("div",{className:"".concat(i.a.card," ").concat(e.className),children:e.children})},j=n(5),_=n.n(j),m=n(11),b=n.n(m),h=function(e){return Object(d.jsx)("button",{onClick:e.onClick,type:e.type||"button",className:b.a.button,children:e.children})},f=n(2),p=n.n(f),x=function(e){return Object(d.jsx)("div",{className:p.a.overlay,onClick:e.onCloseModal})},O=function(e){return Object(d.jsxs)(u,{className:p.a.modal,children:[Object(d.jsx)("header",{className:p.a.modal__header,children:Object(d.jsx)("h2",{children:e.title})}),Object(d.jsx)("div",{className:p.a.modal__content,children:Object(d.jsx)("p",{children:e.content})}),Object(d.jsx)("footer",{className:p.a.modal__footer,children:Object(d.jsx)(h,{onClick:e.onCloseModal,children:"Close"})})]})},v=function(e){return Object(d.jsxs)(c.Fragment,{children:[_.a.createPortal(Object(d.jsx)(x,{onCloseModal:e.onCloseModal}),document.getElementById("overlay-root")),_.a.createPortal(Object(d.jsx)(O,{title:e.title,content:e.content,onCloseModal:e.onCloseModal}),document.getElementById("modal-root"))]})},g=function(e){return e.children},N=n(4),I=n.n(N),M=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)(),r=Object(c.useState)(""),o=Object(s.a)(r,2),a=o[0],l=o[1];return Object(d.jsxs)(g,{children:[a&&Object(d.jsx)(v,{onCloseModal:function(){l(null)},title:a.title,content:a.content}),Object(d.jsx)(u,{className:I.a.input,children:Object(d.jsxs)("form",{onSubmit:function(c){c.preventDefault();var r=t.current.value,o=n.current.value;if(!r.trim().length&&!o.trim().length)return l({title:"Invalid Input",content:"Please Enter a Valid Name & Age (Input Must Not Be Empty)"}),void console.log("active");if(!r.trim().length)return l({title:"Invalid Input",content:"Please Enter a Valid Name (Input Must Not Be Empty)"}),void console.log("active");if(!o.trim().length)return l({title:"Invalid Input",content:"Please Enter a Valid Age (Input Must Not Be Empty)"}),void console.log("active");if(+o<1)l({title:"Invalid Age",content:"Please Enter a Valid Age (Positive Integer)"});else if(+o>120)l({title:"Invalid Age",content:"Please Enter a Valid Age: Age can't be higher then 120"});else{var a={id:Math.random().toString(),username:r.trim(),age:o};e.onAddUser(a),t.current.value="",n.current.value=""}},children:[Object(d.jsxs)("div",{className:I.a.input__control,children:[Object(d.jsx)("label",{htmlFor:"username",children:"Username"}),Object(d.jsx)("input",{type:"text",id:"username",ref:t})]}),Object(d.jsxs)("div",{className:I.a.input__control,children:[Object(d.jsx)("label",{htmlFor:"age",children:"Age (Years)"}),Object(d.jsx)("input",{type:"number",id:"age",ref:n})]}),Object(d.jsx)("div",{className:I.a.input__submit,children:Object(d.jsx)(h,{type:"submit",children:"Submit User"})})]})})]})},y=n(12),A=n.n(y),C=function(e){return Object(d.jsxs)("li",{className:A.a["users-list__item"],children:[Object(d.jsx)("span",{children:"".concat(e.username," (").concat(e.age," year old)")}),Object(d.jsx)("span",{children:Object(d.jsx)(h,{onClick:function(){e.onDelete(e.id)},children:"Delete"})})]})},U=n(13),E=n.n(U),P=function(e){if(e.items.length)return Object(d.jsx)(u,{className:E.a["users-list"],children:Object(d.jsx)("ul",{children:e.items.map((function(t){return Object(d.jsx)(C,{id:t.id,username:t.username,age:t.age,onDelete:e.onDeleteUser},t.id)}))})})};var k=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(M,{onAddUser:function(e){r((function(t){return[e].concat(Object(a.a)(t))}))}}),Object(d.jsx)(P,{items:n,onDeleteUser:function(e){var t=n.filter((function(t){return e!==t.id}));r(t)}})]})};o.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(k,{}))}],[[24,1,2]]]);
//# sourceMappingURL=main.4f97b734.chunk.js.map