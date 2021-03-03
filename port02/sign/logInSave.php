<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta name="author" content="han hyo ju">
    <meta name="description" content="프론트앤드 개발자 한효주 포트폴리오 사이트입니다.">
    <meta name="keywords" content="웹표준, 웹접근성, 사이트만들기, 포트폴리오, 한효주, 프론트앤드 개발자">
    <title>HYO JU DEV</title>

    <!-- Webfonts -->
    <link href="https://fonts.googleapis.com/css2?family=Italiana&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Nixie+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/font-iropke-batang/1.2/font-iropke-batang.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400&display=swap" rel="stylesheet">


    <!-- CSS Style -->
    <link rel="stylesheet" href="../assets/css/reset.css">
    <link rel="stylesheet" href="../assets/css/style5.css">

</head>

<body>

    <!-- header -->
    <header>
        <?php include '../component/header.php'; ?>
    </header>
    <!-- //header -->

    <main>
        <!-- main-Content -->
        <section class="main-content">
            <?php
                // 접속하기
                include '../connect/connect.php';
                include '../connect/session.php';

                // 로그인 정보 나오는지 확인 후 주석처리
                // echo $_POST['userEmail'], "<br>";
                // echo $_POST['userPW'], "<br>";

                // 데이터 가져와서 변수에 저장
                $userEmail = $_POST['userEmail'];
                $userPW = $_POST['userPW'];

                //에러 : 경고창
                function errorAlert($alert)
                {
                    echo "<div class='errorAlert'>{$alert}<a href='signUp.php'>회원가입 다시하기</a><a href='logIn.php'>로그인 하기</a></div>";
                    return;
                }

                //이메일 검사
                if (!filter_Var($userEmail, FILTER_VALIDATE_EMAIL)) {
                    errorAlert('<h2>📢<br />올바른 이메일이 아닙니다.</h2>');
                    exit(); // 다음 단계로 넘어감
                }

                //이메일 데이터 확인
                // 정보 가져오기 - SELECT : 어떤 정보 가져 올거야? FROM : 어디서 가져 올거야?
                $sql =
                    'SELECT youEmail, youPW, youNickName, memberID FROM myPortMember ';
                // 조건 걸기 : 이메일,비밀번호가 사용자가 이미 등록한 것을 사용 했는지 확인
                $sql .= "WHERE youEmail =  '{$userEmail}' AND youPW = '{$userPW}'";
                // DB에 전송하기
                $result = $dbConnect->query($sql);

                // 결과 값을 가져와서
                if ($result) {
                    // 회원 가입이 되어있지 않을 때
                    // 있으면 num-rows가 1없으면 0
                    if ($result->num_rows == 0) {
                        errorAlert('<h2>📢<br />로그인 정보가 일치하지 않습니다.</h2>');
                    } else {
                        // 반대
                        $memberInfo = $result->fetch_array(MYSQLI_ASSOC); // sql에 있는 정보를 배열로 그대로 가져와서 memberInfo에 저장 함
                        // 세션 생성해야 로그인이 되어 있는지 안되어있는지 알 수 있음
                        $_SESSION['memberID'] = $memberInfo['memberID'];
                        $_SESSION['youNickName'] = $memberInfo['youNickName'];
                        // 섹셕으로 정보 가져와서 성공하면 header로 간다
                        Header('Location: ../pages/index3.html');
                    }
                } else {
                    errorAlert('<h2>📢<br />에러 발생: 관리자에게 문의하세요! (4)</h2>');
                    exit();
                }
            ?>
        </section>
    </main>
</body>

</html>