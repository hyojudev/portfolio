

// /*------------------------------
// Smooth Scroll
// --------------------------------
// SupahScroll
// ------------------------------*/
// class SupahScroll {
//     constructor(options) {
//         this.opt = options || {};
//         this.el = this.opt.el ? this.opt.el : '.supah-scroll';
//         this.speed = this.opt.speed ? this.opt.speed : 0.1;
//         this.init();
//     }

//     init() {
//         this.scrollY = 0;
//         this.supahScroll = document.querySelectorAll(this.el)[0];
//         this.supahScroll.classList.add('supah-scroll');
//         this.events();
//         this.update();
//         this.animate();
//     }

//     update() {
//         if (this.supahScroll === null) return;
//         document.body.style.height = `${this.supahScroll.getBoundingClientRect().height}px`;
//     }

//     pause() {
//         document.body.style.overflow = 'hidden';
//         cancelAnimationFrame(this.raf);
//     }

//     play() {
//         document.body.style.overflow = 'inherit';
//         this.raf = requestAnimationFrame(this.animate.bind(this));
//     }

//     destroy() {
//         this.supahScroll.classList.remove('supah-scroll');
//         this.supahScroll.style.transform = 'none';
//         document.body.style.overflow = 'inherit';
//         window.removeEventListener('resize', this.update);
//         cancelAnimationFrame(this.raf);
//         delete this.supahScroll;
//     }

//     animate() {
//         this.scrollY += (window.scrollY - this.scrollY) * this.speed;
//         this.supahScroll.style.transform = `translate3d(0,${-this.scrollY}px,0)`;
//         this.raf = requestAnimationFrame(this.animate.bind(this));
//     }

//     scrollTo(y) {
//         window.scrollTo(0, y);
//     }

//     staticScrollTo(y) {
//         cancelAnimationFrame(this.raf);
//         this.scrollY = y;
//         window.scrollTo(0, y);
//         this.supahScroll.style.transform = `translate3d(0,${-y}px,0)`;
//         this.play();
//     }

//     events() {
//         window.addEventListener('load', this.update.bind(this));
//         window.addEventListener('resize', this.update.bind(this));
//     }
// }

// /*------------------------------
//     Initialize
//     ------------------------------*/
// const supahscroll = new SupahScroll({
//     el: 'main',
//     speed: 0.1
// });


/*------------------------------
    header menu-active
    ------------------------------*/
// $(document).on('click', '.main-menu__link', function(){
//     $(this).addClass('menu-active').siblings().removeClass('menu-active');
// });

// $(document).ready(function () {
//     $('.main-menu .main-menu__link').on("click", function () {
//         $(this).addClass("menu-active");
//     });
// });


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

    /* 인디케이터 클릭 이벤트 */

    // 인디케이터의 자식요소(li)를 클릭하면
    // indicator.children().click(function () {

    //     // 클릭한 해당 요소가 active 클래스를 가지고 있지 않은 경우
    //     // active 상태가 아닌 인디케이터를 선택했을 때
    //     if (!$(this).hasClass("indicator__active")) {

    //         // 선택한 요소의 인덱스 번호를 가져와 goToSlide에 대입시킨다.
    //         goToSlide($(this).index());
    //     }
    // });

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
    GSAP - Timeline
------------------------*/

let tl = new TimelineMax(),
    tl2 = new TimelineMax(),
    tl3 = new TimelineMax({ onUpdate: updatePercentage }),
    tl4 = new TimelineMax({ onUpdate: updatePercentage2 }),
    tl5 = new TimelineMax({ onUpdate: updatePercentage3 }),
    tl6 = new TimelineMax({ onUpdate: updatePercentage4 }),
    tl7 = new TimelineMax({ onUpdate: updatePercentage5 });

const controller = new ScrollMagic.Controller();

/*--- index__page ---*/
tl.from(".main__star", 1, { opacity: 0, scale: 0, ease: "bounce.out" });
tl.to(".main__star", .4, { scale: 1 });
tl.from(".main__planet", .1, { opacity: 0, scale: 0, delay: 0.1, stagger: 0.2 });
tl.to(".main__planet", .5, { scale: 1, ease: "power4.out" });
tl.to(".main-title__text-bg1", 0.2, { scaleX: 1, delay: 0.8 })
    .to(".main-title__text-bg2", 0.2, { scaleX: 1 })
    .to(".main-title__text", 0.1, { opacity: 1 }, "-=0.1")
    .to(".main-title__text-bg1", 0.2, { scaleX: 0 })
    .to(".main-title__text-bg2", 0.2, { scaleX: 0 });
tl.from(".header__stagger", 1, { opacity: 0, x: 10, y: 50, delay: 0.4, stagger: 0.2, ease: "elastic.out(1.2, 0.5)" });

/*--- about__page ---*/
tl2.from(".about__main-title__text", 1, { opacity: 0, y: 50, delay: 0.5, stagger: 0.5, ease: "power4.out" });
tl2.from(".header__stagger2", 1, { opacity: 0, x: 10, y: 50, stagger: 0.2, ease: "elastic.out(1.2, 0.5)" });
tl2.from(".main-bubble", .5, { scale: 0, ease: "power4.out" })

tl3.from(".main-subTitle__text", .5, { opacity: 0, y: 50, stagger: 0.3, ease: "power1.out" });
tl3.from(".main-icon-smile", .1, { opacity: 0, scale: 0, y: 50, ease: "power1.out" });

tl4.from(".profile-photo__img", .8, { opacity: 0, scale: 0, ease: "elastic.out(1.2, 0.5)" });
tl4.from(".profile-photo__text", 1, { opacity: 0, scale: 0, delay: 0.1, ease: "elastic.out(1.2, 0.5)" });

tl5.from(".profile-intro__wrap > div", 1, { opacity: 0, y: 50, stagger: 0.2, ease: "power4.out" });
tl5.from(".icon-circle__path", 1, { opacity: 0 });


tl6.from(".footer__contact", 1, { opacity: 0, y: 80, ease: "power4.out" });
tl6.from(".footer__contact-icon", .5, { opacity: 0, y: 50, ease: "power4.out" });
tl6.from(".footer__contact-title__text", 1, { opacity: 0, y: 50, stagger: 0.2, ease: "power4.out" });
tl6.from(".footer__contact-btn", .8, { opacity: 0, y: 50, ease: "power4.out" });

tl7.from(".social__btn", 1, { opacity: 0, y: 50, stagger: 0.2, ease: "power4.out" });

const scene1 = new ScrollMagic.Scene({
    triggerElement: ".main-subTitle",
})
    .setTween(tl3)
    .addTo(controller);

const scene2 = new ScrollMagic.Scene({
    triggerElement: ".about__profile-photo",
})
    .setTween(tl4)
    .addTo(controller);

const scene3 = new ScrollMagic.Scene({
    triggerElement: ".about__profile-introduction",
})
    .setTween(tl5)
    .addTo(controller);

const scene4 = new ScrollMagic.Scene({
    triggerElement: ".footer",
})
    .setTween(tl6)
    .addTo(controller);


const scene5 = new ScrollMagic.Scene({
    triggerElement: ".footer__socials",
})
    .setTween(tl7)
    .addTo(controller);



function updatePercentage() {
    //percent.innerHTML = (tl.progress() *100 ).toFixed();
    tl3.progress();
    // console.log(tl3.progress());
}

function updatePercentage2() {
    tl4.progress();
}

function updatePercentage3() {
    tl5.progress();
}

function updatePercentage4() {
    tl6.progress();
}

function updatePercentage5() {
    tl7.progress();
}




/*----------------------
    Footer Bubble
------------------------*/

var width = document.body.clientWidth;
var height = document.body.clientHeight;
var canvas = document.getElementById('footer__canvas');
var ctx = canvas.getContext('2d');
var fps = 60;
var frameTime = 1000 / fps;
var objArr = [];
var instanceNum = 0;
var lastTimeRender = +new Date();
var lastTimePushObj = +new Date();
// var imgSmile = new ImageSmile();

var showHeight = 100 + 'vh';

var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

var motionObj = function (x, y) {
    // this.r = getRandomInt(3, 12);
    this.r = 50;
    this.g = getRandomInt(5, 10) / -1000 / fps;
    this.t = 0;
    this.k = getRandomInt(1, 5) / 1000;
    this.x = x;
    this.px = x;
    this.ax = 0;
    this.vx = 0.5;
    // this.hsl = getRandomInt(60, 120) + ', 45%, 80%';
    this.alpha = getRandomInt(40, 90);
    this.y = y;
};

motionObj.prototype.move = function () {
    this.t += frameTime;
    this.ax = (this.px - this.x) * this.k;
    this.vx += this.ax;
    this.x += this.vx;
    this.y = 1 / 2 * this.g * this.t * this.t + height + this.r * 3;
};

motionObj.prototype.fadeAway = function () {
    if (this.t < 2600) return;
    // 2400
    this.alpha -= 1;
    // this.showHeight = 100 + 'vh';
};

motionObj.prototype.render = function () {
    ctx.beginPath();
    // ctx.shadowBlur = this.r * 3;
    // ctx.shadowColor = 'rgb(255, 255, 255)';
    ctx.fillStyle = 'rgb(136, 178, 196)';
    ctx.strokeStyle = 'rgb(255, 255, 255)';
    // ctx.fillStyle = 'hsla(' + this.hsl + ', ' + (this.alpha / 100) + ')';
    ctx.arc(this.x, this.y, this.r, 0, 360 * Math.PI / 180, false);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
};

// motionObj.prototype.render2 = function () {
//     ctx.drawImage(ImageSmile, 0, 0);
// };

// imgSmile.src = "../assets/img/icon-smile.svg";

motionObj.prototype.isLast = function () {
    if (this.alpha < 0) {
        return true;
    } else {
        return false;
    }
};

var render = function () {
    ctx.clearRect(0, 0, width, height);
    instanceNum = 0;
    for (var i = 0; i < objArr.length; i++) {
        if (objArr[i]) {
            instanceNum++;
            objArr[i].move();
            objArr[i].fadeAway();
            objArr[i].render();
            if (objArr[i].isLast()) {
                delete objArr[i];
            }
        }
    }
};

var renderloop = function () {
    var now = +new Date();
    requestAnimationFrame(renderloop);
    if (now - lastTimeRender > frameTime) {
        render();
        lastTimeRender = +new Date();
    }

    if (now - lastTimePushObj > 500 && instanceNum < 200) {
        for (var i = 0; i < 1; i++) {
            objArr.push(new motionObj(Math.random() * width, 0));
        }
        lastTimePushObj = +new Date();
    }
};
renderloop();

var canvasResize = function () {
    ctx.clearRect(0, 0, width, height);
    width = document.body.clientWidth;
    height = document.body.clientHeight;
    canvas.width = width;
    canvas.height = height;
};
canvasResize();

var debounce = function (object, eventType, callback) {
    var timer;

    object.addEventListener(eventType, function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            callback();
        }, 500);
    }, false);
};

debounce(window, 'resize', function () {
    canvasResize();
});
