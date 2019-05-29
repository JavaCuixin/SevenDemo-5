  var imgStr = "";
  $("#myUpload").upload({uploadPath:'../php/upload.php', isMulti:true,width:'200px',height:'200px',callback:function(msg){
      imgStr=msg;
      console.log(imgStr)
        }
  });
  $('.topBanner-one').click(function(){
  		window.location.href="../anlian-xiangmu/riji.html";
  })
  var phones=JSON.parse(localStorage.phone)
  console.log(phones.phone)
  $('.topBanner-three').click(function(){
    var d = new Date()
    var vYear = d.getFullYear()
    var vMon = d.getMonth() + 1
    var vDay = d.getDate()
    // var h = d.getHours(); 
    // var m = d.getMinutes(); 
    // var se = d.getSeconds(); 
    s=vYear+'-'+(vMon<10 ? "0" + vMon : vMon)+'-'+(vDay<10 ? "0"+ vDay : vDay)

    if ($('.con_xbk').val()=='') {
      alert('请输入内容')
      return;
    };
  		$.ajax({
  			url:'../php/index.php?c=Login&a=register',
  			type:'post',
        data:{
              phone:phones.phone,
            	contentt:$('.con_xbk').val(),
            	images:$("#imgens").attr('src'),
              time:s,
        	},
        	success:function(data){
            console.log(data)
            // alert(1)
        		var str=JSON.parse(data);
                  if (str.code=='200') {
                    alert('发送成功')
                  window.location.href="../anlian-xiangmu/riji.html";
                  }else{
                    alert('发送失败')
                  }
        	}
  		}) 		
  })