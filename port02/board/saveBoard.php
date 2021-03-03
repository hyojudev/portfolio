<?php
    include '../connect/connect.php';
    include '../connect/session.php';
    include '../connect/checkSession.php';
?>

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
        <!-- boardCont -->
        <section id="boardCont">
            <div class="container">
                <div class="saveBoard">
                    <?php
                        // writeBoard.php 의 정보 가져오기
                        $boardTitle = $_POST['boardTitle'];
                        $boardContent = $_POST['boardContent'];

                        // 특수기호 같은 거 적었을 때 오류나는 것 막아줌
                        if ($boardTitle != null && $boardTitle != '') {
                            $boardTitle = $dbConnect->real_escape_string($boardTitle);
                        }

                        // 컨텐츠에 아무 글도 없으면 넘어가지 않게!
                        if ($boardContent != null && $boardContent != '') {
                            // 오류 방지
                            $boardContent = $dbConnect->real_escape_string($boardContent);
                        }

                        // 게시글 작성 시간 전달해주기
                        $memberID = $_SESSION['memberID'];
                        $regTime = time();

                        //데이터 넣기
                        $sql = "INSERT INTO myPortBoard(memberID, boardTitle, boardContent, regTime) ";
                        $sql .= "VALUES('{$memberID}', '{$boardTitle}', '{$boardContent}', {$regTime})";

                        // 전송하기
                        $result = $dbConnect -> query($sql);

                        if( $result ){
                            echo "<div class='info'><p>📢<br />저장이 완료되었습니다.</p><a href='board.php'>게시판 목록으로 이동하기</a></div>";
                            exit;
                        } else {
                            echo "<div class='info'><p>📢<br />저장이 실패되었습니다.</p><a href='writeBoard.php'>게시판 작성하기</a></div>";
                            exit;
                        }
                    ?>
                </div>
            </div>
        </section>
        <!-- //boardCont -->    
    </main>
</body>

</html>