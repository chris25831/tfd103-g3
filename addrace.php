<?php
      include("connection.php");     

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
       //建立SQL
       $sql = "INSERT INTO Race(RaceId, RaceName, RaceDate,RaceLocation,RaceSponsor,RaceDistance,RaceUpdate,RaceLink,RaceContent,RacePhoto ) VALUES (NOW(),'".$racename."','".$racedate."','".$racelocation."','".$racesponsor."','".$racedistance."','".$raceupdate."','".$racelink."','".$racecontent."','".$racephoto."')";
      
       //執行
       $pdo->exec($sql);


?>
