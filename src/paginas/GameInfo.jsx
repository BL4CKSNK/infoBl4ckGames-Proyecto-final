import { useEffect, useState, useRef } from "react";
import MainLayaout from "../Layaout/MainLayaout";
import Paginacion from "../Components/Paginacion";
import Buscador from "../Components/Buscador";
import { Toast } from 'primereact/toast';
import { API } from "../const/const";

const GameInfo = () => {
  document.title = `GameInfo`;
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const toast = useRef(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API);//llamo a mi archivo que hace como proxy  para acceder a los datos de la api
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGames(data);
        setSearchResults(data); // Inicialmente, los resultados de la búsqueda son todos los juegos
        
        // Mostrar el toast al cargar los juegos
        toast.current.show({severity:'info', summary: 'Info', detail:'Esta página es meramente informativa. ', life: 5000});
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Calcula el índice del último juego en la página actual
  const indexOfLastGame = currentPage * gamesPerPage;
  // Calcula el índice del primer juego en la página actual
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  // Obtiene los juegos de la página actual
  const currentGames = searchResults.slice(indexOfFirstGame, indexOfLastGame);

  // Cambia a la siguiente página
  const handlePageChange = pageNumber => setCurrentPage(pageNumber);

  // Actualiza el término de búsqueda
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const results = games.filter(game =>
      game.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(results);
    setCurrentPage(1); // Cambia a la primera página al realizar una nueva búsqueda
  };
  
  return (
    <>
       <MainLayaout>
       <Toast ref={toast} position="bottom-center" className=" text-white" />
            <Buscador
              searchTerm={searchTerm}
              handleSearch={handleSearch}
            />
            <div className="flex flex-wrap gap-10 justify-center mb-7  mt-28 font-bold">
              {currentGames.map((game, index) => (
                <div key={index} to={`/juego/${game.id}`} className="border border-gray-300 rounded-lg shadow-md w-96 overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer">
                  <img src={game.thumbnail} alt={game.title} className="w-full h-36 object-cover relative border rounded-xl overflow-hidden" />
                  <div className="p-5 text-white text-sm">
                    <h2 className="mt-0 mb-2 text-xl font-bold">{game.title}</h2>
                    <p className="mb-2 text-white">{game.short_description}</p>
                    <p className="mb-2 text-white">Genre: {game.genre}</p>
                    <p className="mb-2 text-white">Platform: {game.platform}</p>
                    <p className="mb-2 text-white">Publisher: {game.publisher}</p>
                    <p className="mb-2 text-white">Developer: {game.developer}</p>
                    <p className="mb-2 text-white">Release Date: {game.release_date}</p>
                  </div>
                </div>
              ))}
            </div>
            <Paginacion
              totalPages={Math.ceil(searchResults.length / gamesPerPage)}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
        </MainLayaout>
    </>
  );
};

export default GameInfo;
