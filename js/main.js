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
    $(function () {
        $('img.lazy').Lazy({
            effect: 'fadeIn',
            effectTime: 250,
        });
    });
    $('.header-user-dropdown').prev().click((e) => {
        e.stopPropagation();
        e.preventDefault();
        $('.header-user-dropdown').addClass("open");
    })
    $(document).click(function () {
        var headerUserDropdown = $('.header-user-dropdown')
        headerUserDropdown.removeClass("open");
    });

    $('.profile-menu a').click((e) => {
        var item = $(e.target)
        if (item.parent('li').hasClass("active")) {
            return;
        }
        var href = $(e.target).attr("tab-href");
        var tab = $(`.tab[tab-name="${href}"]`);
        $('.profile-menu li').removeClass("active");
        item.parent('li').addClass("active")
        if (tab.length != 0) {
            $('.tab').removeClass("in")
            setTimeout(() => {
                $('.tab').removeClass("open")
                setTimeout($('.tab').removeClass("open"), 1000)
                tab.addClass("open")
                setTimeout(() => tab.addClass("in"), 150)
            }, 150)
        }
    })
})