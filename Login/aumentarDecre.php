<?php

    include 'db.php';

    if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['idJuego']) && isset($_POST['idUsuario']) && isset($_POST['incremento'])) 
    {
        $idJuego = $_POST['idJuego'];
        $idUsuario = $_POST['idUsuario'];
        $incremento = intval($_POST['incremento']); // Convertir a entero

        // Verificar si el juego ya está en el carrito
        $sqlCheck = "SELECT * FROM CarritoJuego WHERE idCarrito IN (SELECT idCarrito FROM Carrito WHERE idUsuarios='$idUsuario') AND idJuego='$idJuego'";
        $resultCheck = $conn->query($sqlCheck);
        
        if ($resultCheck->num_rows > 0) 
        {
            // Si el juego ya está en el carrito, actualizar la cantidad de unidades
            $row = $resultCheck->fetch_assoc();
            $idCarrito = $row['idCarrito'];
            $unidades = $row['Unidades'] + $incremento; // Incremento o decremento
            
            if ($unidades < 1) {
                // Evita que la cantidad sea negativa
                $unidades = 1;
            }

            // Consulta para actualizar la cantidad
            $sqlUpdate = "UPDATE CarritoJuego SET Unidades='$unidades' WHERE idCarrito='$idCarrito' AND idJuego='$idJuego'";
            if ($conn->query($sqlUpdate) === TRUE) 
            {
                $response = array("success" => true, "message" => "Cantidad de unidades actualizada en el carrito");
            } 
            else 
            {
                $response = array("success" => false, "message" => "Error al actualizar la cantidad de unidades en el carrito: " . $conn->error);
            }
        } 
        else 
        {
            // Si el juego no está en el carrito, insertar una nueva fila en CarritoJuego
            if ($incremento > 0) {
                $sqlInsert = "INSERT INTO CarritoJuego (idCarrito, idJuego, Unidades) SELECT idCarrito, '$idJuego', 1 FROM Carrito WHERE idUsuarios='$idUsuario'";
                if ($conn->query($sqlInsert) === TRUE) 
                {
                    $response = array("success" => true, "message" => "Juego agregado al carrito");
                } 
                else {
                    $response = array("success" => false, "message" => "Error al agregar el juego al carrito: " . $conn->error);
                }
            } else {
                
                $response = array("success" => false, "message" => "El juego no está en el carrito");
            }
        }

        header('Content-Type: application/json');
        echo json_encode($response);

        $conn->close();
} 

?>
