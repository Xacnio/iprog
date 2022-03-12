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
})