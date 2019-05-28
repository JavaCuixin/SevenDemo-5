(function($){
	var off=true;
	$("#shang").click(function(){
		if (off) {
			$('.dingwei').animate({'left':'0rem'});
			$('.nav').animate({'left':'11.75rem'})
			off=false;	
		}else{
			$('.dingwei').animate({'left':'-11.75rem'});
			$('.nav').animate({'left':'0rem'})
				off=true;
		}
	})
	console.log(localStorage.phone)
		var phones=JSON.parse(localStorage.phone)
		console.log(phones.phone)
		// $('.span').html(phones.phone)
		$.ajax({
			url:'../mvc/index.php?c=Login&a=query',
			type:'post',
			data:{
				phone:phones.phone,
				// img:$('.asa img').attr('src')
			},
			success:function (data) {
				console.log(data)
				var str=JSON.parse(data)
				console.log(str)
				if (str.code=='505') {
	               $('.asa img').attr('src',str.data.img)
	               $('.asa .span').html(str.data.name)
	            }
			}
		})
	$(".qwe .zy").click(function(){
		$('.dingwei').animate({'left':'-11.75rem'});
		$('.nav').animate({'left':'0rem'})
	})
	$(".qwe .rjq").click(function(){
		window.location.href = "../anlian-xiangmu/riji.html";
	})
	$(".qwe .tc").click(function(){
		delete localStorage.phone
		window.location.href = "../anlian-xiangmu/index.html";
	})
	$(".asa").click(function(){
		window.location.href = "../anlian-xiangmu/ziliao.html";
	})

}(jQuery))
	


