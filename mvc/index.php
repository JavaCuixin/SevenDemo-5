<?php
include_once "function.php";//引入工具包
header("Access-Control-Allow-Origin:*");//允许所有域名访问
header("content-type:text/html;charset=utf-8");
$c=isset($_GET["c"])?$_GET["c"]:"Index";
$c.="Controller";
$obj=new $c;//等效 new IndexController
$a=isset($_GET["a"])?$_GET["a"]:"index";
$obj->$a();