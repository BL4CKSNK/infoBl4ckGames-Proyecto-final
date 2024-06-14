import{u as useNavigate,r as reactExports,j as jsxRuntimeExports,s as setCookie}from"./index-CT-9_id-.js";import{M as MainLayaout,l as logo,B as Button,R as REGISTRO,L as LOGIN}from"./MainLayaout--hj295c2.js";import{I as InputText}from"./inputtext.esm-CaMnLbjR.js";function Registro(){document.title="Login";const navigate=useNavigate(),[usuario,setUsuario]=reactExports.useState(""),[email,setEmail]=reactExports.useState(""),[password,setPassword]=reactExports.useState(""),[loginMode,setLoginMode]=reactExports.useState(!1),[registro,setRegistrado]=reactExports.useState(!1),[loggedIn,setLoggedIn]=reactExports.useState(!1),[correoUsuario,setCorreoUsuario]=reactExports.useState(""),[errorMessage,setErrorMessage]=reactExports.useState("");reactExports.useEffect(()=>{setUsuario(""),setEmail(""),setPassword(""),setErrorMessage("")},[loginMode]);const handleSubmit=async event=>{event.preventDefault();const requiredFields=loginMode?["email","password"]:["usuario","email","password"],campos=requiredFields.some(field=>!eval(field));if(campos){setErrorMessage("Por favor, completa todos los campos");return}const datos=new FormData;datos.append("correo",email),datos.append("contra",password);let url=REGISTRO;loginMode?(url=LOGIN,datos.append("login","1")):(datos.append("usuario",usuario),datos.append("register","1"));try{const e=await fetch(url,{method:"POST",body:datos});if(e.ok){const s=await e.text(),o=s.indexOf("{"),r=s.substring(o),t=JSON.parse(r);t.success?(loginMode?(setLoggedIn(!0),setCorreoUsuario(email),setCookie("id",t.idUsuario,7),navigate("/")):(setRegistrado(!0),setLoginMode(!0)),setUsuario(""),setEmail(""),setPassword("")):setErrorMessage(`${t.message}`)}else console.error("Error en la solicitud:",e.status)}catch(e){console.error("Error de red:",e)}},cambiarEstado=e=>s=>{e(s.target.value)};return loggedIn?null:jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsx(MainLayaout,{children:jsxRuntimeExports.jsx("div",{className:"formularioLogin flex justify-center items-center mt-52 font-bold ",children:jsxRuntimeExports.jsxs("div",{className:"flex flex-col lg:flex-row bg-white bg-opacity-50 p-8 rounded-lg shadow-lg",children:[jsxRuntimeExports.jsx("div",{className:"flex items-center justify-center lg:mr-8 mb-8 lg:mb-0",children:jsxRuntimeExports.jsx("img",{src:logo,alt:"Descripción de la imagen",className:"w-48 h-auto"})}),jsxRuntimeExports.jsxs("div",{className:"form-container",children:[jsxRuntimeExports.jsxs("form",{onSubmit:handleSubmit,children:[!loginMode&&jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx("label",{className:"block mb-2",children:"Usuario"}),jsxRuntimeExports.jsx(InputText,{value:usuario,onChange:cambiarEstado(setUsuario),type:"text",name:"usuario",className:"w-full p-2 mb-4 border border-gray-300 rounded"})]}),jsxRuntimeExports.jsx("label",{className:"block mb-2",children:"Correo Electrónico"}),jsxRuntimeExports.jsx(InputText,{value:email,onChange:cambiarEstado(setEmail),type:"email",name:"correo",className:"w-full p-2 mb-4 border border-gray-300 rounded"}),jsxRuntimeExports.jsx("label",{className:"block mb-2",children:"Contraseña"}),jsxRuntimeExports.jsx(InputText,{value:password,onChange:cambiarEstado(setPassword),type:"password",name:"contra",className:"w-full p-2 mb-4 border border-gray-300 rounded"}),jsxRuntimeExports.jsx(Button,{type:"submit",className:"w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 justify-center",children:loginMode?"Iniciar sesión":"Registrarse"})]}),errorMessage&&jsxRuntimeExports.jsx("div",{className:"text-red-500 mt-2",children:errorMessage}),jsxRuntimeExports.jsx("div",{className:"mt-4 ",children:jsxRuntimeExports.jsx(Button,{className:"w-full  bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-300 transition duration-300 justify-center",onClick:()=>setLoginMode(!loginMode),children:loginMode?"¿No tienes cuenta? Regístrate":"¿Ya tienes cuenta? Inicia sesión"})})]})]})})})})}export{Registro as default};
