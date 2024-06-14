import { ELIMINAR_JUEGOS, JUEGOS_PHP } from '../const/const';
import { useState, useEffect, useRef } from 'react';
import MainLayaout from '../Layaout/MainLayaout';
import LayaoutAdmin from '../Layaout/LayaoutAdmin';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
export default function AdminClearJuego() {
    const [juegos, setJuegos] = useState([]);
    const [selectedJuego, setSelectedJuego] = useState('');
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

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!selectedJuego) {
            console.error('Seleccione un juego antes de eliminar.');
            return;
        }

        try {
            const response = await fetch(`${ELIMINAR_JUEGOS}?idJuego=${selectedJuego}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                setSelectedJuego('');
                toast.current.show({ severity: 'success', summary: 'Éxito', detail: 'Juego eliminado correctamente', life: 3000 });
            } else {
                console.error('Error al eliminar el juego:', response.status);
                toast.current.show({ severity: 'error', summary: 'Error', detail: `Error al eliminar el juego: ${response.status}`, life: 3000 });
            }
        } catch (error) {
            console.error('Error de red:', error);
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Error de red', life: 3000 });
        }
    };
    return(
        <>
            <MainLayaout>
                <LayaoutAdmin>
                    <Toast ref={toast} position="bottom-center" className=" text-white" />
                        <h1 className="text-2xl font-bold mb-4">Formulario para borrar juego</h1>
                        <form onSubmit={handleSubmit} className='mb-6'>
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
                            <Button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Eliminar Juego</Button>
                        </form>
                  
                </LayaoutAdmin>
            </MainLayaout>
        </>
    )
}
