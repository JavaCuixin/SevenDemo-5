<?php
/*
 * 登录控制器
 */
class LoginController{
    /*
     * 插入方法
     */
    public function register(){
            $data = $_POST;
            $phone = $data["phone"];
            $name = $data["name"];
            $content = $data["content"];
            $img = $data["img"];
            $old_data = M()->query_sql("SELECT * FROM data WHERE phone='{$phone}'");
            $old_data = current($old_data);
            $result = M()->add("data", $data);
                if ($result) {
                    echo ajax_return("200", "插入成功", $old_data);
                    exit;
                } else {
                    echo ajax_return("404", "插入失败", "");
                    exit;
                }
        }

         public function registers(){
            $data = $_POST;
            $phone = $data["phone"];
            $old_data = M()->query_sql("SELECT * FROM data WHERE phone='{$phone}'");
            $old_data = current($old_data);
            $result = M()->add("data", $data);
                if ($result) {
                    echo ajax_return("200", "插入成功", $old_data);
                    exit;
                } else {
                    echo ajax_return("404", "插入失败", "");
                    exit;
                }
        }


     public function change(){
            $data = $_POST;
             $phone = $data["phone"];
            $name = $data["name"];
            $content = $data["content"];
            $img = $data["img"];
            $result=M()->update("data",Array('img'=>"$img",'name'=>"$name",'content'=>"$content"),"phone",$phone);
            echo "1";
        }
    //查询数据库
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

    public function query(){
        $data = $_POST;
        $phone = $data["phone"];
        $old_data= M()->query_sql("SELECT * FROM data WHERE phone='{$phone}'");
        $old_data=current($old_data);
        if (!empty($old_data)) {
            echo ajax_return("505", "用户名已存在", $old_data);
            exit;
        }
    }

    // public function xinwen(){
    //     $data = $_POST;
    //     $old_data1 = M()->query_sql("SELECT * FROM meges ORDER BY ID DESC");
    //     $counta=count($old_data1);
    //     echo ajax_return($counta,'',$old_data1);
    // }

    /*
     * 登录方法
     */
    public function login(){
            $data = $_POST;
            $phone = $data["phone"];
            // $password = $data["password"];
            $old_data = M()->query_sql("SELECT * FROM data WHERE phone='{$phone}'");
            $old_data = current($old_data);
            if (empty($old_data)) {
                echo '2';
            }
            else{
                if ($phone!== $old_data['phone']) {
                    echo '0';
                } else {
                    echo '1';
                }
            }
                
        }
    // public function login(){
    //     //if(IS_AJAX) {
    //         //p($_SERVER);die;
    //         //sleep(10);
    //         $data = $_POST;
    //         $phone = $data["phone"];
    //         // $password = $data["password"];
    //         //p($data);
    //         $old_data = M()->query_sql("SELECT * FROM data WHERE phone='{$phone}'");
    //         //p($old_data);
    //         $old_data = current($old_data);
    //         //p($old_data);
    //         if (empty($old_data)) {
    //             echo ajax_return("505", "用户名不存在", "");
    //         } else {
    //             $new_password=$this->verify($password);
    //             if ($new_password !== $old_data['password']) {
    //                 echo ajax_return("403", "密码不正确", "");
    //             } else {
    //                 session_start();
    //                 $_SESSION["phone"] = $phone;
    //                 echo ajax_return("200", "登录成功", $phone);
    //             }
    //         }
    //     }
    // 插入
     public function insertke(){
        $data = $_POST;
        $phone = $data["phone"];
        $name = $data["name"];
        $content = $data["content"];
        $img = $data["img"];
        $old_data = M()->query_sql("SELECT * FROM data WHERE kechengming='{$ke}'");
            //p($old_data);
            $old_data = current($old_data);//old_data返回的是多维数组，用current方法取数组指针为1的值
            //p($old_data);
                // $data["time"]=$time;
                $result = M()->add("data", $data);
                if ($result) {
                    echo ajax_return("200", "插入成功", $old_data);
                    exit;
                } else {
                    echo ajax_return("404", "插入失败", "");
                    exit;
                }
    }
      public function insertke1(){
        $data = $_POST;
        $banhao = $data["banhao"];
        $banzhang = $data["banzhang"];
        $jiaoshi = $data["jiaoshi"];
        $banzhuren = $data["banzhuren"];
        $banjikouhao = $data["banjikouhao"];
        $old_data = M()->query_sql("SELECT * FROM banji WHERE banhao='{$banhao}'");
            //p($old_data);
            $old_data = current($old_data);//old_data返回的是多维数组，用current方法取数组指针为1的值
            //p($old_data);
                // $data["time"]=$time;
                $result = M()->add("banji", $data);
                if ($result) {
                    echo ajax_return("200", "插入成功", $old_data);
                    exit;
                } else {
                    echo ajax_return("404", "插入失败", "");
                    exit;
                }
    }
        
        
        public function insertke2(){
        $data = $_POST;
        $xuehao = $data["xuehao"];
        $banhao = $data["banhao"];
        $xingming = $data["xingming"];
        $xingbie = $data["xingbie"];
        $chushengriqi = $data["chushengriqi"];
        $dianhua = $data["dianhua"];
        $old_data = M()->query_sql("SELECT * FROM student WHERE xuehao='{$xuehao}'");
            //p($old_data);
            $old_data = current($old_data);//old_data返回的是多维数组，用current方法取数组指针为1的值
            //p($old_data);
                // $data["time"]=$time;
                $result = M()->add("student", $data);
                if ($result) {
                    echo ajax_return("200", "插入成功", $old_data);
                    exit;
                } else {
                    echo ajax_return("404", "插入失败", "");
                    exit;
                }
    }
    
    
    public function insertke3(){
        $data = $_POST;
        $xuehao = $data["xuehao"];
        $kechengbianhao = $data["kechengbianhao"];
        $chengji = $data["chengji"];
        $old_data = M()->query_sql("SELECT * FROM xuanxiu WHERE xuehao='{$xuehao}'");
            //p($old_data);
            $old_data = current($old_data);//old_data返回的是多维数组，用current方法取数组指针为1的值
            //p($old_data);
                // $data["time"]=$time;
                $result = M()->add("xuanxiu", $data);
                if ($result) {
                    echo ajax_return("200", "插入成功", $old_data);
                    exit;
                } else {
                    echo ajax_return("404", "插入失败", "");
                    exit;
                }
    }
    
      public function chaxun(){
			// $data = $_POST;
			$old_data1 = M()->query_sql("SELECT * FROM news");
			$counta=count($old_data1);
			echo ajax_return($counta,'',$old_data1);
		}
		public function chaxun2(){
			// $data = $_POST;
			$old_data1 = M()->query_sql("SELECT * FROM kecheng");
			$counta=count($old_data1);
			echo ajax_return($counta,'',$old_data1);
		}
    
    	
  //   	public function change(){
		// 	$data = $_POST;
		// 	$banhao =$data['banhao'];
		// 	$banzhang =$data['banzhang']; 
		// 	$jiaoshi =$data['jiaoshi']; 
		// 	$banzhuren =$data['banzhuren']; 
		// 	$result=M()->update("banji",Array('banzhang'=>"$banzhang",'jiaoshi'=>"$jiaoshi",'banzhuren'=>"$banzhuren"),"banhao",$banhao);
		// 	echo "1";
		// }
    /*
     * 加密方法
     */
    public function verify($str){
        $str=md5(md5($str)."bokan");
        return $str;
    }
}