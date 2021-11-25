<?php
    include("./connection.php");
   
    $A = file_get_contents('php://input');
    $B = json_decode($A,true);
 
    $MemberID = $B['memberID'];
 //   echo $MemberID;
    // $sql = "SELECT * FROM TrainingPlan WHERE UserID = ?";
    $sql = "SELECT TrainingWeek,RaceDate, FROM TrainingPlan t join Race r on t.RaceID = r.RaceID WHERE UserID = ?";
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




select EMPLOYEE_ID,city,DEPARTMENT_NAME--EMPLOYEE_ID(EMPLOYEES)、city(LOCATIONS)、DEPARTMENT_NAME(DEPARTMENTS)

from EMPLOYEES e join DEPARTMENTS d --擷取這兩個資料表，並給予別名

on d.DEPARTMENT_ID = e.DEPARTMENT_ID--篩選條件：當兩方相等時(where d.DEPARTMENT_ID = e.DEPARTMENT_ID)

join LOCATIONS L--加入擷取新資料表

on d.LOCATION_ID = L.LOCATION_ID--篩選條件：當兩方相等時(d.LOCATION_ID = L.LOCATION_ID)

order by EMPLOYEE_ID