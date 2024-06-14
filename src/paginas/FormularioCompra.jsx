import { useState } from 'react';
import MainLayaout from "../Layaout/MainLayaout";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { INVENTARIO_USUARIO } from '../const/const';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useEffect } from 'react';
import tick from '../img/tick.gif'
import React from 'react';
import { TiCancel } from "react-icons/ti";
import { FaCheck } from "react-icons/fa";
import { ImHome } from "react-icons/im";

const FormularioCompra = () => {
    document.title = `Formulario-Compra`;
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const navigate = useNavigate();
    const [compraRealizada, setCompraRealizada] = useState(false);
    // Obtener los valores de los parámetros de la consulta
    const idUsuario = queryParams.get('idUsuario');
    const idCarrito = queryParams.get('idCarrito');
    const [totalCarrito, setTotalCarrito] = useState(0);
    const [juegosCarrito, setJuegosCarrito] = useState([]);
    const [errorCompra, setErrorCompra] = useState('');

  

    useEffect(() => {
        

        const juegos = [];
        // Iterar sobre los parámetros de consulta y buscar aquellos que comiencen con los prefijos adecuados
        for (const [key, value] of queryParams.entries()) {
            if (key.startsWith('imagen')) {
                const index = key.replace('imagen', '');
                const juego = {
                    imagen: value,
                    precio: queryParams.get('precio' + index),
                    titulo: queryParams.get('titulo' + index),
                    unidades: queryParams.get('unidades' + index),
                };
                juegos.push(juego);
            }
        }
        setJuegosCarrito(juegos);
        const total = queryParams.get('total');
        if (total) {
            setTotalCarrito(parseFloat(total));
        }
    }, []);


    const [visible, setVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // Estados para los campos del formulario
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [tarjeta, setTarjeta] = useState('');
    const [metodoPago, setMetodoPago] = useState('tarjeta');

    // Función de validación del formulario
    const validarFormulario = () => {
        if (nombre.trim() === '') {
            setErrorMessage('Por favor, escribe tu nombre');
            return false;
        }

        if (nombre.trim().length < 3) {
            setErrorMessage('El nombre debe tener al menos 3 caracteres');
            return false;
        }

        if (direccion.trim() === '') {
            setErrorMessage('Por favor, escribe tu dirección');
            return false;
        }

        if (direccion.trim().length < 5) {
            setErrorMessage('La dirección debe tener al menos 5 caracteres');
            return false;
        }

        if (tarjeta.trim() === '') {
            setErrorMessage('Por favor, escribe tu número de tarjeta');
            return false;
        }


        if (tarjeta.replace(/\s+/g, '').length !== 16) {
            setErrorMessage('El número de tarjeta debe tener 16 dígitos');
            return false;
        }

        return true;
    };

    const handleConfirm = () => {
        if (validarFormulario()) {
            setVisible(true);
        } else {
            setErrorMessage('Por favor, rellena todos los campos correctamente.');
        }
    };

    //función que verifica si los campos se realizaron correctamente me envia el formulario 
    //se añadira el producto al inventario del usuario
    const realizarCompra = async () => {
        if (!validarFormulario()) {
            setErrorMessage('Por favor, rellena todos los campos.');
            return;
        }
    
        const formData = new FormData();
        formData.append('idUsuario', idUsuario);
        formData.append('idCarrito', idCarrito);
        
        try {
            const response = await fetch(INVENTARIO_USUARIO, {
                method: 'POST',
                body: formData
            });
    
            if (!response.ok) {
                throw new Error(`Error al realizar la compra. Estado de respuesta ${response.status}`);
            }
    
            // Mostrar diálogo de compra realizada
            setCompraRealizada(true);
            setVisible(false);  
    
        } catch (error) {
            console.error('Error al realizar la compra:', error);
            setErrorCompra('Error al realizar la compra. Por favor, inténtalo de nuevo.');
        }
    };
    const footerContent = (
        <div className="flex justify-end space-x-4 p-5">
            <Button 
                label="Cancelar"  
                onClick={() => setVisible(false)} 
                className="p-button-text bg-red-700 hover:bg-red-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center space-x-2"
            >
                <TiCancel className='size-6' />
               
            </Button>
            <Button 
                label="Comprar" 
                icon="pi pi-check" 
                onClick={realizarCompra} 
                autoFocus 
                className="bg-green-700 hover:bg-green-300 text-white font-bold py-2 px-4 rounded flex items-center space-x-2"
            >
                <FaCheck  />
            
            </Button>
        </div>
    
    );

    return (
        <MainLayaout>
            <div className="max-w-lg mx-auto h-screen mt-40 font-bold">
                <form className="px-8 pt-6 pb-8 mb-4 bg-white bg-opacity-50 p-8 rounded-lg shadow-lg formularioCompra">
                    {errorMessage && <p className="text-red-500 font-bold mb-4">{errorMessage}</p>}
                    <div className="mb-4">
                        <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
                        <InputText
                            type="text"
                            id="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            className="w-full p-2 mb-4 border border-gray-300 rounded"
                            placeholder="Nombre completo"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="direccion" className="block text-gray-700 text-sm font-bold mb-2">Dirección</label>
                        <InputText
                            type="text"
                            id="direccion"
                            value={direccion}
                            onChange={(e) => setDireccion(e.target.value)}
                            className="w-full p-2 mb-4 border border-gray-300 rounded"
                            placeholder="Dirección de envío"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="tarjeta" className="block text-gray-700 text-sm font-bold mb-2">Número de tarjeta</label>
                        <InputText
                            type="text"
                            id="tarjeta"
                            value={tarjeta}
                            onChange={(e) => setTarjeta(e.target.value)}
                            className="w-full p-2 mb-4 border border-gray-300 rounded"
                            placeholder="Número de tarjeta"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="metodoPago" className="block text-gray-700 text-sm font-bold mb-2">Método de pago</label>
                        <select
                            id="metodoPago"
                            value={metodoPago}
                            onChange={(e) => setMetodoPago(e.target.value)}
                            className="w-full p-2 mb-4 border border-gray-300 rounded"
                        >
                            <option value="tarjeta">Tarjeta de crédito</option>
                            <option value="paypal">PayPal</option>
                        </select>
                    </div>
                    <Button
                        type="button"
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={handleConfirm}
                    >
                        Realizar compra
                    </Button>
                </form>
                <div className="card flex justify-content-center">
                    <Dialog visible={visible} style={{ width: '80vw' }} className='lg:p-8 sm:p-0 ' onHide={() => setVisible(false)} footer={footerContent}>
                            <div className='lg:p-8 sm:p-0'>
                                <h3 className='font-bold mb-3'>Confirmar Compra</h3>
                                <p className="font-bold mb-4">¿Estás seguro de que deseas realizar la compra con la siguiente información?</p>
                                <table className="w-full border-collapse border border-gray-300 mb-4">
                                    <tbody>
                                        <tr>
                                            <td className="p-2 font-bold border border-gray-300">Nombre:</td>
                                            <td className="p-2 border border-gray-300">{nombre}</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 font-bold border border-gray-300">Dirección:</td>
                                            <td className="p-2 border border-gray-300">{direccion}</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 font-bold border border-gray-300">Método de Pago:</td>
                                            <td className="p-2 border border-gray-300">{metodoPago === 'tarjeta' ? 'Tarjeta de crédito' : 'PayPal'}</td>
                                        </tr>
                                        {juegosCarrito.map((juego, index) => (
                                            <React.Fragment key={index}>
                                                <tr>
                                                    <td className="p-2 font-bold border border-gray-300">Título:</td>
                                                    <td className="p-2 border border-gray-300">{juego.titulo}</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-2 font-bold border border-gray-300">Unidades:</td>
                                                    <td className="p-2 border border-gray-300">{juego.unidades}</td>
                                                </tr>
                                            </React.Fragment>
                                        ))}
                                        <tr>
                                            <td className="p-2 font-bold border border-gray-300">Total de la compra:</td>
                                            <td className="p-2 border border-gray-300">{totalCarrito.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Dialog>
                        <Dialog 
                            visible={compraRealizada} 
                            style={{ width: '80vw' }} 
                            className='lg:p-8 sm:p-0 ' 
                            closable={false} 
                            footer={(
                                <div className="flex justify-end space-x-4 p-5">
                                    {errorCompra && <p className="text-red-500 font-bold">{errorCompra}</p>}
                                    {!errorCompra && (
                                       <Button 
                                       onClick={() => navigate('/')} 
                                       className="p-button-text bg-fuchsia-600 hover:bg-fuchsia-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center space-x-2"
                                   >
                                       <ImHome />
                                       <span>Ir al Inicio</span>
                                   </Button>
                                    )}
                                </div>
                            )}
                        >
                            <div className='lg:p-8 sm:p-0 flex flex-col items-center justify-center h-full'>
                                <h3 className='font-bold mb-3'> Compra Realizada</h3>
                                <p className="font-bold mb-4">¡La compra se ha realizado con éxito!</p>
                                <img src={tick} alt="Compra exitosa" className="mb-4" />
                            </div>
                        </Dialog>
                    </div>
                </div>
            </MainLayaout>
    );
};

export default FormularioCompra;
