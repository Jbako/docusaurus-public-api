"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[2231],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=p(n),g=r,k=u["".concat(d,".").concat(g)]||u[g]||m[g]||l;return n?a.createElement(k,i(i({ref:e},s),{},{components:n})):a.createElement(k,i({ref:e},s))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3205:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:10,title:"Env\xedos",description:"Genera env\xedos mediante tienda en l\xednea Bsale",slug:"/env\xedos"},i="API Env\xedos",o={unversionedId:"envios",id:"envios",title:"Env\xedos",description:"Genera env\xedos mediante tienda en l\xednea Bsale",source:"@site/docs/envios.md",sourceDirName:".",slug:"/env\xedos",permalink:"/docusaurus-public-api/env\xedos",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Env\xedos",description:"Genera env\xedos mediante tienda en l\xednea Bsale",slug:"/env\xedos"},sidebar:"tutorialSidebar",previous:{title:"Clientes",permalink:"/docusaurus-public-api/clientes"},next:{title:"Pedidos web",permalink:"/docusaurus-public-api/pedidos-web"}},d={},p=[{value:"GET una orden",id:"get-una-orden",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:4},{value:"Ejemplos",id:"ejemplos",level:4},{value:"Atributos",id:"atributos",level:4},{value:"POST estados del despacho",id:"post-estados-del-despacho",level:2},{value:"Par\xe1metros",id:"par\xe1metros-1",level:4},{value:"Estados del despacho",id:"estados-del-despacho",level:4},{value:"POST url seguimiento y etiqueta",id:"post-url-seguimiento-y-etiqueta",level:2},{value:"Par\xe1metros",id:"par\xe1metros-2",level:4},{value:"Esructura JSON",id:"esructura-json",level:2},{value:"Par\xe1metros",id:"par\xe1metros-3",level:4}],s={toc:p};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api-env\xedos"},"API Env\xedos"),(0,r.kt)("p",null,"El equipo de Bsale ha puesto a disposici\xf3n de la comunidad de desarrolladores endpoints y webhooks para la comunicaci\xf3n con distintos tipos de courriers de env\xedos. Pudiendo notificar despachos, estados de \xe9stos y obtenci\xf3n de sus detalles.\nPara autenticar las peticiones en todos los endpoints se debe enviar en la cabecera el par\xe1metro ",(0,r.kt)("inlineCode",{parentName:"p"},"access_token"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Url base"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://courier.bsale.io"},"https://courier.bsale.io"))),(0,r.kt)("h2",{id:"get-una-orden"},"GET una orden"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/couriers/orders/:id.json")," retorna la informaci\xf3n de una orden para un courier.")),(0,r.kt)("h4",{id:"par\xe1metros"},"Par\xe1metros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"id"),", id de la orden (Integer)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"expand"),", opcional para expandir nodos (String) ")),(0,r.kt)("h4",{id:"ejemplos"},"Ejemplos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/couriers/orders/:idOrder.json?expand=orders.details")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/couriers/orders/:idOrder.json?expand=orders.deliveryType"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /couriers/orders/:idOrder.json "',title:'"Response',"/couriers/orders/:idOrder.json":!0,'"':!0},'{\n  "code": 200,\n  "data": {\n    "id": 32,\n    "origin": {\n      "country": "Chile",\n      "state": "Regi\xf3n Metropolitana",\n      "city": "Santiago",\n      "district": "Buin",\n      "address": "Camino Padre Hurtado 5696",\n      "zipcode": "",\n      "latitude": "0.0",\n      "longitude": "0.0"\n    },\n    "destination": {\n      "country": "Chile",\n      "state": "Regi\xf3n Metropolitana",\n      "city": "",\n      "district": "Vitacura",\n      "address": "mar jonico 7995",\n      "buildingNumber": "",\n      "zipcode": "",\n      "latitude": "0.0",\n      "longitude": "0.0"\n    },\n    "packagingType": 0,\n    "contact": {\n      "firstName": "Stefany Milagros",\n      "lastName": "Palma Giron",\n      "email": "sgcobranzas@gmail.com",\n      "code": "",\n      "phone": "941257211"\n    },\n    "comment": "A dos cuadras del colegio Sagrado Corazon de Jes\xfas",\n    "deliveryType": {\n      "id": 3,\n      "name": "Overnight",\n      "code": "over001",\n      "courierId": 2\n    },\n    "courierId": 2,\n    "sellerId": 1,\n    "stateId": 6,\n    "label": "",\n    "trackingNumber": "",\n    "details": [\n      {\n        "id": 2,\n        "description": "el anan\xe1 de Pablo HUESO",\n        "quantity": 1,\n        "weight": 5,\n        "length": 5,\n        "width": 5,\n        "height": 5\n      }\n    ]\n  }\n}\n')),(0,r.kt)("h4",{id:"atributos"},"Atributos"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Atributo"),(0,r.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"),(0,r.kt)("th",{parentName:"tr",align:null},"Tipo dato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"origin")),(0,r.kt)("td",{parentName:"tr",align:null},"objeto con la informaci\xf3n desde donde se despachar\xe1"),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"country")),(0,r.kt)("td",{parentName:"tr",align:null},"pa\xeds"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"state")),(0,r.kt)("td",{parentName:"tr",align:null},"regi\xf3n(Chile)/departamento(Per\xfa)"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"city")),(0,r.kt)("td",{parentName:"tr",align:null},"ciudad"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"district")),(0,r.kt)("td",{parentName:"tr",align:null},"comuna(Chile)/distrito(Per\xfa)"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:null},"direcci\xf3n"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"zipcode")),(0,r.kt)("td",{parentName:"tr",align:null},"c\xf3digo postal"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"latitude")),(0,r.kt)("td",{parentName:"tr",align:null},"latitud"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"longitude")),(0,r.kt)("td",{parentName:"tr",align:null},"longitud"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"destination")),(0,r.kt)("td",{parentName:"tr",align:null},"objeto con la informaci\xf3n de destino del despacho"),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"country")),(0,r.kt)("td",{parentName:"tr",align:null},"pa\xeds"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"state")),(0,r.kt)("td",{parentName:"tr",align:null},"regi\xf3n(Chile)/departamento(Per\xfa)"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"city")),(0,r.kt)("td",{parentName:"tr",align:null},"ciudad"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"district")),(0,r.kt)("td",{parentName:"tr",align:null},"comuna(Chile)/distrito(Per\xfa)"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:null},"nombre de la calle"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"buildingNumber")),(0,r.kt)("td",{parentName:"tr",align:null},"numero de la propiedad"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"zipcode")),(0,r.kt)("td",{parentName:"tr",align:null},"c\xf3digo postal"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"latitude")),(0,r.kt)("td",{parentName:"tr",align:null},"latitud (no disponible actualmente)"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"longitude")),(0,r.kt)("td",{parentName:"tr",align:null},"longitud (no disponible actualmente)"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"contact")),(0,r.kt)("td",{parentName:"tr",align:null},"objeto con la informaci\xf3n de contacto del destinatario"),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"firstName")),(0,r.kt)("td",{parentName:"tr",align:null},"nombre"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lastName")),(0,r.kt)("td",{parentName:"tr",align:null},"apellido"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"email")),(0,r.kt)("td",{parentName:"tr",align:null},"email de contacto"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"code")),(0,r.kt)("td",{parentName:"tr",align:null},"c\xf3digo del destinatario"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"phone")),(0,r.kt)("td",{parentName:"tr",align:null},"tel\xe9fono"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"seller")),(0,r.kt)("td",{parentName:"tr",align:null},"informaci\xf3n de contacto del remitente"),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"comment")),(0,r.kt)("td",{parentName:"tr",align:null},"comentario opcional"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"packagingType")),(0,r.kt)("td",{parentName:"tr",align:null},"despacho en m\xfaltiples paquetes(0-no/1-si)"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"deliveryTypes")),(0,r.kt)("td",{parentName:"tr",align:null},"tipo de despacho (expand: orders.deliveryType)"),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"courierId")),(0,r.kt)("td",{parentName:"tr",align:null},"id del courier"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"sellerId")),(0,r.kt)("td",{parentName:"tr",align:null},"id del seller"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"stateId")),(0,r.kt)("td",{parentName:"tr",align:null},"id del estado del despacho"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:null},"etiqueta del pedido"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"trackingNumber")),(0,r.kt)("td",{parentName:"tr",align:null},"numero de seguimiento"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"details")),(0,r.kt)("td",{parentName:"tr",align:null},"detalle del despacho (expand: orders.details)"),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:null},"descripci\xf3n del detalle"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"quantity")),(0,r.kt)("td",{parentName:"tr",align:null},"cantidad"),(0,r.kt)("td",{parentName:"tr",align:null},"Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"weight")),(0,r.kt)("td",{parentName:"tr",align:null},"Peso en kg"),(0,r.kt)("td",{parentName:"tr",align:null},"Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"length")),(0,r.kt)("td",{parentName:"tr",align:null},"Largo en cm"),(0,r.kt)("td",{parentName:"tr",align:null},"Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"width")),(0,r.kt)("td",{parentName:"tr",align:null},"Ancho en cm"),(0,r.kt)("td",{parentName:"tr",align:null},"Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"height")),(0,r.kt)("td",{parentName:"tr",align:null},"Altura en cm"),(0,r.kt)("td",{parentName:"tr",align:null},"Float")))),(0,r.kt)("h2",{id:"post-estados-del-despacho"},"POST estados del despacho"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"POST ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/logs.json")," registra de movimientos y estados del despacho.")),(0,r.kt)("h4",{id:"par\xe1metros-1"},"Par\xe1metros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"id"),", id de la orden (Integer)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"description"),", descripci\xf3n del detalle (String)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"stateId"),", id del estado (Integer)")),(0,r.kt)("h4",{id:"estados-del-despacho"},"Estados del despacho"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"1")," Por retirar (Listo para despacho)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"2")," En tr\xe1nsito (Despachado)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"3")," Entregado (Entregado)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"4")," Problema con la entrega (Error al despachar)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"5")," Problema con los datos (Error al despachar)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"6")," Anulado")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/4BxgaHL.png",alt:"Estados"}))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /logs.json "',title:'"Response',"/logs.json":!0,'"':!0},'{\n   "orderId": 122,\n   "description": "paquete despachado",\n   "stateId": 2\n}\n')),(0,r.kt)("h2",{id:"post-url-seguimiento-y-etiqueta"},"POST url seguimiento y etiqueta"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"POST ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/couriers/orders/:id/label.json")," registra la etiqueta y n\xfamero de seguimiento")),(0,r.kt)("h4",{id:"par\xe1metros-2"},"Par\xe1metros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"orderId"),", id de la orden (Integer)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"trackingNumber"),"  C\xf3digo de seguimiento (String)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"label")," Url externa de etiqueta (Integer)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /documents/421.json "',title:'"Response',"/documents/421.json":!0,'"':!0},'{\n   "orderId": 14861,\n   "trackingNumber": "909981888-F",\n   "label": "http://courierdemo.com/storage/img9099decode.jpg"\n}\n')),(0,r.kt)("h1",{id:"webhooks-env\xedos"},"Webhooks Env\xedos"),(0,r.kt)("h2",{id:"esructura-json"},"Esructura JSON"),(0,r.kt)("p",null,"Se realizar\xe1 una petici\xf3n POST al endpoint que designe el Courier, la cual contendr\xe1 en su cuerpo el siguiente detalle:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "cpnId": 33250,\n    "sellerId": 7,\n    "userToken": "5882317a9a3555abc25e582ac585e94f5b792494",\n    "resource": "/v1/couriers/orders/17170.json",\n    "resourceId": "17170",\n    "topic": "courierOrder",\n    "action": "post",\n    "send": 1629741015\n}\n')),(0,r.kt)("h4",{id:"par\xe1metros-3"},"Par\xe1metros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sellerId"),", id de la empresa que solicita la orden (Integer)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"resource"),", Endpoint para obtener la informaci\xf3n del recurso (String)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"resourceId"),", id del recurso notificado (String)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"topic"),", motivo o recurso de la notificaci\xf3n (String)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"action"),", verbo REST de la notificaci\xf3n (String)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"send"),", UNIX Timestamp de la notificaci\xf3n (Integer)")))}m.isMDXComponent=!0}}]);