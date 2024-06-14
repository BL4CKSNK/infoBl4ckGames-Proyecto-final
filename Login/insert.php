<?php
    include 'db.php';

    // Crear un array para almacenar la respuesta
    $response = array();

    // Verificar si se ha enviado el formulario de inserción de juegos
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        // Obtener los datos del formulario de inserción de juegos
        $Titulo = $_POST['Titulo'];
        $Descripcion = $_POST['Descripcion'];
        $Precio = $_POST['Precio'];
        $Recomendados = $_POST['Recomendados'];
        $Minimos = $_POST['Minimos'];
        $FechaLanzamiento = $_POST['FechaLanzamiento']; // Agregar la fecha de lanzamiento

        // Manejar la carga de la imagen
        $target_dir = "img/";
        $target_file = $target_dir . basename($_FILES["Imagen"]["name"]);
        $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

        // Verificar si la imagen es una imagen real
        $check = getimagesize($_FILES["Imagen"]["tmp_name"]);
        if($check === false) {
            $response['success'] = false;
            $response['message'] = "El archivo no es una imagen.";
            echo json_encode($response);
            exit;
        }

        // Verificar tamaño del archivo
        if ($_FILES["Imagen"]["size"] > 500000) {
            $response['success'] = false;
            $response['message'] = "Lo siento, el archivo es muy grande.";
            echo json_encode($response);
            exit;
        }

        // Permitir ciertos formatos de archivo
        if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
        && $imageFileType != "gif" ) {
            $response['success'] = false;
            $response['message'] = "Lo siento, solo se permiten archivos JPG, JPEG, PNG y GIF.";
            echo json_encode($response);
            exit;
        }

        if (move_uploaded_file($_FILES["Imagen"]["tmp_name"], $target_file)) {
            $Imagen = 'http://localhost/' . $target_file;
        } else {
            $response['success'] = false;
            $response['message'] = "Lo siento, hubo un error al subir tu archivo.";
            echo json_encode($response);
            exit;
        }

        // Crear la consulta SQL para insertar el juego
        $sql = "INSERT INTO Juego (Titulo, Descripcion, Imagen, Precio, FechaLanzamiento) 
                VALUES ('$Titulo', '$Descripcion', '$Imagen', '$Precio', '$FechaLanzamiento')";

        // Ejecutar la consulta y verificar si fue exitosa
        if ($conn->query($sql) === TRUE) {
            // Obtener el ID del juego insertado
            $last_id = $conn->insert_id;

            // Crear la consulta SQL para insertar los requisitos del juego
            $sql_requisitos = "INSERT INTO Requisitos (Juego_ID, Recomendados, Minimos) 
                               VALUES ('$last_id', '$Recomendados', '$Minimos')";

            // Ejecutar la consulta para insertar los requisitos
            if ($conn->query($sql_requisitos) === TRUE) {
                $response['success'] = true;
                $response['message'] = "Juego insertado exitosamente.";
                $response['rutaImagen'] = $Imagen; 
            } else {
                $response['success'] = false;
                $response['message'] = "Error al insertar requisitos del juego: " . $conn->error;
            }
        } else {
            $response['success'] = false;
            $response['message'] = "Error al insertar juego: " . $conn->error;
        }

        // Cerrar la conexión
        $conn->close();
    } else {
        $response['success'] = false;
        $response['message'] = "No se ha enviado el formulario de inserción de juegos";
    }

    // Enviar la respuesta como JSON
    header('Content-Type: application/json');
    echo json_encode($response);
?>
