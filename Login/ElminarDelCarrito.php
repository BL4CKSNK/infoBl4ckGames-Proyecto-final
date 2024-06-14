<?php

    include 'db.php';

    // Verificar si se ha enviado la solicitud para eliminar un juego del carrito
    if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['idJuego']) && isset($_POST['idUsuario'])) {
        $idJuego = $_POST['idJuego'];
        $idUsuario = $_POST['idUsuario'];
        
        // Consulta para eliminar el juego del carrito
        $sqlDelete = "DELETE FROM CarritoJuego WHERE idCarrito IN (SELECT idCarrito FROM Carrito WHERE idUsuarios='$idUsuario') AND idJuego='$idJuego'";
        
        if ($conn->query($sqlDelete) === TRUE) 
        {
            $response = array("success" => true, "message" => "Juego eliminado del carrito");
        } 
        else 
        {
            $response = array("success" => false, "message" => "Error al eliminar el juego del carrito: " . $conn->error);
        }

        header('Content-Type: application/json');
        echo json_encode($response);

        $conn->close();
    }

?>