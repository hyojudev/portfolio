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
//         document.querySelector(".menu").classList.toggle("menu_toggle");
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