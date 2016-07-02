<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<!--[if lt IE 9]><meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" /><![endif]-->
<meta name="viewport" content="width=1200px,user-scalable=no" />
<title>メールマガジン|株式会社いないいないばぁ</title>
<meta name="description" content="" />
<meta name="robots" content="ALL" />
<link rel="shortcut icon" href="../common/img/favicon.ico" />
<link rel="stylesheet" href="../common/css/basic.css" type="text/css" media="all">
<link rel="stylesheet" href="../common/css/present.css" type="text/css" media="all">
<link rel="stylesheet" href="../common/css/animate.css" type="text/css" media="all">
<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<script src="../common/js/common.js"></script>
<script src="../common/js/jquery.circliful.js"></script>
<!--[if lt IE 9]>
<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<script src="../common/js/respond.min.js"></script>
<![endif]-->
<!--[if IE 6]><script src="../common/js/minmax.js"></script><![endif]-->
<meta property="og:title" content="メールマガジン|株式会社いないいないばぁ" />
<meta property="og:type" content="website" />
<meta property="og:image" content="../common/img/cover.png" />
<meta property="og:url" content="http://www.i-i-b.jp/present/magazine.php" />
<meta property="og:site_name" content="株式会社いないいないばぁ" />
<meta property="og:description" content="" />
<link rel="alternate" media="only screen and (max-width: 727px)" href="http://www.i-i-b.jp/sp/present/magazine.php" />
</head>

<body class="content">

<div id="wrapper"><!-- wrapper -->
<div id="ToggleMenu">
<button class="close-button" id="close-button">Close Menu</button>
<div class="MenuInner">
<nav>
<ul class="Hv">
<a href="../"><li>HOME</li></a>
<a href="../about.php"><li>いないいないばぁの島</li></a>
<a href="../service.php"><li>十八番（オハコ）の島</li></a>
<a href="../surprise.php"><li>サプライズの島</li></a>
<a href="../member.php"><li>モンスターの島</li></a>
<a href="../blog.php"><li>ブログの島</li></a>
<a href="../present.php"><li>プレゼントの島</li></a>
<a href="../contact"><li>お問い合わせ</li></a>
<a href="../recruit"><li>採用情報</li></a>
</ul>
</nav>
</div>
</div>
<header>
<div class="Menu"><img src="../common/img/header/btn-menu.png" width="40" height="34" alt="Menu"/></div>
<div class="Logo"><img src="../common/img/header/logo.png" width="340" height="32" alt="株式会社いないいないばぁ"/></div>
<?php @include '../sns.php'; ?>
<ul>
<li><a href="<?php echo $fb_href; ?>" target="_blank"><img src="../common/img/header/btn-fb.png" width="27" height="27" alt=""/></a></li>
<li><a href="<?php echo $tw_href; ?>" target="_blank"><img src="../common/img/header/btn-tw.png" width="27" height="27" alt=""/></a></li>
<li><a href="<?php echo $g_href; ?>" target="_blank"><img src="../common/img/header/btn-g.png" width="27" height="27" alt=""/></a></li>
</ul>
<button class="btn btn-contact btn-act">お問い合わす</button>
</header>

<div id="content-wrap" class="none"><!-- content-wrap -->

<section id="Gift">
<div id="ContBlock">
<div class="Title"><h2><img src="../common/img/present/common/h2.png" width="128" height="31" alt="メールマガジン"/></h2><p class="SubTitle">メールマガジン</p>
</div>

<div class="Block BlockTop">
	<div class="Inner">
		<h3>「仕事の秘訣」のご登録はコチラから!!</h3>
		<div class="Box">
			<p class="Img"><img src="../common/img/present/common/present-top.png"></p>
			<p class="GiftTxt">「仕事の秘訣」は、読んで、すぐに使える実践型のメルマガです。<br>
			「学び」ではなく、「結果」を大切にしています。</p>

			<p class="GiftTxt">「本当にそうなんだろうか？」<br>
			「そんなわけがない」<br>
			「常識はずれだ」<br>
			と感じるかもしれません。</p>

			<p class="GiftTxt">それが大事なんです。</p>

			<p class="GiftTxt">普段は意識していないことを考えることで、<br>
			脳が刺激され、新しいアイディアや発想が生まれます。</p>

			<p class="GiftTxt">お届けする内容をそのまま受け入れるのではなく、<br>
			ご自身の頭で考えることで問題をすんなり解決出来る<br>
			クリエイティブな脳に変わっていきます。</p>

			<p class="GiftTxt endnote">日常に溢れているチャンスを短時間で成果に結びつける<br>
			極上のヒントをお届けしますので、楽しみながらお読みください。</p>
		</div>
		<div class="Box">
			<div class="GiftBox">
				<h4>登録フォーム</h4>
				<form action="http://www.i-i-b.jp/mail/npformu.php" method="POST">

				<dl class="Form">
				<dt>お名前</dt>
				<dd class="Name">姓：<input type="text" name="c_name">　名：<input type="text" name="c_name2"></dd>
				</dl>

				<dl class="Form">
				<dt>E-Mail</dt>
				<dd><input type="text" name="c_mailaddress"></dd>
				</dl>

				<dl class="Form">
				<dt>E-Mail (確認用)</dt>
				<dd><input type="text" name="c_ckmailaddress"></dd>
				</dl>

				<!--for SYSTEM TAG-->
				<input type="hidden" name="h_planid" value="step_cp061Fy7">
				<input type="hidden" name="h_regchk" value="regist">
				<input type="hidden" name="h_cset" value="UTF-8">
				<input type="hidden" name="h_thankspg" value="thanks">
				<!--for SYSTEM TAG END-->

				<div id="btn-sendMail"><input id="send" type="button" onclick="submit();"><label class="btn animation opacity btn-lunch btn-act" for="send">そんなに読みたいの・・・</label></div>
				<!-- <div style="text-align:center">
				<input type="submit" value="　送信する　" />
				</div> -->

				</form>
			</div>
		</div>
	</div>
</div>

<div class="IntroFooter">
	<div class="Inner">
		<div class="NextTitle">
			<h3>ツギハドコイキマスカ？</h3>
		</div>
		<ul class="Menu clearfix Hv">
			<li><a href="../"><img src="../common/img/common/menu/back-the-world.png" alt="世界に戻る" width="104" height="104"><p>世界に戻る</p></a></li>
			<li><a href="../about.php"><img src="../common/img/common/menu/icon-about.png" alt="いないいないばぁの島" width="104" height="104"><p>いないいな<br>いばぁの島</p></a></li>
			<li><a href="../service.php"><img src="../common/img/common/menu/icon-service.png" alt="十八番の島" width="104" height="104"><p>十八番の島</p></a></li>
			<li><a href="../monster.php"><img src="../common/img/common/menu/icon-monster.png" alt="モンスターの島" width="104" height="104"><p>モンスターの島</p></a></li>
			<li><a href="../surprise.php"><img src="../common/img/common/menu/icon-surprise.png" alt="サプライズの島" width="104" height="104"><p>サプライズの島</p></a></li>
			<li class="Last"><a href="../blog.php"><img src="../common/img/common/menu/icon-blog.png" alt="ブログの島" width="104" height="104"><p>ブログの島</p></a></li>
			<li><a href="../present.php"><img src="../common/img/common/menu/icon-present.png" alt="プレゼントの島" width="104" height="104"><p>プレゼントの島</p></a></li>
		</ul>
	</div>
</div>

</div>
</section>


</div><!-- /index-wrap -->
<?php @include '../footer.php'; ?>
</div><!-- wrapper -->

</body>
</html>