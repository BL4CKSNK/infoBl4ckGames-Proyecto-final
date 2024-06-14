<?php
    include 'db.php';
    
    // Verificar si se ha enviado el ID del usuario
    if ($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET['idUsuario'])) 
    {
        $idUsuario = $_GET['idUsuario'];
        
        // Consulta para obtener la información del usuario por su ID
        $sql = "SELECT * FROM Usuarios WHERE idUsuarios='$idUsuario'";
        $result = $conn->query($sql);

        if ($result->num_rows == 1) 
        {
            $row = $result->fetch_assoc();
            // Obtener los datos del usuario
            $nombreUsuario = $row['NombreUsuario'];
            $correo = $row['Email'];
            $imgPerfil = $row['imgPerfil'];
            $inventarioJuego = $row['inventarioJuego'];

            // Crear un array con la información del usuario
            $userInfo = array(
                "idUsuario" => $idUsuario,
                "nombreUsuario" => $nombreUsuario,
                "correo" => $correo,
                "imgPerfil" => $imgPerfil,
                "inventarioJuego" => $inventarioJuego
            );

            header('Content-Type: application/json');
            echo json_encode($userInfo);
        } 
        else 
        {
            $response = array("success" => false, "message" => "No se encontró ningún usuario con el ID proporcionado");
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
