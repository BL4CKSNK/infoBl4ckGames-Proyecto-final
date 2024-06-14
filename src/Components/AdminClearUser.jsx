import { useEffect, useState, useRef } from "react";
import MainLayaout from "../Layaout/MainLayaout";
import LayaoutAdmin from "../Layaout/LayaoutAdmin";
import { ELIMINAR_USUARIOS, MOSTRAR_USUARIOS } from "../const/const";
import { Toast } from 'primereact/toast';
import { Button } from "primereact/button";

export default function AdminClearUser() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const toast = useRef(null); 

    useEffect(() => {
        fetch(MOSTRAR_USUARIOS)
            .then(response => response.text())
            .then(data => {
                const jsonStartIndex = data.indexOf("[");
                const jsonEndIndex = data.lastIndexOf("]") + 1;
                const jsonString = data.slice(jsonStartIndex, jsonEndIndex);
                try {
                    const parsedData = JSON.parse(jsonString);
                    if (Array.isArray(parsedData) && parsedData.length > 0) {
                        setUsers(parsedData);
                    } else {
                        setUsers([]);
                    }
                } catch (error) {
                    console.error('Error al parsear datos:', error);
                    setUsers([]);
                }
            })
            .catch(error => console.error('Error al obtener usuarios:', error));
    }, []);

    const handleUserChange = (event) => {
        const selectedUser = event.target.value;
        setSelectedUser(selectedUser);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!selectedUser) {
            console.error('Seleccione un usuario antes de eliminar.');
            return;
        }

        try {
            const response = await fetch(`${ELIMINAR_USUARIOS}?idUsuarios=${selectedUser}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                setSelectedUser('');
                toast.current.show({ severity: 'success', summary: 'Éxito', detail: 'Usuario eliminado correctamente', life: 3000 });
            } else {
                console.error('Error al eliminar el usuario:', response.status);
                toast.current.show({ severity: 'error', summary: 'Error', detail: `Error al eliminar el usuario: ${response.status}`, life: 3000 });
            }
        } catch (error) {
            console.error('Error de red:', error);
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Error de red', life: 3000 });
        }
    };

    // Filtrar los usuarios excluyendo el usuario con ID uno
    const filteredUsers = users.filter(user => user.idUsuarios !== '1');

    return (
        <>
            <MainLayaout>
                <LayaoutAdmin>
                    <Toast ref={toast} position="bottom-center" className=" text-white" />
                    <h1 className="text-2xl font-bold mb-4">Formulario para borrar Usuario</h1>
                    <form onSubmit={handleSubmit} className='mb-6'>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Usuario:</label>
                            <select value={selectedUser} onChange={handleUserChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option value="">Seleccione un Usuario</option>
                                {filteredUsers.map(user => (
                                    <option key={user.idUsuarios} value={user.idUsuarios}>
                                        id:{user.idUsuarios} NombreUsuario: {user.NombreUsuario}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <Button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Eliminar Usuario</Button>
                    </form>
                </LayaoutAdmin>
            </MainLayaout>
        </>
    );
}
