<?php
define('WEB_ROOT', str_replace("\\", '/', dirname(dirname(__FILE__))));

foreach($_FILES as $k=>$v){
	$fs=$_FILES[$k];
	break;
}
if($fs){
    $torrent = explode(".", $fs["name"]);
    $fileend = end($torrent);
    $fileend = strtolower($fileend);

    $path = '../data/'.time() . rand(1, 999999) . '.' . $fileend;
    $rs = move_uploaded_file($fs["tmp_name"], WEB_ROOT . $path);

    if ($rs) {
        echo json_encode(array('result'=>true,'path'=>$path));
    }else{
    	echo json_encode(array('result'=>false,'errormsg'=>'系统错误'));
    }

}else{
	echo json_encode(array('result'=>false,'errormsg'=>'没有上传的文件'));
}
?>