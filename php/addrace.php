<?php
      include("./connection.php");     

       //---------------------------------------------------
       $racename = $_POST["RaceName"];
       $racedate = $_POST["RaceDate"];
       $racelocation = $_POST["RaceLocation"];
       $racesponsor = $_POST["RaceSponsor"];
       $racedistance = $_POST["RaceDistance"];
       $raceupdate = $_POST["RaceUpdate"];
       $racelink = $_POST["RaceLink"];
       $racecontent = $_POST["RaceContent"];
       $racephoto = $_POST["RacePhoto"];
       $raceid = date("YmdHis"); 
      //  $raceid = substr(date("YmdHis"), -10); 
       
       //建立SQL
       $sql = "INSERT INTO Race(RaceID, RaceName, RaceDate,RaceLocation,RaceSponsor,RaceDistance,RaceUpdate,RaceLink,RaceContent,RacePhoto ) VALUES ('".$raceid."','".$racename."','".$racedate."','".$racelocation."','".$racesponsor."','".$racedistance."','".$raceupdate."','".$racelink."','".$racecontent."','".$racephoto."')";
       //清掉所有資料再打開這個
       //  $sql = "DELETE FROM Race";
       $pdo->exec($sql);
       
       
       //$statement-> execute();
       header("Location: ./selectRace.php");
?>
