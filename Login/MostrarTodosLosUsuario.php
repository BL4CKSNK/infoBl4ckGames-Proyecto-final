<?php
    include 'db.php';

    $sql = "SELECT idUsuarios, NombreUsuario FROM Usuarios";
    $result = $conn->query($sql);

    $users = array();
    if ($result->num_rows > 0) 
    {
        while($row = $result->fetch_assoc()) 
        {
            $users[] = $row;
        }
    }

    header('Content-Type: application/json');
    echo json_encode($users);

    $conn->close();
?>
