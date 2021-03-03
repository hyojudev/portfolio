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
        <!-- <input type="checkbox" class="toggler" /> -->
        <div class="hbtn">
            <span></span>
        </div>
        <ul class="main-menu">
            <li class="main-menu__link"><a href="../pages/index3.html">home</a></li>
            <li class="main-menu__link"><a href="../pages/about.html">about</a></li>
            <li class="main-menu__link"><a href="../pages/projects.html">projects</a></li>
            <li class="main-menu__link"><a href="../pages/script.html">script</a></li>
            <li class="main-menu__link menu-active"><a href="../board/board.php">board</a></li>
            <li class="main-menu__link"><a href="../pages/contact3.html">contact</a></li>
        </ul>
        <ul class="sign-menu">
            <?php if ( isset($_SESSION['memberID']) ) { ?>
                <li><a href="#"><?= $_SESSION['youNickName'] ?>님👻</a></li>
                <li><a href="../sign/logOut.php">LOGOUT</a></li>
            <?php } else { ?>
                <li><a href="../sign/logIn.php">LOGIN</a></li>
                <li><a href="../sign/signUp.php">SIGNUP</a></li>
            <?php } ?>
        </ul>
    </header>
    <!-- //header -->

    <main>
        <!-- boardCont -->
        <section id="boardCont">
            <div class="container">
                <div class="listBoard">
                    <h2>🚩 무엇이든지 물어보세요!!</h2>
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
                                <a class="form-btn black" href="writeBoard.php">글쓰기</a>
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

                                    // GET 방식
                                    if( isset($_GET['page']) ) {
                                        // (int) 숫자인지 문자인지 유형을 표시하는 것
                                        $page = (int) $_GET['page'];
                                    } else {
                                        $page = 1; //아무 것도 없다면 페이지를 1
                                    }

                                    $numView = 20; // 게시물을 20개만 보여줌
                                    $viewLimit = ($numView * $page) - $numView; // 총 몇 개 페이지인가? -> 현재 페이지를 빼고 계산


                                    $sql = "SELECT b.boardID, b.boardTitle, m.youNickName, b.regTime FROM "; // 약자로 지정 해줌 
                                    $sql .= "myPortBoard b JOIN myPortMember m ON (m.memberID = b.memberID) ORDER BY boardID ";
                                    $sql .= "DESC LIMIT {$viewLimit}, {$numView}";
                                    // 처음부터 20개를 보여줌
                                    //$sql .= "DESC LIMIT 0, 20"; // 1번째 페이지 보여주고 싶음 : (20 * 1) - 20 --> 0
                                    // (20 * 1) - 20 --> {$numView * $page} - $numView
                                    //$sql .= "DESC LIMIT 20, 20"; // (20 * 2) -20 --> 20
                                    //$sql .= "DESC LIMIT 40, 20"; // 3번째 페이지 보여주고 싶음 : (20 * 3) - 20 --> 40
                                    // sql에 전달하기 (오른쪽에 있는 것을 왼쪽에 대입 시키다)


                                    $result = $dbConnect -> query($sql);

                                    if( $result ) {
                                        // result에서 값을 가져와서 숫자로 넣어주기
                                        $dataCount = $result -> num_rows;
                                        if( $dataCount > 0 ) {
                                            for ( $i=1; $i <= $dataCount; $i++ ) {
                                                //배열로 가져오기
                                                $memberInfo = $result -> fetch_array(MYSQLI_ASSOC);
                                                //뿌려주기(받아야 할 데이터 넣기 "..")
                                                echo "<tr>";
                                                echo "<td>".$memberInfo['boardID']."</td>";
                                                echo "<td class='left'><a href='viewBoard.php?boardID={$memberInfo['boardID']}'>".$memberInfo['boardTitle']."</a></td>";
                                                echo "<td>".$memberInfo['youNickName']."</td>";
                                                echo "<td>".date('Y-m-d H:i', $memberInfo['regTime'])."</td>";
                                                echo "</tr>";
                                            }
                                        } else {
                                            echo "<tr><td colspan='4'>게시글이 없습니다.</td></tr>";
                                        }
                                    } else {
                                        echo "📢<br />에러 발생 : 관리자에게 문의하세요!";
                                        exit;
                                    }
                                ?>
                                <!-- <tr>
                                    <td>1</td>
                                    <td><a href="#">안녕하세요</a></td>
                                    <td>hyojudev</td>
                                    <td>2021-01-07</td>
                                </tr> -->
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

    <!-- Script -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
    <script src="../assets/js/script.js"></script>
</body>

</html>