// JavaScript Document

/********
ページ関連
******************************/

//ページのフェードイン
$(document).ready(function() {
  $('body').fadeIn(1200);
});

/********
リンク関連
******************************/

$(function(){
  //リンク-ふわっと処理
  $("a img.opa,.opa")
  .css("opacity","1")
  .on("mouseover",function(){
    $(this).stop(true).animate({
      opacity:"0.7"
    },200);
  })
  .on("mouseout",function(){
    $(this).stop(true).animate({
      opacity:"1"
    },200);
  });
  //リンク-画像切替
  $("a img.over,input.over").hover(function(){
    $(this).attr("src", $(this).attr("src").replace("_off", "_on"));
      },function(){
        if (!$(this).hasClass("currentPage")){
        $(this).attr("src", $(this).attr("src").replace("_on", "_off"));
      }
  });
  //TOPへ戻る
  $(".goto_top").click(function (){
    $("html,body").animate({ scrollTop: 0 }, 1000 ,"swing");
      return false;
  });
  /* メニュータブ開閉 */
  $(".swich .btn").click(function(){
    $("#sp_menu ul").slideToggle('middle');
  });
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^=#]').click(function() {
    // スクロールの速度
    var speed = 1000; // ミリ秒
    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    var position = target.offset().top;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
  //mouseover時のアニメーション
  $(".gallerylist li a").mouseenter(function(){
	$(this).children("div.txtzone").stop().animate({
		height:280
	},500);
}).mouseleave(function(){
	$(this).children("div.txtzone").stop().animate({
		height:0
	},500);
  });
  
  
});


/********
フォーム関連
******************************/
$(function(){
//フォーム文字初期値設定
  var $id_form=$("input#id_form");
  var $captcha=$("input#captcha_code");
  if($id_form.val()==""){
    $id_form
    .val("ここにIDを入力")
    .css({color:"#a39f9f",fontSize:"13px",height:"20px"})
    .one("focus",function(){
    $(this).val("").css({color:"#000000",fontSize:"18px",height:"20px"});
    })
    .blur(function(){
    if($(this).val()==""){
    $(this).val("ここにIDを入力")
    .css({color:"#a39f9f",fontSize:"13px",height:"20px"})
    .one("focus",function(){
    $(this).val("").css({color:"#000000",fontSize:"18px",height:"20px"});
    });
      }
    });
  };
//半角自動変換
  $(".henkan").change(function(){
  var text  = $(this).val();
  var hen = text.replace("—","@").replace(/[‚`-‚y‚-‚š‚O-‚X]/g,function(s){
      return String.fromCharCode(s.charCodeAt(0)-0xFEE0);
    });
  $(this).val(hen);
  });
});

/********
コンテンツ関連
******************************/

/* hoverで切り替わるタブ */
$(function(){ 
  $("#item1").addClass("selected");
  $("ul.itemdetail li:not("+$("ul.showphoto li a.selected").attr("title")+")").hide()
  $("ul.showphoto li a").hover(function(){
    $("ul.showphoto li a").removeClass("selected");
    $(this).addClass("selected");
    $("ul.itemdetail li").hide();
    $($(this).attr("title")).show();
    $("ul.showphoto li").animate({scrollTop:0},'1');
  },function(){
    $("ul.showphoto li a").removeClass("selected");     
  });
  /* href-Passがマッチしたら、画像差し替え */
  if(path.match("/report/")){  
    $('.pc #g_nav li:nth-child(7)').each(function(){
      $(".pc #g_nav li:nth-child(7) img").attr("src", "/tgc/15ss/img/common/nav_commingsoon.gif");
    })
  };

}); 