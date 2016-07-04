<?php
ini_set( 'display_errors', 1 );

;?>

<?php
  require_once dirname(__FILE__) . '/admin/scripts/model/DivisionModel.class.php';
  require_once dirname(__FILE__) . '/admin/scripts/model/CategoryModel.class.php';
  require_once dirname(__FILE__) . '/admin/scripts/model/ItemModel.class.php';
  require_once dirname(__FILE__) . '/admin/scripts/model/ReccomendModel.class.php';
  require_once dirname(__FILE__) . '/admin/scripts/model/AuthorModel.class.php';
  require_once dirname(__FILE__) . '/admin/scripts/UploadLib.class.php';
  $item_id = (int)@$_GET['item_id'];
  
  
  $division_model = new DivisionModel();
  $category_model = new CategoryModel();
  $item_model = new ItemModel();
  $reccomend_model = new ReccomendModel();
  $author_model = new AuthorModel();
  
  $item = $item_model->getItem($item_id);
  if(empty($item)){
    //データが無い場合はリダイレクト
    exit;
  }
  //順位の取得
  $item['rank'] = $item_model->getRank($item_id);

  //追加 - 関連記事
  $reccomend_id = $reccomend_model->getReccomend($reccomend_id);
  foreach ($reccomend_id as $k => $v) {
    $reccomend_num = $v;
  }
  
  $rec1 = $reccomend_num['reccomend_num_1'];
  $rec2 = $reccomend_num['reccomend_num_2'];
  $rec3 = $reccomend_num['reccomend_num_3'];
  $recitem_1 = $item_model->getItem($rec1);
  $recitem_2 = $item_model->getItem($rec2);
  $recitem_3 = $item_model->getItem($rec3);
  
  $division = $division_model->getDivision($item['division_id']);
  $category = $category_model->getCategory($item['category_id']);
  

  //ソーシャルボタン用
  $server_name = $_SERVER['SERVER_NAME'];
  $social_url = urlencode("http://{$server_name}/post.php?item_id={$item['item_id']}");
  $url = "http://{$server_name}/post.php?item_id={$item['item_id']}";
?>

<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<!--[if lt IE 9]><meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" /><![endif]-->
<meta name="viewport" content="width=1200px,user-scalable=no" />
<title><?php echo $item['title']; ?> | 株式会社いないいないばぁ-サプライズマーケティングで口コミやリピートを増やすコンサルティングならお任せください。</title>
<meta name="description" content="<?php echo $item['description']; ?>" />
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
<meta property="og:title" content="<?php echo $item['title']; ?>|日本一のサプライズマーケティング会社【株式会社いないいないばぁ】" />
<meta property="og:type" content="article" />
<meta property="og:image" content="http://www.i-i-b.jp/<?php echo $item['photo1']; ?>" />
<meta property="og:url" content="http://www.i-i-b.jp/post.php?item_id=<?php echo $item['item_id']; ?>" />
<meta property="og:site_name" content="株式会社いないいないばぁ" />
<meta property="og:description" content="<?php echo $item['description']; ?>" />
<link rel="alternate" media="only screen and (max-width: 727px)" href="http://www.i-i-b.jp/sp/post.php?item_id=<?php echo $item['item_id']; ?>" />
</head>

<body class="post">

<div id="wrapper"><!-- wrapper -->
<?php @include 'sns.php'; ?>
<?php @include 'header.php'; ?>

<div id="post-wrap"><!-- post-wrap -->

<section>
<div id="PostSec">
<div class="container">
<div class="Monster"><img src="common/img/blog/monster.png" alt="モンスター" width="254" height="230"></div>

<div class="PostBlock">
<div class="PostTop">
<div class="inner clearfix">
<div class="TopRight"><h1><?php echo $item['name']; ?></h1></div>
<div class="TopLeft"><p class="Cat"><?php echo $item['category_name']; ?></p><p class="Date"><?php echo $item['posted_date']; ?></p></div>
</div>
</div>

<div class="PostThumb">
<img src="<?php echo $item['photo1']; ?>" width="960" alt="サムネイル">
</div>

<div class="PostDetail">
<?php echo $item['about']; ?>
</div>

<div class="MonsterL"><img src="common/img/blog/hand-left.png" alt="モンスターの右手" width="67" height="42"></div>
<div class="MonsterR"><img src="common/img/blog/hand-right.png" alt="モンスターの左手" width="67" height="42"></div>
<div class="HandL"><img src="common/img/blog/hand02-left.png" alt="人の左手" width="104" height="213"></div>
<div class="HandR"><img src="common/img/blog/hand02-right.png" alt="人の右手" width="102" height="213"></div>
</div>

</div>

</div>
</section>


</div><!-- /post-wrap -->
<?php @include 'footer.php'; ?>
</div><!-- wrapper -->




</body>
</html>