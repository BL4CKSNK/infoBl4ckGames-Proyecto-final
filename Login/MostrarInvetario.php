<?php
    include 'db.php';

    if ($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET['idUsuario'])) {
        $idUsuario = $_GET['idUsuario'];

        // Consulta para obtener los juegos en el inventario del usuario
        $sql = "SELECT Juego.idJuego, Juego.Titulo, Juego.Descripcion, Juego.Imagen, Juego.Precio
                FROM UsuarioJuego 
                INNER JOIN Juego ON UsuarioJuego.idJuego = Juego.idJuego 
                WHERE UsuarioJuego.idUsuario = $idUsuario";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            // Array para almacenar los juegos en el inventario del usuario
            $inventarioUsuario = array();

            // Recorrer los resultados y almacenarlos en el array
            while($row = $result->fetch_assoc()) {
                $inventarioUsuario[] = $row;
            }

            header('Content-Type: application/json');
            echo json_encode($inventarioUsuario);
        } else {
            
            $response = array("success" => false, "message" => "El inventario del usuario está vacío.");
            header('Content-Type: application/json');
            echo json_encode($response);
        }

        
        $conn->close();
    } 
?>
