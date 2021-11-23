<?php
    include("./connection.php");  

    function getUserID(){
    //先判斷session是否存在
        if(!isset($_SESSION)){
            session_start(); 
        };

        //有登入session->回傳ID，無登入session->回傳空字串""
        return isset($_SESSION["UserID"]) ? $_SESSION["UserID"] : ""; 
    };
    
    $sessionUserID = intval(getUserID());
    // echo "ID?".$sessionUserID."?";

    $sql = "SELECT LikedPostID FROM User where UserID = $sessionUserID;";
    
    // echo "1";
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
   
    $statement = $pdo->query($sql);
    // $statement->bindValue(1, $sessionUserID); 
    // echo "2";
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    // print_r($data);

    // foreach($data as $index => $row){
    //     echo "oooo".$row["LikedPostID"];   //欄位名稱
    //        //欄位名稱
    // };
    // $dataArray = [];
    // $dataArray.array_push($data);
    // print_r($dataArray);
        // echo "3";
    echo json_encode($data, JSON_UNESCAPED_UNICODE);

?>