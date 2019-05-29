<?php
//如果出现乱码加一个header
header("content-type:text/html;charset=utf-8");
//公共部分
function p($data){
    echo "<pre/>";
    var_dump($data);
}
define("IS_POST",$_SERVER["REQUEST_METHOD"]=="POST"?true:false);
//判断ajax请求如果存在HTTP_X_REQUESTED_WITH并且它的值为XMLHttpRequest；
define("IS_AJAX",isset($_SERVER["HTTP_X_REQUESTED_WITH"])&&$_SERVER["HTTP_X_REQUESTED_WITH"]=="XMLHttpRequest"?true:false);

function __autoload($classname){//在index.php中实例化类时自动执行,
    $classPath="./".$classname.".class.php";//"./"表示当前目录//单引号不能解析变量
    //p(1).die;
    if(file_exists($classPath)){//检查文件或目录是否存在
        //p($classPath);die;
        include_once "$classPath";
    }else{
        echo "类不存在";
    }
}
function success($message,$url){
    $str=<<<str
    <script>
        alert("$message");
        window.location.href="$url";
    </script>

str;
    die($str);
}
function error($message,$url){
    //定界符声名字符中的一种方式
    $str=<<<str
    <script>
        alert("$message");
        window.location.href="$url";
    </script>

str;
    die($str);
}
function M(){
    $model=new ModelController;
    return $model;
}
/*
 * ajax返回值转json
 * $code int型
 * $message string型
 * $data  array型
 */
function ajax_return($code,$message,$data){
    //如果$code不为数字类型，就返回空
    if(!is_numeric($code)){
        return "";
    }
    $new_data=array(
        'code'=>$code,
        'message'=>$message,
        'data'=>$data
    );
    return json_encode($new_data);
}
