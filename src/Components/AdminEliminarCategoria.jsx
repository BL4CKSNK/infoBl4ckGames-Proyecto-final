import { useState, useEffect, useRef } from "react";
import MainLayaout from "../Layaout/MainLayaout";
import LayaoutAdmin from "../Layaout/LayaoutAdmin";
import { ELIMINAR_CATEGORIA, OBTENER_CATEGORIA } from "../const/const";
import { Toast } from 'primereact/toast';
import { Button } from "primereact/button";

export default function AdminEliminarCategoria() {
    const [categorias, setCategorias] = useState([]);
    const [selectedCategoria, setSelectedCategoria] = useState('');
    const toast = useRef(null); 

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

    const handleCategoriaChange = (event) => {
        const selectedCategoria = event.target.value;
        setSelectedCategoria(selectedCategoria);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!selectedCategoria) {
            console.error('Seleccione una categoría antes de eliminar.');
            return;
        }

        try {
            const response = await fetch(`${ELIMINAR_CATEGORIA}?idCategoria=${selectedCategoria}`, {
                method: 'DELETE' 
            });

            if (response.ok) {
                setSelectedCategoria('');
                toast.current.show({ severity: 'success', summary: 'Éxito', detail: 'Categoría eliminada correctamente', life: 3000 });
            } else {
                console.error('Error al eliminar la categoría:', response.status);
                toast.current.show({ severity: 'error', summary: 'Error', detail: `Error al eliminar la categoría: ${response.status}`, life: 3000 });
            }
        } catch (error) {
            console.error('Error de red:', error);
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Error de red', life: 3000 });
        }
    };
    return (
        <>
            <MainLayaout>
                <LayaoutAdmin>
                    <Toast ref={toast} position="bottom-center" className=" text-white" />
                        <h1 className="text-2xl font-bold mb-4">Formulario para borrar Categoria</h1>
                            <form onSubmit={handleSubmit}  className='mb-6'>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Categoria:</label>
                                    <select value={selectedCategoria} onChange={handleCategoriaChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                        <option value="">Seleccione una Categoria</option>
                                        {categorias.map(categoria => (
                                            <option key={categoria.idCategoria} value={categoria.idCategoria}>
                                                {categoria.Nombre}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <Button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Eliminar Categoría</Button>
                            </form>
                        
                </LayaoutAdmin>
            </MainLayaout>
                
        </>
    )
}
