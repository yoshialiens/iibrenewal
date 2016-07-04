<?php @include '../temp/path.php'; ?>
<!doctype html>
<!--[if IE 8]><html class="ie ie8"><![endif]-->
<!--[if IE 9]><html class="ie ie9"><![endif]-->
<!--[if !IE]><!-->
<html lang="ja">
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#">
<meta charset="UTF-8">

<!--[if lt IE 9]><meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" /><![endif]-->


<!--meta-->
<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=yes">
<meta name="description" content="ミッション|株式会社いないいないばぁは日本一のサプライズマーケティング会社です。口コミやリピートを増やすためのサプライズを提案し、人々に喜んでもらうためのコンサルティングを行います。">
<meta name="keywords" content="IIB,いないいないばぁ,サプライズマーケティング,サプマケ">

<!--icon-->
<link rel="shortcut icon" href="/sp/common/img/favicon.ico" />
<link rel="apple-touch-icon" href="/sp/common/img/home-icon.png">

<!--title・canonical-->
<title>ミッション| 株式会社いないいないばぁ-サプライズマーケティングで口コミやリピートを増やすコンサルティングならお任せください。</title>
<link rel="canonical" href="http://www.i-i-b.jp/about/mission.php" />


<!--CSS-->
<link rel="stylesheet" href="../common/css/common.css" type="text/css" media="all">
<link rel="stylesheet" href="../common/css/sub.css" type="text/css" media="all">
<link rel="stylesheet" href="../common/css/magnific-popup.css" type="text/css" media="all">

<!--[if lt IE 9]>
<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<script src="../common/js/respond.min.js"></script>
<![endif]-->
<!--[if IE 6]><script src="../common/js/minmax.js"></script><![endif]-->


<!--FB-->
<meta property="og:title" content="ミッション | 日本一のサプライズマーケティング会社【株式会社いないいないばぁ】">
<meta property="og:site_name" content="株式会社いないいないばぁ">
<meta property="og:description" content="株式会社いないいないばぁは日本一のサプライズマーケティング会社です。口コミやリピートを増やすためのサプライズを提案し、人々に喜んでもらうためのコンサルティングを行います。">
<meta property="og:type" content="website">
<meta property="og:url" content="http://www.i-i-b.jp/about/mission.php">
<meta property="og:image" content="http://www.i-i-b.jp/sp/common/img/fb.jpg">

<?php @include '../analyticstracking.php'; ?>

</head>
<body>


<div id="wrapper">
  
  <?php @include '../temp/header.php'; ?>

  <!--container-->
  <div class="container" id="about">
    <div class="monster_zone">
      
      <section class="chara_box konichiha">
        <h2><img src="../common/img/title_mission.png" alt="mission"></h2>
        <p class="subdesc">いないいないばぁのミッション</p>
        <div class="boxline">
          <div class="mission_box">
            <p class="title">毎日に<span class="wkwk">ワクワク</span>を、<br>ビジネスに<span class="spsp">サプライズ</span>を。</p>
            <p class="sub">Create a Surprise</p>
            <p class="txtzone">心にユーモアを持って、<br>
            独創的なアイデアを生み出し、<br>あっと驚かせる喜びを提供します。</p>
          </div>
          <h2 class="credo"><img src="../common/img/title_credo.png" alt="mission"></h2>
          <p class="subdesc">いないいないばぁのクレド</p>
          <div class="mission_box">
            <p class="title">いつも楽しく、<br>
            さらに楽しく。</p>
            <p class="sub">Always pursue<br>
            fun things</p>
            <p class="txtzone">私たちは、予想を裏切るスピードと、他者を圧倒するクオリティを約束し、自分たちにも世の中にもハッピーを増やす、サプライズのリーディングカンパニーを目指します。</p>
          </div>


        </div><!--boxline-->
      </section><!--chara_box-->
       
    </div>
    <?php @include '../temp/footer_link.php'; ?>
    

  </div><!--container-->

  <?php @include '../temp/footer.php'; ?>

</div>

<!--js-->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script src="../common/js/main.js"></script>
<script src="../common/js/jquery.magnific-popup.min.js"></script>
<script src="../common/js/jquery.circliful.js"></script>

<script>
$(function () {
  $('.popup-modal').magnificPopup({
    type: 'inline',
    preloader: false
  });
  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});
$(function(){
  $("#ToggleMenu li.sub").on("click", function() {
    $(this).next().slideToggle();
    return false;
  });
});
</script>

</body>
</html>