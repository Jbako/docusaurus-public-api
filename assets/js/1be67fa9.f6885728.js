"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[9792],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:59,title:"Webhooks",description:"Obtenci\xf3n datos instancia",slug:"/configuracion/webhooks",tags:["webhooks"]},i="Webhooks instancia",s={unversionedId:"Configuraci\xf3n/Webhooks relacionado",id:"Configuraci\xf3n/Webhooks relacionado",title:"Webhooks",description:"Obtenci\xf3n datos instancia",source:"@site/docs\\Configuraci\xf3n\\Webhooks relacionado.md",sourceDirName:"Configuraci\xf3n",slug:"/configuracion/webhooks",permalink:"/docusaurus-public-api/configuracion/webhooks",draft:!1,tags:[{label:"webhooks",permalink:"/docusaurus-public-api/tags/webhooks"}],version:"current",sidebarPosition:59,frontMatter:{sidebar_position:59,title:"Webhooks",description:"Obtenci\xf3n datos instancia",slug:"/configuracion/webhooks",tags:["webhooks"]},sidebar:"tutorialSidebar",previous:{title:"Tipos de despacho",permalink:"/docusaurus-public-api/tipos-de-despacho"},next:{title:"Formas de pago",permalink:"/docusaurus-public-api/formas-de-pago"}},l={},c=[{value:"Ejemplo",id:"ejemplo",level:4},{value:"Respuesta",id:"respuesta",level:4},{value:"Par\xe1metros",id:"par\xe1metros",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"webhooks-instancia"},"Webhooks instancia"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Para consumir el recurso de la instancia, se debe usar ",(0,a.kt)("inlineCode",{parentName:"p"},"https://credential.bsale.io")," como ",(0,a.kt)("strong",{parentName:"p"},"url base"))),(0,a.kt)("h4",{id:"ejemplo"},"Ejemplo"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GET /v1/instances/basic/d466gsgs287da0ffbe9dd56eb058095fa13hgs772cb0c1d9e.json")," ")),(0,a.kt)("h4",{id:"respuesta"},"Respuesta"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 129577,\n  "code":"11111111-1",\n  "name": "Test Sale",\n  "state": 0,\n  "country": "CL",\n  "trial": 0,\n  "trialEnd": 1493335314\n}\n')),(0,a.kt)("h4",{id:"par\xe1metros"},"Par\xe1metros"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"id"),", Identificador de la instancia en la cual est\xe1 asociado el ",(0,a.kt)("inlineCode",{parentName:"li"},"access_token")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"code"),", Rut empresa"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"name"),", Nombre empresa"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"state"),", Estado empresa"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"country"),", Pa\xeds empresa"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"trial"),", Empresa prueba 30 d\xedas (1), definitiva (0)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"trialEnd"),", fecha unix termino trial")))}u.isMDXComponent=!0}}]);