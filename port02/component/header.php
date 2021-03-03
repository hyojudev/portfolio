<!-- header -->
    <!-- <input type="checkbox" class="toggler" /> -->
    <div class="hbtn">
        <span></span>
    </div>
    <ul class="main-menu">
        <li class="main-menu__link menu-active"><a href="../pages/index3.html">home</a></li>
        <li class="main-menu__link"><a href="../pages/about.html">about</a></li>
        <li class="main-menu__link"><a href="../pages/projects.html">projects</a></li>
        <li class="main-menu__link"><a href="../pages/script.html">script</a></li>
        <li class="main-menu__link"><a href="../board/board.php">board</a></li>
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
<!-- //header -->