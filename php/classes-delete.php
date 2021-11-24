<?php
include("./connection.php");

// ***字串****
$classCategory = htmlspecialchars($_POST["category"]);

$classId = htmlspecialchars($_POST["classId"]);
$shortid = htmlspecialchars($_POST["idUpdate"]);

$trainer = htmlspecialchars($_POST["trainer"]);


echo "print";
echo "<br/>";

echo "判斷開始";
echo "<br/>";



// *****DB*****
if ($classCategory == "T") {

    $sql = "UPDATE Coach SET PersonalCoach = Where CoachName = ?;";

    $statement = $pdo->query($sql);
} else {
    // G&M


}
