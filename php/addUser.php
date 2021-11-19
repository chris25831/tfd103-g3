<?php
    include("./connection.php");  
    
    $sql = 'INSERT INTO `User`(`UserID`, `UserName`, `UserPermission`, `TrainingPlanID`, `UserIdentity`, `Account`, `Password`, `Brithday`, `Mobile`, `Address`, `Email`, `Points`, `LoginDays`, `UserPhoto`, `PostID`) VALUES (8888, "Johnny","member","","normal","account","password","1992/01/01",0912123123,"台北市南京東路","johnny@google.com", 101, 3, "avatar","");';
    $statement = $pdo->prepare($sql);
    $statement->execute();
?>
