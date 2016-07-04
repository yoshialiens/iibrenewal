// JavaScript Document
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
  // <!-- サイドバー開閉 -->
  $('.Menu img').click(function(e){
    $('body').toggleClass('MenuOpen');
  });
  $('.close-button').click(function(e){
    $('body').removeClass('MenuOpen');
  });

});

/*

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

*/
