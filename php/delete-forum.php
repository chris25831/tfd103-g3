<?php
    include("./connection.php");  

    $requestBody = file_get_contents('php://input');

    var_dump($requestBody);

    $formData = json_decode($requestBody, true);
  
    print_r($formData);



    $postid = $formData["postid"];
    echo "1";
    //刪除文章功能
    echo "1-1".$postid."";
    // $sql = "UPDATE Post SET Blocked = 1 where PostID = $PostID;";
    
    $sql = "UPDATE Post SET Blocked = true WHERE PostID = ?";
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    echo "2";
    $statement = $pdo->prepare($sql);
    echo "3";
    $statement->bindValue(1, $postid); 
    echo "4";
    //抓出全部且依照順序封裝成一個二維陣列
    // $data = $statement->fetchAll();
    $statement->execute();
    echo "5";
    // print_r($data);

    // echo json_encode($data);
    // echo json_encode($data,JSON_UNESCAPED_UNICODE);
   
?>