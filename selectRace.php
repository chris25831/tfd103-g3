<?php

      include("connection.php");

       //---------------------------------------------------

       //建立SQL語法
       $sql = "SELECT * FROM Race";

       //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
       $statement = $pdo->query($sql);

       //抓出全部且依照順序封裝成一個二維陣列
       $racedata = $statement->fetchAll();
       

       //將二維陣列取出顯示其值
       foreach($racedata as $index => $row){
	       echo $row["RaceID"];   //欄位名稱
	       echo " / ";
	       echo $row["RaceName"];    
	       echo " / ";
	       echo $row["RaceDate"]; 
         echo " / ";
	       echo $row["RaceLocation"];   
         echo " / ";
	       echo $row["RaceSponsor"];
         echo " / ";
	       echo $row["RaceDistance"];
         echo " / ";
	       echo $row["RaceUpdate"];
         echo " / ";
	       echo $row["RaceLink"];
         echo " / ";
	       echo $row["RaceContent"];
         echo " / ";
	       echo $row["RacePhoto"];
         echo "<br>";
       }

?>
