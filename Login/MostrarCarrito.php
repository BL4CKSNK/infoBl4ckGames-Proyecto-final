<?php
    include 'db.php';

    // Verificar si se ha enviado la solicitud para mostrar el carrito
    if ($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET['idUsuario'])) 
    {
        $idUsuario = $_GET['idUsuario'];

        $sql = "SELECT Juego.idJuego, Juego.Titulo, Juego.Imagen, Juego.Precio, CarritoJuego.Unidades, Carrito.idCarrito
                FROM CarritoJuego 
                INNER JOIN Juego ON CarritoJuego.idJuego = Juego.idJuego 
                INNER JOIN Carrito ON CarritoJuego.idCarrito = Carrito.idCarrito
                WHERE idUsuarios='$idUsuario'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) 
        {
            // Array para almacenar los juegos del carrito
            $carrito = array();

            // Recorrer los resultados y almacenarlos en el array
            while($row = $result->fetch_assoc()) 
            {
                $carrito[] = $row;
            }
            header('Content-Type: application/json');
            echo json_encode($carrito);
        } 
        else 
        {

            $response = array("success" => false, "message" => "El carrito está vacío para este usuario.");
            header('Content-Type: application/json');
            echo json_encode($response);
        }

        $conn->close();
    } 
?>
