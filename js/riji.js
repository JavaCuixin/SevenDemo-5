
var phones=JSON.parse(localStorage.phone);
  console.log(phones.phone)
 var img='';
  var name=''; 
logins()
window.onload=function(){
  styles()
}
 
  $('.topBanner-one').click(function(){
      window.location.href="../anlian-xiangmu/zhuye.html";
  })
  $('.topBanner-three').click(function(){
      window.location.href="../anlian-xiangmu/liuyan.html";
  })
function logins(){
  
  
      $.ajax({
        url:'../php/index.php?c=Login&a=querys',
        type:'post',
        data:{
          phone:phones.phone,
        },
        success:function(data){
        var str=JSON.parse(data)
          console.log(str.data.name)
          name=str.data.name;
          img=str.data.img;
      }
    })
}
// logins()  


function styles(){
  $.ajax({
        url:'../php/index.php?c=Login&a=xinwen',
        type:'post',
        // data:{
        //   phone:phones.phone,
        // },
        success:function(data){  
            // alert(1)
            
            var str=JSON.parse(data);
            // console.log(str.data)
            var data=str.data
            var arr=[]
              for (var i = 0; i < data.length; i++) {
                  if (data[i].phone.indexOf(phones.phone)!=-1) {

                    arr.push(str.data[i])
                  };
              };

              console.log(arr)

              for (var j = 0; j < arr.length; j++) {
                $('.con').append(`
                    <div class="con_main">
                      <div class="con_main_one">
                        <div class="con_main_two"><img style="width:13rem;height:13rem;" src="${img}"/></div>
                        <a href="#" class="con_main_three">${name}</a>
                        <a href="#" class="con_main_hour">${arr[j].time}</a>
                        <a href="#" class="con_gankai">发布内容:${arr[j].contentt}</a>
                        <div class="con_img"><img  src="${arr[j].images}"/></div>
                      </div>
                    </div>`)
              }
              
      }
    }) 
}
  		
		