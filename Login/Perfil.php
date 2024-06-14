<?php
    include 'db.php';

    // Crear un array para almacenar la respuesta
    $response = array();

    // Verificar si se ha enviado el formulario de actualización de perfil
    if ($_SERVER["REQUEST_METHOD"] === "POST") 
    {
        // Obtener los datos del formulario de actualización de perfil
        $idUsuarios = $_POST['idUsuarios'];

        $target_dir = "avatares/";
        $target_file = $target_dir . basename($_FILES["imgPerfil"]["name"]);
        $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

        // Verificar si la imagen es una imagen real
        $check = getimagesize($_FILES["imgPerfil"]["tmp_name"]);
        if($check === false) {
            $response['success'] = false;
            $response['message'] = "El archivo no es una imagen.";
            echo json_encode($response);
            exit; 
        }

        // Verificar tamaño del archivo
        if ($_FILES["imgPerfil"]["size"] > 15000000) 
        {
            $response['success'] = false;
            $response['message'] = "Lo siento, el archivo es muy grande.";
            echo json_encode($response);
            exit; 
        }

        // Permitir ciertos formatos de archivo
        if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif" ) 
        {
            $response['success'] = false;
            $response['message'] = "Lo siento, solo se permiten archivos JPG, JPEG, PNG y GIF.";
            echo json_encode($response);
            exit; 
        }

        if (move_uploaded_file($_FILES["imgPerfil"]["tmp_name"], $target_file)) 
        {
            $imgPerfil = 'http://localhost/' . $target_file;
        } 
        else 
        {
            $response['success'] = false;
            $response['message'] = "Lo siento, hubo un error al subir tu archivo.";
            echo json_encode($response);
            exit; 
        }

       
        $sql = "UPDATE Usuarios SET imgPerfil='$imgPerfil' WHERE idUsuarios='$idUsuarios'";

        if ($conn->query($sql) === TRUE) 
        {
            $response['success'] = true;
            $response['message'] = "Perfil actualizado exitosamente.";
            $response['rutaImagen'] = $imgPerfil; 
        } 
        else 
        {
            $response['success'] = false;
            $response['message'] = "Error al actualizar el perfil: " . $conn->error;
        }

       
        $conn->close();
    } 
    else 
    {
        $response['success'] = false;
        $response['message'] = "No se ha enviado el formulario de actualización de perfil";
    }

   
    header('Content-Type: application/json');
    echo json_encode($response);
    exit; 
?>
