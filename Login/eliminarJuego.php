<?php

    include 'db.php';

    if(isset($_GET['idJuego'])) 
    {
        $idJuego = $_GET['idJuego'];
        $sql = "DELETE FROM Juego WHERE idJuego = ?";

        $stmt = $conn->prepare($sql);

        $stmt->bind_param("i", $idJuego);


        if ($stmt->execute()) 
        {
            echo "El juego se eliminó correctamente";
        } 
        else 
        {
            echo "Error al eliminar el juego: " . $stmt->error;
        }

        
        $stmt->close();
    }
    else 
    {
        echo "ID de juego no proporcionado";
    }

    $conn->close();
?>
