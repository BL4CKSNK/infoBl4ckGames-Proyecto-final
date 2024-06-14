import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from '../img/LOGO.png'
import { ImHome } from "react-icons/im";
import { SiGameandwatch } from "react-icons/si";
import { MdOutlineVideogameAsset } from "react-icons/md";
const Footer = () => {
    return (
        <footer className=" bg-white py-6  font-bold mt-20  ">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="mb-4 lg:mb-0">
                        <NavLink to="/"  className="flex items-center text-lg hover:opacity-70" >
                            <img src={logo} alt="Logo" className="w-40 h-30 mr-2  " /> 
                        </NavLink>
                        <p className="text-sm">Tu fuente de noticias y juegos.</p>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:gap-8 mb-4 lg:mb-0">
                        <NavLink to="/" className="flex items-center hover:text-gray-400">
                            <ImHome className="mr-2" />
                            Inicio
                        </NavLink>
                        <NavLink to="/Biblioteca" className="flex items-center hover:text-gray-400">
                            <SiGameandwatch className="mr-2" />
                            Nuestros Juegos
                        </NavLink>
                        <NavLink to="/Info" className="flex items-center hover:text-gray-400">
                            <MdOutlineVideogameAsset className="mr-2" />
                            GameInfo
                        </NavLink>
                    </div>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p className="text-sm">&copy; 2024 infoBl4ckGames. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
