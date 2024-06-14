<?php
    include 'db.php';

        if ($_SERVER["REQUEST_METHOD"] == "DELETE" && isset($_GET['idComentario'])) {
            // Si la solicitud es DELETE y se proporciona el parámetro idComentario
            $idComentario = $_GET['idComentario'];

            // Consulta para elimnar el comentario
            $sql = "DELETE FROM Comentarios WHERE idComentario = ?";

            // Prepara la consulta
            $consulta  = $conn->prepare($sql);

            // Verificar si la preparación de la consulta fue exitosa
            if ($consulta) 
            {
                // Vincula los parámetros
                $consulta->bind_param("i", $idComentario);

                // Ejecuta la consulta 
                if ($consulta->execute()) 
                {
                    echo json_encode(array("success" => true, "message" => "Comentario eliminado correctamente"));
                } 
                else 
                {
                    echo json_encode(array("success" => false, "message" => "Error al eliminar el comentario"));
                }

                $consulta->close();
            } 
            else 
            {
                
                echo json_encode(array("success" => false, "message" => "Error en la preparación de la consulta SQL"));
            }
        } 
        else 
        {
            
            echo json_encode(array("success" => false, "message" => "Solicitud no válida"));
        }


    $conn->close();
?>