"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[6214],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,k=m["".concat(o,".").concat(c)]||m[c]||d[c]||s;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<s;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8178:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_position:53,title:"Usuarios",description:"Listar Usuarios",slug:"/usuarios"},l="Usuarios",i={unversionedId:"Configuraci\xf3n/Usuarios",id:"version-MX/Configuraci\xf3n/Usuarios",title:"Usuarios",description:"Listar Usuarios",source:"@site/versioned_docs\\version-MX\\Configuraci\xf3n\\Usuarios.md",sourceDirName:"Configuraci\xf3n",slug:"/usuarios",permalink:"/docusaurus-public-api/MX/usuarios",draft:!1,tags:[],version:"MX",sidebarPosition:53,frontMatter:{sidebar_position:53,title:"Usuarios",description:"Listar Usuarios",slug:"/usuarios"},sidebar:"tutorialSidebar",previous:{title:"Sucursales",permalink:"/docusaurus-public-api/MX/sucursales"},next:{title:"Monedas",permalink:"/docusaurus-public-api/MX/monedas"}},o={},u=[{value:"Estructura JSON",id:"estructura-json",level:2},{value:"Atributos",id:"atributos",level:3},{value:"GET lista de Usuarios",id:"get-lista-de-usuarios",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:4},{value:"Ejemplos",id:"ejemplos",level:4},{value:"GET un usuario",id:"get-un-usuario",level:2},{value:"Par\xe1metros",id:"par\xe1metros-1",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"GET resumen de ventas por usuario",id:"get-resumen-de-ventas-por-usuario",level:2},{value:"Par\xe1metros",id:"par\xe1metros-2",level:4},{value:"Ejemplos",id:"ejemplos-1",level:4},{value:"GET ventas por usuarios",id:"get-ventas-por-usuarios",level:2},{value:"Par\xe1metros",id:"par\xe1metros-3",level:4},{value:"Ejemplos",id:"ejemplos-2",level:4},{value:"GET devoluciones por usuarios",id:"get-devoluciones-por-usuarios",level:2},{value:"Par\xe1metros",id:"par\xe1metros-4",level:4},{value:"Ejemplos",id:"ejemplos-3",level:4}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"usuarios"},"Usuarios"),(0,r.kt)("p",null,"Listar usuarios creados, como tambi\xe9n leer ventas y devoluciones por usuario."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Desde la vista de un documento, un usuario es un ",(0,r.kt)("strong",{parentName:"p"},"emisor")," del documento. Como tambien el ",(0,r.kt)("strong",{parentName:"p"},"vendedor"),".")),(0,r.kt)("h2",{id:"estructura-json"},"Estructura JSON"),(0,r.kt)("p",null,"Al realizar una petici\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP"),", el servicio retornara un JSON con la siguiente estructura:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Response /users/2.json"',title:'"Response','/users/2.json"':!0},'\n        {\n            "href": "https://api.bsale.cl/v1/users/2.json",\n            "id": 2,\n            "firstName": "Gabriel",\n            "lastName": "Seguel",\n            "email": "gseguel@bsale-prueba.cl",\n            "state": 0,\n            "office": {\n                "href": "https://api.bsale.cl/v1/offices/1.json",\n                "id": "1"\n            }\n        }\n')),(0,r.kt)("h3",{id:"atributos"},"Atributos"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Atributo"),(0,r.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"),(0,r.kt)("th",{parentName:"tr",align:null},"Tipo dato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"href")),(0,r.kt)("td",{parentName:"tr",align:null},"url del Usuarios"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"identificador \xfanico del Usuarios"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"firstName")),(0,r.kt)("td",{parentName:"tr",align:null},"nombre del usuario"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lastName")),(0,r.kt)("td",{parentName:"tr",align:null},"apellido del usuario"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"email")),(0,r.kt)("td",{parentName:"tr",align:null},"correo electr\xf3nico del usuario"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"state")),(0,r.kt)("td",{parentName:"tr",align:null},"estado del usuario indica si esta activo(0) o inactivo (1)"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"office")),(0,r.kt)("td",{parentName:"tr",align:null},"nodo que indica la sucursal por defecto configurada para la usuario."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"get-lista-de-usuarios"},"GET lista de Usuarios"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/users.json")," retornar\xe1 todos las Usuarios.")),(0,r.kt)("h4",{id:"par\xe1metros"},"Par\xe1metros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"limit"),", limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"offset"),", permite paginar los items de una respuesta JSON, por defecto el offset es 0."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fields"),", solo devolver atributos espec\xedficos de un recurso"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"firstname"),", filtra los usuarios por nombre."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"lastname"),", filtra los usuarios por apellido."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"email"),", filtra los usuarios por email."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"officeid"),", recupera los usuarios por la sucursal que tienen asignada."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"state"),", boolean (0 o 1) indica si los usuarios est\xe1n activos(0) inactivos (1).")),(0,r.kt)("h4",{id:"ejemplos"},"Ejemplos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/users.json?limit=10&offset=0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/users.json?fields=[firstname,lastname]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/users.json?officeid=1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/users.json?expand=[office]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/users.json?state=0"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /users.json "',title:'"Response',"/users.json":!0,'"':!0},'{\n    "href": "https://api.bsale.cl/v1/users.json",\n    "count": 2,\n    "limit": 25,\n    "offset": 0,\n    "items": [\n        {\n            "href": "https://api.bsale.cl/v1/users/2.json",\n            "id": 2,\n            "firstName": "Gabriel",\n            "lastName": "Seguel",\n            "email": "gseguel@bsale-prueba.cl",\n            "state": 0,\n            "office": {\n                "href": "https://api.bsale.cl/v1/offices/1.json",\n                "id": "1"\n            }\n        },\n        {\n            "href": "https://api.bsale.cl/v1/users/1.json",\n            "id": 1,\n            "firstName": "Soporte ",\n            "lastName": "bsale",\n            "email": "support@imaginex.cl",\n            "state": 0,\n            "office": {\n                "href": "https://api.bsale.cl/v1/offices/1.json",\n                "id": "1"\n            }\n        }\n    ]\n}\n')),(0,r.kt)("h2",{id:"get-un-usuario"},"GET un usuario"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/users/1.json")," retornar\xe1 un usuario espec\xedfico.")),(0,r.kt)("h4",{id:"par\xe1metros-1"},"Par\xe1metros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones.")),(0,r.kt)("h4",{id:"ejemplo"},"Ejemplo"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/clients/32.json?expand=[office]"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /users/10.json"',title:'"Response','/users/10.json"':!0},'{\n    "href": "https://api.bsale.cl/v1/users/10.json",\n    "id": 1,\n    "firstName": "Juan",\n    "lastName": "Otto",\n    "email": "ottoj@gmail.com",\n    "state": 0,\n    "office": {\n        "href": "https://api.bsale.cl/v1/offices/3.json",\n        "id": "3"\n    }\n}\n')),(0,r.kt)("h2",{id:"get-resumen-de-ventas-por-usuario"},"GET resumen de ventas por usuario"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/users/sales_summary.json")," Retornar\xe1 las ventas de los usuarios dentro de un rango de fecha. ",(0,r.kt)("strong",{parentName:"li"},"(Requiere uso de filtro)"))),(0,r.kt)("h4",{id:"par\xe1metros-2"},"Par\xe1metros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"userid"),", recupera las ventas para un usuario espec\xedfico (Integer)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"startdate"),", fecha de inicio de ventas , por defecto es la fecha del dia de la petici\xf3n (Integer)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"enddate"),", fecha fin de ventas, por defecto es la fecha del dia de la petici\xf3n (Integer).")),(0,r.kt)("h4",{id:"ejemplos-1"},"Ejemplos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/users/sales_summary.json?userid=113")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/users/sales_summary.json?startdate=1438560000&enddate=1438560000")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/users/sales_summary.json?startdate=1438560000&enddate=1438560000&userid=113"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "startDate": 1576022400,\n    "endDate": 1576022400,\n    "total": 22500.0,\n    "sellers": [\n        {\n            "href": "https://api.bsale.cl/v1/users/2.json",\n            "id": 2,\n            "fullName": "Gabriel Seguel",\n            "subtotal": 7500.0,\n            "taxSubtotal": 1197.0,\n            "sales": {\n                "href": "https://api.bsale.cl/v1/users/2/sales.json?startdate=1576022400&enddate=1576022400"\n            },\n            "returns": {\n                "href": "https://api.bsale.cl/v1/users/2/returns.json?startdate=1576022400&enddate=1576022400"\n            }\n        },\n        {\n            "href": "https://api.bsale.cl/v1/users/1.json",\n            "id": 1,\n            "fullName": "Soporte  bsale",\n            "subtotal": 15000.0,\n            "taxSubtotal": 2395.0,\n            "sales": {\n                "href": "https://api.bsale.cl/v1/users/1/sales.json?startdate=1576022400&enddate=1576022400"\n            },\n            "returns": {\n                "href": "https://api.bsale.cl/v1/users/1/returns.json?startdate=1576022400&enddate=1576022400"\n            }\n        }\n    ]\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"startDate"),", fecha de inicio de las ventas (Integer)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"endDate"),", fecha fin de las ventas (Integer)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"total"),", total vendido (Float)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sellers"),", nodo que representa a los usuarios que generaron documentos en la fecha de la consulta."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"subtotal"),", total vendido por el usuario (ventas menos devoluciones), puede incluir impuesto depende la configuraci\xf3n de Bsale (Float)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"taxSubtotal"),", total de impuestos generados por el usuario (Float)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sales"),", nodo que representa a los documentos de venta generados por el usuario."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"returns"),", nodo que representa las devoluciones asignadas al usuario.")),(0,r.kt)("h2",{id:"get-ventas-por-usuarios"},"GET ventas por usuarios"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/users/128/sales.json")," Retornar\xe1 los documentos de venta asignados al usuario..")),(0,r.kt)("h4",{id:"par\xe1metros-3"},"Par\xe1metros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"startdate"),", fecha de inicio de ventas , por defecto es la fecha del dia de la petici\xf3n (Integer)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"enddate"),", fecha fin de ventas, por defecto es la fecha del dia de la petici\xf3n (Integer).")),(0,r.kt)("h4",{id:"ejemplos-2"},"Ejemplos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/users/128/sales.json?startdate=1438560000&enddate=1438560000"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "href": "https://api.bsale.cl/v1/users/1/sales.json?startdate=1576022400&enddate=1576022400",\n    "count": 1,\n    "limit": 25,\n    "offset": 0,\n    "items": [\n        {\n            "href": "https://api.bsale.cl/v1/documents/83.json",\n            "id": 83,\n            "name": "BOLETA MANUAL (no valido al SII)",\n            "number": 39\n        }\n    ]\n}\n')),(0,r.kt)("h2",{id:"get-devoluciones-por-usuarios"},"GET devoluciones por usuarios"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/users/128/returns.json")," Retornar\xe1 las devoluciones asignados al usuario..")),(0,r.kt)("h4",{id:"par\xe1metros-4"},"Par\xe1metros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"startdate"),", fecha de inicio de las devoluciones , por defecto es la fecha del dia de la petici\xf3n (Integer)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"enddate"),", fecha fin de devoluciones, por defecto es la fecha del dia de la petici\xf3n (Integer).")),(0,r.kt)("h4",{id:"ejemplos-3"},"Ejemplos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/users/2/returns.json?startdate=1570884055000&enddate=1576154470"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "href": "https://api.bsale.cl/v1/users/128/returns.json?startdate=1438560000&enddate=1438560000",\n  "count": 2,\n  "limit": 25,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.cl/v1/documents/6604.json",\n      "id": 6604,\n      "name": "Nota de cr\xe9dito",\n      "number": 50\n    },\n    {\n      "href": "https://api.bsale.cl/v1/documents/6606.json",\n      "id": 6606,\n      "name": "Nota de cr\xe9dito",\n      "number": 60\n    }\n  ]\n}\n')))}d.isMDXComponent=!0}}]);