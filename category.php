<?php
  require_once dirname(__FILE__) . '/admin/scripts/model/DivisionModel.class.php';
  require_once dirname(__FILE__) . '/admin/scripts/model/CategoryModel.class.php';
  require_once dirname(__FILE__) . '/admin/scripts/model/ItemModel.class.php';
  require_once dirname(__FILE__) . '/admin/scripts/model/AuthorModel.class.php';
  require_once dirname(__FILE__) . '/admin/scripts/UploadLib.class.php';

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
  $PAGE_ITEM_COUNT = 5;//1ページに表示する数
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
<html lang="ja">
<head>
<meta charset="utf-8">
<!--[if lt IE 9]><meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" /><![endif]-->
<meta name="viewport" content="width=device-width,user-scalable=no" />
<title><?php echo $category['name']; ?>| サプライズマーケティングなら株式会社いないいないばぁ</title>
<meta name="description" content="<?php echo $category['description']; ?>" />
<meta name="robots" content="ALL" />
<link rel="shortcut icon" href="common/img/favicon.ico" />
<link rel="stylesheet" href="common/css/basic.css" type="text/css" media="all">
<link rel="stylesheet" href="common/css/blog.css" type="text/css" media="all">
<link rel="stylesheet" href="common/css/animate.css" type="text/css" media="all">
<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<script src="common/js/common.js"></script>
<!--[if lt IE 9]>
<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<script src="common/js/respond.min.js"></script>
<![endif]-->
<!--[if IE 6]><script src="common/js/minmax.js"></script><![endif]-->
<meta property="og:title" content="<?php echo $category['name']; ?>|日本一のサプライズマーケティング会社【株式会社いないいないばぁ】" />
<meta property="og:type" content="website" />
<meta property="og:image" content="common/img/cover.png" />
<meta property="og:url" content="http://www.i-i-b.jp/category.php?category_id=<?php echo $category['category_id']; ?>" />
<meta property="og:site_name" content="株式会社いないいないばぁ" />
<meta property="og:description" content="<?php echo $category['description']; ?>" />
<link rel="alternate" media="only screen and (max-width: 727px)" href="http://www.i-i-b.jp/sp/category.php?category_id=<?php echo $category['category_id']; ?>" />
</head>

<body class="article">

<div id="wrapper"><!-- wrapper -->
<header>
<div class="Menu"><img src="common/img/header/btn-menu.png" width="40" height="34" alt="Menu"/></div>
<div class="Logo"><img src="common/img/header/logo.png" width="340" height="32" alt="株式会社いないいないばぁ"/></div>
<ul>
<li><img src="common/img/header/btn-fb.png" width="27" height="27" alt=""/></li>
<li><img src="common/img/header/btn-tw.png" width="27" height="27" alt=""/></li>
<li><img src="common/img/header/btn-g.png" width="27" height="27" alt=""/></li>
</ul>
<button class="btn btn-contact btn-act">お問い合わす</button>
</header>

<div id="article-wrap"><!-- index-wrap -->

<section>
<div id="ArticleSec">

<div class="Mv">
<div class="inner">
<div class="MvTitle">
<img src="common/img/blog/mv-title.png" width="589" height="207" alt="IIBニュース">
</div>
<div class="MvMonster">
<img src="common/img/blog/mv-monster.png" width="348" height="280" alt="モンスター">
</div>
<div class="MvIcon">
<img src="common/img/blog/mv-icon.png" width="116" height="116" alt="IIB TV">
</div>
</div>
</div>

<div class="HMenu">
<div class="container">
<ul class="Hv">
<li><a href="article.php">全て</a></li>
<?php foreach($category_all as $c2): ?>
<li><a href="category.php?category_id=<?php echo $c2['category_id']; ?>"><?php echo $c2['name']; ?></a></li>
<?php endforeach; ?>
</ul>
</div>
</div>

<div class="ArticleList">
<?php foreach($item_all2 as $v2): ?>
<article>
<div class="container Hv">
<div class="Flag">
<p class="Cat"><?php echo $v2['category_name']; ?></p>
<p class="Date"><?php echo $v2['posted_date']; ?></p>
</div>
<div class="Overview">
<h1><a href="post.php?item_id=<?php echo $v2['item_id']; ?>"><?php echo $v2['name']; ?></a></h1>
<div class="Contents clearfix">
<div class="ArticleImg">
<?php if(!empty($v2['photo1'])){ ?><img src="<?php echo $v2['photo1']; ?>" width="255" height="150" alt="<?php echo $v2['name']; ?>"><?php } ?>
</div>
<div class="ArticleTxt">
<p><?php echo $v2['rank_info']; ?></p>
</div>
</div>
</div>
</div>
</article>
<?php endforeach; ?>
</div>

<div class="Pager Hv">
<?php for($p=0;$p<$page_max;++$p){ ?>
<?php if($p==$page_num){ ?>
<span class="current"><?php echo $p+1; ?></span>
<?php }else{ ?>
<a href="article.php?p=<?php echo $p; ?>" class="inactive"><?php echo $p+1; ?></a>
<?php } ?>
<?php } ?>
</div>

</div>
</section>


</div><!-- /article-wrap -->
</div><!-- wrapper -->


<footer>
<ul>
<li><a href="/">HOME</a></li>
<li><a href="#">お知らせ</a></li>
<li><a href="#">会社概要</a></li>
<li><a href="#">事業内容</a></li>
<li><a href="#">メンバー紹介</a></li>
<li><a href="/contact/">お問合わせ</a></li>
<li><a href="/recruit/">採用情報</a></li>
</ul>
<ul class="second">
<li><a href="/legal.php">特定商取引法に基づく表記について</a></li>
<li><a href="/privacy.php">プライバシーポリシー</a></li>
</ul>
</ul>
<div class="Logo"><img src="common/img/header/logo.png" width="340" height="32" alt="株式会社いないいないばぁ"/></div>
<p>&copy; <script type="text/javascript">var iNavInt_curYear = new Date().getUTCFullYear(); document.write(iNavInt_curYear);</script> IIB All Rights Reserved.</div></p>
</footer>




</body>
</html>