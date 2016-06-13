<?php
ini_set("display_errors", On);
error_reporting(E_ALL);
?>
<?php
	//// 管理画面アカウント
	define('ADMIN_ID', 'iib');
	define('ADMIN_PW', 'iib-212413');
		
	require_once dirname(__FILE__) . '/scripts/Session.class.php';
	

	$session = Session::getInstance();
	
	if($_SERVER["REQUEST_METHOD"] == "POST")
	{
		$id = @$_POST["ID"];
		$pass = @$_POST["PASS"];
		
		if($id === ADMIN_ID && $pass == ADMIN_PW){
			$session->set('admin', true);
			header("location: list-division.php");
			exit;
		}
	}
	$session->destroy();
?>


<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<!--[if lt IE 9]><meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" /><![endif]-->
<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=yes">
<title>IIB 記事管理画面 Login</title>

<link rel="stylesheet" href="common/css/basic.css" type="text/css" media="all">
</head>

<body>
<div id="wrapper">


<div class="LogInBox">
<h1>IIB記事管理画面 Login</h1>
<form method="POST" action="login.php" id="frmAuth">
<table>
<tr>
<th>ID:</th>
<td><input type="text" class="log" name="ID"></td>
</tr>
<tr>
<th>Pass:</th>
<td><input type="text" class="log" name="PASS"></td>
</tr>
</table>
</form>

<p class="btn"><a href="#" onclick="document.getElementById('frmAuth').submit();return false;">ログイン</a></p>

</div>

</div>
</body>
</html>
