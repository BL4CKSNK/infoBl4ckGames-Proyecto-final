import { useState, useEffect, useRef } from 'react';
import MainLayaout from '../Layaout/MainLayaout';
import LayaoutAdmin from '../Layaout/LayaoutAdmin';
import { INSERTAR_CATEGORIA, JUEGOS_PHP, OBTENER_CATEGORIA } from '../const/const';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function AdminFormCategoria() {
    const [juegos, setJuegos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [selectedJuego, setSelectedJuego] = useState('');
    const [selectedCategorias, setSelectedCategorias] = useState([]);
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

    useEffect(() => {
        fetch(OBTENER_CATEGORIA)
            .then(response => response.text())
            .then(data => {
                if (data === "No hay categorías") {
                    setCategorias([]);
                } else {
                    const categoriasArray = data.split(";").map(item => {
                        const [idCategoria, Nombre] = item.split(",");
                        return { idCategoria, Nombre };
                    });
                    setCategorias(categoriasArray);
                }
            })
            .catch(error => console.error('Error al obtener categorías:', error));
    }, []);

    const handleJuegoChange = (event) => {
        const selectedJuego = event.target.value;
        setSelectedJuego(selectedJuego);
    };

    const handleCategoriaChange = (event) => {
        const selectedCategoria = event.target.value;
        if (event.target.checked) {
            setSelectedCategorias([...selectedCategorias, selectedCategoria]);
        } else {
            setSelectedCategorias(selectedCategorias.filter(categoria => categoria !== selectedCategoria));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('idJuego', selectedJuego);
        selectedCategorias.forEach(categoria => {
            formData.append('idCategoria[]', categoria);
        });

        try {
            const response = await fetch(INSERTAR_CATEGORIA, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const text = await response.text();
                if (text.includes('success')) {
                    toast.current.show({ severity: 'success', summary: 'Éxito', detail: 'Categorías insertadas exitosamente', life: 3000 });
                    setSelectedJuego('');
                    setSelectedCategorias([]);
                } else {
                    toast.current.show({ severity: 'error', summary: 'Error', detail: text, life: 3000 });
                    console.error('Error al insertar categorías:', text);
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
                    <h1 className="text-2xl font-bold mb-4">Formulario de Inserción de Categorías</h1>
                    <form onSubmit={handleSubmit}>
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
                            <label className="block text-gray-700 text-sm font-bold mb-2">Categorías:</label>
                            {categorias.map((categoria, index) => (
                                <div key={categoria.idCategoria} className="mb-2">
                                    {index !== 0 && (
                                        <>
                                            <input
                                                type="checkbox"
                                                id={`categoria-${categoria.idCategoria}`}
                                                value={categoria.idCategoria}
                                                checked={selectedCategorias.includes(categoria.idCategoria)}
                                                onChange={handleCategoriaChange}
                                                className="mr-2"
                                            />
                                            <label htmlFor={`categoria-${categoria.idCategoria}`} className="text-gray-700">{categoria.Nombre}</label>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                        <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Insertar Categoría en el juego</Button>
                    </form>
                </LayaoutAdmin>
            </MainLayaout>
        </>
    );
}
