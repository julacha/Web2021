<?php
$conn = mysqli_connect("localhost", "root", "", "subscription");

if (!$conn) {
    echo "Connection error:" . mysqli_connect_error();
}
//echo "connected successfully";
