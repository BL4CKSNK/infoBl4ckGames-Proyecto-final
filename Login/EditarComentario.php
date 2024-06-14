<?php
    include 'db.php';

    // Verificar si la solicitud es un PUT y se proporciona el parámetro idComentario
    if ($_SERVER["REQUEST_METHOD"] == "PUT" && isset($_GET['idComentario'])) {
        // Obtener el ID del comentario
        $idComentario = $_GET['idComentario'];

        // Decodificar los datos JSON recibidos
        $data = json_decode(file_get_contents("php://input"), true);

        // Verificar si se proporciona el texto del comentario
        if (isset($data['texto'])) {
            $nuevoTexto = $data['texto'];

            $sql = "UPDATE Comentarios SET TextoComentario = ? WHERE idComentario = ?";

            // Preparar la consulta
            $consulta = $conn->prepare($sql);

            if ($consulta) {
                // Vincular los parámetros
                $consulta->bind_param("si", $nuevoTexto, $idComentario);

                // Ejecutar la consulta
                if ($consulta->execute()) {
                    echo json_encode(array("success" => true, "message" => "Comentario actualizado correctamente"));
                } else {
                    echo json_encode(array("success" => false, "message" => "Error al actualizar el comentario"));
                }

                $consulta->close();
            } else {
                echo json_encode(array("success" => false, "message" => "Error en la preparación de la consulta SQL"));
            }
        } else {
            echo json_encode(array("success" => false, "message" => "Texto del comentario no proporcionado"));
        }
    } else {
        echo json_encode(array("success" => false, "message" => "Solicitud no válida"));
    }

    $conn->close();
?>
