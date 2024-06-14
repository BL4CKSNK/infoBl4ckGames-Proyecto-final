<?php
    include 'db.php';

    $response = array();
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $idJuego = $_POST['idJuego'];
        $Categorias = $_POST['idCategoria']; 

        echo "Juego recibido: ";
        var_dump($idJuego);
        echo "Categorías recibidas: ";
        var_dump($Categorias);

        // Verificar si se han seleccionado categorías
        if (empty($Categorias) || !is_array($Categorias)) {
            $response['success'] = false;
            $response['message'] = "Las categorías seleccionadas no son válidas.";
            echo json_encode($response);
            exit;
        }

        // Ajustar los índices del array para que comiencen en 1
        $Categorias = array_combine(range(1, count($Categorias)), $Categorias);

        // Insertar las categorías seleccionadas para el juego en la tabla JuegoCategoria
        foreach ($Categorias as $indice => $categoria_id) {
            $sql_categoria = "INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES ('$idJuego', '$categoria_id')";
            if ($conn->query($sql_categoria) !== TRUE) {
                $response['success'] = false;
                $response['message'] = "Error al insertar categoría del juego: " . $conn->error;
                echo json_encode($response);
                exit;
            }
        }

        $response['success'] = true;
        $response['message'] = "Categorías insertadas exitosamente.";
    } else {
        $response['success'] = false;
        $response['message'] = "No se ha enviado el formulario de inserción de categorías";
    }
    $conn->close();
    header('Content-Type: application/json');
    echo json_encode($response);
?>
