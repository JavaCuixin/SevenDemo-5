<?php
header("content-type:text/html;charset=utf-8");
$conn = new mysqli('localhost', 'root', 'root','student-system');
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 
$sql = "CREATE TABLE user (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
    )";
    if ($conn->query($sql) === TRUE) {
        echo "成功";
    } else {
        echo "创建数据表错误: "
    }
    $conn->close();
?>