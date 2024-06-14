<?php
    include 'db.php';

    // Verificar si se ha enviado la solicitud para procesar la compra
    if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['idUsuario']) && isset($_POST['idCarrito'])) {
        $idUsuario = $_POST['idUsuario'];
        $idCarrito = $_POST['idCarrito'];

        // Obtener los juegos en el carrito del usuario
        $sql = "SELECT * FROM CarritoJuego WHERE idCarrito = $idCarrito";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            // Iniciar una transacción
            $conn->begin_transaction();

            try {
                // Recorrer los juegos en el carrito y agregarlos al inventario del usuario
                while($row = $result->fetch_assoc()) {
                    $idJuego = $row['idJuego'];
                    $unidades = $row['Unidades'];

                    // Verificar si el juego ya está en el inventario del usuario
                    $sql_check_inventory = "SELECT COUNT(*) AS count FROM UsuarioJuego WHERE idUsuario = $idUsuario AND idJuego = $idJuego";
                    $result_check = $conn->query($sql_check_inventory);
                    $row_check = $result_check->fetch_assoc();
                    $gameCount = $row_check['count'];

                    if ($gameCount == 0) {
                        // Insertar el juego en el inventario del usuario si no está duplicado
                        $sql_insert_inventory = "INSERT INTO UsuarioJuego (idUsuario, idJuego) VALUES ($idUsuario, $idJuego)";
                        $conn->query($sql_insert_inventory);
                    }
                }

                // Vaciar el carrito del usuario
                $sql_empty_cart = "DELETE FROM CarritoJuego WHERE idCarrito = $idCarrito";
                $conn->query($sql_empty_cart);

                // Actualizar el campo inventarioJuego del usuario
                $sql_get_inventory = "SELECT GROUP_CONCAT(idJuego) AS inventario FROM UsuarioJuego WHERE idUsuario = $idUsuario";
                $result_inventory = $conn->query($sql_get_inventory);
                $row_inventory = $result_inventory->fetch_assoc();
                $inventarioJuego = $row_inventory['inventario'];

                $sql_update_inventory = "UPDATE Usuarios SET inventarioJuego = '$inventarioJuego' WHERE idUsuarios = $idUsuario";
                $conn->query($sql_update_inventory);
                $conn->commit();

                $response = array("success" => true, "message" => "Compra realizada exitosamente.");
                header('Content-Type: application/json');
                echo json_encode($response);
            } catch (Exception $e) {

                $conn->rollback();

                $response = array("success" => false, "message" => "Error al procesar la compra.");
                header('Content-Type: application/json');
                echo json_encode($response);
            }
        } else {
            $response = array("success" => false, "message" => "No hay juegos en el carrito para procesar la compra.");
            header('Content-Type: application/json');
            echo json_encode($response);
        }

        $conn->close();
    } 
?>
