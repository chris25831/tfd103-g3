<?php
    include("./connection.php");  
    print_r($_REQUEST);

    // 需要直接從 php://input 獲取請求body的原始資料，自己反序列化成陣列或物件。
    $requestBody = file_get_contents('php://input');

    var_dump($requestBody);

    $formData = json_decode($requestBody, true);
  
    print_r($formData);


    //處理圖片
    $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
    echo "$ServerRoot".$ServerRoot;

    //取得上傳的檔案資訊(陣列型態)=============================
    $fileName_arr = $_FILES["file"]["name"];    //檔案名稱含副檔名    
    $fileTmpName_arr = $_FILES["file"]["tmp_name"]; //Server上的暫存檔路徑含檔名    
    $fileType_arr = $_FILES["file"]["type"];    //檔案種類        
    $fileSize_arr = $_FILES["file"]["size"];    //檔案尺寸
    $error_arr = $_FILES["file"]["error"];  //錯誤代碼
    //=======================================================
    echo "test1";
  
    $photo_arr = $formData["photos"];
    // print_r($photo_arr);
    print_r($photo_arr["file"]["name"]);


    $filePathOne = "";
    $filePathTwo = "";
    $filePathThree = "";

    //依上傳檔案的數量跑迴圈一一處理
    for ($i = 0; $i < count($fileName_arr); $i++) {        

        //Server上的暫存檔路徑含檔名
        $filePath_Temp = $fileTmpName_arr[$i];
        // echo $filePath_Temp;
        //檔案最終存放位置
        $filePath = $ServerRoot."/FileUpload/".$fileName_arr[$i];
        echo "$filePath".$filePath;

        //判斷是否上傳成功
        if($error_arr[$i] > 0){
            echo "上傳失敗: 錯誤代碼".$error_arr[$i];
        }else{
            //將暫存檔搬移到正確位置
            move_uploaded_file($filePath_Temp, $filePath);

            //顯示檔案資訊
            echo "檔案存放位置：".$filePath;
            echo "<br/>";
            echo "類型：".$fileType_arr[$i];
            echo "<br/>";
            echo "大小：".$fileSize_arr[$i];
            echo "<br/>";
            echo "副檔名：".getExtensionName($filePath);
            echo "<br/>";
            echo "<img src='../src/images/forum/member-upload/".$fileName_arr[$i]."'/>";
            echo "<br/><br/>";
            echo "test3";

            if($i == 0) {
                $filePathOne = "../src/images/forum/member-upload/".$fileName_arr[$i]."";
            } else if($i == 1) {
                $filePathTwo = "../src/images/forum/member-upload/".$fileName_arr[$i]."";
            } else if($i == 2) {
                $filePathThree = "../src/images/forum/member-upload/".$fileName_arr[$i]."";
            }

        }
    }    
    //取得檔案副檔名
    function getExtensionName($filePath){
        $path_parts = pathinfo($filePath);
        return $path_parts["extension"];
    }
    //以上處理圖片

    $title = $formData["title"]; 
    $category = $formData["category"];
    $content = $formData["content"];
 
    
    //建立SQL
    $sql = "INSERT into Post(UserID, PostTitle, PostDate, PostCategory, PostContent, PostPhotoOne, PostPhotoTwo, PostPhotoThree, Blocked) VALUES(123456, ?, NOW(), ?, ?, ?, ?, ?, false)";
    
    $statement = $pdo->prepare($sql);

    


    $statement->bindValue(1, $title);    
    $statement->bindValue(2, $category); 
    $statement->bindValue(3, $content); 

    $statement->bindValue(4, $filePathOne);
    $statement->bindValue(5, $filePathTwo);
    $statement->bindValue(6, $filePathThree);

    $statement->execute();
    
    //執行
    // $pdo->exec($sql);
    // header("Location: ./select-forum.php");
?>