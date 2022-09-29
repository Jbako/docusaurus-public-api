"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[9670],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=a.createContext({}),l=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=l(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,p=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),c=l(n),m=o,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7393:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:21,title:"Tipos de productos y servicios",description:"Crear, editar y listar tipos de productos",slug:"/tipos-de-productos-y-servicios"},i="Tipos de productos y servicios",s={unversionedId:"Productos y Servicios/Tipos de productos y servicios",id:"Productos y Servicios/Tipos de productos y servicios",title:"Tipos de productos y servicios",description:"Crear, editar y listar tipos de productos",source:"@site/docs/Productos y Servicios/Tipos de productos y servicios.md",sourceDirName:"Productos y Servicios",slug:"/tipos-de-productos-y-servicios",permalink:"/docusaurus-public-api/tipos-de-productos-y-servicios",draft:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21,title:"Tipos de productos y servicios",description:"Crear, editar y listar tipos de productos",slug:"/tipos-de-productos-y-servicios"},sidebar:"tutorialSidebar",previous:{title:"Productos y servicios",permalink:"/docusaurus-public-api/productos-y-servicios"},next:{title:"Variantes",permalink:"/docusaurus-public-api/variantes"}},p={},l=[{value:"Estructura JSON",id:"estructura-json",level:2},{value:"Atributos",id:"atributos",level:3},{value:"GET lista de tipos de producto",id:"get-lista-de-tipos-de-producto",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:4},{value:"Ejemplos",id:"ejemplos",level:4},{value:"GET un tipo de producto",id:"get-un-tipo-de-producto",level:2},{value:"GET productos asociados a un tipo de producto",id:"get-productos-asociados-a-un-tipo-de-producto",level:2},{value:"GET cantidad de tipos de producto",id:"get-cantidad-de-tipos-de-producto",level:2},{value:"GET atributos de un tipo de producto",id:"get-atributos-de-un-tipo-de-producto",level:2},{value:"GET un atributo de un tipo de producto espec\xedfico",id:"get-un-atributo-de-un-tipo-de-producto-espec\xedfico",level:4},{value:"POST un tipo de producto",id:"post-un-tipo-de-producto",level:2},{value:"Ejemplo JSON",id:"ejemplo-json",level:3},{value:"Env\xedo",id:"env\xedo",level:4},{value:"Atributos (opcional)",id:"atributos-opcional",level:3},{value:"Respuesta",id:"respuesta",level:4},{value:"PUT un tipo de producto",id:"put-un-tipo-de-producto",level:2},{value:"Ejemplo JSON",id:"ejemplo-json-1",level:3},{value:"Env\xedo",id:"env\xedo-1",level:4},{value:"Respuesta",id:"respuesta-1",level:4},{value:"DELETE un tipo producto virtualmente",id:"delete-un-tipo-producto-virtualmente",level:2}],d={toc:l};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tipos-de-productos-y-servicios"},"Tipos de productos y servicios"),(0,o.kt)("p",null,"Listar, editar, crear y eliminar tipos de producto"),(0,o.kt)("p",null,"C\xf3mo funciona la interfaz de Bsale, mira \xe9stos videos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Creaci\xf3n Tipos de producto ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=TXMq5CH8TUY"},"Ver")," ")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Para que un producto pueda asociarse a un tipo de producto, ",(0,o.kt)("strong",{parentName:"p"},"primero se debe crear el tipo de producto")," y referenciar su id en la creaci\xf3n del producto.")),(0,o.kt)("h2",{id:"estructura-json"},"Estructura JSON"),(0,o.kt)("p",null,"Al realizar una petici\xf3n ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP"),", el servicio retornara un JSON con la siguiente estructura:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Response /product_types/2.json"',title:'"Response','/product_types/2.json"':!0},'{\n  "href": "https://api.bsale.cl/v1/product_types/2.json",\n  "id": 2,\n  "name": "Sin Tipo de Producto",\n  "isEditable": 1,\n  "state": 0,\n  "imagestionCategoryId": 0,\n  "prestashopCategoryId": 0,\n  "attributes": {\n    "href": "https://api.bsale.cl/v1/product_types/2/attributes.json"\n  }\n}\n')),(0,o.kt)("h3",{id:"atributos"},"Atributos"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Atributo"),(0,o.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"),(0,o.kt)("th",{parentName:"tr",align:null},"Tipo dato"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"href")),(0,o.kt)("td",{parentName:"tr",align:null},"url del tipo de producto"),(0,o.kt)("td",{parentName:"tr",align:null},"String")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"id")),(0,o.kt)("td",{parentName:"tr",align:null},"identificador \xfanico del tipo de producto"),(0,o.kt)("td",{parentName:"tr",align:null},"Integer")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"name")),(0,o.kt)("td",{parentName:"tr",align:null},"nombre del del tipo de producto"),(0,o.kt)("td",{parentName:"tr",align:null},"String")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"isEditable")),(0,o.kt)("td",{parentName:"tr",align:null},"indica si el tipo de producto se puede editar No(0) o Si (1)"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"state")),(0,o.kt)("td",{parentName:"tr",align:null},"estado del tipo de producto activo(0) o inactivo (1)"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"imagestionCategoryId")),(0,o.kt)("td",{parentName:"tr",align:null},"identificador en imagestion ",(0,o.kt)("em",{parentName:"td"},"legacy")),(0,o.kt)("td",{parentName:"tr",align:null},"Integer")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"prestashopCategoryId")),(0,o.kt)("td",{parentName:"tr",align:null},"identificador en prestashop ",(0,o.kt)("em",{parentName:"td"},"legacy")),(0,o.kt)("td",{parentName:"tr",align:null},"Integer")))),(0,o.kt)("h2",{id:"get-lista-de-tipos-de-producto"},"GET lista de tipos de producto"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/v1/product_types.json")," retornar\xe1 todos los tipos de producto.")),(0,o.kt)("h4",{id:"par\xe1metros"},"Par\xe1metros"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"limit"),", limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"offset"),", permite paginar los items de una respuesta JSON, por defecto el offset es 0."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"fields"),", solo devolver atributos espec\xedficos de un recurso"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name"),", Permite filtrar por nombre tipo producto."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"state"),", boolean (0 o 1) indica si los tipos de producto est\xe1n activos(0) inactivos(1).")),(0,o.kt)("h4",{id:"ejemplos"},"Ejemplos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /v1/product_types.json?limit=10&offset=0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /v1/product_types.json?fields=[name,state]")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /v1/product_types.json?state=0"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /product_types.json "',title:'"Response',"/product_types.json":!0,'"':!0},'{\n  "href": "https://api.bsale.cl/v1/product_types.json",\n  "count": 4,\n  "limit": 25,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.cl/v1/product_types/30.json",\n      "id": 30,\n      "name": "Accesorios Computaci\xf3n",\n      "isEditable": 1,\n      "state": 0,\n      "imagestionCategoryId": 0,\n      "prestashopCategoryId": 0,\n      "attributes": {\n        "href": "https://api.bsale.cl/v1/product_types/30/attributes.json"\n      }\n    },\n    {\n      "href": "https://api.bsale.cl/v1/product_types/9.json",\n      "id": 9,\n      "name": "Arriendo de producto",\n      "isEditable": 1,\n      "state": 0,\n      "imagestionCategoryId": 0,\n      "prestashopCategoryId": 0,\n      "attributes": {\n        "href": "https://api.bsale.cl/v1/product_types/9/attributes.json"\n      }\n    },\n    {\n      "href": "https://api.bsale.cl/v1/product_types/16.json",\n      "id": 16,\n      "name": "ARRIENDOS CHILEAN",\n      "isEditable": 1,\n      "state": 0,\n      "imagestionCategoryId": 0,\n      "prestashopCategoryId": 0,\n      "attributes": {\n        "href": "https://api.bsale.cl/v1/product_types/16/attributes.json"\n      }\n    },\n    {\n      "href": "https://api.bsale.cl/v1/product_types/5.json",\n      "id": 5,\n      "name": "Art\xedculos Oficina",\n      "isEditable": 1,\n      "state": 0,\n      "imagestionCategoryId": 0,\n      "prestashopCategoryId": 0,\n      "attributes": {\n        "href": "https://api.bsale.cl/v1/product_types/5/attributes.json"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"get-un-tipo-de-producto"},"GET un tipo de producto"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/v1/product_types/2.json")," retornar\xe1 un tipo de producto espec\xedfico.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /product_types/2.json"',title:'"Response','/product_types/2.json"':!0},'{\n  "href": "https://api.bsale.cl/v1/product_types/2.json",\n  "id": 2,\n  "name": "Sin Tipo de Producto",\n  "isEditable": 1,\n  "state": 0,\n  "imagestionCategoryId": 0,\n  "prestashopCategoryId": 0,\n  "attributes": {\n    "href": "https://api.bsale.cl/v1/product_types/2/attributes.json"\n  }\n}\n')),(0,o.kt)("h2",{id:"get-productos-asociados-a-un-tipo-de-producto"},"GET productos asociados a un tipo de producto"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"GET /v1/product_types/3/products.json")," retorna un arreglo de los productos que pertenezcan al tipo de producto.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "href": "https://api.bsale.cl/v1/products.json",\n  "count": 2,\n  "limit": 25,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.cl/v1/products/2.json",\n      "id": 2,\n      "name": "Asesoria Informatica Imagestion Capacitacion",\n      "description": "",\n      "classification": 1,\n      "ledgerAccount": "",\n      "costCenter": "",\n      "allowDecimal": 1,\n      "stockControl": 0,\n      "printDetailPack": 0,\n      "state": 0,\n      "prestashopProductId": 0,\n      "presashopAttributeId": 0,\n      "product_type": {\n        "href": "https://api.bsale.cl/v1/product_types/3.json",\n        "id": "3"\n      }\n    },\n    {\n      "href": "https://api.bsale.cl/v1/products/49.json",\n      "id": 49,\n      "name": "Etravel Capacitacion",\n      "description": "",\n      "classification": 1,\n      "ledgerAccount": "",\n      "costCenter": "",\n      "allowDecimal": 1,\n      "stockControl": 0,\n      "printDetailPack": 0,\n      "state": 0,\n      "prestashopProductId": 0,\n      "presashopAttributeId": 0,\n      "product_type": {\n        "href": "https://api.bsale.cl/v1/product_types/3.json",\n        "id": "3"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"get-cantidad-de-tipos-de-producto"},"GET cantidad de tipos de producto"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"GET ",(0,o.kt)("inlineCode",{parentName:"p"},"/v1/product_types/count.json")," Retornar\xe1 cantidades de registros.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"state"),", boolean (0 o 1) indica si los tipos de productos est\xe1n activos(0) inactivos (1)."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "count": 1926\n}\n')),(0,o.kt)("h2",{id:"get-atributos-de-un-tipo-de-producto"},"GET atributos de un tipo de producto"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/v1/product_types/44/attributes.json")," Retornar\xe1 atributos asociados al tipo de producto.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /product_types/44/attributes.json"',title:'"Response','/product_types/44/attributes.json"':!0},'{\n  "href": "https://api.bsale.cl/v1/product_types/44/attributes.json",\n  "count": 2,\n  "limit": 25,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.cl/v1/product_types/44/attributes/46.json",\n      "id": 46,\n      "name": "Fabricante",\n      "isMandatory": 0,\n      "generateVariantName": 1,\n      "hasOptions": 1,\n      "options": "Nintendo|Microsoft|Sony",\n      "state": 0\n    },\n    {\n      "href": "https://api.bsale.cl/v1/product_types/44/attributes/47.json",\n      "id": 47,\n      "name": "Sistema",\n      "isMandatory": 0,\n      "generateVariantName": 1,\n      "hasOptions": 1,\n      "options": "Wii U|Xone|PS4",\n      "state": 0\n    }\n  ]\n}\n')),(0,o.kt)("h4",{id:"get-un-atributo-de-un-tipo-de-producto-espec\xedfico"},"GET un atributo de un tipo de producto espec\xedfico"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/v1/product_types/156/attributes/93.json")," Retornar\xe1 un atributo asociados al tipo de producto.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /product_types/156/attributes/93.json"',title:'"Response','/product_types/156/attributes/93.json"':!0},'{\n  "href": "https://api.bsale.cl/v1/product_types/156/attributes/93.json",\n  "id": 93,\n  "name": "atributito",\n  "isMandatory": 0,\n  "generateVariantName": 0,\n  "hasOptions": 0,\n  "options": "",\n  "state": 0\n}\n')),(0,o.kt)("h2",{id:"post-un-tipo-de-producto"},"POST un tipo de producto"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"POST ",(0,o.kt)("inlineCode",{parentName:"li"},"/v1/product_types.json")," ")),(0,o.kt)("p",null,"Para crear un tipo de producto, se debe enviar un JSON con la siguiente estructura:"),(0,o.kt)("h3",{id:"ejemplo-json"},"Ejemplo JSON"),(0,o.kt)("h4",{id:"env\xedo"},"Env\xedo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Discos f\xedsicos"\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name"),", nombre del tipo de producto (String).")),(0,o.kt)("h3",{id:"atributos-opcional"},"Atributos (opcional)"),(0,o.kt)("p",null,"Si se desean crear atributos especiales para el tipo de producto se debe enviar la siguiente estructura."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Discos f\xedsicos",\n  "attributes": [\n    {\n      "name": "Fabricante",\n      "isMandatory": 0,\n      "generateVariantName": 1,\n      "hasOptions": 1,\n      "options": "Nintendo|Microsoft|Sony",\n      "state": 0\n    },\n    {\n      "name": "Sistema",\n      "isMandatory": 0,\n      "generateVariantName": 1,\n      "hasOptions": 1,\n      "options": "Wii U|Xone|PS4",\n      "state": 0\n    }\n  ]\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name"),", nombre del atributo (String)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"isMandatory"),", indica si el atributo es obligatorio, 0 es No 1 es Si (Boolean)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"generateVariantName"),", indica si el atributo se usara para generar el nombre de la variante, 0 es No 1 es Si(Boolean)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"hasOptions"),", indica si el atributo tendr\xe1 opciones, 0 es No 1 es Si (Boolean)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"options"),', opciones del atributo, se separan con el car\xe1cter "|" (String).'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"state"),", indica el estado del atributo, 0 Activo 1 Inactivo (Boolean).")),(0,o.kt)("h4",{id:"respuesta"},"Respuesta"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "href": "https://api.bsale.cl/v1/product_types/44.json",\n  "id": 44,\n  "name": "Discos f\xedsicos",\n  "isEditable": 1,\n  "state": 0,\n  "imagestionCategoryId": 0,\n  "prestashopCategoryId": 0,\n  "attributes": {\n    "href": "https://api.bsale.cl/v1/product_types/44/attributes.json"\n  }\n}\n')),(0,o.kt)("h2",{id:"put-un-tipo-de-producto"},"PUT un tipo de producto"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PUT ",(0,o.kt)("inlineCode",{parentName:"li"},"/v1/product_types/44.json")," ")),(0,o.kt)("p",null,'Se debe enviar un Json con la siguiente estructura, si se desea cambiar los atributos se debe enviar el "id" de lo contrario se crea otro atributo.'),(0,o.kt)("h3",{id:"ejemplo-json-1"},"Ejemplo JSON"),(0,o.kt)("h4",{id:"env\xedo-1"},"Env\xedo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 44,\n  "name": "Consolas Next GEN 2",\n  "attributes": [\n    {\n      "id": 1,\n      "name": "Fabricante",\n      "isMandatory": 0,\n      "generateVariantName": 1,\n      "hasOptions": 1,\n      "options": "Nintendo|Microsoft|Sony",\n      "state": 0\n    },\n    {\n      "id": 2,\n      "name": "Sistema",\n      "isMandatory": 0,\n      "generateVariantName": 1,\n      "hasOptions": 1,\n      "options": "Wii U|Xone|PS4",\n      "state": 0\n    }\n  ]\n}\n')),(0,o.kt)("h4",{id:"respuesta-1"},"Respuesta"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "href": "https://api.bsale.cl/v1/product_types/44.json",\n  "id": 44,\n  "name": "Consolas Next GEN",\n  "isEditable": 1,\n  "state": 0,\n  "imagestionCategoryId": 0,\n  "prestashopCategoryId": 0,\n  "attributes": {\n    "href": "https://api.bsale.cl/v1/product_types/44/attributes.json"\n  }\n}\n')),(0,o.kt)("h2",{id:"delete-un-tipo-producto-virtualmente"},"DELETE un tipo producto virtualmente"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DELETE ",(0,o.kt)("inlineCode",{parentName:"li"},"/v1/product_types/44.json "),"\nCambia el estado del tipo producto.")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"El producto no estar\xe1 visible mediante interfaz y tendr\xe1 un ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," 99")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "href": "https://api.bsale.cl/v1/product_types/44.json",\n   "id": 44,\n   "name": "Consolas Next GEN 2",\n   "isEditable": 1,\n   "state": 1,\n   "imagestionCategoryId": 0,\n   "prestashopCategoryId": 0,\n   "attributes": {\n       "href": "https://api.bsale.cl/v1/product_types/44/attributes.json"\n   }\n}\n')))}u.isMDXComponent=!0}}]);