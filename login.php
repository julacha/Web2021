<?php

include('assets/config/db_conn.php');


$post = $_POST;
if (isset($post['login'])) {
    // $email = $post['email'];

    if (empty($post['email'])) {
        echo 'Email address is required';
        exit();
    } else
        $email = $post['email'];

    $query = "SELECT * FROM users WHERE  email = '$email'";
    $result = mysqli_query($conn, $query);
    $count = mysqli_num_rows($result);

    if ($count > 0) {
        echo "Login Successful";
    } else {
        echo "Login Not Successful";
    }
}
