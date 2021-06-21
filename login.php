<?php

include('assets/config/db_conn.php');

$req = json_decode(file_get_contents("php://input"), true);
$email = $req['email'];

function sendjson($response)
{
    header('Content-Type: application/json');
    echo json_encode($response);
    exit();
}

if (empty($email)) {
    sendjson(['message' => 'Email address is required', 'error' => true]);
} else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    sendjson(['message' => 'Email address is not valid', 'error' => true]);
}

$query = "SELECT * FROM users WHERE  email = '$email'";
$result = mysqli_query($conn, $query);
$count = mysqli_num_rows($result);

if ($count > 0) {
    sendjson(['message' => 'Login Successful']);
} else {
    sendjson(['message' => 'Login Not Successful', 'error' => true]);
}
