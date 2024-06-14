<?php
    include 'db.php';

    $sql = "SELECT idCategoria, Nombre FROM Categoria";
    $result = $conn->query($sql);

    // Verificar si se encontraron resultados
    if ($result->num_rows > 0) 
    {
        // Recorrer los resultados y crear una cadena de texto
        $categorias = "";
        while($row = $result->fetch_assoc()) 
        {
            $categorias .= $row['idCategoria'] . "," . $row['Nombre'] . ";";
        }
        // Quitar el último punto y coma
        $categorias = rtrim($categorias, ";");
        echo $categorias;
    } 
    else 
    {
        echo "No hay categorías";
    }

   
    $conn->close();
?>
