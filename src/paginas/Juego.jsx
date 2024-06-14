import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import { AÑADIR_CARRITO,  ELMINAR_CATEGORIA_JUEGO,  ELMINAR_IMAGEN_CARROUSEL,  JUEGOS_PHP, VALORAR_JUEGO } from '../const/const'; 
import MainLayaout from '../Layaout/MainLayaout';
import { Carousel } from 'primereact/carousel';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import { Button } from 'primereact/button';
import Comentarios from '../Components/Comentarios';
import { Rating } from "primereact/rating";
import Gallery from '../Components/Gallery';
import { getCookie } from '../const/cookie';

const Juego = () => {
    const { id } = useParams(); 
    const [juego, setJuego] = useState(null); 
    const [value, setValue] = useState(0);
    const toast = useRef(null);
    // const idUsuario = localStorage.getItem('id');
    const idUsuario = getCookie('id');
    // const [userRating, setUserRating] = useState(0); 
 
    useEffect(() => {
        Mostrarjuego()
        setValue(0);
        //  setUserRating(0);
    }, [id, idUsuario]); 
    
    //función para mostrar y filtrar los juegos 
    const Mostrarjuego =()=>{

        fetch(JUEGOS_PHP) 
            .then(response => response.text())
            .then(text => {
                const jsonText = text.substring(text.indexOf('['));
                try {
                    const data = JSON.parse(jsonText);
                    const juegoEncontrado = data.find(juego => juego.idJuego === id);
                    setJuego(juegoEncontrado);
                    setValue(juegoEncontrado.PuntuacionPromedio); 
                    // setUserRating(juegoEncontrado.Puntuacion); 
                    
                    if (!Array.isArray(juegoEncontrado.idCategorias)) {
                        juegoEncontrado.idCategorias = [];
                    }
                   
                } catch (error) {
                    console.error('Error al analizar JSON:', error);
                }
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
            })
    }
    
    //función para agregar el producto al carrito
    const handleAgregarAlCarrito = async () => {
        if (!juego) return;
        
        const formData = new FormData();
        formData.append('idJuego', juego.idJuego);
        formData.append('idUsuario', idUsuario);
    
        try {
            await fetch(AÑADIR_CARRITO, {
                method: 'POST',
                body: formData
            });
        } catch (error) {
            console.error('Error de red:', error);
        }
    };

    const handleRatingChange = (e) => {
        e.preventDefault();
        const newRating = e.value;
        setValue(newRating);
    
        // Verificar si hay un usuario logeado
        if (!idUsuario) {
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Debes iniciar sesión para puntuar este juego', life: 3000 });
            return;
        }
    
        // Si hay un usuario logeado, enviar la puntuación al servidor
        if (juego) {
            const juegoId = juego.idJuego;
            fetch(`${VALORAR_JUEGO}?idJuego=${juegoId}&idUsuario=${idUsuario}&puntuacion=${newRating}`, {
                method: 'GET',
            })
                .then(response => response.text())
                .then(() => {
                    toast.current.show({ severity: 'success', summary: 'Puntuación Actualizada', detail: `Puntuación actualizada a ${newRating} estrellas`, life: 2000 });
                    // Actualizar la puntuación en el estado local
                    setJuego(prevJuego => ({ ...prevJuego, PuntuacionPromedio: newRating }));
                })
                .catch(error => console.error('Error al actualizar la puntuación:', error));
        }
    };

    //funcion para elimnar la categoria esto solo lo podra hacer el administrador
    const handleEliminarCategoria = async (idCategoria) => {
        if (!juego) return;
        const data = {
            idUsuario: idUsuario,
            idJuego: juego.idJuego,
            idCategoria: idCategoria 
        };
    
        try {
            const response = await fetch(ELMINAR_CATEGORIA_JUEGO, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
    
            const result = await response.text(); 
    
            if (response.ok) {
                toast.current.show({ severity: 'success', summary: 'Éxito', detail: result.message, life: 3000 });
    
                // Actualiza las categorías en el estado local después de eliminarlas
                const newCategorias = juego.Categorias.filter((_, index) => juego.idCategorias[index] !== idCategoria);
                const newIdCategorias = juego.idCategorias.filter(id => id !== idCategoria);
                const updatedJuego = { ...juego, Categorias: newCategorias, idCategorias: newIdCategorias };
                setJuego(updatedJuego);
            } else {
                console.error('Error al eliminar la categoría:', result);
                toast.current.show({ severity: 'error', summary: 'Error', detail: result.message, life: 3000 });
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    };
    
    

//funcion para elimnar las imagenes del carrousel esto solo lo podra hacer el administrador
const handleEliminarImagen = async (idImagen) => {
    if (!juego) return;

    const data = {
        idJuego: juego.idJuego,
        idImagen: idImagen 
    };

    try {
        const response = await fetch(ELMINAR_IMAGEN_CARROUSEL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.text(); 

        if (response.ok) {
        
            toast.current.show({ severity: 'success', summary: 'Éxito', detail: result.message, life: 3000 });

            // Actualiza las imágenes en el estado local después de eliminarlas
            setJuego(prevJuego => {
                // Filtramos el array de IDs de imágenes para eliminar la que coincida con idImagen
                const newIdImagenes = prevJuego.idImagenes.filter(id => id !== idImagen);
                // Filtramos las imágenes para mantener solo las que aún tienen un ID en el array de IDs de imágenes
                const newImagenes = prevJuego.Imagenes.filter((_, index) => newIdImagenes.includes(prevJuego.idImagenes[index]));
                return {
                    ...prevJuego,
                    Imagenes: newImagenes,
                    idImagenes: newIdImagenes
                };
            });
        } else {
            console.error('Error al eliminar la imagen:', result.message);
            toast.current.show({ severity: 'error', summary: 'Error', detail: result.message, life: 3000 });
        }
    } catch (error) {
        console.error('Error de red:', error);
    }
};
    
    
    
    
    if (!juego) 
    {
        return <div>Cargando...</div>; 
    }

    const showInfo = () => {
        if(!idUsuario)
        {
            toast.current.show({severity:'warn', summary: 'Iniciar Sesión', detail:'Por favor, inicia sesión para agregar el juego al carrito', life: 2000});
        }
        else
        {
            toast.current.show({severity:'info', summary: 'Carrito', detail:'Juego añadido al Carrito ', life: 2000});
        }
        
    }
    const esAdmin = idUsuario && idUsuario === '1';

    return (
        <>
            <MainLayaout>
            <Toast ref={toast} position="bottom-center" className=" text-white" />
                <div className="flex flex-wrap mb-10">
                    <div className="w-full lg:w-1/2 md:w-full mt-8 px-4 arriba">
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                            <img className="h-60 w-full object-cover lg:h-96" src={juego.Imagen} alt={juego.Titulo} />
                            <div className="p-8">
                                <h2 className="block mt-1 text-lg leading-tight font-medium text-black">{juego.Titulo}</h2>
                                <p className="mt-2 text-gray-500 mb-4">{juego.Descripcion}</p>
                                
                                <div className="flex items-center mb-4 font-bold">
                                    <Rating value={value} onChange={handleRatingChange} cancel={false} />
                                    <p className="ml-4 text-gray-500">Puntuación: {juego.PuntuacionPromedio}</p>
                                </div>
                                <p className="text-gray-500 mb-4 font-bold">
                                    Lanzamiento:
                                    <span className="inline-block ml-3">
                                        {juego.FechaLanzamiento && new Date(juego.FechaLanzamiento).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </span>
                                </p>
                                
                                <p className="text-gray-500 mb-4 font-bold">
                                    Precio:
                                    <span className="inline-block ml-3">
                                        {typeof juego.Precio === 'number' 
                                            ? (juego.Precio * 1.21).toLocaleString('es-ES', { style: 'currency', currency: 'EUR' }) 
                                            : (parseFloat(juego.Precio) * 1.21).toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}
                                    </span>
                                </p>

                                <div className="flex flex-wrap mt-4">
                                {juego.Categorias && juego.Categorias.map((categoria, index) => (
                                    <div key={index} className="bg-indigo-500 text-white text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded flex items-center">
                                        <span>{typeof categoria === 'string' ? categoria.trim() : categoria.nombreCategoria}</span> 
                                        {esAdmin && (
                                            <Button 
                                                className="ml-2" 
                                                icon="pi pi-times" 
                                                onClick={() => {
                                                    handleEliminarCategoria(juego.idCategorias[index]);
                                                }}
                                            >
                                                X
                                            </Button>
                                        )}
                                    </div>
                                ))}

                                </div>
                                {!esAdmin && (
                                    <Button className="mt-4 bg-fuchsia-600 hover:bg-fuchsia-400 text-white font-bold py-2 px-4 rounded" severity="info" onClick={() => { showInfo(); handleAgregarAlCarrito(); }}>Agregar al Carrito</Button>
                                )}
                            </div>
                        </div>

                        <div className="mt-8">
                            {juego.Minimos && (
                                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                                    <div className="p-8">
                                        <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Requisitos Mínimos</h2>
                                        <ul className="mt-2 text-gray-500 list-disc list-inside">
                                            {juego.Minimos.split('\n').map((requisito, index) => (
                                                <li className="mb-2" key={index}>{requisito}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        <div className="mt-8">
                            {juego.Recomendados && (
                                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                                    <div className="p-8">
                                        <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Requisitos Recomendados</h2>
                                        <ul className="mt-2 text-gray-500 list-disc list-inside">
                                            {juego.Recomendados.split('\n').map((requisito, index) => (
                                                <li className="mb-2" key={index}>{requisito}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                        <div className="w-full lg:w-1/2 md:w-full mt-8 px-4  ">
                            <div className="carousel text-white border rounded-xl shadow-lg pt-2 abajo ">
                                <Carousel value={juego.Imagenes} numVisible={1} numScroll={1} circular autoplayInterval={4000}
                                    itemTemplate={(imagen) => <img src={imagen} alt="Imagen" className="h-72 w-full object-cover border bg-white rounded-xl"/>} />
                            </div>
                            <Gallery 
                                juego={juego} 
                                esAdmin={esAdmin} 
                                handleEliminarImagen={handleEliminarImagen} 
                            />

                        <Comentarios
                            toast={toast}
                        />
                    </div>
                </div> 
            </MainLayaout>

        </>
    );
};

export default Juego;
