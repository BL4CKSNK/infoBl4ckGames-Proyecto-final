<?php
    include 'db.php';

    if (isset($_GET['idJuego'])) 
    {
        // Obtener el idJuego de la solicitud
        $idJuego = $_GET['idJuego'];
        $sql = "SELECT c.idComentario, c.TextoComentario, c.ValoracionComentario, u.NombreUsuario, u.imgPerfil
                FROM Comentarios c
                INNER JOIN Usuarios u ON c.Usuario_ID = u.idUsuarios
                WHERE c.idJuego = ?";

        $consulta = $conn->prepare($sql);
        $consulta->bind_param("i", $idJuego);
        $consulta->execute();
        $result = $consulta->get_result();

        // Array para almacenar los comentarios y los usuarios
        $comentarios = [];

        if ($result === false) 
        {
            $comentarios['error'] = "Error al obtener los comentarios: " . $conn->error;
        } 
        else 
        {
            // Verificar si hay resultados y mostrarlos
            if ($result->num_rows > 0) 
            {
                // Recorrer los resultados y almacenarlos en el array
                while ($row = $result->fetch_assoc()) 
                {
                    $comentarios[] = $row;
                }
            } 
            else 
            {
                $comentarios['message'] = "No se encontraron comentarios para este juego.";
            }
        }

        echo json_encode($comentarios);
        $consulta->close();
    } 
    else 
    {
        echo json_encode(array("error" => "No se recibió el ID del juego"));
    }

    $conn->close();
?>
