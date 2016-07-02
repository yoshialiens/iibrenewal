<?php
//ソーシャルボタン用
  // $server_name = $_SERVER['SERVER_NAME'];
  // $social_url = urlencode("http://{$server_name}/rticle.php");
  // $url = "http://{$server_name}/article.php";
//シェアしたいURLアドレス
$url = (empty($_SERVER["HTTPS"]) ? "http://" : "https://") . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"];
$g_url = $_SERVER["REQUEST_URI"];
//リンク用URLの作成
$fb_href = 'https://www.facebook.com/sharer/sharer.php?u=' . rawurlencode( $url ) ;
$tw_href = 'https://twitter.com/share?url=' . rawurlencode( $url );
$g_href = 'https://plus.google.com/share?url=' . rawurlencode( $g_url );
?>