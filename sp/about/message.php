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
<meta name="description" content="代表挨拶|株式会社いないいないばぁは日本一のサプライズマーケティング会社です。口コミやリピートを増やすためのサプライズを提案し、人々に喜んでもらうためのコンサルティングを行います。">
<meta name="keywords" content="IIB,いないいないばぁ,サプライズマーケティング,サプマケ">

<!--icon-->
<link rel="shortcut icon" href="/sp/common/img/favicon.ico" />
<link rel="apple-touch-icon" href="/sp/common/img/home-icon.png">

<!--title・canonical-->
<title>代表挨拶| 株式会社いないいないばぁ-サプライズマーケティングで口コミやリピートを増やすコンサルティングならお任せください。</title>
<link rel="canonical" href="http://www.i-i-b.jp/about/history.php" />


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
<meta property="og:title" content="代表挨拶 | 日本一のサプライズマーケティング会社【株式会社いないいないばぁ】">
<meta property="og:site_name" content="株式会社いないいないばぁ">
<meta property="og:description" content="株式会社いないいないばぁは日本一のサプライズマーケティング会社です。口コミやリピートを増やすためのサプライズを提案し、人々に喜んでもらうためのコンサルティングを行います。">
<meta property="og:type" content="website">
<meta property="og:url" content="http://www.i-i-b.jp/about/history.php">
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
        <h2><img src="../common/img/title_konichiha.png" alt="konichiha"></h2>
        <p class="subdesc">代表の代表による代表のための挨拶</p>
        <div class="boxline">
          <ul class="message_box">
            <li>
              <p class="photo"><img src="../common/img/img_message_01.png" alt="photo"></p>
              <p>のわー</p>
            </li>
            <li>
              <p class="photo"><img src="../common/img/img_message_02.png" alt="photo"></p>
              <p>ううっ</p>
            </li>
            <li>
              <p class="photo"><img src="../common/img/img_message_03.png" alt="photo"></p>
              <p>転んでも</p>
            </li>
            <li>
              <p class="photo"><img src="../common/img/img_message_04.png" alt="photo"></p>
              <p>立ち上が...</p>
            </li>
            <li>
              <p class="photo"><img src="../common/img/img_message_05.png" alt="photo"></p>
              <p>(声援)</p>
            </li>
            <li>
              <p class="photo"><img src="../common/img/img_message_06.png" alt="photo"></p>
              <p>(立ち上が...)</p>
            </li>
            <li>
              <p class="photo"><img src="../common/img/img_message_07.png" alt="photo"></p>
              <p>(タイムトラベル)</p>
            </li>
            <li>
              <p class="photo"><img src="../common/img/img_message_08.png" alt="photo"></p>
              <p>立ち上が...</p>
            </li>
            <li>
              <p class="photo"><img src="../common/img/img_message_09.png" alt="photo"></p>
              <p>パラダイムシフト</p>
            </li>
            <li>
              <p class="photo"><img src="../common/img/img_message_10.png" alt="photo"></p>
              <p>立ち上が...</p>
            </li>
            <li>
              <p class="photo"><img src="../common/img/img_message_11.png" alt="photo"></p>
              <p>よろしくお願いします。</p>
            </li>

          </ul>
          

        </div><!--boxline-->
      </section><!--chara_box-->
       
    </div>
    <?php @include '../temp/footer_link2.php'; ?>


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