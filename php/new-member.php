<?php
    include("./connection.php");  
    print_r($_REQUEST);

    // 需要直接從 php://input 獲取請求body的原始資料，自己反序列化成陣列或物件。
    $requestBody = file_get_contents('php://input');

    var_dump($requestBody);

    $formData = json_decode($requestBody, true);
    
    print_r($formData);

    $account = $formData["account"];
    $password = $formData["password"];

    //建立SQL
    $sql = "INSERT into User(Account, Password) VALUES(?, ?);";
    
    $statement = $pdo->prepare($sql);

    $statement->bindValue(1, $account);    
    $statement->bindValue(2, $password); 

    $statement->execute();
    
    //執行
    // $pdo->exec($sql);
    // header("Location: ./select-forum.php");
?>