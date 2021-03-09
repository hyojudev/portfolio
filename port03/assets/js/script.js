
// 메뉴 버튼 모션
const hBtn = document.querySelector(".hamburger");
const mainNavLink = document.querySelectorAll(".main-menu__link");
const signNavLink = document.querySelectorAll(".sign-menu__link");

function navToggle() {
    document.querySelector(".navigation").classList.toggle("nav-toggle");
    document.querySelector(".nav-radial").classList.toggle("menu-radial-toggle");
    document.querySelector(".nav-menu-wrap").classList.toggle("nav-menu-toggle");
}

function mainLinkToggle() {
    mainNavLink.forEach((link, index) => {
        setTimeout(() => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `mainLinkFade 0.4s ease-in-out forwards ${index / 7 + 0.04}s`;
            }
        }, 500);
    });
};

function signLinkToggle() {
    signNavLink.forEach((link, index) => {
        setTimeout(() => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `signLinkFade 0.4s ease-in-out forwards ${index / 10 + 0.04}s`;
            }
        }, 1200);
    });
};

function hBtnClick() {
    navToggle();
    mainLinkToggle();
    signLinkToggle();
}

hBtn.addEventListener("click", hBtnClick);

