<?php
    include 'db.php';
    if(isset($_POST['nombre'])) 
    {
        $nombreCategoria = $_POST['nombre'];
        $sql = "INSERT INTO Categoria (Nombre) VALUES (?)";
        
        $stmt = $conn->prepare($sql);
        
        if ($stmt) 
        {
            // Vincular parámetros e insertar la nueva categoría
            $stmt->bind_param("s", $nombreCategoria);
            $stmt->execute();
            
            if ($stmt->affected_rows > 0) 
            {
                echo json_encode(array("success" => true, "message" => "Categoría insertada correctamente"));
            } 
            else 
            {
                echo json_encode(array("success" => false, "message" => "Error al insertar la categoría"));
            }
            
           
            $stmt->close();
        } 
        else 
        {
            echo json_encode(array("success" => false, "message" => "Error en la preparación de la consulta SQL"));
        }
    } 
    else 
    {
        echo json_encode(array("success" => false, "message" => "No se recibió el nombre de la categoría"));
    }

    $conn->close();
?>
