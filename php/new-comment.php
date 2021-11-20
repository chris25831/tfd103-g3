<?php
    include("./connection.php");  
    print_r($_REQUEST);

    // 需要直接從 php://input 獲取請求body的原始資料，自己反序列化成陣列或物件。
    $requestBody = file_get_contents('php://input');

    var_dump($requestBody);

    $formData = json_decode($requestBody, true);
  
    print_r($formData);

    $postId = $formData["postid"];
    $commentContent = $formData["commentContent"];
    $userId = $formData["userid"];
    echo "postid".$postId."";
    echo $commentContent;
    echo $userId;

    //建立SQL
    $sql = "INSERT into Comment(PostID, CommentContent, CommentPostDate ,UserID , Blocked) VALUES(?, ?, NOW(), ?, false)";
    echo "啥";
    $statement = $pdo->prepare($sql);

    $statement->bindValue(1, $postId);    
    $statement->bindValue(2, $commentContent); 
    $statement->bindValue(3, $userId); 

    $statement->execute();
    
    //執行
    // $pdo->exec($sql);
    // header("Location: ./select-forum.php");
?>