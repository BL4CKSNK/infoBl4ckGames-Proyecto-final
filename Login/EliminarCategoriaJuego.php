<?php
    include 'db.php';

    $response = array();

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $input = file_get_contents("php://input");
        error_log("Input data: " . $input);  
        $data = json_decode($input);

        $idUsuario = isset($data->idUsuario) ? $data->idUsuario : null;
        $idJuego = isset($data->idJuego) ? $data->idJuego : null;
        $idCategoria = isset($data->idCategoria) ? $data->idCategoria : null;

        error_log("ID Usuario: $idUsuario, ID Juego: $idJuego, ID Categoria: $idCategoria"); 

        // Verificar si el usuario es administrador 
        if ($idUsuario !== '1') { // Si el ID del usuario no es '1', no tiene permiso de administrador
            $response['success'] = false;
            $response['message'] = "Acceso no autorizado.";
            echo json_encode($response);
            exit;
        }

        if (empty($idJuego) || empty($idCategoria)) {
            $response['success'] = false;
            $response['message'] = "ID de juego o categoría no proporcionado.";
            echo json_encode($response);
            exit;
        }

        $sql = "DELETE FROM JuegoCategoria WHERE idJuego = '$idJuego' AND idCategoria = '$idCategoria'";
        if ($conn->query($sql) === TRUE) {
            $response['success'] = true;
            $response['message'] = "Categoría eliminada exitosamente.";
        } else {
            $response['success'] = false;
            $response['message'] = "Error al eliminar categoría: " . $conn->error;
        }

        echo json_encode($response);
    } else {
        $response['success'] = false;
        $response['message'] = "Método no permitido.";
        echo json_encode($response);
    }
    $conn->close();
?>
