import { useState, useEffect } from 'react';
import { JUEGOS_PHP } from '../const/const';
import MainLayaout from '../Layaout/MainLayaout';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import Paginacion from '../Components/Paginacion';

export default function Principal() {
    document.title = `infoBl4ckGames`;
    const [juegos, setJuegos] = useState([]);
    const [itemActive, setItemActive] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9; //muestro 9 juegos por pagina
    //funcion para mostrar todos los juegos 
    useEffect(() => {
        fetch(JUEGOS_PHP)
            .then(response => response.text())
            .then(text => {
                const jsonText = text.substring(text.indexOf('['));
                try {
                    const data = JSON.parse(jsonText);
                    // console.log('Datos parseados:', data);
                    setJuegos(data);
                } catch (error) {
                    console.error('Error al analizar JSON:', error);
                }
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
            });
    }, []);

    // Verificar si hay juegos con puntuación mayor que 0
    const juegosConPuntuacion = juegos.filter(juego => juego.PuntuacionPromedio > 0);

    // Si hay juegos con puntuación mayor que 0, los ordenamos por puntuación
    const juegosMostrados = juegosConPuntuacion.length > 0 
        ? juegosConPuntuacion.slice().sort((a, b) => b.PuntuacionPromedio - a.PuntuacionPromedio)
        : juegos;

    //para mostrar la cantidad de juegos en el carrousel principal
    const juegosEnSlider = juegosMostrados.slice(0, 4);

    useEffect(() => {
        const sliderInterval = setInterval(() => {
            setItemActive(prevItemActive => (prevItemActive + 1) % juegosEnSlider.length);
        }, 5000);

        // Limpiar el intervalo al desmontar el componente
        return () => clearInterval(sliderInterval);
    }, [juegosEnSlider.length]);

    function showSlider(index) {
        setItemActive(index);
    }

    const paginate = (juegos, currentPage, itemsPerPage) => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return juegos.slice(startIndex, startIndex + itemsPerPage);
    };

    const totalPages = Math.ceil(juegosMostrados.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <MainLayaout>
                <div className="h-screen mt-28">
                    <div className="slider h-full relative">
                        <div className="list h-full relative font-bold">
                            {juegosEnSlider.map((juego, index) => (
                                <div
                                    key={juego.idJuego}
                                    className={`item absolute inset-0 overflow-hidden opacity-0 transition duration-500 ${index === itemActive ? 'active opacity-100 z-10' : ''}`}
                                >
                                    <img src={juego.Imagen} alt={juego.Titulo} className="w-full h-full object-cover transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl border border-gray-300 rounded-lg" />
                                    <div className="content absolute left-1/2 top-1/2 lg:top-1/4 lg:left-10 transform -translate-x-1/2 -translate-y-1/2 lg:transform-none w-11/12 lg:w-auto max-w-lg p-4 bg-black bg-opacity-70 rounded-md">
                                        <p className="lg:text-lg text-white text-center lg:text-left">
                                            {juego.Descripcion}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="arrows absolute top-1/3 right-10 z-20">
                            <Button onClick={() => setItemActive(prevItemActive => (prevItemActive - 1 + juegosEnSlider.length) % juegosEnSlider.length)} className="bg-gray-300 border-none w-10 h-10 rounded-full text-xl text-gray-800 transition duration-500 hover:bg-gray-400 hover:text-black justify-center">&lt;</Button>
                            <Button onClick={() => setItemActive(prevItemActive => (prevItemActive + 1) % juegosEnSlider.length)} className="bg-gray-300 border-none w-10 h-10 rounded-full text-xl text-gray-800 transition duration-500 hover:bg-gray-400 hover:text-black justify-center">&gt;</Button>
                        </div>
                        <div className="thumbnail absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex gap-4 w-full px-4 sm:px-8 md:px-12 lg:px-16 justify-center sm:justify-end cursor-pointer ">
                            {juegosEnSlider.map((juego, index) => (
                                <div
                                    key={juego.idJuego}
                                    className={`item w-28 sm:w-32 md:w-36 lg:w-40 h-40 sm:h-48 md:h-52 lg:h-56 filter brightness-50 transition duration-500 border border-gray-300 rounded-lg shadow-md overflow-hidden transform ease-in-out hover:scale-105 hover:shadow-2xl ${index === itemActive ? 'active brightness-150' : ''}`}
                                    onClick={() => showSlider(index)}
                                >
                                    <img src={juego.Imagen} alt={juego.Titulo} className="w-full h-full object-cover rounded-md" />
                                    <div className="content absolute inset-0 flex items-center justify-center px-2 pb-2">
                                        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white text-center">{juego.Titulo}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className=" cartas flex flex-col items-center gap-10 cursor-pointer font-bold mt-16 mb-10">
                    <h2 className="text-white text-4xl md:text-5xl lg:text-6xl mb-7 font-bold text-center">Mejor valoración</h2>
                    <div className="flex flex-wrap gap-10 justify-center mb-10">
                        {paginate(juegosMostrados, currentPage, itemsPerPage).map(juego => (
                            <Link key={juego.idJuego} to={`/juego/${juego.idJuego}`} className="border border-gray-300 rounded-lg shadow-md w-96 overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                                <img src={juego.Imagen} alt={juego.Titulo} className="w-full h-36 object-cover relative border rounded-xl overflow-hidden" />
                                <div className="p-5 text-white">
                                    <h3 className="mt-0 text-lg">{juego.Titulo}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                    {juegosMostrados.length > itemsPerPage && (
                        <Paginacion 
                            totalPages={totalPages} 
                            currentPage={currentPage} 
                            handlePageChange={handlePageChange} 
                        />
                    )}
                </div>
            </MainLayaout>
        </>
    );
}
