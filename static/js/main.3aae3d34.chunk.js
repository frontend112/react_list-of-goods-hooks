(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(4),s=n.n(c),o=n(3),a=n(1),i=n.n(a),r=(n(9),n(10),n(0)),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],u=function(){var t=i.a.useState(!1),e=Object(o.a)(t,2),n=e[0],c=e[1],s=i.a.useState(""),a=Object(o.a)(s,2),u=a[0],b=a[1],h=function(t,e){var n=[].concat(l);switch(t){case"length":n.sort((function(t,e){return t.length-e.length}));break;case"alphabet":n.sort((function(t,e){return t.localeCompare(e)}))}return e?n.reverse():n}(u,n);return Object(r.jsxs)("div",{className:"section content",children:[Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)("button",{type:"button",className:"button is-info ".concat("alphabet"!==u&&"is-light"),onClick:function(){b("alphabet")},children:"Sort alphabetically"}),Object(r.jsx)("button",{type:"button",className:"button is-success ".concat("length"!==u&&"is-light"),onClick:function(){b("length")},children:"Sort by length"}),Object(r.jsx)("button",{type:"button",className:"button is-warning ".concat(!1===n&&"is-light"),onClick:function(){c((function(t){return!t}))},children:"Reverse"}),(n||u)&&Object(r.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(!1),b("")},children:"Reset"})]}),Object(r.jsx)("ul",{children:h.map((function(t){return Object(r.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};s.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.3aae3d34.chunk.js.map