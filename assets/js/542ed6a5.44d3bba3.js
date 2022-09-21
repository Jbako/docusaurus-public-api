"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[9199],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>m});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),c=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},u=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?t.createElement(v,l(l({ref:a},u),{},{components:n})):t.createElement(v,l({ref:a},u))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5217:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=n(7462),r=(n(7294),n(3905));const o={title:"Solicitud de baja de servicio",subtitle:"Aqu\xed encontrar\xe1s los end-point asociados a la solicitud de baja de servicios.",author:"Gustavo",tags:["bsp"],api:"bsp"},l=void 0,i={unversionedId:"Documentos/leave_request",id:"Documentos/leave_request",title:"Solicitud de baja de servicio",description:"Objetivos",source:"@site/docs/Documentos/leave_request.md",sourceDirName:"Documentos",slug:"/Documentos/leave_request",permalink:"/docusaurus-public-api/Documentos/leave_request",draft:!1,tags:[{label:"bsp",permalink:"/docusaurus-public-api/tags/bsp"}],version:"current",frontMatter:{title:"Solicitud de baja de servicio",subtitle:"Aqu\xed encontrar\xe1s los end-point asociados a la solicitud de baja de servicios.",author:"Gustavo",tags:["bsp"],api:"bsp"},sidebar:"tutorialSidebar",previous:{title:"Documentos de terceros",permalink:"/docusaurus-public-api/documentos-de-terceros"},next:{title:"Env\xedos",permalink:"/docusaurus-public-api/env\xedos"}},s={},c=[{value:"Objetivos",id:"objetivos",level:3},{value:"Solicitudes de baja",id:"solicitudes-de-baja",level:3},{value:"GET lista de solicitudes",id:"get-lista-de-solicitudes",level:4},{value:"GET solicitudes \xfanica",id:"get-solicitudes-\xfanica",level:4},{value:"POST de una nueva solicitud",id:"post-de-una-nueva-solicitud",level:4},{value:"PUT de una nueva solicitud",id:"put-de-una-nueva-solicitud",level:4}],u={toc:c};function p(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"objetivos"},"Objetivos"),(0,r.kt)("p",null,"Cuando existe un cliente que requiere dar de baja la aplicaci\xf3n, o cambiar de plan, eliminando una funcionalidad, de debe registrar una solicitud de baja, de manera de que  el equipo de servicio al cliente los contacte y apoye en el proceso de cierre o desvinculaci\xf3n de la aplicaci\xf3n.\nEn este sentido existen dos tipos de solicitudes, las de baja de servicios adicionales y las de baja del servicio base.\nLos endpoint que administran estos proceso  se encuentran descritos  en esta p\xe1gina."),(0,r.kt)("h3",{id:"solicitudes-de-baja"},"Solicitudes de baja"),(0,r.kt)("p",null,"Corresponde a la lista de end-point asociados a los procesos de solicitud de activaci\xf3n."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Estructura JSON")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n        "lrId": 79,\n        "cpnId": 27590,\n        "cpnName": "Cococacao",\n        "cpnCode": "XXXXXXX",\n        "cpnCountry": "CL",\n        "usrId": 1,\n        "usrName": "Gustavo Montero",\n        "lrDate": 1626903095,\n        "lrFrom": 1626903095,\n        "lrType": "OTHER",\n        "lrDetail": "Genera Muchos Problemas",\n        "lrContactName": "Gustavo Montero",\n        "lrContactEmail": "gmontero@imaginex.cl",\n        "lrContactPhone": "997797047",\n        "lrContactDate": null,\n        "lrService": "ML",\n        "lrWasContacted": true,\n        "lrStatus": 2\n }\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Variables")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"lrId"),": Identidicador \xfanico de la solicitud"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"cpnId"),": Identificador \xfanico de la instancia de la empresa"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"cpnName"),": Nombre de la empresa asociada a la instancia que est\xe1 solicitando la baja"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"cpnCode"),": C\xf3digo de la empresa solicitando la baja (RUC o RUT)"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"cpnCountry"),": Pa\xeds  asociada a la instancia"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"usrId"),": Identificador \xfanico del usaurio que est\xe1 solicitando la baja"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"usrName"),": Nombre del usuario de la aplicaci\xf3n que est\xe1 registrando la solicitud de baja"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"lrDate"),": Fecha de registro la solicitud de baja"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"lrService"),": Servicio que solicita se de de baja. Ene ste sentido las alternativas son:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"        Servicios Adicionales\n\n        - Cambio de plan -- Elimina integraci\xf3n Mercado Libre', value: 'ML'\n\n        - Cambio de plan -- Elimina Tienda en linea', value: 'MK'\n\n        - Cambio de plan -- Elimina integraci\xf3n Shopify', value: 'SP'\n\n        - Cambio de plan -- Elimina integraci\xf3n Nubox', value: 'NBX'\n\n        Servicos B\xe1se\n\n        - Baja servicio Bsale', value: 'LE-BSALE'\n\n        - Baja servicio Imagestion', value: 'LE-IMA'\n\n        - Baja servicio API', value: 'LE-API'\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"lrFrom"),": Fecha a partir de la cual se solicita se haga efectiva la baja del sistema"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"lrType"),": Clasificaci\xf3n del tipo de baja que se est\xe1 efectuando. Las alternativas son :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- Tengo que cerrar mi negocio', value: 'CLOSE\n\n- Necesito reducir costos', value: 'COST'\n\n- Bsale no tiene lo que necesito.', value: 'FUNCTIONALITY'\n\n- No estoy satisfecho con el funcionamiento de Bsale', value: 'FUNCTION'\n\n- No estoy satisfecho con la calidad de la atenci\xf3n', value: 'SERVICE'\n\n- No tengo tiempo para implementar', value: 'NOT-TIME'\n\n- No me autorizan la certificaci\xf3n', value: 'LEGAL'\n\n- No entiendo como usarlo', value: 'NOT-USE'\n\n- Cambio de RUT-RUC', valeu: 'RUT'\n\n- Se cambia a otro sistema', value: 'CHANGE'\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"lrDetail"),": Descripci\xf3n (texto), que detalla los motivos."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"lrContactName"),": Nombre de la persona que est\xe1 solicitando la baja (puede coicidir con el usaurio de registro)"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"lrContactEmail"),": E-mail de la persona que est\xe1 solicitando la baja"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"lrContactPhone"),": Tel\xe9fono de contacto de la persona que est\xe1 solicitando la baja"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"lrContactDate"),": Fecha en la que el equipo de atenci\xf3n al cliente contact\xf3 a la empresa"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"lrWasContacted"),": Boleano que establece si se contact\xf3 o no al cliente"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"lrStatus"),": Estado de la solicitu donde  0 es pendiente, 1 es procesada, 2 recuperada o anulada"),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"get-lista-de-solicitudes"},"GET lista de solicitudes"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"GET /v1/leaves.json"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Filtros:")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"search"),": Permite filtrar por c\xf3digo empresa o su nombre\n",(0,r.kt)("em",{parentName:"p"},"cpnId"),": Permite filtrar por el identificador \xfanico de la instancia\n",(0,r.kt)("em",{parentName:"p"},"dateFrom"),": L\xedmite inferior de rango de b\xfasqueda por fecha de solicitud\n",(0,r.kt)("em",{parentName:"p"},"dateTo"),": L\xedmite superior de rango de b\xfasqueda por fecha de solicitud\n",(0,r.kt)("em",{parentName:"p"},"lrState"),": Estado en el cual se encuentra la solicitud (0,1,2)\n",(0,r.kt)("em",{parentName:"p"},"lrService"),": Filtra por el nombre de servicio que se est\xe1 dando de baja\n",(0,r.kt)("em",{parentName:"p"},"country"),": Permite filtrar por pa\xeds de origen de la instancia\n",(0,r.kt)("em",{parentName:"p"},"serviceType"),': Permite filtrar por servicios "base" o por servicios adicionales "additional"\n',(0,r.kt)("strong",{parentName:"p"},"Respuesta")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "code": 200,\n    "href": "http://ec2-54-67-11-136.us-west-1.compute.amazonaws.com:7171/v1/leaves.json?&country=CL",\n    "count": 20,\n    "limit": 25,\n    "offset": 0,\n    "data": [\n        {\n            "lrId": 160,\n            "cpnId": 4210,\n            "cpnName": "Comercial Las Mellizas SPA",\n            "cpnCode": "76212525-0",\n            "cpnCountry": "CL",\n            "usrId": 48,\n            "usrName": "Soporte Imaginex",\n            "lrDate": 1626903095,\n            "lrFrom": 1626903095,\n            "lrType": "CLOSE",\n            "lrDetail": "asdasdasd",\n            "lrContactName": "Juan  Tocornal",\n            "lrContactEmail": "jtocornal@lasmellizas.com",\n            "lrContactPhone": "12312313",\n            "lrContactDate": null,\n            "lrService": "LE-BSALE",\n            "lrWasContacted": null,\n            "lrStatus": null\n        },\n        {\n            "lrId": 132,\n            "cpnId": 4,\n            "cpnName": "Bsale Chile S.A.",\n            "cpnCode": "76136144-9",\n            "cpnCountry": "CL",\n            "usrId": 1,\n            "usrName": "Gustavo Montero",\n            "lrDate": 1626903095,\n            "lrFrom": 1626903095,\n            "lrType": "CLOSE",\n            "lrDetail": "Test",\n            "lrContactName": "Gustavo Montero",\n            "lrContactEmail": "gmontero@imaginex.cl",\n            "lrContactPhone": "8678282",\n            "lrContactDate": null,\n            "lrService": "SP",\n            "lrWasContacted": true,\n            "lrStatus": null\n        }\n  ]\n')),(0,r.kt)("h4",{id:"get-solicitudes-\xfanica"},"GET solicitudes \xfanica"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"GET /v1/leaves/:id.json"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"parametros:")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"id"),": Identificador \xfanico de una solicitud"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Respuesta")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "code": 200,\n    "data": {\n        "lrId": 79,\n        "cpnId": 27590,\n        "cpnName": "Cococacao",\n        "cpnCode": "76796187-1",\n        "cpnCountry": "CL",\n        "usrId": 1,\n        "usrName": "Gustavo Montero",\n        "lrDate": 1626903324\n        "lrFrom": 1626903324\n        "lrType": "OTHER",\n        "lrDetail": "Genera Muchos Problemas",\n        "lrContactName": "Gustavo Montero",\n        "lrContactEmail": "gmontero@imaginex.cl",\n        "lrContactPhone": "997797047",\n        "lrContactDate": null,\n        "lrService": "ML",\n        "lrWasContacted": true,\n        "lrStatus": 2\n    }\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"post-de-una-nueva-solicitud"},"POST de una nueva solicitud"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"POS /v1/leaves.json"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Datos a enviar")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{"},'            "cpnId": 4,\n            "usrId": 1,\n            "lrType": "CLOSE",\n            "lrDetail": "Test de registro de solicitud de baja",\n            "lrContactName": "Gustavo Montero",\n            "lrContactEmail": "gmontero@imaginex.cl",\n            "lrContactPhone": "8678282",\n            "lrService": "LE-BSALE"\n}\n')),(0,r.kt)("h4",{id:"put-de-una-nueva-solicitud"},"PUT de una nueva solicitud"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"PUT /v1/leaves.json"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Datos posibles de actualizar")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'        {\n            "cpnId": 4,\n            "usrId": 1,\n            "lrFrom": 1626903095,\n            "lrType": "CLOSE",\n            "lrDetail": "Test",\n            "lrContactName": "Gustavo Montero",\n            "lrContactEmail": "gmontero@imaginex.cl",\n            "lrContactPhone": "8678282",\n            "lrContactDate": null,\n            "lrService": "SP",\n            "lrWasContacted": true,\n            "lrStatus": 1\n        }\n')))}p.isMDXComponent=!0}}]);