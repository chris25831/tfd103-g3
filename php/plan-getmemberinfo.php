<?php
    include("./connection.php");
   
    $A = file_get_contents('php://input');
    $B = json_decode($A,true);
 
    $MemberID = $B['memberID'];
 //   echo $MemberID;
    // $sql = "SELECT * FROM TrainingPlan WHERE UserID = ?";
    $sql = "SELECT * FROM TrainingPlan t join Race r on t.RaceID = r.RaceID WHERE UserID = ?";
    $statement = $pdo->prepare($sql);
    
    $statement->bindValue(1, $MemberID);
    $statement->execute();

    $data = $statement->fetchAll();
    $memberWeek="";
    $memberRace="";
    foreach($data as $index => $row){
        $memberWeek = $row['TrainingWeek'];
        $memberRace = $row['RaceDate'];
    }
    $memberinfo = [];
    $newDate = str_split($memberRace,11);
    $newnewDate = $newDate[0];
    array_push($memberinfo,$memberWeek,$newnewDate);
   
    echo json_encode($memberinfo);
   
?>