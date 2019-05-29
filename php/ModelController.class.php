<?php
class ModelController{
    private $dsn="mysql:host=localhost;dbname=phon";
    private $username="root";
    private $password="root";
    public static $pdo;
    //避免重复连接数据库
    //构造函数，只要实例化类的时候，就自动执行该函数
    function __construct(){
        //第一次连接数据库的时候，走这一步，以后都走静态static(内存)
        if(is_null(self::$pdo)) {
            try {
                self::$pdo = new Pdo($this->dsn, $this->username, $this->password);
            } catch (Exception $e) {
                die($e->getMessage());
            }
        }
    }
    /*
     * query方法
     */
    public function query_sql($sql){
        try{
            self::$pdo->query("SET NAMES UTF8");
            self::$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
            $result=self::$pdo->query($sql);
            $row=$result->fetchAll(PDO::FETCH_ASSOC);
            return $row;
        }catch (Exception $e){
            die($e->getMessage());
        }
    }
    /*
     * delete方法
     */
    public function delete($table,$id){
        try{
            //DELETE FROM student WHERE id=1;
            self::$pdo->query("SET NAMES UTF8");
            self::$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
            $result=self::$pdo->exec("DELETE FROM {$table} WHERE ID={$id}");
            return $result;
        }catch (Exception $e){
            die($e->getMessage());
        }

    }
    /*
     * add方法
     */
    public function add($table,$data){
        try{
//          Array
//          (
//              [username] => sdf
//              [password] => dsf
//          )变成适合sql插入的格式
            //INSERT INTO users(username,password) VALUES("sdf","dsf")
            $keys=implode(",",array_keys($data));//username,password
            $values="'".implode("','",$data)."'";//'sdf','dsf'
            //p($values).die;
            self::$pdo->query("SET NAMES UTF8");
            self::$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
            $result=self::$pdo->exec("INSERT INTO {$table}({$keys}) VALUES ({$values})");
            return $result;
        }catch (Exception $e){
            die($e->getMessage());
        }
    }
    /*
     * update方法
     */
    public function update($table,$data,$id){
        try{
//          Array
//          (
//              [username] => sdf
//              [password] => dsf
//          )变成适合sql插入的格式
            //UPDATE users SET username="aa",password='22' WHERE id=4;
            $sql="";
            foreach ($data as $k=>$v){
                $sql.=",$k='$v'";
            }
            $sql=substr($sql,1);
            //p($sql).die;
            self::$pdo->query("SET NAMES UTF8");
            self::$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
            $result=self::$pdo->exec("UPDATE {$table} SET $sql WHERE ID={$id}");
            return $result;
        }catch (Exception $e){
            die($e->getMessage());
        }
    }
}
