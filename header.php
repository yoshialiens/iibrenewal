<?php $h_url = (empty($_SERVER["HTTPS"]) ? "http://" : "https://") . $_SERVER["HTTP_HOST"] . ''; ?>

<div id="ToggleMenu">
<button class="close-button" id="close-button">Close Menu</button>
<div class="MenuInner">
<nav>
<ul class="Hv">
<a href="<?php echo $h_url; ?>/"><li>HOME</li></a>
<a href="<?php echo $h_url; ?>/about.php"><li>いないいないばぁの島</li></a>
<a href="<?php echo $h_url; ?>/service.php"><li>十八番（オハコ）の島</li></a>
<a href="<?php echo $h_url; ?>/surprise.php"><li>サプライズの島</li></a>
<a href="<?php echo $h_url; ?>/member.php"><li>モンスターの島</li></a>
<a href="<?php echo $h_url; ?>/blog.php"><li>ブログの島</li></a>
<a href="<?php echo $h_url; ?>/present.php"><li>プレゼントの島</li></a>
<a href="<?php echo $h_url; ?>/contact"><li>お問い合わせ</li></a>
<a href="<?php echo $h_url; ?>/recruit"><li>採用情報</li></a>
</ul>
</nav>
</div>
</div>
<header>
<div class="Menu"><img src="<?php echo $h_url; ?>/common/img/header/btn-menu.png" width="40" height="34" alt="Menu"/></div>
<div class="Logo"><img src="<?php echo $h_url; ?>/common/img/header/logo.png" width="337" height="48" alt="株式会社いないいないばぁ"/></div>
<ul>
<li><a href="<?php echo $fb_href; ?>" target="_blank"><img src="<?php echo $h_url; ?>/common/img/header/btn-fb.png" width="27" height="27" alt=""/></a></li>
<li><a href="<?php echo $tw_href; ?>" target="_blank"><img src="<?php echo $h_url; ?>/common/img/header/btn-tw.png" width="27" height="27" alt=""/></a></li>
<li><a href="<?php echo $g_href; ?>" target="_blank"><img src="<?php echo $h_url; ?>/common/img/header/btn-g.png" width="27" height="27" alt=""/></a></li>
</ul>
<a href="<?php echo $h_url; ?>/contact/"><button class="btn btn-contact btn-act">お問い合わす</button></a>
</header>