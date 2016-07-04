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
<title>会社概要| 株式会社いないいないばぁ-サプライズマーケティングで口コミやリピートを増やすコンサルティングならお任せください。</title>
<link rel="canonical" href="http://www.i-i-b.jp/about/company.php" />

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
<meta property="og:title" content="会社概要 | 日本一のサプライズマーケティング会社【株式会社いないいないばぁ】">
<meta property="og:site_name" content="株式会社いないいないばぁ">
<meta property="og:description" content="株式会社いないいないばぁは日本一のサプライズマーケティング会社です。口コミやリピートを増やすためのサプライズを提案し、人々に喜んでもらうためのコンサルティングを行います。">
<meta property="og:type" content="website">
<meta property="og:url" content="http://www.i-i-b.jp/about/company.php">
<meta property="og:image" content="http://www.i-i-b.jp/sp/common/img/fb.jpg">

<?php @include '../analyticstracking.php'; ?>

</head>
<body>


<div id="wrapper">

  <?php @include '../temp/header.php'; ?>


  <!--container-->
  <div class="container" id="about">
    <section class="history_zone">
      <div class="bg">
        <div class="title_box">
          <h2><img src="../common/img/title_iib.png" alt="IIB Island"><br>
          <span>いないいないばぁの島</span><br>
          <span class="strongred">会社概要</span>
          </h2>
        </div>
      </div>

      <div class="company_list boxline">
        <dl>
          <dt>会社名</dt>
          <dd>株式会社いないいないばぁ</dd>
        </dl>
        <dl>
          <dt>設立</dt>
          <dd>2013年8月</dd>
        </dl>
        <dl>
          <dt>所在地</dt>
          <dd>
            <p>〒150-0001</p>
            <p>東京都渋谷区神宮前5丁目29-9&nbsp;めぐみハイマンション703</p>
          </dd>
        </dl>
        <dl>
          <dt>役員</dt>
          <dd>
            <p>代表取締役：柴田剛成</p>
            <p>取締役：小泉憲一</p>
            <p>取締役：中村州宏</p>
            <p>取締役：齊川真輔</p>
          </dd>
        </dl>
        <dl>
          <dt>従業員数</dt>
          <dd>20名(外部パートナー含む)</dd>
        </dl>
        <dl>
          <dt>事業内容</dt>
          <dd class="business">
            <p>・サプライズマーケティング事業<br>
            (企画・立案/サイト制作/デザイン/プロモーション/ライティング)</p>
            <p>・自社メディア運用事業</p>
            <p>・プロモーション/コンテンツ企画制作事業</p>
            <p>・システム開発事業</p>
          </dd>
        </dl>
        <dl>
          <dt>主要取引先</dt>
          <dd>
            <p>東京大学</p>
            <p>フランクリー・コヴィー・ジャパン株式会社</p>
            <p>株式会社プロモート</p>
            <p>データスタジアム株式会社</p>
            <p>uuum株式会社</p>
            <p>株式会社アニヴェルセル</p>
            <p>株式会社静鉄アド・パートナーズ</p>
            <p>株式会社JSシステムズ</p>
            <p>株式会社IEインスティテュート</p>
            <p>株式会社イニシャルサイト</p>
            <p>株式会社クミン</p>
            <p>株式会社ワンダーランドカザキリ</p>
            <p>株式会社アップスジェーピー</p>
            <p>株式会社ルートワン・パワー</p>
            <p>株式会社Lo Umber</p>
          </dd>
        </dl>
      </div>

    </section>
    
    <?php @include '../temp/footer_link.php'; ?>

  </div><!--container-->

  <?php @include '../temp/footer.php'; ?>

</div>

<!--js-->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script src="../common/js/main.js"></script>
<script src="../common/js/jquery.magnific-popup.min.js"></script>
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