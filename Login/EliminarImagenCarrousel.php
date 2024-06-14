<?php
    include 'db.php';

    $response = array();

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $input = file_get_contents("php://input");
        error_log("Input data: " . $input); 
        $data = json_decode($input);

        $idJuego = isset($data->idJuego) ? $data->idJuego : null;
        $idImagen = isset($data->idImagen) ? $data->idImagen : null;

        error_log("ID Juego: $idJuego, ID Imagen: $idImagen");  

        if (empty($idJuego) || empty($idImagen)) {
            $response['success'] = false;
            $response['message'] = "ID de juego o imagen no proporcionado.";
            echo json_encode($response);
            exit;
        }

        // Obtener la ruta de la imagen específica
        $sql_select = "SELECT RutaImagen FROM Imagenes WHERE idJuego = '$idJuego' AND idImagen = '$idImagen'";
        $result = $conn->query($sql_select);

        if ($result->num_rows > 0) {
            // Eliminar la entrada de imagen de la tabla
            $sql_delete = "DELETE FROM Imagenes WHERE idJuego = '$idJuego' AND idImagen = '$idImagen'";
            if ($conn->query($sql_delete) === TRUE) {
                // Eliminar la imagen físicamente del servidor si existe
                $row = $result->fetch_assoc();
                $rutaImagen = $row["RutaImagen"];
                if (file_exists($rutaImagen)) {
                    unlink($rutaImagen); // Eliminar la imagen del servidor
                }
                
                $response['success'] = true;
                $response['message'] = "Imagen eliminada exitosamente.";
            } else {
                $response['success'] = false;
                $response['message'] = "Error al eliminar imagen: " . $conn->error;
            }
        } else {
            $response['success'] = false;
            $response['message'] = "La imagen no existe en la base de datos.";
        }

        echo json_encode($response);
    } else {
        $response['success'] = false;
        $response['message'] = "Método no permitido.";
        echo json_encode($response);
    }
    $conn->close();
?>
