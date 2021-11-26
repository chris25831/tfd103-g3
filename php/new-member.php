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
    $username = $formData["username"];
    $phonenumber = $formData["phoneNumber"];
    $email = $formData["email"];


    
    //建立SQL
    $sql = "INSERT into User(UserName, UserIdentity, Points, Account, Password, Mobile, Email) VALUES(?, 'member', 0 ,? , ?, ?, ?);";
    
    $statement = $pdo->prepare($sql);
    
    $statement->bindValue(1, $username);
    $statement->bindValue(2, $account);    
    $statement->bindValue(3, $password); 
    
    $statement->bindValue(4, $phonenumber);    
    $statement->bindValue(5, $email);        

    $statement->execute();
    
    //執行
    // $pdo->exec($sql);
    // header("Location: ./select-forum.php");
?>