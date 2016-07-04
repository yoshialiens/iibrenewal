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
<meta name="description" content="株式会社いないいないばぁは日本一のサプライズマーケティング会社です。口コミやリピートを増やすためのサプライズを提案し、人々に喜んでもらうためのコンサルティングを行います。">
<meta name="keywords" content="IIB,いないいないばぁ,サプライズマーケティング,サプマケ">

<!--icon-->
<link rel="shortcut icon" href="/sp/common/img/favicon.ico" />
<link rel="apple-touch-icon" href="/sp/common/img/home-icon.png">

<!--title・canonical-->
<title>メールマガジン| 株式会社いないいないばぁ-サプライズマーケティングで口コミやリピートを増やすコンサルティングならお任せください。</title>
<link rel="canonical" href="http://www.i-i-b.jp/present/magazine.php" />

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
<meta property="og:title" content="メールマガジン | 日本一のサプライズマーケティング会社【株式会社いないいないばぁ】">
<meta property="og:site_name" content="株式会社いないいないばぁ">
<meta property="og:description" content="株式会社いないいないばぁは日本一のサプライズマーケティング会社です。口コミやリピートを増やすためのサプライズを提案し、人々に喜んでもらうためのコンサルティングを行います。">
<meta property="og:type" content="website">
<meta property="og:url" content="http://www.i-i-b.jp/present/magazine.php">
<meta property="og:image" content="http://www.i-i-b.jp/sp/common/img/fb.jpg">


<?php @include '../analyticstracking.php'; ?>



</head>
<body>


<div id="wrapper">
  
  <?php @include '../temp/header.php'; ?>

  <!--container-->
  <div class="container" id="about">
    <div class="present_zone">
      
      <section class="chara_box konichiha">
        <h2><img src="../common/img/title_present_02.png" alt="present"></h2>
        <p class="subdesc">メールマガジン</p>
        <div class="boxline">
          <h3 class="serif">
            <p class="photo"><img src="../common/img/icon_monster_02.png" alt="monster"></p>
            <p class="arrow">「仕事の秘訣」のご登録はコチラから!!</p>
          </h3>
          <p class="chara"><img src="../common/img/icon_monster_07.png" alt="monster"></p>
          <div class="txt">
            <p>「仕事の秘訣」は、読んで、すぐに使える実践型のメルマガです。<br>
              「学び」ではなく、「結果」を大切にしています。</p>
            <p>「本当にそうなんだろうか？」「そんなわけがない」「常識はずれだ」と感じるかもしれません。</p>
            <p>それが大事なんです。</p>
            <p>普段は意識していないことを考えることで、脳が刺激され、新しいアイディアや発想が生まれます。</p>
            <p>お届けする内容をそのまま受け入れるのではなく、ご自身の頭で考えることで問題をすんなり解決出来るクリエイティブな脳に変わっていきます。</p>
            <p>日常に溢れているチャンスを短時間で成果に結びつける極上のヒントをお届けしますので、楽しみながらお読みください。</p>
          </div>
          <div class="gray_box">
            <form action="http://www.i-i-b.jp/mail/npformu.php" method="POST">
            <div class="form_txt">
            <dl class="Form form_name">
              <dt>お名前</dt>
              <dd class="Name">
                <p class="c_name">姓：<input type="text" name="c_name"></p>
                <p class="c_name">名：<input type="text" name="c_name2"></p>
              </dd> 
            </dl>
            <dl class="Form">
              <dt>E-Mail</dt>
              <dd><input type="text" name="c_mailaddress"></dd>
            </dl>
            <dl class="Form">
              <dt>E-Mail (確認用)</dt>
              <dd><input type="text" name="c_ckmailaddress"></dd>
            </dl>
            </div>
            <!--for SYSTEM TAG-->
            <input type="hidden" name="h_planid" value="step_cp061Fy7">
            <input type="hidden" name="h_regchk" value="regist">
            <input type="hidden" name="h_cset" value="UTF-8">
            <input type="hidden" name="h_thankspg" value="thanks">
            <!--for SYSTEM TAG END-->
            <div class="btn">
              <input id="send" type="submit" value="そんなに読みたいの...">
            </div>
            </form>
          </div>
          
        </div><!--boxline-->
      </section><!--chara_box-->   
    </div>
    
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