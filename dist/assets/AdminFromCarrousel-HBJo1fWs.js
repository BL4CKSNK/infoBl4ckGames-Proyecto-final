import{r as s,j as t}from"./index-CT-9_id-.js";import{J as p,M as g,B as x,U as b}from"./MainLayaout--hj295c2.js";import{L as y}from"./LayaoutAdmin-b_Mhy4Wx.js";import{T as j}from"./toast.esm-BPGPX-aO.js";import{I as E}from"./inputtext.esm-CaMnLbjR.js";import"./index.esm-ka6OvFs3.js";import"./index.esm-CTkIKXvg.js";import"./index.esm-QBDj5i6w.js";function O(){const[u,d]=s.useState([]),[n,l]=s.useState(""),[i,c]=s.useState([]),a=s.useRef(null);s.useEffect(()=>{fetch(p).then(e=>e.text()).then(e=>{const r=e.substring(e.indexOf("["));try{const o=JSON.parse(r);d(o)}catch(o){console.error("Error al analizar JSON:",o)}}).catch(e=>{console.error("Error en la solicitud:",e)})},[]);const m=e=>{const r=e.target.value;l(r)},h=e=>{c(e.target.files)},f=async e=>{e.preventDefault();const r=new FormData;r.append("idJuego",n);for(let o=0;o<i.length;o++)r.append("imagenes[]",i[o]);try{const o=await fetch(b,{method:"POST",body:r});o.ok?(l(""),c(""),a.current.show({severity:"success",summary:"Éxito",detail:"Imágenes insertadas correctamente",life:3e3})):(console.error("Error en la solicitud:",o.status),a.current.show({severity:"error",summary:"Error",detail:`Error en la solicitud: ${o.status}`,life:3e3}))}catch(o){console.error("Error de red:",o),a.current.show({severity:"error",summary:"Error",detail:"Error de red",life:3e3})}};return t.jsx(g,{children:t.jsxs(y,{children:[t.jsx(j,{ref:a,position:"bottom-center",className:" text-white"}),t.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Formulario Insercion imagenes"}),t.jsxs("form",{className:"mb-6",onSubmit:f,children:[t.jsxs("div",{className:"mb-6",children:[t.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Juego:"}),t.jsxs("select",{value:n,onChange:m,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",children:[t.jsx("option",{value:"",children:"Seleccione un juego"}),u.map(e=>t.jsx("option",{value:e.idJuego,children:e.Titulo},e.idJuego))]})]}),t.jsxs("div",{className:"mb-6",children:[t.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Carrousel:"}),t.jsx(E,{type:"file",name:"imagenes",onChange:h,multiple:!0,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0})]}),t.jsx(x,{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5",children:"Insertar Imágenes"})]})]})})}export{O as default};
