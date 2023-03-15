"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[8014],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(o,".").concat(m)]||c[m]||u[m]||s;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<s;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const s={sidebar_position:11,title:"Despachos",description:"Crear, editar y listar despachos",slug:"/documentos/despachos"},r="Despacho",l={unversionedId:"Documentos/Despachos",id:"version-CL/Documentos/Despachos",title:"Despachos",description:"Crear, editar y listar despachos",source:"@site/versioned_docs/version-CL/Documentos/Despachos.md",sourceDirName:"Documentos",slug:"/documentos/despachos",permalink:"/docusaurus-public-api/CL/documentos/despachos",draft:!1,tags:[],version:"CL",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"Despachos",description:"Crear, editar y listar despachos",slug:"/documentos/despachos"},sidebar:"tutorialSidebar",previous:{title:"Documentos",permalink:"/docusaurus-public-api/CL/documentos"},next:{title:"Devoluciones",permalink:"/docusaurus-public-api/CL/devoluciones"}},o={},p=[{value:"Estructura JSON",id:"estructura-json",level:2},{value:"Atributos",id:"atributos",level:3},{value:"GET lista de despachos",id:"get-lista-de-despachos",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:4},{value:"Ejemplos",id:"ejemplos",level:4},{value:"GET \xfanico despacho",id:"get-\xfanico-despacho",level:2},{value:"Par\xe1metros",id:"par\xe1metros-1",level:4},{value:"Ejemplos",id:"ejemplos-1",level:4},{value:"GET detalles de un despacho",id:"get-detalles-de-un-despacho",level:2},{value:"GET un detalle de un despacho",id:"get-un-detalle-de-un-despacho",level:2},{value:"POST un despacho",id:"post-un-despacho",level:2},{value:"Referencias y fechas",id:"referencias-y-fechas",level:3},{value:"A partir de existente",id:"a-partir-de-existente",level:3},{value:"Traslado interno",id:"traslado-interno",level:3},{value:"Ejemplo JSON",id:"ejemplo-json",level:3},{value:"Env\xedo",id:"env\xedo",level:4},{value:"Respuesta",id:"respuesta",level:4}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"despacho"},"Despacho"),(0,i.kt)("p",null,"Generaci\xf3n de documentos tipo despacho. ",(0,i.kt)("em",{parentName:"p"},"(ej Gu\xedas de despacho electr\xf3nicas)"),", listar despachos generados, detalles incluidos en el despacho. ."),(0,i.kt)("p",null,"C\xf3mo funciona la interfaz de Bsale, mira \xe9stos videos:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creaci\xf3n de una gu\xeda de despacho ",(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/XBAd_W8m_FI"},"Ver")," "),(0,i.kt)("li",{parentName:"ul"},"Creaci\xf3n de una gu\xeda de despacho a partir de otro documento ",(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/G6LMsLwv7v0"},"Ver"))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Un documento del tipo despacho, siempre genera una salida de stock (cuando se controla stock)")),(0,i.kt)("h2",{id:"estructura-json"},"Estructura JSON"),(0,i.kt)("p",null,"Al realizar una petici\xf3n ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP"),", el servicio retornara un JSON con la siguiente estructura:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Response /v1/shippings/22.json"',title:'"Response','/v1/shippings/22.json"':!0},'{\n  "href": "https://api.bsale.io/v1/shippings/22.json",\n  "id": 22,\n  "shippingDate": 1370318400,\n  "address": null,\n  "municipality": "",\n  "city": "",\n  "recipient": null,\n  "state": 0,\n  "office": {\n    "href": "https://api.bsale.io/v1/offices/1.json",\n    "id": "1"\n  },\n  "shipping_type": {\n    "href": "https://api.bsale.io/v1/shipping_types/1.json",\n    "id": "1"\n  },\n  "guide": {\n    "href": "https://api.bsale.io/v1/documents/23.json",\n    "id": "23"\n  },\n  "details": {\n    "href": "https://api.bsale.io/v1/shippings/22/details.json"\n  }\n}\n')),(0,i.kt)("h3",{id:"atributos"},"Atributos"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Atributo"),(0,i.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"),(0,i.kt)("th",{parentName:"tr",align:null},"Tipo dato"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"href")),(0,i.kt)("td",{parentName:"tr",align:null},"url del documento despacho"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:null},"identificador \xfanico del despacho"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"shippingDate")),(0,i.kt)("td",{parentName:"tr",align:null},"fecha del despacho"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"address")),(0,i.kt)("td",{parentName:"tr",align:null},"direcci\xf3n del despacho"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"municipality")),(0,i.kt)("td",{parentName:"tr",align:null},"comuna del despacho"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"city")),(0,i.kt)("td",{parentName:"tr",align:null},"ciudad del despacho"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"recipient")),(0,i.kt)("td",{parentName:"tr",align:null},"destinatario del despacho"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"state")),(0,i.kt)("td",{parentName:"tr",align:null},"estado del descuento indica si el descuento esta activo(0) o inactivo (1)"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"office")),(0,i.kt)("td",{parentName:"tr",align:null},"nodo que indica la relaci\xf3n con la sucursal en la que fue emitida el despacho."),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"shipping_type")),(0,i.kt)("td",{parentName:"tr",align:null},"nodo que indica la relaci\xf3n con el tipo de despacho."),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"guide")),(0,i.kt)("td",{parentName:"tr",align:null},"nodo que indica el documento gu\xeda de despacho."),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"details")),(0,i.kt)("td",{parentName:"tr",align:null},"nodo que indica los detalles del despacho."),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"get-lista-de-despachos"},"GET lista de despachos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/v1/shippings.json")," retornar\xe1 todos los despachos.")),(0,i.kt)("h4",{id:"par\xe1metros"},"Par\xe1metros"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"limit"),", limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"offset"),", permite paginar los items de una respuesta JSON, por defecto el offset es 0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"fields"),", solo devolver atributos espec\xedficos de un recurso"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"shippingdate"),", Permite filtrar por fecha de devoluci\xf3n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"officeid"),", Permite filtrar por sucursal."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"shippingtypeid"),", filtra por documento de referencia."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"state"),", boolean (0 o 1) indica si los documentos est\xe1n activos(0) inactivos (1)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"documentid"),", id documento gu\xeda de despacho")),(0,i.kt)("h4",{id:"ejemplos"},"Ejemplos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /v1/shippings.json?limit=10&offset=0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /v1/shippings.json?fields=[shippingdate,recipient]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /v1/shippings.json?expand=[guide,shipping_type,details]"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /shippings.json "',title:'"Response',"/shippings.json":!0,'"':!0},'{\n  "href": "https://api.bsale.io/v1/shippings.json",\n  "count": 13430,\n  "limit": 3,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.io/v1/shippings/22.json",\n      "id": 22,\n      "shippingDate": 1370318400,\n      "address": null,\n      "municipality": "",\n      "city": "",\n      "recipient": null,\n      "state": 0,\n      "office": {\n        "href": "https://api.bsale.io/v1/offices/1.json",\n        "id": "1"\n      },\n      "shipping_type": {\n        "href": "https://api.bsale.io/v1/shipping_types/1.json",\n        "id": "1"\n      },\n      "guide": {\n        "href": "https://api.bsale.io/v1/documents/23.json",\n        "id": "23"\n      },\n      "details": {\n        "href": "https://api.bsale.io/v1/shippings/22/details.json"\n      }\n    },\n    {\n      "href": "https://api.bsale.io/v1/shippings/23.json",\n      "id": 23,\n      "shippingDate": 1370318400,\n      "address": null,\n      "municipality": "",\n      "city": "",\n      "recipient": null,\n      "state": 0,\n      "office": {\n        "href": "https://api.bsale.io/v1/offices/1.json",\n        "id": "1"\n      },\n      "shipping_type": {\n        "href": "https://api.bsale.io/v1/shipping_types/1.json",\n        "id": "1"\n      },\n      "guide": {\n        "href": "https://api.bsale.io/v1/documents/24.json",\n        "id": "24"\n      },\n      "details": {\n        "href": "https://api.bsale.io/v1/shippings/23/details.json"\n      }\n    },\n    {\n      "href": "https://api.bsale.io/v1/shippings/24.json",\n      "id": 24,\n      "shippingDate": 1370318400,\n      "address": null,\n      "municipality": "",\n      "city": "",\n      "recipient": null,\n      "state": 0,\n      "office": {\n        "href": "https://api.bsale.io/v1/offices/1.json",\n        "id": "1"\n      },\n      "shipping_type": {\n        "href": "https://api.bsale.io/v1/shipping_types/1.json",\n        "id": "1"\n      },\n      "guide": {\n        "href": "https://api.bsale.io/v1/documents/25.json",\n        "id": "25"\n      },\n      "details": {\n        "href": "https://api.bsale.io/v1/shippings/24/details.json"\n      }\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"get-\xfanico-despacho"},"GET \xfanico despacho"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/v1/shippings/22.json ")," retornar\xe1 un despacho espec\xedfico.")),(0,i.kt)("h4",{id:"par\xe1metros-1"},"Par\xe1metros"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n.")),(0,i.kt)("h4",{id:"ejemplos-1"},"Ejemplos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /v1/shippings/1.json?expand=[details]"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /shippings/22.json "',title:'"Response',"/shippings/22.json":!0,'"':!0},'{\n  "href": "https://api.bsale.io/v1/shippings/22.json",\n  "id": 22,\n  "shippingDate": 1370318400,\n  "address": null,\n  "municipality": "",\n  "city": "",\n  "recipient": null,\n  "state": 0,\n  "office": {\n    "href": "https://api.bsale.io/v1/offices/1.json",\n    "id": "1"\n  },\n  "shipping_type": {\n    "href": "https://api.bsale.io/v1/shipping_types/1.json",\n    "id": "1"\n  },\n  "guide": {\n    "href": "https://api.bsale.io/v1/documents/23.json",\n    "id": "23"\n  },\n  "details": {\n    "href": "https://api.bsale.io/v1/shippings/22/details.json"\n  }\n}\n')),(0,i.kt)("h2",{id:"get-detalles-de-un-despacho"},"GET detalles de un despacho"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"GET /v1/shippings/22/details.json")," retorna los detalles contenidos en un despacho.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /shippings/22/details.json "',title:'"Response',"/shippings/22/details.json":!0,'"':!0},'{\n  "href": "https://api.bsale.io/v1/shippings/22/details.json",\n  "count": 1,\n  "limit": 25,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.io/v1/shippings/22/details/31.json",\n      "id": 31,\n      "quantity": 1,\n      "variantStock": 28,\n      "variantCost": 0,\n      "variant": {\n        "href": "https://api.bsale.io/v1/variants/8.json",\n        "id": "8"\n      }\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"get-un-detalle-de-un-despacho"},"GET un detalle de un despacho"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/v1/shippings/22/details/31.json")," Retornar\xe1 un detalle espec\xedfico del despacho.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /shippings/22/details/31.json "',title:'"Response',"/shippings/22/details/31.json":!0,'"':!0},'{\n  "href": "https://api.bsale.io/v1/shippings/22/details/31.json",\n  "id": 31,\n  "quantity": 1,\n  "variantStock": 28,\n  "variantCost": 0,\n  "variant": {\n    "href": "https://api.bsale.io/v1/variants/8.json",\n    "id": "8"\n  }\n}\n')),(0,i.kt)("h2",{id:"post-un-despacho"},"POST un despacho"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"POST ",(0,i.kt)("inlineCode",{parentName:"li"},"/v1/shippings.json")," ")),(0,i.kt)("p",null,"Para crear un documento del tipo despacho (manual o electr\xf3nico), se debe enviar un JSON con la siguiente estructura:"),(0,i.kt)("h3",{id:"referencias-y-fechas"},"Referencias y fechas"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "documentTypeId": 20,\n  "officeId": 1,\n  "priceListId": 18,\n  "emissionDate": 1407715200,\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"documentTypeId"),", Id del tipo de documento que indicara si es factura, boleta, nota de venta etc. (Integer)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"officeId"),", Id de la sucursal donde se emite el documento, si no es especificada el documento quedara asignado a la sucursal por defecto del sistema (Integer)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"priceListId"),", Id de la lista de precio utilizada por el documento, si no es especificada se utilizara la lista de precio por defecto de la sucursal (Integer)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"emissionDate"),", Fecha de emisi\xf3n del documento (Integer) (no se debe aplicar zona horaria, solo considerar la fecha)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"shippingTypeId"),", Id tipo de despacho (tipo de traslado) (Integer) "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"municipality"),", Comuna de despacho (String) "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"address"),", Direcci\xf3n de despacho (String)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"recipient"),", Nombre quien recepciona despacho (String)")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Opcionalmente puedes utilizar el par\xe1metro ",(0,i.kt)("strong",{parentName:"p"},"codeSii")," en vez de ",(0,i.kt)("strong",{parentName:"p"},"documentTypeId")," si conoces el c\xf3digo tributario del documento.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Se deben enviar los datos de direcci\xf3n del cliente como direcciones del despacho")),(0,i.kt)("h3",{id:"a-partir-de-existente"},"A partir de existente"),(0,i.kt)("p",null,"Si se desea generar una gu\xeda a partir de otro documento, se debe enviar el identificador del detalle del documento original:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'"','"':!0},'{\n{\n   "details": [\n       {\n           "detailId": 105,\n           "quantity": 1\n       }\n   ],\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"detailId"),", Id de detalle del documento de referencia"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"quantity"),", Cantidad asociada al detalle")),(0,i.kt)("h3",{id:"traslado-interno"},"Traslado interno"),(0,i.kt)("p",null,"Si se desea generar una gu\xeda de traslado interno, se debe agregar al env\xedo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'"','"':!0},'{\n "officeId": 1,\n "destinationOfficeId":3,\n "shippingTypeId": 5\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"officeId"),", Id de sucursal origen (donde se genera el documento)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"destinationOfficeId"),", Id sucursal destino"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"shippingTypeId"),", Id tipo de despacho")),(0,i.kt)("h3",{id:"ejemplo-json"},"Ejemplo JSON"),(0,i.kt)("h4",{id:"env\xedo"},"Env\xedo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="POST /shippings.json "',title:'"POST',"/shippings.json":!0,'"':!0},'{\n  "documentTypeId": 7,\n  "officeId": 1,\n  "emissionDate": 1462527931,\n  "shippingTypeId": 6,\n  "municipality": "Puerto Varas",\n  "city": "Puerto Varas",\n  "address": "la quebrada 1005",\n  "declareSii": 1,\n  "recipient": "Edison Packard",\n  "details": [\n    {\n      "quantity": 500,\n      "code": "1372685554",\n      "netUnitValue": 12000\n    }\n  ],\n  "client": {\n    "code": "1-7",\n    "municipality": "Puerto Montt",\n    "activity": "Arriendo de maquinaria pesada",\n    "company": "Maquinar\xedas Express",\n    "city": "PUERTO MONTT",\n    "email": "apidespachos@bsale.cl",\n    "address": "Los Alamos #122"\n  }\n}\n')),(0,i.kt)("h4",{id:"respuesta"},"Respuesta"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="201 Response /shippings.json "',title:'"201',Response:!0,"/shippings.json":!0,'"':!0},'{\n  "href": "https://api.bsale.io/v1/shippings/1554.json",\n  "id": 1554,\n  "shippingDate": 1576454400,\n  "address": "la quebrada 1005",\n  "municipality": "Puerto Varas",\n  "city": "Puerto Varas",\n  "recipient": "Edison Packard",\n  "state": 0,\n  "office": {\n    "href": "https://api.bsale.io/v1/offices/1.json",\n    "id": "1"\n  },\n  "user": {\n    "href": "https://api.bsale.io/v1/users/257.json",\n    "id": "257"\n  },\n  "shipping_type": {\n    "href": "https://api.bsale.io/v1/shipping_types/6.json",\n    "id": "6"\n  },\n  "guide": {\n    "href": "https://api.bsale.io/v1/documents/61716.json",\n    "id": "61716"\n  },\n  "details": {\n    "href": "https://api.bsale.io/v1/shippings/1554/details.json"\n  }\n}\n')))}u.isMDXComponent=!0}}]);