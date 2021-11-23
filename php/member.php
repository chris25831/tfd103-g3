<?php
    // include("./connection.php");




    //----登入判斷------------------------------------------------------------
    function getUserID(){
        //先判斷session是否存在
        if(!isset($_SESSION)){
            session_start(); 
        };
        //有登入session->回傳ID，無登入session->回傳空字串""
        return isset($_SESSION["UserID"]) ? $_SESSION["UserID"] : ""; 
    }
    
    
    
    //----登出清空Session------------------------------------------------------------
    //清除Session
    function clearSession(){

        //先判斷session是否存在
        if(!isset($_SESSION)){
            session_start(); 
        }

        session_unset();
        session_destroy();

    }


   

   
?>