import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { REGISTRO } from '../const/const';
import { LOGIN } from '../const/const';
import MainLayaout from '../Layaout/MainLayaout';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useEffect } from 'react';
import logo from '../img/LOGO.png'
import { setCookie } from '../const/cookie';


export default function Registro() 
{
    document.title = `Login`;

    const navigate = useNavigate(); 
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginMode, setLoginMode] = useState(false);
    const [registro, setRegistrado] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [correoUsuario, setCorreoUsuario] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); 

    //Reseteo los campos del formulario
    useEffect(() => {
        setUsuario('');
        setEmail('');
        setPassword('');
        setErrorMessage('')
    }, [loginMode]);

    //Función que recoge los datos del formulario y los envia al servidor
    const handleSubmit = async (event) => {
        event.preventDefault(); 

        //Verificación para no dejar los campos en blanco
        const requiredFields = loginMode ? ['email', 'password'] : ['usuario', 'email', 'password'];
        const campos = requiredFields.some(field => !eval(field)); 
        if (campos) 
        {
            setErrorMessage('Por favor, completa todos los campos');
            return;
        }

        //Creo un objeto y añado los datos a el
        const datos = new FormData();
        datos.append('correo', email);
        datos.append('contra', password);

        //condición para determinar el modo si esta login o en registro
        let url = REGISTRO;
        if (loginMode) 
        {
            url = LOGIN;
            datos.append('login', '1');
        } 
        else 
        {
            datos.append('usuario', usuario);
            datos.append('register', '1');
        }

        try {
            const response = await fetch(url, 
                {
                method: 'POST',
                body: datos
            });
            
            if (response.ok) 
            {
                const text = await response.text();
                const startIndex = text.indexOf('{'); // Busca el índice del primer '{' en el texto
                const jsonText = text.substring(startIndex); // Corta el texto desde el primer '{' hasta el final
                const data = JSON.parse(jsonText); // Parsea la respuesta como JSON

                if (data.success) 
                {
                    if (!loginMode) 
                    {
                        setRegistrado(true);
                        setLoginMode(true);
                    } 
                    else 
                    {
                        setLoggedIn(true);
                        setCorreoUsuario(email);   
                        // localStorage.setItem('id', data.idUsuario);//Cuando obtengo el id del usuario lo guardo en el localStorage
                        setCookie('id', data.idUsuario, 7); 
                        
                        navigate('/');  //Si el inicio de sesión fue exitoso se redirigira a la página principal
                    }
                    setUsuario('');
                    setEmail('');
                    setPassword('');
                } 
                else 
                {
                    setErrorMessage(`${data.message}`);
                }
            } 
            else 
            {
                console.error('Error en la solicitud:', response.status);
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    };

    const cambiarEstado = (setter) => (event) => {
        setter(event.target.value);
    };

    if (loggedIn) {
        return null;
    }

     return (
        <>
            <MainLayaout>
                <div className='formularioLogin flex justify-center items-center mt-52 font-bold '>
                    <div className="flex flex-col lg:flex-row bg-white bg-opacity-50 p-8 rounded-lg shadow-lg">
                        <div className="flex items-center justify-center lg:mr-8 mb-8 lg:mb-0">
                            <img src={logo} alt="Descripción de la imagen" className="w-48 h-auto" />
                        </div>
                        <div className="form-container">
                            <form onSubmit={handleSubmit}>
                                {!loginMode && (
                                    <>
                                        <label className="block mb-2">Usuario</label>
                                        <InputText value={usuario} onChange={cambiarEstado(setUsuario)} type='text' name='usuario' className="w-full p-2 mb-4 border border-gray-300 rounded" />
                                    </>
                                )}

                                <label className="block mb-2">Correo Electrónico</label>
                                <InputText value={email} onChange={cambiarEstado(setEmail)} type='email' name='correo' className="w-full p-2 mb-4 border border-gray-300 rounded" />
                                <label className="block mb-2">Contraseña</label>
                                <InputText value={password} onChange={cambiarEstado(setPassword)} type='password' name='contra' className="w-full p-2 mb-4 border border-gray-300 rounded" />
                                <Button type="submit" className="w-full bg-fuchsia-600 hover:bg-fuchsia-400 text-white font-semibold py-2 px-4 rounded  transition duration-300 justify-center">
                                    {loginMode ? 'Iniciar sesión' : 'Registrarse'}
                                </Button>
                            </form>
                            {errorMessage && (
                                <div className="text-red-500 mt-2">
                                    {errorMessage}
                                </div>
                            )}
                            <div className='mt-4 '>
                                <Button className="w-full  bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-300 transition duration-300 justify-center" onClick={() => setLoginMode(!loginMode)}>
                                    {loginMode ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

            </MainLayaout>
        </>
        
    );
}
