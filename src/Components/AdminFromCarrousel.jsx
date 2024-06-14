import { useState, useEffect, useRef } from 'react';
import MainLayaout from "../Layaout/MainLayaout";
import LayaoutAdmin from "../Layaout/LayaoutAdmin";
import { INSERTAR_IMAGEN_CARROUSEL, JUEGOS_PHP } from '../const/const';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
export default function AdminFromCarrousel() {
    const [juegos, setJuegos] = useState([]);
    const [selectedJuego, setSelectedJuego] = useState('');
    const [imagenes, setImagenes] = useState([]);
    const toast = useRef(null); 

    useEffect(() => {
        fetch(JUEGOS_PHP)
            .then(response => response.text())
            .then(text => {
                const jsonText = text.substring(text.indexOf('['));
                try {
                    const data = JSON.parse(jsonText);
                    setJuegos(data);
                } catch (error) {
                    console.error('Error al analizar JSON:', error);
                }
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
            });
    }, []);

    const handleJuegoChange = (event) => {
        const selectedJuego = event.target.value;
        setSelectedJuego(selectedJuego);
    };

    const handleImagenesChange = (event) => {
        setImagenes(event.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('idJuego', selectedJuego);
        for (let i = 0; i < imagenes.length; i++) {
            formData.append('imagenes[]', imagenes[i]);
        }

        try {
            const response = await fetch(INSERTAR_IMAGEN_CARROUSEL, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                setSelectedJuego('');
                setImagenes('');
                toast.current.show({ severity: 'success', summary: 'Éxito', detail: 'Imágenes insertadas correctamente', life: 3000 });
            } else {
                console.error('Error en la solicitud:', response.status);
                toast.current.show({ severity: 'error', summary: 'Error', detail: `Error en la solicitud: ${response.status}`, life: 3000 });
            }
        } catch (error) {
            console.error('Error de red:', error);
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Error de red', life: 3000 });
        }
    };
    return (
        <MainLayaout>
            <LayaoutAdmin>
                <Toast ref={toast} position="bottom-center" className=" text-white" />
                <h1 className="text-2xl font-bold mb-4">Formulario Insercion imagenes</h1>
                <form className='mb-6' onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Juego:</label>
                        <select value={selectedJuego} onChange={handleJuegoChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="">Seleccione un juego</option>
                            {juegos.map(juego => (
                                <option key={juego.idJuego} value={juego.idJuego}>
                                    {juego.Titulo}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Carrousel:</label>
                        <InputText 
                            type="file" 
                            name="imagenes" 
                            onChange={handleImagenesChange} 
                            multiple 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            required 
                        />
                    </div>
                    <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5">
                        Insertar Imágenes
                    </Button>
                   
                </form>
            </LayaoutAdmin>
           
        </MainLayaout>
    );
}
