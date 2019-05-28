<?php
    header("content-type:text/html;charset=utf-8");
    $conn = new mysqli('localhost', 'root', 'root');
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    }
    $sql = "CREATE DATABASE test";
    if ($conn->query($sql) === TRUE) {
        echo "数据库创建成功";
    }
    $conn->close();
?>