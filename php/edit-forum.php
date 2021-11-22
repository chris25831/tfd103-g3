<?php
    include("./connection.php");  

    $requestBody = file_get_contents('php://input');

    var_dump($requestBody);

    $formData = json_decode($requestBody, true);
  
    print_r($formData);




    $postId = $formData["postid"];
    $title = $formData["title"];
    $category = $formData["category"];
    $content = $formData["content"];
    echo "1";
    echo "title".$title."";

    $sql = "UPDATE Post SET PostTitle = ?, PostCategory = ?, PostContent = ? where PostID = ?;";
    echo "2";
    
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);

    $statement->bindValue(1, $title); 
    $statement->bindValue(2, $category); 
    $statement->bindValue(3, $content); 
    $statement->bindValue(4, $postId); 
    $statement->execute();
    echo "3";
    
    //抓出全部且依照順序封裝成一個二維陣列
    // $data = $statement->fetchAll();
    // print_r($data);
    echo "4";

    // echo json_encode($data,JSON_UNESCAPED_UNICODE);


?>