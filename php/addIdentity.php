<?php
    include("./connection.php");  

    // $requestBody = file_get_contents('php://input');
    // // var_dump($requestBody);
    // $formData = json_decode($requestBody, true);
    // // print_r($formData);

    function getUserID(){
        //先判斷session是否存在
        if(!isset($_SESSION)){
            session_start(); 
        }

        //有登入session->回傳ID，無登入session->回傳空字串""
        return isset($_SESSION["UserID"]) ? $_SESSION["UserID"] : ""; 

    }
    

    // $name = $formData["name"];
    // $birthday = $formData["birthday"];
    // $phone = $formData["phone"];
    // $address = $formData["address"];
    // $sessionUserID = intval(getUserID());
    // echo "exist?".$sessionUserID;
    
    $sql = "UPDATE User SET UserIdentity = 'member', Points = 0 where UserID = 123494;";


    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);

    // $statement->bindValue(1, $name); 
    // $statement->bindValue(2, $birthday); 
    // $statement->bindValue(3, $phone); 
    // $statement->bindValue(4, $address); 
    // $statement->bindValue(5, $sessionUserID); 

    $statement->execute();
    // echo "sessionID?????".$_SESSION["UserID"];
    //抓出全部且依照順序封裝成一個二維陣列
    // $data = $statement->fetchAll();
    // print_r($data);

    // echo json_encode($data,JSON_UNESCAPED_UNICODE);
?>