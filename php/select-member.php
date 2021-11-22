<?php
    include("./connection.php");  
    
    function getUserID(){
        //先判斷session是否存在
        if(!isset($_SESSION)){
            session_start(); 
        };

        //有登入session->回傳ID，無登入session->回傳空字串""
        return isset($_SESSION["UserID"]) ? $_SESSION["UserID"] : ""; 
    }

    $sessionUserID = intval(getUserID());

    $sql = "SELECT * FROM User where UserID = $sessionUserID;";
    
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->query($sql);
    // $statement->bindValue(1, $sessionUserID); 
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    
    // print_r($data);

    echo json_encode($data);
    // echo json_encode($data,JSON_UNESCAPED_UNICODE);
    //將二維陣列取出顯示其值

    // foreach($data as $index => $row){
    //     echo json_encode([$index => $row]);
    // }
?>

