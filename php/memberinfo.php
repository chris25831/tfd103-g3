<?php
   include("./connection.php");
   
   $A = file_get_contents('php://input');
   $B = json_decode($A,true);
   $MEMBERID = $B['memberID'];

   $sql = "SELECT * FROM User WHERE UserID = $MEMBERID";
   $statement = $pdo->query($sql);
   $data = $statement->fetchAll();
   $Username = "";
   $UserPhoto = "";
   foreach($data as $index => $row){
    $memberWeek = $row['UserName'];
    $memberphoto = $row['UserPhoto'];
   }
   
   $planmemberinfo = [];
   array_push($planmemberinfo,$memberWeek,$memberphoto);
   echo json_encode($planmemberinfo);
 
?>