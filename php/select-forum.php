<?php
    include("./connection.php");  
    
    // $sql = "SELECT * FROM Post p join User u on p.UserID = u.UserID";
    $sql = "SELECT * FROM Post where Blocked = 0;";
    // echo "1";
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->query($sql);
    // echo "2";
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


