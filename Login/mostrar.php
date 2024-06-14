<?php
    include 'db.php';
    $sql = "SELECT j.idJuego, j.Titulo, j.Descripcion, j.Imagen, j.Precio, j.FechaLanzamiento, 
                MAX(r.Minimos) AS Minimos, MAX(r.Recomendados) AS Recomendados, 
                GROUP_CONCAT(DISTINCT i.idImagen) AS idImagenes, 
                GROUP_CONCAT(DISTINCT i.RutaImagen) AS Imagenes, 
                GROUP_CONCAT(DISTINCT c.idCategoria) AS idCategorias, 
                GROUP_CONCAT(DISTINCT c.Nombre) AS Categorias, 
                AVG(p.Puntuacion) AS PuntuacionPromedio
            FROM Juego j
            LEFT JOIN Requisitos r ON j.idJuego = r.Juego_ID
            LEFT JOIN Imagenes i ON j.idJuego = i.idJuego
            LEFT JOIN JuegoCategoria jc ON j.idJuego = jc.idJuego
            LEFT JOIN Categoria c ON jc.idCategoria = c.idCategoria
            LEFT JOIN Puntuaciones p ON j.idJuego = p.idJuego
            GROUP BY j.idJuego, j.Titulo, j.Descripcion, j.Imagen, j.Precio, j.FechaLanzamiento";

    // Ejecutar la consulta
    $result = $conn->query($sql);

    // Verificar si hay errores en la consulta
    if ($result === false) {
        $error = "Error al obtener los datos de los juegos: " . $conn->error;
        echo json_encode(array("error" => $error));
    } else {
        // Array para almacenar los resultados
        $juegos = [];

        // Verificar si hay resultados y mostrarlos
        if ($result->num_rows > 0) {
            // Recorrer los resultados y almacenarlos en el array
            while ($row = $result->fetch_assoc()) {
    
                $row['Imagenes'] = $row['Imagenes'] ? explode(',', $row['Imagenes']) : [];
                $row['idImagenes'] = $row['idImagenes'] ? explode(',', $row['idImagenes']) : [];
                $row['Categorias'] = $row['Categorias'] ? explode(',', $row['Categorias']) : [];
                $row['PuntuacionPromedio'] = isset($row['PuntuacionPromedio']) ? round($row['PuntuacionPromedio'], 1) : null;
                $row['idCategorias'] = $row['idCategorias'] ? explode(',', $row['idCategorias']) : [];
                $row['idCategoria'] = isset($row['idCategorias'][0]) ? $row['idCategorias'][0] : null;
                $juegos[] = $row;
            }
            echo json_encode($juegos);
        } else {
            $error = "No se encontraron juegos con requisitos asociados.";
            echo json_encode(array("error" => $error));
        }
    }

    $conn->close();
?>
