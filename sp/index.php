<?php
  require_once dirname(__FILE__) . '/../admin/scripts/model/DivisionModel.class.php';
  require_once dirname(__FILE__) . '/../admin/scripts/model/CategoryModel.class.php';
  require_once dirname(__FILE__) . '/../admin/scripts/model/ItemModel.class.php';
  require_once dirname(__FILE__) . '/../admin/scripts/model/AuthorModel.class.php';

  $division_model = new DivisionModel();
  $category_model = new CategoryModel();
  $item_model = new ItemModel();
  $author_model = new AuthorModel();
  
  //division_id一覧
  $division_list = array(
    1, //ブログ
    2, //金融
    3, //美容・サプリ
  );

  $division_all = array();
  foreach($division_list as $id)
  {
    $division_all[$id] = $division_model->getDivision($id);
  }

  foreach($division_all as $k => $v)
  {
    $category_all = $category_model->getCategoryAllByDivisionId($v['division_id']);
    $item_all = $item_model->getItemAllByDivisionId($v['division_id']);
    $division_all[$k]['category_all'] = array_slice($category_all, 0, 4);
  }


    //1ページに表示する数
  $PAGE_ITEM_COUNT = 3;
  //$filter = $session->get('filter');
  $category_id2 = (int)@$filter['category_id'];
  //ページ番号
  $page_num = @$_GET['p'];

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
  $url = "http://{$server_name}/";
?>


<!doctype html>
<!--[if IE 8]><html class="ie ie8"><![endif]-->
<!--[if IE 9]><html class="ie ie9"><![endif]-->
<!--[if !IE]><!-->
<html lang="ja">
<head>
<meta charset="UTF-8">

<!--[if lt IE 9]><meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" /><![endif]-->

<!--meta-->
<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=yes">
<meta name="description" content="株式会社いないいないばぁは日本一のサプライズマーケティング会社です。口コミやリピートを増やすためのサプライズを提案し、人々に喜んでもらうためのコンサルティングを行います。">
<meta name="keywords" content="【ここにキーワード】">

<!--title・icon-->
<title>株式会社いないいないばぁ-サプライズマーケティングで口コミやリピートを増やすコンサルティングならお任せください。</title>
<link rel="shortcut icon" href="common/img/favicon.ico" />

<!--CSS-->
<link rel="stylesheet" href="common/css/common.css" type="text/css" media="all">
<link rel="stylesheet" href="common/css/magnific-popup.css" type="text/css" media="all">

<!--[if lt IE 9]>
<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<script src="common/js/respond.min.js"></script>
<![endif]-->
<!--[if IE 6]><script src="common/js/minmax.js"></script><![endif]-->


<!--FB-->
<meta property="og:title" content="日本一のサプライズマーケティング会社【株式会社いないいないばぁ】">
<meta property="og:site_name" content="株式会社いないいないばぁ">
<meta property="og:description" content="株式会社いないいないばぁは日本一のサプライズマーケティング会社です。口コミやリピートを増やすためのサプライズを提案し、人々に喜んでもらうためのコンサルティングを行います。">
<meta property="og:type" content="website">
<meta property="og:url" content="http://www.i-i-b.jp/">
<meta property="og:image" content="http://www.i-i-b.jp/common/img/common/fb.jpg">

</head>
<body>


<div id="wrapper">
  <!--header-->
  <header>
    <!--spnavi-->
    <div class="head_sp">
      <h1 class="logo"><a href="/"><img src="common/img/h_logo.png" alt="株式会社いないいないばぁ"></a></h1>
      <div class="sp_menubar">
        <a class="popup-modal modal-close" href="#inline-wrap"><i></i></a>
      </div>
      <ul id="inline-wrap" class="mfp-hide sp_navmenu">
        <li><a href="/"><span>TOP</span></a></li>
        <li><a href="about/"><span>About</span></a></li>
        <li>
          <a href="blog/"><span>ブログ一覧</span></a>
          <ul class="sp_subcategory">
            <li><a href="#"><span>サブカテゴリ</span></a></li>
            <li><a href="#"><span>サブカテゴリ</span></a></li>
          </ul>
        </li>
        <li><a href="flow/"><span>制作の流れ</span></a></li>
        <li><a href="faq/"><span>よくある質問</span></a></li>
        <li><a href="contact/"><span>お問合せ</span></a></li>
      </ul>
    </div>
  </header>
  <!--container-->
  <div class="container">
    <!--Message Island-->
    <section class="message_zone">
      <div class="bg">
        <div class="title_box">
          <h2><img src="common/img/title_message.png" alt="Message Island"><br>
          <span>お知らせの島</span>
          </h2>
        </div>
      </div>
      <ul class="news_zone">
        <?php foreach($item_all2 as $v2): ?>
          <li>
          <a href="#">
          <p class="cate">ニュース</p>
          <p class="date">2016.6.20</p>
          <p class="txt">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストてす</p>
          </a>
        </li>
        <?php endforeach; ?>
        <!--
        <li>
          <a href="#">
          <p class="cate">ニュース</p>
          <p class="date">2016.6.20</p>
          <p class="txt">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </a>
        </li>
        <li>
          <a href="#">
          <p class="cate">ニュース</p>
          <p class="date">2016.6.20</p>
          <p class="txt">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </a>
        </li>
        -->
      </ul>  
    </section>
    <!--IIb Island-->
    <section class="iib_zone">
      <div class="bg">
        <div class="title_box">
          <h2><img src="common/img/title_iib.png" alt="IIB Island"><br>
          <span>いないいないばぁの島</span>
          </h2>
        </div>
      </div>
      <ul class="list">
        <li><a href="about/">会社概要</a></li>
        <li><a href="history/">歴史</a></li>
        <li><a href="credo/">クレド</a></li>
        <li><a href="#">代表挨拶</a></li>
        <li><a href="recruit/">採用情報</a></li>
      </ul>  
    </section>
    <!--Service Island-->
    <section class="service_zone">
      <div class="bg">
        <div class="title_box">
          <h2><img src="common/img/title_service.png" alt="Service Island"><br>
          <span>サービスの島</span>
          </h2>
        </div>
      </div>
      <ul class="list">
        <li><a href="#">
          <p class="photo"><img src="common/img/icon_item_01.png" alt="icon"></p>
          <p class="txt">サプマケ式<br>コンサルティング</p>
        </a></li>
        <li><a href="#">
          <p class="photo"><img src="common/img/icon_item_02.png" alt="icon"></p>
          <p class="txt">サプマケ式<br>プロモーション</p>
        </a></li>
        <li><a href="#">
          <p class="photo"><img src="common/img/icon_item_03.png" alt="icon"></p>
          <p class="txt">社内<br>サプライズ</p>
        </a></li>
        <li><a href="#">
          <p class="photo"><img src="common/img/icon_item_04.png" alt="icon"></p>
          <p class="txt">ボードゲーム<br>制作</p>
        </a></li>
        <li><a href="#">
          <p class="photo"><img src="common/img/icon_item_05.png" alt="icon"></p>
          <p class="txt">サプマケ式<br>動画制作</p>
        </a></li>
        <li><a href="#">
          <p class="photo"><img src="common/img/icon_item_06.png" alt="icon"></p>
          <p class="txt">サプマケ式<br>web制作</p>
        </a></li>
      </ul>
    </section>
    <!--Monster Island-->
    <section class="monster_zone">
      <div class="bg">
        <div class="title_box">
          <h2><img src="common/img/title_monster.png" alt="Monster Island"><br>
          <span>モンスターの島</span>
          </h2>
        </div>
      </div>
      <div class="txtzone">
        <div class="txt">
          <p>いないいないばぁの公式サイトで１番力が入っているのがこのページ。</p>
          <p>表に出していいものから、表に出しちゃいけないものまで、今までひた隠しにしてきたメンバーのプライベートを全部出し。自由かつおかしなメンバーたちの情報をあますところなく紹介しています。</p>
          <p>もしも、気になる殿方、姫君がいたらお茶に誘ってワチャワチャしてみよう！（効果には個人差があります）</p>
        </div>
        <p class="btn">
          <a href="member/"><img src="common/img/btn_go_01.png" alt="GO！！"></a>
        </p>
      </div>
    </section>
    <!--Surprise Island-->
    <section class="surprise_zone">
      <div class="bg">
        <div class="title_box">
          <h2><img src="common/img/title_surprise.png" alt="Surprise Island"><br>
          <span>サプライズの島</span>
          </h2>
        </div>
      </div>
      <ul class="list">
        <li>
          <h3>サプライズマーケティングとは？</h3>
          <div class="txt">
            <p>サプライズマーケティングとはこれからの時代の新しいマーケティング手法。</p>
            <p>驚き、感動、笑いの力で口コミを発生させ、熱狂的なファンをつくり出すことで、”売らなくても売れていく”状況を生み出します。</p>
            <p>詳細はコチラから！</p>
          </div>
          <p class="btn"><a href="#"><img src="common/img/btn_go_02.png" alt="GO！！"></a></p>
        </li>
        <li>
          <h3>サプマケ研究所</h3>
          <div class="txt">
            <p>未来を創り出す「サプライズマーケティング」を専門的に研究する日本で唯一にして最大のマーケティング研究所。</p>
            <p>古今東西のマーケティングを調査、分析し、常に進化するサプライズマーケティングの真髄を追求し続けています。</p>
            <p>ビジネスに行き詰まったらここを覗くといいことが起こるかもしれません。</p>
          </div>
          <p class="btn"><a href="#"><img src="common/img/btn_go_02.png" alt="GO！！"></a></p>
        </li>
        <li>
          <h3>あなたのサプライズ魅力度チェック</h3>
          <div class="txt">
            <p>私たちが考えるサプライズとは喜ばせ、感動させ、笑わせること。つまり、人を楽しませる能力なのです。</p>
            <p>この先にあるテストを受ければ、「あなたのサプライズ魅力度」＝「人間的なおもしろ度」を診断することができます。</p>
            <p>点数が悪くても落ち込む必要はありません。「サプマケ研究所」に入って、感性を豊かにし、バカになりましょう。</p>
          </div>
          <p class="btn"><a href="#"><img src="common/img/btn_go_02.png" alt="GO！！"></a></p>
        </li>
      </ul> 
    </section>
    <!--Blog Island-->
    <section class="blog_zone">
      <div class="bg">
        <div class="title_box">
          <h2><img src="common/img/title_blog.png" alt="Blog Island"><br>
          <span>ブログの島</span>
          </h2>
        </div>
      </div>
      <ul class="list">
        <li>
          <h3>ブログの島とは？</h3>
          <div class="txt">
            <p>いないいないばぁが世の中に発信する、熱きメッセージを集約したページです。</p>
            <p>最新のいないいないばぁ情報からちょっと役立つ偉い人のお話まで、話題は多岐にわたり、見る者を飽きさせないことで有名です。</p>
            <p>お団子とあったかいお茶を用意して、穏やかな気持ちでご覧ください。</p>
          </div>
          <p class="btn"><a href="#"><img src="common/img/btn_go_03.png" alt="GO！！"></a></p>
        </li>
      </ul>
    </section>
    <!--Present Island-->
    <section class="present_zone">
      <div class="bg">
        <div class="title_box">
          <h2><img src="common/img/title_present.png" alt="Present Island"><br>
          <span>プレゼントの島</span>
          </h2>
        </div>
      </div>
      <div class="txtzone">
        <h3>プレゼントの島とは？</h3>
        <div class="txt">
          <p>お釈迦様は言いました。</p>
          <p>「どこか貧しさを感じている人たちというのは、今まで自分が貧しいと思って、他人に対して施しをしてこなかった人たちである。それ故に、貧しさから抜け出すことができずにいる。<br>
          だから私たちが布施をいただきに行くのは、このような貧しい人たちを、その貧しさから救ってあげるためである。」</p>
          <p>ということで、私たちも施しますので、あなたもいないいないばぁにプレゼントしてみませんか？</p>
        </div>
        <ul class="list">
          <li><a href="#"><img src="common/img/icon_link_01.png" alt="無料メルマガ"></a></li>
          <li><a href="#"><img src="common/img/icon_link_02.png" alt="入金してみる"></a></li>
          <li><a href="#"><img src="common/img/icon_link_03.png" alt="無料プレゼント"></a></li>
        </ul>
      </div>
    </section>
  </div><!--container-->

  <!--footer-->
  <footer>
    <p class="f_logo"><img src="common/img/h_logo.png" alt="株式会社いないいないばぁ"></p>
    <ul class="link">
      <li><a href="#">特定商取引法に基づく表記について</a></li>
      <li><a href="#">プライバシポリシー</a></li>
    </ul>
    <p class="copy">&copy; <script type="text/javascript">var iNavInt_curYear = new Date().getUTCFullYear(); document.write(iNavInt_curYear);</script> <a href="/">IIB</a> All Rights Reserved.</p>
  </footer>

</div>

<!--js-->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script src="common/js/main.js"></script>
<script src="common/js/jquery.magnific-popup.min.js"></script>
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
</script>
</body>
</html>