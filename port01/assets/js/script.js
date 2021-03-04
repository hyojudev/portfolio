
//로딩이후 실행
function loading() {
    const progress = $(".progress"),
        progressText = progress.find(".progress-text");

    let imgLoad = imagesLoaded("body"),
        imgTotal = imgLoad.images.length,
        imgLoaded = 0,
        imgCurrent = 0,
        progressTimer = setInterval(updateProgress, 500 / 60);

    imgLoad.on("progress", function () {
        imgLoaded++;
        console.log("lalala");
    })

    function updateProgress() {
        let target = (imgLoaded / imgTotal) * 100;

        imgCurrent += (target - imgCurrent) * 0.1;
        progressText.text(Math.floor(imgCurrent) + "%");

        if (imgCurrent >= 100) {
            clearInterval(progressTimer)
            progress.delay(1000).fadeOut(1000)
            setTimeout(function () {
                //2초후 등장 애니메이션
                let tl = gsap.timeline();
                tl.from("#header", 0.5, { opacity: 0, y: 50 })
                tl.from(".mainText > div", 1, { opacity: 0, y: 50, delay: 0.5, stagger: 0.1, ease: "power1.out" }, "-=0.5")
                tl.from(".subText > div", 1, { opacity: 0, y: 50, stagger: 0.3, ease: "power1.out" }, "-=0.5")
                tl.from(".scroll-down-wrap", 1, { opacity: 0, scale: 0, ease: "bounce.out" }, "-=0.5");
            }, 2200);
        }
        if (imgCurrent > 99) {
            imgCurrent = 100;
        }
    }
}
loading();

//글씨 조깨기(한번에, forEach)
document.querySelectorAll(".profile-desc-title").forEach(elem => {
    let splitProfileText = elem.innerText;
    let splitProfileWrap = splitProfileText.split("").join("</span><span aria-hidden:'true'>");
    splitProifleWrap = "<span aria-hidden:'true'>" + splitProfileWrap + "</span>";

    elem.innerHTML = splitProfileWrap;
    elem.setAttribute("aria-label", splitProfileText);
})


// GSAP Timeline

const profileTextSpan = document.querySelectorAll(".profile-desc-title span");

const controller = new ScrollMagic.Controller();

const projectCirclePath = document.querySelector(".projects-circle-path");

function projectPathPrepare(el) {
    var lineLength = el.getTotalLength();
    el.style.strokeDasharray = lineLength;
    el.style.strokeDashoffset = lineLength;
}
projectPathPrepare(projectCirclePath);

// .hBtn을 click했을 때, 함수를 실행
// hBtnMotion 함수 : y축으로 왔다 갔다 하기

// const hBtn = document.querySelector(".hBtn");


// function hBtnMotion() {

//     TweenLite.set('.main-menu', { xPercent: -50, yPercent: -50 })
//     TweenLite.set('.main-menu li', { x: -110 });

//     let hBtnTween = new TimelineMax()
//         .from(".main-menu li", 0.4, { opacity: 0, y: 40, delay: 0.5, stagger: 0.4, ease: "Sine.easeOut" })
//         .reverse();

//     hBtnTween.reversed(!hBtnTween.reversed());
// }

// // const hBtnTweenScene = new ScrollMagic.Scene({
// //     // triggerElement: "#home"
// // })
// //     .setTween(hBtnTween)
// //     .addTo(controller);

// hBtn.addEventListener("click", hBtnMotion);


// const tween1 = new TimelineMax()
//     .from("#header", 0.5, { opacity: 0, y: 50 })
//     .from(".mainText > div", 1, { opacity: 0, y: 50, delay: 0.5, stagger: 0.1, ease: "power1.out" }, "-=0.5")
//     .from(".subText > div", 1, { opacity: 0, y: 50, stagger: 0.3, ease: "power1.out" }, "-=0.5")
//     .from(".scroll-down-wrap", 1, { opacity: 0, scale: 0, ease: "bounce.out" }, "-=0.5");

const tween2 = new TimelineMax()
    .from("#about", 0.8, { opacity: 0, y: 100, ease: "power1.out" })
    .from(".profile-image", 0.8, { scale: 0, ease: "elastic.easeOut" })
    .from(".profile-text-wrap", 1, { scale: 0, delay: 0.1, ease: "Elastic.easeOut" });

const tween3 = new TimelineMax()
    .from(".profile-desc-title span", 0.8, { opacity: 0, y: -200, stagger: 0.1, ease: "Back.easeOut.config(3)" })
    .from(".profile-desc-group > div", 1, { opacity: 0, y: 50, stagger: 0.2, ease: "power4.out" });

const tween4 = new TimelineMax()
    .from(".projects-headline-text", 0.8, { opacity: 0, y: 50, stagger: 0.2, ease: "power4.out" })
    .add(TweenMax.to(projectCirclePath, 0.9, { strokeDashoffset: 0, ease: Linear.easeNone }))
    .add(TweenMax.to(projectCirclePath, 1, { stroke: "#88B2C4", ease: Linear.easeNone }), 0);

const tween5 = new TimelineMax()
    .from(".project--01", 0.5, { opacity: 0, y: 100, ease: "power1.out" })
    .from(".project--01 .card-wrapper", 0.5, { opacity: 0, y: 100, ease: "power1.out" })
    .from(".project--01 .text-wrapper", 0.3, { opacity: 0, y: 30, ease: "power1.out" }, "-=0.2");

const tween6 = new TimelineMax()
    .from(".project--02", 0.5, { opacity: 0, y: 100, ease: "power1.out" })
    .from(".project--02 .card-wrapper", 0.5, { opacity: 0, y: 100, ease: "power1.out" })
    .from(".project--02 .text-wrapper", 0.3, { opacity: 0, y: 30, ease: "power1.out" }, "-=0.2");

const tween7 = new TimelineMax()
    .from(".project--03", 0.5, { opacity: 0, y: 100, ease: "power1.out" })
    .from(".project--03 .card-wrapper", 0.5, { opacity: 0, y: 100, ease: "power1.out" })
    .from(".project--03 .text-wrapper", 0.3, { opacity: 0, y: 30, ease: "power1.out" }, "-=0.2");

const tween8 = new TimelineMax()
    .from(".project--04", 0.5, { opacity: 0, y: 100, ease: "power1.out" })
    .from(".project--04 .card-wrapper", 0.5, { opacity: 0, y: 100, ease: "power1.out" })
    .from(".project--04 .text-wrapper", 0.3, { opacity: 0, y: 30, ease: "power1.out" }, "-=0.2");

const tween9 = new TimelineMax()
    .from(".project--05", 0.5, { opacity: 0, y: 100, ease: "power1.out" })
    .from(".project--05 .card-wrapper", 0.5, { opacity: 0, y: 100, ease: "power1.out" })
    .from(".project--05 .text-wrapper", 0.3, { opacity: 0, y: 30, ease: "power1.out" }, "-=0.2");

const tween10 = new TimelineMax()
    .from(".ftText--1", 0.7, { opacity: 0, y: 50, stagger: 0.2, ease: "power4.out" })
    .from(".footer-text .smile-emoji", 0.7, { opacity: 0, y: 50, ease: "power4.out" }, "-=0.5")
    .from(".footer-image", 0.7, { opacity: 0, y: 50, ease: "power4.out" }, "-=0.5")
    .from(".ftText--2", 0.7, { opacity: 0, y: 50, stagger: 0.2, ease: "power4.out" }, "-=0.5");

const tween11 = new TimelineMax()
    .from(".footer-sign h2", 0.7, { opacity: 0, y: 50, ease: "power4.out" })
    .from(".footer-sign-nav ul li", 0.7, { opacity: 0, y: 50, stagger: 0.2, ease: "power4.out" }, "-=0.5")
    .from(".ft-sns-btn", 0.7, { opacity: 0, y: 50, stagger: 0.2, ease: "power4.out" }, "-=0.5")
    .from(".footer-bottom span", 0.7, { opacity: 0, y: 50, stagger: 0.2, ease: "power4.out" }, "-=0.5")


// const scene1 = new ScrollMagic.Scene({
//     // triggerElement: "#home"
// })
//     .setTween(tween1)
//     .addTo(controller);

const scene2 = new ScrollMagic.Scene({
    triggerElement: "#about",
    triggerHook: 0.9
})
    .setTween(tween2)
    .addTo(controller);

const scene3 = new ScrollMagic.Scene({
    triggerElement: ".profile-description",
    triggerHook: 0.9
})
    .setTween(tween3)
    .addTo(controller);

const scene4 = new ScrollMagic.Scene({
    triggerElement: "#projects",
    triggerHook: 0.7,
    tweenChanges: true
})
    .setTween(tween4)
    .addTo(controller);

const scene5 = new ScrollMagic.Scene({
    triggerElement: ".projects-slider",
    triggerHook: 1.5
})
    .setTween(tween5)
    .addTo(controller);


const scene6 = new ScrollMagic.Scene({
    triggerElement: ".project--02",
    triggerHook: 1.5
})
    .setTween(tween6)
    .addTo(controller);


const scene7 = new ScrollMagic.Scene({
    triggerElement: ".project--03",
    triggerHook: 1.5
})
    .setTween(tween7)
    .addTo(controller);


const scene8 = new ScrollMagic.Scene({
    triggerElement: ".project--04",
    triggerHook: 1.5
})
    .setTween(tween8)
    .addTo(controller);


const scene9 = new ScrollMagic.Scene({
    triggerElement: ".project--05",
    triggerHook: 1.5
})
    .setTween(tween9)
    .addTo(controller);

const scene10 = new ScrollMagic.Scene({
    triggerElement: "#contact",
    triggerHook: 0.6,
})
    .setTween(tween10)
    .addTo(controller);

const scene11 = new ScrollMagic.Scene({
    triggerElement: ".footer",
    // triggerHook: 0.6,
})
    .setTween(tween11)
    .addTo(controller);


// mouse hover effect

// const CARD = document.querySelector(".card-wrapper .card");
// // const LINKTEXT = document.querySelector(".text-wrapper .link-text");

// // const projectArray = [CARD, LINKTEXT];

// function projectMouseover() {
//     CARD.style.transform = "translateY(-30px) scale(1.01)";
//     // LINKTEXT.style.transform = "translateY(-10px) scale(1.01)";
// }
// function projectMouseout() {
//     CARD.style.transform = "translateY(0) scale(1)";
//     // LINKTEXT.style.transform = "translateY(0) scale(1)";
// }

// function init() {
//     CARD.addEventListener("mouseover", projectMouseover)
//     CARD.addEventListener("mouseout", projectMouseout)
// }
// init();

// 마우스를 올렸을 때, 각각의 요소에 클래스를 add하고 remove한다.



// const CARD = document.querySelectorAll(".card-wrapper .card");
// const LINKTEXT = document.querySelectorAll(".text-wrapper .link-text");

// const PROJECT_MOUSEOVER_CARD = "project_mouseover__card";
// const PROJECT_MOUSEOVER_TEXT = "project_mouseover__text";

// // function projectMouseover() {
// //     CARD.classList.toggle(PROJECT_MOUSEOVER_CARD);
// //     LINKTEXT.classList.toggle(PROJECT_MOUSEOVER_TEXT);
// // }
// function projectMouseover() {
//     CARD.forEach((el) => {
//         el.classList.toggle(PROJECT_MOUSEOVER_CARD);
//     })
// }

// function init() {
//     CARD.addEventListener("mouseover", projectMouseover);
//     CARD.addEventListener("mouseout", projectMouseover);
// }

// init();



// 가로 스크롤 (ES6)

// window.addEventListener("scroll", function () {
//     let scroll = window.pageYOffset;

//     document.querySelector('.scroll').textContent = parseInt(scroll);

//     // window.pageYOffset === window.scrollY; // 항상 true

//     let scrollTop = window.scrollY;
//     let scrollLeft = window.scrollX;
//     let winWidth = window.innerWidth;

//     console.log("scrollTop : " + scrollTop);
//     console.log("scrollLeft : " + scrollLeft);
//     console.log("winWidth : " + winWidth);

//     let ani01 = document.querySelector(".animation--01").offsetLeft;
//     let ani02 = document.querySelector(".animation--02").offsetLeft;
//     let ani03 = document.querySelector(".animation--03").offsetLeft;
//     let ani04 = document.querySelector(".animation--04").offsetLeft;
//     let ani05 = document.querySelector(".animation--05").offsetLeft;

//     console.log("ani01 : " + ani01);
//     console.log("ani02 : " + ani02);
//     console.log("ani03 : " + ani03);
//     console.log("ani04 : " + ani04);
//     console.log("ani05 : " + ani05);
//     console.log("scrollLeft :" + scrollLeft);



//     const aniSlider = document.querySelector(".animations-slider");
//     const scriptSlider = document.querySelector(".scripts-slider");
//     const pageFooter = document.querySelector(".page-footer");
//     const aniWrapper = document.querySelector(".animations-wrapper");
//     const scriptWrapper = document.querySelector(".scripts-wrapper");

//     let aniOffset = scrollTop - aniSlider.offsetTop;
//     let scriptOffset = scrollTop - scriptSlider.offsetTop;
//     let FooterOffset = pageFooter.offsetTop;

//     let scriptColorChange2 = (winWidth * 3) + scriptSlider.offsetTop;
//     let scriptColorChange1 = scriptSlider.offsetTop;
//     let aniColorChange = (winWidth * 2) + aniSlider.offsetTop;

//     console.log("aniOffset : " + aniOffset);


//     // Change Scroll
//     aniWrapper.style.left = -aniOffset + winWidth + "px";
//     scriptWrapper.style.right = -scriptOffset + winWidth + "px";


//     // Change Background-color
//     if (scrollTop > (FooterOffset - winWidth)) {
//         scriptSlider.style.backgroundColor = "#48506F";
//         scriptSlider.style.transition = "0.5s";
//     } else if (scrollTop > scriptColorChange2 - winWidth) {
//         scriptSlider.style.backgroundColor = "#F3C57E";
//         scriptSlider.style.transition = "0.5s";
//     } else if (scrollTop > scriptColorChange1 - winWidth) {
//         aniSlider.style.backgroundColor = "#F3EEE8";
//         aniSlider.style.transition = "0.5s";
//         scriptSlider.style.backgroundColor = "#F3EEE8";
//         scriptSlider.style.transition = "0.5s";
//     } else if (scrollTop > aniColorChange) {
//         aniSlider.style.backgroundColor = "#88B2C4";
//         aniSlider.style.transition = "0.5s";
//     } else {
//         aniSlider.style.backgroundColor = "#F3EEE8";
//     }
// })










