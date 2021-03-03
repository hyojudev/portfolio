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
                <div class="listBoard">
                    <h2>📢<br />검색한 결과입니다!!</h2>
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
                                // GET 방식
                                if (isset($_GET['page'])) {
                                    // (int) 숫자인지 문자인지 유형을 표시하는 것
                                    $page = (int) $_GET['page'];
                                } else {
                                    $page = 1; //아무 것도 없다면 페이지를 1
                                }

                                $numView = 20; // 게시물을 20개만 보여줌
                                $viewLimit = $numView * $page - $numView; // 총 몇 개 페이지인가? -> 현재 페이지를 빼고 계산

                                // board.php의 키워드 가져오기
                                $searchKeyword = $dbConnect->real_escape_string(
                                    $_POST['searchKeyword']
                                );
                                $searchOption = $dbConnect->real_escape_string(
                                    $_POST['searchOption']
                                );

                                // 검색어가 없을 때
                                if (
                                    $searchKeyword == '' ||
                                    $searchKeyword == null
                                ) {
                                    echo '📢<br />검색어가 없습니다.';
                                    exit();
                                }

                                //<option>의 value값 받기
                                switch ($searchOption) {
                                    case 'title':
                                    case 'content':
                                    case 'tandc':
                                    case 'torc':
                                        break;
                                    default:
                                        echo '📢<br />검색 옵션을 선택해주세요!!';
                                        exit();
                                        break;
                                }

                                // sql문으로 아래의 것 중에 myBoard를 약자로b라고 해줄 것이고, 앞뒤 %가 있으면 양쪽에 단어가 있어도 상관 없음
                                // LIKE 는 조건을 걸 수 있음
                                // $sql = "SELECT b.boardID, b.boardTitle, b.boardContent, m.youNickName, b.regTime FROM myBoard4 b JOIN myMember3 m ON (m.memberID = b.memberID) WHERE b.boardTitle LIKE '%{$searchKeyword}%' ";
                                // $sql = "SELECT b.boardID, b.boardTitle, b.boardContent, m.youNickName, b.regTime FROM myBoard4 b JOIN myMember3 m ON (m.memberID = b.memberID) WHERE b.boardContent LIKE '%{$searchKeyword}%' ";
                                // $sql = "SELECT b.boardID, b.boardTitle, b.boardContent, m.youNickName, b.regTime FROM myBoard4 b JOIN myMember3 m ON (m.memberID = b.memberID) WHERE b.boardTitle LIKE '%{$searchKeyword}%' AND b.boardContent LIKE '%{$searchKeyword}%' ";
                                // $sql = "SELECT b.boardID, b.boardTitle, b.boardContent, m.youNickName, b.regTime FROM myBoard4 b JOIN myMember3 m ON (m.memberID = b.memberID) WHERE b.boardTitle LIKE '%{$searchKeyword}%' OR b.boardContent LIKE '%{$searchKeyword}%' ";

                                $sql =
                                    'SELECT b.boardID, b.boardTitle, b.boardContent, m.youNickName, b.regTime FROM myPortBoard b JOIN myPortMember m ON (m.memberID = b.memberID) ';

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

                                // 검색 결과를 20개 까지만 보여줌
                                //0 ~20 으로 작업해주기
                                $sql .= "LIMIT {$viewLimit}, {$numView}"; 


                                $result = $dbConnect->query($sql);

                                if ($result) {
                                    // result에서 값을 가져와서 숫자로 넣어주기
                                    $dataCount = $result->num_rows;
                                    if ($dataCount > 0) {
                                        for ($i = 1; $i <= $dataCount; $i++) {
                                            //배열로 가져오기
                                            $memberInfo = $result->fetch_array(
                                                MYSQLI_ASSOC
                                            );
                                            //뿌려주기(받아야 할 데이터 넣기 "..")
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
                                    echo '📢<br />에러 발생 : 관리자에게 문의하세요!';
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