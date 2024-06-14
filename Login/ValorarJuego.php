<?php
    include 'db.php';

    if (isset($_GET['idJuego']) && isset($_GET['puntuacion']) && isset($_GET['idUsuario'])) {
        $idJuego = $_GET['idJuego'];
        $puntuacion = $_GET['puntuacion'];
        $idUsuario = $_GET['idUsuario'];

        // Verificar si el usuario ya ha puntuado este juego
        $sql_check = "SELECT * FROM Puntuaciones WHERE idJuego = $idJuego AND idUsuario = $idUsuario";
        $result_check = $conn->query($sql_check);

        if ($result_check->num_rows > 0) {
            // Si el usuario ya ha puntuado, actualizar su puntuación existente
            $sql_update = "UPDATE Puntuaciones SET Puntuacion = $puntuacion WHERE idJuego = $idJuego AND idUsuario = $idUsuario";
            if ($conn->query($sql_update) === TRUE) {
                echo "Puntuación actualizada correctamente";
            } else {
                echo "Error al actualizar la puntuación: " . $conn->error;
            }
        } else {
            // Si el usuario no ha puntuado antes, insertar una nueva puntuación
            $sql_insert = "INSERT INTO Puntuaciones (idJuego, idUsuario, Puntuacion) VALUES ($idJuego, $idUsuario, $puntuacion)";
            if ($conn->query($sql_insert) === TRUE) {
                echo "Puntuación añadida correctamente";
            } else {
                echo "Error al añadir la puntuación: " . $conn->error;
            }
        }

        $conn->close();
    } else {
        echo "ID de juego, puntuación o ID de usuario no proporcionados";
    }
?>
