<?php
    include 'db.php'; 

    if(isset($_GET['idUsuarios'])) 
    {
        $idUsuarios = $_GET['idUsuarios'];
        $sql = "DELETE FROM Usuarios WHERE idUsuarios = $idUsuarios";

        if ($conn->query($sql) === TRUE) 
        {
            echo json_encode(array("success" => true, "message" => "Usuario eliminado correctamente"));
        } 
        else 
        {
            echo json_encode(array("success" => false, "message" => "Error al eliminar el usuario: " . $conn->error));
        }
    } 
    else 
    {
        echo json_encode(array("success" => false, "message" => "No se recibió el ID del usuario"));
    }

    $conn->close(); 
?>
