"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[6583],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),p=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=p(n),m=o,k=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(k,s(s({ref:e},d),{},{components:n})):a.createElement(k,s({ref:e},d))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,s=new Array(r);s[0]=c;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2334:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:20,title:"Productos y servicios",description:"Crear, editar y listar productos y servicios",slug:"/productos-y-servicios"},s="Productos y servicios",i={unversionedId:"Productos y Servicios/Productos y servicios",id:"version-CL/Productos y Servicios/Productos y servicios",title:"Productos y servicios",description:"Crear, editar y listar productos y servicios",source:"@site/versioned_docs/version-CL/Productos y Servicios/Productos y servicios.md",sourceDirName:"Productos y Servicios",slug:"/productos-y-servicios",permalink:"/docusaurus-public-api/CL/productos-y-servicios",draft:!1,tags:[],version:"CL",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Productos y servicios",description:"Crear, editar y listar productos y servicios",slug:"/productos-y-servicios"},sidebar:"tutorialSidebar",previous:{title:"Webhooks",permalink:"/docusaurus-public-api/CL/documentos/webhooks"},next:{title:"Tipos de productos y servicios",permalink:"/docusaurus-public-api/CL/tipos-de-productos-y-servicios"}},l={},p=[{value:"Estructura JSON",id:"estructura-json",level:2},{value:"Atributos",id:"atributos",level:3},{value:"GET lista de productos",id:"get-lista-de-productos",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:4},{value:"Ejemplos",id:"ejemplos",level:4},{value:"GET un producto",id:"get-un-producto",level:2},{value:"Par\xe1metros",id:"par\xe1metros-1",level:4},{value:"Ejemplos",id:"ejemplos-1",level:4},{value:"GET variantes de un producto",id:"get-variantes-de-un-producto",level:2},{value:"GET impuestos de un producto",id:"get-impuestos-de-un-producto",level:2},{value:"GET un impuesto de un producto",id:"get-un-impuesto-de-un-producto",level:4},{value:"GET cantidad de productos",id:"get-cantidad-de-productos",level:2},{value:"POST un producto",id:"post-un-producto",level:2},{value:"Ejemplo JSON",id:"ejemplo-json",level:3},{value:"Env\xedo",id:"env\xedo",level:4},{value:"Respuesta",id:"respuesta",level:4},{value:"PUT un producto",id:"put-un-producto",level:2},{value:"Ejemplo JSON",id:"ejemplo-json-1",level:3},{value:"Env\xedo",id:"env\xedo-1",level:4},{value:"Respuesta",id:"respuesta-1",level:4},{value:"DELETE un producto virtualmente",id:"delete-un-producto-virtualmente",level:2}],d={toc:p};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"productos-y-servicios"},"Productos y servicios"),(0,o.kt)("p",null,"Listar productos, variantes, cantidades, crear productos."),(0,o.kt)("p",null,"C\xf3mo funciona la interfaz de Bsale, mira \xe9stos videos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Creaci\xf3n un producto ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=eY3YBu3b-j0"},"Ver")," ")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Un producto puede tener 1 o m\xe1s variantes"),". Ej, (Nombre Producto) Poleron Blanco, (Nombre Variantes) Talla L, Talla M, Talla S. ",(0,o.kt)("strong",{parentName:"p"},"La variante se debe crear una vez creado el producto"),". Para vender un producto/variante creado, se debe indicar en el arreglo ",(0,o.kt)("inlineCode",{parentName:"p"},"details")," del documento.")),(0,o.kt)("h2",{id:"estructura-json"},"Estructura JSON"),(0,o.kt)("p",null,"Al realizar una petici\xf3n ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP"),", el servicio retornara un JSON con la siguiente estructura:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Response /v1/products/92.json"',title:'"Response','/v1/products/92.json"':!0},'{\n  "href": "https://api.bsale.io/v1/products/92.json",\n  "id": 92,\n  "name": null,\n  "description": null,\n  "classification": 0,\n  "ledgerAccount": null,\n  "costCenter": null,\n  "allowDecimal": 0,\n  "stockControl": 1,\n  "printDetailPack": 0,\n  "state": 99,\n  "prestashopProductId": 0,\n  "presashopAttributeId": 0,\n  "product_type": {\n    "href": "https://api.bsale.io/v1/product_types/1.json",\n    "id": "1"\n  },\n  "product_taxes": {\n    "href": "https://api.bsale.io/v1/products/92/product_taxes.json"\n  }\n}\n')),(0,o.kt)("h3",{id:"atributos"},"Atributos"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Atributo"),(0,o.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"),(0,o.kt)("th",{parentName:"tr",align:null},"Tipo dato"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"href")),(0,o.kt)("td",{parentName:"tr",align:null},"url del producto"),(0,o.kt)("td",{parentName:"tr",align:null},"String")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"id")),(0,o.kt)("td",{parentName:"tr",align:null},"identificador \xfanico del producto"),(0,o.kt)("td",{parentName:"tr",align:null},"Integer")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"name")),(0,o.kt)("td",{parentName:"tr",align:null},"nombre del producto"),(0,o.kt)("td",{parentName:"tr",align:null},"String")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"description")),(0,o.kt)("td",{parentName:"tr",align:null},"descripci\xf3n del producto"),(0,o.kt)("td",{parentName:"tr",align:null},"String")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"classification")),(0,o.kt)("td",{parentName:"tr",align:null},"indica la clase del producto 0 es producto, 1 es servicio y 3 si es un pack o promocion"),(0,o.kt)("td",{parentName:"tr",align:null},"Integer")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"ledgerAccount")),(0,o.kt)("td",{parentName:"tr",align:null},"cuenta contable del producto"),(0,o.kt)("td",{parentName:"tr",align:null},"String")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"costCenter")),(0,o.kt)("td",{parentName:"tr",align:null},"centro de costo del producto"),(0,o.kt)("td",{parentName:"tr",align:null},"String")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"allowDecimal")),(0,o.kt)("td",{parentName:"tr",align:null},"indica si el producto permite trabajar con decimales, ej, productos pesables.  No(0) o Si (1)"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"stockControl")),(0,o.kt)("td",{parentName:"tr",align:null},"indica si el producto controlara stock No(0) o Si (1)"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"printDetailPack")),(0,o.kt)("td",{parentName:"tr",align:null},"indica si se muestra el detalle del pack No(0) o Si (1)"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"state")),(0,o.kt)("td",{parentName:"tr",align:null},"estado del producto activo(0) o inactivo (1)"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"prestashopProductId")),(0,o.kt)("td",{parentName:"tr",align:null},"identificador del producto en prestashop en el caso de existir la integraci\xf3n ",(0,o.kt)("em",{parentName:"td"},"legacy")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"presashopAttributeId")),(0,o.kt)("td",{parentName:"tr",align:null},"identificador del producto en prestashop en el caso de existir la integraci\xf3n ",(0,o.kt)("em",{parentName:"td"},"legacy")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"product_type")),(0,o.kt)("td",{parentName:"tr",align:null},"nodo que indica la relaci\xf3n con el tipo de producto"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"product_taxes")),(0,o.kt)("td",{parentName:"tr",align:null},"nodo que indica los impuestos asociados al producto"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h2",{id:"get-lista-de-productos"},"GET lista de productos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/v1/products.json")," retornar\xe1 todos los despachos.")),(0,o.kt)("h4",{id:"par\xe1metros"},"Par\xe1metros"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"limit"),", limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"offset"),", permite paginar los items de una respuesta JSON, por defecto el offset es 0."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"fields"),", solo devolver atributos espec\xedficos de un recurso"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name"),", Permite filtrar por nombre del producto."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ledgeraccount"),", filtra por cuenta contable de los productos."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"costcenter"),", filtra centro de costo de los productos."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"producttypeid"),", filtra por tipo de producto."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"state"),", boolean (0 o 1) indica si los productos est\xe1n activos(0) inactivos (1).")),(0,o.kt)("h4",{id:"ejemplos"},"Ejemplos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /v1/products.json?limit=10&offset=0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /v1/products.json?fields=[name,ledgeraccount,description]")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /v1/products.json?producttypeid=1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /v1/products.json?expand=[product_type]")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /v1/products.json?classification=3"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /products.json "',title:'"Response',"/products.json":!0,'"':!0},'{\n  "href": "https://api.bsale.io/v1/products.json",\n  "count": 693,\n  "limit": 3,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.io/v1/products/731.json",\n      "id": 731,\n      "name": "11% Aval\xfao Fiscal Depto 515,",\n      "description": null,\n      "classification": 1,\n      "ledgerAccount": "",\n      "costCenter": "",\n      "allowDecimal": 0,\n      "stockControl": 0,\n      "printDetailPack": 0,\n      "state": 0,\n      "prestashopProductId": 0,\n      "presashopAttributeId": 0,\n      "product_type": {\n        "href": "https://api.bsale.io/v1/product_types/1.json",\n        "id": "1"\n      },\n      "product_taxes": {\n        "href": "https://api.bsale.io/v1/products/731/product_taxes.json"\n      }\n    },\n    {\n      "href": "https://api.bsale.io/v1/products/474.json",\n      "id": 474,\n      "name": "24 clases 3 veces a la semana",\n      "description": null,\n      "classification": 3,\n      "ledgerAccount": "",\n      "costCenter": "",\n      "allowDecimal": 0,\n      "stockControl": 0,\n      "printDetailPack": 0,\n      "state": 0,\n      "prestashopProductId": 0,\n      "presashopAttributeId": 0,\n      "product_type": {\n        "href": "https://api.bsale.io/v1/product_types/1.json",\n        "id": "1"\n      },\n      "product_taxes": {\n        "href": "https://api.bsale.io/v1/products/474/product_taxes.json"\n      }\n    },\n    {\n      "href": "https://api.bsale.io/v1/products/703.json",\n      "id": 703,\n      "name": "2x1",\n      "description": null,\n      "classification": 3,\n      "ledgerAccount": null,\n      "costCenter": null,\n      "allowDecimal": 0,\n      "stockControl": 0,\n      "printDetailPack": 0,\n      "state": 0,\n      "prestashopProductId": 0,\n      "presashopAttributeId": 0,\n      "product_type": {\n        "href": "https://api.bsale.io/v1/product_types/1.json",\n        "id": "1"\n      },\n      "product_taxes": {\n        "href": "https://api.bsale.io/v1/products/703/product_taxes.json"\n      }\n    }\n  ],\n  "next": "https://api.bsale.io/v1/products.json?limit=3&offset=3"\n}\n')),(0,o.kt)("h2",{id:"get-un-producto"},"GET un producto"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/v1/products/62.json ")," retornar\xe1 un producto espec\xedfico.")),(0,o.kt)("h4",{id:"par\xe1metros-1"},"Par\xe1metros"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n.")),(0,o.kt)("h4",{id:"ejemplos-1"},"Ejemplos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /v1/products/150.json?expand=[product_type]"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /products/150.json "',title:'"Response',"/products/150.json":!0,'"':!0},'{\n  "href": "https://api.bsale.io/v1/products/150.json",\n  "id": 150,\n  "name": "polera",\n  "description": "",\n  "classification": 0,\n  "ledgerAccount": "",\n  "costCenter": "",\n  "allowDecimal": 0,\n  "stockControl": 1,\n  "printDetailPack": 0,\n  "state": 0,\n  "prestashopProductId": 0,\n  "presashopAttributeId": 0,\n  "product_type": {\n    "href": "https://api.bsale.io/v1/product_types/1.json",\n    "id": "1"\n  },\n  "product_taxes": {\n    "href": "https://api.bsale.io/v1/products/150/product_taxes.json"\n  }\n}\n')),(0,o.kt)("h2",{id:"get-variantes-de-un-producto"},"GET variantes de un producto"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/v1/products/62/variants.json")," retorna las variantes de un producto.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /products/:id/variants.json "',title:'"Response',"/products/:id/variants.json":!0,'"':!0},'{\n  "href": "https://api.bsale.io/v1/variants.json",\n  "count": 3,\n  "limit": 25,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.io/v1/variants/500.json",\n      "id": 500,\n      "description": "gap",\n      "unlimitedStock": 0,\n      "allowNegativeStock": 0,\n      "state": 0,\n      "barCode": "1351176376",\n      "code": "1351176376",\n      "imagestionCenterCost": 0,\n      "imagestionAccount": 0,\n      "imagestionConceptCod": 0,\n      "imagestionProyectCod": 0,\n      "imagestionCategoryCod": 0,\n      "imagestionProductId": 0,\n      "serialNumber": 0,\n      "prestashopCombinationId": 0,\n      "prestashopValueId": 0,\n      "product": {\n        "href": "https://api.bsale.io/v1/products/150.json",\n        "id": "150"\n      },\n      "attribute_values": {\n        "href": "https://api.bsale.io/v1/variants/500/attribute_values.json"\n      },\n      "costs": {\n        "href": "https://api.bsale.io/v1/variants/500/costs.json"\n      }\n    },\n    {\n      "href": "https://api.bsale.io/v1/variants/499.json",\n      "id": 499,\n      "description": "L",\n      "unlimitedStock": 0,\n      "allowNegativeStock": 0,\n      "state": 0,\n      "barCode": "1351176361",\n      "code": "1351176361",\n      "imagestionCenterCost": 0,\n      "imagestionAccount": 0,\n      "imagestionConceptCod": 0,\n      "imagestionProyectCod": 0,\n      "imagestionCategoryCod": 0,\n      "imagestionProductId": 0,\n      "serialNumber": 0,\n      "prestashopCombinationId": 0,\n      "prestashopValueId": 0,\n      "product": {\n        "href": "https://api.bsale.io/v1/products/150.json",\n        "id": "150"\n      },\n      "attribute_values": {\n        "href": "https://api.bsale.io/v1/variants/499/attribute_values.json"\n      },\n      "costs": {\n        "href": "https://api.bsale.io/v1/variants/499/costs.json"\n      }\n    },\n    {\n      "href": "https://api.bsale.io/v1/variants/498.json",\n      "id": 498,\n      "description": "verde",\n      "unlimitedStock": 0,\n      "allowNegativeStock": 0,\n      "state": 0,\n      "barCode": "1351176256",\n      "code": "1351176256",\n      "imagestionCenterCost": 0,\n      "imagestionAccount": 0,\n      "imagestionConceptCod": 0,\n      "imagestionProyectCod": 0,\n      "imagestionCategoryCod": 0,\n      "imagestionProductId": 0,\n      "serialNumber": 0,\n      "prestashopCombinationId": 0,\n      "prestashopValueId": 0,\n      "product": {\n        "href": "https://api.bsale.io/v1/products/150.json",\n        "id": "150"\n      },\n      "attribute_values": {\n        "href": "https://api.bsale.io/v1/variants/498/attribute_values.json"\n      },\n      "costs": {\n        "href": "https://api.bsale.io/v1/variants/498/costs.json"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"get-impuestos-de-un-producto"},"GET impuestos de un producto"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/v1/products/150/product_taxes.json")," Retornar\xe1 impuestos asociados al producto.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /products/150/product_taxes.json "',title:'"Response',"/products/150/product_taxes.json":!0,'"':!0},'{\n  "href": "https://api.bsale.io/v1/products/150/product_taxes.json",\n  "count": 2,\n  "limit": 25,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.io/v1/products/150/product_taxes/159.json",\n      "id": "159",\n      "tax": {\n        "href": "https://api.bsale.io/v1/taxes/1.json",\n        "id": "1"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("h4",{id:"get-un-impuesto-de-un-producto"},"GET un impuesto de un producto"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/v1/products/150/product_taxes/159.json")," Retornar\xe1 un impuesto asociado al producto.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /products/150/product_taxes/159.json"',title:'"Response','/products/150/product_taxes/159.json"':!0},'{\n  "href": "https://api.bsale.io/v1/products/150/product_taxes/159.json",\n  "id": "159",\n  "tax": {\n    "href": "https://api.bsale.io/v1/taxes/1.json",\n    "id": "1"\n  }\n}\n')),(0,o.kt)("h2",{id:"get-cantidad-de-productos"},"GET cantidad de productos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/v1/products/count.json")," Retornar\xe1 la cantidad de registros de productos")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "count": 53\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"state"),", boolean (0 o 1) indica si los productos est\xe1n activos(0) inactivos (1).")),(0,o.kt)("h2",{id:"post-un-producto"},"POST un producto"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"POST ",(0,o.kt)("inlineCode",{parentName:"li"},"/v1/products.json")," ")),(0,o.kt)("p",null,"Se debe enviar un Json con la siguiente estructura."),(0,o.kt)("h3",{id:"ejemplo-json"},"Ejemplo JSON"),(0,o.kt)("h4",{id:"env\xedo"},"Env\xedo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Calcetines",\n  "allowDecimal": 0,\n  "stockControl": 1,\n  "productTypeId": 1\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name"),", nombre del producto (String)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"description"),", descripci\xf3n del producto (String)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"classification"),", indica la clase del producto 0 es producto, 1 es servicio (Integer)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"stockControl"),", indica si el producto controlara stock No(0) o Si (1) (Boolean)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"productTypeId"),", Id del tipo de producto (Integer)")),(0,o.kt)("h4",{id:"respuesta"},"Respuesta"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "stockControl": 1,\n  "name": "Calcetines",\n  "ledgerAccount": "",\n  "href": "https://api.bsale.io/v1/products/97.json",\n  "prestashopProductId": 0,\n  "presashopAttributeId": 0,\n  "costCenter": "",\n  "printDetailPack": 0,\n  "product_type": {\n    "href": "https://api.bsale.io/v1/product_types/1.json",\n    "id": "1"\n  },\n  "classification": 1,\n  "description": "",\n  "id": 97,\n  "state": 0,\n  "allowDecimal": 0\n}\n')),(0,o.kt)("h2",{id:"put-un-producto"},"PUT un producto"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PUT ",(0,o.kt)("inlineCode",{parentName:"li"},"/v1/products/97.json")," ")),(0,o.kt)("p",null,"Se debe enviar un Json con la siguiente estructura."),(0,o.kt)("h3",{id:"ejemplo-json-1"},"Ejemplo JSON"),(0,o.kt)("h4",{id:"env\xedo-1"},"Env\xedo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "id": "97",\n   "productTypeId": 10\n}\n')),(0,o.kt)("h4",{id:"respuesta-1"},"Respuesta"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "stockControl": 1,\n  "name": "Calcetines de Mujer",\n  "ledgerAccount": "Calcetas",\n  "href": "https://api.bsale.io/v1/products/97.json",\n  "prestashopProductId": 0,\n  "presashopAttributeId": 0,\n  "costCenter": "23",\n  "printDetailPack": 0,\n  "product_type": {\n    "href": "https://api.bsale.io/v1/product_types/1.json",\n    "id": "1"\n  },\n  "classification": 1,\n  "description": "Multiples colores de calcetines",\n  "id": 97,\n  "state": 0,\n  "allowDecimal": 0\n}\n')),(0,o.kt)("h2",{id:"delete-un-producto-virtualmente"},"DELETE un producto virtualmente"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DELETE ",(0,o.kt)("inlineCode",{parentName:"li"},"/v1/products/97.json"),"\nCambia el estado del producto.")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"El producto no estar\xe1 visible mediante interfaz y tendr\xe1 un ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," 99")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "href": "https://api.bsale.io/v1/products/97.json",\n  "id": 97,\n  "name": "Calcetines",\n  "description": "Multiples colores de calcetines",\n  "classification": 1,\n  "ledgerAccount": "Calcetas",\n  "costCenter": "23",\n  "allowDecimal": 0,\n  "stockControl": 1,\n  "printDetailPack": 0,\n  "state": 99,\n  "prestashopProductId": 0,\n  "presashopAttributeId": 0,\n  "product_type": {\n    "href": "https://api.bsale.io/v1/product_types/1.json",\n    "id": "1"\n  }\n}\n')))}u.isMDXComponent=!0}}]);