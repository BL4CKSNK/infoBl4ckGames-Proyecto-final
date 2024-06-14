import { useState } from 'react';
import MainLayaout from '../Layaout/MainLayaout';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import { ACTUALIZAR_RUTA_IMAGEN, ELIMINAR_IMAGEN, MOSTRAR_DATOS_USUARIO, MOSTRAR_INVENTARIO, PERFIL } from '../const/const';
;

const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
};
export default function Perfil() {

   
    const [imagenPerfil, setImagenPerfil] = useState(null); 
    const [nombreUsuario, setNombreUsuario] = useState(''); 
    document.title = `Perfil ${nombreUsuario}`; 
    const [correoUsuario, setCorreoUsuario] = useState(''); 
    // const idUsuario = localStorage.getItem('id'); 
    const idUsuario = getCookie('id'); // Obtener el ID del usuario desde la cookie
    const [archivoSeleccionado, setArchivoSeleccionado] = useState(null);
    const [inventarioUsuario, setInventarioUsuario] = useState([]); 
    const toast = useRef(null);
  
    // obtener datos del usuario e inventario
    useEffect(() => {
       
            // Si hay un ID de usuario, carga los datos del usuario e inventario
            fetch(`${MOSTRAR_DATOS_USUARIO}?idUsuario=${idUsuario}`)
                .then(response => response.text())
                .then(data => {
                    // Extracción y parseo de los datos JSON del usuario
                    const userData = JSON.parse(data.substring(data.indexOf("{"), data.lastIndexOf("}") + 1));
                    // Actualización de los estados con los datos del usuario
                    setNombreUsuario(userData.nombreUsuario);
                    setCorreoUsuario(userData.correo);
                    setImagenPerfil(userData.imgPerfil);
                })
                .catch(error => {
                    console.error('Error al obtener datos del usuario:', error);
                });

            // obtener el inventario del usuario
            fetch(`${MOSTRAR_INVENTARIO}?idUsuario=${idUsuario}`)
                .then(response => response.text())
                .then(data => {
                    const startIndex = data.indexOf("[");
                    const endIndex = data.lastIndexOf("]") + 1;
                    const jsonData = data.substring(startIndex, endIndex);
                    const inventoryData = JSON.parse(jsonData);

                    setInventarioUsuario(inventoryData);
                })
                .catch(error => {
                    console.error('Error al obtener el inventario del usuario:', error);
                });
        
    }, [idUsuario]); 
    
    //  cambio de archivo
    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Obtiene el primer archivo seleccionado
        const imageUrl = URL.createObjectURL(file); // Crea una URL para la vista previa de la imagen
        setImagenPerfil(imageUrl); // Actualiza el estado de la imagen de perfil 
        setArchivoSeleccionado(file); // Actualiza el estado del archivo seleccionado
    };
    
    // función de envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); 
    
        const formData = new FormData(); 
        formData.append('imgPerfil', archivoSeleccionado); 
        formData.append('idUsuarios', idUsuario); 
    
        try {
            const response = await fetch(PERFIL, {
                method: 'POST',
                body: formData
            });
    
            if (response.ok) {
                const text = await response.text();
                const startIndex = text.indexOf('{');
                const jsonText = text.substring(startIndex);
                const data = JSON.parse(jsonText);
    
                if (data.success) {
                    // Actualiza la ruta de la imagen de perfil con la nueva ruta
                    setImagenPerfil(ACTUALIZAR_RUTA_IMAGEN + data.rutaImagen);
                    
                    // Recarga la página después de actualizar la imagen
                    window.location.reload(false);
                } else {
                    toast.current.show({
                        severity: 'error',
                        summary: 'Error',
                        detail: data.message,
                        life: 3000
                    });
                    console.error('Error:', data.message);
                }
            } else {
                console.error('Error en la solicitud:', response.status);
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    };
    
    // función para eliminar la foto de perfil
    const handleDeletePhoto = async () => {
        try {
            const response = await fetch(ELIMINAR_IMAGEN, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify({ idUsuario: idUsuario }),
            });
    
            if (response.ok) 
            {
                setImagenPerfil(null); 
                window.location.reload(false); 
            } 
            else 
            {
                console.error('Error al eliminar la foto de perfil:', response.statusText);
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    };

    
    
    return (
        <>
            <MainLayaout>
                <Toast ref={toast} position="bottom-center" className=" text-white" />
                    <div className=" perfil mt-28 p-6  rounded-lg shadow-xl relative text-white font-bold  mb-96  ">
                        <h1 className="text-2xl font-bold mb-4 flex justify-center">Perfil de Usuario</h1>
                        <div className="flex items-center justify-center gap-16 mb-4">
                        <div className="relative mb-6">
                            {imagenPerfil && (
                                <div className="relative group">
                                    <img src={imagenPerfil} alt="Imagen de perfil" className="rounded-full w-40 h-40 object-cover transition duration-300 ease-in-out transform group-hover:opacity-80 hover:shadow-lg" />
                                    <InputText
                                        type="file"
                                        onChange={handleFileChange}
                                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                                    />
                                    <Button
                                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDeletePhoto();
                                        }}
                                    >
                                        X
                                    </Button>
                                </div>
                            )}
                            {!imagenPerfil && (
                                <div>
                                    <label className="block text-sm font-bold mb-5">Seleccionar imagen de perfil:</label>
                                    <InputText
                                        type="file"
                                        onChange={handleFileChange}
                                        className="rounded-full w-40 h-40 object-cover transition duration-300 ease-in-out transform group-hover:opacity-80 hover:shadow-lg bg-white"
                                    />
                            </div>
                            )}
                        </div>
                        <div>
                            <form onSubmit={handleSubmit} >
                                <div className="mb-8">
                                    <label className="block text-sm font-bold mb-2">Nombre de Usuario:</label>
                                    <p>{nombreUsuario}</p>
                                </div>
                                <div className="mb-8">
                                    <label className="block  text-sm font-bold mb-2">Correo Electrónico:</label>
                                    <p>{correoUsuario}</p>
                                </div>
                                {imagenPerfil && (
                                    <Button
                                        type="submit"
                                        className=" bg-fuchsia-600 hover:bg-fuchsia-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        Actualizar Perfil
                                    </Button>
                                )}
                            </form>
                        </div>
                    </div>

                        <h2 className="text-xl font-bold flex justify-center mt-10 mb-10">Inventario:</h2>
                        <div className="flex flex-wrap gap-10 justify-center cursor-pointer  font-bold">
                            {inventarioUsuario.map(juego => (
                                <Link key={juego.idJuego} to={`/juego/${juego.idJuego}`} className="border border-gray-300 rounded-lg shadow-md w-48 overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                                    <img src={juego.Imagen} alt={juego.Titulo} className="w-full h-20   object-cover relative border rounded-xl overflow-hidden" />
                                    <div className="p-5  ">
                                        <h3 className="mt-0 text-sm">{juego.Titulo}</h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </MainLayaout>

        </>
    );
}
