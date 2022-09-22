"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[2125],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),u=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=u(e.components);return r.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=n,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(k,o(o({ref:a},c),{},{components:t})):r.createElement(k,o({ref:a},c))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3191:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(7462),n=(t(7294),t(3905));const i={id:"home",sidebar_position:1,title:"Inicio",slug:"/inicio"},o="Generalidades",l={unversionedId:"home",id:"home",title:"Inicio",description:"El equipo de Bsale ha puesto a disposici\xf3n de la comunidad de desarrolladores una API, la cual permite acceder a un conjunto de m\xe9todos orientados a facilitar la integraci\xf3n, desde sistemas externos hacia Bsale.",source:"@site/docs/home.md",sourceDirName:".",slug:"/inicio",permalink:"/docusaurus-public-api/inicio",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"home",sidebar_position:1,title:"Inicio",slug:"/inicio"},sidebar:"tutorialSidebar",next:{title:"Primeros pasos",permalink:"/docusaurus-public-api/primeros-pasos"}},s={},u=[{value:"Convenciones utilizadas",id:"convenciones-utilizadas",level:2},{value:"Seguridad",id:"seguridad",level:2},{value:"Enviar un requests",id:"enviar-un-requests",level:2},{value:"Ejemplo curl",id:"ejemplo-curl",level:2},{value:"Herramientas \xfatiles",id:"herramientas-\xfatiles",level:2}],c={toc:u};function p(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"generalidades"},"Generalidades"),(0,n.kt)("p",null,"El equipo de Bsale ha puesto a disposici\xf3n de la comunidad de desarrolladores una API, la cual permite acceder a un conjunto de m\xe9todos orientados a facilitar la integraci\xf3n, desde sistemas externos hacia Bsale."),(0,n.kt)("p",null,"Estos m\xe9todos permitir\xe1n obtener informaci\xf3n desde Bsale o enviar informaci\xf3n hacia la aplicaci\xf3n. As\xed, por ejemplo, se puede generar documentos tributarios, obtener los documentos generados, productos, clientes etc."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Esta API permite llamadas del tipo ",(0,n.kt)("a",{parentName:"p",href:"https://es.wikipedia.org/wiki/Transferencia_de_Estado_Representacional"},(0,n.kt)("strong",{parentName:"a"},"REST"))," y utiliza ",(0,n.kt)("a",{parentName:"p",href:"https://www.json.org/json-en.html"},(0,n.kt)("strong",{parentName:"a"},"JSON"))," para el env\xedo y recepci\xf3n de informaci\xf3n.")),(0,n.kt)("h2",{id:"convenciones-utilizadas"},"Convenciones utilizadas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Peticiones sobre ",(0,n.kt)("inlineCode",{parentName:"li"},"SSL")),(0,n.kt)("li",{parentName:"ul"},"Se usan sustantivos, no verbos."),(0,n.kt)("li",{parentName:"ul"},'Se utilizan dos urls base por recurso "',(0,n.kt)("inlineCode",{parentName:"li"},"/clients.json"),'", "',(0,n.kt)("inlineCode",{parentName:"li"},"clients/1.json"),'"'),(0,n.kt)("li",{parentName:"ul"},"Siempre se usa el nombre del recurso en plural."),(0,n.kt)("li",{parentName:"ul"},"Se env\xeda la url del recurso."),(0,n.kt)("li",{parentName:"ul"},"Respuesta en una estructura ",(0,n.kt)("inlineCode",{parentName:"li"},"JSON")," con los atributos en camelCase.\ntodas las respuestas son en ingles (atributos y mensajes)."),(0,n.kt)("li",{parentName:"ul"},"Manejo de versiones en la url."),(0,n.kt)("li",{parentName:"ul"},"Manejo de errores y estados en las respuestas."),(0,n.kt)("li",{parentName:"ul"},"Paginaci\xf3n de la respuesta ",(0,n.kt)("inlineCode",{parentName:"li"},"JSON"),"."),(0,n.kt)("li",{parentName:"ul"},"Permitir acceder a las relaciones de un recurso a trav\xe9s de la variable expand en una sola petici\xf3n."),(0,n.kt)("li",{parentName:"ul"},"Permitir devolver solo los atributos requeridos a trav\xe9s de la variable fields."),(0,n.kt)("li",{parentName:"ul"},"Las fechas se trabaja como enteros, por ejemplo ",(0,n.kt)("inlineCode",{parentName:"li"},"1388545200")," corresponde a la fecha 2014-01-01, la conversi\xf3n es realizada utilizando el Tiempo Unix.")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Si necesitas aprender como trabaja Bsale puedes revisar nuestros videos de ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/user/BsaleWS/playlists"},"capacitaci\xf3n"))),(0,n.kt)("h2",{id:"seguridad"},"Seguridad"),(0,n.kt)("p",null,"Para autenticar una petici\xf3n se utiliza un token de acceso, el cual deber\xe1 acompa\xf1ar cada llamada en la cabecera de la petici\xf3n. El token deber\xe1 ser solicitado al equipo de Bsale (",(0,n.kt)("a",{parentName:"p",href:"mailto:ayuda@bsale.app"},"ayuda@bsale.app"),")."),(0,n.kt)("p",null,"Es importante indicar que este token de acceso es \xfanico para cada empresa/usuario."),(0,n.kt)("h2",{id:"enviar-un-requests"},"Enviar un requests"),(0,n.kt)("p",null,"Las peticiones son ",(0,n.kt)("inlineCode",{parentName:"p"},"HTTP REST")," por lo que se debe especificar el m\xe9todo que se va a utilizar, junto al m\xe9todo se debe enviar en la cabecera de la petici\xf3n el token de acceso que permite la autenticaci\xf3n en la API."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"GET"),", para obtener informaci\xf3n de un recurso."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"POST"),", para crear un recurso."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"PUT"),", para modificar un recurso."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"DELETE"),", para eliminar un recurso.")),(0,n.kt)("h2",{id:"ejemplo-curl"},"Ejemplo curl"),(0,n.kt)("p",null,"Un ejemplo en ",(0,n.kt)("a",{parentName:"p",href:"https://curl.se/"},"curl")," ser\xeda:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'curl -i -H "access_token: tutokendeacceso" -X GET https://api.bsale.cl/v1/clients.json\n')),(0,n.kt)("h2",{id:"herramientas-\xfatiles"},"Herramientas \xfatiles"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Para realizar peticiones ",(0,n.kt)("inlineCode",{parentName:"li"},"REST")," de forma sencilla pueden utilizar una extensi\xf3n de un Cliente ",(0,n.kt)("inlineCode",{parentName:"li"},"REST")," del Google Chrome, Postman, insomnia, etc."),(0,n.kt)("li",{parentName:"ul"},"Para ver como se convierte la fecha a enteros pueden revisar\n",(0,n.kt)("a",{parentName:"li",href:"https://www.epochconverter.com/"},"epoch converter")),(0,n.kt)("li",{parentName:"ul"},"Para procesar los ejemplos, utiliza ",(0,n.kt)("a",{parentName:"li",href:"https://www.postman.com/"},"Postman"),".")))}p.isMDXComponent=!0}}]);