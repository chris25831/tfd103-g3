<?php

    include("./connection.php");  
    // print_r($_REQUEST);

    // 需要直接從 php://input 獲取請求body的原始資料，自己反序列化成陣列或物件。
    $requestBody = file_get_contents('php://input');

    // var_dump($requestBody);

    $formData = json_decode($requestBody, true);

    // print_r($formData);

    $fileName = $formData["avatar"];
    $virtualPath = $formData["source"];
    
    $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
    $filePath = "../src/images/img/member/".$fileName;
    // echo $filePath;
    move_uploaded_file($virtualPath, $filePath);
    // print_r($FILES["file"]);
    // exit();

    // //判斷是否上傳成功
    // if($_FILES["file"]["error"] > 0){
    //     echo "上傳失敗: 錯誤代碼".$_FILES["file"]["error"];
    // }else{
    //     //取得上傳的檔案資訊=======================================
    //     $fileName = $_FILES["file"]["name"];    //檔案名稱含副檔名        
    //     $filePath_Temp = $_FILES["file"]["tmp_name"];   //Server上的暫存檔路徑含檔名        
    //     $fileType = $_FILES["file"]["type"];    //檔案種類        
    //     $fileSize = $_FILES["file"]["size"];    //檔案尺寸
    //     //=======================================================

    //     //Web根目錄真實路徑
    //     $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
        
    //     //檔案最終存放位置
    //     $filePath = $ServerRoot."/FileUpload/".$fileName;

    //     $extensionName = getExtensionName($filePath);

    //     if($extensionName === "jpg" || $extensionName === "png" || $extensionName === "gif"){
    //             //將暫存檔搬移到正確位置
    //         move_uploaded_file($filePath_Temp, $filePath);
            
    //         //顯示檔案資訊
    //         echo "檔案存放位置：".$filePath;
    //         echo "<br/>";
    //         echo "類型：".$fileType;
    //         echo "<br/>";
    //         echo "大小：".$fileSize;
    //         echo "<br/>";
    //         echo "副檔名：".getExtensionName($filePath);
    //         echo "<br/>";
    //         echo "<img src='/FileUpload/".$fileName."'/>";
    //     }   else {
    //         echo "檔案格式錯誤";
    //     }
    // }

    // //取得檔案副檔名
    // function getExtensionName($filePath){
    //     $path_parts = pathinfo($filePath);
    //     return $path_parts["extension"];
    // }

    function getUserID(){
        //先判斷session是否存在
        if(!isset($_SESSION)){
            session_start(); 
        };

        //有登入session->回傳ID，無登入session->回傳空字串""
        return isset($_SESSION["UserID"]) ? $_SESSION["UserID"] : "";
    }
    $relativePath = "./src/images/img/member/".$fileName;
    $sessionUserID = intval(getUserID());
    //建立SQL
    // $sql = "INSERT into User(UserPhoto) VALUES(?);";
    $sql = "UPDATE User SET UserPhoto = ? where UserID = $sessionUserID;";
    
    $statement = $pdo->prepare($sql);

    $statement->bindValue(1, $relativePath);     
   
    $statement->execute();


?>