<?php
	require_once dirname(__FILE__) . '/scripts/Session.class.php';
	require_once dirname(__FILE__) . '/scripts/model/CategoryModel.class.php';
	
	$session = Session::getInstance();
	$admin = $session->get('admin');
	if($admin === false){
		header("location: login.php");
		exit;
	}
	
	//1ページに表示する数
	$PAGE_ITEM_COUNT = 200;
	
	$category_model = new CategoryModel();
	
	if(isset($_GET['del']))
	{
		$category_id = (int)@$_GET['id'];
		$category_model->delete(array('category_id'=>$category_id));
		
		header("location: list-category.php#upd");
		exit;
	}
	
	
	$category_all = $category_model->getCategoryAll();
	$category_count = $category_model->getCategoryCount();
	
	//ページ番号
	$page_num = @$_GET['p'];
	//最大ページ数
	$page_max = ceil($category_count / $PAGE_ITEM_COUNT);
	
	$sort_key1=array();
	$sort_key2=array();
	foreach($category_all as $v)
	{
		$sort_key1[] = $v['division_id'];
		$sort_key2[] = $v['sort_no'];
	}
	array_multisort($sort_key1, SORT_ASC, $sort_key2, SORT_ASC, $category_all);
	
	$category_all = array_slice($category_all, $page_num*$PAGE_ITEM_COUNT, $PAGE_ITEM_COUNT);
	foreach($category_all as &$v)
	{
		$v['division_name'] = htmlspecialchars($v['division_name'], ENT_QUOTES, 'UTF-8');
		$v['name'] = htmlspecialchars($v['name'], ENT_QUOTES, 'UTF-8');
		unset($v);
	}
	
?>
<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<!--[if lt IE 9]><meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" /><![endif]-->
<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=yes">
<title>ジャンル一覧</title>

<link rel="stylesheet" href="common/css/basic.css" type="text/css" media="all">
</head>

<body>
<?php require dirname(__FILE__).'/alert.php'; ?>
<div id="wrapper">


<div class="Content">

<div class="PageBtn">
<ul>
<?php require_once 'menu.php'; ?>
</ul>
</div>

<div class="Cnt">

<h2>ジャンル一覧</h2>

<p class="EntBtn"><a href="reg-category.php">ジャンルの登録 &gt;</a></p>

<ul class="paginate pag4 clearfix">
<?php for($p=0;$p<$page_max;++$p){ ?>
<?php if($p==$page_num){ ?>
<li><a href="list-category.php?p=<?php echo $p; ?>"><?php echo $p+1; ?></a></li>
<?php }else{ ?>
<li><a href="list-category.php?p=<?php echo $p; ?>"><?php echo $p+1; ?></a></li>
<?php } ?>
<?php } ?>
</ul>


<table class="List">
<tr>
<th class="Date"><a href="#">登録/更新日</a></th>
<th class="BigName">大カテゴリー名</th>
<th class="MidName">ジャンル名</th>
<th class="MidName">category_id</th>
<th class="MidName">順番</th>
<th class="btArea">編集</th>
<th class="btArea">削除</th>
</tr>

<?php foreach($category_all as $v){ ?>
<tr>
<td><?php echo $v['update_time']; ?></td>
<td><?php echo $v['division_name']; ?></td>
<td><?php echo $v['name']; ?></td>
<td><?php echo $v['category_id']; ?></td>
<td><?php echo $v['sort_no']; ?></td>
<td><p class="btn"><a href="reg-category.php?id=<?php echo $v['category_id']; ?>">編集</a></p></td>
<td><p class="btn"><a href="javascript:onDelete(<?php echo $v['category_id']; ?>);">削除</a></p></td>
</tr>
<?php } ?>

</table>

<ul class="paginate pag4 clearfix">
<?php for($p=0;$p<$page_max;++$p){ ?>
<?php if($p==$page_num){ ?>
<li><a href="list-category.php?p=<?php echo $p; ?>"><?php echo $p+1; ?></a></li>
<?php }else{ ?>
<li><a href="list-category.php?p=<?php echo $p; ?>"><?php echo $p+1; ?></a></li>
<?php } ?>
<?php } ?>
</ul>


</div>



</div>

</div>
<script>
function onDelete(id)
{
	if(!confirm('本当に削除しますか？')){
		return;
	}
	location.href = 'list-category.php?id='+id+"&del";
}
</script>
</body>
</html>
