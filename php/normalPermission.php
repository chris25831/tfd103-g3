<?php
    include("./connection.php");  

    $requestBody = file_get_contents('php://input');
    // var_dump($requestBody);
    $formData = json_decode($requestBody, true);
    // print_r($formData);

    $userId = $formData["userid"];
    
    echo "11";
    $newUserId = intval($userId);

    $sql = "UPDATE User SET UserPermission = '0' where UserID = ?;";
    echo "22";
    echo "id".$newUserId;
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);

    $statement->bindValue(1, $newUserId); 
   
    $statement->execute();
    echo "33";
    
    //抓出全部且依照順序封裝成一個二維陣列
    // $data = $statement->fetchAll();
    // print_r($data);
    echo "44";

    // echo json_encode($data,JSON_UNESCAPED_UNICODE);


?>