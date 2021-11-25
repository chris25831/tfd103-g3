<?php
include("./connection.php");

    


//----前台登入判斷------------------------------------------------------------
function getUserID()
{
    //先判斷session是否存在
    if (!isset($_SESSION)) {
        session_start();
    };
    //有登入session->回傳ID，無登入session->回傳空字串""
    return isset($_SESSION["UserID"]) ? $_SESSION["UserID"] : "";
}



//----登出清空Session------------------------------------------------------------
//清除Session
function clearSession()
{

    //先判斷session是否存在
    if (!isset($_SESSION)) {
        session_start();
    }

    session_unset();
    session_destroy();
}

//----購物車用------------------------------------------------------------
function shopcartUse($id)
{

    //MySQL相關資訊
    $db_host = "localhost";
    $db_user = "tibamefe_since2021";
    $db_pass = "vwRBSb.j&K#E";
    $db_select = "tibamefe_tfd103g3";

    //建立資料庫連線物件
    $dsn = "mysql:host=" . $db_host . ";dbname=" . $db_select;

    //建立PDO物件，並放入指定的相關資料
    $pdo = new PDO($dsn, $db_user, $db_pass);
    $pdo->exec("SET NAMES UTF8");

    // echo "近來判斷開始";
    // echo "<br/>";
    // echo "取得id" . $id;
    // echo "<br/>";

    if (isset($_SESSION["UserID"])) {
        // echo "有值開始運作";

        $sql = "SELECT UserID, Points FROM User where UserID = '$id'";

        $statement = $pdo->query($sql);
        $data = $statement->fetchAll();
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
    } else {
        echo "空";
        return $id;
    }
}
