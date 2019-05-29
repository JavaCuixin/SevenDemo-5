
var counts = 60;
function settime(val) {
    var timer=null
    // console.log(val)当前的
    $('.swiper-pagination').hide()
    if($("#phone").val()==''){
        $('.no').css({display:'block'})
    }else{
        // $('#phone').blur(function(){
            $('.no').css({display:'none'})
            var reg=/^(18|15|13|14|17)\d{9}/g;
            var str=reg.test($("#phone").val())
            if (!str) {
                $('.no').css({display:'block'})
                return;
            }else if(str){
                $('.no').css({display:'none'})
                $('.yes').css({display:'block'})
                var strs=$("#phone").val()
                // strs=JSON.stringify(strs)
                localStorage.phone=JSON.stringify({phone:strs})
                // localStorage.setItem("lastname",strs)
                // strs=JSON.parse(localStorage.getItem("lastname"))
                // console.log(strs)
                timer=setInterval(function(){
                    window.clearTimeout(timer)
                    settime(val)
                  if(counts == 0) {
                    val.removeAttribute("disabled");
                    val.value = "获取验证码";
                    counts = 60;
                    return false;
                    } else {
                        val.setAttribute("disabled", true);
                        val.value = "重新发送（" + counts + "）";
                        counts--;
                        $("#canvas").css({display:"block"})
                    }
                    setTimeout(function() {
                        settime(val);
                    }, 1000);
                },5000)
                
            }
    }
    
                
}
$(function(){
    var show_num = [];
    draw(show_num);

    $("#canvas").on('click',function(){
        draw(show_num);
    })
    $(".btn").on('click',function(){
        $('.vn').css({display:'none'});
        var val = $(".nums").val().toLowerCase();
        var num = show_num.join("");
        if(val==''){
            alert('请输入验证码！');
        }else if(val == num){
           
            // var numbers=$("#phone").val()
            // localStorage.lastname(JSON.stringify(numbers))
            $(".nums").val('');
            var phones=JSON.parse(localStorage.phone)
            console.log(phones.phone)
            $.ajax({
                url:"../mvc/index.php?c=Login&a=login",
                type:"post",
                data:{
                    phone:$('#phone').val(),
                },
                success:function  (data) {
                    var str=JSON.parse(data)
                    console.log(str)
                    if (str==2) {
                       $.ajax({
                            url:'../mvc/index.php?c=Login&a=registers',
                            type:'post',
                            data:{
                                phone:$('#phone').val(),
                            },
                            success:function(datas){
                                var str=JSON.parse(datas)
                                console.log(str)
                                if (str.code=='200') {
                                    alert('注册成功！');
                                    window.location.href = "../anlian-xiangmu/zhuye.html";
                                };
                            }
                        })
                    }else if (str==1){
                         alert('登录成功！');
                       window.location.href = "../anlian-xiangmu/zhuye.html";
                    }
                }
            })
            // alert('登录成功！');

        }else{
            $('.vn').css({display:'block'});
            $(".nums").val('');
            // draw(show_num);
        }
    })
})
//生成并渲染出验证码图形
function draw(show_num) {
    var canvas_width=$('#canvas').width();
    var canvas_height=$('#canvas').height();
    var canvas = document.getElementById("canvas");//获取到canvas的对象，演员
    var context = canvas.getContext("2d");//获取到canvas画图的环境，演员表演的舞台
    canvas.width = canvas_width;
    canvas.height = canvas_height;
    var sCode = "a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
    var aCode = sCode.split(",");
    var aLength = aCode.length;//获取到数组的长度
    
    for (var i = 0; i < 4; i++) {  //这里的for循环可以控制验证码位数（如果想显示6位数，4改成6即可）
        var j = Math.floor(Math.random() * aLength);//获取到随机的索引值
        // var deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
        var deg = Math.random() - 0.5; //产生一个随机弧度
        var txt = aCode[j];//得到随机的一个内容
        show_num[i] = txt.toLowerCase();
        var x = 10 + i * 20;//文字在canvas上的x坐标
        var y = 20 + Math.random() * 8;//文字在canvas上的y坐标
        context.font = "bold 26px 微软雅黑";

        context.translate(x, y);
        context.rotate(deg);

        context.fillStyle = randomColor();
        context.fillText(txt, 0, 0);

        context.rotate(-deg);
        context.translate(-x, -y);
    }
    for (var i = 0; i <= 5; i++) { //验证码上显示线条
        context.strokeStyle = randomColor();
        context.beginPath();
        context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
        context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
        context.stroke();
    }
    for (var i = 0; i <= 30; i++) { //验证码上显示小点
        context.strokeStyle = randomColor();
        context.beginPath();
        var x = Math.random() * canvas_width;
        var y = Math.random() * canvas_height;
        context.moveTo(x, y);
        context.lineTo(x + 1, y + 1);
        context.stroke();
    }
}
//得到随机的颜色值
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}
// 验证手机号