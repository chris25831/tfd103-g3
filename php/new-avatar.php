<?php

    include("./connection.php");  
    // print_r($_REQUEST);

    // 需要直接從 php://input 獲取請求body的原始資料，自己反序列化成陣列或物件。
    $requestBody = file_get_contents('php://input');

    // var_dump($requestBody);

    $formData = json_decode($requestBody, true);

    // print_r($formData);

    $fileName = $_FILES["file"]["name"];

    $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
    $filePath = $ServerRoot."/tfd103/g3/tfd103-g3/src/images/img/member/".$fileName;
    // echo $filePath;
    move_uploaded_file($_FILES["file"]["tmp_name"], $filePath);

    function getUserID(){
        //先判斷session是否存在
        if(!isset($_SESSION)){
            session_start(); 
        };

        //有登入session->回傳ID，無登入session->回傳空字串""
        return isset($_SESSION["UserID"]) ? $_SESSION["UserID"] : "";
    }
    $relativePath = "./src/images/img/member/".$fileName;
    
    $sessionUserID = intval(getUserID());
    //建立SQL
    // $sql = "INSERT into User(UserPhoto) VALUES(?);";
    $sql = "UPDATE User SET UserPhoto = ? where UserID = $sessionUserID;";
    
    $statement = $pdo->prepare($sql);

    $statement->bindValue(1, $relativePath);     
   
    $statement->execute();

    echo "filePath:".$filePath;


?>