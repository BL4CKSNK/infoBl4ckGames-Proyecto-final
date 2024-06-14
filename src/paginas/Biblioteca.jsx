import { useEffect, useState } from "react";
import MainLayaout from "../Layaout/MainLayaout";
import { JUEGOS_PHP } from "../const/const";
import { Link } from "react-router-dom";
import Canvas from "../Components/Canvas";
import Paginacion from "../Components/Paginacion";
import Buscador from "../Components/Buscador";

export default function Biblioteca() {
    
    document.title = `Nuestros-juegos`;
    const [juegos, setJuegos] = useState([]);
    const [filteredJuegos, setFilteredJuegos] = useState([]);
    const [categoriasUnicas, setCategoriasUnicas] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    //Muestro los juegos  para poder filtrarlos
    useEffect(() => {
        fetch(JUEGOS_PHP)
            .then(response => response.text())
            .then(text => {
                const jsonText = text.substring(text.indexOf('['));
                try {
                    const data = JSON.parse(jsonText);
                    setJuegos(data);
                    setFilteredJuegos(data);
                    const categorias = data.reduce((acc, juego) => {
                        return [...acc, ...juego.Categorias];
                    }, []);
                    const categoriasSet = new Set(categorias);
                    const categoriasArray = [...categoriasSet];
                    setCategoriasUnicas(categoriasArray);
                } catch (error) {
                    console.error('Error al analizar JSON:', error);
                }
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
            });
    }, []);

    //boton del menu de filtros
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    //buscador
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        const filtered = juegos.filter(juego =>
            juego.Titulo.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredJuegos(filtered);
         setCurrentPage(1); 
    };
    //paginación

    const paginate = (juegos, currentPage, itemsPerPage) => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return juegos.slice(startIndex, startIndex + itemsPerPage);
    };


    const totalPages = Math.ceil(filteredJuegos.length / itemsPerPage);
    //cambiar de pagina
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <MainLayaout>
           <Buscador
                searchTerm={searchTerm}
                handleSearch={handleSearch}
            />

            <div className="mt-16 h-min ">
                <div className="flex justify-center lg:justify-start">
                    <Canvas 
                        juegos={juegos} 
                        setFilteredJuegos={setFilteredJuegos}
                        categoriasUnicas={categoriasUnicas}
                        isOpen={isOpen}
                        toggleSidebar={toggleSidebar}
                    />
                </div>
                <div className=" biblioteca flex flex-wrap gap-10 cursor-pointer text-white text-6xl mb-7 justify-center mt-10 font-bold ">
                    {paginate(filteredJuegos, currentPage, itemsPerPage).map(juego => (
                        <Link key={juego.idJuego} to={`/juego/${juego.idJuego}`} className="border border-gray-300 rounded-lg shadow-md w-96 overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                            <img src={juego.Imagen} alt={juego.Titulo} className="w-full h-36 object-cover relative border rounded-xl overflow-hidden" />
                            <div className="p-5 text-white flex justify-between">
                                <span className="mt-0 text-lg">{juego.Titulo}</span>
                                <span className="mt-0 text-lg">
                                    {typeof juego.Precio === 'number' 
                                        ? (juego.Precio * 1.21).toLocaleString('es-ES', { style: 'currency', currency: 'EUR' }) 
                                        : (parseFloat(juego.Precio) * 1.21).toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
                <Paginacion
                       totalPages={totalPages} 
                       currentPage={currentPage} 
                       handlePageChange={handlePageChange} 
                />
            </div>
        </MainLayaout>
    );
}
