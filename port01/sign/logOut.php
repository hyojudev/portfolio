<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta name="author" content="han hyo ju">
    <meta name="description" content="프론트앤드 개발자 한효주 포트폴리오 사이트입니다.">
    <meta name="keywords" content="웹표준, 웹접근성, 사이트만들기, 포트폴리오, 한효주, 프론트앤드 개발자">
    <title>HYOJU DEV</title>

    <!-- Webfonts -->
    <link href="https://fonts.googleapis.com/css2?family=Italiana&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Nixie+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/font-iropke-batang/1.2/font-iropke-batang.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet">

    <!-- CSS Style -->
    <link rel="stylesheet" href="../assets/css/reset.css">
    <link rel="stylesheet" href="../assets/css/style2.css">

</head>

<body>
    <!-- header -->
    <header id="header">
        <?php
            include '../component/header.php';
        ?>
    </header>
    <!-- //header -->

    <main>
        <?php
            include '../connect/session.php';

            // 로그아웃 하면 생성한 세션 지우기
            unset($_SESSION['memberID']);
            unset($_SESSION['youNickName']);

            echo "<div class='errorAlert'>로그아웃 되었습니다. <a href='../main/index2.html'> 메인 페이지로 이동하기</a></div>"
        ?>
    </main>
</body>
</html>