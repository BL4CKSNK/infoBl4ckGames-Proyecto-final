<?php
    include 'db.php';
    $data = json_decode(file_get_contents("php://input"), true);

    // Verificar si se ha enviado el ID del usuario
    if (isset($data['idUsuario'])) 
    {
        $idUsuario = $data['idUsuario'];
        
        $sql = "UPDATE Usuarios SET imgPerfil = NULL WHERE idUsuarios = '$idUsuario'";
        if ($conn->query($sql) === TRUE) 
        {
            $response = array("success" => true, "message" => "Foto de perfil eliminada correctamente");
            header('Content-Type: application/json');
            echo json_encode($response);
        } 
        else 
        {
            $response = array("success" => false, "message" => "Error al eliminar la foto de perfil: " . $conn->error);
            header('Content-Type: application/json');
            echo json_encode($response);
        }
    } 
    else 
    {
        $response = array("success" => false, "message" => "No se ha proporcionado el ID del usuario");
        header('Content-Type: application/json');
        echo json_encode($response);
    }

    $conn->close();
?>
