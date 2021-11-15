<?php
  // include("../../pdo/connect.php");     

  // ---------------------------------------------------
  $lightBoxAnswer = $_POST["answer"];
  //建立SQL  
  // $sql = "INSERT INTO member(Name, PWD, CreateDate) VALUES (?, ?, NOW())";

  // $statement = $pdo->prepare($sql);

  // $statement-> bindValue(1, $account);
  // $statement-> bindValue(2, $password);
  // $statement-> execute();

  //請睡4秒
  sleep(4);
  if($lightBoxAnswer){
    echo $lightBoxAnswer;
  }else{
    echo "失敗"; 

  }
  
  
  

?>