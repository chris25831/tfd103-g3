<?php
// include("./connection.php");

// ***字串****
$classCategory = htmlspecialchars($_POST["category"]);
$classTitle = htmlspecialchars($_POST["classTitle"]);
$classId = htmlspecialchars($_POST["classId"]);
$trainer = htmlspecialchars($_POST["trainer"]);
$price = htmlspecialchars($_POST["price"]);

$classInfo =  htmlspecialchars($_POST["classInfo"]);


//判斷 G&M . T
if ($classCategory == "T") {

    $classDate =  htmlspecialchars($_POST["classDate"]);
    $trainerExpertise = htmlspecialchars($_POST["trainerExpertise"]);
    // print_r($trainerExpertise);
    $trainerLicense = htmlspecialchars($_POST["trainerLicense"]);
    $ig = htmlspecialchars($_POST["ig"]);
} else {  //G&M

    // 判斷地點 G
    $checklocation = htmlspecialchars($_POST["classLocation"]);

    if (isset($checklocation)) {

        $classLocation = $checklocation;
        echo  $classLocation;
        echo "<br/>";
    }

    // 判斷營養素 M
    $checknutrients = htmlspecialchars($_POST["nutrients-cal"]);

    if (isset($checknutrients)) {
        $cal = $checknutrients;
        $protein =  htmlspecialchars($_POST["nutrients-protein"]);
        $carb =  htmlspecialchars($_POST["nutrients-carb"]);
        $fat =  htmlspecialchars($_POST["nutrients-fat"]);

        $nutrients = [$cal, $protein, $carb,  $fat];
        print_r($nutrients);
        echo "<br/>";
    }
}

echo "print";
print_r($_FILES);
echo "<br/>";

echo "判斷開始";
echo "<br/>";




// *****圖片******
// 判斷圖片不是空值
if (!empty($_FILES)) {

    //Web根目錄真實路徑, ex: C:/XAMPP/htdocs
    $ServerRoot = $_SERVER["DOCUMENT_ROOT"];

    //取得上傳的檔案資訊(陣列型態)=============================
    $fileName_arr = $_FILES["classimg"]["name"];  //檔案名稱含副檔名
    $fileTmpName_arr = $_FILES["classimg"]["tmp_name"]; //Server上的暫存檔路徑含檔名    
    // $fileType_arr = $_FILES["classimg"]["type"];    //檔案種類        
    // $fileSize_arr = $_FILES["classimg"]["size"];    //檔案尺寸
    $error_arr = $_FILES["classimg"]["error"];  //錯誤代碼
    //=======================================================

    //依上傳檔案的數量跑迴圈一一處理
    for ($i = 0; $i < count($fileName_arr); $i++) {

        //Server上的暫存檔路徑含檔名
        $filePath_Temp = $fileTmpName_arr[$i];

        //檔案最終存放位置
        $filePath = $ServerRoot . "/test/postover/" . $fileName_arr[$i];

        echo $fileName_arr[$i];

        //判斷是否上傳成功
        if ($error_arr[$i] > 0) {
            echo "上傳失敗: 錯誤代碼" . $error_arr[$i];
        } else {
            //將暫存檔搬移到正確位置
            move_uploaded_file($filePath_Temp, $filePath);

            //顯示檔案資訊
            echo "檔案存放位置：" . $filePath;
            echo "<br/>";
            // 畫面渲染用
            // echo "<img src='/FileUpload/" . $fileName_arr[$i] . "'/>";
            // echo "<br/><br/>";
        }
    }
}



// TODO:*****丟DB*****
