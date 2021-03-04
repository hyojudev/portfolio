// window height
var wh = $(window).height();
$('.wh').height(wh);

window.onload = function () {
//    setPageScroll();
    setSlider();
    setPhoneInfoSlider();
}

var pageTops = [];
var scrollTimer;
var scrollTop = 0;
var scrollTopPrev = 0;

var setPageScroll = () => {
    $(".wh").each((i) => {
        pageTops.push(wh * i);
    });
    $(window).scroll(() => {
        scrollTopPrev = scrollTop;
        scrollTop = $(window).scrollTop();
        setScrollTimer()
    });
}

function setScrollTimer() {
    if (scrollTimer != null) {
        clearTimeout(scrollTimer);
    }
    scrollTimer = setTimeout(() => {
        hasScrolled(scrollTopPrev);
    }, 3000);
}

function hasScrolled(scrollTopPrev) {
    var top = $(window).scrollTop();
    var pageTop = 0;
    for (var i = 0; i < pageTops.length; i++) {
        pageTop = pageTops[i];
        if (pageTop + wh * (scrollTopPrev < scrollTop ? 0.2 : 0.8) > scrollTop) {
            break;
        }
    }
    $('html, body').stop().animate({ scrollTop: pageTop }, { duration: 300 });
}

function setPageScrollWithWheel() {
    $(".wh").each(function () {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) {
                event = window.event;
            }
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) {
                    delta = -delta;
                }
            } else if (event.detail) {
                delta = -event.detail / 3;
            }

            var moveTop = null;
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(this).next() != undefined) {
                    moveTop = $(this).next().offset().top;
                }
                // 마우스휠을 아래에서 위로
            } else {
                if ($(this).prev() != undefined) {
                    moveTop = $(this).prev().offset().top;
                }
            }
            // 화면 이동 0.6초(600)
            $("html,body").stop().animate(
                {
                    scrollTop: moveTop + 'px'
                },
                {
                    duration: 600,
                    complete: function () { }
                });
        });
    });
}

var currentCard = 0;
var sliderImages;
var sliderText;
var sliderTimer;
var sliderCount;

function setSlider() {
    sliderImages = $(".slideimg1 > .slider");
    sliderText = $(".slidebox1 > .tslider");
    sliderCount = Math.min(sliderImages.length, sliderText.length);

    sliderImages.eq(0).fadeIn(0);
    for (var i = 1; i < sliderImages.length; i++) {
        sliderImages.eq(i).fadeOut(0);
    };
    sliderText.eq(0).fadeIn(0);
    for (var i = 1; i < sliderText.length; i++) {
        sliderText.eq(i).fadeOut(0);
    };

    setSliderTimer();
}

function setSliderTimer() {
    if (sliderTimer != null) {
        clearTimeout(sliderTimer);
    }
    sliderTimer = setTimeout(() => {
        slideCard(1);
    }, 6000);
}

function slideCard(n) {
    var next = currentCard + n;
    if (next >= sliderCount) {
        next = 0;
    } else if (next < 0) {
        next = sliderCount - 1;
    }
    for (var i = 0; i < sliderCount; i++) {
        if (i == currentCard) {
            sliderImages.eq(i).fadeOut();
            sliderText.eq(i).fadeOut();
        } else if (i == next) {
            sliderImages.eq(i).fadeOut(0);
            sliderImages.eq(i).fadeIn();
            sliderText.eq(i).fadeOut(0);
            sliderText.eq(i).fadeIn();
        }
    };
    currentCard = next;

    setSliderTimer();
}

var currentPhoneInfo = 0;
var sliderPhoneInfoImage;
var sliderPhoneInfoText;
var sliderPhoneInfoCount;

function setPhoneInfoSlider() {
    sliderPhoneInfoImage = $(".pslideimg > img");
    sliderPhoneInfoText = $(".ptextslide > .ptextsytle");
    sliderPhoneInfoCount = Math.min(sliderPhoneInfoImage.length, sliderPhoneInfoText.length);

    sliderPhoneInfoImage[0].style.display = 'block';
    for (var i = 1; i < sliderPhoneInfoImage.length; i++) {
        sliderPhoneInfoImage[i].style.display = 'none';
    };
    sliderPhoneInfoText[0].style.display = 'block';
    for (var i = 1; i < sliderPhoneInfoText.length; i++) {
        sliderPhoneInfoText[i].style.display = 'none';
    };
}

function slidePhoneInfo(n) {
    if (n == currentPhoneInfo) {
        return;
    }

    for (var i = 0; i < sliderPhoneInfoCount; i++) {
        if (i == n) {
            sliderPhoneInfoImage[i].style.display = 'block';
            sliderPhoneInfoText[i].style.display = 'block';
        } else {
            sliderPhoneInfoImage[i].style.display = 'none';
            sliderPhoneInfoText[i].style.display = 'none';
        }
    };
    currentPhoneInfo = n;
}