<?php
    include("./connection.php");  
    
    // print_r($_REQUEST);
    // 需要直接從 php://input 獲取請求body的原始資料，自己反序列化成陣列或物件。
    $requestBody = file_get_contents('php://input');

    // var_dump($requestBody);

    $formData = json_decode($requestBody, true);
    
    // print_r($formData);

    $postId = $formData["postid"];


    $sql = "SELECT * FROM Comment where PostID = ?;";
    

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);
    // $statement = $pdo->prepare($sql);

    $statement->bindValue(1, $postId); 

    $statement->execute();
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll(); 
    // print_r($data);
    echo json_encode($data);
    // echo json_encode($data, SON_UNESCAPED_UNICODE);

?>  