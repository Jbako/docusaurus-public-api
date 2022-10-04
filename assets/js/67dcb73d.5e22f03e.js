"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[4261],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=o(n),m=r,k=c["".concat(u,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:52,title:"Sucursales",description:"Crear, editar y listar sucursales",slug:"/sucursales"},i="sucursales",s={unversionedId:"Configuraci\xf3n/Sucursales",id:"version-MX/Configuraci\xf3n/Sucursales",title:"Sucursales",description:"Crear, editar y listar sucursales",source:"@site/versioned_docs\\version-MX\\Configuraci\xf3n\\Sucursales.md",sourceDirName:"Configuraci\xf3n",slug:"/sucursales",permalink:"/docusaurus-public-api/MX/sucursales",draft:!1,tags:[],version:"MX",sidebarPosition:52,frontMatter:{sidebar_position:52,title:"Sucursales",description:"Crear, editar y listar sucursales",slug:"/sucursales"},sidebar:"tutorialSidebar",previous:{title:"Descuentos",permalink:"/docusaurus-public-api/MX/descuentos"},next:{title:"Usuarios",permalink:"/docusaurus-public-api/MX/usuarios"}},u={},o=[{value:"Estructura JSON",id:"estructura-json",level:2},{value:"Atributos",id:"atributos",level:3},{value:"GET lista de sucursales",id:"get-lista-de-sucursales",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:4},{value:"Ejemplos",id:"ejemplos",level:4},{value:"GET una sucursal",id:"get-una-sucursal",level:2},{value:"GET cantidad de sucursales",id:"get-cantidad-de-sucursales",level:2},{value:"POST una sucursal",id:"post-una-sucursal",level:2},{value:"Ejemplo JSON",id:"ejemplo-json",level:3},{value:"Env\xedo",id:"env\xedo",level:4},{value:"Respuesta",id:"respuesta",level:4},{value:"PUT un cliente",id:"put-un-cliente",level:2},{value:"Ejemplo JSON",id:"ejemplo-json-1",level:3},{value:"Env\xedo",id:"env\xedo-1",level:4},{value:"Respuesta",id:"respuesta-1",level:4},{value:"DELETE una sucursal virtualmente",id:"delete-una-sucursal-virtualmente",level:2}],d={toc:o};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sucursales"},"sucursales"),(0,r.kt)("p",null,"Listar, editar crear y eliminar sucursales. "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"La creaci\xf3n est\xe1 condicionada por el ",(0,r.kt)("a",{parentName:"p",href:"https://www.bsale.cl/sheet/precios/"},"Plan")," asociado a la instancia.")),(0,r.kt)("h2",{id:"estructura-json"},"Estructura JSON"),(0,r.kt)("p",null,"Al realizar una petici\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP"),", el servicio retornara un JSON con la siguiente estructura:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Response /offices/1.json"',title:'"Response','/offices/1.json"':!0},'{\n  "href": "https://api.bsale.cl/v1/offices/1.json",\n  "id": 1,\n  "name": "Tienda Online",\n  "description": "",\n  "address": "",\n  "latitude": "",\n  "longitude": "",\n  "isVirtual": 1,\n  "country": null,\n  "municipality": "",\n  "city": null,\n  "zipCode": null,\n  "costCenter": "",\n  "state": 1,\n  "imagestionCellarId": 0\n}\n')),(0,r.kt)("h3",{id:"atributos"},"Atributos"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Atributo"),(0,r.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"),(0,r.kt)("th",{parentName:"tr",align:null},"Tipo dato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"href")),(0,r.kt)("td",{parentName:"tr",align:null},"url del sucursales"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"identificador \xfanico del sucursales"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"nombre de la sucursal"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:null},"descripci\xf3n de la sucursal"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:null},"direcci\xf3n de la sucursal"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"latitude")),(0,r.kt)("td",{parentName:"tr",align:null},"latitud de la sucursal"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"longitude")),(0,r.kt)("td",{parentName:"tr",align:null},"longitud la sucursal"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"isVirtual")),(0,r.kt)("td",{parentName:"tr",align:null},"indica si la sucursal estar\xe1 disponible para trabajar en una pagina web No(0) o Si (1)"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"municipality")),(0,r.kt)("td",{parentName:"tr",align:null},", comuna de la sucursal"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"city")),(0,r.kt)("td",{parentName:"tr",align:null},"ciudad de la sucursal"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"zipCode")),(0,r.kt)("td",{parentName:"tr",align:null},"c\xf3digo postas de la sucursal"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"costCenter")),(0,r.kt)("td",{parentName:"tr",align:null},"centro de costo de la sucursal"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"state")),(0,r.kt)("td",{parentName:"tr",align:null},"estado de la sucursal activo(0) o inactivo (1)"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"imagestionCellarId")),(0,r.kt)("td",{parentName:"tr",align:null},"identificador de la bodega en imagestion"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")))),(0,r.kt)("h2",{id:"get-lista-de-sucursales"},"GET lista de sucursales"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/offices.json")," retornar\xe1 todos las sucursales.")),(0,r.kt)("h4",{id:"par\xe1metros"},"Par\xe1metros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"limit"),", limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"offset"),", permite paginar los items de una respuesta JSON, por defecto el offset es 0."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fields"),", solo devolver atributos espec\xedficos de un recurso"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name"),", Permite filtrar por nombre de las sucursales."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"address"),", filtra por direcci\xf3n dde las sucursales."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"country"),", filtra por pa\xeds de las sucursales."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"city"),", filtra por ciudad de las sucursales."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"municipality"),", filtra por comuna de las sucursales."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"costcenter"),", filtra centro de costo de las sucursales."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"state"),", boolean (0 o 1) indica si las sucursales est\xe1n activas(0) inactivas (1).")),(0,r.kt)("h4",{id:"ejemplos"},"Ejemplos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/offices.json?limit=10&offset=0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/offices.json?fields=[name,address,costcenter]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/offices.json?state=0"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /offices.json "',title:'"Response',"/offices.json":!0,'"':!0},'{\n  "href": "https://api.bsale.cl/v1/offices.json",\n  "count": 4,\n  "limit": 25,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.cl/v1/offices/2.json",\n      "id": 2,\n      "name": "Casa Matriz - Puerto Varas",\n      "description": "",\n      "address": "Direccion de la sucursal",\n      "latitude": "",\n      "longitude": "",\n      "isVirtual": 0,\n      "country": "",\n      "municipality": "",\n      "city": "",\n      "zipCode": "",\n      "costCenter": "",\n      "state": 0,\n      "imagestionCellarId": 0\n    },\n    {\n      "href": "https://api.bsale.cl/v1/offices/3.json",\n      "id": 3,\n      "name": "Casa Matriz Pto. Varas en ($)",\n      "description": "",\n      "address": "Direccion de la sucursal",\n      "latitude": "",\n      "longitude": "",\n      "isVirtual": 0,\n      "country": "",\n      "municipality": "",\n      "city": "",\n      "zipCode": "",\n      "costCenter": "",\n      "state": 1,\n      "imagestionCellarId": 0\n    },\n    {\n      "href": "https://api.bsale.cl/v1/offices/4.json",\n      "id": 4,\n      "name": "Internacional",\n      "description": "",\n      "address": "",\n      "latitude": "",\n      "longitude": "",\n      "isVirtual": 0,\n      "country": "",\n      "municipality": "",\n      "city": "",\n      "zipCode": "",\n      "costCenter": "",\n      "state": 0,\n      "imagestionCellarId": 0\n    },\n    {\n      "href": "https://api.bsale.cl/v1/offices/1.json",\n      "id": 1,\n      "name": "Tienda Online",\n      "description": "",\n      "address": "",\n      "latitude": "",\n      "longitude": "",\n      "isVirtual": 1,\n      "country": null,\n      "municipality": "",\n      "city": null,\n      "zipCode": null,\n      "costCenter": "",\n      "state": 1,\n      "imagestionCellarId": 0\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"get-una-sucursal"},"GET una sucursal"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/offices/1.json")," retornar\xe1 una sucursal espec\xedfica.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /offices/1.json"',title:'"Response','/offices/1.json"':!0},'{\n  "href": "https://api.bsale.cl/v1/offices/1.json",\n  "id": 1,\n  "name": "Tienda Online",\n  "description": "",\n  "address": "",\n  "latitude": "",\n  "longitude": "",\n  "isVirtual": 1,\n  "country": null,\n  "municipality": "",\n  "city": null,\n  "zipCode": null,\n  "costCenter": "",\n  "state": 1,\n  "imagestionCellarId": 0\n}\n')),(0,r.kt)("h2",{id:"get-cantidad-de-sucursales"},"GET cantidad de sucursales"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/v1/offices/count.json")," Retornar\xe1 cantidades de registros.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"state"),", boolean (0 o 1) indica si los sucursaless est\xe1n activos(0) inactivos (1)."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "count": 4\n}\n')),(0,r.kt)("h2",{id:"post-una-sucursal"},"POST una sucursal"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"POST ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/offices.json")," ")),(0,r.kt)("p",null,"Para crear un cliente, se debe enviar un JSON con la siguiente estructura:"),(0,r.kt)("h3",{id:"ejemplo-json"},"Ejemplo JSON"),(0,r.kt)("h4",{id:"env\xedo"},"Env\xedo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "longitude": "",\n  "zipCode": "000000",\n  "name": "Imaginex",\n  "latitude": "",\n  "isVirtual": 0,\n  "address": "Santa Rosa 402",\n  "country": "Chile",\n  "municipality": "Puerto Varas",\n  "city": "Puerto Varas",\n  "costCenter": "25",\n  "description": "Oficina"\n}\n')),(0,r.kt)("h4",{id:"respuesta"},"Respuesta"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "zipCode": "000000",\n  "longitude": "",\n  "state": 0,\n  "latitude": "",\n  "name": "Imaginex",\n  "isVirtual": 0,\n  "href": "https://api.bsale.cl/v1/offices/5.json",\n  "address": "Santa Rosa 402",\n  "id": 5,\n  "city": "Puerto Varas",\n  "municipality": "Puerto Varas",\n  "country": "Chile",\n  "costCenter": "25",\n  "description": "Oficina",\n  "imagestionCellarId": 0\n}\n')),(0,r.kt)("h2",{id:"put-un-cliente"},"PUT un cliente"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PUT ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/offices/5.json")," ")),(0,r.kt)("p",null,"Se debe enviar un Json con la siguiente estructura"),(0,r.kt)("h3",{id:"ejemplo-json-1"},"Ejemplo JSON"),(0,r.kt)("h4",{id:"env\xedo-1"},"Env\xedo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id":"97",\n  "name": "Imaginex TI",\n  "address": "Santa Rosa 402 oficina B" \n}\n')),(0,r.kt)("h4",{id:"respuesta-1"},"Respuesta"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "zipCode": "000000",\n  "longitude": "",\n  "state": 0,\n  "latitude": "",\n  "name": "Imaginex TI",\n  "isVirtual": 0,\n  "href": "https://api.bsale.cl/v1/offices/5.json",\n  "address": "SSanta Rosa 402 oficina B",\n  "id": 5,\n  "city": "Puerto Varas",\n  "municipality": "Puerto Varas",\n  "country": "Chile",\n  "costCenter": "25",\n  "description": "Oficina",\n  "imagestionCellarId": 0\n}\n')),(0,r.kt)("h2",{id:"delete-una-sucursal-virtualmente"},"DELETE una sucursal virtualmente"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DELETE ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/offices/5.json"),"\nCambia el estado de la sucursal")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"La sucursal no estar\xe1 visible mediante interfaz y tendr\xe1 un ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," 99. Sus documentos asociados ",(0,r.kt)("strong",{parentName:"p"},"NO")," se eliminar\xe1n.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "zipCode": "000000",\n  "longitude": "",\n  "state": 1,\n  "latitude": "",\n  "name": "Imaginex TI",\n  "isVirtual": 0,\n  "href": "https://api.bsale.cl/v1/offices/5.json",\n  "address": "Santa Rosa 402 oficina B",\n  "id": 5,\n  "city": "Puerto Varas",\n  "municipality": "Puerto Varas",\n  "country": "Chile",\n  "costCenter": "25",\n  "description": "Oficina",\n  "imagestionCellarId": 0\n}\n')))}p.isMDXComponent=!0}}]);