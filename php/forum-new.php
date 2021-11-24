<?php
    include("./connection.php");  
    print_r($_REQUEST);

    // 需要直接從 php://input 獲取請求body的原始資料，自己反序列化成陣列或物件。
    $requestBody = file_get_contents('php://input');

    var_dump($requestBody);

    $formData = json_decode($requestBody, true);
  
    print_r($formData);



    $user = $formData["user"];
    $title = $formData["title"]; 
    $category = $formData["category"];
    $content = $formData["content"];
    
    echo "user".$user;
    //建立SQL
    $sql = "INSERT into Post(UserID, PostTitle, PostDate, PostCategory, PostContent, Blocked) VALUES(?, ?, NOW(), ?, ?, false)";
    
    $statement = $pdo->prepare($sql);

    

    $statement->bindValue(1, $user);    
    $statement->bindValue(2, $title);    
    $statement->bindValue(3, $category); 
    $statement->bindValue(4, $content); 

    $statement->execute();
    
    //執行
    // $pdo->exec($sql);
    // header("Location: ./select-forum.php");
?>