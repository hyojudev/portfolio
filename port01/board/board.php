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
                    <h2>무엇이든지 물어보세요!!</h2>
                    <!-- listSearch -->
                    <div class="listSearch">
                        <form name="tableSearch" method="post" action="searchResult.php">
                            <fieldset>
                                <legend class="sr-only">게시판 검색 영역입니다.</legend>
                                <input type="search" name="searchKeyword" class="form-search" placeholder="검색어를 입력하세요!" aria-label="search" />
                                <select name="searchOption" id="searchOption" class="form-select">
                                    <option value="title">제목</option>
                                    <option value="content">내용</option>
                                    <option value="tandc">제목과 내용</option>
                                    <option value="torc">제목 또는 내용</option>
                                </select>
                                <button type="submit" class="form-btn">검색</button>
                                <a class="form-btn black" href="writeBoard.php">글 쓰기</a>
                            </fieldset>
                        </form>
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

                                $sql =
                                    'SELECT b.boardID, b.boardTitle, m.youNickName, b.regTime FROM ';
                                $sql .=
                                    'portBoard b JOIN portMember m ON (m.memberID = b.memberID) ORDER BY boardID ';
                                $sql .= "DESC LIMIT {$viewLimit}, {$numView}";

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
                                            echo "<td class='left'><a href='viewBoard.php?boardID={$memberInfo['boardID']}'>" .
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
                                        echo "<tr><td colspan='4'>게시글이 없습니다.</td></tr>";
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