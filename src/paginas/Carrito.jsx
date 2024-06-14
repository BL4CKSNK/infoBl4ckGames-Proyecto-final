import { useState, useEffect } from 'react';
import { Aumentar_Decrementar, ELIMINAR_DEL_CARRITO, JUEGOS_CARRO_PHP, MOSTRAR_DATOS_USUARIO } from '../const/const';
import MainLayaout from '../Layaout/MainLayaout';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { BsPersonCircle } from "react-icons/bs";
import Paginacion from '../Components/Paginacion';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import { Button } from 'primereact/button';
import { getCookie } from '../const/cookie';

const Carrito = () => {
    
    const [carrito, setCarrito] = useState([]);
    const [precioTotal, setPrecioTotal] = useState(0);
    // const idUsuario = localStorage.getItem('id');
    const idUsuario = getCookie('id');
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [nombreUsuario, setNombreUsuario] = useState('');
    document.title = `Carrito ${nombreUsuario}`;
    const [imagenPerfil, setImagenPerfil] = useState(null);
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 2;
    const toast = useRef(null);

    //función que verifica si el usuario esta en el localstorage y te muestra el carrito si no esta el usuario me envia al login
    const cargarCarrito = () => {
        if (!idUsuario) {
            console.error('No se encontró el ID del usuario en el localStorage');
            setRedirectToLogin(true);
            return;
        }
       
    

        //función que muestra el carrito en función al id del usuario
        fetch(`${JUEGOS_CARRO_PHP}?idUsuario=${idUsuario}`)
            .then(response => response.text())
            .then(text => {
                const jsonText = text.substring(text.indexOf('['));
                try {
                    const parsedData = JSON.parse(jsonText);
                    // Ordenar por ID para mantener el orden de inserción
                    parsedData.sort((a, b) => a.idJuego - b.idJuego);
                    setCarrito(parsedData);
                } catch (error) {
                    console.error('Error al analizar los datos JSON:', error);
                }
            })
            .catch(error => console.error('Error al cargar el carrito:', error));
    };

    // muestra los datos del usuario en este caso la imagen y el nombre
    useEffect(() => {
        fetch(`${MOSTRAR_DATOS_USUARIO}?idUsuario=${idUsuario}`)
            .then(response => response.text())
            .then(data => {
                const userData = JSON.parse(data.substring(data.indexOf("{"), data.lastIndexOf("}") + 1));
                setNombreUsuario(userData.nombreUsuario);
                setImagenPerfil(userData.imgPerfil);
            })
            .catch(error => {
                console.error('Error al obtener datos del usuario:', error);
            });
    }, [idUsuario]);

    useEffect(() => {
        cargarCarrito();
    }, []);

    //calculo el total del carrito en función de las unidades 
    useEffect(() => {
        let total = 0;
        carrito.forEach(item => {
            total += item.Precio * item.Unidades;
        });
        setPrecioTotal(total);
    }, [carrito]);

    //muestro la imagen y el titulo del producto
    const imagenTemplate = (img) => {
        return <img src={img.Imagen} alt={img.Titulo} className='w-32' />;
    };

    if (redirectToLogin) {
        return <Navigate to="/login" />;
    }
  
    //función para actulizar las unidades del carrito
    const actualizarCantidad = (idJuego, incremento) => {
        const formData = new FormData();
        formData.append('idJuego', idJuego);
        formData.append('idUsuario', idUsuario);
        formData.append('incremento', incremento);

        fetch(Aumentar_Decrementar, {
            method: 'POST',
            body: formData
        })
            .then(response => response.text())
            .then(data => {
                const jsonStartIndex = data.indexOf('{');
                const jsonData = data.substring(jsonStartIndex);
                return JSON.parse(jsonData);
            })
            .then(data => {
                if (data.success) {
                    cargarCarrito();
                } else {
                    console.error('Error:', data.message);
                }
            })
            .catch(error => console.error('Error al actualizar cantidad:', error));
    };


    //función para eliminar el producto del carrito
    const EliminarDelCarrito = (idJuego) => {
        const formData = new FormData();
        formData.append('idJuego', idJuego);
        formData.append('idUsuario', idUsuario);

        fetch(ELIMINAR_DEL_CARRITO, {
            method: 'POST',
            body: formData
        })
            .then(response => response.text())
            .then(data => {
                const jsonStartIndex = data.indexOf('{');
                const jsonData = data.substring(jsonStartIndex);
                return JSON.parse(jsonData);
            })
            .then(data => {
                if (data.success) {
                    const nuevoCarrito = carrito.filter(item => item.idJuego !== idJuego);
                    setCarrito(nuevoCarrito);

                    if (nuevoCarrito.length === 0) {
                        setPrecioTotal(0);
                    } else {
                        const totalPagesAfterDeletion = Math.ceil(nuevoCarrito.length / productsPerPage);
                        if (currentPage > totalPagesAfterDeletion) {
                            setCurrentPage(totalPagesAfterDeletion);
                        }
                    }
                } else {
                    console.error('Error:', data.message);
                }
            })
            .catch(error => console.error('Error al eliminar del carrito:', error));
    };

    //Esta función recoge los datos del carrito y los envia al formulario de compra
    const handleCompra = () => {
        if (carrito.length === 0) {
            // Mostrar el toast si el carrito está vacío
            toast.current.show({
                severity: 'error',
                summary: 'Error',
                detail: 'No tienes productos en el carrito',
                life: 3000
            });
        } else {
            // Preparar los parámetros para la compra
            const queryParams = new URLSearchParams();
            queryParams.append('idUsuario', idUsuario);
            queryParams.append('idCarrito', carrito[0].idCarrito);
            for (let i = 0; i < carrito.length; i++) {
                queryParams.append('imagen' + i, carrito[i].Imagen);
                queryParams.append('precio' + i, carrito[i].Precio);
                queryParams.append('titulo' + i, carrito[i].Titulo);
                queryParams.append('unidades' + i, carrito[i].Unidades);
                queryParams.append('idJuego' + i, carrito[i].idJuego);
            }
            queryParams.append('total', precioTotal * 1.21);
    
            // Navegar al formulario de compra si hay productos en el carrito
            navigate(`/FormularioCompra?${queryParams.toString()}`);
        }
    };
    //Paginación
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = carrito.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(carrito.length / productsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <MainLayaout>
            <Toast ref={toast} position="bottom-center" className=" text-white" />
                <div className="lg:w-full bg-gray-100 p-6 shadow-lg rounded-lg mt-36">
                    <div className="flex items-center">
                        <span className="font-bold text-2xl mr-2">Bienvenido a tu carrito, {nombreUsuario}</span>
                        {imagenPerfil ? (
                            <img src={imagenPerfil} alt="Imagen de perfil" className="w-10 h-10 rounded-full" />
                        ) : (
                            <BsPersonCircle className="text-xl" />
                        )}
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row mb-96 mt-10">
                    <div className="lg:w-1/2 p-6 bg-gray-100">
                        {carrito.length === 0 ? (
                            <div className="mt-8 p-6 bg-white shadow-lg rounded-lg text-center text-lg font-semibold">
                                Carrito vacío
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-6 mt-7">
                                {currentProducts.map((item, index) => (
                                    <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                                        <div className="text-center mb-4">
                                            <h3 className="text-lg font-semibold">{item.Titulo}</h3>
                                        </div>
                                        <div className="flex justify-center mb-4">
                                            {imagenTemplate(item)}
                                        </div>
                                        <div className="flex justify-between items-center mb-4">
                                            <Button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => actualizarCantidad(item.idJuego, 1)}>+</Button>
                                            <span className="mx-2"> Cantidad:{item.Unidades}</span>
                                            <Button className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" onClick={() => actualizarCantidad(item.idJuego, -1)}>-</Button>
                                        </div>
                                        <div className="text-center text-lg font-semibold">
                                            {((item.Unidades * item.Precio) * 1.21).toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}
                                        </div>
                                        <Button className='bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded' onClick={() => EliminarDelCarrito(item.idJuego)}>Eliminar del carrito</Button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="lg:w-1/2 p-6 bg-gray-100">
                        <div className="bg-white shadow-lg rounded-lg mt-8 p-10">
                            {carrito.map((item, index) => (
                                <div key={index} className="flex justify-end items-center mt-4">
                                    <span className="text-lg font-bold mr-4">{item.Titulo} x {item.Unidades}:</span>
                                    <span className="text-lg font-bold">{(item.Precio * item.Unidades).toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}</span>
                                </div>
                            ))}
                            <div className="flex justify-end items-center mt-4">
                                <span className="text-lg font-bold mr-4">Subtotal:</span>
                                <span className="text-lg font-bold">{precioTotal.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}</span>
                            </div>
                            <div className="flex justify-end items-center mt-4">
                                <span className="text-lg font-bold mr-4">IVA (21%):</span>
                                <span className="text-lg font-bold">{(precioTotal * 0.21).toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}</span>
                            </div>
                            <div className="flex justify-end items-center mt-4">
                                <span className="text-lg font-bold mr-4">Total:</span>
                                <span className="text-lg font-bold">{(precioTotal * 1.21).toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}</span>
                            </div>
                            <Button
                                type="button"
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                onClick={handleCompra}
                            >
                                Realizar compra
                            </Button>
                        </div>
                        <Paginacion
                            totalPages={totalPages}
                            currentPage={currentPage}
                            handlePageChange={handlePageChange}
                        />
                    </div>
                </div>
              
            </MainLayaout>
        </>
    );
};

export default Carrito;
