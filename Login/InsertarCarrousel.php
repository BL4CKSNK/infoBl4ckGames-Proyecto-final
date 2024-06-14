<?php
    include 'db.php';

    // Crear un array para almacenar la respuesta
    $response = array();

    // Verificar si se ha enviado el formulario de inserción de imágenes
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        // Obtener el ID del juego del formulario
        $idJuego = $_POST['idJuego'];

        // Manejar la carga de las imágenes
        $target_dir = "Carrousel/";
        $imagenes = $_FILES['imagenes'];

        for ($i = 0; $i < count($imagenes['name']); $i++) {
            $target_file = $target_dir . basename($imagenes["name"][$i]);
            $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

            // Verificar si la imagen es una imagen real
            $check = getimagesize($imagenes["tmp_name"][$i]);
            if ($check === false) {
                $response['success'] = false;
                $response['message'] = "El archivo " . $imagenes["name"][$i] . " no es una imagen.";
                echo json_encode($response);
                exit;
            }

            // Verificar tamaño del archivo
            if ($imagenes["size"][$i] > 15000000) {
                $response['success'] = false;
                $response['message'] = "Lo siento, el archivo " . $imagenes["name"][$i] . " es muy grande.";
                echo json_encode($response);
                exit;
            }

            // Permitir ciertos formatos de archivo
            if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif") {
                $response['success'] = false;
                $response['message'] = "Lo siento, solo se permiten archivos JPG, JPEG, PNG y GIF.";
                echo json_encode($response);
                exit;
            }

            if (move_uploaded_file($imagenes["tmp_name"][$i], $target_file)) {
                $RutaImagen = 'http://localhost/' . $target_file;

                // Insertar la ruta de la imagen en la tabla 'Imagenes'
                $sql_imagenes = "INSERT INTO Imagenes (idJuego, RutaImagen) VALUES ('$idJuego', '$RutaImagen')";
                if ($conn->query($sql_imagenes) !== TRUE) {
                    $response['success'] = false;
                    $response['message'] = "Error al insertar imagen: " . $conn->error;
                    echo json_encode($response);
                    exit;
                }
            } else {
                $response['success'] = false;
                $response['message'] = "Lo siento, hubo un error al subir tu archivo " . $imagenes["name"][$i] . ".";
                echo json_encode($response);
                exit;
            }
        }

        $response['success'] = true;
        $response['message'] = "Imágenes insertadas exitosamente.";
    } else {
        $response['success'] = false;
        $response['message'] = "No se ha enviado el formulario de inserción de imágenes";
    }

    $conn->close();

    header('Content-Type: application/json');
    echo json_encode($response);
?>
