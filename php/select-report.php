<?php
    include("./connection.php");
    $sql = "SELECT * FROM Report r join Post p on r.PostID = p.PostID where Blocked = 0;";


    $statement = $pdo->query($sql);
    // echo "2";
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    
    echo json_encode($data,JSON_UNESCAPED_UNICODE);
?>