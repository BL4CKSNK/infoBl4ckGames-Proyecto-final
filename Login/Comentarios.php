<?php
    include 'db.php';

    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['usuario']) && isset($_POST['comentario']) && isset($_POST['idJuego'])) {
        // Obtener los datos del comentario
        $usuario = $_POST['usuario'];
        $comentario = $_POST['comentario'];
        $idJuego = $_POST['idJuego'];

        // Obtener el ID del usuario y la imagen de perfil
        $usuario_data = obtenerUsuarioData($usuario);
        $usuario_id = $usuario_data['idUsuarios'];
        $imagenPerfil = $usuario_data['imgPerfil'];

        $sql = "INSERT INTO Comentarios (Usuario_ID, TextoComentario, idJuego) VALUES (?, ?, ?)";

        // Preparar la sentencia 
        $consulta = $conn->prepare($sql); // Vincula los parámetros

        if ($consulta) {
            $consulta->bind_param("isi", $usuario_id, $comentario, $idJuego); 

            if ($consulta->execute()) {
                echo json_encode(array(
                    "success" => true, 
                    "message" => "Comentario guardado correctamente",
                    "imagenPerfil" => $imagenPerfil
                ));
            } else {
                echo json_encode(array("success" => false, "message" => "Error al guardar el comentario"));
            }

            $consulta->close();
        } else {
            echo json_encode(array("success" => false, "message" => "Error en la preparación de la consulta SQL"));
        }

        $conn->close();
    } else {
        echo json_encode(array("success" => false, "message" => "No se recibieron datos de comentario"));
    }

    // Función para obtener los datos del usuario por el nombre del usuario
    function obtenerUsuarioData($nombreUsuario) {
        global $conn;
        $sql = "SELECT idUsuarios, imgPerfil FROM Usuarios WHERE NombreUsuario = ?";
        $consulta = $conn->prepare($sql);
        $consulta->bind_param("s", $nombreUsuario);
        $consulta->execute();
        $result = $consulta->get_result();
        $row = $result->fetch_assoc();
        $consulta->close();

        return $row;
    }
?>
