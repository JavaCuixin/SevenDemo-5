<?php
/*
 * 登录控制器
 */
class LoginController{
    /*
     * 插入方法
     */
    public function register(){
        //if(IS_AJAX) {
            $data = $_POST;
            $phone=$data["phone"];
            $contentt = $data["contentt"];
            $images = $data["images"];
            $time =$data["time"];
            $old_data = M()->query_sql("SELECT * FROM meges WHERE phone='{$phone}'");
            //p($old_data);
            $old_data = current($old_data);//old_data返回的是多维数组，用current方法取数组指针为1的值
            //p($old_data);
                // $data["time"]=$time;
                $result = M()->add("meges", $data);
                if ($result) {
                    echo ajax_return("200", "插入成功", "");
                    exit;
                } else {
                    echo ajax_return("404", "插入失败", "");
                    exit;
                }
        }
    //查询数据库
    // public function query(){
    //     $data = $_POST;
    //     $page = $data["page"];
    //     $pagesize = $data["pagesize"];
    //     $skip = $pagesize * ($page - 1);
    //     $old_data1 = M()->query_sql("SELECT * FROM bw ORDER BY ID DESC");
    //     // $old_data = M()->query_sql("SELECT * FROM bw ORDER BY ID DESC LIMIT {$skip},{$pagesize}");
    //     $counta=count($old_data1);
    //     echo ajax_return($counta,'',$old_data);
    // }

    public function querys(){
        $data = $_POST;
        $phone = $data["phone"];
        $old_data= M()->query_sql("SELECT * FROM data WHERE phone='{$phone}'");
        $old_data= current($old_data);
        if (!empty($old_data)) {
            echo ajax_return("505", "用户名已存在", $old_data);
            exit;
        }
    }

    public function querya(){
        $data = $_POST;
        $phone = $data["phone"];
        $old_data= M()->query_sql("SELECT * FROM meges WHERE phone='{$phone}'");
        $old_data= current($old_data);
        if (!empty($old_data)) {
            echo ajax_return("505", "用户名已存在", $old_data);
            exit;
        }
    }

    public function xinwen(){
        $data = $_POST;
        $old_data1 = M()->query_sql("SELECT * FROM meges ORDER BY ID DESC");
        $counta=count($old_data1);
        echo ajax_return($counta,'',$old_data1);
    }

    // 顶
    // public function acc(){
    //     $data = $_POST;
    //     $id=$data['id'];
    //     $num=$data['num'];
    //     $result=M()->update("weibo",Array('acc'=>"$num"),$id);
    //     echo "1";
    // }
    // 踩
    // public function ref(){
    //     $data = $_POST;
    //     $id=$data['id'];
    //     $num=$data['num'];
    //     $result=M()->update("weibo",Array('ref'=>"$num"),$id);
    //     echo "1";
    // }
    //删除
    public function delete(){
        $data = $_POST;
        $id=$data['id'];
        $old_data=M()->delete('weibo',$id);
    }
    /*
     * 登录方法
     */
    public function login(){
        //if(IS_AJAX) {
            //p($_SERVER);die;
            //sleep(10);
            $data = $_POST;
            $phone = $data["phone"];
            // $password = $data["password"];
            //p($data);
            $old_data = M()->query_sql("SELECT * FROM data WHERE phone='{$phone}'");
            //p($old_data);
            $old_data = current($old_data);
            //p($old_data);
            if (empty($old_data)) {
                echo ajax_return("505", "用户名不存在", "");
            } else {
                $new_password=$this->verify($password);
                if ($new_password !== $old_data['password']) {
                    echo ajax_return("403", "密码不正确", "");
                } else {
                    session_start();
                    $_SESSION["phone"] = $phone;
                    echo ajax_return("200", "登录成功", $phone);
                }
            }
        }
    //}
    /*
     * 退出登录
     */
    public function logout(){
        //if(IS_AJAX){
            session_start();
            session_unset();
            session_destroy();
            echo ajax_return("200","退出成功","");
        //}
    }
    /*
     * 加密方法
     */
    public function verify($str){
        $str=md5(md5($str)."bokan");
        return $str;
    }
}