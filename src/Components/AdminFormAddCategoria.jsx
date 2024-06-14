import { useState, useRef } from "react";
import MainLayaout from "../Layaout/MainLayaout";
import LayaoutAdmin from "../Layaout/LayaoutAdmin";
import { INSERTAR_CATEGORIA_2 } from "../const/const";
import { Toast } from 'primereact/toast';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function AdminFormAddCategoria() {
    const [nombreCategoria, setNombreCategoria] = useState('');
    const toast = useRef(null); 

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('nombre', nombreCategoria);

        try {
            const response = await fetch(INSERTAR_CATEGORIA_2, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const text = await response.text();
                const startIndex = text.indexOf('{');
                const jsonText = text.substring(startIndex);
                const data = JSON.parse(jsonText);

                if (data.success) {
                    setNombreCategoria('');
                    toast.current.show({ severity: 'success', summary: 'Éxito', detail: 'Categoría insertada exitosamente', life: 3000 });
                } else {
                    console.error('Error:', data.message);
                    toast.current.show({ severity: 'error', summary: 'Error', detail: data.message, life: 3000 });
                }
            } else {
                console.error('Error en la solicitud:', response.status);
                toast.current.show({ severity: 'error', summary: 'Error', detail: `Error en la solicitud: ${response.status}`, life: 3000 });
            }
        } catch (error) {
            console.error('Error de red:', error);
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Error de red', life: 3000 });
        }
    };

    const handleNombreCategoriaChange = (event) => {
        setNombreCategoria(event.target.value);
    };

    return (
        <>
            <MainLayaout>
                <LayaoutAdmin>
                    <Toast ref={toast} position="bottom-center" className=" text-white" />
                        <h2 className="text-2xl font-bold mb-4">Formulario para insertar Categoria</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label htmlFor="nombreCategoria" className="block text-gray-700 text-sm font-bold mb-2">Nombre de la categoría:</label>
                                <InputText
                                    type="text"
                                    id="nombreCategoria"
                                    value={nombreCategoria}
                                    onChange={handleNombreCategoriaChange}
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Insertar Categoria</Button>
                        </form>
                  
                </LayaoutAdmin>
            </MainLayaout>
        </>
          
       
       
    );
}
