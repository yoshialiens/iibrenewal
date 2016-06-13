
$(document).ready(function(){
  $('#NewsHvBlock').css("display","none");
  $('#AboutHvBlock').css("display","none");
  $('#MemberHvBlock').css("display","none");
  $('#MemberHvBlock').css("display","none");
  $('#ServiceHvBlock').css("display","none");
  $('#SurpriseHvBlock').css("display","none");
  $('#PresentHvBlock').css("display","none");

  //click news
  $("#NewsBlock .btn01").click(function(){
    $('#NewsHvBlock').css("display","block"); //クリック時
    $("#NewsHvBlock .monster01 img").css({opacity:'0',"margin-top":'204px',"-webkit-animation":'rumble 0.2s linear 12',"animation":'rumble 0.2s linear 12'});
    setTimeout(function(){
		$("#NewsHvBlock .monster01 img").stop().animate({opacity:'1',"margin-top":'0px'},1200);
	},400);
    $("#NewsHvBlock .NewsBoard").css({opacity:'0'});
    setTimeout(function(){
		$("#NewsHvBlock .NewsBoard").animate({opacity:'1'}, 1000).delay(1000);
	},1200);
	setTimeout(function(){
		$("#SeaBlock .yacht01").animate({top:'440px'}, 1000).delay(1000);
	},0);
	setTimeout(function(){
		$("#SeaBlock .fish01").animate({top:'160px'}, 600).delay(1000);
	},100);
	setTimeout(function(){
		$("#SeaBlock .ship01").animate({left:'390px'}, 1000).delay(1000);
	},0);
	$("#NewsBlock .man01,#NewsBlock .cow01")
	.css({"-webkit-animation":'rumble 0.3s linear 10',"animation":'rumble 0.3s linear 10',"animation-delay":'0.1s',"-webkit-animation-delay":'0.1s'});

	$("#NewsBlock .bird01,#NewsBlock .bird02,#NewsBlock .bird03,#NewsBlock .bird04,#NewsBlock .bird05")
	.css({"-webkit-animation":'rumble 0.2s linear 10',"animation":'rumble 0.2s linear 10'});
  });

  //click about
  $("#AboutBlock .btn01").click(function(){
    $('#AboutHvBlock').css("display","block"); //クリック時
    $("#AboutHvBlock").css({opacity:'0',"margin":'546px 0 0 600px'});
    setTimeout(function(){
		$("#AboutHvBlock").stop().animate({opacity:'1',"margin":'546px 0 0 86px'},1200);
	},0);
  });

  //click member
  $("#MemberBlock .btn01").click(function(){
    $('#MemberHvBlock').css("display","block"); //クリック時
    $("#MemberHvBlock .monster01 img").css({opacity:'0',"margin-left":'-200px'});
    setTimeout(function(){
		$("#MemberHvBlock .monster01 img").stop().animate({opacity:'1',"margin-left":'0px'},1200);
	},0);
    $("#MemberHvBlock .MemberBalloon").css({opacity:'0'});
    setTimeout(function(){
		$("#MemberHvBlock .MemberBalloon").animate({opacity:'1'}, 1000).delay(1000);
	},800);
  });

  //click service
  $("#ServiceBlock .btn01").click(function(){
    $('#ServiceHvBlock').css("display","block"); //クリック時
    $("#ServiceHvBlock .balloon01 img").css({opacity:'0',"margin-bottom":'-400px'});
    setTimeout(function(){
		$("#ServiceHvBlock .balloon01 img").stop().animate({opacity:'1',"margin-bottom":'0px'},2400);
	},0);
	$("#ServiceHvBlock .balloon02 img").css({opacity:'0',"margin-bottom":'-400px'});
    setTimeout(function(){
		$("#ServiceHvBlock .balloon02 img").stop().animate({opacity:'1',"margin-bottom":'0px'},2400);
	},900);
	$("#ServiceHvBlock .balloon03 img").css({opacity:'0',"margin-bottom":'-400px'});
    setTimeout(function(){
		$("#ServiceHvBlock .balloon03 img").stop().animate({opacity:'1',"margin-bottom":'0px'},2400);
	},600);
	$("#ServiceHvBlock .balloon04 img").css({opacity:'0',"margin-bottom":'-600px'});
    setTimeout(function(){
		$("#ServiceHvBlock .balloon04 img").stop().animate({opacity:'1',"margin-bottom":'0px'},4000);
	},2400);
    $("#ServiceHvBlock .balloon05 img").css({opacity:'0',"margin-bottom":'-400px'});
    setTimeout(function(){
		$("#ServiceHvBlock .balloon05 img").stop().animate({opacity:'1',"margin-bottom":'0px'},2400);
	},300);
    $("#ServiceHvBlock .balloon06 img").css({opacity:'0',"margin-bottom":'-400px'});
    setTimeout(function(){
		$("#ServiceHvBlock .balloon06 img").stop().animate({opacity:'1',"margin-bottom":'0px'},2400);
	},1200);
  });

  //click surprise
  $("#SurpriseBlock .btn01").click(function(){
    $('#SurpriseHvBlock').css("display","block"); //クリック時
    $("#SurpriseHvBlock .btn01 img").css({opacity:'0',"margin-left":'-200px'});
    setTimeout(function(){
		$("#SurpriseHvBlock .btn01 img").stop().animate({opacity:'1',"margin-left":'0px'},800);
	},0);
	$("#SurpriseHvBlock .btn02 img").css({opacity:'0',"margin-left":'-200px'});
    setTimeout(function(){
		$("#SurpriseHvBlock .btn02 img").stop().animate({opacity:'1',"margin-left":'0px'},800);
	},400);
	$("#SurpriseHvBlock .btn03 img").css({opacity:'0',"margin-left":'-200px'});
    setTimeout(function(){
		$("#SurpriseHvBlock .btn03 img").stop().animate({opacity:'1',"margin-left":'0px'},800);
	},800);
  });

  //click present
  $("#PresentBlock .btn01").click(function(){
    $('#PresentHvBlock').css("display","block"); //クリック時
    $("#PresentHvBlock .btn01 img").css({opacity:'0',"margin-left":'-200px',"-webkit-animation":'spin 0.66s linear 1',"animation":'spin 0.66s linear 1'});
    setTimeout(function(){
		$("#PresentHvBlock .btn01 img").stop().animate({opacity:'1',"margin-left":'0px'},800);
	},0);
	$("#PresentHvBlock .btn02 img").css({opacity:'0',"margin-left":'-200px',"-webkit-animation":'spin 0.6s linear 2',"animation":'spin 0.6s linear 2'});
    setTimeout(function(){
		$("#PresentHvBlock .btn02 img").stop().animate({opacity:'1',"margin-left":'0px'},800);
	},400);
	$("#PresentHvBlock .btn03 img").css({opacity:'0',"margin-left":'-200px',"-webkit-animation":'spin 0.47s linear 3',"animation":'spin 0.47s linear 3'});
    setTimeout(function(){
		$("#PresentHvBlock .btn03 img").stop().animate({opacity:'1',"margin-left":'0px'},800);
	},800);
  });
});