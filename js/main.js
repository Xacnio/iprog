$(document).ready(() => {
    $('#mobile-nav-toggle').click(() => {
        if ($('.header-bs').has('mobile-disable')) {
            $('.header-bs').removeClass('mobile-disable').addClass('mobile-enable');
        }
    })
    $('#menu-close').click(() => {
        if ($('.header-bs').has('mobile-enable')) {
            $('.header-bs').removeClass('mobile-enable').addClass('mobile-disable');
        }
    })

    var sticky = $('.header').height();
    var lastY = null;
    window.onscroll = function () {
        if (window.pageYOffset > sticky) {
            const currentY = window.pageYOffset;
            if (lastY != null) {
                if (currentY >= lastY) {
                    $('.header').addClass('sticky').removeClass("sticky-hide");
                } else if (!$('.header-bs').hasClass('mobile-enable')) {
                    $('.header').removeClass('sticky').addClass("sticky-hide");
                }
            }
            lastY = window.pageYOffset;

        } else if (!$('.header-bs').hasClass('mobile-enable')) {
            $('.header')./*removeClass('sticky').*/removeClass('sticky-hide');
        }
    };
})