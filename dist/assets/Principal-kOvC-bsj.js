import{r as l,j as t,L as w}from"./index-CT-9_id-.js";import{J as N,M as y,B as u}from"./MainLayaout--hj295c2.js";import{P}from"./Paginacion-DuE7jTeq.js";function I(){document.title="infoBl4ckGames";const[c,g]=l.useState([]),[d,n]=l.useState(0),[m,f]=l.useState(1),i=9;l.useEffect(()=>{fetch(N).then(e=>e.text()).then(e=>{const s=e.substring(e.indexOf("["));try{const a=JSON.parse(s);g(a)}catch(a){console.error("Error al analizar JSON:",a)}}).catch(e=>{console.error("Error en la solicitud:",e)})},[]);const h=c.filter(e=>e.PuntuacionPromedio>0),o=h.length>0?h.slice().sort((e,s)=>s.PuntuacionPromedio-e.PuntuacionPromedio):c,r=o.slice(0,4);l.useEffect(()=>{const e=setInterval(()=>{n(s=>(s+1)%r.length)},5e3);return()=>clearInterval(e)},[r.length]);function b(e){n(e)}const v=(e,s,a)=>{const x=(s-1)*a;return e.slice(x,x+a)},p=Math.ceil(o.length/i),j=e=>{f(e)};return t.jsx(t.Fragment,{children:t.jsxs(y,{children:[t.jsx("div",{className:"h-screen mt-28",children:t.jsxs("div",{className:"slider h-full relative",children:[t.jsx("div",{className:"list h-full relative font-bold",children:r.map((e,s)=>t.jsxs("div",{className:`item absolute inset-0 overflow-hidden opacity-0 transition duration-500 ${s===d?"active opacity-100 z-10":""}`,children:[t.jsx("img",{src:e.Imagen,alt:e.Titulo,className:"w-full h-full object-cover transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl border border-gray-300 rounded-lg"}),t.jsx("div",{className:"content absolute left-1/2 top-1/2 lg:top-1/4 lg:left-10 transform -translate-x-1/2 -translate-y-1/2 lg:transform-none w-11/12 lg:w-auto max-w-lg p-4 bg-black bg-opacity-70 rounded-md",children:t.jsx("p",{className:"lg:text-lg text-white text-center lg:text-left",children:e.Descripcion})})]},e.idJuego))}),t.jsxs("div",{className:"arrows absolute top-1/3 right-10 z-20",children:[t.jsx(u,{onClick:()=>n(e=>(e-1+r.length)%r.length),className:"bg-gray-300 border-none w-10 h-10 rounded-full text-xl text-gray-800 transition duration-500 hover:bg-gray-400 hover:text-black justify-center",children:"<"}),t.jsx(u,{onClick:()=>n(e=>(e+1)%r.length),className:"bg-gray-300 border-none w-10 h-10 rounded-full text-xl text-gray-800 transition duration-500 hover:bg-gray-400 hover:text-black justify-center",children:">"})]}),t.jsx("div",{className:"thumbnail absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex gap-4 w-full px-4 sm:px-8 md:px-12 lg:px-16 justify-center sm:justify-end cursor-pointer",children:r.map((e,s)=>t.jsxs("div",{className:`item w-28 sm:w-32 md:w-36 lg:w-40 h-40 sm:h-48 md:h-52 lg:h-56 filter brightness-50 transition duration-500 border border-gray-300 rounded-lg shadow-md overflow-hidden transform ease-in-out hover:scale-105 hover:shadow-2xl ${s===d?"active brightness-150":""}`,onClick:()=>b(s),children:[t.jsx("img",{src:e.Imagen,alt:e.Titulo,className:"w-full h-full object-cover rounded-md"}),t.jsx("div",{className:"content absolute inset-0 flex items-center justify-center px-2 pb-2",children:t.jsx("h3",{className:"text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white text-center",children:e.Titulo})})]},e.idJuego))})]})}),t.jsxs("div",{className:" cartas flex flex-col items-center gap-10 cursor-pointer font-bold mt-16 mb-10",children:[t.jsx("h2",{className:"text-white text-4xl md:text-5xl lg:text-6xl mb-7 font-bold text-center",children:"Mejor valoración"}),t.jsx("div",{className:"flex flex-wrap gap-10 justify-center mb-10",children:v(o,m,i).map(e=>t.jsxs(w,{to:`/juego/${e.idJuego}`,className:"border border-gray-300 rounded-lg shadow-md w-96 overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl",children:[t.jsx("img",{src:e.Imagen,alt:e.Titulo,className:"w-full h-36 object-cover relative border rounded-xl overflow-hidden"}),t.jsx("div",{className:"p-5 text-white",children:t.jsx("h3",{className:"mt-0 text-lg",children:e.Titulo})})]},e.idJuego))}),o.length>i&&t.jsx(P,{totalPages:p,currentPage:m,handlePageChange:j})]})]})})}export{I as default};