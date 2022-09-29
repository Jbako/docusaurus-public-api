"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[4016],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(t),c=l,k=u["".concat(i,".").concat(c)]||u[c]||d[c]||o;return t?a.createElement(k,r(r({ref:n},m),{},{components:t})):a.createElement(k,r({ref:n},m))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9386:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(7462),l=(t(7294),t(3905));const o={sidebar_position:31,title:"Pagos",description:"Crear, editar y pagos de pagos",slug:"/pagos"},r="Pagos",s={unversionedId:"Clientes/Pagos",id:"Clientes/Pagos",title:"Pagos",description:"Crear, editar y pagos de pagos",source:"@site/docs/Clientes/Pagos.md",sourceDirName:"Clientes",slug:"/pagos",permalink:"/docusaurus-public-api/pagos",draft:!1,tags:[],version:"current",sidebarPosition:31,frontMatter:{sidebar_position:31,title:"Pagos",description:"Crear, editar y pagos de pagos",slug:"/pagos"},sidebar:"tutorialSidebar",previous:{title:"Clientes",permalink:"/docusaurus-public-api/clientes"},next:{title:"Webhooks",permalink:"/docusaurus-public-api/pagos/webhooks"}},i={},p=[{value:"Estructura JSON",id:"estructura-json",level:2},{value:"Atributos",id:"atributos",level:3},{value:"GET lista de pagos",id:"get-lista-de-pagos",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:4},{value:"Ejemplos",id:"ejemplos",level:4},{value:"GET un pago",id:"get-un-pago",level:2},{value:"Par\xe1metros",id:"par\xe1metros-1",level:4},{value:"Ejemplos",id:"ejemplos-1",level:4},{value:"GET pagos agrupados por forma de pago",id:"get-pagos-agrupados-por-forma-de-pago",level:2},{value:"Par\xe1metros",id:"par\xe1metros-2",level:4},{value:"Ejemplos",id:"ejemplos-2",level:4},{value:"GET documentos de venta",id:"get-documentos-de-venta",level:2},{value:"Par\xe1metros",id:"par\xe1metros-3",level:4},{value:"Ejemplos",id:"ejemplos-3",level:4},{value:"GET documentos pendientes de pago",id:"get-documentos-pendientes-de-pago",level:2},{value:"Par\xe1metros",id:"par\xe1metros-4",level:4},{value:"Ejemplos",id:"ejemplos-4",level:4},{value:"GET cantidad de pagos",id:"get-cantidad-de-pagos",level:2},{value:"POST un pago",id:"post-un-pago",level:2},{value:"Ejemplo JSON",id:"ejemplo-json",level:3},{value:"Env\xedo",id:"env\xedo",level:4},{value:"Atributos (opcional)",id:"atributos-opcional",level:3},{value:"Respuesta",id:"respuesta",level:4}],m={toc:p};function d(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"pagos"},"Pagos"),(0,l.kt)("p",null,"Listar pagos, agrupados por forma de pago. Crear pagos a documentos. Pagos de cr\xe9dito cliente, cheques."),(0,l.kt)("h2",{id:"estructura-json"},"Estructura JSON"),(0,l.kt)("p",null,"Al realizar una petici\xf3n ",(0,l.kt)("inlineCode",{parentName:"p"},"HTTP"),", el servicio retornara un JSON con la siguiente estructura:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /payments.json"',title:'"Response','/payments.json"':!0},'{\n    "href": "https://api.bsale.cl/v1/payments.json",\n    "count": 2365,\n    "limit": 3,\n    "offset": 0,\n    "items": [\n        {\n            "href": "https://api.bsale.cl/v1/payments/1280.json",\n            "id": 1280,\n            "recordDate": "",\n            "amount": 68000.0,\n            "operationNumber": null,\n            "accountingDate": "",\n            "checkDate": null,\n            "checkNumber": null,\n            "checkAmount": null,\n            "checkTaken": 0,\n            "isCreditPayment": 0,\n            "createdAt": 1584993084,\n            "state": 0,\n            "payment_type": {\n                "href": "https://api.bsale.cl/v1/payment_types/4.json",\n                "id": "4"\n            },\n            "document": {\n                "href": "https://api.bsale.cl/v1/documents/1528.json",\n                "id": "1528"\n            },\n            "office": {\n                "href": "https://api.bsale.cl/v1/offices/1.json",\n                "id": "1"\n            },\n            "user": {\n                "href": "https://api.bsale.cl/v1/users/2.json",\n                "id": "2"\n            }\n        },\n        {\n            "href": "https://api.bsale.cl/v1/payments/1927.json",\n            "id": 1927,\n            "recordDate": "",\n            "amount": 11900.0,\n            "operationNumber": null,\n            "accountingDate": "",\n            "checkDate": null,\n            "checkNumber": null,\n            "checkAmount": null,\n            "checkTaken": 0,\n            "isCreditPayment": 0,\n            "createdAt": 1608441509,\n            "state": 0,\n            "payment_type": {\n                "href": "https://api.bsale.cl/v1/payment_types/10.json",\n                "id": "10"\n            },\n            "document": {\n                "href": "https://api.bsale.cl/v1/documents/2343.json",\n                "id": "2343"\n            },\n            "office": {\n                "href": "https://api.bsale.cl/v1/offices/1.json",\n                "id": "1"\n            },\n            "user": {\n                "href": "https://api.bsale.cl/v1/users/2.json",\n                "id": "2"\n            }\n        },\n        {\n            "href": "https://api.bsale.cl/v1/payments/1929.json",\n            "id": 1929,\n            "recordDate": "",\n            "amount": 11900.0,\n            "operationNumber": null,\n            "accountingDate": "",\n            "checkDate": null,\n            "checkNumber": null,\n            "checkAmount": null,\n            "checkTaken": 0,\n            "isCreditPayment": 0,\n            "createdAt": 1608441526,\n            "state": 0,\n            "payment_type": {\n                "href": "https://api.bsale.cl/v1/payment_types/10.json",\n                "id": "10"\n            },\n            "document": {\n                "href": "https://api.bsale.cl/v1/documents/2345.json",\n                "id": "2345"\n            },\n            "office": {\n                "href": "https://api.bsale.cl/v1/offices/1.json",\n                "id": "1"\n            },\n            "user": {\n                "href": "https://api.bsale.cl/v1/users/2.json",\n                "id": "2"\n            }\n        }\n    ],\n    "next": "https://api.bsale.cl/v1/payments.json?limit=3&offset=3"\n}\n')),(0,l.kt)("h3",{id:"atributos"},"Atributos"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Atributo"),(0,l.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"),(0,l.kt)("th",{parentName:"tr",align:null},"Tipo dato"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"href")),(0,l.kt)("td",{parentName:"tr",align:null},"url del pago"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},"identificador \xfanico del pago"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"recordDate")),(0,l.kt)("td",{parentName:"tr",align:null},"fecha en que se realizo el pago"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"amount")),(0,l.kt)("td",{parentName:"tr",align:null},"monto del pago"),(0,l.kt)("td",{parentName:"tr",align:null},"Float")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"checkDate")),(0,l.kt)("td",{parentName:"tr",align:null},"fecha del cheque"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"checkNumber")),(0,l.kt)("td",{parentName:"tr",align:null},"numero del cheque"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"checkAmount")),(0,l.kt)("td",{parentName:"tr",align:null},"monto del cheque"),(0,l.kt)("td",{parentName:"tr",align:null},"Float")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"checkTaken")),(0,l.kt)("td",{parentName:"tr",align:null},"indica si el cheque con que se realizo el pago fue cobrado"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"isCreditPayment")),(0,l.kt)("td",{parentName:"tr",align:null},"indica si el pago es realizado a un cr\xe9dito adeudado (0 o 1)."),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"createdAt")),(0,l.kt)("td",{parentName:"tr",align:null},"fecha de cuando fue creado el pago"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"state")),(0,l.kt)("td",{parentName:"tr",align:null},"(0 o 1) indica si el pago esta activos(0) inactivos(1)."),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"payment_type")),(0,l.kt)("td",{parentName:"tr",align:null},"nodo que indica la forma de pago en la cual se realizo el pago."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"document")),(0,l.kt)("td",{parentName:"tr",align:null},"nodo que indica a que documento se le realizo el pago."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"documents")),(0,l.kt)("td",{parentName:"tr",align:null},"arreglo que indica a que documentos se realiz\xf3 el pago de un cr\xe9dito adeudado (solo cuando isCreditPayment = 1)."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"office")),(0,l.kt)("td",{parentName:"tr",align:null},"nodo que indica la sucursal donde se realizo el pago."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"user")),(0,l.kt)("td",{parentName:"tr",align:null},"nodo que indica el usuario que realizo el pago."),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"get-lista-de-pagos"},"GET lista de pagos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GET ",(0,l.kt)("inlineCode",{parentName:"li"},"/v1/payments.json")," retornar\xe1 todos los pagos.")),(0,l.kt)("h4",{id:"par\xe1metros"},"Par\xe1metros"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"limit"),", limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"offset"),", permite paginar los items de una respuesta JSON, por defecto el offset es 0."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"fields"),", solo devolver atributos espec\xedficos de un recurso"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"recorddate"),", Permite filtrar por fecha del pago."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"documentid"),", Permite filtrar por el id del documento."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"number"),", filtra documentos por el folio."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"state"),", boolean (0 o 1) indica si los pagos est\xe1n activos(0) inactivos(1).")),(0,l.kt)("h4",{id:"ejemplos"},"Ejemplos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET /v1/payments.json?limit=10&offset=0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET /v1/payments.json?recorddate=1393642800")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET /v1/payments.json?documentid=856")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET /v1/payments.json?codesii=33&number=10")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET /v1/payments.json?expand=[office,payment_type]"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /payments.json "',title:'"Response',"/payments.json":!0,'"':!0},'{\n  "href": "https://api.bsale.cl/v1/payments.json",\n  "count": 155881,\n  "limit": 3,\n  "offset": 0,\n  "items": [\n      {\n      "href": "https://api.bsale.cl/v1/payments/79.json",\n      "id": 79,\n      "recordDate": 1548720000,\n      "amount": 6000,\n      "operationNumber": null,\n      "accountingDate": "",\n      "checkDate": null,\n      "checkNumber": null,\n      "checkAmount": null,\n      "checkTaken": 0,\n      "isCreditPayment": 0,\n      "createdAt": 1548768524,\n      "state": 0,\n      "payment_type": {\n          "href": "https://api.bsale.cl/v1/payment_types/4.json",\n          "id": "4"\n      },\n      "document": {\n          "href": "https://api.bsale.cl/v1/documents/195.json",\n          "id": "195"\n      },\n      "office": {\n          "href": "https://api.bsale.cl/v1/offices/1.json",\n          "id": "1"\n      },\n      "user": {\n          "href": "https://api.bsale.cl/v1/users/1.json",\n          "id": "1"\n      }\n    },\n    {\n      "href": "https://api.bsale.cl/v1/payments/78.json",\n      "id": 78,\n      "recordDate": 1548720000,\n      "amount": 29142,\n      "operationNumber": null,\n      "accountingDate": "",\n      "checkDate": null,\n      "checkNumber": null,\n      "checkAmount": null,\n      "checkTaken": 0,\n      "isCreditPayment": 1,\n      "createdAt": 1548768418,\n      "state": 0,\n      "payment_type": {\n          "href": "https://api.bsale.cl/v1/payment_types/4.json",\n          "id": "4"\n      },\n      "documents": [\n          {\n              "href": "https://api.bsale.cl/v1/documents/194.json",\n              "id": "194",\n              "amount": 2002\n          },\n          {\n              "href": "https://api.bsale.cl/v1/documents/195.json",\n              "id": "195",\n              "amount": 6000\n          },\n          {\n              "href": "https://api.bsale.cl/v1/documents/196.json",\n              "id": "196",\n              "amount": 21140\n          }\n      ],\n      "office": {\n          "href": "https://api.bsale.cl/v1/offices/1.json",\n          "id": "1"\n      },\n      "user": {\n          "href": "https://api.bsale.cl/v1/users/1.json",\n          "id": "1"\n      }\n    }\n  ],\n  "next": "https://api.bsale.cl/v1/payments.json?limit=3\\u0026offset=3"\n}\n')),(0,l.kt)("h2",{id:"get-un-pago"},"GET un pago"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GET ",(0,l.kt)("inlineCode",{parentName:"li"},"/v1/payments/950.json")," retornar\xe1 un pago espec\xedfico.")),(0,l.kt)("h4",{id:"par\xe1metros-1"},"Par\xe1metros"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n.")),(0,l.kt)("h4",{id:"ejemplos-1"},"Ejemplos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET /v1/payments/950.json?expand=[user,office]"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /payments/950.json"',title:'"Response','/payments/950.json"':!0},'{\n  "href": "https://api.bsale.cl/v1/payments/950.json",\n  "id": 950,\n  "recordDate": 1396494000,\n  "amount": "68643.0",\n  "checkDate": null,\n  "checkNumber": null,\n  "checkAmount": "0",\n  "state": 0,\n  "payment_type": {\n    "href": "https://api.bsale.cl/v1/payment_types/1.json",\n    "id": "1"\n  },\n  "document": {\n    "href": "https://api.bsale.cl/v1/documents/3285.json",\n    "id": "3285"\n  },\n  "office": {\n    "href": "https://api.bsale.cl/v1/offices/2.json",\n    "id": "2"\n  },\n  "user": {\n    "href": "https://api.bsale.cl/v1/users/7.json",\n    "id": "7"\n  }\n}\n')),(0,l.kt)("h2",{id:"get-pagos-agrupados-por-forma-de-pago"},"GET pagos agrupados por forma de pago"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GET ",(0,l.kt)("inlineCode",{parentName:"li"},"/v1/payments/group_payment_types.json")," Retornar\xe1 todos los pagos realizados.")),(0,l.kt)("h4",{id:"par\xe1metros-2"},"Par\xe1metros"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"limit"),", limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"offset"),", permite paginar los items de una respuesta JSON, por defecto el offset es 0."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"fields"),", solo devolver atributos espec\xedficos de un recurso"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"recorddate"),", Permite filtrar por fecha del pago."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"codesii"),", C\xf3digo documento basado en los identificadores del SII, pueden ser varios separados por coma."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"documentid"),", Permite filtrar por el id del documento."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"officeid"),", filtra por sucursal."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"paymenttypeid"),", filtra por forma id de pago.")),(0,l.kt)("h4",{id:"ejemplos-2"},"Ejemplos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET /v1/payments/group_payment_types.json?limit=10&offset=0")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET /v1/payments/group_payment_types.json?recorddate=1393642800")," ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  [\n  {\n    "recordDate": 1396494000,\n    "paymentTypeTotalAmount": 40906.0,\n    "paymentTypeId": 1,\n    "paymentTypeName": "Efectivo",\n    "paymentLedgerAccount": null,\n    "isCheck": 0,\n    "isCreditNote": 0,\n    "isClientCredit": 0,\n    "isCash": 1,\n    "isCreditMemo": 0,\n    "codesii": "35",\n    "officeId": 1,\n    "officeName": "Puerto Varas",\n    "officeCostCenter": "",\n    "details": [\n\n    ]\n  },\n  {\n    "recordDate": 1396494000,\n    "paymentTypeTotalAmount": 174592.0,\n    "paymentTypeId": 1,\n    "paymentTypeName": "Efectivo",\n    "paymentLedgerAccount": null,\n    "isCheck": 0,\n    "isCreditNote": 0,\n    "isClientCredit": 0,\n    "isCash": 1,\n    "isCreditMemo": 0,\n    "codesii": "39",\n    "officeId": 2,\n    "officeName": "Los Angeles",\n    "officeCostCenter": "",\n    "details": [\n\n    ]\n  },\n  {\n    "recordDate": 1396494000,\n    "paymentTypeTotalAmount": 75204.0,\n    "paymentTypeId": 2,\n    "paymentTypeName": "Tarjeta de Cr\xe9dito",\n    "paymentLedgerAccount": null,\n    "isCheck": 0,\n    "isCreditNote": 0,\n    "isClientCredit": 0,\n    "isCash": 0,\n    "isCreditMemo": 0,\n    "codesii": "35",\n    "officeId": 1,\n    "officeName": "Puerto Varas",\n    "officeCostCenter": "",\n    "details": [\n      {\n        "name": "N\xba Comprobante",\n        "value": ""\n      }\n    ]\n  },\n  {\n    "recordDate": 1396494000,\n    "paymentTypeTotalAmount": 54328.0,\n    "paymentTypeId": 2,\n    "paymentTypeName": "Tarjeta de Cr\xe9dito",\n    "paymentLedgerAccount": null,\n    "isCheck": 0,\n    "isCreditNote": 0,\n    "isClientCredit": 0,\n    "isCash": 0,\n    "isCreditMemo": 0,\n    "codesii": "39",\n    "officeId": 2,\n    "officeName": "Los Angeles",\n    "officeCostCenter": "",\n    "details": [\n      {\n        "name": "N\xba Comprobante",\n        "value": ""\n      }\n    ]\n  },\n  {\n    "recordDate": 1396494000,\n    "paymentTypeTotalAmount": 816873.0,\n    "paymentTypeId": 4,\n    "paymentTypeName": "Cr\xe9dito",\n    "paymentLedgerAccount": "",\n    "isCheck": 0,\n    "isCreditNote": 0,\n    "isClientCredit": 1,\n    "isCash": 0,\n    "isCreditMemo": 0,\n    "codesii": "33",\n    "officeId": 1,\n    "officeName": "Puerto Varas",\n    "officeCostCenter": "",\n    "details": [\n\n    ]\n  },\n  {\n    "recordDate": 1396494000,\n    "paymentTypeTotalAmount": 16373.0,\n    "paymentTypeId": 5,\n    "paymentTypeName": "Cheque",\n    "paymentLedgerAccount": "",\n    "isCheck": 1,\n    "isCreditNote": 0,\n    "isClientCredit": 0,\n    "isCash": 0,\n    "isCreditMemo": 0,\n    "codesii": "39",\n    "officeId": 2,\n    "officeName": "Los Angeles",\n    "officeCostCenter": "",\n    "details": [\n      {\n        "name": "Banco",\n        "value": ""\n      },\n      {\n        "name": "N\xfamero",\n        "value": ""\n      }\n    ]\n  },\n  {\n    "recordDate": 1396494000,\n    "paymentTypeTotalAmount": 32658.0,\n    "paymentTypeId": 6,\n    "paymentTypeName": "Tarjeta de D\xe9bito",\n    "paymentLedgerAccount": "",\n    "isCheck": 0,\n    "isCreditNote": 0,\n    "isClientCredit": 0,\n    "isCash": 0,\n    "isCreditMemo": 0,\n    "codesii": "39",\n    "officeId": 2,\n    "officeName": "Los Angeles",\n    "officeCostCenter": "",\n    "details": [\n      {\n        "name": "N Operacion",\n        "value": ""\n      }\n    ]\n  }\n]\n')),(0,l.kt)("h2",{id:"get-documentos-de-venta"},"GET documentos de venta"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GET ",(0,l.kt)("inlineCode",{parentName:"li"},"/v1/payments/purchases.json")," retornar\xe1 los documentos asociados al cliente.")),(0,l.kt)("h4",{id:"par\xe1metros-3"},"Par\xe1metros"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"clientid"),", Permite filtrar por id del cliente."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"code"),", Permite filtrar por rut del cliente.")),(0,l.kt)("h4",{id:"ejemplos-3"},"Ejemplos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET /v1/payments/purchases.json?code=7513098-8")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET /v1/payments/purchases.json?clientid=7"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /payments/purchases.json"',title:'"Response','/payments/purchases.json"':!0},'{\n  "href": "https://api.bsale.cl/v1/documents.json",\n  "count": 43,\n  "limit": 3,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.cl/v1/documents/1.json",\n      "id": 1,\n      "emissionDate": 1519084800,\n      "expirationDate": 1519084800,\n      "generationDate": 1519147082,\n      "number": 1,\n      "totalAmount": 12979,\n      "netAmount": 10907,\n      "taxAmount": 2072,\n      "exemptAmount": 0,\n      "exportTotalAmount": 0,\n      "exportNetAmount": 0,\n      "exportTaxAmount": 0,\n      "exportExemptAmount": 0,\n      "commissionRate": 0,\n      "commissionNetAmount": 0,\n      "commissionTaxAmount": 0,\n      "commissionTotalAmount": 0,\n      "percentageTaxWithheld": 0,\n      "purchaseTaxAmount": 0,\n      "purchaseTotalAmount": 0,\n      "address": "Cerro El Plomo 5855, Las Condes, Chile",\n      "municipality": "Las Condes",\n      "city": "Chile",\n      "urlTimbre": null,\n      "ted": null,\n      "urlPublicView": "http://app2.bsale.cl/view/18790/d132cb4d5f82?sfd=99",\n      "urlPdf": "http://app2.bsale.cl/view/18790/d132cb4d5f82.pdf?sfd=99",\n      "urlPublicViewOriginal": "http://app2.bsale.cl/view/18790/d132cb4d5f82",\n      "urlPdfOriginal": "http://app2.bsale.cl/view/18790/d132cb4d5f82.pdf",\n      "token": "d132cb4d5f82",\n      "state": 0,\n      "urlXml": "https://api.bsale.cl/v1/18790/files/d132cb4d5f82.xml",\n      "informedSii": 2,\n      "responseMsgSii": null,\n      "document_type": {\n        "href": "https://api.bsale.cl/v1/document_types/5.json",\n        "id": "5"\n      },\n      "client": {\n        "href": "https://api.bsale.cl/v1/payments/412.json",\n        "id": "412"\n      },\n      "office": {\n        "href": "https://api.bsale.cl/v1/offices/1.json",\n        "id": "1"\n      },\n      "user": {\n        "href": "https://api.bsale.cl/v1/users/5.json",\n        "id": "5"\n      },\n      "coin": {\n        "href": "https://api.bsale.cl/v1/coins/1.json",\n        "id": "1"\n      },\n      "references": {\n        "href": "https://api.bsale.cl/v1/documents/1/references.json"\n      },\n      "document_taxes": {\n        "href": "https://api.bsale.cl/v1/documents/1/document_taxes.json"\n      },\n      "details": {\n        "href": "https://api.bsale.cl/v1/documents/1/details.json"\n      },\n      "sellers": {\n        "href": "https://api.bsale.cl/v1/documents/1/sellers.json"\n      },\n      "attributes": {\n        "href": "https://api.bsale.cl/v1/documents/1/attributes.json"\n      }\n    },\n    {\n      "href": "https://api.bsale.cl/v1/documents/25.json",\n      "id": 25,\n      "emissionDate": 1519257600,\n      "expirationDate": 1519257600,\n      "generationDate": 1519309484,\n      "number": 1,\n      "totalAmount": 123456789,\n      "netAmount": 103745201,\n      "taxAmount": 19711588,\n      "exemptAmount": 0,\n      "exportTotalAmount": 0,\n      "exportNetAmount": 0,\n      "exportTaxAmount": 0,\n      "exportExemptAmount": 0,\n      "commissionRate": 0,\n      "commissionNetAmount": 0,\n      "commissionTaxAmount": 0,\n      "commissionTotalAmount": 0,\n      "percentageTaxWithheld": 0,\n      "purchaseTaxAmount": 0,\n      "purchaseTotalAmount": 0,\n      "address": "Cerro El Plomo 5855, Las Condes, Chile",\n      "municipality": "Las Condes",\n      "city": "Chile",\n      "urlTimbre": null,\n      "ted": null,\n      "urlPublicView": "http://app2.bsale.cl/view/18790/8a350bb0a82d?sfd=99",\n      "urlPdf": "http://app2.bsale.cl/view/18790/8a350bb0a82d.pdf?sfd=99",\n      "urlPublicViewOriginal": "http://app2.bsale.cl/view/18790/8a350bb0a82d",\n      "urlPdfOriginal": "http://app2.bsale.cl/view/18790/8a350bb0a82d.pdf",\n      "token": "8a350bb0a82d",\n      "state": 0,\n      "urlXml": "https://api.bsale.cl/v1/18790/files/8a350bb0a82d.xml",\n      "informedSii": 2,\n      "responseMsgSii": null,\n      "document_type": {\n        "href": "https://api.bsale.cl/v1/document_types/3.json",\n        "id": "3"\n      },\n      "client": {\n        "href": "https://api.bsale.cl/v1/payments/412.json",\n        "id": "412"\n      },\n      "office": {\n        "href": "https://api.bsale.cl/v1/offices/1.json",\n        "id": "1"\n      },\n      "user": {\n        "href": "https://api.bsale.cl/v1/users/3.json",\n        "id": "3"\n      },\n      "coin": {\n        "href": "https://api.bsale.cl/v1/coins/1.json",\n        "id": "1"\n      },\n      "references": {\n        "href": "https://api.bsale.cl/v1/documents/25/references.json"\n      },\n      "document_taxes": {\n        "href": "https://api.bsale.cl/v1/documents/25/document_taxes.json"\n      },\n      "details": {\n        "href": "https://api.bsale.cl/v1/documents/25/details.json"\n      },\n      "sellers": {\n        "href": "https://api.bsale.cl/v1/documents/25/sellers.json"\n      },\n      "attributes": {\n        "href": "https://api.bsale.cl/v1/documents/25/attributes.json"\n      }\n    },\n    {\n      "href": "https://api.bsale.cl/v1/documents/2.json",\n      "id": 2,\n      "emissionDate": 1519084800,\n      "expirationDate": 1519084800,\n      "generationDate": 1519147134,\n      "number": 2,\n      "totalAmount": 3570,\n      "netAmount": 3000,\n      "taxAmount": 570,\n      "exemptAmount": 0,\n      "exportTotalAmount": 0,\n      "exportNetAmount": 0,\n      "exportTaxAmount": 0,\n      "exportExemptAmount": 0,\n      "commissionRate": 0,\n      "commissionNetAmount": 0,\n      "commissionTaxAmount": 0,\n      "commissionTotalAmount": 0,\n      "percentageTaxWithheld": 0,\n      "purchaseTaxAmount": 0,\n      "purchaseTotalAmount": 0,\n      "address": "Cerro El Plomo 5855, Las Condes, Chile",\n      "municipality": "Las Condes",\n      "city": "Chile",\n      "urlTimbre": null,\n      "ted": null,\n      "urlPublicView": "http://app2.bsale.cl/view/18790/960ca7eb7519?sfd=99",\n      "urlPdf": "http://app2.bsale.cl/view/18790/960ca7eb7519.pdf?sfd=99",\n      "urlPublicViewOriginal": "http://app2.bsale.cl/view/18790/960ca7eb7519",\n      "urlPdfOriginal": "http://app2.bsale.cl/view/18790/960ca7eb7519.pdf",\n      "token": "960ca7eb7519",\n      "state": 0,\n      "urlXml": "https://api.bsale.cl/v1/18790/files/960ca7eb7519.xml",\n      "informedSii": 2,\n      "responseMsgSii": null,\n      "document_type": {\n        "href": "https://api.bsale.cl/v1/document_types/5.json",\n        "id": "5"\n      },\n      "client": {\n        "href": "https://api.bsale.cl/v1/payments/412.json",\n        "id": "412"\n      },\n      "office": {\n        "href": "https://api.bsale.cl/v1/offices/1.json",\n        "id": "1"\n      },\n      "user": {\n        "href": "https://api.bsale.cl/v1/users/5.json",\n        "id": "5"\n      },\n      "coin": {\n        "href": "https://api.bsale.cl/v1/coins/1.json",\n        "id": "1"\n      },\n      "references": {\n        "href": "https://api.bsale.cl/v1/documents/2/references.json"\n      },\n      "document_taxes": {\n        "href": "https://api.bsale.cl/v1/documents/2/document_taxes.json"\n      },\n      "details": {\n        "href": "https://api.bsale.cl/v1/documents/2/details.json"\n      },\n      "sellers": {\n        "href": "https://api.bsale.cl/v1/documents/2/sellers.json"\n      },\n      "attributes": {\n        "href": "https://api.bsale.cl/v1/documents/2/attributes.json"\n      }\n    }\n  ],\n  "next": "https://api.bsale.cl/v1/documents.json?limit=3&offset=3"\n}\n')),(0,l.kt)("h2",{id:"get-documentos-pendientes-de-pago"},"GET documentos pendientes de pago"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GET ",(0,l.kt)("inlineCode",{parentName:"li"},"/v1/payments/unpaid_documents.json")," retornar\xe1 los documentos pendientes de pago asociados al cliente.")),(0,l.kt)("h4",{id:"par\xe1metros-4"},"Par\xe1metros"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"clientid"),", Permite filtrar por id del cliente."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"code"),", Permite filtrar por rut del cliente."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"comparisondate"),", Permite separar los documentos vencidos de los por vencer, por defecto es la fecha del momento de la consulta")),(0,l.kt)("h4",{id:"ejemplos-4"},"Ejemplos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET /v1/payments/unpaid_documents.json?code=7513098-8")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET /v1/payments/unpaid_documents.json?clientid=1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET /v1/payments/unpaid_documents.json?comparisondate=1437436800")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET /v1/payments/unpaid_documents.json?code=7513098-8&comparisondate=1437436800"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /payments/purchases.json"',title:'"Response','/payments/purchases.json"':!0},'{\n  "overdueDebt": 40000,\n  "upcomingDebt": 30000,\n  "totalDebt": 70000,\n  "client": {\n    "href": "https://api.bsale.cl/v1/payments/1.json",\n    "id": 1,\n    "firstName": "Roberto",\n    "lastName": "",\n    "code": "7513098-8",\n    "company": "Roberto Mancilla"\n  },\n  "overdue_documents": [\n    {\n      "href": "https://api.bsale.cl/v1/documents/6514.json",\n      "id": 6514,\n      "name": "Factura Electronica",\n      "number": 123123123217,\n      "emissionDate": 1437436800,\n      "expirationDate": 1437436800,\n      "totalAmount": 20000,\n      "totalAmountOwed": 20000\n    },\n    {\n      "href": "https://api.bsale.cl/v1/documents/6515.json",\n      "id": 6515,\n      "name": "Factura Electronica",\n      "number": 123123123218,\n      "emissionDate": 1437436800,\n      "expirationDate": 1437436800,\n      "totalAmount": 20000,\n      "totalAmountOwed": 20000\n    }\n  ],\n  "upcoming_documents": [\n    {\n      "href": "https://api.bsale.cl/v1/documents/6520.json",\n      "id": 6520,\n      "name": "Factura Electronica",\n      "number": 123123123220,\n      "emissionDate": 1437523200,\n      "expirationDate": 1440201600,\n      "totalAmount": 30000,\n      "totalAmountOwed": 30000\n    }\n  ]\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"overdueDebt"),", deuda vencida (Float)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"upcomingDebt"),", deuda por vencer (Float)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"totalDebt"),", deuda total (Float)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"client"),", nodo que indica el cliente al cual se le emitieron los documentos."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"overdue_documents"),", nodo que indica los documentos vencidos."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"upcoming_documents"),", nodo que indica los documentos por vencer.")),(0,l.kt)("h2",{id:"get-cantidad-de-pagos"},"GET cantidad de pagos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"GET ",(0,l.kt)("inlineCode",{parentName:"p"},"/v1/payments/count.json")," Retornar\xe1 cantidades de registros.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"state"),", boolean (0 o 1) indica si los pagoss est\xe1n activos(0) inactivos (1)."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "count": 1989\n}\n')),(0,l.kt)("h2",{id:"post-un-pago"},"POST un pago"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"POST ",(0,l.kt)("inlineCode",{parentName:"li"},"/v1/payments.json")," ")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Se espera que un pago sea posterior, siempre y cuando el documento a pagar, en su concepci\xf3n, su forma de pago (",(0,l.kt)("inlineCode",{parentName:"p"},"paymentTypeId"),") sea del tipo ",(0,l.kt)("strong",{parentName:"p"},"cr\xe9dito"),".")),(0,l.kt)("p",null,"Para crear un pago, se debe enviar un JSON con la siguiente estructura:"),(0,l.kt)("h3",{id:"ejemplo-json"},"Ejemplo JSON"),(0,l.kt)("h4",{id:"env\xedo"},"Env\xedo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "recordDate": 1436214454,\n  "amount": 3791,\n  "documentId": 3004,\n  "paymentTypeId": 11\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"recorddate"),", Fecha en formato UNIX del pago."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"documentid"),", id del documento a pagar."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"amount"),", monto del pago."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"paymentTypeId"),", id forma de pago asociada")),(0,l.kt)("h3",{id:"atributos-opcional"},"Atributos (opcional)"),(0,l.kt)("p",null,"Si se desean crear atributos especiales para el pagose debe enviar la siguiente estructura."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "recordDate": 1436214454,\n  "amount": 3791,\n  "documentId": 3004,\n  "paymentTypeId": 11,\n  "dynamicAttributes": [\n      {\n        "description": "comprobante 123456",\n        "dynamicAttributeId": 1\n      }\n  ]\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"description"),", Descripci\xf3n del pago (String)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"dynamicAttributeId"),", id del atributo (Integer).")),(0,l.kt)("h4",{id:"respuesta"},"Respuesta"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "href": "https://api.bsale.cl/v1/payments/4873.json",\n  "id": 4873,\n  "recordDate": 1436214454,\n  "amount": 3791,\n  "checkDate": null,\n  "checkNumber": null,\n  "checkAmount": null,\n  "checkTaken": 0,\n  "state": 0,\n  "payment_type": {\n    "href": "https://api.bsale.cl/v1/payment_types/11.json",\n    "id": "11"\n  },\n  "document": {\n    "href": "https://api.bsale.cl/v1/documents/3004.json",\n    "id": "3004"\n  },\n  "office": {\n    "href": "https://api.bsale.cl/v1/offices/2.json",\n    "id": "2"\n  },\n  "user": {\n    "href": "https://api.bsale.cl/v1/users/2.json",\n    "id": "2"\n  }\n}\n')))}d.isMDXComponent=!0}}]);