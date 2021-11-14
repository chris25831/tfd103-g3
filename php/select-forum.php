<?php
    include("./connection.php");  
    $sql = "SELECT * FROM Post";

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->query($sql);

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    
    // print_r($data);
    
    //將二維陣列取出顯示其值
    foreach($data as $index => $row){
        echo $row["PostID"];  
        echo "/";
        echo $row["UserID"];    
        echo "/";
        echo $row["PostTitle"];    
        echo "/";
        echo $row["PostData"];   
        echo "/";
        echo $row["PostCategory"];   
        echo "/";
        echo $row["ReportID"];    
        echo "/";
        echo $row["PostPhoto"];    
        echo "/";
        echo $row["Views"];    
        echo "/";
        echo $row["Likes"];    
        echo "/";
        echo $row["Comments"];    
        echo "<br>";
       }
?>