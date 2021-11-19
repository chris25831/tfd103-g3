<?php
    include("./connection.php");  

    // $username = htmlspecialchars($_POST["username"]);
    $title = htmlspecialchars($_POST["title"]);
    $theTime = htmlspecialchars($_POST["time"]);
    $category = htmlspecialchars($_POST["category"]);
    $content = htmlspecialchars($_POST["content"]);
    $photoOne = htmlspecialchars($_POST["photo-one"]);
    $photoTwo = htmlspecialchars($_POST["photo-two"]);
    $photoThree = htmlspecialchars($_POST["photo-three"]);

    //建立SQL
    // $sql = "INSERT into Post(PostTitle, PostDate, PostCategory, PostContent, PostPhotoOne, PostPhotoTwo, PostPhotoThree) VALUES('title', NOW(), 1, 'content', 'photo1', 'photo2', 'photo3');";
    $sql = "INSERT into Post(UserID, PostTitle, PostDate, PostCategory, PostContent, PostPhotoOne, PostPhotoTwo, PostPhotoThree) VALUES(123456, ?, NOW(), ?, ?, ?, ?, ?);";
    
    $statement = $pdo->prepare($sql);

    
    // $statement->bindValue(2, $username);

    $statement->bindValue(1, $title);    
    $statement->bindValue(2, $category); 
    $statement->bindValue(3, $content); 
    $statement->bindValue(4, $photoOne);
    $statement->bindValue(5, $photoTwo);
    $statement->bindValue(6, $photoThree);

    $statement->execute();
    
    //執行
    // $pdo->exec($sql);
    // header("Location: ./select-forum.php");
?>