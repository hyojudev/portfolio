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
    <header id="header" class="black">
        <?php
            include '../component/header.php';
        ?>
    </header>
    <!-- //header -->

    <main>
        <!-- signUpCont -->
        <section id="signUpCont">
            <div class="signUp">
                <h1><strong>HYOJUDEV PORTFOLIO</strong> 사이트에 오신걸 환영합니다 :)</h1>
                <form name="signUp" method="post" action="signUpSave.php">
                    <fieldset>
                        <legend class="sr-only">회원 가입 폼입니다.</legend>
                        <div>
                            <label for="userEmail" class="sr-only">이메일</label>
                            <input type="email" name="userEmail" id="userEmail" class="input-text" placeholder="이메일" required autofocus>
                        </div>
                        <div>
                            <label for="userName" class="sr-only">이름</label>
                            <input type="text" name="userName" id="userName" class="input-text" placeholder="이름" required>
                        </div>
                        <div>
                            <label for="userNickName" class="sr-only">닉네임</label>
                            <input type="text" name="userNickName" id="userNickName" class="input-text" placeholder="닉네임" required>
                        </div>
                        <div>
                            <label for="userPW" class="sr-only">패스워드</label>
                            <input type="text" name="userPW" id="userPW" class="input-text" placeholder="패스워드" required>
                        </div>
                        <div class="birth">
                            <div>
                                <label for="birthYear">년도</label>
                                <select name="birthYear" id="birthYear" required>
                                    <?php
                                        $birthYear = date('Y', time());

                                        for( $i=$birthYear; $i>=1930; $i-- ){
                                            echo "<option>{$i}</option>";
                                        }
                                    ?>
                                </select>
                            </div>                            
                            <div>
                                <label for="birthMonth">월</label>
                                <select name="birthMonth" id="birthMonth" required>
                                <?php
                                        for( $i=1; $i<=12; $i++ ){
                                            echo "<option value='{$i}'>{$i}</option>";
                                        }
                                    ?>
                                </select>
                            </div>
                            <div>
                                <label for="birthDay">일</label>
                                <select name="birthDay" id="birthDay" required>
                                <?php
                                        for( $i=1; $i<=31; $i++ ){
                                            echo "<option value='{$i}'>{$i}</option>";
                                        }
                                    ?>
                                </select>
                                
                            </div>
                        </div>
                        <button class="signUpBtn" type="submit" value="회원가입">회원가입</button>
                        <p class="signDesc">로그인을 원하면? <a href="logIn.php">로그인</a></p>
                    </fieldset>
                </form>
            </div>
        </section>
        <!--— //signUpCont -->
    </main>
</body>
</html>