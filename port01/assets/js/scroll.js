// 가로 스크롤 (jQuery)

$(window).scroll(function () {

    let scroll = $(window).scrollTop();
    $(".scroll").text(parseInt(scroll));

    let scrollTop = $(window).scrollTop();
    // let scrollLeft = $(window).scrollLeft();
    let winWidth = $(window).width();
    let winHeight = $(window).height();

    let ani01 = $(".script--01").offset().left;
    // let ani02 = $(".script--02").offset().left;
    // let ani03 = $(".script--03").offset().left;
    // let ani04 = $(".script--04").offset().left;
    // console.log("ani01 : " + ani01)
    // console.log("ani02 : " + ani02)
    // console.log("ani03 : " + ani03)
    // console.log("ani04 : " + ani04)
    // console.log("scrollTop : " + scrollTop)
    // console.log("scrollLeft :" + scrollLeft)


    let aniOffset = scrollTop - $(".animations-slider").offset().top;
    let scriptOffset = scrollTop - $(".scripts-slider").offset().top;
    let FooterOffset = $(".page-footer").offset().top;

    let scriptColorChange2 = (winWidth * 3) + $(".scripts-slider").offset().top;
    let scriptColorChange1 = $(".scripts-slider").offset().top;
    let aniColorChange = (winWidth * 2) + $(".animations-slider").offset().top;

    // Change Scroll
    // $(".animations-wrapper").css( "left", -offset + "px");
    $(".animations-wrapper").css("left", -aniOffset + winWidth + "px");
    $(".scripts-wrapper").css("right", -scriptOffset + winWidth + "px");

    // Change Background-color
    if (scrollTop > (FooterOffset - winWidth)) {
        $(".scripts-slider").css("background-color", "#48506F").css("transition", "0.5s");
    } else if (scrollTop > scriptColorChange2 - winWidth) {
        $(".scripts-slider").css("background-color", "#F3C57E").css("transition", "0.5s");
    } else if (scrollTop > scriptColorChange1 - winWidth) {
        $(".animations-slider").css("background-color", "#F3EEE8").css("transition", "0.5s");
        $(".scripts-slider").css("background-color", "#F3EEE8").css("transition", "0.5s");
    } else if (scrollTop > aniColorChange) {
        $(".animations-slider").css("background-color", "#88B2C4").css("transition", "0.5s");
    } else {
        $(".animations-slider").css("background-color", "#F3EEE8").css("transition", "0.5s");
    }

    // GSAP - 스크롤 값 애니메이션

    let aniTimeline1 = gsap.timeline();
    let aniTimeline2 = gsap.timeline();
    let aniTimeline3 = gsap.timeline();
    let aniTimeline4 = gsap.timeline();
    let aniTimeline5 = gsap.timeline();

    if ($(".animation--01").offset().left < winWidth) {
        aniTimeline1
            .to(".animation--01 .ani-numbering", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" })
            .to(".animation--01 .ani-title", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--01 .ani-text-desc", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--01 .codeView-btn", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--01 .animation-card", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
    } else {
        aniTimeline1
            .to(".animation--01 .ani-numbering", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" })
            .to(".animation--01 .ani-title", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--01 .ani-text-desc", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--01 .codeView-btn", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--01 .animation-card", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
    }

    if ($(".animation--02").offset().left < winWidth) {
        aniTimeline2
            .to(".animation--02 .ani-numbering", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" })
            .to(".animation--02 .ani-title", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--02 .ani-text-desc", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--02 .codeView-btn", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--02 .animation-card", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
    } else {
        aniTimeline2
            .to(".animation--02 .ani-numbering", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" })
            .to(".animation--02 .ani-title", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--02 .ani-text-desc", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--02 .codeView-btn", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--02 .animation-card", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
    }
    if ($(".animation--03").offset().left < winWidth) {
        aniTimeline3
            .to(".animation--03 .ani-numbering", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" })
            .to(".animation--03 .ani-title", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--03 .ani-text-desc", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--03 .codeView-btn", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--03 .animation-card", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
    } else {
        aniTimeline3
            .to(".animation--03 .ani-numbering", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" })
            .to(".animation--03 .ani-title", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--03 .ani-text-desc", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--03 .codeView-btn", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--03 .animation-card", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
    }
    if ($(".animation--04").offset().left < winWidth) {
        aniTimeline4
            .to(".animation--04 .ani-numbering", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" })
            .to(".animation--04 .ani-title", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--04 .ani-text-desc", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--04 .codeView-btn", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--04 .animation-card", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
    } else {
        aniTimeline4
            .to(".animation--04 .ani-numbering", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" })
            .to(".animation--04 .ani-title", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--04 .ani-text-desc", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--04 .codeView-btn", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--04 .animation-card", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
    }
    if ($(".animation--05").offset().left < winWidth) {
        aniTimeline5
            .to(".animation--05 .ani-numbering", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" })
            .to(".animation--05 .ani-title", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--05 .ani-text-desc", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--05 .codeView-btn", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--05 .animation-card", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
    } else {
        aniTimeline5
            .to(".animation--05 .ani-numbering", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" })
            .to(".animation--05 .ani-title", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--05 .ani-text-desc", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--05 .codeView-btn", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".animation--05 .animation-card", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
    }

    let scriptTimeline1 = gsap.timeline();
    let scriptTimeline2 = gsap.timeline();
    let scriptTimeline3 = gsap.timeline();
    let scriptTimeline4 = gsap.timeline();
    let scriptTimeline5 = gsap.timeline();

    if ($(".script--01").offset().left > -winWidth) {
        scriptTimeline1
            .to(".script--01 .script-numbering", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" })
            .to(".script--01 .script-title", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--01 .script-text-desc", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--01 .codeView-btn", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--01 .script-card", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
    } else {
        scriptTimeline1
            .to(".script--01 .script-numbering", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" })
            .to(".script--01 .script-title", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--01 .script-text-desc", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--01 .codeView-btn", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--01 .script-card", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
    }

    if ($(".script--02").offset().left > -winWidth) {
        scriptTimeline2
            .to(".script--02 .script-numbering", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" })
            .to(".script--02 .script-title", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--02 .script-text-desc", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--02 .codeView-btn", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--02 .script-card", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
    } else {
        scriptTimeline2
            .to(".script--02 .script-numbering", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" })
            .to(".script--02 .script-title", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--02 .script-text-desc", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--02 .codeView-btn", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--02 .script-card", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
    }
    if ($(".script--03").offset().left > -winWidth) {
        scriptTimeline3
            .to(".script--03 .script-numbering", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" })
            .to(".script--03 .script-title", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--03 .script-text-desc", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--03 .codeView-btn", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--03 .script-card", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
    } else {
        scriptTimeline3
            .to(".script--03 .script-numbering", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" })
            .to(".script--03 .script-title", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--03 .script-text-desc", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--03 .codeView-btn", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--03 .script-card", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
    }
    if ($(".script--04").offset().left > -winWidth) {
        scriptTimeline4
            .to(".script--04 .script-numbering", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" })
            .to(".script--04 .script-title", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--04 .script-text-desc", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--04 .codeView-btn", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--04 .script-card", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
    } else {
        scriptTimeline4
            .to(".script--04 .script-numbering", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" })
            .to(".script--04 .script-title", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--04 .script-text-desc", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--04 .codeView-btn", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--04 .script-card", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
    }
    if ($(".script--05").offset().left > -winWidth) {
        scriptTimeline5
            .to(".script--05 .script-numbering", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" })
            .to(".script--05 .script-title", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--05 .script-text-desc", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--05 .codeView-btn", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--05 .script-card", 0.5, { opacity: 1, y: 0, ease: "power1.easeOut" }, "-=0.2")
    } else {
        scriptTimeline5
            .to(".script--05 .script-numbering", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" })
            .to(".script--05 .script-title", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--05 .script-text-desc", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--05 .codeView-btn", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
            .to(".script--05 .script-card", 0.5, { opacity: 0, y: 50, ease: "power1.easeOut" }, "-=0.2")
    }

    // 스크롤 값에 따른 body 배경색 변경
    if (scroll > winHeight * 10) {
        $("body").css("background-color", "#E5938A");
    } else {
        $("body").css("background-color", "#F3EEE8");
    }

});


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