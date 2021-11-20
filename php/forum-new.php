<?php
    include("./connection.php");  
    print_r($_REQUEST);

    // 需要直接從 php://input 獲取請求body的原始資料，自己反序列化成陣列或物件。
    $requestBody = file_get_contents('php://input');

    var_dump($requestBody);

    $formData = json_decode($requestBody, true);
  
    print_r($formData);

    // $username = htmlspecialchars($_POST["username"]);
    $title = $formData["title"]; 
    $category = $formData["category"];
    $content = $formData["content"];
    // $photoOne = htmlspecialchars($_POST["photo-one"]);
    // $photoTwo = htmlspecialchars($_POST["photo-two"]);
    // $photoThree = htmlspecialchars($_POST["photo-three"]);
    
    //建立SQL
    $sql = "INSERT into Post(UserID, PostTitle, PostDate, PostCategory, PostContent, Blocked) VALUES(123456, ?, NOW(), ?, ?, false)";
    
    $statement = $pdo->prepare($sql);

    


    $statement->bindValue(1, $title);    
    $statement->bindValue(2, $category); 
    $statement->bindValue(3, $content); 
    // $statement->bindValue(4, $photoOne);
    // $statement->bindValue(5, $photoTwo);
    // $statement->bindValue(6, $photoThree);

    $statement->execute();
    
    //執行
    // $pdo->exec($sql);
    // header("Location: ./select-forum.php");
?>