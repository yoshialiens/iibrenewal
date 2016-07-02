<?php
  require_once dirname(__FILE__) . '/../admin/scripts/model/DivisionModel.class.php';
  require_once dirname(__FILE__) . '/../admin/scripts/model/CategoryModel.class.php';
  require_once dirname(__FILE__) . '/../admin/scripts/model/ItemModel.class.php';
  require_once dirname(__FILE__) . '/../admin/scripts/model/AuthorModel.class.php';
  require_once dirname(__FILE__) . '/../admin/scripts/UploadLib.class.php';

  $division_model = new DivisionModel();
  $category_model = new CategoryModel();
  $author_model = new AuthorModel();
  $item_model = new ItemModel();

  $division_list = array(1);//ブログ
  $division_all = array();
  foreach($division_list as $id){
      $division_all[$id] = $division_model->getDivision($id);
  }
  foreach($division_all as $k => $v){
    $category_all = $category_model->getCategoryAllByDivisionId($v['division_id']);
    $item_all = $item_model->getItemAllByDivisionId($v['division_id']);
    $division_all[$k]['category_all'] = array_slice($category_all, 0, 4);
  }
  $PAGE_ITEM_COUNT = 3;//1ページに表示する数
  // $filter = $session->get('filter');
  $category_id2 = (int)@$filter['category_id'];
  //ページ番号
  $page_num = @$_GET['p'];
  $item_count = $item_model->getItemCountByFilter($category_id);
  //最大ページ数
  $page_max = ceil($item_count / $PAGE_ITEM_COUNT);
  $item_all2 = $item_model->getItemAllByFilter($category_id2, $page_num, $PAGE_ITEM_COUNT);
  foreach($item_all2 as &$v2)
  {
    $v2['division_name'] = htmlspecialchars($v2['division_name'], ENT_QUOTES, 'UTF-8');
    $v2['category_name'] = htmlspecialchars($v2['category_name'], ENT_QUOTES, 'UTF-8');
    $v2['name'] = htmlspecialchars($v2['name'], ENT_QUOTES, 'UTF-8');
    unset($v2);
  }
  //ソーシャルボタン用
   $server_name = $_SERVER['SERVER_NAME'];
   $social_url = urlencode("http://{$server_name}/");
   $url = "http://{$server_name}/article.php";
?>

<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<!--[if lt IE 9]><meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" /><![endif]-->
<meta name="viewport" content="width=device-width,user-scalable=no" />
<title>株式会社いないいないばぁ</title>
<meta name="description" content="" />
<meta name="robots" content="ALL" />
<link rel="shortcut icon" href="../common/img/favicon.ico" />
<!-- <link rel="stylesheet" href="common/css/menu_sideslide.css" type="text/css" media="all"> -->

<link rel="stylesheet" href="common_anime/css/app.css">
<link rel="stylesheet" type="text/css" href="common_anime/res/css2/common.css">

<link rel="stylesheet" href="../common/css/basic.css" type="text/css" media="all">
<link rel="stylesheet" href="../common/css/index.css" type="text/css" media="all">
<link rel="stylesheet" href="../common/css/animate.css" type="text/css" media="all">


<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<script src="../common/js/common.js"></script>
<!-- <script src="../common/js/classie.js"></script> -->
<!-- <script src="../common/js/main.js"></script> -->
<!--[if lt IE 9]>
<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<script src="../common/js/respond.min.js"></script>
<![endif]-->
<!--[if IE 6]><script src="common/js/minmax.js"></script><![endif]-->


<script src="common_anime/js/bundle.js"></script>


<meta property="og:title" content="" />
<meta property="og:type" content="website" />
<meta property="og:image" content="common/img/cover.png" />
<meta property="og:url" content="http://www.i-i-b.jp/" />
<meta property="og:site_name" content="株式会社いないいないばぁ" />
<meta property="og:description" content="" />
</head>

<body class="index sp_anime">


<script type="text/javascript">
nol_showCmnHeader();
</script>


<div id="wrapper"><!-- wrapper -->
<div id="ToggleMenu">
<button class="close-button" id="close-button">Close Menu</button>
<div class="MenuInner">
<nav>
<ul class="Hv">
<a href="/"><li>HOME</li></a>
<a href="history.php"><li>いないいないばぁの島</li></a>
<a href="service/"><li>十八番（オハコ）の島</li></a>
<!--<a href="surprise.php"><li>サプライズの島</li></a>-->
<a href="member.php"><li>モンスターの島</li></a>
<a href="article.php"><li>ブログの島</li></a>
<!--<a href="present.php"><li>プレゼントの島</li></a>-->
<a href="contact/"><li>お問い合わせ</li></a>
<a href="recruit/"><li>採用情報</li></a>
</ul>
</nav>
</div>
</div>
<header>
<div class="Menu"><!-- <button class="menu-button" id="open-button"> --><img src="../common/img/header/btn-menu.png" width="40" height="34" alt="Menu"/></div>
<div class="Logo"><img src="../common/img/header/logo.png" width="340" height="32" alt="株式会社いないいないばぁ"/></div>
<ul>
<li><img src="../common/img/header/btn-fb.png" width="27" height="27" alt=""/></li>
<li><img src="../common/img/header/btn-tw.png" width="27" height="27" alt=""/></li>
<li><img src="../common/img/header/btn-g.png" width="27" height="27" alt=""/></li>
</ul>
<button class="btn btn-contact btn-act">お問い合わす</button>
</header>


<div id="index-wrap" class="wrap"><!-- index-wrap -->


<div class="maps">

  <div class="maps__container">
    <div class="maps__container__inner">
      <div class="maps__container__inner__map">

        <div class="maps__container__inner__map__bg">
          <div class="maps__container__inner__map__bg--1"></div>
          <div class="maps__container__inner__map__bg--2"></div>
          <div class="maps__container__inner__map__bg--3"></div>
          <div class="maps__container__inner__map__bg--4"></div>
          <div class="maps__container__inner__map__bg--5"></div>
          <div class="maps__container__inner__map__bg--6"></div>
        </div>
      </div>
    </div>
  </div>

















<section>
<div id="SeaBlock">
<div class="bottle01"><img src="../common/img/index/sea/bottle-01.png" width="40" height="64" alt=""/></div>
<div class="bridge01"><img src="../common/img/index/sea/bridge-01.png" width="58" height="43" alt=""/></div>
<div class="cactus01"><img src="../common/img/index/sea/cactus-01.png" width="36" height="75" alt=""/></div>
<div class="coral01"><img src="../common/img/index/sea/coral-01.png" width="56" height="48" alt=""/></div>
<div class="crab01"><img src="../common/img/index/sea/crab-01.png" width="46" height="41" alt=""/></div>
<div class="dolphin01"><img src="../common/img/index/sea/dolphin-01.png" width="108" height="58" alt=""/></div>
<div class="dolphin02"><img src="../common/img/index/sea/dolphin-02.png" width="93" height="51" alt=""/></div>
<div class="fish01"><img src="../common/img/index/sea/fish-01.png" width="63" height="29" alt=""/></div>
<div class="fish02"><img src="../common/img/index/sea/fish-02.png" width="72" height="33" alt=""/></div>
<div class="fish03"><img src="../common/img/index/sea/fish-03.png" width="47" height="32" alt=""/></div>
<div class="fish04"><img src="../common/img/index/sea/fish-04.png" width="89" height="60" alt=""/></div>
<div class="float01"><img src="../common/img/index/sea/float-01.png" width="46" height="47" alt=""/></div>
<div class="jellyfish01"><img src="../common/img/index/sea/jellyfish-01.png" width="41" height="80" alt=""/></div>
<div class="octopus01"><img src="../common/img/index/sea/octopus-01.png" width="80" height="84" alt=""/></div>
<div class="seahorse01"><img src="../common/img/index/sea/seahorse-01.png" width="46" height="85" alt=""/></div>
<div class="seahorse02"><img src="../common/img/index/sea/seahorse-02.png" width="34" height="60" alt=""/></div>
<div class="shark01"><img src="../common/img/index/sea/shark-01.png" width="118" height="50" alt=""/></div>
<div class="shell01"><img src="../common/img/index/sea/shell-01.png" width="49" height="41" alt=""/></div>
<div class="shell02"><img src="../common/img/index/sea/shell-02.png" width="46" height="37" alt=""/></div>
<div class="ship01"><img src="../common/img/index/sea/ship-01.png" width="76" height="35" alt=""/></div>
<div class="squid01"><img src="../common/img/index/sea/squid-01.png" width="36" height="102" alt=""/></div>
<div class="starfish01"><img src="../common/img/index/sea/starfish-01.png" width="33" height="35" alt=""/></div>
<div class="tower01"><img src="../common/img/index/sea/tower-01.png" width="44" height="65" alt=""/></div>
<div class="turtle01"><img src="../common/img/index/sea/turtle-01.png" width="50" height="53" alt=""/></div>
<div class="turtle02"><img src="../common/img/index/sea/turtle-02.png" width="52" height="51" alt=""/></div>
<div class="whale01"><img src="../common/img/index/sea/whale-01.png" width="147" height="77" alt=""/></div>
<div class="yacht01"><img src="../common/img/index/sea/yacht-01.png" width="52" height="59" alt=""/></div>
</div>
</section>

<section>
<div id="NewsBlock">
<h2><img src="../common/img/index/news/h2.png" width="181" height="47" alt="いないいないばぁからのお知らせ"/></h2>
<div class="bird01"><img src="../common/img/index/news/bird-01.png" width="65" height="69" alt=""/></div>
<div class="bird02"><img src="../common/img/index/news/bird-02.png" width="69" height="68" alt=""/></div>
<div class="bird03"><img src="../common/img/index/news/bird-03.png" width="72" height="63" alt=""/></div>
<div class="bird04"><img src="../common/img/index/news/bird-04.png" width="47" height="82" alt=""/></div>
<div class="bird05"><img src="../common/img/index/news/bird-05.png" width="74" height="64" alt=""/></div>
<div class="man01"><img src="../common/img/index/news/man-01.png" width="33" height="64" alt=""/></div>
<div class="cow01"><img src="../common/img/index/news/cow-01.png" width="79" height="49" alt=""/></div>
<div class="btn01"><img src="../common/img/index/news/btn-01.png" width="103" height="145" alt=""/></div>
</div>
</section>

<section>
<div id="AboutBlock">
<h2><a href="history.php"><img src="../common/img/index/about/h2.png" width="147" height="46" alt="いないいないばぁについて"/></a></h2>
<div class="bird01"><img src="../common/img/index/about/bird-01.png" width="71" height="64" alt=""/></div>
<div class="bird02"><img src="../common/img/index/about/bird-02.png" width="122" height="59" alt=""/></div>
<div class="lion01"><img src="../common/img/index/about/lion-01.png" width="110" height="68" alt=""/></div>
<div class="lizard01"><img src="../common/img/index/about/lizard-01.png" width="83" height="45" alt=""/></div>
<div class="turtle01"><img src="../common/img/index/about/turtle-01.png" width="64" height="33" alt=""/></div>
<div class="btn01"><img src="../common/img/index/about/btn-01.png" width="103" height="145" alt=""/></div>
</div>
</section>

<section>
<div id="ServiceBlock">
<h2><a href="service/"><img src="../common/img/index/service/h2.png" width="161" height="46" alt="いないいないばぁの事業"/></a></h2>
<div class="horse01"><img src="../common/img/index/service/horse-01.png" width="103" height="89" alt=""/></div>
<div class="balloon01"><img src="../common/img/index/service/balloon-01.png" width="50" height="74" alt=""/></div>
<div class="car01"><img src="../common/img/index/service/car-01.png" width="60" height="41" alt=""/></div>
<div class="car02"><img src="../common/img/index/service/car-02.png" width="57" height="52" alt=""/></div>
<div class="btn01"><img src="../common/img/index/service/btn-01.png" width="103" height="145" alt=""/></div>
</div>
</section>

<section>
<div id="MemberBlock">
<h2><a href="member.php"><img src="../common/img/index/member/h2.png" width="182" height="47" alt="いないいないばぁのメンバー紹介"/></a></h2>
<div class="man01"><img src="../common/img/index/member/man-01.png" width="102" height="93" alt=""/></div>
<div class="man02"><img src="../common/img/index/member/man-02.png" width="50" height="109" alt=""/></div>
<div class="man03"><img src="../common/img/index/member/man-03.png" width="123" height="64" alt=""/></div>
<div class="woman01"><img src="../common/img/index/member/woman-01.png" width="43" height="145" alt=""/></div>
<div class="monster01"><img src="../common/img/index/member/monster-01.png" width="178" height="81" alt=""/></div>
<div class="btn01"><img src="../common/img/index/member/btn-01.png" width="103" height="145" alt=""/></div>
</div>
</section>

<section>
<div id="SurpriseBlock">
<h2><a href="surprise.php"><img src="../common/img/index/surprise/h2.png" width="181" height="46" alt="サプライズマーケティング"/></a></h2>
<div class="balloon01"><img src="../common/img/index/surprise/balloon-01.png" width="67" height="100" alt=""/></div>
<div class="bard01"><img src="../common/img/index/surprise/bard-01.png" width="47" height="86" alt=""/></div>
<div class="bear01"><img src="../common/img/index/surprise/bear-01.png" width="89" height="132" alt=""/></div>
<div class="car01"><img src="../common/img/index/surprise/car-01.png" width="144" height="85" alt=""/></div>
<div class="clown01"><img src="../common/img/index/surprise/clown-01.png" width="143" height="196" alt=""/></div>
<div class="monkey01"><img src="../common/img/index/surprise/monkey-01.png" width="94" height="114" alt=""/></div>
<div class="sealion01"><img src="../common/img/index/surprise/sealion-01.png" width="69" height="99" alt=""/></div>
<div class="tiger01"><img src="../common/img/index/surprise/tiger-01.png" width="136" height="77" alt=""/></div>
<div class="btn01"><img src="../common/img/index/surprise/btn-01.png" width="103" height="145" alt=""/></div>
</div>
</section>

<section>
<div id="BlogBlock">
<h2><a href="article.php"><img src="../common/img/index/blog/h2.png" width="139" height="46" alt="いないいないばぁのブログ"/></a></h2>
<div class="ice01"><img src="../common/img/index/blog/ice-01.png" width="119" height="109" alt=""/></div>
<div class="btn01"><a href="article.php"><img src="../common/img/index/blog/btn-01.png" width="103" height="145" alt=""/></a></div>
</div>
</section>

<section>
<div id="PresentBlock">
<h2><a href="present.php"><img src="../common/img/index/present/h2.png" width="169" height="46" alt="いないいないばぁからのプレゼント"/></a></h2>
<div class="bard01"><img src="../common/img/index/present/bard-01.png" width="45" height="43" alt=""/></div>
<div class="buddha01"><img src="../common/img/index/present/buddha-01.png" width="61" height="82" alt=""/></div>
<div class="demon01"><img src="../common/img/index/present/demon-01.png" width="57" height="56" alt=""/></div>
<div class="dragon01"><img src="../common/img/index/present/dragon-01.png" width="119" height="81" alt=""/></div>
<div class="fujiyama01"><img src="../common/img/index/present/fujiyama-01.png" width="172" height="67" alt=""/></div>
<div class="btn01"><img src="../common/img/index/present/btn-01.png" width="103" height="145" alt=""/></div>
</div>
</section>

<section>
<div id="BannerBlock">
<ul class="Hv clearfix">
<li><a href="http://7habits-game.com/" target="_blank"><img src="../common/img/index/bnr/bnr-boardgame.png" width="204" height="81" alt="７つの習慣ボードゲーム"></a></li>
<li><a href="https://youtubekai.com/" target="_blank"><img src="../common/img/index/bnr/bnr-youtube.png" width="204" height="81" alt="ようつべ解析"></a></li>
<li><a href="http://storys.jp/story/1027" target="_blank"><img src="../common/img/index/bnr/bnr-mentor.png" width="204" height="81" alt="美人女子大生メンターの教え"></a></li>
<li><a href="http://xn--28jyap6d.com/" target="_blank"><img src="../common/img/index/bnr/bnr-copy.png" width="204" height="81" alt="こぴたつ"></a></li>
</ul>
</div>
</section>


<section>
<div id="NewsHvBlock">
<div class="NewsBoard">
<h3><img src="../common/img/index/news/hv/h3.png" width="279" height="27" alt="お知らせとか新着とか"></h3>
<ul>
<?php foreach($item_all2 as $v2): ?>
<li><div class="L"><p class="cat"><?php echo $v2['category_name']; ?></p><p class="date"><?php echo $v2['posted_date']; ?></p></div><div class="R"><p class="Hv"><a href="post.php?item_id=<?php echo $v2['item_id']; ?>"><?php echo $v2['name']; ?></a></p></div></li>
<?php endforeach; ?>
<!-- <li><div class="L"><p class="cat">ニュース</p><p class="date">2016.06.01.</p></div><div class="R"><p class="Hv"><a href="#">ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト</a></p></div></li>
<li><div class="L"><p class="cat">ニュース</p><p class="date">2016.06.01.</p></div><div class="R"><p class="Hv"><a href="#">ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト</a></p></div></li>
 --></ul>
</div>
<div class="monster01"><img src="../common/img/index/news/hv/monster-01.png" width="215" height="204" alt=""></div>
</div>
</section>

<section>
<div id="AboutHvBlock">
<h3><img src="../common/img/index/about/hv/h3.png" width="402" height="38" alt="いないいないばぁの会社概要"></h3>
<div class="menu">
<ul>
<li class="plane"><img src="../common/img/index/about/hv/plane-01.png" width="211" height="77" alt="飛行機"></li>
<li class="menu01"><a href="company.php"><img src="../common/img/index/about/hv/btn-about01.png" width="116" height="63" alt="会社概要"></a></li>
<li class="menu02 Hv"><a href="history.php"><img src="../common/img/index/about/hv/btn-about02.png" width="98" height="59" alt="歴史"></a></li>
<li class="menu03 Hv"><a href="credo.php"><img src="../common/img/index/about/hv/btn-about03.png" width="98" height="59" alt="クレド"></a></li>
<li class="menu04 Hv"><a href="greeting.php"><img src="../common/img/index/about/hv/btn-about04.png" width="117" height="69" alt="代表挨拶"></a></li>
<li class="menu05 Hv"><a href="recruit/"><img src="../common/img/index/about/hv/btn-about05.png" width="117" height="70" alt="採用情報"></a></li>
</ul>
</div>
</div>
</section>

<section>
<div id="ServiceHvBlock">
<div class="balloon">
<ul>
<li class="balloon01"><a href="service/"><img src="../common/img/index/service/hv/btn-balloon01.png" width="94" height="216" alt="サプマケ式コンサルティング"></a></li>
<li class="balloon02"><a href="service/"><img src="../common/img/index/service/hv/btn-balloon02.png" width="94" height="217" alt="サプマケ式プロモーション"></a></li>
<li class="balloon03"><a href="service/"><img src="../common/img/index/service/hv/btn-balloon03.png" width="94" height="217" alt="ボードゲーム制作"></a></li>
<li class="balloon04"><a href="service/"><img src="../common/img/index/service/hv/btn-balloon04.png" width="94" height="212" alt="社内サプライズ"></a></li>
<li class="balloon05"><a href="service/"><img src="../common/img/index/service/hv/btn-balloon05.png" width="94" height="213" alt="サプマケ式動画制作"></a></li>
<li class="balloon06"><a href="service/"><img src="../common/img/index/service/hv/btn-balloon06.png" width="94" height="216" alt="サプマケ式WEB制作"></a></li>
</ul>
</div>
</div>
</section>

<section>
<div id="MemberHvBlock">
<div class="MemberBalloon">
<div class="BalloonInner">
<h3><img src="common/img/index/member/hv/h3.png" width="219" height="24" alt="メンバー紹介するよ"></h3>
<p class="btn Hv"><a href="member.php"><img src="../common/img/index/member/hv/btn-monster.png" width="161" height="29" alt="Show Me Monsters"></a></p>
</div>
</div>
<div class="monster01"><img src="../common/img/index/member/hv/monster-01.png" width="187" height="233" alt=""></div>
</div>
</section>

<section>
<div id="SurpriseHvBlock">
<div class="menu">
<ul>
<li class="btn01 Hv"><a href="surprise.php"><img src="../common/img/index/surprise/hv/btn-surprise01.png" width="200" height="67" alt="サプライズマーケティングとは？"></a></li>
<li class="btn02 Hv"><a href="surprise.php"><img src="../common/img/index/surprise/hv/btn-surprise02.png" width="156" height="50" alt="サプマケ研究所"></a></li>
<li class="btn03 Hv"><a href="surprise.php"><img src="../common/img/index/surprise/hv/btn-surprise03.png" width="200" height="67" alt="あなたのサプライズ魅力度チェック"></a></li>
</ul>
</div>
</div>
</section>

<section>
<div id="PresentHvBlock">
<div class="menu">
<ul>
<li class="btn01 Hv"><a href="present.php"><img src="../common/img/index/present/hv/btn-present01.png" width="125" height="125" alt="入金してみる"></a></li>
<li class="btn02 Hv"><a href="present.php"><img src="../common/img/index/present/hv/btn-present02.png" width="125" height="125" alt="無料メルマガ"></a></li>
<li class="btn03 Hv"><a href="present.php"><img src="../common/img/index/present/hv/btn-present03.png" width="125" height="125" alt="無料プレゼント"></a></li>
</ul>
</div>
</div>
</section>
















  <div class="maps__mini">
    <canvas width="100" height="100"></canvas>
  </div>
</div>


</div><!-- /index-wrap -->

<footer>
<!--
<ul>
<li><a href="/">HOME</a></li>
<li><a href="article.php">お知らせ</a></li>
<li><a href="company.php">会社概要</a></li>
<li><a href="history.php">事業内容</a></li>
<li><a href="member.php">メンバー紹介</a></li>
<li><a href="contact/">お問合わせ</a></li>
<li><a href="recruit/">採用情報</a></li>
</ul>
-->
<ul class="second">
<li><a href="legal.php">特定商取引法に基づく表記について</a></li>
<li><a href="privacy.php">プライバシーポリシー</a></li>
</ul>
</ul>
<div class="Logo"><img src="../common/img/header/logo.png" width="340" height="32" alt="株式会社いないいないばぁ"/></div>
<p>&copy; <script type="text/javascript">var iNavInt_curYear = new Date().getUTCFullYear(); document.write(iNavInt_curYear);</script> IIB All Rights Reserved.</p>
</footer>
</div><!-- wrapper -->

</body>
</html>