import{r as o,j as r}from"./index-CT-9_id-.js";import{O as g,M as f,B as p,K as x}from"./MainLayaout--hj295c2.js";import{L as b}from"./LayaoutAdmin-b_Mhy4Wx.js";import{T as E}from"./toast.esm-BPGPX-aO.js";import"./index.esm-ka6OvFs3.js";import"./index.esm-CTkIKXvg.js";import"./index.esm-QBDj5i6w.js";function S(){const[l,i]=o.useState([]),[s,n]=o.useState(""),a=o.useRef(null);o.useEffect(()=>{fetch(g).then(e=>e.text()).then(e=>{if(e==="No hay categorías")i([]);else{const t=e.split(";").map(d=>{const[u,h]=d.split(",");return{idCategoria:u,Nombre:h}});i(t)}}).catch(e=>console.error("Error al obtener categorías:",e))},[]);const c=e=>{const t=e.target.value;n(t)},m=async e=>{if(e.preventDefault(),!s){console.error("Seleccione una categoría antes de eliminar.");return}try{const t=await fetch(`${x}?idCategoria=${s}`,{method:"DELETE"});t.ok?(n(""),a.current.show({severity:"success",summary:"Éxito",detail:"Categoría eliminada correctamente",life:3e3})):(console.error("Error al eliminar la categoría:",t.status),a.current.show({severity:"error",summary:"Error",detail:`Error al eliminar la categoría: ${t.status}`,life:3e3}))}catch(t){console.error("Error de red:",t),a.current.show({severity:"error",summary:"Error",detail:"Error de red",life:3e3})}};return r.jsx(r.Fragment,{children:r.jsx(f,{children:r.jsxs(b,{children:[r.jsx(E,{ref:a,position:"bottom-center",className:" text-white"}),r.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Formulario para borrar Categoria"}),r.jsxs("form",{onSubmit:m,className:"mb-6",children:[r.jsxs("div",{className:"mb-6",children:[r.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Categoria:"}),r.jsxs("select",{value:s,onChange:c,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",children:[r.jsx("option",{value:"",children:"Seleccione una Categoria"}),l.map(e=>r.jsx("option",{value:e.idCategoria,children:e.Nombre},e.idCategoria))]})]}),r.jsx(p,{type:"submit",className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Eliminar Categoría"})]})]})})})}export{S as default};
