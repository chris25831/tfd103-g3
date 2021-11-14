<?php
    include("./connection.php");  

    $title = htmlspecialchars($_POST["title"]);
    $category = htmlspecialchars($_POST["category"]);
    $content = htmlspecialchars($_POST["content"]);

    //建立SQL
    $sql = "INSERT INTO member(PostID, UserID, PostTitle, PostDate, PostCategory, PostContent, PostPhoto) VALUES (?, ?, ?, NOW(), ?, ?, ?)";

    $statement = $pdo->prepare($sql);
    $statement->bindValue(3, $title);
    $statement->bindValue(5, $category); 
    $statement->bindValue(7, $content); 

    $statement->execute();
    
    //執行
    // $pdo->exec($sql);
    header("Location: Select.php");
    
?>