(function ($) {

    function foo() {
        'use strict';

        $(window).on('scroll', function () {
            if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
                $('#return-to-top').fadeIn(200); // Fade in the arrow
            } else {
                $('#return-to-top').fadeOut(200); // Else fade out the arrow
            }
        });

        $('#return-to-top').on('click', function () { // When arrow is clicked
            $('body,html').animate({
                scrollTop: 0 // Scroll to top of body
            }, 500);
        });

    }
    foo();
    /* scrollspy start */

    $('body').scrollspy({
        target: '#bs-example-navbar-collapse-1',
    });

    /* navOffset start */
    var nav = $('nav'),
        navOffset = nav.offset().top,
        $window = $(window);
    /* navOffset ends */

    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 5
                }, 1000);
                return false;
            }
        }
    });

    /* Search Start */
    $(document).ready(function () {
        $('#close-btn').on('click', function () {
            $('#search-overlay').fadeOut();
            $('#search-btn').show();
        });
        $('#search-btn').on('click', function () {
            $(this).hide();
            $('#search-overlay').fadeIn();
        });
    });

    // slick-testimonial js activation

    $('.fdbck_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.client'
    });
    // client slick js activation

    $('.client').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.fdbck_main',
        dots: false,
        centerPadding: 0,
        arrows: true,
        nextArrow: $('.clienticon_left'),
        prevArrow: $('.clienticon_right'),
        centerMode: true,
        focusOnSelect: true
    });

    //blog
    $('.blog_slick').slick({
        infinite: true,
        autoplay: false,
        arrows: true,
        nextArrow: $('.blogicon_left'),
        prevArrow: $('.blogicon_right'),
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true

            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1

            }
        }
        ]
    });
    // home slider start here
    $('.slider').slick({
        autoplay: true,
        lazyLoad: 'progressive',
        arrows: false,
        dots: true,
        infinite: true,
        speed: 2000,
        autoplaySpeed: 2000,
    }).slickAnimation();



    // youtube video js start here

    jQuery("a.bla-1").YouTubePopUp({
        autoplay: 0
    });

    // Disable autoplay

    // jQuary for FQR

    function toggleIcon(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".more-less")
            .toggleClass('fa-arrow-down fa-arrow-up');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);

    // feature design hover js ends 

    /* caarousel */
    $(document).ready(function (ev) {
        $('#custom_carousel').on('slide.bs.carousel', function (evt) {
            $('#custom_carousel .controls li.active').removeClass('active');
            $('#custom_carousel .controls li:eq(' + $(evt.relatedTarget).index() + ')').addClass('active');
        })
    });

    //    loader

    $('.loading').delay(1000).fadeOut();

    $('#contact_form .contact-btn').click(function () {
        $.ajax({
            type: 'post',
            url: 'mail.php',
            data: $('#contact_form').serialize(),
            success: function () {
                $('#contact_form')[0].reset();
                $('#contact_form .contact-btn').attr('style', "background-color:#16C39A");
                $('#contact_form .contact-btn').siblings().html("<i style='color:#16C39A'>*</i> Email has been sent successfully");
            }
        });
        return false;
    });
})(jQuery);