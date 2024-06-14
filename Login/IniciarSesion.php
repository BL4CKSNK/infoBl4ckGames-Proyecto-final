<?php
    include 'db.php';
    // Verificar si se ha enviado el formulario de inicio de sesión
    if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['login'])) 
    {
        // Obtengo el correo y la contraseña
        $correo = $_POST['correo'];
        $contra = $_POST['contra'];
        session_start();
        // Consulta para verificar si la contraseña y el correo están registrados
        $sql = "SELECT * FROM Usuarios WHERE Email='$correo' AND contra='$contra'";
        $result = $conn->query($sql);

        if ($result->num_rows == 1) 
        {
            $_SESSION['correo'] = $correo;
            $row = $result->fetch_assoc();
            $idUsuario = $row['idUsuarios']; // Obtener el ID del usuario 
            $nombreUsuario = $row['NombreUsuario']; // Obtener el nombre de usuario 
            $imgPerfil = $row['imgPerfil']; // Obtener la imagen de perfil
            // Verifica si el usuario ya tiene un carrito
            $sqlCarrito = "SELECT * FROM Carrito WHERE idUsuarios='$idUsuario'";
            $resultCarrito = $conn->query($sqlCarrito);
            
            if ($resultCarrito->num_rows == 0) 
            {
                // Si el usuario no tiene un carrito, le asigna uno
                $sqlInsertCarrito = "INSERT INTO Carrito (idUsuarios) VALUES ('$idUsuario')";

                if ($conn->query($sqlInsertCarrito) === TRUE) 
                {
                    $idCarrito = $conn->insert_id; // Obtener el ID del nuevo carrito
                    $_SESSION['idCarrito'] = $idCarrito; // Almacenar el ID del carrito en la sesión
                } 
                else 
                {
                    $response = array("success" => false, "message" => "Error al crear el carrito");
                }
            } 

            $response = array("success" => true, "message" => "Inicio de sesión exitoso", "idUsuario" => $idUsuario, "nombreUsuario" => $nombreUsuario, "correo" => $correo, "imgPerfil" => $imgPerfil);
        } 
        else 
        {
            $response = array("success" => false, "message" => "Credenciales incorrectas");
        }

        header('Content-Type: application/json');
        echo json_encode($response);

        $conn->close();
    }
?>
