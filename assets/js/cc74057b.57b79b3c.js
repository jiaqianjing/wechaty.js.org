"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8762],{35318:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return h}});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},l=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(a),h=n,m=d["".concat(o,".").concat(h)]||d[h]||p[h]||i;return a?r.createElement(m,u(u({ref:t},l),{},{components:a})):r.createElement(m,u({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,u=new Array(i);u[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,u[1]=c;for(var s=2;s<i;s++)u[s]=a[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3388:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=a(25773),n=a(30808),i=(a(27378),a(35318)),u=["components"],c={title:"Wechaty Redux Overview",sidebar_label:"Overview"},o=void 0,s={unversionedId:"using-redux-with-wechaty/overview",id:"using-redux-with-wechaty/overview",isDocsHomePage:!1,title:"Wechaty Redux Overview",description:"NPM Version",source:"@site/docs/using-redux-with-wechaty/overview.md",sourceDirName:"using-redux-with-wechaty",slug:"/using-redux-with-wechaty/overview",permalink:"/docs/using-redux-with-wechaty/overview",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/using-redux-with-wechaty/overview.md",tags:[],version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1630068916,formattedLastUpdatedAt:"8/27/2021",frontMatter:{title:"Wechaty Redux Overview",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Using Vorpal with Wechaty",permalink:"/docs/tutorials/using-vorpal-with-wechaty"},next:{title:"Vanilla Redux",permalink:"/docs/using-redux-with-wechaty/vannila-redux"}},l=[{value:"Vanilla Redux with Wechaty Redux Plugin",id:"vanilla-redux-with-wechaty-redux-plugin",children:[]},{value:"Ducks Proposal Style for Wechaty Redux Plugin",id:"ducks-proposal-style-for-wechaty-redux-plugin",children:[]},{value:"References",id:"references",children:[]}],p={toc:l};function d(e){var t=e.components,a=(0,n.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-redux"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-redux?color=brightgreen",alt:"NPM Version"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-redux/actions?query=workflow%3ANPM"},(0,i.kt)("img",{parentName:"a",src:"https://github.com/wechaty/wechaty-redux/workflows/NPM/badge.svg",alt:"NPM"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/huan/ducks#3-ducksify-extension-currying--api-interface"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Redux-Ducksify-yellowgreen",alt:"Ducksify Extension"}))),(0,i.kt)("p",null,"Using redux with Wechaty wraps Wechaty with Redux Actions ","&"," Reducers for Easy State Management."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://redux.js.org"},"Redux")," is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-redux"},(0,i.kt)("img",{parentName:"a",src:"https://wechaty.github.io/wechaty-redux/images/wechaty-redux.png",alt:"Wechaty Redux"}))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Image Source: ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/the-web-tub/managing-your-react-state-with-redux-affab72de4b1"},"Managing your React state with Redux"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-redux"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/dm/wechaty-redux.svg?style=flat-square",alt:"Downloads"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg",alt:"TypeScript"}))),(0,i.kt)("p",null,"Redux is used for application state management and offers the following benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make the state predictable"),(0,i.kt)("li",{parentName:"ul"},"Easier to trace which action causes any change"),(0,i.kt)("li",{parentName:"ul"},"Make it easier to test, maintain and debug the code")),(0,i.kt)("h2",{id:"vanilla-redux-with-wechaty-redux-plugin"},"Vanilla Redux with Wechaty Redux Plugin"),(0,i.kt)("p",null,"Vanilla Redux means using plain Redux without any additional libraries like Ducks."),(0,i.kt)("p",null,"The tutorial for ",(0,i.kt)("strong",{parentName:"p"},"Vannila Redux with Wechaty Redux Plugin")," is available ",(0,i.kt)("a",{parentName:"p",href:"/docs/using-redux-with-wechaty/vannila-redux"},"here"),"."),(0,i.kt)("h2",{id:"ducks-proposal-style-for-wechaty-redux-plugin"},"Ducks Proposal Style for Wechaty Redux Plugin"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/huan/ducks#3-ducksify-extension-currying--api-interface"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Redux-Ducksify-yellowgreen",alt:"Ducksify Extension"}))),(0,i.kt)("p",null,"\ud83e\udd86\ud83e\udd86\ud83e\udd86Ducks is a Reducer Bundles Manager that implements the Redux Ducks Modular Proposal with great convenience."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/erikras/ducks-modular-redux"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Redux-Ducks%202015-yellow",alt:"Ducks Modular Proposal"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alexnm/re-ducks"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Redux-Re--Ducks%202016-orange",alt:"Re-Ducks Extended"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/huan/ducks#3-ducksify-extension-currying--ducksify-interface"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Redux-Ducksify%202020-yellowgreen",alt:"Ducksify Extension"}))),(0,i.kt)("p",null,"Ducks offers a method of handling redux module packaging, installing, and running with your Redux store with middleware support."),(0,i.kt)("p",null,"The tutorial for ",(0,i.kt)("strong",{parentName:"p"},"Ducks Proposal Style for Wechaty Redux Plugin")," is available ",(0,i.kt)("a",{parentName:"p",href:"/docs/using-redux-with-wechaty/ducks-proposal"},"here"),"."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty-redux"},"NPM package of wechaty-redux")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-redux"},"Github repository of wechaty-redux"))))}d.isMDXComponent=!0}}]);