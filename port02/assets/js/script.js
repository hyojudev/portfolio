/*------------------------------
    Menu Active
-------------------------------*/

// const sections = document.querySelectorAll('section');

// onscroll = function () {
//     const scrollPosition = document.documentElement.scrollTop;

//     sections.forEach((section) => {
//         if (
//             scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
//             scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
//         ) {
//             const currentId = section.attributes.id.value;
//             removeAllActiveClasses();
//             addActiveClass(currentId);
//         }
//     });
// };

// const removeAllActiveClasses = function () {
//     document.querySelectorAll('.main-menu li a').forEach((el) => {
//         el.classList.remove('menu-active');
//     });
// };

// const addActiveClass = function (id) {
//     const hrefSelector = `nav ul li a[href="#${id}"]`;
//     document.querySelector(hrefSelector).classList.add('menu-active');
// }


// --- Hamburger Menu Animation ---- //

// Stop Animations During Window Resizing
// let resizeTimer;
// window.addEventListener("resize", () => {
//     document.body.classList.add("resize-animation-stopper");
//     clearTimeout(resizeTimer);
//     resizeTimer = setTimeout(() => {
//         document.body.classList.remove("resize-animation-stopper");
//     }, 400);
// });

// const navSlider = () => {

//     const hamburgerBtn = document.querySelector('.hamburger');
//     const nav = document.querySelector('.main-menu');
//     const navLinks = document.querySelectorAll('.main-menu__link');

//     let hamBtnOpen = false;

//     // main toggle
//     hamburgerBtn.addEventListener('click', () => {
//         toggle();
//     });

//     // toggle on item click if open
//     navLinks.forEach(item => {
//         item.addEventListener('click', () => {
//             if (hamburgerBtn.classList.contains('open')) {
//                 toggle();
//             }
//         });
//     });

//     function toggle() {
//         // Toggle Nav
//         nav.classList.toggle('nav-active');

//         // Animate Links
//         navLinks.forEach((link, index) => {

//             if (link.style.animation) {
//                 link.style.animation = '';
//             } else {
//                 link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
//             }

//         });

//         if (!hamBtnOpen) {
//             hamburgerBtn.classList.add('open');
//             hamBtnOpen = true;
//         } else {
//             hamburgerBtn.classList.remove('open');
//             hamBtnOpen = false;
//         }
//     }
// }

// navSlider();


/*------------------------------
    script__animation__slider
-------------------------------*/

$(function () {

    var sliderContainer = $(".script__animation__slider");
    var container = $(".st__ani__slide__wrap");
    var slideGroup = container.find(".st__ani__slide");
    var slides = slideGroup.find("li");
    var nav = sliderContainer.find(".animation__btn");
    var indicator = sliderContainer.find(".st__ani__indicator ul");

    // 슬라이드의 개수
    var slideCount = slides.length;
    // 현재 보여지는 슬라이드의 인덱스를 담을 변수
    var currentIndex = 0;
    // 슬라이드가 움직이는데 걸리는 시간
    var duration = 500;
    // 슬라이드가 움직이는 방식(이징)
    var easing = "swing";
    // 슬라이드가 자동으로 몇 초에 한 번씩 움직일지 세팅
    var interval = 3000;
    // 아래쪽에서 interval을 걸어 줄 변수를 선언
    var timer;

    /* 슬라이드 위치 설정 및 인디케이터 생성 */

    for (i = 0; i < slideCount; i++) {

        // 각 슬라이드의 위치 설정(left값에 0,100%,200%,300%....를 넣어서 일렬로 놓는다.)
        slides.eq(i).css({
            left: 100 * i + "%"
        });

        // 1. 슬라이드 개수만큼 for문이 돌면서 반복하며 인디케이터에 li(dot)를 추가
        // indicator.append("<li></li>");

        // 2. 썸네일 이미지 인디케이터 만들기(해당 이미지 가져와 작게 만들어 넣기)
        var slideImgSrc = slides.eq(i).find("iframe").attr("title");
        indicator.append("<li>" + slideImgSrc + "</li>");
        // indicator.append("<li><img src='" + slideImgSrc + "'></li>");

    };


    /* 슬라이드 실행 함수 */

    function goToSlide(index) {

        // 전체 슬라이드를 움직이는 함수
        slideGroup.animate({ left: -100 * index + "%" }, duration, easing);

        // 현재 슬라이드의 인덱스 값을 저장
        currentIndex = index;

        // 내비게이션과 인디케이터 상태 업데이트
        updateNav();

    };


    /* 슬라이더 상태에 따라 내비게이션, 인디케이터 업데이트 하는 함수 */

    function updateNav() {
        var navPrev = nav.filter(".animation__btn__prev"); // .btn이지만 .prev를 가지고 있는 것
        var navNext = nav.filter(".animation__btn__next");

        // 첫 번째 슬라이드면 이전 버튼 없앰
        if (currentIndex === 0) {
            navPrev.addClass("animation__btn__disabled");
        } else {
            navPrev.removeClass("animation__btn__disabled");
        }

        // 마지막 슬라이드면 다음 버튼 없앰
        if (currentIndex === slideCount - 1) {
            navNext.addClass("animation__btn__disabled");
        } else {
            navNext.removeClass("animation__btn__disabled");
        }

        // 현재 슬라이드의 인덱스에 맞는 인디케이터에 .active 클래스 추가
        indicator.find("li").removeClass("indicator__active").eq(currentIndex).addClass("indicator__active");
    };

    /* 내비게이션 버튼 클릭 이벤트 */

    // .btn을 클릭하면 
    nav.click(function () {

        // 클릭한 요소가 prev클래스를 가지고 있는 경우
        // (prev 버튼을 눌렀을 때)
        if ($(this).hasClass("animation__btn__prev")) {

            // goToSlide 함수를 실행(currentIndex에서 1을 뺀다)
            goToSlide(currentIndex - 1);

            // next 버튼을 눌렀을 때
        } else {
            goToSlide(currentIndex + 1);
        }
    });

    /* 오토플레이 실행 함수 */
    function startTimer() {
        // timer 변수에 반복실행 시켜주는 setInterval 함수를 적용
        timer = setInterval(function () {

            // nextIndex 변수에 현재 인덱스 번호에 1을 더한 값을 슬라이드 개수로 나눈 나머지 값을 이용해 아래의 goToSlide에 적용시킨다.
            // 1 % 5 = 1
            // 2 % 5 = 2
            // 3 % 5 = 3
            // 4 % 5 = 4
            // 5 % 5 = 0
            var nextIndex = (currentIndex + 1) % slideCount;

            // 해당 인덱스 슬라이드로 이동(반복)
            goToSlide(nextIndex);

        }, interval);
    };

    /* 오토플레이 멈춤 함수 */
    function stopTimer() {

        // 반복 실행을 만들어 줄 때는 setInterval(실행될 함수);
        // 반복 실행을 멈출 때는 clearInterval(인터벌 되고 있는 함수(setInterval));
        clearInterval(timer);
    };

    /* 마우스 오버 타이머 작동 */
    // container.on({
    //     mouseenter : stopTimer,
    //     mouseleave : startTimer
    // });

    // 첫 번째 index의 슬라이드부터 시작
    goToSlide(currentIndex);

    // 오토
    // startTimer();

});

/*----------------------
    Text Split
------------------------*/

profile_split();

function profile_split() {
    document.querySelectorAll(".profile-split").forEach(elem => {
        let splitText = elem.innerText;
        let splitWrap = splitText.split("").join("</span><span aria-hidden:'true'>");
        splitWrap = "<span aria-hidden:'true'>" + splitWrap + "</span>";
        elem.innerHTML = splitWrap;
        elem.setAttribute("aria-label", splitText);
    });
}

/*----------------------
    GSAP - Timeline
------------------------*/

let tl = new TimelineMax(),
    tl2 = new TimelineMax(),
    tl3 = new TimelineMax(),
    tl4 = new TimelineMax(),
    tl5 = new TimelineMax(),
    tl6 = new TimelineMax(),
    tl7 = new TimelineMax(),
    tl8 = new TimelineMax(),
    tl9 = new TimelineMax(),
    tl10 = new TimelineMax(),
    tl11 = new TimelineMax(),
    tl12 = new TimelineMax(),
    tl13 = new TimelineMax(),
    tl14 = new TimelineMax(),
    tl15 = new TimelineMax(),
    tl16 = new TimelineMax(),
    tl17 = new TimelineMax(),
    tl18 = new TimelineMax(),
    tl19 = new TimelineMax()
// tl3 = new TimelineMax({ onUpdate: updatePercentage }),
// tl4 = new TimelineMax({ onUpdate: updatePercentage2 }),
// tl5 = new TimelineMax({ onUpdate: updatePercentage3 }),
// tl6 = new TimelineMax({ onUpdate: updatePercentage4 }),
// tl7 = new TimelineMax({ onUpdate: updatePercentage5 });

const controller = new ScrollMagic.Controller();

/*--- index__page ---*/
tl.from(".main__star", .8, { opacity: 0, scale: 0, ease: Elastic.easeOut });
tl.from(".main__planet", .07, { opacity: 0, scale: 0, stagger: 0.09, ease: Circ.easeOut });
tl.to(".main-title__text-bg1", .2, { scaleX: 1, delay: .5 })
    .to(".main-title__text-bg2", .2, { scaleX: 1 })
    .to(".main-title__text", 0.1, { opacity: 1 }, "-=0.1")
    .to(".main-title__text-bg1", 0.2, { scaleX: 0 })
    .to(".main-title__text-bg2", 0.2, { scaleX: 0 });
tl.from(".header__stagger", 1, { opacity: 0, x: 10, y: 50, delay: 0.4, stagger: 0.2, ease: "elastic.out(1.2, 0.5)" });

/*--- about__page ---*/
tl2.to(".about__main-title__text", .8, { opacity: 1, y: 0, stagger: .06, ease: "power1.out" });
tl2.from(".main-bubble", .5, { opacity: 0, stagger: .05, ease: "power1.out" })

tl3.from(".main-subTitle__text", .5, { opacity: 0, y: 50, stagger: 0.05, ease: "power1.out" });
tl3.from(".main-icon-smile", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3");

tl4.from(".profile-photo__img", .8, { opacity: 0, scale: 0, ease: Bounce.easeOut });
tl4.from(".profile-photo__text", .8, { opacity: 0, scale: 0, ease: Bounce.easeOut });

tl5.from(".profile-title span", .4, { y: 50, opacity: 0, stagger: .04 })
tl5.from(".profile-intro", .8, { y: 50, opacity: 0, stagger: .04 })

tl6.from(".footer__contact", .5, { opacity: 0, y: 50, ease: "powe1.out" });
tl6.from(".footer__contact-icon", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.2");
tl6.from(".footer__contact-title__text", .5, { opacity: 0, y: 50, stagger: 0.05, ease: "power1.out" }, "-=.2");
tl6.from(".footer__contact-btn", .3, { opacity: 0, y: 50, ease: "power1.out" }, "-=.2");

tl7.from(".social__btn", 1, { opacity: 0, y: 50, stagger: 0.06, ease: "power4.out" });

/*--- projects__page ---*/
tl8.to(".projects__main-title__text", .8, { opacity: 1, y: 0, stagger: .06, ease: "power1.out" });

tl9.from(".project__01 .pt__content__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" })
tl9.from(".project__01 .pt__card__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")
tl9.from(".project__01 .pt__text__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")

tl10.from(".project__02 .pt__content__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" })
tl10.from(".project__02 .pt__card__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")
tl10.from(".project__02 .pt__text__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")

tl11.from(".project__03 .pt__content__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" })
tl11.from(".project__03 .pt__card__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")
tl11.from(".project__03 .pt__text__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")

tl12.from(".project__04 .pt__content__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" })
tl12.from(".project__04 .pt__card__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")
tl12.from(".project__04 .pt__text__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")

tl13.from(".project__05 .pt__content__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" })
tl13.from(".project__05 .pt__card__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")
tl13.from(".project__05 .pt__text__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")

/*--- script__page ---*/
tl14.to(".script__main-title__text", .8, { opacity: 1, y: 0, stagger: .06, ease: "power1.out" });

tl15.from(".script__animation", .5, { opacity: 0, y: 50, ease: "power1.out" })
tl15.from(".script__animation__title", .5, { opacity: 0, ease: "power1.out" })
tl15.from(".script__animation__slider", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")

tl16.from(".script__01 .st__content__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" })
tl16.from(".script__01 .st__text__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")
tl16.from(".script__01 .st__card__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")

tl17.from(".script__02 .st__content__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" })
tl17.from(".script__02 .st__text__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")
tl17.from(".script__02 .st__card__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")

tl18.from(".script__03 .st__content__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" })
tl18.from(".script__03 .st__text__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")
tl18.from(".script__03 .st__card__wrap", .5, { opacity: 0, y: 50, ease: "power1.out" }, "-=.3")

/*--- contact__page ---*/
tl19.from(".sun", .8, { opacity: 0, scale: 0, stagger: .1, ease: Elastic.easeOut });
tl19.from(".universe-stagger", 1, { opacity: 0, stagger: .05, ease: Power1.easeOut });
tl19.from(".universe-stagger div", .7, { opacity: 0, scale: 0, stagger: .1, ease: Elastic.easeOut }, "-=.3");


const scene3 = new ScrollMagic.Scene({
    triggerElement: ".main-subTitle",
    reverse: false
})
    .setTween(tl3)
    .addTo(controller);

const scene4 = new ScrollMagic.Scene({
    triggerElement: ".about__profile-photo",
    reverse: false
})
    .setTween(tl4)
    .addTo(controller);

const scene5 = new ScrollMagic.Scene({
    triggerElement: ".about__profile-introduction",
    reverse: false
})
    .setTween(tl5)
    .addTo(controller);

const scene6 = new ScrollMagic.Scene({
    triggerElement: ".footer",
    reverse: false
})
    .setTween(tl6)
    .addTo(controller);

const scene7 = new ScrollMagic.Scene({
    triggerElement: ".footer__socials",
    reverse: false
})
    .setTween(tl7)
    .addTo(controller);

const scene9 = new ScrollMagic.Scene({
    triggerElement: ".project__01",
    reverse: false
})
    .setTween(tl9)
    .addTo(controller);

const scene10 = new ScrollMagic.Scene({
    triggerElement: ".project__02",
    reverse: false
})
    .setTween(tl10)
    .addTo(controller);

const scene11 = new ScrollMagic.Scene({
    triggerElement: ".project__03",
    reverse: false
})
    .setTween(tl11)
    .addTo(controller);

const scene12 = new ScrollMagic.Scene({
    triggerElement: ".project__04",
    reverse: false
})
    .setTween(tl12)
    .addTo(controller);

const scene13 = new ScrollMagic.Scene({
    triggerElement: ".project__05",
    reverse: false
})
    .setTween(tl13)
    .addTo(controller);

const scene14 = new ScrollMagic.Scene({
    triggerElement: ".script__main",
    reverse: false
})
    .setTween(tl14)
    .addTo(controller);

const scene15 = new ScrollMagic.Scene({
    triggerElement: ".script__animation",
    reverse: false
})
    .setTween(tl15)
    .addTo(controller);

const scene16 = new ScrollMagic.Scene({
    triggerElement: ".script__01",
    reverse: false
})
    .setTween(tl16)
    .addTo(controller);

const scene17 = new ScrollMagic.Scene({
    triggerElement: ".script__02",
    reverse: false
})
    .setTween(tl17)
    .addTo(controller);

const scene18 = new ScrollMagic.Scene({
    triggerElement: ".script__03",
    reverse: false
})
    .setTween(tl18)
    .addTo(controller);



// function updatePercentage() {
//     //percent.innerHTML = (tl.progress() *100 ).toFixed();
//     tl3.progress();
//     // console.log(tl3.progress());
// }

// function updatePercentage2() {
//     tl4.progress();
// }

// function updatePercentage3() {
//     tl5.progress();
// }

// function updatePercentage4() {
//     tl6.progress();
// }

// function updatePercentage5() {
//     tl7.progress();
// }

// function updatePercentage5() {
//     tl9.progress();
// }

// const hbtn = document.querySelector(".hbtn span");

// hbtn.addEventListener("mouseenter", function () {
//     hbtn.style.width = 150 + "px";
//     hbtn.style.borderRadius = 200 + "px";

// }, 1500)