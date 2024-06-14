import LayaoutAdmin from "../Layaout/LayaoutAdmin";
import MainLayaout from "../Layaout/MainLayaout";
import { useEffect, useState, useRef } from "react";
import { EDITAR_JUEGO, JUEGOS_PHP } from "../const/const";
import { Toast } from 'primereact/toast';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function AdminEditJuego() {
    const [juegos, setJuegos] = useState([]);
    const [selectedJuegoId, setSelectedJuegoId] = useState('');
    const [selectedJuego, setSelectedJuego] = useState(null);
    const toast = useRef(null);
    const [formData, setFormData] = useState({
        Titulo: '',
        Descripcion: '',
        Precio: '',
        Recomendados: '',
        Minimos: '',
        Imagen: null,
        FechaLanzamiento: '' // Nuevo campo para la fecha de lanzamiento
    });

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

    useEffect(() => {
        if (selectedJuegoId) {
            const juego = juegos.find(juego => juego.idJuego === selectedJuegoId);
            setSelectedJuego(juego);
            setFormData({
                Titulo: juego.Titulo,
                Descripcion: juego.Descripcion,
                Precio: juego.Precio,
                Recomendados: juego.Recomendados,
                Minimos: juego.Minimos,
                Imagen: null,
                FechaLanzamiento: juego.FechaLanzamiento 
            });
        }
    }, [selectedJuegoId, juegos]);

    const handleJuegoChange = (event) => {
        const selectedJuegoId = event.target.value;
        setSelectedJuegoId(selectedJuegoId);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (event) => {
        setFormData({
            ...formData,
            Imagen: event.target.files[0]
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('Juego_ID', selectedJuegoId);
        formDataToSend.append('Titulo', formData.Titulo);
        formDataToSend.append('Descripcion', formData.Descripcion);
        formDataToSend.append('Precio', formData.Precio);
        formDataToSend.append('Recomendados', formData.Recomendados);
        formDataToSend.append('Minimos', formData.Minimos);
        if (formData.Imagen) {
            formDataToSend.append('Imagen', formData.Imagen);
        }
        formDataToSend.append('FechaLanzamiento', formData.FechaLanzamiento);

        fetch(EDITAR_JUEGO, {
            method: 'POST',
            body: formDataToSend
        })
        .then(response => response.text())
        .then(text => {
            const jsonText = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1);
            try {
                const data = JSON.parse(jsonText);
                if (data.success) {
                    toast.current.show({ severity: 'success', summary: 'Éxito', detail: 'Juego actualizado correctamente', life: 3000 });
                    setFormData({
                        Titulo: '',
                        Descripcion: '',
                        Precio: '',
                        Recomendados: '',
                        Minimos: '',
                        Imagen: null,
                        FechaLanzamiento: '' 
                    });
                    setSelectedJuegoId('');
                } else {
                    toast.current.show({ severity: 'error', summary: 'Error', detail: data.message, life: 3000 });
                }
            } catch (error) {
                console.error('Error al analizar JSON:', error);
                toast.current.show({ severity: 'error', summary: 'Error', detail: 'Error al analizar la respuesta del servidor', life: 3000 });
            }
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Error en la solicitud', life: 3000 });
        });
    };

    return (
        <>
            <MainLayaout>
                <LayaoutAdmin>
                    <Toast ref={toast} position="bottom-center" className=" text-white" />
                    <h1 className="text-2xl font-bold mb-4">Formulario de Edición de Juegos</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Juego:</label>
                            <select value={selectedJuegoId} onChange={handleJuegoChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option value="">Seleccione un juego</option>
                                {juegos.map(juego => (
                                    <option key={juego.idJuego} value={juego.idJuego}>
                                        {juego.Titulo}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {selectedJuego && (
                            <>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Título:</label>
                                    <InputText name="Titulo" value={formData.Titulo} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Descripción:</label>
                                    <textarea name="Descripcion" value={formData.Descripcion} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Precio:</label>
                                    <InputText name="Precio" value={formData.Precio} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Requisitos Recomendados:</label>
                                    <textarea name="Recomendados" value={formData.Recomendados} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Requisitos Mínimos:</label>
                                    <textarea name="Minimos" value={formData.Minimos} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Fecha de Lanzamiento:</label>
                                    <InputText type="date" name="FechaLanzamiento" value={formData.FechaLanzamiento} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Imagen:</label>
                                    <InputText type="file" onChange={handleFileChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>
                                <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Guardar cambios</Button>
                            </>
                        )}
                    </form>
                </LayaoutAdmin>
            </MainLayaout>
        </>
    );
}
