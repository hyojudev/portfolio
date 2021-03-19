<div class="logo"><a href="../main/index2.html">hyoju</a></div>

<div class="menu-wrap">
    <input type="checkbox" class="toggler" />
    <div class="hBtn">
        <div></div>
        <div></div>
    </div>
    <div class="menu">
        <div>
            <div>
                <ul class="main-menu">
                    <li><a href="#home">home</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
                <ul class="sign-menu">
                    <?php if (isset($_SESSION['memberID'])) { ?>
                        <li class="youNickName"><?= $_SESSION[
                            'youNickName'
                        ] ?> 님</li>
                        <li><a href="../sign/logOut.php">logOut</a></li>
                    <?php } else { ?>
                        <li><a href="../sign/logIn.php">logIn</a></li>
                        <li><a href="../sign/signUp.php">signUp</a></li>
                    <?php } ?>
                    <li><a href="../board/board.php">board</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div>portfolio</div>