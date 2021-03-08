// const navSlider = () => {
//     const hBtn = document.querySelector(".hamburger");
//     const mainNavLink = document.querySelectorAll(".main_menu_link");
//     const signNavLink = document.querySelectorAll(".sign_menu_link");

//     function hBtnShowToggle() {
//         hBtn.classList.toggle("checked");
//         document.querySelector(".ham_top").classList.toggle("ham_top__toggle");
//         document.querySelector(".ham_bot").classList.toggle("ham_bot__toggle");

//         document.querySelector(".navigation").classList.toggle("nav_toggle");
//         document.querySelector(".menu_radial").classList.toggle("menu_radial_toggle");
//         document.querySelector(".menu").classList.toggle("nav_menu_toggle");
//     }

//     // function navLinkToggle() {
//     //     // Animate Links
//     //     navLink.forEach((link, index) => {

//     //         if (link.style.animation) {
//     //             link.style.animation = '';
//     //         } else {
//     //             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 0.4}s`;
//     //         }

//     //     });
//     // }
//     // function navSignLinkToggle() {
//     //     // Animate Links
//     //     navSignLink.forEach((link, index) => {

//     //         if (link.style.animation) {
//     //             link.style.animation = '';
//     //         } else {
//     //             setTimeout(() => {
//     //                 link.style.animation = `navSignLinkFade 0.4s ease-in-out forwards ${index / 5 + 0.5}s`;
//     //             }, 1000);
//     //         }

//     //     })
//     // }

//     function hBtnClickMotion(e) {
//         e.preventDefault();
//         hBtnShowToggle();
//         // navLinkToggle();
//         // navSignLinkToggle();
//     };

//     // toggle on item click if open
//     mainNavLink.forEach(item => {
//         item.addEventListener('click', () => {
//             if (hBtn.classList.contains("checked")) {
//                 // navLinkToggle();
//                 // navSignLinkToggle();
//                 hBtnShowToggle();
//             }
//         })
//     });

//     hBtn.addEventListener("click", hBtnClickMotion);

// };
// navSlider();

// const mainMenuLink = document.querySelector(".main_menu_link");

// navSplit();
// navHover();

// function navSplit() {
//     document.querySelectorAll(".main-split").forEach(elem => {
//         let navSplitText = elem.innerText;
//         let navSplitWrap = navSplitText.split("").join("</span><span aria-hidden:'true'>");
//         navSplitWrap = "<span aria-hidden:'true'>" + navSplitWrap + "</span>";
//         elem.innerHTML = navSplitWrap;
//         elem.setAttribute("aria-label", navSplitText);
//     })
// };

// function navHover() {
//     mainMenuLink.addEventListener("mouseenter", function () {
//         if (mainMenuLink === this) {
//             gsap.to(".main-split span", { duration: 0.4, rotation: 45, stagger: .04 })
//         }
//     });
//     mainMenuLink.addEventListener("mouseout", function () {
//         gsap.to(".main-split span", { duration: 0.4, rotation: 0, stagger: .04 })
//     });
// };

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
