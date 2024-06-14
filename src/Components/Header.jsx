import { NavLink, Navigate } from 'react-router-dom';
import { BsPersonCircle } from "react-icons/bs";
import { FaBasketShopping } from "react-icons/fa6";
import { useState, useEffect, useRef } from 'react';
import logo from '../img/LOGO.png';
import { MOSTRAR_DATOS_USUARIO } from '../const/const';
import { ImHome } from "react-icons/im";
import { SiGameandwatch } from "react-icons/si";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { FcAssistant } from "react-icons/fc";
import { Button } from 'primereact/button';
import { getCookie } from '../const/cookie';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [loggedOut, setLoggedOut] = useState(false);
    const [imagenPerfil, setImagenPerfil] = useState(null);
    // const idUsuario = localStorage.getItem('id');
    const idUsuario = getCookie('id');
    const menuRef = useRef(null);
    const userMenuRef = useRef(null);

    //Muestro los datos del usuario en cuestión en este caso es el nombre y la imagen de perfil
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

    //funciones del menu desplegable del boton de perfil
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsUserMenuOpen(false);
    };

    //btn para cerrar sesión
    const handleLogout = () => {
        deleteCookie('id'); // Eliminar la cookie 'id'
        setNombreUsuario(''); // Limpiar el nombre de usuario
        closeMenu(); // Cerrar el menú (asumiendo que es una función que tienes definida)
        setLoggedOut(true); // Establecer el estado de logout
    };
    
    
    const deleteCookie = (name) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    };

    //función para cerrar el menu desde cualquier parte de la pantalla
    const handleClickOutside = (event) => {
        if (
            menuRef.current && !menuRef.current.contains(event.target) &&
            userMenuRef.current && !userMenuRef.current.contains(event.target)
        ) {
            closeMenu();
        }
    };


    useEffect(() => {
        if (isMenuOpen || isUserMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen, isUserMenuOpen]);

    return (
        <header className="fixed top-0 w-full bg-white border-b-2 py-3 z-50 font-bold">
            <div className="mx-auto max-w-screen-xl lg:px-5">
                <div className="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-5 text-sm">
                    <div className="flex w-full lg:w-auto items-center justify-between">
                        <div className="flex-1">
                            <NavLink to="/" onClick={closeMenu} className="logo flex items-center text-lg hover:opacity-70">
                                <img src={logo} alt="Logo" className="w-40 h-30 mr-2" /> 
                            </NavLink>
                        </div>
                        <div className="lg:hidden">
                            <Button onClick={toggleMenu} className="text-gray-700 hover:text-black focus:outline-none">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </Button>
                        </div>
                    </div>

                    <nav ref={menuRef} className={`lg:flex lg:items-center ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
                        <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 list-none p-0 m-0 mt-10 lg:mt-0">
                            <li className="flex items-center">
                                <NavLink 
                                    to="/" 
                                    onClick={closeMenu} 
                                    className={({ isActive }) => (
                                        isActive
                                        ? "bg-fuchsia-600 text-white rounded-lg transition-colors duration-300 shadow-md"
                                        : "text-gray-700 hover:text-black hover:bg-white rounded-lg transition-colors duration-300"
                                    ) + " flex items-center text-lg py-2 px-4 "}
                                >
                                    <ImHome className="mr-2" />
                                    Inicio
                                </NavLink>
                            </li>
                            <li className="flex items-center">
                                <NavLink 
                                    to="/Biblioteca" 
                                    onClick={closeMenu} 
                                    className={({ isActive }) => (
                                        isActive
                                        ? "bg-fuchsia-600 text-white rounded-lg transition-colors duration-300 shadow-md"
                                        : "text-gray-700 hover:text-black hover:bg-white rounded-lg transition-colors duration-300"
                                    ) + " flex items-center text-lg py-2 px-4 "}
                                >
                                    <SiGameandwatch className="mr-2" />
                                    Nuestros Juegos
                                </NavLink>
                            </li>
                            <li className="flex items-center">
                                <NavLink 
                                    to="/Info" 
                                    onClick={closeMenu} 
                                    className={({ isActive }) => (
                                        isActive
                                        ? "bg-fuchsia-600 text-white rounded-lg transition-colors duration-300 shadow-md"
                                        : "text-gray-700 hover:text-black hover:bg-white rounded-lg transition-colors duration-300"
                                    ) + " flex items-center text-lg py-2 px-4 "}
                                >
                                    <MdOutlineVideogameAsset className="mr-2" />
                                    GameInfo
                                </NavLink>
                            </li>

                            <li>
                                {nombreUsuario ? (
                                    <div className="relative" ref={userMenuRef}>
                                        <Button onClick={toggleUserMenu} className="flex items-center text-gray-700 hover:text-black focus:outline-none text-lg py-2 px-4">
                                            {nombreUsuario === 'admin' ? <FcAssistant className="mr-1 text-xl" /> : (imagenPerfil ? <img src={imagenPerfil} alt="Imagen de perfil" className="mr-1 w-8 h-8 rounded-full" /> : <BsPersonCircle className="mr-1 text-xl" />)}
                                            {nombreUsuario === 'admin' ? 'Administrador' : nombreUsuario}
                                        </Button>
                                        {isUserMenuOpen && (
                                            <ul className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                                                <li>
                                                    <NavLink to={nombreUsuario === 'admin' ? '/Admin' : '/Perfil'} onClick={closeMenu} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                        {nombreUsuario === 'admin' ? 'Panel de Administrador' : 'Ir a mi perfil'}
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <Button onClick={handleLogout} className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">Cerrar sesión</Button>
                                                </li>
                                            </ul>
                                        )}
                                    </div>
                                ) : (
                                    <NavLink to="/login" onClick={closeMenu} className="flex items-center text-gray-700 hover:text-black text-lg py-2 px-4">
                                        <BsPersonCircle className="mr-1 text-xl" /> Login
                                    </NavLink>
                                )}
                            </li>
                            <li>
                                {nombreUsuario !== 'admin' && (
                                    <NavLink 
                                        to="/Carrito" 
                                        onClick={closeMenu} 
                                        className={({ isActive }) => (
                                            isActive
                                            ? "bg-fuchsia-600 text-white rounded-lg transition-colors duration-300 shadow-md"
                                            : "text-gray-700 hover:text-black hover:bg-white rounded-lg transition-colors duration-300"
                                        ) + " flex items-center text-lg py-2 px-4 "}
                                    >
                                        <FaBasketShopping className="mr-2" />
                                        Carrito
                                    </NavLink>
                                )}
                            </li>
                        </ul>
                    </nav>
                    {loggedOut && <Navigate to="/" />}
                </div>
            </div>
        </header>
    );
}

export default Header;
