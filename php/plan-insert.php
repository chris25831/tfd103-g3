<?php
include("./connection.php");        

$Answer = $_POST["lightBoxAnswer"];
$memberID = $_POST["memberID"];
$membermethod = $_POST["method"];
$A= json_decode($Answer,true);

$RaceID = $A[0];
$Distance = $A[1];
$Week = $A[2];
$Level =$A[3];

// print_r ($A);
// echo ("//");
// echo ($memberID);
// echo ("/");
echo ($RaceID);
// echo ("/");
// echo ($Distance);
echo ("/");
echo gettype($Level);
// echo ("/");
// echo ($Week);
// echo ("/");
// echo ($membermethod);


// $sql ="DELETE FROM TrainingPlan";
$sql = "INSERT into TrainingPlan(TrainingPlanID, UserID, RaceID, TrainingDistance, TrainingLevel, TrainingWeek, TrainingMethod) VALUES (NOW(), $memberID, $RaceID, $Distance, '$Level', $Week, $membermethod)";
$pdo->exec($sql);




// $statement = $pdo->prepare($sql);

// $statement->bindValue(1, $memberID);
// $statement->bindValue(2, $RaceID);
// $statement->bindValue(3, $Distance);
// $statement->bindValue(4, $Level);
// $statement->bindValue(5, $Week);
// $statement->bindValue(6, $membermethod);
// $statement->execute();
// header()
?>