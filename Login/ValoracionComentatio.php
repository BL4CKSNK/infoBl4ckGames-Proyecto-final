<?php
    include 'db.php';

    if(isset($_GET['idComentario']) && isset($_GET['idUsuario'])) {
        $idComentario = $_GET['idComentario'];
        $idUsuario = $_GET['idUsuario'];
        
        // Verificar si el usuario ya valoró el comentario
        $sql_check = "SELECT * FROM Valoraciones WHERE idComentario = $idComentario AND idUsuario = $idUsuario";
        $result_check = $conn->query($sql_check);

        if ($result_check->num_rows > 0) {
            // El usuario ya valoró el comentario, eliminar su valoración
            $sql_delete = "DELETE FROM Valoraciones WHERE idComentario = $idComentario AND idUsuario = $idUsuario";
            if ($conn->query($sql_delete) === TRUE) {
                // Decrementar la valoración del comentario en la base de datos
                $sql_decrement = "UPDATE Comentarios SET ValoracionComentario = ValoracionComentario - 1 WHERE idComentario = $idComentario";
                if ($conn->query($sql_decrement) === TRUE) {
                    // Obtener los datos actualizados del comentario
                    $sql_select = "SELECT * FROM Comentarios WHERE idComentario = $idComentario";
                    $result_select = $conn->query($sql_select);
                    if ($result_select->num_rows > 0) {
                        $row = $result_select->fetch_assoc();
                        echo json_encode($row);
                    } else {
                        echo "No se encontraron datos del comentario actualizado";
                    }
                } else {
                    echo "Error al decrementar la valoración: " . $conn->error;
                }
            } else {
                echo "Error al eliminar la valoración: " . $conn->error;
            }
        } else {
            // Incrementar la valoración del comentario en la base de datos
            $sql_increment = "UPDATE Comentarios SET ValoracionComentario = ValoracionComentario + 1 WHERE idComentario = $idComentario";
            if ($conn->query($sql_increment) === TRUE) {
                // Registrar la valoración del comentario por el usuario
                $sql_insert = "INSERT INTO Valoraciones (idUsuario, idComentario, valoracion) VALUES ($idUsuario, $idComentario, 1)";
                if ($conn->query($sql_insert) === TRUE) {
                    // Obtener los datos actualizados del comentario
                    $sql_select = "SELECT * FROM Comentarios WHERE idComentario = $idComentario";
                    $result_select = $conn->query($sql_select);
                    if ($result_select->num_rows > 0) {
                        $row = $result_select->fetch_assoc();
                        echo json_encode($row);
                    } else {
                        echo "No se encontraron datos del comentario actualizado";
                    }
                } else {
                    echo "Error al registrar la valoración: " . $conn->error;
                }
            } else {
                echo "Error al incrementar la valoración: " . $conn->error;
            }
        }

        $conn->close();
    } else {
        echo "ID de comentario o ID de usuario no proporcionados";
    }
?>
