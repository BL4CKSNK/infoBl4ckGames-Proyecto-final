import { Button } from "primereact/button";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

const Paginacion = ({ totalPages, currentPage, handlePageChange }) => {


    if (totalPages <= 1) return null;
      const startPage = Math.floor((currentPage - 1) / 4) * 4 + 1;
      const endPage = Math.min(startPage + 3, totalPages);

    return (
        
        <div className="flex justify-center mt-20 mb-12 font-bold">
            {/* Botón de flecha hacia atrás */}
            <Button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 mx-1 ${currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gray-300 text-black'}`}>
                <FaArrowCircleLeft />
            </Button>

            {/* Números de página */}
            {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                <Button
                    key={index + startPage}
                    onClick={() => handlePageChange(index + startPage)}
                    className={`px-4 py-2 mx-1 ${currentPage === index + startPage ? 'bg-black text-white' : 'bg-gray-300 text-black'}`}>
                    {index + startPage}
                </Button>
            ))}

            <Button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 mx-1 ${currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gray-300 text-black'}`}>
                <FaArrowCircleRight />
            </Button>
        </div>
    
    );

};

export default Paginacion;