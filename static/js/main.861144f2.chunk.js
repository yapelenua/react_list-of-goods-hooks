(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),i=n(6),r=n(8),a=n(1),l=n.n(a),u=(n(13),n(14),n(4)),b=n.n(u),h=n(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var d=function(){var t=l.a.useState(!1),e=Object(i.a)(t,2),n=e[0],c=e[1],o=l.a.useState(s.NONE),a=Object(i.a)(o,2),u=a[0],d=a[1],N=function(t,e){var n=e.sortType,c=e.isReversed,o=Object(r.a)(t);return n===s.ALPHABET&&o.sort((function(t,e){return t.localeCompare(e)})),n===s.LENGTH&&o.sort((function(t,e){return t.length-e.length})),c&&o.reverse(),o}(j,{sortType:u,isReversed:n}),O=u!==s.NONE||n;return Object(h.jsxs)("div",{className:"section content",children:[Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{type:"button",className:b()("button is-info",{"is-light":u!==s.ALPHABET}),onClick:function(){d(s.ALPHABET)},children:"Sort alphabetically"}),Object(h.jsx)("button",{type:"button",className:b()("button is-success",{"is-light":u!==s.LENGTH}),onClick:function(){d(s.LENGTH)},children:"Sort by length"}),Object(h.jsx)("button",{type:"button",className:b()("button is-warning",{"is-light":!n}),onClick:function(){c(!n)},children:"Reverse"}),O&&Object(h.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){d(s.NONE),c(!1)},children:"Reset"})]}),Object(h.jsx)("ul",{children:Object(h.jsx)("ul",{children:N.map((function(t){return Object(h.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})};o.a.render(Object(h.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.861144f2.chunk.js.map