(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(29)},22:function(e,t,a){},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(14),r=a.n(l),m=a(6),o=(a(22),a(5)),i=(a(23),function(e){var t=e.tabs,a=e.match;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{style:{marginLeft:"40px"}},t.find(function(e){return e.id===a.params.tabsId})&&t.find(function(e){return e.id===a.params.tabsId}).content))}),s=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=function(e){var t=e.match;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Tabs"),c.a.createElement("div",{className:"tabs-container"},c.a.createElement("ul",{className:"tabs-list"},s.map(function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(m.b,{active:!0,to:"/tabs/".concat(e.id)},e.title))})),c.a.createElement(i,{match:t,tabs:s})))},b=function(){return c.a.createElement("h1",null,"Home page")},E=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("nav",{className:"nav-list"},c.a.createElement(m.b,{exact:!0,to:"/"},c.a.createElement("h1",null,"Home page")),c.a.createElement(m.b,{exact:!0,to:"/tabs/"},c.a.createElement("h2",null,"Tabs"))),c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/",component:b}),c.a.createElement(o.a,{exact:!0,path:"/tabs/:tabsId?",component:u})))};r.a.render(c.a.createElement(m.a,null,c.a.createElement(E,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.9f148de8.chunk.js.map