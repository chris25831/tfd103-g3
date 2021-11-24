<?php
include("./connection.php");

// ***字串****
$classCategory = htmlspecialchars($_POST["category"]);
$shortid = htmlspecialchars($_POST["idUpdate"]);
$trainer = htmlspecialchars($_POST["trainer"]);

echo $shortid;
echo "<br/>";

echo "判斷開始";
echo "<br/>";


// *****DB*****
if ($classCategory == "T") {

    $sql = "UPDATE Coach SET PersonalCoach = ? Where CoachID = ?;";

    $statement = $pdo->prepare($sql);

    $statement->bindValue(1, "");
    $statement->bindValue(2, $shortid);
} else {
    // G&M
    $sql = "UPDATE Course SET Blocked = ? where CourseID = ? and CourseCatalog = ?;";

    $statement = $pdo->prepare($sql);

    $statement->bindValue(1, 1);
    $statement->bindValue(2, $shortid);
    $statement->bindValue(3, $classCategory);
}

$statement->execute();
echo "over";
