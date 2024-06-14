import{R as ie,j as d,f as Y,r as s,P as re,m as Le,D as E,U as cn,O as P,a as Q,c as G,h as pn,Z as Se,I as dn,g as fn,N as mn}from"./index-CT-9_id-.js";const Rr="http://localhost/Login/mostrar.php",Ar="http://localhost/Login/Registro.php",Mr="http://localhost/Login/IniciarSesion.php",Dr="http://localhost/Login/Comentarios.php",kr="http://localhost/Login/MostrarCarrito.php",$r="http://localhost/Login/addCarrito.php",zr="http://localhost/Login/aumentarDecre.php",Ur="http://localhost/Login/ElminarDelCarrito.php",gn="http://localhost/Login/mostrarDatosUsuario.php",Hr="http://localhost/Login/MostrarInvetario.php",Br="http://localhost/Login/Perfil.php",Fr="http://localhost/Login/avatares/",Gr="http://localhost/Login/EliminarImagen.php",Vr="http://localhost/Login/ValorarJuego.php",Kr="http://localhost/Login/EliminarCategoriaJuego.php",Wr="http://localhost/Login/EliminarImagenCarrousel.php",Yr="http://localhost/Login/InventarioUsuario.php",Jr="http://localhost/Login/MostrarComentario.php",Zr="http://localhost/Login/EliminarComentario.php",Xr="http://localhost/Login/EditarComentario.php",qr="http://localhost/Login/ValoracionComentatio.php",Qr="http://localhost/Login/InsertarCarrousel.php",ea="http://localhost/Login/insert.php",ta="http://localhost/Login/obtenerCategorias.php",na="http://localhost/Login/insertCat.php",ra="http://localhost/Login/insertarCategoria.php",aa="http://localhost/Login/EliminarCategoria.php",oa="http://localhost/Login/MostrarTodosLosUsuario.php",ia="http://localhost/Login/EliminarUsuario.php",sa="http://localhost/Login/eliminarJuego.php",la="http://localhost/Login/EditarJuego.php",ua="http://localhost/Login/api.php";var Ct={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},gt=ie.createContext&&ie.createContext(Ct),vn=["attr","size","title"];function hn(e,t){if(e==null)return{};var n=bn(e,t),r,a;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function bn(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,c;for(c=0;c<r.length;c++)a=r[c],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Ie(){return Ie=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ie.apply(this,arguments)}function vt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Re(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?vt(Object(n),!0).forEach(function(r){yn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vt(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yn(e,t,n){return t=xn(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xn(e){var t=wn(e,"string");return typeof t=="symbol"?t:String(t)}function wn(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _t(e){return e&&e.map((t,n)=>ie.createElement(t.tag,Re({key:n},t.attr),_t(t.child)))}function V(e){return t=>ie.createElement(On,Ie({attr:Re({},e.attr)},t),_t(e.child))}function On(e){var t=n=>{var{attr:r,size:a,title:c}=e,l=hn(e,vn),i=a||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),ie.createElement("svg",Ie({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:u,style:Re(Re({color:e.color||n.color},n.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),c&&ie.createElement("title",null,c),e.children)};return gt!==void 0?ie.createElement(gt.Consumer,null,n=>t(n)):t(Ct)}function En(e){return V({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(e)}function Pn(e){return V({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function Sn(e){return V({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(e)}function ca(e){return V({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"},child:[]}]})(e)}function pa(e){return V({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"},child:[]}]})(e)}function da(e){return V({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}function fa(e){return V({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}const Nt="/assets/LOGO-CFHDsfep.png";function Tt(e){return V({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 9.226l-8-6.21-8 6.21v-2.532l8-6.21 8 6.21zM14 9v6h-4v-4h-4v4h-4v-6l6-4.5z"},child:[]}]})(e)}function Lt(e){return V({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M22.595 1.912c.59 0 .985.279 1.21.74.078.164.134.338.164.518l.021.147.01.148v17.223c0 .59-.254.987-.677 1.21a1.652 1.652 0 0 1-.573.179l-.15.011H1.558c-.647 0-1.085-.245-1.337-.657a1.526 1.526 0 0 1-.208-.582L0 20.694V3.474C0 2.82.277 2.38.737 2.132a1.82 1.82 0 0 1 .52-.184l.146-.024.146-.011Zm0 .256H1.528a1.562 1.562 0 0 0-.668.186c-.344.188-.559.494-.598.959l-.007.16v17.218c.01.215.073.424.185.607.184.303.491.495.958.53l.162.006h21.036a1.39 1.39 0 0 0 .607-.16c.304-.16.496-.425.535-.829l.007-.158V3.467a1.705 1.705 0 0 0-.028-.252 1.682 1.682 0 0 0-.142-.451c-.184-.378-.495-.596-.98-.596zm-6.099 12.94c.97 0 1.822.531 2.296 1.303l.09.157h-1.03a1.835 1.835 0 0 0-1.356-.61 1.844 1.844 0 1 0 1.26 3.189l.11-.113h1.025a2.694 2.694 0 1 1-2.395-3.927zm-13.76.175v3.545l2.35-3.538v-.007h.879v3.545l2.353-3.542h1.055L5.965 20.42h-.88v-3.54l-2.348 3.54h-.88v-5.137zm8.072.001v5.135h-.88V19.32H8.303l-.728 1.096H6.52l3.408-5.132zm3.211 0v.878h-.994v4.256h-.88v-4.256l-.994.001v-.88zm5.968 0v2.067h1.588v-2.068h.88v5.135h-.88V18.23h-1.588v2.188h-.878v-5.135Zm-10.06 1.59-1.041 1.568h1.042Zm1.666-7.391c.331-.002.65.128.886.36.201.202.312.468.312.75 0 .471-.219.773-.489 1.01l-.092.078.676.623.454-1.023h.862l-.705 1.587 1.216 1.123-.536.58-1.022-.946c-.317.624-.73 1.027-1.562 1.027-.441 0-.84-.158-1.127-.444a1.555 1.555 0 0 1-.44-1.11c0-.762.426-1.13.916-1.477-.264-.232-.53-.545-.53-1.028 0-.695.6-1.11 1.18-1.11zm.955 3.581-.99-.914-.262.188c-.34.25-.481.422-.481.76a.76.76 0 0 0 .208.553c.153.145.359.221.57.212.438 0 .636-.133.878-.63zm-.955-2.792a.45.45 0 0 0-.243.068l-.067.052a.27.27 0 0 0-.083.2c0 .212.155.354.408.557.29-.214.396-.335.396-.556a.26.26 0 0 0-.082-.192.484.484 0 0 0-.33-.13zM6.97 5.07h-.933a1.88 1.88 0 1 0 .168 1.878h-1.66v-.855h2.65l.002.06A2.696 2.696 0 0 1 4.5 8.85 2.698 2.698 0 1 1 6.97 5.07Zm15.11-1.561v.879h-1.79v1.298h1.79v.879h-1.79v1.197h1.79v.879h-1.79l-.88.004V3.509zm-11.142 0v5.135h-.88v-1.1H8.433l-.728 1.098H6.65l3.408-5.133Zm7.761-.001v5.135h-.879V5.098l-2.35 3.539v.006h-.879V5.098L12.238 8.64h-1.055l3.408-5.132h.88v3.538l2.35-3.54zm-8.641 1.59L9.017 6.666h1.04z"},child:[]}]})(e)}function It(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8zM6 15h2v-2h2v-2H8V9H6v2H4v2h2z"},child:[]},{tag:"circle",attr:{cx:"14.5",cy:"13.5",r:"1.5"},child:[]},{tag:"circle",attr:{cx:"18.5",cy:"10.5",r:"1.5"},child:[]}]})(e)}const jn=()=>d.jsx("footer",{className:" bg-white py-6  font-bold mt-20  ",children:d.jsxs("div",{className:"container mx-auto px-4",children:[d.jsxs("div",{className:"flex flex-col lg:flex-row justify-between items-center",children:[d.jsxs("div",{className:"mb-4 lg:mb-0",children:[d.jsx(Y,{to:"/",className:"flex items-center text-lg hover:opacity-70",children:d.jsx("img",{src:Nt,alt:"Logo",className:"w-40 h-30 mr-2  "})}),d.jsx("p",{className:"text-sm",children:"Tu fuente de noticias y juegos."})]}),d.jsxs("div",{className:"flex flex-col lg:flex-row lg:gap-8 mb-4 lg:mb-0",children:[d.jsxs(Y,{to:"/",className:"flex items-center hover:text-gray-400",children:[d.jsx(Tt,{className:"mr-2"}),"Inicio"]}),d.jsxs(Y,{to:"/Biblioteca",className:"flex items-center hover:text-gray-400",children:[d.jsx(Lt,{className:"mr-2"}),"Nuestros Juegos"]}),d.jsxs(Y,{to:"/Info",className:"flex items-center hover:text-gray-400",children:[d.jsx(It,{className:"mr-2"}),"GameInfo"]})]}),d.jsxs("div",{className:"flex space-x-4",children:[d.jsx("a",{href:"https://www.facebook.com",target:"_blank",rel:"noopener noreferrer",className:"hover:text-gray-400",children:d.jsx(En,{size:24})}),d.jsx("a",{href:"https://www.twitter.com",target:"_blank",rel:"noopener noreferrer",className:"hover:text-gray-400",children:d.jsx(Sn,{size:24})}),d.jsx("a",{href:"https://www.instagram.com",target:"_blank",rel:"noopener noreferrer",className:"hover:text-gray-400",children:d.jsx(Pn,{size:24})})]})]}),d.jsx("div",{className:"text-center mt-4",children:d.jsx("p",{className:"text-sm",children:"© 2024 infoBl4ckGames. Todos los derechos reservados."})})]})});function ht(e){return V({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"},child:[]},{tag:"path",attr:{fillRule:"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"},child:[]}]})(e)}function Cn(e){return V({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"},child:[]}]})(e)}function ma(e){return V({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#2196F3",d:"M37,40H11l-6,6V12c0-3.3,2.7-6,6-6h26c3.3,0,6,2.7,6,6v22C43,37.3,40.3,40,37,40z"},child:[]},{tag:"g",attr:{fill:"#fff"},child:[{tag:"rect",attr:{x:"22",y:"20",width:"4",height:"11"},child:[]},{tag:"circle",attr:{cx:"24",cy:"15",r:"2"},child:[]}]}]})(e)}function _n(e){return V({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"g",attr:{fill:"#FFA726"},child:[{tag:"circle",attr:{cx:"10",cy:"26",r:"4"},child:[]},{tag:"circle",attr:{cx:"38",cy:"26",r:"4"},child:[]}]},{tag:"path",attr:{fill:"#FFB74D",d:"M39,19c0-12.7-30-8.3-30,0c0,1.8,0,8.2,0,10c0,8.3,6.7,15,15,15s15-6.7,15-15C39,27.2,39,20.8,39,19z"},child:[]},{tag:"path",attr:{fill:"#FF5722",d:"M24,3C14.6,3,7,10.6,7,20c0,1.2,0,3.4,0,3.4L9,25v-3l21-9.8l9,9.8v3l2-1.6c0,0,0-2.1,0-3.4 C41,12,35.3,3,24,3z"},child:[]},{tag:"g",attr:{fill:"#784719"},child:[{tag:"circle",attr:{cx:"31",cy:"26",r:"2"},child:[]},{tag:"circle",attr:{cx:"17",cy:"26",r:"2"},child:[]}]},{tag:"path",attr:{fill:"#757575",d:"M43,24c-0.6,0-1,0.4-1,1v-7c0-8.8-7.2-16-16-16h-7c-0.6,0-1,0.4-1,1s0.4,1,1,1h7c7.7,0,14,6.3,14,14v10 c0,0.6,0.4,1,1,1s1-0.4,1-1v2c0,3.9-3.1,7-7,7H24c-0.6,0-1,0.4-1,1s0.4,1,1,1h11c5,0,9-4,9-9v-5C44,24.4,43.6,24,43,24z"},child:[]},{tag:"g",attr:{fill:"#37474F"},child:[{tag:"path",attr:{d:"M43,22h-1c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2h1c1.1,0,2-0.9,2-2v-4C45,22.9,44.1,22,43,22z"},child:[]},{tag:"circle",attr:{cx:"24",cy:"38",r:"2"},child:[]}]}]})(e)}function Nn(e){if(Array.isArray(e))return e}function Tn(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,c,l,i=[],u=!0,f=!1;try{if(c=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(p){f=!0,a=p}finally{try{if(!u&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(f)throw a}}return i}}function We(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Rt(e,t){if(e){if(typeof e=="string")return We(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return We(e,t)}}function Ln(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function te(e,t){return Nn(e)||Tn(e,t)||Rt(e,t)||Ln()}var Ae=function(t){var n=s.useRef(null);return s.useEffect(function(){return n.current=t,function(){n.current=null}},[t]),n.current},ae=function(t){return s.useEffect(function(){return t},[])},Ye=function(t){var n=t.target,r=n===void 0?"document":n,a=t.type,c=t.listener,l=t.options,i=t.when,u=i===void 0?!0:i,f=s.useRef(null),p=s.useRef(null),g=Ae(c),w=Ae(l),b=function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},m=x.target;P.isNotEmpty(m)&&(T(),(x.when||u)&&(f.current=E.getTargetElement(m))),!p.current&&f.current&&(p.current=function(N){return c&&c(N)},f.current.addEventListener(a,p.current,l))},T=function(){p.current&&(f.current.removeEventListener(a,p.current,l),p.current=null)},y=function(){T(),g=null,w=null},I=s.useCallback(function(){u?f.current=E.getTargetElement(r):(T(),f.current=null)},[r,u]);return s.useEffect(function(){I()},[I]),s.useEffect(function(){var C="".concat(g)!=="".concat(c),x=w!==l,m=p.current;m&&(C||x)?(T(),u&&b()):m||y()},[c,l,u]),ae(function(){y()}),[b,T]},oe={},ga=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,r=s.useState(function(){return cn()}),a=te(r,1),c=a[0],l=s.useState(0),i=te(l,2),u=i[0],f=i[1];return s.useEffect(function(){if(n){oe[t]||(oe[t]=[]);var p=oe[t].push(c);return f(p),function(){delete oe[t][p-1];var g=oe[t].length-1,w=P.findLastIndex(oe[t],function(b){return b!==void 0});w!==g&&oe[t].splice(w+1),f(void 0)}}},[t,c,n]),u};function In(e){if(Array.isArray(e))return We(e)}function Rn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function An(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bt(e){return In(e)||Rn(e)||Rt(e)||An()}var va={SIDEBAR:100,SLIDE_MENU:200,DIALOG:300,IMAGE:400,MENU:500,OVERLAY_PANEL:600,PASSWORD:700,CASCADE_SELECT:800,SPLIT_BUTTON:900,SPEED_DIAL:1e3},At={escKeyListeners:new Map,onGlobalKeyDown:function(t){if(t.code==="Escape"){var n=At.escKeyListeners,r=Math.max.apply(Math,bt(n.keys())),a=n.get(r),c=Math.max.apply(Math,bt(a.keys())),l=a.get(c);l(t)}},refreshGlobalKeyDownListener:function(){var t=E.getTargetElement("document");this.escKeyListeners.size>0?t.addEventListener("keydown",this.onGlobalKeyDown):t.removeEventListener("keydown",this.onGlobalKeyDown)},addListener:function(t,n){var r=this,a=te(n,2),c=a[0],l=a[1],i=this.escKeyListeners;i.has(c)||i.set(c,new Map);var u=i.get(c);if(u.has(l))throw new Error("Unexpected: global esc key listener with priority [".concat(c,", ").concat(l,"] already exists."));return u.set(l,t),this.refreshGlobalKeyDownListener(),function(){u.delete(l),u.size===0&&i.delete(c),r.refreshGlobalKeyDownListener()}}},ha=function(t){var n=t.callback,r=t.when,a=t.priority;s.useEffect(function(){if(r)return At.addListener(n,a)},[n,r,a])},De=function(){var t=s.useContext(re);return function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return Le(r,t==null?void 0:t.ptOptions)}},ke=function(t){var n=s.useRef(!1);return s.useEffect(function(){if(!n.current)return n.current=!0,t&&t()},[])},Mt=function(t){var n=t.target,r=t.listener,a=t.options,c=t.when,l=c===void 0?!0:c,i=s.useContext(re),u=s.useRef(null),f=s.useRef(null),p=s.useRef([]),g=Ae(r),w=Ae(a),b=function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(P.isNotEmpty(x.target)&&(T(),(x.when||l)&&(u.current=E.getTargetElement(x.target))),!f.current&&u.current){var m=i?i.hideOverlaysOnDocumentScrolling:Q.hideOverlaysOnDocumentScrolling,N=p.current=E.getScrollableParents(u.current,m);f.current=function(M){return r&&r(M)},N.forEach(function(M){return M.addEventListener("scroll",f.current,a)})}},T=function(){if(f.current){var x=p.current;x.forEach(function(m){return m.removeEventListener("scroll",f.current,a)}),f.current=null}},y=function(){T(),p.current=null,g=null,w=null},I=s.useCallback(function(){l?u.current=E.getTargetElement(n):(T(),u.current=null)},[n,l]);return s.useEffect(function(){I()},[I]),s.useEffect(function(){var C="".concat(g)!=="".concat(r),x=w!==a,m=f.current;m&&(C||x)?(T(),l&&b()):m||y()},[r,a,l]),ae(function(){y()}),[b,T]},Dt=function(t){var n=t.listener,r=t.when,a=r===void 0?!0:r;return Ye({target:"window",type:"resize",listener:n,when:a})},ba=function(t){var n=t.target,r=t.overlay,a=t.listener,c=t.when,l=c===void 0?!0:c,i=t.type,u=i===void 0?"click":i,f=s.useRef(null),p=s.useRef(null),g=Ye({target:"window",type:u,listener:function($){a&&a($,{type:"outside",valid:$.which!==3&&B($)})}}),w=te(g,2),b=w[0],T=w[1],y=Dt({target:"window",listener:function($){a&&a($,{type:"resize",valid:!E.isTouchDevice()})}}),I=te(y,2),C=I[0],x=I[1],m=Ye({target:"window",type:"orientationchange",listener:function($){a&&a($,{type:"orientationchange",valid:!0})}}),N=te(m,2),M=N[0],k=N[1],O=Mt({target:n,listener:function($){a&&a($,{type:"scroll",valid:!0})}}),R=te(O,2),v=R[0],z=R[1],B=function($){return f.current&&!(f.current.isSameNode($.target)||f.current.contains($.target)||p.current&&p.current.contains($.target))},J=function(){b(),C(),M(),v()},K=function(){T(),x(),k(),z()};return s.useEffect(function(){l?(f.current=E.getTargetElement(n),p.current=E.getTargetElement(r)):(K(),f.current=p.current=null)},[n,r,l]),s.useEffect(function(){K()},[l]),ae(function(){K()}),[J,K]},Mn=0,fe=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.useState(!1),a=te(r,2),c=a[0],l=a[1],i=s.useRef(null),u=s.useContext(re),f=E.isClient()?window.document:void 0,p=n.document,g=p===void 0?f:p,w=n.manual,b=w===void 0?!1:w,T=n.name,y=T===void 0?"style_".concat(++Mn):T,I=n.id,C=I===void 0?void 0:I,x=n.media,m=x===void 0?void 0:x,N=function(v){var z=v.querySelector('style[data-primereact-style-id="'.concat(y,'"]'));if(z)return z;if(C!==void 0){var B=g.getElementById(C);if(B)return B}return g.createElement("style")},M=function(v){c&&t!==v&&(i.current.textContent=v)},k=function(){if(!(!g||c)){var v=(u==null?void 0:u.styleContainer)||g.head;i.current=N(v),i.current.isConnected||(i.current.type="text/css",C&&(i.current.id=C),m&&(i.current.media=m),E.addNonce(i.current,u&&u.nonce||Q.nonce),v.appendChild(i.current),y&&i.current.setAttribute("data-primereact-style-id",y)),i.current.textContent=t,l(!0)}},O=function(){!g||!i.current||(E.removeInlineStyle(i.current),l(!1))};return s.useEffect(function(){b||k()},[b]),{id:C,name:y,update:M,unload:O,load:k,isLoaded:c}},ya=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,a=s.useRef(null),c=s.useRef(null),l=s.useCallback(function(){return clearTimeout(a.current)},[a.current]);return s.useEffect(function(){c.current=t}),s.useEffect(function(){function i(){c.current()}if(r)return a.current=setTimeout(i,n),l;l()},[n,r]),ae(function(){l()}),[l]},se=function(t,n){var r=s.useRef(!1);return s.useEffect(function(){if(!r.current){r.current=!0;return}return t&&t()},n)};function Je(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Dn(e){if(Array.isArray(e))return Je(e)}function kn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function $n(e,t){if(e){if(typeof e=="string")return Je(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Je(e,t)}}function zn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yt(e){return Dn(e)||kn(e)||$n(e)||zn()}function ge(e){"@babel/helpers - typeof";return ge=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ge(e)}function Un(e,t){if(ge(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ge(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Hn(e){var t=Un(e,"string");return ge(t)==="symbol"?t:String(t)}function Ze(e,t,n){return t=Hn(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xt(Object(n),!0).forEach(function(r){Ze(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xt(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Bn=`
.p-hidden-accessible {
    border: 0;
    padding: 0;
    margin: -1px;
    position: absolute;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    clip-path: inset(50%);
    white-space: nowrap;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: var(--scrollbar-width);
}
`,Fn=`
.p-button {
    margin: 0;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    vertical-align: bottom;
    text-align: center;
    overflow: hidden;
    position: relative;
}

.p-button-label {
    flex: 1 1 auto;
}

.p-button-icon-right {
    order: 1;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-only {
    justify-content: center;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
    flex: 0 0 auto;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-group .p-button {
    margin: 0;
}

.p-button-group .p-button:not(:last-child) {
    border-right: 0 none;
}

.p-button-group .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-button-group .p-button:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-button-group .p-button:last-of-type {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-button-group .p-button:focus {
    position: relative;
    z-index: 1;
}
`,Gn=`
.p-inputtext {
    margin: 0;
}

.p-fluid .p-inputtext {
    width: 100%;
}

/* InputGroup */
.p-inputgroup {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup-addon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-inputgroup .p-float-label {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-fluid .p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-fluid .p-inputgroup .p-input {
    flex: 1 1 auto;
    width: 1%;
}

/* Floating Label */
.p-float-label {
    display: block;
    position: relative;
}

.p-float-label label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    margin-top: -0.5rem;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
}

.p-float-label textarea ~ label,
.p-float-label .p-mention ~ label {
    top: 1rem;
}

.p-float-label input:focus ~ label,
.p-float-label input:-webkit-autofill ~ label,
.p-float-label input.p-filled ~ label,
.p-float-label textarea:focus ~ label,
.p-float-label textarea.p-filled ~ label,
.p-float-label .p-inputwrapper-focus ~ label,
.p-float-label .p-inputwrapper-filled ~ label,
.p-float-label .p-tooltip-target-wrapper ~ label {
    top: -0.75rem;
    font-size: 12px;
}

.p-float-label .p-placeholder,
.p-float-label input::placeholder,
.p-float-label .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-float-label .p-focus .p-placeholder,
.p-float-label input:focus::placeholder,
.p-float-label .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}

.p-input-icon-left,
.p-input-icon-right {
    position: relative;
    display: inline-block;
}

.p-input-icon-left > i,
.p-input-icon-right > i,
.p-input-icon-left > svg,
.p-input-icon-right > svg,
.p-input-icon-left > .p-input-prefix,
.p-input-icon-right > .p-input-suffix {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}

.p-fluid .p-input-icon-left,
.p-fluid .p-input-icon-right {
    display: block;
    width: 100%;
}
`,Vn=`
.p-icon {
    display: inline-block;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

svg.p-icon {
    pointer-events: auto;
}

svg.p-icon g,
.p-disabled svg.p-icon {
    pointer-events: none;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Kn=`
@layer primereact {
    .p-component, .p-component * {
        box-sizing: border-box;
    }

    .p-hidden {
        display: none;
    }

    .p-hidden-space {
        visibility: hidden;
    }

    .p-reset {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        text-decoration: none;
        font-size: 100%;
        list-style: none;
    }

    .p-disabled, .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-component-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-unselectable-text {
        user-select: none;
    }

    .p-scrollbar-measure {
        width: 100px;
        height: 100px;
        overflow: scroll;
        position: absolute;
        top: -9999px;
    }

    @-webkit-keyframes p-fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }
    @keyframes p-fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }

    .p-link {
        text-align: left;
        background-color: transparent;
        margin: 0;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-link:disabled {
        cursor: default;
    }

    /* Non react overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity .1s linear;
    }

    /* React based overlay animations */
    .p-connected-overlay-enter {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-enter-active {
        opacity: 1;
        transform: scaleY(1);
        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-enter-done {
        transform: none;
    }

    .p-connected-overlay-exit {
        opacity: 1;
    }

    .p-connected-overlay-exit-active {
        opacity: 0;
        transition: opacity .1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter {
        max-height: 0;
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        max-height: 1000px;
        transition: max-height 1s ease-in-out;
    }

    .p-toggleable-content-enter-done {
        transform: none;
    }

    .p-toggleable-content-exit {
        max-height: 1000px;
    }

    .p-toggleable-content-exit-active {
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    .p-sr-only {
        border: 0;
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
        word-wrap: normal;
    }

    /* @todo Refactor */
    .p-menu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    `.concat(Fn,`
    `).concat(Gn,`
    `).concat(Vn,`
}
`),D={cProps:void 0,cParams:void 0,cName:void 0,defaultProps:{pt:void 0,ptOptions:void 0,unstyled:!1},context:{},globalCSS:void 0,classes:{},styles:"",extend:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.css,r=U(U({},t.defaultProps),D.defaultProps),a={},c=function(p){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return D.context=g,D.cProps=p,P.getMergedProps(p,r)},l=function(p){return P.getDiffProps(p,r)},i=function(){var p,g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},T=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;g.hasOwnProperty("pt")&&g.pt!==void 0&&(g=g.pt);var y=w,I=/./g.test(y)&&!!b[y.split(".")[0]],C=I?P.toFlatCase(y.split(".")[1]):P.toFlatCase(y),x=b.hostName&&P.toFlatCase(b.hostName),m=x||b.props&&b.props.__TYPE&&P.toFlatCase(b.props.__TYPE)||"",N=C==="transition",M="data-pc-",k=function ce(A){return A!=null&&A.props?A.hostName?A.props.__TYPE===A.hostName?A.props:ce(A.parent):A.parent:void 0},O=function(A){var le,pe;return((le=b.props)===null||le===void 0?void 0:le[A])||((pe=k(b))===null||pe===void 0?void 0:pe[A])};D.cParams=b,D.cName=m;var R=O("ptOptions")||D.context.ptOptions||{},v=R.mergeSections,z=v===void 0?!0:v,B=R.mergeProps,J=B===void 0?!1:B,K=function(){var A=ne.apply(void 0,arguments);return Array.isArray(A)?{className:G.apply(void 0,yt(A))}:P.isString(A)?{className:A}:A!=null&&A.hasOwnProperty("className")&&Array.isArray(A.className)?{className:G.apply(void 0,yt(A.className))}:A},W=T?I?kt(K,y,b):$t(K,y,b):void 0,$=I?void 0:ze($e(g,m),K,y,b),ee=!N&&U(U({},C==="root"&&Ze({},"".concat(M,"name"),b.props&&b.props.__parentMetadata?P.toFlatCase(b.props.__TYPE):m)),{},Ze({},"".concat(M,"section"),C));return z||!z&&$?J?Le([W,$,Object.keys(ee).length?ee:{}],{classNameMergeFunction:(p=D.context.ptOptions)===null||p===void 0?void 0:p.classNameMergeFunction}):U(U(U({},W),$),Object.keys(ee).length?ee:{}):U(U({},$),Object.keys(ee).length?ee:{})},u=function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},g=p.props,w=p.state,b=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return i((g||{}).pt,m,U(U({},p),N))},T=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return i(m,N,M,!1)},y=function(){return D.context.unstyled||Q.unstyled||g.unstyled},I=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return y()?void 0:ne(n&&n.classes,m,U({props:g,state:w},N))},C=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(M){var k,O=ne(n&&n.inlineStyles,m,U({props:g,state:w},N)),R=ne(a,m,U({props:g,state:w},N));return Le([R,O],{classNameMergeFunction:(k=D.context.ptOptions)===null||k===void 0?void 0:k.classNameMergeFunction})}};return{ptm:b,ptmo:T,sx:C,cx:I,isUnstyled:y}};return U(U({getProps:c,getOtherProps:l,setMetaData:u},t),{},{defaultProps:r})}},ne=function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=String(P.toFlatCase(n)).split("."),c=a.shift(),l=P.isNotEmpty(t)?Object.keys(t).find(function(i){return P.toFlatCase(i)===c}):"";return c?P.isObject(t)?e(P.getItemValue(t[l],r),a.join("."),r):void 0:P.getItemValue(t,r)},$e=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,a=t==null?void 0:t._usept,c=function(i){var u,f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,p=r?r(i):i,g=P.toFlatCase(n);return(u=f?g!==D.cName?p==null?void 0:p[g]:void 0:p==null?void 0:p[g])!==null&&u!==void 0?u:p};return P.isNotEmpty(a)?{_usept:a,originalValue:c(t.originalValue),value:c(t.value)}:c(t,!0)},ze=function(t,n,r,a){var c=function(y){return n(y,r,a)};if(t!=null&&t.hasOwnProperty("_usept")){var l=t._usept||D.context.ptOptions||{},i=l.mergeSections,u=i===void 0?!0:i,f=l.mergeProps,p=f===void 0?!1:f,g=l.classNameMergeFunction,w=c(t.originalValue),b=c(t.value);return w===void 0&&b===void 0?void 0:P.isString(b)?b:P.isString(w)?w:u||!u&&b?p?Le([w,b],{classNameMergeFunction:g}):U(U({},w),b):b}return c(t)},Wn=function(){return $e(D.context.pt||Q.pt,void 0,function(t){return P.getItemValue(t,D.cParams)})},Yn=function(){return $e(D.context.pt||Q.pt,void 0,function(t){return ne(t,D.cName,D.cParams)||P.getItemValue(t,D.cParams)})},kt=function(t,n,r){return ze(Wn(),t,n,r)},$t=function(t,n,r){return ze(Yn(),t,n,r)},tt=function(t){var n=arguments.length>2?arguments[2]:void 0,r=n.name,a=n.styled,c=a===void 0?!1:a,l=n.hostName,i=l===void 0?"":l,u=kt(ne,"global.css",D.cParams),f=P.toFlatCase(r),p=fe(Bn,{name:"base",manual:!0}),g=p.load,w=fe(Kn,{name:"common",manual:!0}),b=w.load,T=fe(u,{name:"global",manual:!0}),y=T.load,I=fe(t,{name:r,manual:!0}),C=I.load,x=function(N){if(!i){var M=ze($e((D.cProps||{}).pt,f),ne,"hooks.".concat(N)),k=$t(ne,"hooks.".concat(N));M==null||M(),k==null||k()}};x("useMountEffect"),ke(function(){g(),y(),b(),c||C()}),se(function(){x("useUpdateEffect")}),ae(function(){x("useUnmountEffect")})},Ne={defaultProps:{__TYPE:"IconBase",className:null,label:null,spin:!1},getProps:function(t){return P.getMergedProps(t,Ne.defaultProps)},getOtherProps:function(t){return P.getDiffProps(t,Ne.defaultProps)},getPTI:function(t){var n=P.isEmpty(t.label),r=Ne.getOtherProps(t),a={className:G("p-icon",{"p-icon-spin":t.spin},t.className),role:n?void 0:"img","aria-label":n?void 0:t.label,"aria-hidden":n};return P.getMergedProps(r,a)}};function Xe(){return Xe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xe.apply(this,arguments)}var zt=s.memo(s.forwardRef(function(e,t){var n=Ne.getPTI(e);return s.createElement("svg",Xe({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),s.createElement("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"}))}));zt.displayName="SpinnerIcon";function qe(){return qe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qe.apply(this,arguments)}function ve(e){"@babel/helpers - typeof";return ve=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ve(e)}function Jn(e,t){if(ve(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ve(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Zn(e){var t=Jn(e,"string");return ve(t)==="symbol"?t:String(t)}function Xn(e,t,n){return t=Zn(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qn(e){if(Array.isArray(e))return e}function Qn(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,c,l,i=[],u=!0,f=!1;try{if(c=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(p){f=!0,a=p}finally{try{if(!u&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(f)throw a}}return i}}function wt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function er(e,t){if(e){if(typeof e=="string")return wt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wt(e,t)}}function tr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nr(e,t){return qn(e)||Qn(e,t)||er(e,t)||tr()}var rr=`
@layer primereact {
    .p-ripple {
        overflow: hidden;
        position: relative;
    }
    
    .p-ink {
        display: block;
        position: absolute;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 100%;
        transform: scale(0);
    }
    
    .p-ink-active {
        animation: ripple 0.4s linear;
    }
    
    .p-ripple-disabled .p-ink {
        display: none;
    }
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}

`,ar={root:"p-ink"},ue=D.extend({defaultProps:{__TYPE:"Ripple",children:void 0},css:{styles:rr,classes:ar},getProps:function(t){return P.getMergedProps(t,ue.defaultProps)},getOtherProps:function(t){return P.getDiffProps(t,ue.defaultProps)}});function Ot(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function or(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ot(Object(n),!0).forEach(function(r){Xn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ot(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Ut=s.memo(s.forwardRef(function(e,t){var n=s.useState(!1),r=nr(n,2),a=r[0],c=r[1],l=s.useRef(null),i=s.useRef(null),u=De(),f=s.useContext(re),p=ue.getProps(e,f),g=f&&f.ripple||Q.ripple,w={props:p};fe(ue.css.styles,{name:"ripple",manual:!g});var b=ue.setMetaData(or({},w)),T=b.ptm,y=b.cx,I=function(){return l.current&&l.current.parentElement},C=function(){i.current&&i.current.addEventListener("pointerdown",m)},x=function(){i.current&&i.current.removeEventListener("pointerdown",m)},m=function(v){var z=E.getOffset(i.current),B=v.pageX-z.left+document.body.scrollTop-E.getWidth(l.current)/2,J=v.pageY-z.top+document.body.scrollLeft-E.getHeight(l.current)/2;N(B,J)},N=function(v,z){!l.current||getComputedStyle(l.current,null).display==="none"||(E.removeClass(l.current,"p-ink-active"),k(),l.current.style.top=z+"px",l.current.style.left=v+"px",E.addClass(l.current,"p-ink-active"))},M=function(v){E.removeClass(v.currentTarget,"p-ink-active")},k=function(){if(l.current&&!E.getHeight(l.current)&&!E.getWidth(l.current)){var v=Math.max(E.getOuterWidth(i.current),E.getOuterHeight(i.current));l.current.style.height=v+"px",l.current.style.width=v+"px"}};if(s.useImperativeHandle(t,function(){return{props:p,getInk:function(){return l.current},getTarget:function(){return i.current}}}),ke(function(){c(!0)}),se(function(){a&&l.current&&(i.current=I(),k(),C())},[a]),se(function(){l.current&&!i.current&&(i.current=I(),k(),C())}),ae(function(){l.current&&(i.current=null,x())}),!g)return null;var O=u({"aria-hidden":!0,className:G(y("root"))},ue.getOtherProps(p),T("root"));return s.createElement("span",qe({role:"presentation",ref:l},O,{onAnimationEnd:M}))}));Ut.displayName="Ripple";function ir(e){if(Array.isArray(e))return e}function sr(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,c,l,i=[],u=!0,f=!1;try{if(c=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(p){f=!0,a=p}finally{try{if(!u&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(f)throw a}}return i}}function Et(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function lr(e,t){if(e){if(typeof e=="string")return Et(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Et(e,t)}}function ur(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cr(e,t){return ir(e)||sr(e,t)||lr(e,t)||ur()}var Qe={defaultProps:{__TYPE:"Portal",element:null,appendTo:null,visible:!1,onMounted:null,onUnmounted:null,children:void 0},getProps:function(t){return P.getMergedProps(t,Qe.defaultProps)},getOtherProps:function(t){return P.getDiffProps(t,Qe.defaultProps)}},Ht=s.memo(function(e){var t=Qe.getProps(e),n=s.useContext(re),r=s.useState(t.visible&&E.isClient()),a=cr(r,2),c=a[0],l=a[1];ke(function(){E.isClient()&&!c&&(l(!0),t.onMounted&&t.onMounted())}),se(function(){t.onMounted&&t.onMounted()},[c]),ae(function(){t.onUnmounted&&t.onUnmounted()});var i=t.element||t.children;if(i&&c){var u=t.appendTo||n&&n.appendTo||Q.appendTo;return P.isFunction(u)&&(u=u()),u||(u=document.body),u==="self"?i:pn.createPortal(i,u)}return null});Ht.displayName="Portal";function Me(){return Me=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Me.apply(this,arguments)}function he(e){"@babel/helpers - typeof";return he=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},he(e)}function pr(e,t){if(he(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(he(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function dr(e){var t=pr(e,"string");return he(t)==="symbol"?t:String(t)}function Bt(e,t,n){return t=dr(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function et(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function fr(e){if(Array.isArray(e))return et(e)}function mr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ft(e,t){if(e){if(typeof e=="string")return et(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return et(e,t)}}function gr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vr(e){return fr(e)||mr(e)||Ft(e)||gr()}function hr(e){if(Array.isArray(e))return e}function br(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,c,l,i=[],u=!0,f=!1;try{if(c=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(p){f=!0,a=p}finally{try{if(!u&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(f)throw a}}return i}}function yr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function de(e,t){return hr(e)||br(e,t)||Ft(e,t)||yr()}var xr={root:function(t){var n=t.positionState,r=t.classNameState;return G("p-tooltip p-component",Bt({},"p-tooltip-".concat(n),!0),r)},arrow:"p-tooltip-arrow",text:"p-tooltip-text"},wr={arrow:function(t){var n=t.context;return{top:n.bottom?"0":n.right||n.left||!n.right&&!n.left&&!n.top&&!n.bottom?"50%":null,bottom:n.top?"0":null,left:n.right||!n.right&&!n.left&&!n.top&&!n.bottom?"0":n.top||n.bottom?"50%":null,right:n.left?"0":null}}},Or=`
@layer primereact {
    .p-tooltip {
        position: absolute;
        padding: .25em .5rem;
        /* #3687: Tooltip prevent scrollbar flickering */
        top: -9999px;
        left: -9999px;
    }
    
    .p-tooltip.p-tooltip-right,
    .p-tooltip.p-tooltip-left {
        padding: 0 .25rem;
    }
    
    .p-tooltip.p-tooltip-top,
    .p-tooltip.p-tooltip-bottom {
        padding:.25em 0;
    }
    
    .p-tooltip .p-tooltip-text {
       white-space: pre-line;
       word-break: break-word;
    }
    
    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }
    
    .p-tooltip-right .p-tooltip-arrow {
        top: 50%;
        left: 0;
        margin-top: -.25rem;
        border-width: .25em .25em .25em 0;
    }
    
    .p-tooltip-left .p-tooltip-arrow {
        top: 50%;
        right: 0;
        margin-top: -.25rem;
        border-width: .25em 0 .25em .25rem;
    }
    
    .p-tooltip.p-tooltip-top {
        padding: .25em 0;
    }
    
    .p-tooltip-top .p-tooltip-arrow {
        bottom: 0;
        left: 50%;
        margin-left: -.25rem;
        border-width: .25em .25em 0;
    }
    
    .p-tooltip-bottom .p-tooltip-arrow {
        top: 0;
        left: 50%;
        margin-left: -.25rem;
        border-width: 0 .25em .25rem;
    }

    .p-tooltip-target-wrapper {
        display: inline-flex;
    }
}
`,je=D.extend({defaultProps:{__TYPE:"Tooltip",appendTo:null,at:null,autoHide:!0,autoZIndex:!0,baseZIndex:0,className:null,content:null,disabled:!1,event:null,hideDelay:0,hideEvent:"mouseleave",id:null,mouseTrack:!1,mouseTrackLeft:5,mouseTrackTop:5,my:null,onBeforeHide:null,onBeforeShow:null,onHide:null,onShow:null,position:"right",showDelay:0,showEvent:"mouseenter",showOnDisabled:!1,style:null,target:null,updateDelay:0,children:void 0},css:{classes:xr,styles:Or,inlineStyles:wr}});function Pt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Er(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pt(Object(n),!0).forEach(function(r){Bt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pt(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Gt=s.memo(s.forwardRef(function(e,t){var n=De(),r=s.useContext(re),a=je.getProps(e,r),c=s.useState(!1),l=de(c,2),i=l[0],u=l[1],f=s.useState(a.position),p=de(f,2),g=p[0],w=p[1],b=s.useState(""),T=de(b,2),y=T[0],I=T[1],C={props:a,state:{visible:i,position:g,className:y},context:{right:g==="right",left:g==="left",top:g==="top",bottom:g==="bottom"}},x=je.setMetaData(C),m=x.ptm,N=x.cx,M=x.sx,k=x.isUnstyled;tt(je.css.styles,k,{name:"tooltip"});var O=s.useRef(null),R=s.useRef(null),v=s.useRef(null),z=s.useRef(null),B=s.useRef(!0),J=s.useRef({}),K=s.useRef(null),W=Dt({listener:function(o){!E.isTouchDevice()&&X(o)}}),$=de(W,2),ee=$[0],ce=$[1],A=Mt({target:v.current,listener:function(o){X(o)},when:i}),le=de(A,2),pe=le[0],Kt=le[1],Wt=function(o){return!(a.content||H(o,"tooltip"))},Yt=function(o){return!(a.content||H(o,"tooltip")||a.children)},Ue=function(o){return H(o,"mousetrack")||a.mouseTrack},nt=function(o){return H(o,"disabled")==="true"||at(o,"disabled")||a.disabled},rt=function(o){return H(o,"showondisabled")||a.showOnDisabled},ye=function(){return H(v.current,"autohide")||a.autoHide},H=function(o,h){return at(o,"data-pr-".concat(h))?o.getAttribute("data-pr-".concat(h)):null},at=function(o,h){return o&&o.hasAttribute(h)},ot=function(o){var h=[H(o,"showevent")||a.showEvent],L=[H(o,"hideevent")||a.hideEvent];if(Ue(o))h=["mousemove"],L=["mouseleave"];else{var j=H(o,"event")||a.event;j==="focus"&&(h=["focus"],L=["blur"]),j==="both"&&(h=["focus","mouseenter"],L=["blur","mouseleave"])}return{showEvents:h,hideEvents:L}},Jt=function(o){return H(o,"position")||g},Zt=function(o){var h=H(o,"mousetracktop")||a.mouseTrackTop,L=H(o,"mousetrackleft")||a.mouseTrackLeft;return{top:h,left:L}},it=function(o,h){if(R.current){var L=H(o,"tooltip")||a.content;L?(R.current.innerHTML="",R.current.appendChild(document.createTextNode(L)),h()):a.children&&h()}},st=function(o){it(v.current,function(){var h=K.current,L=h.pageX,j=h.pageY;a.autoZIndex&&!Se.get(O.current)&&Se.set("tooltip",O.current,r&&r.autoZIndex||Q.autoZIndex,a.baseZIndex||r&&r.zIndex.tooltip||Q.zIndex.tooltip),O.current.style.left="",O.current.style.top="",ye()&&(O.current.style.pointerEvents="none");var _=Ue(v.current)||o==="mouse";(_&&!z.current||_)&&(z.current={width:E.getOuterWidth(O.current),height:E.getOuterHeight(O.current)}),lt(v.current,{x:L,y:j},o)})},xe=function(o){v.current=o.currentTarget;var h=nt(v.current),L=Yt(rt(v.current)&&h?v.current.firstChild:v.current);if(!(L||h))if(K.current=o,i)we("updateDelay",st);else{var j=Oe(a.onBeforeShow,{originalEvent:o,target:v.current});j&&we("showDelay",function(){u(!0),Oe(a.onShow,{originalEvent:o,target:v.current})})}},X=function(o){if(ut(),i){var h=Oe(a.onBeforeHide,{originalEvent:o,target:v.current});h&&we("hideDelay",function(){!ye()&&B.current===!1||(Se.clear(O.current),E.removeClass(O.current,"p-tooltip-active"),u(!1),Oe(a.onHide,{originalEvent:o,target:v.current}))})}},lt=function(o,h,L){var j=0,_=0,F=L||g;if((Ue(o)||F=="mouse")&&h){var Z={width:E.getOuterWidth(O.current),height:E.getOuterHeight(O.current)};j=h.x,_=h.y;var dt=Zt(o),Ee=dt.top,Pe=dt.left;switch(F){case"left":j=j-(Z.width+Pe),_=_-(Z.height/2-Ee);break;case"right":case"mouse":j=j+Pe,_=_-(Z.height/2-Ee);break;case"top":j=j-(Z.width/2-Pe),_=_-(Z.height+Ee);break;case"bottom":j=j-(Z.width/2-Pe),_=_+Ee;break}j<=0||z.current.width>Z.width?(O.current.style.left="0px",O.current.style.right=window.innerWidth-Z.width-j+"px"):(O.current.style.right="",O.current.style.left=j+"px"),O.current.style.top=_+"px",E.addClass(O.current,"p-tooltip-active")}else{var Fe=E.findCollisionPosition(F),on=H(o,"my")||a.my||Fe.my,sn=H(o,"at")||a.at||Fe.at;O.current.style.padding="0px",E.flipfitCollision(O.current,o,on,sn,function(Ge){var ft=Ge.at,Ve=ft.x,ln=ft.y,un=Ge.my.x,mt=a.at?Ve!=="center"&&Ve!==un?Ve:ln:Ge.at["".concat(Fe.axis)];O.current.style.padding="",w(mt),Xt(mt),E.addClass(O.current,"p-tooltip-active")})}},Xt=function(o){if(O.current){var h=getComputedStyle(O.current);o==="left"?O.current.style.left=parseFloat(h.left)-parseFloat(h.paddingLeft)*2+"px":o==="top"&&(O.current.style.top=parseFloat(h.top)-parseFloat(h.paddingTop)*2+"px")}},qt=function(){ye()||(B.current=!1)},Qt=function(o){ye()||(B.current=!0,X(o))},en=function(o){if(o){var h=ot(o),L=h.showEvents,j=h.hideEvents,_=ct(o);L.forEach(function(F){return _==null?void 0:_.addEventListener(F,xe)}),j.forEach(function(F){return _==null?void 0:_.addEventListener(F,X)})}},tn=function(o){if(o){var h=ot(o),L=h.showEvents,j=h.hideEvents,_=ct(o);L.forEach(function(F){return _==null?void 0:_.removeEventListener(F,xe)}),j.forEach(function(F){return _==null?void 0:_.removeEventListener(F,X)})}},we=function(o,h){ut();var L=H(v.current,o.toLowerCase())||a[o];L?J.current["".concat(o)]=setTimeout(function(){return h()},L):h()},Oe=function(o){if(o){for(var h=arguments.length,L=new Array(h>1?h-1:0),j=1;j<h;j++)L[j-1]=arguments[j];var _=o.apply(void 0,L);return _===void 0&&(_=!0),_}return!0},ut=function(){Object.values(J.current).forEach(function(o){return clearTimeout(o)})},ct=function(o){if(o){if(rt(o)){if(!o.hasWrapper){var h=document.createElement("div"),L=o.nodeName==="INPUT";return L?E.addMultipleClasses(h,"p-tooltip-target-wrapper p-inputwrapper"):E.addClass(h,"p-tooltip-target-wrapper"),o.parentNode.insertBefore(h,o),h.appendChild(o),o.hasWrapper=!0,h}return o.parentElement}else if(o.hasWrapper){var j;(j=o.parentElement).replaceWith.apply(j,vr(o.parentElement.childNodes)),delete o.hasWrapper}return o}return null},nn=function(o){Be(o),He(o)},He=function(o){pt(o||a.target,en)},Be=function(o){pt(o||a.target,tn)},pt=function(o,h){if(o=P.getRefElement(o),o)if(E.isElement(o))h(o);else{var L=function(_){var F=E.find(document,_);F.forEach(function(Z){h(Z)})};o instanceof Array?o.forEach(function(j){L(j)}):L(o)}};ke(function(){i&&v.current&&nt(v.current)&&X()}),se(function(){return He(),function(){Be()}},[xe,X,a.target]),se(function(){if(i){var S=Jt(v.current),o=H(v.current,"classname");w(S),I(o),st(S),ee(),pe()}else w(a.position),I(""),v.current=null,z.current=null,B.current=!0;return function(){ce(),Kt()}},[i]),se(function(){i&&we("updateDelay",function(){it(v.current,function(){lt(v.current)})})},[a.content]),ae(function(){X(),Se.clear(O.current)}),s.useImperativeHandle(t,function(){return{props:a,updateTargetEvents:nn,loadTargetEvents:He,unloadTargetEvents:Be,show:xe,hide:X,getElement:function(){return O.current},getTarget:function(){return v.current}}});var rn=function(){var o=Wt(v.current),h=n({id:a.id,className:G(a.className,N("root",{positionState:g,classNameState:y})),style:a.style,role:"tooltip","aria-hidden":i,onMouseEnter:function(F){return qt()},onMouseLeave:function(F){return Qt(F)}},je.getOtherProps(a),m("root")),L=n({className:N("arrow"),style:M("arrow",Er({},C))},m("arrow")),j=n({className:N("text")},m("text"));return s.createElement("div",Me({ref:O},h),s.createElement("div",L),s.createElement("div",Me({ref:R},j),o&&a.children))};if(i){var an=rn();return s.createElement(Ht,{element:an,appendTo:a.appendTo,visible:!0})}return null}));Gt.displayName="Tooltip";function me(){return me=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},me.apply(this,arguments)}function be(e){"@babel/helpers - typeof";return be=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},be(e)}function Pr(e,t){if(be(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(be(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Sr(e){var t=Pr(e,"string");return be(t)==="symbol"?t:String(t)}function q(e,t,n){return t=Sr(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var jr={root:function(t){var n=t.props;return G("p-badge p-component",q({"p-badge-no-gutter":P.isNotEmpty(n.value)&&String(n.value).length===1,"p-badge-dot":P.isEmpty(n.value),"p-badge-lg":n.size==="large","p-badge-xl":n.size==="xlarge"},"p-badge-".concat(n.severity),n.severity!==null))}},Cr=`
@layer primereact {
    .p-badge {
        display: inline-block;
        border-radius: 10px;
        text-align: center;
        padding: 0 .5rem;
    }
    
    .p-overlay-badge {
        position: relative;
    }
    
    .p-overlay-badge .p-badge {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%,-50%);
        transform-origin: 100% 0;
        margin: 0;
    }
    
    .p-badge-dot {
        width: .5rem;
        min-width: .5rem;
        height: .5rem;
        border-radius: 50%;
        padding: 0;
    }
    
    .p-badge-no-gutter {
        padding: 0;
        border-radius: 50%;
    }
}
`,Ce=D.extend({defaultProps:{__TYPE:"Badge",__parentMetadata:null,value:null,severity:null,size:null,style:null,className:null,children:void 0},css:{classes:jr,styles:Cr}});function St(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function _r(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?St(Object(n),!0).forEach(function(r){q(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):St(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Vt=s.memo(s.forwardRef(function(e,t){var n=De(),r=s.useContext(re),a=Ce.getProps(e,r),c=Ce.setMetaData(_r({props:a},a.__parentMetadata)),l=c.ptm,i=c.cx,u=c.isUnstyled;tt(Ce.css.styles,u,{name:"badge"});var f=s.useRef(null);s.useImperativeHandle(t,function(){return{props:a,getElement:function(){return f.current}}});var p=n({ref:f,style:a.style,className:G(a.className,i("root"))},Ce.getOtherProps(a),l("root"));return s.createElement("span",p,a.value)}));Vt.displayName="Badge";var Nr={icon:function(t){var n=t.props;return G("p-button-icon p-c",q({},"p-button-icon-".concat(n.iconPos),n.label))},loadingIcon:function(t){var n=t.props,r=t.className;return G(r,{"p-button-loading-icon":n.loading})},label:"p-button-label p-c",root:function(t){var n=t.props,r=t.size,a=t.disabled;return G("p-button p-component",q(q(q(q({"p-button-icon-only":(n.icon||n.loading)&&!n.label&&!n.children,"p-button-vertical":(n.iconPos==="top"||n.iconPos==="bottom")&&n.label,"p-disabled":a,"p-button-loading":n.loading,"p-button-outlined":n.outlined,"p-button-raised":n.raised,"p-button-link":n.link,"p-button-text":n.text,"p-button-rounded":n.rounded,"p-button-loading-label-only":n.loading&&!n.icon&&n.label},"p-button-loading-".concat(n.iconPos),n.loading&&n.label),"p-button-".concat(r),r),"p-button-".concat(n.severity),n.severity),"p-button-plain",n.plain))}},_e=D.extend({defaultProps:{__TYPE:"Button",__parentMetadata:null,badge:null,badgeClassName:null,className:null,children:void 0,disabled:!1,icon:null,iconPos:"left",label:null,link:!1,loading:!1,loadingIcon:null,outlined:!1,plain:!1,raised:!1,rounded:!1,severity:null,size:null,text:!1,tooltip:null,tooltipOptions:null,visible:!0},css:{classes:Nr}});function jt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ke(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?jt(Object(n),!0).forEach(function(r){q(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jt(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Te=s.memo(s.forwardRef(function(e,t){var n=De(),r=s.useContext(re),a=_e.getProps(e,r),c=a.disabled||a.loading,l=Ke(Ke({props:a},a.__parentMetadata),{},{context:{disabled:c}}),i=_e.setMetaData(l),u=i.ptm,f=i.cx,p=i.isUnstyled;tt(_e.css.styles,p,{name:"button",styled:!0});var g=s.useRef(t);if(s.useEffect(function(){P.combinedRefs(g,t)},[g,t]),a.visible===!1)return null;var w=function(){var v=G("p-button-icon p-c",q({},"p-button-icon-".concat(a.iconPos),a.label)),z=n({className:f("icon")},u("icon"));v=G(v,{"p-button-loading-icon":a.loading});var B=n({className:f("loadingIcon",{className:v})},u("loadingIcon")),J=a.loading?a.loadingIcon||s.createElement(zt,me({},B,{spin:!0})):a.icon;return dn.getJSXIcon(J,Ke({},z),{props:a})},b=function(){var v=n({className:f("label")},u("label"));return a.label?s.createElement("span",v,a.label):!a.children&&!a.label&&s.createElement("span",me({},v,{dangerouslySetInnerHTML:{__html:"&nbsp;"}}))},T=function(){if(a.badge){var v=n({className:G(a.badgeClassName),value:a.badge,unstyled:a.unstyled,__parentMetadata:{parent:l}},u("badge"));return s.createElement(Vt,v,a.badge)}return null},y=!c||a.tooltipOptions&&a.tooltipOptions.showOnDisabled,I=P.isNotEmpty(a.tooltip)&&y,C={large:"lg",small:"sm"},x=C[a.size],m=w(),N=b(),M=T(),k=a.label?a.label+(a.badge?" "+a.badge:""):a["aria-label"],O=n({ref:g,"aria-label":k,className:G(a.className,f("root",{size:x,disabled:c})),disabled:c},_e.getOtherProps(a),u("root"));return s.createElement(s.Fragment,null,s.createElement("button",O,m,N,a.children,M,s.createElement(Ut,null)),I&&s.createElement(Gt,me({target:g,content:a.tooltip,pt:u("tooltip")},a.tooltipOptions)))}));Te.displayName="Button";const Tr=()=>{const[e,t]=s.useState(!1),[n,r]=s.useState(!1),[a,c]=s.useState(""),[l,i]=s.useState(!1),[u,f]=s.useState(null),p=fn("id"),g=s.useRef(null),w=s.useRef(null);s.useEffect(()=>{fetch(`${gn}?idUsuario=${p}`).then(m=>m.text()).then(m=>{const N=JSON.parse(m.substring(m.indexOf("{"),m.lastIndexOf("}")+1));c(N.nombreUsuario),f(N.imgPerfil)}).catch(m=>{console.error("Error al obtener datos del usuario:",m)})},[p]);const b=()=>{t(!e)},T=()=>{r(!n)},y=()=>{t(!1),r(!1)},I=()=>{C("id"),c(""),y(),i(!0)},C=m=>{document.cookie=`${m}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`},x=m=>{g.current&&!g.current.contains(m.target)&&w.current&&!w.current.contains(m.target)&&y()};return s.useEffect(()=>(e||n?document.addEventListener("mousedown",x):document.removeEventListener("mousedown",x),()=>{document.removeEventListener("mousedown",x)}),[e,n]),d.jsx("header",{className:"fixed top-0 w-full bg-white border-b-2 py-3 z-50 font-bold",children:d.jsx("div",{className:"mx-auto max-w-screen-xl lg:px-5",children:d.jsxs("div",{className:"flex flex-col lg:flex-row justify-between items-center px-6 lg:px-5 text-sm",children:[d.jsxs("div",{className:"flex w-full lg:w-auto items-center justify-between",children:[d.jsx("div",{className:"flex-1",children:d.jsx(Y,{to:"/",onClick:y,className:"logo flex items-center text-lg hover:opacity-70",children:d.jsx("img",{src:Nt,alt:"Logo",className:"w-40 h-30 mr-2"})})}),d.jsx("div",{className:"lg:hidden",children:d.jsx(Te,{onClick:b,className:"text-gray-700 hover:text-black focus:outline-none",children:d.jsx("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16m-7 6h7"})})})})]}),d.jsx("nav",{ref:g,className:`lg:flex lg:items-center ${e?"block":"hidden"} lg:block`,children:d.jsxs("ul",{className:"flex flex-col lg:flex-row gap-4 lg:gap-8 list-none p-0 m-0 mt-10 lg:mt-0",children:[d.jsx("li",{className:"flex items-center",children:d.jsxs(Y,{to:"/",onClick:y,className:({isActive:m})=>(m?"bg-fuchsia-600 text-white rounded-lg transition-colors duration-300 shadow-md":"text-gray-700 hover:text-black hover:bg-white rounded-lg transition-colors duration-300")+" flex items-center text-lg py-2 px-4 ",children:[d.jsx(Tt,{className:"mr-2"}),"Inicio"]})}),d.jsx("li",{className:"flex items-center",children:d.jsxs(Y,{to:"/Biblioteca",onClick:y,className:({isActive:m})=>(m?"bg-fuchsia-600 text-white rounded-lg transition-colors duration-300 shadow-md":"text-gray-700 hover:text-black hover:bg-white rounded-lg transition-colors duration-300")+" flex items-center text-lg py-2 px-4 ",children:[d.jsx(Lt,{className:"mr-2"}),"Nuestros Juegos"]})}),d.jsx("li",{className:"flex items-center",children:d.jsxs(Y,{to:"/Info",onClick:y,className:({isActive:m})=>(m?"bg-fuchsia-600 text-white rounded-lg transition-colors duration-300 shadow-md":"text-gray-700 hover:text-black hover:bg-white rounded-lg transition-colors duration-300")+" flex items-center text-lg py-2 px-4 ",children:[d.jsx(It,{className:"mr-2"}),"GameInfo"]})}),d.jsx("li",{children:a?d.jsxs("div",{className:"relative",ref:w,children:[d.jsxs(Te,{onClick:T,className:"flex items-center text-gray-700 hover:text-black focus:outline-none text-lg py-2 px-4",children:[a==="admin"?d.jsx(_n,{className:"mr-1 text-xl"}):u?d.jsx("img",{src:u,alt:"Imagen de perfil",className:"mr-1 w-8 h-8 rounded-full"}):d.jsx(ht,{className:"mr-1 text-xl"}),a==="admin"?"Administrador":a]}),n&&d.jsxs("ul",{className:"absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1",children:[d.jsx("li",{children:d.jsx(Y,{to:a==="admin"?"/Admin":"/Perfil",onClick:y,className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",children:a==="admin"?"Panel de Administrador":"Ir a mi perfil"})}),d.jsx("li",{children:d.jsx(Te,{onClick:I,className:"block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100",children:"Cerrar sesión"})})]})]}):d.jsxs(Y,{to:"/login",onClick:y,className:"flex items-center text-gray-700 hover:text-black text-lg py-2 px-4",children:[d.jsx(ht,{className:"mr-1 text-xl"})," Login"]})}),d.jsx("li",{children:a!=="admin"&&d.jsxs(Y,{to:"/Carrito",onClick:y,className:({isActive:m})=>(m?"bg-fuchsia-600 text-white rounded-lg transition-colors duration-300 shadow-md":"text-gray-700 hover:text-black hover:bg-white rounded-lg transition-colors duration-300")+" flex items-center text-lg py-2 px-4 ",children:[d.jsx(Cn,{className:"mr-2"}),"Carrito"]})})]})}),l&&d.jsx(mn,{to:"/"})]})})})},Lr=({children:e})=>d.jsxs(d.Fragment,{children:[d.jsx(Tr,{}),d.jsx("div",{className:"flex-grow max-w-screen-2xl mx-auto px-2 lg:px-5 mt-20 min-h-screen",children:e}),d.jsx(jn,{})]}),xa=Lr;export{fe as $,$r as A,Te as B,D as C,oa as D,Dr as E,ma as F,V as G,ia as H,Ne as I,Rr as J,aa as K,Mr as L,xa as M,ra as N,ta as O,Br as P,na as Q,Ar as R,ea as S,Gt as T,Qr as U,qr as V,ga as W,ha as X,ae as Y,va as Z,Ht as _,tt as a,Yr as a0,ua as a1,fa as a2,ca as a3,pa as a4,la as a5,zt as a6,ba as a7,ya as a8,Ae as b,Dt as c,ke as d,se as e,Ut as f,Jr as g,gn as h,_n as i,ht as j,da as k,Nt as l,Zr as m,Xr as n,Vr as o,Kr as p,Wr as q,Hr as r,Fr as s,Gr as t,De as u,kr as v,zr as w,Ur as x,Ye as y,sa as z};
