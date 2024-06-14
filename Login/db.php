<?php
    //Cabeceras
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header("Access-Control-Allow-Credentials: true");

    // Verificacion de la solicitud 
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        
        http_response_code(200);
        exit();
    }
    $servername = "mysql";
    $username = "ismael";
    $password = "adminIsma123";
    $database = "Login";

    // Conexión
    $conn = new mysqli($servername, $username, $password, $database);

    // Verificar conexión
    if ($conn->connect_error) 
    {
        die("La conexión falló: " . $conn->connect_error);
    } 
    else 
    {
        echo "Conexión a la base de datos establecida";
    }

?>


