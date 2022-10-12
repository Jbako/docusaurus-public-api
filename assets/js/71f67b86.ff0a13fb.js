"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[1468],{3905:(e,t,l)=>{l.d(t,{Zo:()=>d,kt:()=>p});var n=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},d=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),k=s(l),p=a,m=k["".concat(o,".").concat(p)]||k[p]||c[p]||i;return l?n.createElement(m,r(r({ref:t},d),{},{components:l})):n.createElement(m,r({ref:t},d))}));function p(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=l.length,r=new Array(i);r[0]=k;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,r[1]=u;for(var s=2;s<i;s++)r[s]=l[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},6544:(e,t,l)=>{l.r(t),l.d(t,{contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>o});var n=l(7462),a=(l(7294),l(3905));const i={title:"Preguntas frecuentes",slug:"/faq"},r="Preguntas frecuentes",u={type:"mdx",permalink:"/docusaurus-public-api/FAQ",source:"@site/src/pages/FAQ.md",title:"Preguntas frecuentes",description:"Generalidades",frontMatter:{title:"Preguntas frecuentes",slug:"/faq"}},o=[{value:"Generalidades",id:"generalidades",level:2},{value:"Convenciones utilizadas",id:"convenciones-utilizadas",level:2},{value:"Seguridad",id:"seguridad",level:2},{value:"Enviar un requests",id:"enviar-un-requests",level:2},{value:"Ejemplo curl",id:"ejemplo-curl",level:2},{value:"Herramientas \xfatiles",id:"herramientas-\xfatiles",level:2},{value:"C\xf3digos de error http",id:"c\xf3digos-de-error-http",level:2},{value:"Mensajes de error",id:"mensajes-de-error",level:2},{value:"400",id:"400",level:3},{value:"500",id:"500",level:3}],s={toc:o};function d(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"preguntas-frecuentes"},"Preguntas frecuentes"),(0,a.kt)("h2",{id:"generalidades"},"Generalidades"),(0,a.kt)("p",null,"El equipo de Bsale ha puesto a disposici\xf3n de la comunidad de desarrolladores una API, la cual permite acceder a un conjunto de m\xe9todos orientados a facilitar la integraci\xf3n, desde sistemas externos hacia Bsale."),(0,a.kt)("p",null,"Estos m\xe9todos permitir\xe1n obtener informaci\xf3n desde Bsale o enviar informaci\xf3n hacia la aplicaci\xf3n. As\xed, por ejemplo, se puede generar documentos tributarios, obtener los documentos generados, productos, clientes etc."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Esta API permite llamadas del tipo ",(0,a.kt)("a",{parentName:"p",href:"https://es.wikipedia.org/wiki/Transferencia_de_Estado_Representacional"},(0,a.kt)("strong",{parentName:"a"},"REST"))," y utiliza ",(0,a.kt)("a",{parentName:"p",href:"https://www.json.org/json-en.html"},(0,a.kt)("strong",{parentName:"a"},"JSON"))," para el env\xedo y recepci\xf3n de informaci\xf3n.")),(0,a.kt)("h2",{id:"convenciones-utilizadas"},"Convenciones utilizadas"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Peticiones sobre ",(0,a.kt)("inlineCode",{parentName:"li"},"SSL")),(0,a.kt)("li",{parentName:"ul"},"Se usan sustantivos, no verbos."),(0,a.kt)("li",{parentName:"ul"},'Se utilizan dos urls base por recurso "',(0,a.kt)("inlineCode",{parentName:"li"},"/clients.json"),'", "',(0,a.kt)("inlineCode",{parentName:"li"},"clients/1.json"),'"'),(0,a.kt)("li",{parentName:"ul"},"Siempre se usa el nombre del recurso en plural."),(0,a.kt)("li",{parentName:"ul"},"Se env\xeda la url del recurso."),(0,a.kt)("li",{parentName:"ul"},"Respuesta en una estructura ",(0,a.kt)("inlineCode",{parentName:"li"},"JSON")," con los atributos en camelCase.\ntodas las respuestas son en ingles (atributos y mensajes)."),(0,a.kt)("li",{parentName:"ul"},"Manejo de versiones en la url."),(0,a.kt)("li",{parentName:"ul"},"Manejo de errores y estados en las respuestas."),(0,a.kt)("li",{parentName:"ul"},"Paginaci\xf3n de la respuesta ",(0,a.kt)("inlineCode",{parentName:"li"},"JSON"),"."),(0,a.kt)("li",{parentName:"ul"},"Permitir acceder a las relaciones de un recurso a trav\xe9s de la variable expand en una sola petici\xf3n."),(0,a.kt)("li",{parentName:"ul"},"Permitir devolver solo los atributos requeridos a trav\xe9s de la variable fields."),(0,a.kt)("li",{parentName:"ul"},"Las fechas se trabaja como enteros, por ejemplo ",(0,a.kt)("inlineCode",{parentName:"li"},"1388545200")," corresponde a la fecha 2014-01-01, la conversi\xf3n es realizada utilizando el Tiempo Unix.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Si necesitas aprender como trabaja Bsale puedes revisar nuestros videos de ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/user/BsaleWS/playlists"},"capacitaci\xf3n"))),(0,a.kt)("h2",{id:"seguridad"},"Seguridad"),(0,a.kt)("p",null,"Para autenticar una petici\xf3n se utiliza un token de acceso, el cual deber\xe1 acompa\xf1ar cada llamada en la cabecera de la petici\xf3n. "),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"L\xe9e sobre c\xf3mo obtener tu token de acceso. \ud83d\udc49 ",(0,a.kt)("a",{parentName:"p",href:"/primeros-pasos#token-producci%C3%B3n"},"Ir"),".")),(0,a.kt)("p",null,"Es importante indicar que este token de acceso es \xfanico para cada empresa/usuario."),(0,a.kt)("h2",{id:"enviar-un-requests"},"Enviar un requests"),(0,a.kt)("p",null,"Las peticiones son ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP REST")," por lo que se debe especificar el m\xe9todo que se va a utilizar, junto al m\xe9todo se debe enviar en la cabecera de la petici\xf3n el token de acceso que permite la autenticaci\xf3n en la API."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"GET"),", para obtener informaci\xf3n de un recurso."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"POST"),", para crear un recurso."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"PUT"),", para modificar un recurso."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DELETE"),", para eliminar un recurso.")),(0,a.kt)("h2",{id:"ejemplo-curl"},"Ejemplo curl"),(0,a.kt)("p",null,"Un ejemplo en ",(0,a.kt)("a",{parentName:"p",href:"https://curl.se/"},"curl")," ser\xeda:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'curl -i -H "access_token: tutokendeacceso" -X GET https://api.bsale.cl/v1/clients.json\n')),(0,a.kt)("h2",{id:"herramientas-\xfatiles"},"Herramientas \xfatiles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Para realizar peticiones ",(0,a.kt)("inlineCode",{parentName:"li"},"REST")," de forma sencilla pueden utilizar una extensi\xf3n de un Cliente ",(0,a.kt)("inlineCode",{parentName:"li"},"REST")," del Google Chrome, Postman, insomnia, etc."),(0,a.kt)("li",{parentName:"ul"},"Para ver como se convierte la fecha a enteros pueden revisar\n",(0,a.kt)("a",{parentName:"li",href:"https://www.epochconverter.com/"},"epoch converter")),(0,a.kt)("li",{parentName:"ul"},"Para procesar los ejemplos, utiliza ",(0,a.kt)("a",{parentName:"li",href:"https://www.postman.com/"},"Postman"),".")),(0,a.kt)("h1",{id:"errores"},"Errores"),(0,a.kt)("p",null,"Todos los mensajes de error entregan un c\xf3digo de error y un mensaje descriptivo del error."),(0,a.kt)("h2",{id:"c\xf3digos-de-error-http"},"C\xf3digos de error http"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"C\xf3digo"),(0,a.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"400")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"Bad Request")),(0,a.kt)("td",{parentName:"tr",align:null},"Petici\xf3n inv\xe1lida")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"401")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"Unauthorized")),(0,a.kt)("td",{parentName:"tr",align:null},"Access Token incorrecto")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"402")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"Payment Required ")),(0,a.kt)("td",{parentName:"tr",align:null},"Instancia bloqueada por no pago")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"403")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"Forbidden")),(0,a.kt)("td",{parentName:"tr",align:null},"No tiene autorizaci\xf3n para acceder al recurso solicitado")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"404")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"Not Found ")),(0,a.kt)("td",{parentName:"tr",align:null},"Recurso solicitado no pudo ser encontrado")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"405")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"Method Not Allowed")),(0,a.kt)("td",{parentName:"tr",align:null},"El m\xe9todo o acci\xf3n solicitada no est\xe1 permitida en el recurso")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"500")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"Internal Server Error")),(0,a.kt)("td",{parentName:"tr",align:null},"Ocurri\xf3 un error no esperado en el servidor que procesa la petici\xf3n")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"502")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"Unknown Error")),(0,a.kt)("td",{parentName:"tr",align:null},"Un error no manejado por la API")))),(0,a.kt)("h2",{id:"mensajes-de-error"},"Mensajes de error"),(0,a.kt)("h3",{id:"400"},"400"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Invalid variant"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica la variante del detalle, estado, espacios o guiones est\xe1n correctamente enviados."),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:"),(0,a.kt)("code",null,(0,a.kt)("p",null,'"error": invalid variant"'))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"The json does not have reference document"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica la estructura JSON, si est\xe1s generando una devoluci\xf3n, \xe9sta debe tener una referencia."),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "the json does not have reference document"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Invalid variant"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica la(s) variante(s) que se envian, ej su estado, espacios, guiones o la variante es posible que la variante no exista"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": invalid variant"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"The json does not have reference document"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica la referencia usada"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "the json does not have reference document" ')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Invalid reference detail"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica la referencia del documento a nivel del detalle debe ser un id v\xe1lido"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "invalid reference detail"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Invalid documentType"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica el documentType que est\xe9 activo. Valida que est\xe1s apuntando al recurso correcto (devoluciones a returns.json / ventas a documents.json etc)"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "invalid documentType"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Invalid net unit value, zero or negative values are not allowed for this type of document"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica los valores en los netos, si necesitas generar una l\xednea con valor 0, indica un 100% descuento a la l\xednea"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "Invalid net unit value, zero or negative values are not allowed for this type of document"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Sorry, this request can not be authenticated"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica el token de acceso utilizado en la petici\xf3n"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error":"Sorry, this request can not be authenticated"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"No implicit conversion of String into Integer"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica la estructura JSON, respeta nodos y arreglos seg\xfan corresponda"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "no implicit conversion of String into Integer"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Invalid price list"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica la lista de precios que est\xe1 referenciando, debe existir y tener estado activo"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "invalid price list"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,'"code" is out of range for ActiveRecord::Type::Integer with limit 4'),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica que el code que est\xe1s usando exista en Bsale o tenga estado 0"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error":""code" is out of range for ActiveRecord::Type::Integer with limit 4"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Invalid pack promo detail"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica que el pack promoci\xf3n est\xe9 asociado por variantes. Valida que el code del pack exista."),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error":"invalid pack promo detail"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Client attribute required : code,activity,address,city,municipality"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica los datos de cliente. En caso que no necesitar estos datos, colocate en contacto con ayuda@bsale.app"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error":"client attribute required : code,activity,address,city,municipality"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"The amount is higher than deposit available"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica el monto pagado sea mayor o igual a la deuda"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "the amount is higher than deposit available"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Does not have numbers available, check sii caf"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica los folios electr\xf3nicos, en caso de ser necesario cargar nuevos"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "does not have numbers available, check sii caf"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,'The quantity returned (1.0) is higher than the available (0.0) for detail: "id detalle"'),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica la cantidad de la devoluci\xf3n. Valida que no tenga generada una devoluci\xf3n a la misma venta."),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "The quantity returned (1.0) is higher than the available (0.0) for detail: "id detalle""')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"This document may not be removed because it was used"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica que el documento de referencia est\xe9 con estado activo"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "This document may not be removed because it was used"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"There is a problem with the available quantity for your products"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica la cantidad de stock"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "There is a problem with the available quantity for your products"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,'There are more than a client with the code "code", client id: "clientId"'),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica que no exista un cliente con el mismo rut / mail"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "There are more than a client with the code "code", client id: "clientId""')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Invalid exchange rate"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica la lista de precios asignada a la sucursal"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error":"invalid exchange rate"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Invalid quantity"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica que respetas la estructura de env\xedo en el detalle (corchetes y comas)"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "invalid quantity"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Invalid JSON object"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:"),' Verifica que est\xe1s cerrando con coma (,) y comillas (") cada atributos que lo requiera'),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "Invalid JSON object"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"The return already been nullified"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica que la devoluci\xf3n est\xe9 disponible a anular"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "the return already been nullified"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Unavailable document number"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica el folio del documento. Contacta a soporte ayuda@bsale.app"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "unavailable document number" ')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Price list not found"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica el priceListId enviado en tu json, valida que este activo"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "price list not found"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,'the number of details allowed for this document is "n\xfamero"'),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica la configuraci\xf3n del tipo de documento, cada tipo de documento se configura seg\xfan sus necesidades"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "the number of details allowed for this document is "n\xfamero""')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"The client is required for this type of document if the amount is greater than or equal 10.0"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica la configuraci\xf3n del tipo de documento, cada tipo de documento se configura seg\xfan sus necesidades"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "The client is required for this type of document if the amount is greater than or equal 10.0"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,'This document type has the following client attributes required: "Rut del Cliente"'),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica la configuraci\xf3n del tipo de documento. En caso que no necesitar estos datos, colocate en contacto con ayuda@bsale.app"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "This document type has the following client attributes required: "Rut del Cliente""')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Couldn't find ListaPrecio with 'id_lista_precio'= "),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica que la sucursal tenga definida una lista de precios por defecto"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "Couldn\'t find ListaPrecio with \'id_lista_precio\'= "')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Max sku exceeded"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica la cantidad de skus en tu plan contratado, contacta a tu ejecutivo"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "max sku exceeded"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Sku maximum reached, contact emontero@imaginex.cl"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica la cantidad de skus en tu plan contratado"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "sku maximum reached, contact emontero@imaginex.cl"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"The document amount is higher than the client deposit amount"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica que el cliente no tiene un monto de abono igual al usado en el tipo de pago"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "The document amount is higher than the client deposit amount"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"This document only allow clients with companyOrPerson = 1"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica la configuraci\xf3n del tipo de documento. Valida la restricci\xf3n de uso de cliente"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "This document only allow clients with companyOrPerson = 1"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Invalid percentage, negative values are not allowed for this type of document"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica la configuraci\xf3n del tipo de documento"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "Invalid percentage, negative values are not allowed for this type of document"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"The sii caf used is expired, you must request and upload a new one"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica los folios electr\xf3nicos, en caso de ser necesario cargar nuevos"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "The sii caf used is expired, you must request and upload a new one"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Undefined method `has_key?' for Array:0x005644a47c1610 "),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica que que no est\xe9s enviando arreglos en nodos"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "undefined method `has_key?\' for Array:0x005644a47c1610"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Document amount is less than the minimum allowed"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica el monto m\xednimo del documento (Configuraci\xf3n tipo documento)"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "document amount is less than the minimum allowed"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Invalid country code in customsData"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica las propiedades de la factura de exportaci\xf3n"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "invalid country code in customsData"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Invalid sale mode in customsData"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica las propiedades de la factura de exportaci\xf3n"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "invalid sale mode in customsData"')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,'There is no stock for this products: "code"'),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica el code devuelto por la respuesta, debe tener stock para ser vendido"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "There is no stock for this products: "code""')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Use 'comment' to especify the serie of detailid to dispatch"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica que est\xe1s ingresando una serie en el detalle del documento, como indica la respuesta (comment)"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "Use \'comment\' to especify the serie of detailid to dispatch."')))),(0,a.kt)("h3",{id:"500"},"500"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"The requested resource is not available"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("b",null,"Descripci\xf3n:")," Verifica que est\xe1s ingresando una url v\xe1lida"),(0,a.kt)("div",null,(0,a.kt)("b",null,"Respuesta:")," ",(0,a.kt)("code",null,'"error": "The requested resource is not available"')))))}d.isMDXComponent=!0}}]);