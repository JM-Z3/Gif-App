(this.webpackJsonppractica4=this.webpackJsonppractica4||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var c=n(7),r=n.n(c),s=n(2),i=n(1),a=n(9),u=n(0),j=function(t){var e=t.setState,n=Object(i.useState)(""),c=Object(s.a)(n,2),r=c[0],j=c[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),e((function(t){return[r].concat(Object(a.a)(t))})),j("")},children:Object(u.jsx)("input",{type:"text",value:r,onChange:function(t){j(t.target.value)}})})},o=function(t){var e=t.img;return Object(u.jsxs)("div",{className:"test2",children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:e.url})}),Object(u.jsx)("p",{children:e.title})]})},b=n(6),l=n.n(b),f=n(8),p=function(){var t=Object(f.a)(l.a.mark((function t(e){var n,c,r,s,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"Ve1x9kstfCTT0uu7F3aXW468gjBgs0XJ",n="https://api.giphy.com/v1/gifs/search?api_key=".concat("Ve1x9kstfCTT0uu7F3aXW468gjBgs0XJ","&limit=3&q=").concat(e),t.next=4,fetch(n);case 4:return c=t.sent,t.next=7,c.json();case 7:return r=t.sent,s=r.data,i=s.map((function(t){return{id:t.id,url:t.images.original.url,title:t.title}})),t.abrupt("return",i);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){var e=t.st,n=Object(i.useState)([]),c=Object(s.a)(n,2),r=c[0],a=c[1];return Object(i.useEffect)((function(){p(e).then((function(t){setTimeout((function(){a(t)}),1e3)}))}),[e]),Object(u.jsx)("div",{className:"test",children:r.map((function(t){return Object(u.jsx)(o,{img:t},t.id)}))})},d=function(){var t=Object(i.useState)(["messi"]),e=Object(s.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"GIF Results"}),Object(u.jsxs)("div",{className:"input-button",children:[Object(u.jsx)(j,{setState:c}),Object(u.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){c([])},children:"Clear"})]}),Object(u.jsx)("hr",{}),n.map((function(t){return Object(u.jsx)(O,{st:t},t)}))]})},h=(n(16),document.querySelector("#root"));r.a.render(Object(u.jsx)(d,{}),h)}},[[17,1,2]]]);
//# sourceMappingURL=main.a42fd735.chunk.js.map