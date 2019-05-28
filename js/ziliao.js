(function  ($) {
   $("#myUpload").upload({uploadPath:'../mvc/upload.php', isMulti:true, initValue:[], callback:function(msg){

    	     console.log(msg);
        }
    });

    var phones=JSON.parse(localStorage.phone)
    $('.input-two').val(phones.phone)
	$('.input-two').blur(function  () {
		var reg=/^(18|15|13|14|17)\d{9}/g;
        if (!reg.test($(this).val())) {
            $('.i').html('手机号有误')
             $('.i').css({'color':'red'})
            return;
        }
        $('.i').html('')
    })
        // console.log(localStorage.getItem("lastname"))
        // var phones=localStorage.getItem("lastname")
        // $('.input-two').val(phones)
        // var p=JSON.parse(phones)

        // 查找数据库，判断是否存在
       /* $.ajax({
        	url:'../mvc/index.php?c=Login&a=querys',
        	type:'post',
        	data:{
                phone:$('.input-two').val(),

            },
            success:function(data){
                if (data=='') {
                    return;
                }
                var str=JSON.parse(data);
                console.log(str)
                if (str.code=='505') {
                    $('.i').html('用户已存在')
                    $('.i').css({'color':'red'})
                    // $('.input-two').val('')
                    return
                }
            }
        })*/
	


	$('.button').click(function  () {
        if ($('.input-two').val()==''||$('.input-one').val()=='') {
            $('.i').html('请输入内容')
            $('.i').css({'color':'red'})
            return
        }
		$.ajax({
			type:"post",
		   	url:"../mvc/index.php?c=Login&a=change",
		   	data:{
		   		phone:$('.input-two').val(),
		   		name:$('.input-one').val(),
		   		content:$('.input-three').val(),
		   		img:$('#imga').attr('src'),
		   	},
		   	success:function  (str) {
                /*if ($('.i').html()=='用户已存在') {
                    console.log(0)
                    return false
                }*/
		   		console.log(str)
                window.location.href = "../anlian-xiangmu/zhuye.html"
		   	}
		})
	})
    $('#fanhui').click(function() {
        window.location.href = "../anlian-xiangmu/zhuye.html"
    })



})(jQuery)