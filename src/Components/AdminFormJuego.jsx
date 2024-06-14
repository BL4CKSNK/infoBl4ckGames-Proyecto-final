import { useState, useRef } from 'react';
import MainLayaout from '../Layaout/MainLayaout';
import LayaoutAdmin from '../Layaout/LayaoutAdmin';
import { Toast } from 'primereact/toast';
import { INSERTAR_JUEGO } from '../const/const';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export default function AdminFormJuego() {
    const [Titulo, setTitulo] = useState('');
    const [Descripcion, setDescripcion] = useState('');
    const [Imagen, setImagen] = useState(null);
    const [Precio, setPrecio] = useState('');
    const [Recomendados, setRecomendados] = useState('');
    const [FechaLanzamiento, setFechaLanzamiento] = useState('');
    const [Minimos, setMinimos] = useState('');
    const toast = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('Titulo', Titulo);
        formData.append('Descripcion', Descripcion);
        if (Imagen) {
            formData.append('Imagen', Imagen);
        }
        formData.append('Precio', Precio);
        formData.append('Recomendados', Recomendados);
        formData.append('FechaLanzamiento', FechaLanzamiento); 
        formData.append('Minimos', Minimos);

        try {
            const response = await fetch(INSERTAR_JUEGO, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const text = await response.text();
                const startIndex = text.indexOf('{');
                const jsonText = text.substring(startIndex);
                const data = JSON.parse(jsonText);

                if (data.success) {
                    toast.current.show({ severity: 'success', summary: 'Éxito', detail: 'Juego insertado exitosamente', life: 3000 });
                    setTitulo('');
                    setDescripcion('');
                    setImagen(null);
                    setPrecio('');
                    setRecomendados('');
                    setFechaLanzamiento(''); 
                    setMinimos('');
                } else {
                    toast.current.show({ severity: 'error', summary: 'Error', detail: data.message, life: 3000 });
                    console.error('Error:', data.message);
                }
            } else {
                toast.current.show({ severity: 'error', summary: 'Error', detail: `Error en la solicitud: ${response.status}`, life: 3000 });
                console.error('Error en la solicitud:', response.status);
            }
        } catch (error) {
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Error de red', life: 3000 });
            console.error('Error de red:', error);
        }
    };

    return (
        <>
            <MainLayaout>
                <LayaoutAdmin>
                    <Toast ref={toast} position="bottom-center" className=" text-white" />
                    <h1 className="text-2xl font-bold mb-4">Formulario de Inserción de Juegos</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Título:</label>
                            <InputText type="text" value={Titulo} onChange={(e) => setTitulo(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Descripción:</label>
                            <textarea value={Descripcion} onChange={(e) => setDescripcion(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Imagen:</label>
                            <InputText type="file" onChange={(e) => setImagen(e.target.files[0])} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Precio:</label>
                            <InputText type="number" step="0.01" value={Precio} onChange={(e) => setPrecio(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Requisitos Recomendados:</label>
                            <textarea value={Recomendados} onChange={(e) => setRecomendados(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Requisitos Mínimos:</label>
                            <textarea value={Minimos} onChange={(e) => setMinimos(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Fecha de Lanzamiento:</label>
                            <InputText type="date" value={FechaLanzamiento} onChange={(e) => setFechaLanzamiento(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Insertar Juego</Button>
                    </form>
                </LayaoutAdmin>
            </MainLayaout>
        </>
    );
}
