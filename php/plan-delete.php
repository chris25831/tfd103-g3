<?php
   include("./connection.php");
   
   $A = file_get_contents('php://input');
   $B = json_decode($A,true);

  $MemberID = $B['memberID'];
//   echo $MemberID;
  $sql = "DELETE FROM TrainingPlan WHERE UserID = ?";
  
  $statement = $pdo->prepare($sql);
    
  $statement->bindValue(1, $MemberID);
  $statement->execute();
  echo "刪除成功";
  
?>