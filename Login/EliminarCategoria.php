<?php
    include 'db.php'; 

    if(isset($_GET['idCategoria'])) 
    {
        $idCategoria = $_GET['idCategoria'];
        $sql = "DELETE FROM Categoria WHERE idCategoria = $idCategoria";

        if ($conn->query($sql) === TRUE) 
        {
    
            echo json_encode(array("success" => true, "message" => "Categoría eliminada correctamente"));
        } 
        else 
        {
    
            echo json_encode(array("success" => false, "message" => "Error al eliminar la categoría: " . $conn->error));
        }
    } 
    else 
    {
    
        echo json_encode(array("success" => false, "message" => "No se recibió el ID de la categoría"));
    }

    $conn->close(); 
?>
