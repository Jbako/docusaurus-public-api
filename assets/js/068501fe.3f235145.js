"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[9845],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),m=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=m(t.components);return a.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=m(n),c=r,k=s["".concat(d,".").concat(c)]||s[c]||p[c]||l;return n?a.createElement(k,o(o({ref:e},u),{},{components:n})):a.createElement(k,o({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2963:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:13,title:"Documentos de terceros",description:"Listar documentos de compras",slug:"/documentos-de-terceros"},o="Documentos de terceros",i={unversionedId:"Documentos/Documentos de terceros",id:"Documentos/Documentos de terceros",title:"Documentos de terceros",description:"Listar documentos de compras",source:"@site/docs/Documentos/Documentos de terceros.md",sourceDirName:"Documentos",slug:"/documentos-de-terceros",permalink:"/docusaurus-public-api/documentos-de-terceros",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,title:"Documentos de terceros",description:"Listar documentos de compras",slug:"/documentos-de-terceros"},sidebar:"tutorialSidebar",previous:{title:"Devoluciones",permalink:"/docusaurus-public-api/devoluciones"},next:{title:"Webhooks",permalink:"/docusaurus-public-api/documentos/webhooks"}},d={},m=[{value:"Estructura JSON",id:"estructura-json",level:2},{value:"Atributos",id:"atributos",level:3},{value:"siiStatus",id:"siistatus",level:3},{value:"GET lista de documentos de terceros",id:"get-lista-de-documentos-de-terceros",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:4},{value:"Ejemplos",id:"ejemplos",level:4},{value:"GET un documento de tercero",id:"get-un-documento-de-tercero",level:2},{value:"GET cantidad de documentos de terceros",id:"get-cantidad-de-documentos-de-terceros",level:2}],u={toc:m};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"documentos-de-terceros"},"Documentos de terceros"),(0,r.kt)("p",null,"Listar documentos recepcionados en Bsale, emitidos por proveedores (facturas, notas de cr\xe9dito, d\xe9bito etc)"),(0,r.kt)("h2",{id:"estructura-json"},"Estructura JSON"),(0,r.kt)("p",null,"Al realizar una petici\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP"),", el servicio retornara un JSON con la siguiente estructura:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Response /third_party_documents/38.json"',title:'"Response','/third_party_documents/38.json"':!0},'{\n  "href": "https://api.bsale.cl/v1/third_party_documents/38.json",\n  "id": 38,\n  "codeSii": "34",\n  "emissionDate": 1330657200,\n  "number": 1179981,\n  "clientCode": "89862200-2",\n  "clientActivity": "LAN AIRLINES S.A.",\n  "exemptAmount": 66488,\n  "netAmount": 66488,\n  "iva": 19,\n  "ivaAmount": 0,\n  "ivaOutOfTimeAmount": 0,\n  "specificTaxCode": null,\n  "specificTaxAmount": "0",\n  "additionalTaxAmount": null,\n  "ivaNotRecoverableAmount": 0,\n  "totalAmount": 66488,\n  "bookType": "compra",\n  "reportedSii": 0,\n  "thirdSii": 0,\n  "month": 4,\n  "year": 2012,\n  "specificTaxRate": null,\n  "canceled": 0,\n  "ivaAmountWithheld": 0,\n  "addBook": 1,\n  "urlPdf": null,\n  "urlXml": null,\n  "fixedAssetAmount": 0,\n  "liquidationCode": null,\n  "commissionTotalNetAmount": 0,\n  "commissionTotalExemptAmount": 0,\n  "commissionTotalIvaAmount": 0,\n  "docsCount": 0,\n  "include": 1,\n  "siiReceptionDate": 1546634391,\n  "siiInProgress": false,\n  "siiStatus": [\n    "PAG",\n    "ERM"\n  ]\n}\n')),(0,r.kt)("h3",{id:"atributos"},"Atributos"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Atributo"),(0,r.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"),(0,r.kt)("th",{parentName:"tr",align:null},"Tipo dato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"href")),(0,r.kt)("td",{parentName:"tr",align:null},"url del documento"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"identificador \xfanico del documento"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"codeSii")),(0,r.kt)("td",{parentName:"tr",align:null},"c\xf3digo tributario del documento"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"emissionDate")),(0,r.kt)("td",{parentName:"tr",align:null},"fecha de emisi\xf3n del documento"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"folio del documento"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"clientCode")),(0,r.kt)("td",{parentName:"tr",align:null},"rut del cliente"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"clientActivity")),(0,r.kt)("td",{parentName:"tr",align:null},"raz\xf3n social del cliente"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"exemptAmount")),(0,r.kt)("td",{parentName:"tr",align:null},"monto exento del documento"),(0,r.kt)("td",{parentName:"tr",align:null},"Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"netAmount")),(0,r.kt)("td",{parentName:"tr",align:null},"monto neto del documento"),(0,r.kt)("td",{parentName:"tr",align:null},"Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"iva")),(0,r.kt)("td",{parentName:"tr",align:null},"porcentaje de IVA"),(0,r.kt)("td",{parentName:"tr",align:null},"Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ivaAmount")),(0,r.kt)("td",{parentName:"tr",align:null},"monto iva del documento"),(0,r.kt)("td",{parentName:"tr",align:null},"Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ivaOutOfTimeAmount")),(0,r.kt)("td",{parentName:"tr",align:null},"monto iva fuera de plazo del documento"),(0,r.kt)("td",{parentName:"tr",align:null},"Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"specificTaxCode")),(0,r.kt)("td",{parentName:"tr",align:null},"c\xf3digo del impuesto especifico"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"specificTaxAmount")),(0,r.kt)("td",{parentName:"tr",align:null},"monto del impuesto especifico"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"additionalTaxAmount")),(0,r.kt)("td",{parentName:"tr",align:null},"monto de impuestos adicionales"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ivaNotRecoverableAmount")),(0,r.kt)("td",{parentName:"tr",align:null},"monto de iva no recuperable"),(0,r.kt)("td",{parentName:"tr",align:null},"Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"totalAmount")),(0,r.kt)("td",{parentName:"tr",align:null},"monto total del documento."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"bookType")),(0,r.kt)("td",{parentName:"tr",align:null},"tipo de libro al que pertenece el documento"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"reportedSii")),(0,r.kt)("td",{parentName:"tr",align:null},"indica si el documento fue infomado al SII, 0 es correcto, 1 es enviado, 2 es rechazado"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"thirdSii")),(0,r.kt)("td",{parentName:"tr",align:null},"indica si el documento es de compra No(0) Si(1)"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"month")),(0,r.kt)("td",{parentName:"tr",align:null},"mes al cual pertenece el documento"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"year")),(0,r.kt)("td",{parentName:"tr",align:null},"a\xf1o al cual pertenece el documento"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"specificTaxRate")),(0,r.kt)("td",{parentName:"tr",align:null},"tasa de impuesto especifico"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"canceled")),(0,r.kt)("td",{parentName:"tr",align:null},"indica si el documento esta anulado No(0) Si(1)"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ivaAmountWithheld")),(0,r.kt)("td",{parentName:"tr",align:null},"monto de iva retenido"),(0,r.kt)("td",{parentName:"tr",align:null},"Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"addBook")),(0,r.kt)("td",{parentName:"tr",align:null},"indica si el documento fue agregado al libro No(0) Si(1)"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"urlPdf")),(0,r.kt)("td",{parentName:"tr",align:null},"url Pdf del documento"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"urlXml")),(0,r.kt)("td",{parentName:"tr",align:null},"url Xml del Documento"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"fixedAssetAmount")),(0,r.kt)("td",{parentName:"tr",align:null},"monto del activo fijo"),(0,r.kt)("td",{parentName:"tr",align:null},"Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"liquidationCode")),(0,r.kt)("td",{parentName:"tr",align:null},"rut de liquidaci\xf3n"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"commissionTotalNetAmount")),(0,r.kt)("td",{parentName:"tr",align:null},"monto total neto de la comisi\xf3n"),(0,r.kt)("td",{parentName:"tr",align:null},"Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"commissionTotalExemptAmount")),(0,r.kt)("td",{parentName:"tr",align:null},"monto total exento de la comisi\xf3n"),(0,r.kt)("td",{parentName:"tr",align:null},"Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"commissionTotalIvaAmount")),(0,r.kt)("td",{parentName:"tr",align:null},"monto total iva de la comisi\xf3n"),(0,r.kt)("td",{parentName:"tr",align:null},"Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"docsCount")),(0,r.kt)("td",{parentName:"tr",align:null},"cantidad de documentos"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"include")),(0,r.kt)("td",{parentName:"tr",align:null},'indica si el documento est\xe1 marcado como "no considerar" en Bsale. Considerar(1) no considerar(0'),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"siiReceptionDate")),(0,r.kt)("td",{parentName:"tr",align:null},"Fecha de recepci\xf3n del documento en el SII"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"siiInProgress")),(0,r.kt)("td",{parentName:"tr",align:null},"indicador de aceptaci\xf3n/reclamo en proceso"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"siiStatus")),(0,r.kt)("td",{parentName:"tr",align:null},"Lista de estados del documento en el SII"),(0,r.kt)("td",{parentName:"tr",align:null},"Array")))),(0,r.kt)("h3",{id:"siistatus"},"siiStatus"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ACD"),": Acepta Contenido del Documento"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RCD"),": Reclamo al Contenido del Documento"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ERM"),": Otorga Recibo de Mercader\xedas o Servicios"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RFP"),": Reclamo por Falta Parcial de Mercader\xedas"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RFT"),": Reclamo por Falta Total de Mercader\xedas"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RFX"),": Reclamo por Falta total y parcial de Mercader\xedas"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PAG"),": Aceptaci\xf3n por pago al contado")),(0,r.kt)("h2",{id:"get-lista-de-documentos-de-terceros"},"GET lista de documentos de terceros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/third_party_documents.json")," retornar\xe1 todos los documentos de terceros..")),(0,r.kt)("h4",{id:"par\xe1metros"},"Par\xe1metros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"limit"),", limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"offset"),", permite paginar los items de una respuesta JSON, por defecto el offset es 0."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fields"),", solo devolver atributos espec\xedficos de un recurso"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"limit"),", limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"offset"),", permite paginar los items de una respuesta JSON, por defecto el offset es 0."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fields"),", solo devolver atributos espec\xedficos de un recurso"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"emissiondate"),", filtra documentos por la fecha de emisi\xf3n."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"codesii"),", filtra por el c\xf3digo tributario del documento."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"number"),", filtra por el n\xfamero de folio del documento."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"clientcode"),", permite filtrar por rut del cliente."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"year"),", permite filtrar por a\xf1o del documento."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"month"),", permite filtrar por mes del documento."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"receptiondate"),", permite filtrar por fecha de recepci\xf3n del documento en el SII.")),(0,r.kt)("h4",{id:"ejemplos"},"Ejemplos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/third_party_documents.json?limit=10&offset=0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/third_party_documents.json?fields=[emissiondate,number,totalAmount]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/third_party_documents.json?year=2014")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/third_party_documents.json?codesii=31"))),(0,r.kt)("h2",{id:"get-un-documento-de-tercero"},"GET un documento de tercero"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/third_party_documents/38.json")," retorna un \xfanico documento.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /third_party_documents/38.json "',title:'"Response',"/third_party_documents/38.json":!0,'"':!0},'{\n  "href": "https://api.bsale.cl/v1/third_party_documents/38.json",\n  "id": 38,\n  "codeSii": "34",\n  "emissionDate": 1330657200,\n  "number": 1179981,\n  "clientCode": "89862200-2",\n  "clientActivity": "LAN AIRLINES S.A.",\n  "exemptAmount": 66488,\n  "netAmount": 66488,\n  "iva": 19,\n  "ivaAmount": 0,\n  "ivaOutOfTimeAmount": 0,\n  "specificTaxCode": null,\n  "specificTaxAmount": "0",\n  "additionalTaxAmount": null,\n  "ivaNotRecoverableAmount": 0,\n  "totalAmount": 66488,\n  "bookType": "compra",\n  "reportedSii": 0,\n  "thirdSii": 0,\n  "month": 4,\n  "year": 2012,\n  "specificTaxRate": null,\n  "canceled": 0,\n  "ivaAmountWithheld": 0,\n  "addBook": 1,\n  "urlPdf": null,\n  "urlXml": null,\n  "fixedAssetAmount": 0,\n  "liquidationCode": null,\n  "commissionTotalNetAmount": 0,\n  "commissionTotalExemptAmount": 0,\n  "commissionTotalIvaAmount": 0,\n  "docsCount": 0,\n  "include": 1,\n  "siiReceptionDate": 1546634391,\n  "siiInProgress": false,\n  "siiStatus": [\n    "PAG",\n    "ERM"\n  ]\n}\n')),(0,r.kt)("h2",{id:"get-cantidad-de-documentos-de-terceros"},"GET cantidad de documentos de terceros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/third_party_documents/count.json")," retornara la cantidad de documentos de terceros.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /third_party_documents/38.json "',title:'"Response',"/third_party_documents/38.json":!0,'"':!0},'{\n   "count": 135\n}\n')))}p.isMDXComponent=!0}}]);