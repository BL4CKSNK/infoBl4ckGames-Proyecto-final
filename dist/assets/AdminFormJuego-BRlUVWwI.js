import{r as a,j as e}from"./index-CT-9_id-.js";import{M as I,B as R,S as T}from"./MainLayaout--hj295c2.js";import{L as k}from"./LayaoutAdmin-b_Mhy4Wx.js";import{T as F}from"./toast.esm-BPGPX-aO.js";import{I as r}from"./inputtext.esm-CaMnLbjR.js";import"./index.esm-ka6OvFs3.js";import"./index.esm-CTkIKXvg.js";import"./index.esm-QBDj5i6w.js";function A(){const[i,c]=a.useState(""),[d,u]=a.useState(""),[m,x]=a.useState(null),[p,h]=a.useState(""),[b,g]=a.useState(""),[f,y]=a.useState(""),[j,w]=a.useState(""),n=a.useRef(null),v=async t=>{t.preventDefault();const s=new FormData;s.append("Titulo",i),s.append("Descripcion",d),m&&s.append("Imagen",m),s.append("Precio",p),s.append("Recomendados",b),s.append("FechaLanzamiento",f),s.append("Minimos",j);try{const o=await fetch(T,{method:"POST",body:s});if(o.ok){const N=await o.text(),S=N.indexOf("{"),E=N.substring(S),l=JSON.parse(E);l.success?(n.current.show({severity:"success",summary:"Éxito",detail:"Juego insertado exitosamente",life:3e3}),c(""),u(""),x(null),h(""),g(""),y(""),w("")):(n.current.show({severity:"error",summary:"Error",detail:l.message,life:3e3}),console.error("Error:",l.message))}else n.current.show({severity:"error",summary:"Error",detail:`Error en la solicitud: ${o.status}`,life:3e3}),console.error("Error en la solicitud:",o.status)}catch(o){n.current.show({severity:"error",summary:"Error",detail:"Error de red",life:3e3}),console.error("Error de red:",o)}};return e.jsx(e.Fragment,{children:e.jsx(I,{children:e.jsxs(k,{children:[e.jsx(F,{ref:n,position:"bottom-center",className:" text-white"}),e.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Formulario de Inserción de Juegos"}),e.jsxs("form",{onSubmit:v,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Título:"}),e.jsx(r,{type:"text",value:i,onChange:t=>c(t.target.value),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Descripción:"}),e.jsx("textarea",{value:d,onChange:t=>u(t.target.value),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Imagen:"}),e.jsx(r,{type:"file",onChange:t=>x(t.target.files[0]),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Precio:"}),e.jsx(r,{type:"number",step:"0.01",value:p,onChange:t=>h(t.target.value),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Requisitos Recomendados:"}),e.jsx("textarea",{value:b,onChange:t=>g(t.target.value),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Requisitos Mínimos:"}),e.jsx("textarea",{value:j,onChange:t=>w(t.target.value),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Fecha de Lanzamiento:"}),e.jsx(r,{type:"date",value:f,onChange:t=>y(t.target.value),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"})]}),e.jsx(R,{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Insertar Juego"})]})]})})})}export{A as default};