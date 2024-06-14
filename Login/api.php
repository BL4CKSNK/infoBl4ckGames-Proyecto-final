<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

    //Este archivo sirver como proxy para poder obtener los datos de a la api
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        exit(0);
    }

    $headers = [
        "Accept: application/json",
        "Content-Type: application/json"
    ];


    $postdata = file_get_contents("php://input");

    $ch = curl_init("https://www.freetogame.com/api/games");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postdata);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $response = curl_exec($ch);

    if ($response === false) {
        $error = curl_error($ch);
        curl_close($ch);
        echo json_encode(['message' => 'Curl error: ' . $error]);
        exit;
    }

    curl_close($ch);

    header('Content-Type: application/json');
    echo $response;
?>
