<?php
include("./member.php");
include("./connection.php");

// 判斷請求頁面是誰
$requestBody = file_get_contents('php://input');
$check =  json_decode($requestBody, true);

// print_r($check);


if ($check["check"] == "shopcart") { // 購物車

    $id = getUserID();

    echo shopcartUse($id);
}
