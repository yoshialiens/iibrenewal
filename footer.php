<?php
$f_logo = (empty($_SERVER["HTTPS"]) ? "http://" : "https://") . $_SERVER["HTTP_HOST"] . '/dev-2/common/img/header/logo.png';
$f_flogo = (empty($_SERVER["HTTPS"]) ? "http://" : "https://") . $_SERVER["HTTP_HOST"] . '/dev-2/common/img/header/logo-footer.png';
$f_url = (empty($_SERVER["HTTPS"]) ? "http://" : "https://") . $_SERVER["HTTP_HOST"] . '/dev-2';
?>

<footer>
<ul>
<li><a href="<?php echo $f_url; ?>/">HOME</a></li>
<li><a href="<?php echo $f_url; ?>/article.php">お知らせ</a></li>
<li><a href="<?php echo $f_url; ?>/about/company.php">会社概要</a></li>
<li><a href="<?php echo $f_url; ?>/service/">事業内容</a></li>
<li><a href="<?php echo $f_url; ?>/member.php">メンバー紹介</a></li>
<li><a href="<?php echo $f_url; ?>/recruit/">採用情報</a></li>
</ul>
<ul class="second">
<!--<li><a href="<?php echo $f_url; ?>/legal.php">特定商取引法に基づく表記について</a></li>-->
<li><a href="<?php echo $f_url; ?>/contact/">お問い合わせ</a></li>
<li><a href="<?php echo $f_url; ?>/privacy.php">プライバシーポリシー</a></li>
</ul>
<div class="Logo"><img src="<?php echo $f_flogo; ?>" width="337" height="48" alt="株式会社いないいないばぁ"/></div>
<p>&copy; <script type="text/javascript">var iNavInt_curYear = new Date().getUTCFullYear(); document.write(iNavInt_curYear);</script> IIB All Rights Reserved.</p>
</footer>