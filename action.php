<?php
header('Content-Type: application/json');
// header('Access-Control-Allow-Origin:script.js');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$values = array_intersect_key($_POST, array_flip(['email', 'subscription']));

$output = [];

if (count($values) === 2) {
    //print_r($values);
    file_put_contents('data/' . $values['email'] . '.json', json_encode($values));
    $output['message'] = $values['email'] . " preferences has been set up";
} else {
    $output['error'] = "Please conform conditions";
}

echo json_encode($output);
