"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[5266],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,k=u["".concat(o,".").concat(m)]||u[m]||c[m]||l;return a?n.createElement(k,r(r({ref:t},d),{},{components:a})):n.createElement(k,r({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3786:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const l={sidebar_position:4,title:"Listas de precio",description:"Crear, editar y listar precios",slug:"/listas-de-precio"},r="Listas de precios",s={unversionedId:"Productos y Servicios/Listas de precio",id:"Productos y Servicios/Listas de precio",title:"Listas de precio",description:"Crear, editar y listar precios",source:"@site/docs/Productos y Servicios/Listas de precio.md",sourceDirName:"Productos y Servicios",slug:"/listas-de-precio",permalink:"/docusaurus-public-api/listas-de-precio",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Listas de precio",description:"Crear, editar y listar precios",slug:"/listas-de-precio"},sidebar:"tutorialSidebar",previous:{title:"Variantes",permalink:"/docusaurus-public-api/variantes"},next:{title:"Stocks",permalink:"/docusaurus-public-api/stocks"}},o={},p=[{value:"Estructura JSON",id:"estructura-json",level:2},{value:"Atributos",id:"atributos",level:3},{value:"GET listas de precio",id:"get-listas-de-precio",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:4},{value:"Ejemplos",id:"ejemplos",level:4},{value:"GET una lista de precio",id:"get-una-lista-de-precio",level:2},{value:"Par\xe1metros",id:"par\xe1metros-1",level:4},{value:"Ejemplos",id:"ejemplos-1",level:4},{value:"GET cantidad de listas de precio",id:"get-cantidad-de-listas-de-precio",level:2},{value:"GET detalles de una lista de precio",id:"get-detalles-de-una-lista-de-precio",level:2},{value:"Par\xe1metros",id:"par\xe1metros-2",level:4},{value:"Ejemplos",id:"ejemplos-2",level:4},{value:"GET un detalle de una lista de precio",id:"get-un-detalle-de-una-lista-de-precio",level:2},{value:"PUT un detalle de una lista de precio",id:"put-un-detalle-de-una-lista-de-precio",level:2},{value:"Ejemplo JSON",id:"ejemplo-json",level:3},{value:"Env\xedo",id:"env\xedo",level:4},{value:"Respuesta",id:"respuesta",level:4}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"listas-de-precios"},"Listas de precios"),(0,i.kt)("p",null,"Listar y editar detalles de las listas de precio en Bsale. "),(0,i.kt)("p",null,"C\xf3mo funciona la interfaz de Bsale, mira \xe9stos videos:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creaci\xf3n listas de precios ",(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/M8hXnw3nUDQ"},"Ver")," ")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Bsale gestiona 1 o m\xe1s listas de precio. (Ej Lista de precios temporada, lista distribuidores, lista por mayor, etc). Pueden ser concebidas con distintos tipos de moneda (dolar, franco, uf, etc)"),(0,i.kt)("p",{parentName:"admonition"},"Para usar las lista de precio creadas, referenciar ",(0,i.kt)("inlineCode",{parentName:"p"},"priceListId")," en el env\xedo del documento.")),(0,i.kt)("h2",{id:"estructura-json"},"Estructura JSON"),(0,i.kt)("p",null,"Al realizar una petici\xf3n ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP"),", el servicio retornara un JSON con la siguiente estructura:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Response /price_lists/3.json"',title:'"Response','/price_lists/3.json"':!0},'{\n  "href": "https://api.bsale.cl/v1/price_lists/3.json",\n  "id": "3",\n  "name": "LISTA USD",\n  "description": null,\n  "state": 0,\n  "coin": {\n    "href": "https://api.bsale.cl/v1/coins/3.json",\n    "id": "3"\n  },\n  "details": {\n    "href": "https://api.bsale.cl/v1/price_lists/3/details.json"\n  }\n}\n')),(0,i.kt)("h3",{id:"atributos"},"Atributos"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Atributo"),(0,i.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"),(0,i.kt)("th",{parentName:"tr",align:null},"Tipo dato"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"href")),(0,i.kt)("td",{parentName:"tr",align:null},"url del recurso"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:null},"identificador \xfanico recurso"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:null},"nombre de la lista de precio"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"state")),(0,i.kt)("td",{parentName:"tr",align:null},"estado de la lista de precio indica si esta activo(0) o inactivo (1)"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"coin")),(0,i.kt)("td",{parentName:"tr",align:null},"nodo que indica la moneda que utiliza la lista de precio."),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"details")),(0,i.kt)("td",{parentName:"tr",align:null},"nodo que indica los detalles de la lista de precio."),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"get-listas-de-precio"},"GET listas de precio"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/v1/price_lists.jso")," retornar\xe1 todas las listas de precio.")),(0,i.kt)("h4",{id:"par\xe1metros"},"Par\xe1metros"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"limit"),", limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"offset"),", permite paginar los items de una respuesta JSON, por defecto el offset es 0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"fields"),", solo devolver atributos espec\xedficos de un recurso"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"name"),", Permite filtrar por nombre de la lista de precio."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"coinid"),", filtra por la moneda."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"state"),", boolean (0 o 1) indica si las listas de precio est\xe1n activas(0) inactivas (1).")),(0,i.kt)("h4",{id:"ejemplos"},"Ejemplos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /v1/price_lists.json?limit=10&offset=0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /v1/price_lists.json?fields=[name,description,state]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /v1/price_lists.json?coinid=1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /v1/price_lists.json?expand=[coin,details]"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /price_lists.json "',title:'"Response',"/price_lists.json":!0,'"':!0},'{\n  "href": "https://api.bsale.cl/v1/price_lists.json",\n  "count": 3,\n  "limit": 25,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.cl/v1/price_lists/1.json",\n      "id": "1",\n      "name": "Lista Base",\n      "description": "",\n      "state": 0,\n      "coin": {\n        "href": "https://api.bsale.cl/v1/coins/1.json",\n        "id": "1"\n      },\n      "details": {\n        "href": "https://api.bsale.cl/v1/price_lists/1/details.json"\n      }\n    },\n    {\n      "href": "https://api.bsale.cl/v1/price_lists/2.json",\n      "id": "2",\n      "name": "Lista UF",\n      "description": "",\n      "state": 0,\n      "coin": {\n        "href": "https://api.bsale.cl/v1/coins/2.json",\n        "id": "2"\n      },\n      "details": {\n        "href": "https://api.bsale.cl/v1/price_lists/2/details.json"\n      }\n    },\n    {\n      "href": "https://api.bsale.cl/v1/price_lists/3.json",\n      "id": "3",\n      "name": "LISTA USD",\n      "description": null,\n      "state": 0,\n      "coin": {\n        "href": "https://api.bsale.cl/v1/coins/3.json",\n        "id": "3"\n      },\n      "details": {\n        "href": "https://api.bsale.cl/v1/price_lists/3/details.json"\n      }\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"get-una-lista-de-precio"},"GET una lista de precio"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/v1/price_lists/3.json")," retornar\xe1 una lista de precio espec\xedfica.")),(0,i.kt)("h4",{id:"par\xe1metros-1"},"Par\xe1metros"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n.")),(0,i.kt)("h4",{id:"ejemplos-1"},"Ejemplos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /v1/price_lists/3.json?expand=[details,coin]"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /price_lists/3.json"',title:'"Response','/price_lists/3.json"':!0},'{\n  "href": "https://api.bsale.cl/v1/price_lists/3.json",\n  "id": "3",\n  "name": "LISTA USD",\n  "description": null,\n  "state": 0,\n  "coin": {\n    "href": "https://api.bsale.cl/v1/coins/3.json",\n    "id": "3"\n  },\n  "details": {\n    "href": "https://api.bsale.cl/v1/price_lists/3/details.json"\n  }\n}\n')),(0,i.kt)("h2",{id:"get-cantidad-de-listas-de-precio"},"GET cantidad de listas de precio"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/price_lists/count.json")," Retornar\xe1 cantidades de registros.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"state"),", boolean (0 o 1) indica si los tipos de productos est\xe1n activos(0) inactivos (1)."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "count": 3\n}\n')),(0,i.kt)("h2",{id:"get-detalles-de-una-lista-de-precio"},"GET detalles de una lista de precio"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/v1/price_lists/1/details.json")," retorna el detalle de la lista de precio, ac\xe1 se indica el valor de la variante.")),(0,i.kt)("h4",{id:"par\xe1metros-2"},"Par\xe1metros"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"variantid"),", filtra por el identificador de la variante (Integer)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"code"),", filtra por el SKU de la variante (String)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"barcode"),", filtra por el c\xf3digo de barras de la variante (String).")),(0,i.kt)("h4",{id:"ejemplos-2"},"Ejemplos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /v1/price_lists/1/details.json?expand=[variant]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /v1/price_lists/1/details.json?variantid=149")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /v1/price_lists/1/details.json?code=12345")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /v1/price_lists/1/details.json?barcode=45412431"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /price_lists/1/details.json"',title:'"Response','/price_lists/1/details.json"':!0},'{\n  "href": "https://api.bsale.cl/v1/price_lists/1/details.json",\n  "count": 7634,\n  "limit": 4,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.cl/v1/price_lists/1/details/663.json",\n      "id": 663,\n      "variantValue": 4590,\n      "variantValueWithTaxes": 5462,\n      "variant": {\n        "href": "https://api.bsale.cl/v1/variant/388.json",\n        "id": "388"\n      }\n    },\n    {\n      "href": "https://api.bsale.cl/v1/price_lists/1/details/681.json",\n      "id": 681,\n      "variantValue": 25000.23,\n      "variantValueWithTaxes": 29750,\n      "variant": {\n        "href": "https://api.bsale.cl/v1/variant/407.json",\n        "id": "407"\n      }\n    },\n    {\n      "href": "https://api.bsale.cl/v1/price_lists/1/details/683.json",\n      "id": 683,\n      "variantValue": 10000,\n      "variantValueWithTaxes": 11900,\n      "variant": {\n        "href": "https://api.bsale.cl/v1/variant/426.json",\n        "id": "426"\n      }\n    },\n    {\n      "href": "https://api.bsale.cl/v1/price_lists/1/details/689.json",\n      "id": 689,\n      "variantValue": 10000,\n      "variantValueWithTaxes": 11900,\n      "variant": {\n        "href": "https://api.bsale.cl/v1/variant/460.json",\n        "id": "460"\n      }\n    }\n  ],\n  "next": "https://api.bsale.cl/v1/price_lists/1/details.json?limit=4&offset=4"\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"href"),", url del detalle de la lista de precio (String)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"id"),", identificador \xfanico del detalle (Integer)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"variantValue"),", Valor neto de la variante (Float)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"variantValueWithTaxes"),", Valor con impuestos de la variante (Float)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"variant"),", nodo que indica la variante relacionada con el detalle de la lista de precio.")),(0,i.kt)("h2",{id:"get-un-detalle-de-una-lista-de-precio"},"GET un detalle de una lista de precio"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/v1/price_lists/3/details/663.json")," Retornar\xe1 un detalle.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /price_lists/1/details/663.json"',title:'"Response','/price_lists/1/details/663.json"':!0},'{\n  "href": "https://api.bsale.cl/v1/price_lists/1/details/663.json",\n  "id": 663,\n  "variantValue": 4590,\n  "variantValueWithTaxes": 5462,\n  "variant": {\n    "href": "https://api.bsale.cl/v1/variant/388.json",\n    "id": "388"\n  }\n}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"NO existe un POST")," de lista de precio, debido a que las listas de precios comparten el total de productos de Bsale. Y s\xf3lo se puede editar sus valores, con el verbo ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," ")),(0,i.kt)("h2",{id:"put-un-detalle-de-una-lista-de-precio"},"PUT un detalle de una lista de precio"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"El ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," (",(0,i.kt)("em",{parentName:"p"},"1412 en el ejemplo"),") que se debe agregar pertenece al ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"id")," de detalle")," de Lista de precio.\nEl ",(0,i.kt)("em",{parentName:"p"},"19")," de la url, corresponde al ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," de la lista de precio que se est\xe1 editando.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PUT ",(0,i.kt)("inlineCode",{parentName:"li"},"/v1/price_lists/19/details/1412.json"),"\nSe debe enviar un Json con la siguiente estructura: ")),(0,i.kt)("h3",{id:"ejemplo-json"},"Ejemplo JSON"),(0,i.kt)("h4",{id:"env\xedo"},"Env\xedo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "variantValue": 2000,\n   "id": 1412\n}\n')),(0,i.kt)("h4",{id:"respuesta"},"Respuesta"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "href": "https://api.bsale.cl/v1/price_lists/19/details/1412.json",\n  "variantValue": 2000,\n  "variantValueWithTaxes": 2380,\n  "variant": {\n    "href": "https://api.bsale.cl/v1/variant/351.json",\n    "id": "351"\n  },\n  "id": 1412\n}\n')))}c.isMDXComponent=!0}}]);