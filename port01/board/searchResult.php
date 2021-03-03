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
                <div class="listBoard">
                    <h2>검색한 결과입니다!!</h2>
                    <!-- listSearch -->
                    <div class="listSearch">
                        <a class="form-btn black" href="board.php">목록보기</a>
                    </div>
                    <!-- //listSearch -->
                    <!-- listTable -->
                    <div class="listTable">
                        <table class="table">
                            <colgroup>
                                <col style="width: 10%">
                                <col style="width: 65%">
                                <col style="width: 10%">
                                <col style="width: 15%">
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>제목</th>
                                    <th>등록자</th>
                                    <th>등록일</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                if (isset($_GET['page'])) {
                                    $page = (int) $_GET['page'];
                                } else {
                                    $page = 1;
                                }

                                $numView = 20;
                                $viewLimit = $numView * $page - $numView;

                                $searchKeyword = $dbConnect->real_escape_string(
                                    $_POST['searchKeyword']
                                );
                                $searchOption = $dbConnect->real_escape_string(
                                    $_POST['searchOption']
                                );

                                if (
                                    $searchKeyword == '' ||
                                    $searchKeyword == null
                                ) {
                                    echo '검색어가 없습니다.';
                                    exit();
                                }

                                switch ($searchOption) {
                                    case 'title':
                                    case 'content':
                                    case 'tandc':
                                    case 'torc':
                                        break;
                                    default:
                                        echo '검색 옵션을 선택해주세요!!';
                                        exit();
                                        break;
                                }

                                $sql =
                                    'SELECT b.boardID, b.boardTitle, b.boardContent, m.youNickName, b.regTime FROM portBoard b JOIN portMember m ON (m.memberID = b.memberID) ';

                                switch ($searchOption) {
                                    case 'title':
                                        $sql .= "WHERE b.boardTitle LIKE '%{$searchKeyword}%' ";
                                        break;
                                    case 'content':
                                        $sql .= "WHERE b.boardContent LIKE '%{$searchKeyword}%' ";
                                        break;
                                    case 'tandc':
                                        $sql .= "WHERE b.boardTitle LIKE '%{$searchKeyword}%' AND b.boardContent LIKE '%{$searchKeyword}%' ";
                                        break;
                                    case 'torc':
                                        $sql .= "WHERE b.boardTitle LIKE '%{$searchKeyword}%' OR b.boardContent LIKE '%{$searchKeyword}%' ";
                                        break;
                                }

                                $sql .= "LIMIT {$viewLimit}, {$numView}";

                                $result = $dbConnect->query($sql);

                                if ($result) {
                                    $dataCount = $result->num_rows;
                                    if ($dataCount > 0) {
                                        for ($i = 1; $i <= $dataCount; $i++) {
                                            $memberInfo = $result->fetch_array(
                                                MYSQLI_ASSOC
                                            );
                                            echo '<tr>';
                                            echo '<td>' .
                                                $memberInfo['boardID'] .
                                                '</td>';
                                            echo "<td class='left'><a href='viewBoard.php'>" .
                                                $memberInfo['boardTitle'] .
                                                '</a></td>';
                                            echo '<td>' .
                                                $memberInfo['youNickName'] .
                                                '</td>';
                                            echo '<td>' .
                                                date(
                                                    'Y-m-d H:i',
                                                    $memberInfo['regTime']
                                                ) .
                                                '</td>';
                                            echo '</tr>';
                                        }
                                    } else {
                                        echo "<tr><td colspan='4'>{$searchKeyword}가 없습니다.</td></tr>";
                                    }
                                } else {
                                    echo '에러 발생 : 관리자에게 문의하세요!';
                                    exit();
                                }
                                ?>
                            </tbody>
                        </table>
                    </div>
                    <!-- //listTable -->
                    <!-- listPage -->
                    <?php include '../board/pagination.php'; ?>
                    <!-- //listPage -->
                </div>
            </div>
        </section>
        <!-- //boardCont -->
    </main>
</body>
</html>