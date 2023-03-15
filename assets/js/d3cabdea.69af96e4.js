"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[6709],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:54,title:"Monedas",description:"Listar Monedas",slug:"/monedas"},l="Monedas",i={unversionedId:"Configuraci\xf3n/Monedas",id:"version-PE/Configuraci\xf3n/Monedas",title:"Monedas",description:"Listar Monedas",source:"@site/versioned_docs\\version-PE\\Configuraci\xf3n\\Monedas.md",sourceDirName:"Configuraci\xf3n",slug:"/monedas",permalink:"/docusaurus-public-api/PE/monedas",draft:!1,tags:[],version:"PE",sidebarPosition:54,frontMatter:{sidebar_position:54,title:"Monedas",description:"Listar Monedas",slug:"/monedas"},sidebar:"tutorialSidebar",previous:{title:"Usuarios",permalink:"/docusaurus-public-api/PE/usuarios"},next:{title:"Tipos de documentos",permalink:"/docusaurus-public-api/PE/tipos-de-documentos"}},s={},d=[{value:"Estructura JSON",id:"estructura-json",level:2},{value:"Atributos",id:"atributos",level:3},{value:"GET lista de Monedas",id:"get-lista-de-monedas",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:4},{value:"Ejemplos",id:"ejemplos",level:4},{value:"GET un moneda",id:"get-un-moneda",level:2},{value:"GET tipo cambio moneda",id:"get-tipo-cambio-moneda",level:2},{value:"GET ventas por Monedas",id:"get-ventas-por-monedas",level:2},{value:"Par\xe1metros",id:"par\xe1metros-1",level:4},{value:"Ejemplos",id:"ejemplos-1",level:4},{value:"GET cantidad de monedas",id:"get-cantidad-de-monedas",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"monedas"},"Monedas"),(0,r.kt)("p",null,"Listar Monedas configuradas en Bsale."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Bsale soporta el uso ",(0,r.kt)("strong",{parentName:"p"},"1 o m\xe1s monedas"),". (Ej, USD en factura de exportaci\xf3n). Para su uso, se debe crear una lista de precio en base a la moneda creada.")),(0,r.kt)("h2",{id:"estructura-json"},"Estructura JSON"),(0,r.kt)("p",null,"Al realizar una petici\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP"),", el servicio retornara un JSON con la siguiente estructura:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Response /coins/1.json"',title:'"Response','/coins/1.json"':!0},'{\n  "href": "https://api.bsale.io/v1/coins/1.json",\n  "id": 1,\n  "name": "Peso Chileno",\n  "symbol": "$",\n  "decimals": 0,\n  "totalRound": 0\n}\n')),(0,r.kt)("h3",{id:"atributos"},"Atributos"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Atributo"),(0,r.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"),(0,r.kt)("th",{parentName:"tr",align:null},"Tipo dato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"href")),(0,r.kt)("td",{parentName:"tr",align:null},"url del Monedas"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"identificador \xfanico del Monedas"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"nombre de la moneda"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"symbol")),(0,r.kt)("td",{parentName:"tr",align:null},"s\xedmbolo de la moneda"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"decimals")),(0,r.kt)("td",{parentName:"tr",align:null},"decimales que permite la moneda."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"totalRound")),(0,r.kt)("td",{parentName:"tr",align:null},"indica si la moneda redondea totales, No(0) o Si (1)"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")))),(0,r.kt)("h2",{id:"get-lista-de-monedas"},"GET lista de Monedas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/coins.json")," retornar\xe1 todos las Monedas.")),(0,r.kt)("h4",{id:"par\xe1metros"},"Par\xe1metros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"limit"),", limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"offset"),", permite paginar los items de una respuesta JSON, por defecto el offset es 0."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fields"),", solo devolver atributos espec\xedficos de un recurso"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name"),", Permite filtrar por nombre de la moneda."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"symbol"),", filtra por s\xedmbolo de la moneda."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"state"),", (0 o 1) indica si las monedas est\xe1n activas(0) inactivas(1)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default"),", permite filtrar la moneda por defecto del sistema.")),(0,r.kt)("h4",{id:"ejemplos"},"Ejemplos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/coins.json?limit=10&offset=0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/coins.json?fields=[name,symbol,state]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/coins.json?default=true"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /coins.json "',title:'"Response',"/coins.json":!0,'"':!0},'{\n  "href": "https://api.bsale.io/v1/coins.json",\n  "count": 3,\n  "limit": 25,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.io/v1/coins/3.json",\n      "id": 3,\n      "name": "Dolar",\n      "symbol": "USD",\n      "decimals": 2,\n      "totalRound": 0\n    },\n    {\n      "href": "https://api.bsale.io/v1/coins/1.json",\n      "id": 1,\n      "name": "Peso Chileno",\n      "symbol": "$",\n      "decimals": 0,\n      "totalRound": 0\n    },\n    {\n      "href": "https://api.bsale.io/v1/coins/2.json",\n      "id": 2,\n      "name": "UF",\n      "symbol": "(UF)",\n      "decimals": 2,\n      "totalRound": 0\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"get-un-moneda"},"GET un moneda"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/coins/1.json")," retornar\xe1 un moneda espec\xedfica.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /coins/2.json"',title:'"Response','/coins/2.json"':!0},'{\n  "href": "https://api.bsale.io/v1/coins/2.json",\n  "id": 2,\n  "name": "Euro",\n  "symbol": "\u20ac",\n  "decimals": 2,\n  "totalRound": 0\n}\n')),(0,r.kt)("h2",{id:"get-tipo-cambio-moneda"},"GET tipo cambio moneda"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/coins/2/exchange_rate/1533223010.json")," Retornar\xe1 el tipo de cambio de una moneda para una espec\xedfica.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"En el ejemplo, donde 2 es el ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," de la moneda y ",(0,r.kt)("inlineCode",{parentName:"p"},"1533223010")," es la fecha en unix time (02/08/2018).")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "exchangeRate": 27204.23\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"startDate"),", fecha de inicio de las ventas (Integer)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"endDate"),", fecha fin de las ventas (Integer)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"total"),", total vendido (Float)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sellers"),", nodo que representa a los Monedas que generaron documentos en la fecha de la consulta."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"subtotal"),", total vendido por el moneda (ventas menos devoluciones), puede incluir impuesto depende la configuraci\xf3n de Bsale (Float)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"taxSubtotal"),", total de impuestos generados por el moneda (Float)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sales"),", nodo que representa a los documentos de venta generados por el moneda."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"returns"),", nodo que representa las devoluciones asignadas al moneda.")),(0,r.kt)("h2",{id:"get-ventas-por-monedas"},"GET ventas por Monedas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/coins/128/sales.json")," Retornar\xe1 los documentos de venta asignados al moneda..")),(0,r.kt)("h4",{id:"par\xe1metros-1"},"Par\xe1metros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"startdate"),", fecha de inicio de ventas , por defecto es la fecha del dia de la petici\xf3n (Integer)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"enddate"),", fecha fin de ventas, por defecto es la fecha del dia de la petici\xf3n (Integer).")),(0,r.kt)("h4",{id:"ejemplos-1"},"Ejemplos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/coins/128/sales.json?startdate=1438560000&enddate=1438560000"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "href": "https://api.bsale.io/v1/coins/1/sales.json?startdate=1576022400&enddate=1576022400",\n    "count": 1,\n    "limit": 25,\n    "offset": 0,\n    "items": [\n        {\n            "href": "https://api.bsale.io/v1/documents/83.json",\n            "id": 83,\n            "name": "BOLETA MANUAL (no valido al SII)",\n            "number": 39\n        }\n    ]\n}\n')),(0,r.kt)("h2",{id:"get-cantidad-de-monedas"},"GET cantidad de monedas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/v1/coins/count.json")," Retornar\xe1 cantidades de registros.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"state"),", boolean (0 o 1) indica si los clientess est\xe1n activos(0) inactivos (1)."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "count": 3\n}\n')))}m.isMDXComponent=!0}}]);