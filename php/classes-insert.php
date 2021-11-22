<?php
// include("./connection.php");

// ***字串****
$classCategory = htmlspecialchars($_POST["category"]);
$classTitle = htmlspecialchars($_POST["classTitle"]);
// Id自動產生
// $classId = htmlspecialchars($_POST["classId"]);
$trainer = htmlspecialchars($_POST["trainer"]);
$price = htmlspecialchars($_POST["price"]);
$classInfo =  htmlspecialchars($_POST["classInfo"]);

// 教練課程組合物件
$personalCoach = new stdClass();




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
    $error_arr = $_FILES["classimg"]["error"];  //錯誤代碼
    //=======================================================

    //依上傳檔案的數量跑迴圈一一處理
    for ($i = 0; $i < count($fileName_arr); $i++) {

        //Server上的暫存檔路徑含檔名
        $filePath_Temp = $fileTmpName_arr[$i];

        //檔案最終存放位置
        // $filePath = $ServerRoot . "/test/postover/" . $fileName_arr[$i];
        $filePath = $ServerRoot . $fileName_arr[$i];

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



// *****丟DB*****

if ($classCategory == "T") {
    // 丟入組合物件
    $personalCoach->name = [$classTitle];
    $personalCoach->date = [$classDate];
    $personalCoach->price = [$price];

    // echo json_encode($personalCoach);

    $sql = "INSERT into Coach (CoachName, CoachExpertise, CoachPhoto, CoachLicense, CoachIG, CoachProfile, PersonalCoach) VALUES(?, ?, ?, ?, ?, ?, ?)";

    $statement = $pdo->prepare($sql);

    $statement->bindValue(1, $trainer);
    $statement->bindValue(2, $trainerExpertise);
    $statement->bindValue(3, $filePath);
    $statement->bindValue(4, $trainerLicense);
    $statement->bindValue(5, $ig);
    $statement->bindValue(6, $classInfo);
    $statement->bindValue(7, json_encode($personalCoach));

    $statement->execute();
} else {
    // G&M
    if ($classCategory == "G") {

        $sql = "INSERT into Course (CourseCatalog, CourseName, CourseContent, CoursePhoto, CourseLocation, CoachName, Price, Blocked) VALUES(?, ?, ?, ?, ?, ?, ?, ?)";
        $statement = $pdo->prepare($sql);

        $statement->bindValue(1, $classCategory);
        $statement->bindValue(2, $classTitle);
        $statement->bindValue(3, $classInfo);
        $statement->bindValue(4, $filePath);
        $statement->bindValue(5, $classLocation);
        $statement->bindValue(6, $trainer);
        $statement->bindValue(7, $price);
        $statement->bindValue(8, 0);
    } else {

        $sql = "INSERT into Course (CourseCatalog, CourseName, CourseContent, CoursePhoto, Nutrition, CoachName, Price, Blocked) VALUES(?, ?, ?, ?, ?, ?, ?, ?)";
        $statement = $pdo->prepare($sql);

        $statement->bindValue(1, $classCategory);
        $statement->bindValue(2, $classTitle);
        $statement->bindValue(3, $classInfo);
        $statement->bindValue(4, $filePath);
        $statement->bindValue(5, $nutrients);
        $statement->bindValue(6, $trainer);
        $statement->bindValue(7, $price);
        $statement->bindValue(8, 0);
    }
}
