<?php

        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: *");
        header("Access-Control-Allow-Headers: Origin, Methods, Content-Type");

        //MySQL相關資訊
        $db_host = "localhost";
        $db_user = "xumtgata_maggiewang";
        $db_pass = "melody624Melody113";
        $db_select = "xumtgata_G3";

       //建立資料庫連線物件
       $dsn = "mysql:host=".$db_host.";dbname=".$db_select;

       //建立PDO物件，並放入指定的相關資料
       $pdo = new PDO($dsn, $db_user, $db_pass);
       
    
?>
