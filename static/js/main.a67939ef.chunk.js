(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),l=n.n(c),u=n(7),o=n(1),p=(n(24),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.b,{to:"/"},"Home"),r.a.createElement(u.b,{to:"/people"},"People"))}),m=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Home Page"))},s=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Page not found"))},i=n(8),f=n.n(i),E=n(10),b=n(18),h=function(){var e=Object(E.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(E.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,h();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"People Page"),n.map((function(e){return r.a.createElement("p",{key:e.name},e.name)})))},v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/",exact:!0},r.a.createElement(m,null)),r.a.createElement(o.b,{path:"/people"},r.a.createElement(d,null)),r.a.createElement(o.a,{path:"/home",to:"/"}),r.a.createElement(s,null)))};l.a.render(r.a.createElement(u.a,null,r.a.createElement(v,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.a67939ef.chunk.js.map