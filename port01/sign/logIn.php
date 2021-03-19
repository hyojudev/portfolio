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
    <!-- skip -->
    <!-- <div id="skip">
        <a href="#mainCont">로그인 바로가기</a>
    </div> -->
    <!-- //skip -->

    <!-- header -->
    <header id="header">
        <?php
            include '../component/header.php';
        ?>
    </header>
    <!-- //header -->

    <main>
        <!-- logInCont -->
        <section id="logInCont">
            <div class="logIn">
                <h1><strong>HYOJUDEV PORTFOLIO</strong> 사이트에 오신걸 환영합니다 :)</h1>
                <form name="logIn" method="post" action="logInSave.php">
                    <fieldset>
                        <legend class="sr-only">로그인 영역입니다.</legend>
                        <div>
                            <label for="userEmail" class="sr-only">이메일</label>
                            <input type="email" name="userEmail" id="userEmail" class="input-text" placeholder="이메일" required autofocus>
                        </div>
                        <div>
                            <label for="userPW" class="sr-only">패스워드</label>
                            <input type="text" name="userPW" id="userPW" class="input-text" placeholder="패스워드" required>
                        </div>
                        <button class="logInBtn" type="submit" value="로그인">로그인</button>
                        <p class="logInDesc">회원가입을 원하면? <a href="signUp.php">회원가입</a></p>
                    </fieldset>
                </form>
            </div>
        </section>
        <!--— //logInCont -->
    </main>
</body>
</html>