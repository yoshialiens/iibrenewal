
$(document).ready(function(){
  $('#NewsHvBlock').css("display","none");
  $('#AboutHvBlock').css("display","none");
  $('#MemberHvBlock').css("display","none");
  $('#MemberHvBlock').css("display","none");
  $('#ServiceHvBlock').css("display","none");
  $('#SurpriseHvBlock').css("display","none");
  $('#PresentHvBlock').css("display","none");
  $('#ActionBlock02 .Action02 .Act2-2').css("display","none");

// top fadeout
setTimeout(function(){$("#ActionBlock01 .Action01 .Act1-1").css("display","block").fadeIn();},0);
setTimeout(function(){$("#ActionBlock01 .Action01 .Act1-2").css("display","block").fadeIn();},4000);
setTimeout(function(){
$("#ActionBlock01").fadeOut();
},6000);
setTimeout(function(){
$("#ActionBlock02 .Action02 .Act2-1").animate({top:'0px'}, 1500).delay(0);
},6000);
setTimeout(function(){
$("#ActionBlock02 .Action02 .Act2-2").fadeIn();
},7500);
// setInterval(function(){
// $('#ActionBlock02 .Action02 .Act2-2').fadeOut(100,function(){$(this).fadeIn(100)});
// },8000);

  //click news
  $("#NewsBlock .btn01").click(function(){
    $('#NewsHvBlock').css("display","block"); //クリック時
    $("#ActionBlock01").stop().fadeOut(1000);
    $("#ActionBlock02").stop().fadeOut(1000);
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
    $("#AboutHvBlock").css({opacity:'0',"margin":'650px 0 0 600px'});
    setTimeout(function(){
		$("#AboutHvBlock").stop().animate({opacity:'1',"margin":'650px 0 0 86px'},1200);
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




// <!-- サイドバー開閉 -->
$(function(){
  $('header .Menu img').click(function(e){
    $('body').toggleClass('MenuOpen');
  });
  $('.close-button').click(function(e){
    $('body').removeClass('MenuOpen');
  });
});
// <!-- /サイドバー開閉 -->

// スクロール幅
$(window).bind("load", function(){

  // URLにhogehogeが含まれていたら実行
  if(document.URL.match("/service/index.php")) {
  }
  else{}
});

$(function () {
    var headerHight = 200; //ヘッダの高さ
    $('a[href^=#]').click(function(){
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
        $("html, body").animate({scrollTop:position}, 550, "swing");
        return false;
    });
});


// $(function(){
//    $(window).scroll(function(){ // スクロール毎にイベントが発火します。
//       var scr_count = $(document).scrollTop();
//       $('#ToggleMenu').css('top', scr_count);
//    })
// })

// useragent
(function(){
    var ua = navigator.userAgent.toUpperCase();
    var url = document.location.pathname;
    var spDir = '/sp';

    (ua.indexOf('IPHONE') != -1 || (ua.indexOf('ANDROID') != -1 && ua.indexOf('MOBILE') != -1))?
        isSP() :
        isPC();

    function isSP(){
        if(url.match(spDir)){
            return false;
        }else{
            location.href = spDir + url + location.search;
        }
    }

    function isPC(){
        if(!url.match(spDir)){
            return false;
        }else{
            location.href = '' + url + location.search;
        }
    }

}());
