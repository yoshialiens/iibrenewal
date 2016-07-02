<?php
  require_once dirname(__FILE__) . '/../admin/scripts/model/DivisionModel.class.php';
  require_once dirname(__FILE__) . '/../admin/scripts/model/CategoryModel.class.php';
  require_once dirname(__FILE__) . '/../admin/scripts/model/ItemModel.class.php';
  require_once dirname(__FILE__) . '/../admin/scripts/model/AuthorModel.class.php';
  require_once dirname(__FILE__) . '/../admin/scripts/UploadLib.class.php';

  $category_id = (int)@$_GET['category_id'];
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
  $PAGE_ITEM_COUNT = 9;//1ページに表示する数
  //$filter = $session->get('filter');
  $category_id2 = (int)@$filter['category_id'];
  //ページ番号
  $page_num = @$_GET['p'];
  $item_count = $item_model->getItemCountByFilter($category_id);
  //最大ページ数
  $page_max = ceil($item_count / $PAGE_ITEM_COUNT);
  $item_all2 = $item_model->getItemAllByFilter($category_id, $page_num, $PAGE_ITEM_COUNT);
  foreach($item_all2 as &$v2)
  {
    $v2['division_name'] = htmlspecialchars($v2['division_name'], ENT_QUOTES, 'UTF-8');
    $v2['category_name'] = htmlspecialchars($v2['category_name'], ENT_QUOTES, 'UTF-8');
    $v2['name'] = htmlspecialchars($v2['name'], ENT_QUOTES, 'UTF-8');
    unset($v2);
  }
  $category = $category_model->getCategory($category_id);

  $division = $division_model->getDivision($category['division_id']);
  $item_all = $item_model->getItemAllByCategoryId($category['category_id']);


  //ソーシャルボタン用
  $server_name = $_SERVER['SERVER_NAME'];
  $social_url = urlencode("http://{$server_name}/category.php?category_id={$category['category_id']}");
  $url = "http://{$server_name}/category.php?category_id={$category['category_id']}";
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
<meta name="description" content="<?php echo $category['description']; ?>">
<meta name="keywords" content="【ここにキーワード】">
<link rel="canonical" href="http://www.i-i-b.jp/article.php" />

<!--title・icon-->
<title><?php echo $category['name']; ?>| 株式会社いないいないばぁ-サプライズマーケティングで口コミやリピートを増やすコンサルティングならお任せください。</title>
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
<meta property="og:title" content="<?php echo $category['name']; ?>|日本一のサプライズマーケティング会社【株式会社いないいないばぁ】">
<meta property="og:site_name" content="株式会社いないいないばぁ">
<meta property="og:description" content="株式会社いないいないばぁは日本一のサプライズマーケティング会社です。口コミやリピートを増やすためのサプライズを提案し、人々に喜んでもらうためのコンサルティングを行います。">
<meta property="og:type" content="article">
<meta property="og:url" content="http://www.i-i-b.jp/category.php?category_id=<?php echo $category['category_id']; ?>">
<meta property="og:image" content="http://www.i-i-b.jp/common/img/common/fb.jpg">
<link rel="canonical" href="http://www.i-i-b.jp/category.php?category_id=<?php echo $category['category_id']; ?>">

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
  <div class="container" id="article">
    <div class="catch"><img src="common/img/img_catch_article.png" alt="株式会社いないいないばぁからのおしらせ"></div>
    <ul class="cate_list">
      <?php foreach($category_all as $c2): ?>
      <li><a href="category.php?category_id=<?php echo $c2['category_id']; ?>"><?php echo $c2['name']; ?></a></li>
      <?php endforeach; ?>

      <!--
      <li><a href="#">ニュース</a></li>
      <li><a href="#">プレスリリース</a></li>
      <li><a href="#">おふざけ系</a></li>
      <li><a href="#">メンターナビ</a></li>
      <li><a href="#">感動・おふざけ系</a></li>
      -->
    </ul>
    <section class="article_list">
      <?php foreach($item_all2 as $v2): ?>
        <article>
        <a href="post.php?item_id=<?php echo $v2['item_id']; ?>">
        <div class="flg_zone">
          <p class="date"><span><?php echo $v2['posted_date']; ?></span></p>
        </div>
        <div class="title_l">
          <p class="cate"><?php echo $v2['category_name']; ?></p>
          <h2><?php echo $v2['name']; ?></h2>
        </div>
        <p class="photo"><?php if(!empty($v2['photo1'])){ ?><img src="../<?php echo $v2['photo1']; ?>" alt="<?php echo $v2['name']; ?>"><?php } ?></p>
        <div class="txt"><?php echo $v2['rank_info']; ?></div>
        </a>
      </article>
      <?php endforeach; ?>

      <!--
      <article>
        <a href="#">
        <div class="flg_zone">
          <p class="date"><span>2016.06.15</span></p>
        </div>
        <div class="title_l">
          <p class="cate">おふざけ</p>
          <h2>いないいないばぁのモンスター伝説① 副社長しんのすけ</h2>
        </div>
        <p class="photo"><img src="common/img/sample_01.png" alt="photo"></p>
        <div class="txt">ニューステキストニューステキストニューステキストニューステキストニューステキストニューステキストニューステキストニューステキスト...</div>
        </a>
      </article>
      <article>
        <a href="#">
        <div class="flg_zone">
          <p class="date"><span>2016.06.15</span></p>
        </div>
        <div class="title_l">
          <p class="cate">おふざけ</p>
          <h2>いないいないばぁのモンスター伝説① 副社長しんのすけ</h2>
        </div>
        <p class="photo"><img src="common/img/sample_01.png" alt="photo"></p>
        <div class="txt">ニューステキストニューステキストニューステキストニューステキストニューステキストニューステキストニューステキストニューステキスト...</div>
        </a>
      </article>
      <article>
        <a href="#">
        <div class="flg_zone">
          <p class="date"><span>2016.06.15</span></p>
        </div>
        <div class="title_l">
          <p class="cate">おふざけ</p>
          <h2>いないいないばぁのモンスター伝説① 副社長しんのすけ</h2>
        </div>
        <p class="photo"><img src="common/img/sample_01.png" alt="photo"></p>
        <div class="txt">ニューステキストニューステキストニューステキストニューステキストニューステキストニューステキストニューステキストニューステキスト...</div>
        </a>
      </article>
      -->
    </section>
    <div class="pagination">
    <?php for($p=0;$p<$page_max;++$p){ ?>
      <?php if($p==$page_num){ ?>
      <span class="current"><?php echo $p+1; ?></span>
    <?php }else{ ?>
      <a href="article.php?p=<?php echo $p; ?>" class="inactive"><?php echo $p+1; ?></a>
    <?php } ?>
    <?php } ?>
    </div>
    
  </div><!--container-->

  <!--footer-->
  <footer>
    <p class="f_logo"><img src="common/img/h_logo.png" alt="株式会社いないいないばぁ"></p>
    <ul class="link">
      <li><a href="tokusyo.php">特定商取引法に基づく表記について</a></li>
      <li><a href="kiyaku.php">プライバシポリシー</a></li>
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