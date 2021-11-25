<?php
include("./connection.php");

$postdata = file_get_contents("php://input");
$check =  json_decode($postdata, true);

$id = "";
// print_r($check);



// 新增的教練select
if ($check["check"] == "tname") {

    $sql = "SELECT CoachName FROM Coach";

    $statement = $pdo->query($sql);


    $data = $statement->fetchAll();

    echo json_encode($data, JSON_UNESCAPED_UNICODE);
} elseif ($check["check"] == "content") { //內文請求
    $id = $check["id"];
    $cat = $check["catalog"];
    // echo $id;
    // 判斷分類
    if ($cat == "G" || $cat == "M") {
        $sql = "SELECT * FROM Course where CourseCatalog = '$cat' and CourseID = '$id'";
    } else {
        $sql = "SELECT * FROM Coach where CoachID = '$id'";
    }

    $statement = $pdo->query($sql);
    $data = $statement->fetchAll();

    echo json_encode($data, JSON_UNESCAPED_UNICODE);
} else { //首頁
    $cat = $check["catalog"];
    $now = $check["now"];

    //前台0 後台1 
    if ($now) {
        if ($cat == "GM") {
            $sql = "SELECT CourseID, CourseCatalog, CourseName, CoursePhoto FROM Course where Blocked = '0'";
        } else { //T
            $sql = "SELECT CoachID, CoachName, CoachExpertise, CoachPhoto FROM Coach";
        }
    } else {

        if ($cat == "GM") {
            $sql = "SELECT CourseID, CourseCatalog, CourseName, CoursePhoto FROM Course where Blocked = '0'";
        } else { //T
            $sql = "SELECT CoachID, CoachName, CoachExpertise, CoachPhoto FROM Coach where PersonalCoach != ''";
        }
    }


    $statement = $pdo->query($sql);
    $data = $statement->fetchAll();

    echo json_encode($data, JSON_UNESCAPED_UNICODE);
}
