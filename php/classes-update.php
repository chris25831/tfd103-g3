<?php
include("./connection.php");

// ***字串****
$classCategory = htmlspecialchars($_POST["category"]);
$classTitle = htmlspecialchars($_POST["classTitle"]);
// 判斷GMT
$classId = htmlspecialchars($_POST["classId"]);
$shortid = htmlspecialchars($_POST["idUpdate"]);
$trainer = htmlspecialchars($_POST["trainer"]);
$price = htmlspecialchars($_POST["price"]);
$classInfo =  htmlspecialchars($_POST["classInfo"]);

echo $shortid;

// 教練課程組合物件
$personalCoach = new stdClass();

// 照片陣列
$classimgList = [];


//判斷 G&M . T
if ($classCategory == "T") {

    $classDate =  htmlspecialchars($_POST["classDate"]);
    $trainerExpertise = htmlspecialchars($_POST["trainerExpertise"]);
    // print_r($trainerExpertise);
    $trainerLicense = htmlspecialchars($_POST["trainerLicense"]);
    $ig = htmlspecialchars($_POST["ig"]);
} else {  //G&M

    // 地點 
    $checklocation = htmlspecialchars($_POST["classLocation"]);

    echo "判斷地點:" . $checklocation;
    echo "<br/>";

    if (isset($checklocation)) {

        $classLocation = $checklocation;
        echo  "地點" . $classLocation;
        echo "<br/>";
    }

    // 營養素
    $checknutrients = htmlspecialchars($_POST["nutrients-cal"]);

    if (isset($checknutrients)) {
        echo  "近來營養素抓取";
        echo "<br/>";
        // 營養素 M
        $cal = $checknutrients;
        $protein =  htmlspecialchars($_POST["nutrients-protein"]);
        $carb =  htmlspecialchars($_POST["nutrients-carb"]);
        $fat =  htmlspecialchars($_POST["nutrients-fat"]);

        $nutrients = [$cal, $protein, $carb,  $fat];
        echo  "設定玩營養素";
        echo "<br/>";
        print_r($nutrients);
        echo "<br/>";
    }
}

echo "print";
echo "<br/>";
echo "判斷";
var_dump($_FILES["classimg"]["name"][0]);
echo "判斷結束";
echo "<br/>";

echo "判斷開始";
echo "<br/>";




// *****圖片******

// 判斷圖片不是空值
if ($classCategory == "T") {

    if (!empty($_FILES["classimg"]["name"][0])) {

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

            $filePath = $ServerRoot . "/tfd103/g3/tfd103-g3/src/images/img/classes/trainer/" . $fileName_arr[$i];
            $filePath_select = "/tfd103/g3/tfd103-g3/src/images/img/classes/trainer/" . $fileName_arr[$i];


            echo $fileName_arr[$i];
            echo "<br/>";
            echo "有近來T有照片";
            echo "<br/>";

            //判斷是否上傳成功
            if ($error_arr[$i] > 0) {
                echo "上傳失敗: 錯誤代碼" . $error_arr[$i];
                echo "<br/>";
            } else {
                //將暫存檔搬移到正確位置
                move_uploaded_file($filePath_Temp, $filePath);

                //顯示檔案資訊
                echo "檔案存放位置：" . $filePath;
                echo "select：" . $filePath_select;
                echo "<br/>";
            }
        }
    }
} else { //GM

    if (!empty($_FILES["classimg"]["name"][0])) {

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
            if ($classCategory == "G") {
                $filePath = $ServerRoot . "/tfd103/g3/tfd103-g3/src/images/img/classes/class/" . $fileName_arr[$i];
                $filePath_select = "/tfd103/g3/tfd103-g3/src/images/img/classes/class/" . $fileName_arr[$i];
            } else { //M
                $filePath = $ServerRoot . "/tfd103/g3/tfd103-g3/src/images/img/classes/menu/" . $fileName_arr[$i];
                $filePath_select = "/tfd103/g3/tfd103-g3/src/images/img/classes/menu/" . $fileName_arr[$i];
            }

            echo $fileName_arr[$i];

            //判斷是否上傳成功
            if ($error_arr[$i] > 0) {
                echo "上傳失敗: 錯誤代碼" . $error_arr[$i];
                echo "<br/>";
            } else {
                //將暫存檔搬移到正確位置
                move_uploaded_file($filePath_Temp, $filePath);

                //顯示檔案資訊
                echo "檔案存放位置：" . $filePath;
                echo "select：" . $filePath_select;
                echo "<br/>";

                // 放入照片陣列
                array_push($classimgList, $filePath_select);
                print_r($classimgList);
            }
        }
    }
}





// *****丟DB*****

if ($classCategory == "T") {
    // 丟入組合物件
    $personalCoach->name = $classTitle;
    $personalCoach->date = $classDate;
    $personalCoach->price = $price;

    // echo json_encode($personalCoach);

    if (!empty($_FILES["classimg"]["name"][0])) { // 有照片

        $sql = "UPDATE Coach SET CoachExpertise = ?, CoachLicense = ?, CoachPhoto = ?,  CoachIG = ?, CoachProfile = ?, PersonalCoach = ? Where CoachID = ?;";
        $statement = $pdo->prepare($sql);

        $statement->bindValue(1, $trainerExpertise);
        $statement->bindValue(2, $trainerLicense);
        $statement->bindValue(3, $filePath_select);
        $statement->bindValue(4, $ig);
        $statement->bindValue(5, $classInfo);
        $statement->bindValue(6, json_encode($personalCoach));
        $statement->bindValue(7, $shortid);
        echo $filePath_select;
        echo "<br/>";
    } else { //無照片

        $sql = "UPDATE Coach SET CoachExpertise = ?, CoachLicense = ?, CoachIG = ?, CoachProfile = ?, PersonalCoach = ? Where CoachID = ?;";
        $statement = $pdo->prepare($sql);

        $statement->bindValue(1, $trainerExpertise);
        $statement->bindValue(2, $trainerLicense);
        $statement->bindValue(3, $ig);
        $statement->bindValue(4, $classInfo);
        $statement->bindValue(5, json_encode($personalCoach));
        $statement->bindValue(6, $shortid);
    }

    $statement->execute();
} else {
    // G&M

    if ($classCategory == "G") {

        if (!empty($_FILES["classimg"]["name"][0])) {

            $sql = "UPDATE Course SET CourseName = ?, CourseContent = ?, CoursePhoto = ?, CourseLocation = ?, CoachName = ?, Price = ? where CourseID = ? and CourseCatalog = ?;";

            $statement = $pdo->prepare($sql);

            $statement->bindValue(1, $classTitle);
            $statement->bindValue(2, $classInfo);
            // 多張照片
            $statement->bindValue(3, json_encode($classimgList));
            $statement->bindValue(4, $classLocation);
            $statement->bindValue(5, $trainer);
            $statement->bindValue(6, $price);
            $statement->bindValue(7, $shortid);
            $statement->bindValue(8, $classCategory);
        } else {

            $sql = "UPDATE Course SET CourseName = ?, CourseContent = ?, CourseLocation = ?, CoachName = ?, Price = ? where CourseID = ? and CourseCatalog = ?;";

            $statement = $pdo->prepare($sql);

            $statement->bindValue(1, $classTitle);
            $statement->bindValue(2, $classInfo);
            $statement->bindValue(3, $classLocation);
            $statement->bindValue(4, $trainer);
            $statement->bindValue(5, $price);
            $statement->bindValue(6, $shortid);
            $statement->bindValue(7, $classCategory);
        }

        $statement->execute();
    } else { //M

        if (!empty($_FILES["classimg"]["name"][0])) {

            $sql = "UPDATE Course SET CourseName = ?, CourseContent = ?, CoursePhoto = ?, Nutrition = ?, CoachName = ?, Price = ? where CourseID = ? and CourseCatalog = ?;";

            $statement = $pdo->prepare($sql);

            $statement->bindValue(1, $classTitle);
            $statement->bindValue(2, $classInfo);
            // 多張照片
            $statement->bindValue(3, json_encode($classimgList));
            $statement->bindValue(4, json_encode($nutrients));
            $statement->bindValue(5, $trainer);
            $statement->bindValue(6, $price);
            $statement->bindValue(7, $shortid);
            $statement->bindValue(8, $classCategory);
        } else {

            $sql = "UPDATE Course SET CourseName = ?, CourseContent = ?, Nutrition = ?, CoachName = ?, Price = ? where CourseID = ? and CourseCatalog = ?;";

            $statement = $pdo->prepare($sql);

            $statement->bindValue(1, $classTitle);
            $statement->bindValue(2, $classInfo);

            $statement->bindValue(3, json_encode($nutrients));
            $statement->bindValue(4, $trainer);
            $statement->bindValue(5, $price);
            $statement->bindValue(6, $shortid);
            $statement->bindValue(7, $classCategory);
        }

        $statement->execute();
    }
}
