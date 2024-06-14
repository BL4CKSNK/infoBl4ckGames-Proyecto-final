import { useState, useEffect } from "react";
import { EDITAR_COMENTARIOS, ELIMINAR_COMENTARIOS, ENVIAR_COMENT, MOSTRAR_COMENTARIOS, MOSTRAR_DATOS_USUARIO, VALORAR_COMENTARIOS } from "../const/const";
import { useParams } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { Button } from "primereact/button";
import { FcAssistant } from "react-icons/fc";
import { getCookie } from "../const/cookie";

export default function Comentarios({toast}) {
    
    const [comentario, setComentario] = useState('');
    const [comentarios, setComentarios] = useState([]);
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [newCommentText, setNewCommentText] = useState('');
    const { id } = useParams();
    const idUsuario = getCookie('id');
    const isAdmin = getCookie('id') === '1';
    const [isValued, setIsValued] = useState(false);

    useEffect(() => {
        mostrarComen();
    }, [id]);

    const mostrarComen = () => {
        fetch(`${MOSTRAR_COMENTARIOS}?idJuego=${id}`)
            .then(response => response.text())
            .then(text => {
                const jsonText = text.substring(text.indexOf('['));
                try {
                    const data = JSON.parse(jsonText);
                    const comentariosOrdenados = data.reverse();
                    setComentarios(comentariosOrdenados);
                } catch (error) {
                    console.error('Texto de respuesta:', text);
                }
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
            });
    };

    useEffect(() => {
        fetch(`${MOSTRAR_DATOS_USUARIO}?idUsuario=${idUsuario}`)
            .then(response => response.text())
            .then(data => {
                const userData = JSON.parse(data.substring(data.indexOf("{"), data.lastIndexOf("}") + 1));
                setNombreUsuario(userData.nombreUsuario);
            })
            .catch(error => {
                console.error('Error al obtener datos del usuario:', error);
            });
    }, []);

    const handleComentarioChange = (e) => {
        setComentario(e.target.value);
    };

    const handleSubmitComentario = async (event) => {
        event.preventDefault();

        if (!comentario.trim()) {
            console.error('Por favor, escribe un comentario antes de enviar.');
            return;
        }

        const datos = new FormData();
        datos.append('usuario', nombreUsuario);
        datos.append('comentario', comentario);
        datos.append('idJuego', id);
        
        if (!idUsuario) {
            toast.current.show({ severity: 'warn', summary: 'Iniciar Sesión', detail: 'Por favor, inicia sesión para comentar', life: 3000 });
            return;
        }

        try {
            const response = await fetch(ENVIAR_COMENT, {
                method: 'POST',
                body: datos
            });

            if (response.ok) {
                const text = await response.text();
                if (text.includes('success')) {
                    setComentario('');
                    mostrarComen();
                } else {
                    console.error('Error:', text);
                }
            } else {
                console.error('Error en la solicitud:', response.status);
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmitComentario(e);
        }
    };

    const handleDeleteComentario = async (idComentario) => {
        try {
            const response = await fetch(`${ELIMINAR_COMENTARIOS}?idComentario=${idComentario}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setComentarios(comentarios.filter(comentario => comentario.idComentario !== idComentario));
            } else {
                console.error('Error en la solicitud:', response.status);
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    };

    const handleEditComment = async (idComentario, newText) => {
        const editedComments = comentarios.map(comment => {
            if (comment.idComentario === idComentario) {
                return { ...comment, TextoComentario: newText };
            }
            return comment;
        });
        setComentarios(editedComments);
        try {
            const response = await fetch(`${EDITAR_COMENTARIOS}?idComentario=${idComentario}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ texto: newText })
            });
            if (!response.ok) {
                console.error('Error en la solicitud:', response.status);
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    };

    const handleEditButtonClick = (idComentario) => {
        setEditingCommentId(idComentario);
        const commentToEdit = comentarios.find(comment => comment.idComentario === idComentario);
        setNewCommentText(commentToEdit.TextoComentario);
    };

    const handleCancelEdit = () => {
        setEditingCommentId(null);
        setNewCommentText('');
    };

    const handleSaveEdit = (idComentario) => {
        if (newCommentText.trim() === '') {
            setEditingCommentId(null);
            setNewCommentText('');
        } else {
            handleEditComment(idComentario, newCommentText);
            setEditingCommentId(null);
            setNewCommentText('');
        }
    };

    const handleValorarComentario = async (idComentario) => {
        if (!idUsuario) {
            toast.current.show({ severity: 'warn', summary: 'Iniciar Sesión', detail: 'Por favor, inicia sesión para valorar', life: 3000 });
            return;
        }

        try {
            const response = await fetch(`${VALORAR_COMENTARIOS}?idComentario=${idComentario}&idUsuario=${idUsuario}`, {
                method: 'GET'
            });

            if (response.ok) {
                mostrarComen();
                setIsValued(prevState => !prevState);
            } else {
                console.error('Error en la solicitud:', response.status);
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    };

    return (
        <>
            <div className="mt-16 font-bold abajo">
                <form onSubmit={handleSubmitComentario} className="flex flex-col ">
                    <textarea
                        value={comentario}
                        onChange={handleComentarioChange}
                        onKeyPress={handleKeyPress}
                        placeholder="Deja tu comentario..."
                        rows={4}
                        cols={50}
                        maxLength={255}
                        style={{ resize: 'none' }}
                        className="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    />
                    <Button className=" bg-fuchsia-600 hover:bg-fuchsia-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline self-end mb-6 gap-2" type="submit"><FcAbout />Comentar</Button>
                </form>
            </div>
            <div className='abajo text-white  mt-4 max-h-96 overflow-y-auto mb-2 shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline font-bold'>
                <h2 className="mb-5">Reseñas</h2>
                <ul className="space-y-4">
                    {comentarios.length === 0 ? (
                        <li className="text-white">No hay comentarios</li>
                    ) : (
                        comentarios.map((comentario, index) => (
                            <li key={index} className="border p-4 rounded bg-white text-black bg-opacity-80 ">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">
                                        {comentario.imgPerfil ? (
                                            <img src={comentario.imgPerfil} alt="Imagen de perfil" className="mr-2 w-8 h-8 rounded-full" />
                                        ) : (
                                            nombreUsuario === 'admin' ? <FcAssistant className="mr-2 text-xl" /> : <BsPersonCircle className="mr-2 text-xl" />
                                        )}
                                        <strong className="mr-2">{comentario.NombreUsuario}:</strong>
                                        <span>{comentario.TextoComentario}</span>
                                    </div>
                                    <div className="flex items-center">
                                        {comentario.NombreUsuario !== nombreUsuario && (
                                            <Button
                                                className={`flex items-center py-1 px-2 rounded hover:bg-blue-600 ${isValued ? 'bg-red-500' : 'bg-blue-500'}`}
                                                onClick={() => handleValorarComentario(comentario.idComentario)}
                                            >
                                                {isValued ? <FaHeart className="mr-1 text-white" /> : <IoIosHeartEmpty className="mr-1 text-white" />}
                                                <span className="text-sm text-white">{comentario.ValoracionComentario}</span>
                                            </Button>
                                        )}
                                        {(comentario.NombreUsuario === nombreUsuario) && (
                                            <Button className="py-1 px-2 bg-blue-500 text-white rounded hover:bg-blue-600 ml-2" onClick={() => handleEditButtonClick(comentario.idComentario)}>Editar</Button>
                                        )}
                                        {(comentario.NombreUsuario === nombreUsuario || isAdmin) && (
                                            <Button className="py-1 px-2 bg-red-500 text-white rounded hover:bg-red-600 ml-2" onClick={() => handleDeleteComentario(comentario.idComentario)}>Eliminar</Button>
                                        )}
                                    </div>
                                </div>
                                {editingCommentId === comentario.idComentario && (
                                    <div className="mt-2">
                                       <textarea
                                            className="border w-full p-2"
                                            type="text"
                                            value={newCommentText}
                                            onKeyPress={(e) => {
                                                if (e.key === 'Enter') {
                                                    handleSaveEdit(comentario.idComentario);
                                                }
                                            }}
                                            onChange={(e) => setNewCommentText(e.target.value)}
                                            maxLength={255} 
                                        />
                                        <div className="mt-2">
                                            <Button className="py-1 px-2 bg-green-500 text-white rounded hover:bg-green-600" onClick={() => handleSaveEdit(comentario.idComentario)}>Guardar</Button>
                                            <Button className="ml-2 py-1 px-2  bg-red-500   hover:bg-red-600 text-white rounded " onClick={handleCancelEdit}>Cancelar</Button>
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </>
    );
}
