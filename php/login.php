<?php
    include("connection.php");

    // print_r($_REQUEST);

    // 需要直接從 php://input 獲取請求body的原始資料，自己反序列化成陣列或物件。
    $requestBody = file_get_contents('php://input');

    // var_dump($requestBody);

    $formData = json_decode($requestBody, true);
  
    // print_r($formData);

    $account = $formData["account"];
    $password = $formData["password"];

    $sql = "SELECT * FROM User where account = ? and password = ?;";

    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $account); 
    $statement->bindValue(2, $password); 
    $statement->execute();
    $data = $statement->fetchAll();

    $userId = "";
    $userName = "";
    foreach($data as $index => $row){
        $userId = $row["UserID"];
        $userName = $row["UserName"];
    }

    function setMemberInfo($userID, $userName){
        //先判斷session是否存在
        if(!isset($_SESSION)){
            session_start(); 
        }
        //Table 'ec_member'裡的ID欄位值
        $_SESSION["UserID"] = $userID; 

        //Table 'ec_member'裡的Account欄位值
        $_SESSION["UserName"] = $userName; 
    }    
    
    //判斷是否有會員資料?
    if($userId != "" && $userName != ""){    
        //將會員資訊寫入session
        setMemberInfo($userID, $userName);
        //導回產品頁        
        echo "登入成功";
        
    }else{
        //跳出提示停留在登入頁
        echo "帳號或密碼錯誤!"; 
    }

 
?>


