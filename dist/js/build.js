!function(e){function t(t){for(var r,c,l=t[0],u=t[1],s=t[2],p=0,f=[];p<l.length;p++)c=l[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(i&&i(t);f.length;)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={0:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var i=u;o.push([19,1]),n()}({19:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),c=n.n(o),l=(n(12),n(4)),u=n.n(l),s=n(7),i=n.n(s),p=n(3),f=n.n(p),d=n(2),m=n.p+"assets/svg/search.svg",b="app-module__badRequest_b534c";var h=function(e){var t=Object(r.useState)(""),n=f()(t,2),o=n[0],c=n[1],l=Object(r.useState)([]),s=f()(l,2),p=s[0],h=s[1],v=Object(r.useState)([]),y=f()(v,2),g=y[0],E=y[1],j=Object(r.useState)(!1),O=f()(j,2),w=O[0],x=O[1];Object(r.useEffect)((function(){function e(){return(e=i()(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/posts?_limit=15");case 3:return t=e.sent,e.next=6,t.json();case 6:return t=e.sent,e.next=9,fetch("https://jsonplaceholder.typicode.com/users?_limit=4");case 9:return n=e.sent,e.next=12,n.json();case 12:n=e.sent,t.forEach((function(e){return e.userId=n[Math.floor(4*Math.random())].id})),E(n),h(t),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),x(!0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var _=Object(r.useMemo)((function(){var e=[],t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e.push(a.a.createElement("div",{key:t.id,className:"col-12 mt-4 col-md-6 col-lg-4"},a.a.createElement(d.a,{border:"secondary"},a.a.createElement(d.a.Header,null,g[t.userId-1].name),a.a.createElement(d.a.Body,null,a.a.createElement(d.a.Title,null,t.title),a.a.createElement(d.a.Text,null,t.body)))))};return p.forEach((function(e){o?g[e.userId-1].name.toLowerCase().includes(o.toLowerCase())&&t(e):t(e)})),w?a.a.createElement("p",{className:b},"Не удалось получить данные с сервера :("):e.length?e:a.a.createElement("p",null,"По вашему запросу ничего не найдено")}),[o,p,w]);return a.a.createElement(a.a.Fragment,null,a.a.createElement("header",{className:"container pt-3"},a.a.createElement("div",{className:"input-group mb-3"},a.a.createElement("div",{className:"input-group-prepend"},a.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){return c(o)}},a.a.createElement("img",{src:m}))),a.a.createElement("input",{type:"text",className:"form-control",placeholder:"Filter by author...","aria-label":"","aria-describedby":"basic-addon1",value:o,onChange:function(e){return c(e.target.value)}}))),a.a.createElement("main",{className:"container"},a.a.createElement("div",{className:"row flex-wrap"},_)))};c.a.render(a.a.createElement(h,null),document.querySelector("#app"))}});