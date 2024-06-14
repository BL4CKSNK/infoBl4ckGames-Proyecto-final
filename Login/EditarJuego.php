<?php
    include 'db.php';

    $response = array();

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $Juego_ID = $_POST['Juego_ID'];
        $Titulo = $_POST['Titulo'];
        $Descripcion = $_POST['Descripcion'];
        $Precio = $_POST['Precio'];
        $Recomendados = $_POST['Recomendados'];
        $Minimos = $_POST['Minimos'];
        $FechaLanzamiento = $_POST['FechaLanzamiento']; // Agregar la fecha de lanzamiento

        $sql = "UPDATE Juego SET Titulo='$Titulo', Descripcion='$Descripcion', Precio='$Precio', FechaLanzamiento='$FechaLanzamiento' WHERE idJuego='$Juego_ID'";

        if ($conn->query($sql) === TRUE) {
            $sql_requisitos = "UPDATE Requisitos SET Recomendados='$Recomendados', Minimos='$Minimos' WHERE Juego_ID='$Juego_ID'";
            if ($conn->query($sql_requisitos) === TRUE) {
                if (isset($_FILES["Imagen"]) && $_FILES["Imagen"]["error"] == 0) {
                    $target_dir = "img/";
                    $target_file = $target_dir . basename($_FILES["Imagen"]["name"]);
                    $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

                    if (move_uploaded_file($_FILES["Imagen"]["tmp_name"], $target_file)) {
                        $Imagen = 'http://localhost/' . $target_file;
                        $sql_imagen = "UPDATE Juego SET Imagen='$Imagen' WHERE idJuego='$Juego_ID'";
                        if ($conn->query($sql_imagen) === TRUE) {
                            $response['success'] = true;
                            $response['message'] = "Juego actualizado exitosamente con imagen.";
                        } else {
                            $response['success'] = false;
                            $response['message'] = "Error al actualizar la imagen: " . $conn->error;
                        }
                    } else {
                        $response['success'] = false;
                        $response['message'] = "Error al cargar la imagen.";
                    }
                } else {
                    $response['success'] = true;
                    $response['message'] = "Juego actualizado exitosamente.";
                }
            } else {
                $response['success'] = false;
                $response['message'] = "Error al actualizar los requisitos: " . $conn->error;
            }
        } else {
            $response['success'] = false;
            $response['message'] = "Error al actualizar el juego: " . $conn->error;
        }

        $conn->close();
    } else {
        $response['success'] = false;
        $response['message'] = "Método no permitido.";
    }

    header('Content-Type: application/json');
    echo json_encode($response);
?>
