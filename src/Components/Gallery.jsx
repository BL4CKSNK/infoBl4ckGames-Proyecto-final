import  { useState } from 'react';
import { Button } from 'primereact/button';
const Gallery = ({ juego, esAdmin, handleEliminarImagen }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 cursor-pointer">
                {juego.Imagenes.map((imagen, index) => (
                    <div
                        key={index}
                        className="relative border bg-white rounded-xl overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                        onClick={() => openModal(imagen)}
                    >
                        <img
                            src={imagen}
                            alt={`Imagen ${index + 1}`}
                            className="h-36 w-full object-cover border rounded-xl shadow-lg"
                        />
                        {esAdmin && (
                            <Button
                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleEliminarImagen(juego.idImagenes[index]);
                                }}
                            >
                                X
                            </Button>
                        )}
                    </div>
                ))}
            </div>

            {modalOpen && selectedImage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="relative">
                        <Button
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                            onClick={closeModal}
                        >
                            X
                        </Button>
                        <img src={selectedImage} alt="Imagen Grande" className="max-h-screen max-w-full rounded-lg" />
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;
