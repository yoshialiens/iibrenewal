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
  //$review_model = new ReviewModel();
  
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
  /*
  if(empty($category['color'])){
    $category['color']='Blue';
  }
  */
  

  //ソーシャルボタン用
  $server_name = $_SERVER['SERVER_NAME'];
  $social_url = urlencode("http://{$server_name}/post.php?item_id={$item['item_id']}");
  $url = "http://{$server_name}/post.php?item_id={$item['item_id']}";
?>

<!doctype html>
<!--[if IE 8]><html class="ie ie8"><![endif]-->
<!--[if IE 9]><html class="ie ie9"><![endif]-->
<!--[if !IE]><!-->
<html lang="ja" prefix="og: http://ogp.me/ns#">
<head>
<meta charset="UTF-8">

<!--[if lt IE 9]><meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" /><![endif]-->

<!--meta-->
<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=yes">
<meta name="description" content="<?php echo $item['description']; ?>">
<meta name="keywords" content="【ここにキーワード】">

<!--title・icon-->
<title><?php echo $item['title']; ?> | 株式会社いないいないばぁ-サプライズマーケティングで口コミやリピートを増やすコンサルティングならお任せください。</title>
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
<meta property="og:title" content="<?php echo $item['title']; ?>|日本一のサプライズマーケティング会社【株式会社いないいないばぁ】">
<meta property="og:site_name" content="株式会社いないいないばぁ">
<meta property="og:description" content="<?php echo $item['description']; ?>">
<meta property="og:type" content="article">
<meta property="og:url" content="http://www.i-i-b.jp/post.php?item_id=<?php echo $item['item_id']; ?>">
<meta property="og:image" content="http://www.i-i-b.jp/<?php echo $item['photo1']; ?>">
<link rel="canonical" href="http://www.i-i-b.jp/post.php?item_id=<?php echo $item['item_id']; ?>">

</head>
<body>


<div id="wrapper">
  <!--header-->
  <header>
    <!--spnavi-->
    <div class="head_sp">
      <h1 class="logo"><a href="/"><img src="common/img/h_logo.png" alt="ニュースタイトル | 株式会社いないいないばぁ-サプライズマーケティングで口コミやリピートを増やすコンサルティングならお任せください。"></a></h1>
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
  <div class="container" id="post">
    <ul class="charaparts_01">
      <li class="finger_l"><img src="common/img/icon_finger_l.png" alt="finger"></li>
      <li class="face_c"><img src="common/img/icon_face_01.png" alt="face"></li>
      <li class="finger_r"><img src="common/img/icon_finger_r.png" alt="finger"></li>
    </ul>
    <div class="content_box">
      <div class="title">
        <div class="sub">
          <p class="cate"><?php echo $item['category_name']; ?></p>
          <p class="date"><?php echo $item['posted_date']; ?></p>
        </div>
        <h1><?php echo $item['name']; ?></h1>
        <p class="writer">ライター：<?php echo $item['item_authorname']; ?></p>
      </div>
      <div class="content_body">
        <p class="catch"><img src="../<?php echo $item['photo1']; ?>" alt="photo"></p>
        <?php echo $item['about']; ?>
      </div>
    </div>
    <ul class="charaparts_02">
      <li class="hand_l"><img src="common/img/icon_hand_l.png" alt="hand"></li>
      <li class="hand_r"><img src="common/img/icon_hand_r.png" alt="hand"></li>
    </ul>
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