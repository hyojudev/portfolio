
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

// GSAP

pageLoad();
parallax();
about_split();

window.onload = pageLoad;

function pageLoad() {
    gsap.to("#header", { duration: .8, opacity: 1, y: 0 })
    gsap.to(".home-title > div", { duration: 1, opacity: 1, y: 0, stagger: 0.04, delay: .5, ease: "power1.out" }, "-=.01")
    gsap.to(".home__subText > div", { duration: 1, opacity: 1, y: 0, stagger: 0.3, delay: .5, ease: "power1.out" })
    gsap.to(".home__scroll", { duration: .5, scale: 1, delay: 1.5, ease: "bounce.out" })
}

function about_split() {
    document.querySelectorAll(".about-split").forEach(elem => {
        let splitText = elem.innerText;
        let splitWrap = splitText.split("").join("</span><span aria-hidden:'true'>");
        splitWrap = "<span aria-hidden:'true'>" + splitWrap + "</span>";
        elem.innerHTML = splitWrap;
        elem.setAttribute("aria-label", splitText);
    });
}

function parallax() {
    window.addEventListener("scroll", function () {
        let pageYOffset = window.pageYOffset + screen.height / 3;

        if (pageYOffset > document.getElementById("about").offsetTop) {
            gsap.to(".about-view", { duration: 1, opacity: 1, y: 0, ease: "power1.out" })
            gsap.to(".about-view__img", { duration: .5, opacity: 1, scale: 1, delay: .5, ease: Bounce.easeOut })
            gsap.to(".about-view__circle", { duration: 1, opacity: 1, delay: 1 })
        }

        if (pageYOffset > document.querySelector(".about-resume").offsetTop) {
            gsap.to(".about-title span", { duration: 0.4, y: 0, opacity: 1, stagger: .04 })
            gsap.to(".about-desc", { duration: 0.8, y: 0, opacity: 1, stagger: .04 })
        }
    })
}


