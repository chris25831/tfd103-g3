<?php

    include("./connection.php");  


    $sql = "UPDATE `Post` SET `PostTitle`=[value-3],`PostCategory`=[value-5],`PostContent`=[value-6],`PostPhotoOne`=[value-8],`PostPhotoTwo`=[value-9],`PostPhotoThree`=[value-10] WHERE `PostID` = ????;";


    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    // $statement = $pdo->query($sql);

    //抓出全部且依照順序封裝成一個二維陣列
    // $data = $statement->fetchAll();

    // echo json_encode($data,JSON_UNESCAPED_UNICODE);


?>