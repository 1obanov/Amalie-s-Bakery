;
(function ($) {
    "use strict";

    /*--------- Preloader ---------*/
    $(window).on("load", function () {
        "use strict";
        jQuery("#status").fadeOut(350);
        jQuery("#preloader").delay(350).fadeOut(200);
    });


    /*--------- Header slider ---------*/
    $(document).ready(function () {
        $('.slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: false,
            cssEase: 'linear',
            mobileFirst: true,
            prevArrow: '<div class="flex"><div class="prev">PREV</div></div>',
            nextArrow: '<div class="flex"><div class="next">NEXT</div></div>',

            responsive: [{

                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }

            }, {

                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }

            }, {

                breakpoint: 250,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }]
        });
    });


    /*--------- Portfolio isotope ---------*/
    var $grid = $(".grid").isotope({});

    $(".filters").on("click", "div", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({
            filter: filterValue
        });
    });

    $("#products .filters div").on("click", function () {
        $(".filters")
            .find(".active")
            .removeClass("active");
        $(this).addClass("active");
    });


    /*--------- Products slider ---------*/
    $(document).ready(function () {
        $('.products-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            infinite: false,
            cssEase: 'linear',
            mobileFirst: true,

            responsive: [{

                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }

            }, {

                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }

            }, {

                breakpoint: 250,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false

            }]
        });
    });


    /*--------- Testimonial slider ---------*/
    $(document).ready(function () {
        $('.testim-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            infinite: false,
            cssEase: 'linear',
            mobileFirst: true,

            responsive: [{

                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }

            }, {

                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }

            }, {

                breakpoint: 250,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false

            }]
        });
    });


    /*--------- Menu Scroller ---------*/
    $(".scroller").on("click", function () {
        "use strict";
        var the_id = $(this).attr("href");
        $("html, body").animate({
                scrollTop: $(the_id).offset().top + 1
            },
            "slow"
        );
        return false;
    });

    /* active button on menu */
    $(".navbar .navbar-nav li a").on("click", function () {
        $(".navbar-nav")
            .find(".active")
            .removeClass("active");
        $(this).addClass("active");
    });

    /* active button on scroll menu */
    $(".navbar-nav").singlePageNav({
        speed: 1e3,
        currentClass: "active",
        offset: 80
    });

    $(window).scroll(function () {
        var bodyScroll = $(window).scrollTop(),
            navbar = $(".navbar");
        if (bodyScroll > 0) {
            navbar.addClass("nav-scroll");
        } else {
            navbar.removeClass("nav-scroll");
        }
    });

    
    /*--------- Mobile menu ---------*/
    $("#menu-button, .navbar-nav a").on("click", function (e) {
        e.preventDefault();

        $("#menu-button, .navbar").toggleClass("pushed-left");
        $(".nav").toggleClass("fixed");
        $('#home .flex').toggleZindex();
    });

    /* Change z-index from 0 to 1 */
    $.fn.toggleZindex = function () {
        var arrows = $('#home .flex');

        if (arrows.css("z-index") == "1") {
            arrows.css("z-index", "0")
        } else {
            arrows.css("z-index", "1")
        }
        return arrows;
    };



})(jQuery)