<?php
include '../connect/connect.php';
include '../connect/session.php';

// include '../connect/checkSession.php';
?>

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
        <?php include '../component/header.php'; ?>
    </header>
    <!-- //header -->

    <main>
        <!-- boardCont -->
        <section id="boardCont">
            <div class="container">
                <div class="saveBoard">
                    <?php
                    $boardTitle = $POST['boardTitle'];
                    $boardContent = $POST['boardContent'];

                    if ($boardTitle != null && $boardTitle != '') {
                        $boardTitle = $dbConnect->real_escape_string(
                            $boardTitle
                        );
                    }

                    if ($boardContent != null && $boardContent != '') {
                        $boardContent = $dbConnect->real_escape_string(
                            $boardContent
                        );
                    }

                    $memberID = $_SESSION['memberID'];
                    $regTime = time();

                    //데이터 넣기
                    $sql =
                        'INSERT INTO portBoard(memberID, boardTitle, boardContent, regTime) ';
                    $sql .= "VALUES('{$memberID}', '{$boardTitle}', '{$boardContent}', {$regTime})";

                    $result = $dbConnect->query($sql);

                    if ($result) {
                        echo "<div class='info'><p>저장이 완료되었습니다.</p><a href='board.php'>게시판 목록으로 이동하기</a></div>";
                        exit();
                    } else {
                        echo "<div class='info'><p>저장이 실패되었습니다.</p><a href='writeBoard.php'>게시판 작성하기</a></div>";
                        exit();
                    }
                    ?>
                </div>
            </div>
        </section>
        <!-- //boardCont -->
    </main>
</body>
</html>