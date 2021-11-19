<?php
    include("./connection.php");  
    

    $PostID = $_GET["postid"];
   
    //刪除文章功能
    $sql = "UPDATE `Post` SET Blocked = 1 where PostID = 1;";
    
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->query($sql);

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();

    // print_r($data);

    // echo json_encode($data);
    // echo json_encode($data,JSON_UNESCAPED_UNICODE);
   
?>