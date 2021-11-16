<?php
    include("./connection.php");  

    $title = htmlspecialchars($_POST["title"]);
    $category = htmlspecialchars($_POST["category"]);
    $content = htmlspecialchars($_POST["content"]);

    //建立SQL
    $sql = "INSERT INTO member(PostID, UserID, PostTitle, PostDate, PostCategory, PostContent, PostPhoto) VALUES (?, ?, ?, NOW(), ?, ?, ?)";
    // $sql = "INSERT INTO member(PostID, UserID, PostTitle, PostDate, PostCategory, PostContent, PostPhoto) VALUES ('001100', '6600', '今天天氣真好', NOW(), '閒聊', '內容內容', '')";


    $statement = $pdo->prepare($sql);
    // $statement->bindValue(3, $title);
    // $statement->bindValue(5, $category); 
    // $statement->bindValue(7, $content); 

    $statement->execute();
    
    //執行
    // $pdo->exec($sql);
    header("Location: Select.php");
    
?>