import{r as a,j as r}from"./index-CT-9_id-.js";import{D as x,M as p,B as U,H as b}from"./MainLayaout--hj295c2.js";import{L as y}from"./LayaoutAdmin-b_Mhy4Wx.js";import{T as j}from"./toast.esm-BPGPX-aO.js";import"./index.esm-ka6OvFs3.js";import"./index.esm-CTkIKXvg.js";import"./index.esm-QBDj5i6w.js";function I(){const[c,n]=a.useState([]),[i,l]=a.useState(""),t=a.useRef(null);a.useEffect(()=>{fetch(x).then(e=>e.text()).then(e=>{const s=e.indexOf("["),h=e.lastIndexOf("]")+1,f=e.slice(s,h);try{const o=JSON.parse(f);Array.isArray(o)&&o.length>0?n(o):n([])}catch(o){console.error("Error al parsear datos:",o),n([])}}).catch(e=>console.error("Error al obtener usuarios:",e))},[]);const u=e=>{const s=e.target.value;l(s)},d=async e=>{if(e.preventDefault(),!i){console.error("Seleccione un usuario antes de eliminar.");return}try{const s=await fetch(`${b}?idUsuarios=${i}`,{method:"DELETE"});s.ok?(l(""),t.current.show({severity:"success",summary:"Éxito",detail:"Usuario eliminado correctamente",life:3e3})):(console.error("Error al eliminar el usuario:",s.status),t.current.show({severity:"error",summary:"Error",detail:`Error al eliminar el usuario: ${s.status}`,life:3e3}))}catch(s){console.error("Error de red:",s),t.current.show({severity:"error",summary:"Error",detail:"Error de red",life:3e3})}},m=c.filter(e=>e.idUsuarios!=="1");return r.jsx(r.Fragment,{children:r.jsx(p,{children:r.jsxs(y,{children:[r.jsx(j,{ref:t,position:"bottom-center",className:" text-white"}),r.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Formulario para borrar Usuario"}),r.jsxs("form",{onSubmit:d,className:"mb-6",children:[r.jsxs("div",{className:"mb-6",children:[r.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Usuario:"}),r.jsxs("select",{value:i,onChange:u,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",children:[r.jsx("option",{value:"",children:"Seleccione un Usuario"}),m.map(e=>r.jsxs("option",{value:e.idUsuarios,children:["id:",e.idUsuarios," NombreUsuario: ",e.NombreUsuario]},e.idUsuarios))]})]}),r.jsx(U,{type:"submit",className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Eliminar Usuario"})]})]})})})}export{I as default};
