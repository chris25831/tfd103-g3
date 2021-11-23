<?php
   include("./connection.php");        
 
  
  // ---------------------------------------------------
  $MemberID = $_POST["memberID"];
//   echo $MemberID;


  $sql = "SELECT * FROM TrainingPlan WHERE UserID = '123460'";
  $statement = $pdo->query($sql);
  $data = $statement->fetchAll();
  foreach($data as $index => $row){
        // echo $row["TrainingPlanID"];   //欄位名稱
        // echo " / ";
        // echo $row["RaceID"];    
        // echo " / ";
        $Distance = $row["TrainingDistance"];   
        // echo " / ";
        // echo $row["UserID"];    
        // echo " / ";
        $Level = $row["TrainingLevel"];    
        // echo " / ";
        // echo $row["TrainingWeek"];    
        // echo " / ";
        $newMethod = $row["TrainingMethod"];    
        // echo " / ";
    }

    
    $TotalTime = ""; 

  switch($Distance){
    case 226; //226K
    $TotalTime = 120; //周總時數
    break;

    case 113;
    $TotalTime = 90;
    break;

    case 51.5;
    $TotalTime = 70;
    break;

    default:
     echo "請重新選擇";
    break;
  }

  if($Level === "hard"){
    $new = $TotalTime + 10;
  }else if($Level === "eazy"){
    $new = $TotalTime - 10;
  }else{
    $new = $TotalTime;
  }

// //   echo $new; //最終總數
// //   echo " / ";
  
 

  $sql = "SELECT * FROM TrainingTime WHERE TrainingMethod = $newMethod";
  $statement = $pdo->query($sql);
  $data = $statement->fetchAll();

  
  $Swim = $data[0];
  $Run = $data[1];
  $Bike = $data[2];
  
  $SwimsportID = $Swim[SportID];
  $SwimDay1 = $Swim[Day_1];
  $SwimDay2 = $Swim[Day_2];
  $SwimDay3 = $Swim[Day_3];
  $SwimDay4 = $Swim[Day_4];
  $SwimDay5 = $Swim[Day_5];
  $SwimDay6 = $Swim[Day_6];
  $SwimDay7 = $Swim[Day_7];
  $SwimArray = [];
  array_push($SwimArray,$SwimDay1,$SwimDay2,$SwimDay3,$SwimDay4,$SwimDay5,$SwimDay6,$SwimDay7);
  
  $RunsportID = $Run[SportID];
  $RunDay1 = $Run[Day_1];
  $RunDay2 = $Run[Day_2];
  $RunDay3 = $Run[Day_3];
  $RunDay4 = $Run[Day_4];
  $RunDay5 = $Run[Day_5];
  $RunDay6 = $Run[Day_6];
  $RunDay7 = $Run[Day_7];  
  $RunArray = [];
  array_push($RunArray,$RunDay1,$RunDay2,$RunDay3,$RunDay4,$RunDay5,$RunDay6,$RunDay7);
  
  $BikesportID = $Bike[SportID];
  $BikeDay1 = $Bike[Day_1];
  $BikeDay2 = $Bike[Day_2];
  $BikeDay3 = $Bike[Day_3];
  $BikeDay4 = $Bike[Day_4];
  $BikeDay5 = $Bike[Day_5];
  $BikeDay6 = $Bike[Day_6];
  $BikeDay7 = $Bike[Day_7];  
  $BikeArray = [];
  array_push($BikeArray,$BikeDay1,$BikeDay2,$BikeDay3,$BikeDay4,$BikeDay5,$BikeDay6,$BikeDay7);
  
  $arrayName = array("sport","method","day1","day2","day3","day4","day5","day6","day7");
  
  foreach($SwimArray as $value){
      $newSwim[] = $new*$value;
  }
  foreach($RunArray as $value){
      $newRun[] = $new*$value;
  }
  foreach($BikeArray as $value){
      $newBike[] = $new*$value;
  }
  
      
      
      array_unshift($newSwim,$SwimsportID,$newMethod);
      $newSwimArray = array_combine($arrayName,$newSwim);
    //   echo json_encode($newSwimArray);
      
      array_unshift($newRun,$RunsportID,$newMethod);
      $newRunArray = array_combine($arrayName,$newRun); 
    //   echo json_encode($newRunArray);
      
      array_unshift($newBike,$BikesportID,$newMethod);
      $newBikeArray = array_combine($arrayName,$newBike); 
    //   echo json_encode($newBikeArray);
    
      $TotalArray = [];
      array_push($TotalArray,$newSwimArray,$newRunArray,$newBikeArray);
      echo json_encode($TotalArray);
  
  

?>