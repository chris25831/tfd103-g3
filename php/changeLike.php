<?php
    include("./connection.php");  

    $requestBody = file_get_contents('php://input');
    // var_dump($requestBody);
    $formData = json_decode($requestBody, true);
    // print_r($formData);    

    include("./connection.php");  

    $requestBody = file_get_contents('php://input');
    // var_dump($requestBody);
    $formData = json_decode($requestBody, true);
    // print_r($formData);

    function getUserID(){
        //先判斷session是否存在
        if(!isset($_SESSION)){
            session_start(); 
        }

        //有登入session->回傳ID，無登入session->回傳空字串""
        return isset($_SESSION["UserID"]) ? $_SESSION["UserID"] : ""; 

    }

    $like = $formData["changeLike"];
   
    $sessionUserID = intval(getUserID());
    
    $sql = "UPDATE User SET likedPostID = ? where UserID = ?;";

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);

    $statement->bindValue(1, $like); 
    $statement->bindValue(2, $sessionUserID); 

    $statement->execute();

   



?>