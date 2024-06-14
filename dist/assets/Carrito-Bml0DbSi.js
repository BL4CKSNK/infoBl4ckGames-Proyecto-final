import{r as l,g as L,u as A,j as r,N as _}from"./index-CT-9_id-.js";import{h as M,M as $,j as k,B as u,v as F,w as z,x as B}from"./MainLayaout--hj295c2.js";import{P as q}from"./Paginacion-DuE7jTeq.js";import{T as G}from"./toast.esm-BPGPX-aO.js";import"./index.esm-CTkIKXvg.js";import"./index.esm-QBDj5i6w.js";const Y=()=>{const[o,g]=l.useState([]),[i,x]=l.useState(0),c=L("id"),[v,S]=l.useState(!1),[h,E]=l.useState("");document.title=`Carrito ${h}`;const[p,P]=l.useState(null),w=A(),[m,f]=l.useState(1),d=2,b=l.useRef(null),j=()=>{if(!c){console.error("No se encontró el ID del usuario en el localStorage"),S(!0);return}fetch(`${F}?idUsuario=${c}`).then(e=>e.text()).then(e=>{const t=e.substring(e.indexOf("["));try{const s=JSON.parse(t);s.sort((a,n)=>a.idJuego-n.idJuego),g(s)}catch(s){console.error("Error al analizar los datos JSON:",s)}}).catch(e=>console.error("Error al cargar el carrito:",e))};l.useEffect(()=>{fetch(`${M}?idUsuario=${c}`).then(e=>e.text()).then(e=>{const t=JSON.parse(e.substring(e.indexOf("{"),e.lastIndexOf("}")+1));E(t.nombreUsuario),P(t.imgPerfil)}).catch(e=>{console.error("Error al obtener datos del usuario:",e)})},[c]),l.useEffect(()=>{j()},[]),l.useEffect(()=>{let e=0;o.forEach(t=>{e+=t.Precio*t.Unidades}),x(e)},[o]);const U=e=>r.jsx("img",{src:e.Imagen,alt:e.Titulo,className:"w-32"});if(v)return r.jsx(_,{to:"/login"});const N=(e,t)=>{const s=new FormData;s.append("idJuego",e),s.append("idUsuario",c),s.append("incremento",t),fetch(z,{method:"POST",body:s}).then(a=>a.text()).then(a=>{const n=a.indexOf("{"),I=a.substring(n);return JSON.parse(I)}).then(a=>{a.success?j():console.error("Error:",a.message)}).catch(a=>console.error("Error al actualizar cantidad:",a))},C=e=>{const t=new FormData;t.append("idJuego",e),t.append("idUsuario",c),fetch(B,{method:"POST",body:t}).then(s=>s.text()).then(s=>{const a=s.indexOf("{"),n=s.substring(a);return JSON.parse(n)}).then(s=>{if(s.success){const a=o.filter(n=>n.idJuego!==e);if(g(a),a.length===0)x(0);else{const n=Math.ceil(a.length/d);m>n&&f(n)}}else console.error("Error:",s.message)}).catch(s=>console.error("Error al eliminar del carrito:",s))},O=()=>{if(o.length===0)b.current.show({severity:"error",summary:"Error",detail:"No tienes productos en el carrito",life:3e3});else{const e=new URLSearchParams;e.append("idUsuario",c),e.append("idCarrito",o[0].idCarrito);for(let t=0;t<o.length;t++)e.append("imagen"+t,o[t].Imagen),e.append("precio"+t,o[t].Precio),e.append("titulo"+t,o[t].Titulo),e.append("unidades"+t,o[t].Unidades),e.append("idJuego"+t,o[t].idJuego);e.append("total",i*1.21),w(`/FormularioCompra?${e.toString()}`)}},y=m*d,R=y-d,T=o.slice(R,y),J=Math.ceil(o.length/d),D=e=>{f(e)};return r.jsx(r.Fragment,{children:r.jsxs($,{children:[r.jsx(G,{ref:b,position:"bottom-center",className:" text-white"}),r.jsx("div",{className:"lg:w-full bg-gray-100 p-6 shadow-lg rounded-lg mt-36",children:r.jsxs("div",{className:"flex items-center",children:[r.jsxs("span",{className:"font-bold text-2xl mr-2",children:["Bienvenido a tu carrito, ",h]}),p?r.jsx("img",{src:p,alt:"Imagen de perfil",className:"w-10 h-10 rounded-full"}):r.jsx(k,{className:"text-xl"})]})}),r.jsxs("div",{className:"flex flex-col lg:flex-row mb-96 mt-10",children:[r.jsx("div",{className:"lg:w-1/2 p-6 bg-gray-100",children:o.length===0?r.jsx("div",{className:"mt-8 p-6 bg-white shadow-lg rounded-lg text-center text-lg font-semibold",children:"Carrito vacío"}):r.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-6 mt-7",children:T.map((e,t)=>r.jsxs("div",{className:"bg-white shadow-lg rounded-lg p-6",children:[r.jsx("div",{className:"text-center mb-4",children:r.jsx("h3",{className:"text-lg font-semibold",children:e.Titulo})}),r.jsx("div",{className:"flex justify-center mb-4",children:U(e)}),r.jsxs("div",{className:"flex justify-between items-center mb-4",children:[r.jsx(u,{className:"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",onClick:()=>N(e.idJuego,1),children:"+"}),r.jsxs("span",{className:"mx-2",children:[" Cantidad:",e.Unidades]}),r.jsx(u,{className:"bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded",onClick:()=>N(e.idJuego,-1),children:"-"})]}),r.jsx("div",{className:"text-center text-lg font-semibold",children:(e.Unidades*e.Precio*1.21).toLocaleString("es-ES",{style:"currency",currency:"EUR"})}),r.jsx(u,{className:"bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded",onClick:()=>C(e.idJuego),children:"Eliminar del carrito"})]},t))})}),r.jsxs("div",{className:"lg:w-1/2 p-6 bg-gray-100",children:[r.jsxs("div",{className:"bg-white shadow-lg rounded-lg mt-8 p-10",children:[o.map((e,t)=>r.jsxs("div",{className:"flex justify-end items-center mt-4",children:[r.jsxs("span",{className:"text-lg font-bold mr-4",children:[e.Titulo," x ",e.Unidades,":"]}),r.jsx("span",{className:"text-lg font-bold",children:(e.Precio*e.Unidades).toLocaleString("es-ES",{style:"currency",currency:"EUR"})})]},t)),r.jsxs("div",{className:"flex justify-end items-center mt-4",children:[r.jsx("span",{className:"text-lg font-bold mr-4",children:"Subtotal:"}),r.jsx("span",{className:"text-lg font-bold",children:i.toLocaleString("es-ES",{style:"currency",currency:"EUR"})})]}),r.jsxs("div",{className:"flex justify-end items-center mt-4",children:[r.jsx("span",{className:"text-lg font-bold mr-4",children:"IVA (21%):"}),r.jsx("span",{className:"text-lg font-bold",children:(i*.21).toLocaleString("es-ES",{style:"currency",currency:"EUR"})})]}),r.jsxs("div",{className:"flex justify-end items-center mt-4",children:[r.jsx("span",{className:"text-lg font-bold mr-4",children:"Total:"}),r.jsx("span",{className:"text-lg font-bold",children:(i*1.21).toLocaleString("es-ES",{style:"currency",currency:"EUR"})})]}),r.jsx(u,{type:"button",className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",onClick:O,children:"Realizar compra"})]}),r.jsx(q,{totalPages:J,currentPage:m,handlePageChange:D})]})]})]})})};export{Y as default};
