<?php

include 'db.php';
$response = array();

// Verificar si se ha enviado el formulario de registro
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['register'])) 
{
    // Obtener los datos del formulario de registro y realizar la validación
    $usuario = isset($_POST['usuario']) ? $_POST['usuario'] : '';
    $correo = isset($_POST['correo']) ? $_POST['correo'] : '';
    $contra = isset($_POST['contra']) ? $_POST['contra'] : '';

    // Validación de datos de entrada
    if (empty($usuario) || empty($correo) || empty($contra)) {
        $response['success'] = false;
        $response['message'] = "Por favor, complete todos los campos.";
    } elseif (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        $response['success'] = false;
        $response['message'] = "Por favor, introduzca un correo electrónico válido.";
    } elseif (strlen($contra) < 6) {
        $response['success'] = false;
        $response['message'] = "La contraseña debe tener al menos 6 caracteres.";
    } else {
        // Verificar si el correo ya está registrado
        $sql_check = "SELECT COUNT(*) AS count FROM Usuarios WHERE Email = ?";
        $stmt_check = $conn->prepare($sql_check);
        $stmt_check->bind_param("s", $correo);
        $stmt_check->execute();
        $result_check = $stmt_check->get_result();
        $row = $result_check->fetch_assoc();

        if ($row['count'] > 0) {
            $response['success'] = false;
            $response['message'] = "El correo ya está registrado.";
        } else {
            // Prevenir la inyección SQL utilizando consultas preparadas
            $sql = "INSERT INTO Usuarios (NombreUsuario, Email, contra) VALUES (?, ?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("sss", $usuario, $correo, $contra);

            if ($stmt->execute()) {
                $response['success'] = true;
                $response['message'] = "Registro exitoso";
            } else {
                $response['success'] = false;
                $response['message'] = "Error al registrar el usuario: " . $stmt->error;
            }

            $stmt->close();
        }
        $stmt_check->close();
    }
} 
else 
{
    $response['success'] = false;
    $response['message'] = "No se ha enviado el formulario de registro";
}
$conn->close();

header('Content-Type: application/json');
echo json_encode($response);
?>
