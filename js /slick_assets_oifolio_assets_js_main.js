(function ($) {

    "use strict";

    //===== Prealoder

    jQuery(window).on('load', function (event) {
        jQuery('#preloader').delay(500).fadeOut(500);
    });


    jQuery(document).on('ready', function () {

        //===== Sticky

        jQuery(window).on('scroll', function (event) {
            var scroll = jQuery(window).scrollTop();
            if (scroll < 110) {
                jQuery(".navigation").removeClass("sticky");
            } else {
                jQuery(".navigation").addClass("sticky");
            }
        });




        jQuery(".header-menu").on('click', function () {
            jQuery(this).toggleClass("active");
        });







        /*---canvas menu activation---*/
        jQuery('.canvas_open').on('click', function () {
            jQuery('.offcanvas_menu_wrapper,.off_canvars_overlay').addClass('active')
        });

        jQuery('.canvas_close,.off_canvars_overlay').on('click', function () {
            jQuery('.offcanvas_menu_wrapper,.off_canvars_overlay').removeClass('active')
        });



        /*---Off Canvas Menu---*/
        var $offcanvasNav = jQuery('.offcanvas_main_menu'),
            $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
        $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');

        $offcanvasNavSubMenu.slideUp();

        $offcanvasNav.on('click', 'li a, li .menu-expand', function (e) {
            var $this = jQuery(this);
            if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
                e.preventDefault();
                if ($this.siblings('ul:visible').length) {
                    $this.siblings('ul').slideUp('slow');
                } else {
                    $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                    $this.siblings('ul').slideDown('slow');
                }
            }
            if ($this.is('a') || $this.is('span') || $this.attr('clas').match(/\b(menu-expand)\b/)) {
                $this.parent().toggleClass('menu-open');
            } else if ($this.is('li') && $this.attr('class').match(/\b('menu-item-has-children')\b/)) {
                $this.toggleClass('menu-open');
            }
        });




        //===== Isotope Project 1

        jQuery('.container').imagesLoaded(function () {
            var $grid = jQuery('.grid').isotope({
                // options
                transitionDuration: '1s'
            });
        });


        //====== Magnific Popup

        jQuery('.video-popup').magnificPopup({
            type: 'iframe'
            // other options
        });


        //===== Magnific Popup

        jQuery('.image-popup').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        var Slider1 = jQuery('.blog-active');
        Slider1.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            speed: 500,
            responsive: [
                {
                    breakpoint: 1201,
                    settings: {
                        slidesToShow: 3,
                    }
        },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
        },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
        },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
        }
      ]
        });

        var Slider2 = jQuery('.brand-active');
        Slider2.slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            speed: 500,
            responsive: [
                {
                    breakpoint: 1201,
                    settings: {
                        slidesToShow: 5,
                    }
        },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                    }
        },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                    }
        },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
        }
      ]
        });
        var Slider3 = jQuery('.awards-active');
        Slider3.slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            speed: 500,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 4,
                    }
        },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
        },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
        },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
        }
      ]
        });

        var Slider4 = jQuery('.related-project-slide');
        Slider4.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            speed: 500,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 3,
                    }
        },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
        },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
        },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
        }
      ]
        });



        var Slider5 = jQuery('.testimonial-slider');
        Slider5.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<span class="prev">Prev</span>',
            nextArrow: '<span class="next">Next</span>',
            arrows: true,
            fade: false,
            asNavFor: '.user-item'
        });
        var Slider6 = jQuery('.user-item');
        Slider6.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.testimonial-slider',
            dots: false,
            centerMode: true,
            arrows: false,
            centerPadding: "0",
            focusOnSelect: true
        });





        var Slider7 = jQuery('.testimonial-slider-2');
        Slider7.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: false,
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            speed: 500,
        });




        // Single Features Active
        jQuery('.about-area').on('mouseover', '.about-item', function () {
            jQuery('.about-item.active').removeClass('active');
            jQuery(this).addClass('active');
        });



        // Progress Bar
        if (jQuery('.progress-line').length) {
            jQuery('.progress-line').appear(function () {
                var el = jQuery(this);
                var percent = el.data('width');
                jQuery(el).css('width', percent + '%');
            }, {
                accY: 0
            });
        }
        if (jQuery('.count-box').length) {
            jQuery('.count-box').appear(function () {
                var $t = jQuery(this),
                    n = $t.find(".count-text").attr("data-stop"),
                    r = parseInt($t.find(".count-text").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    jQuery({
                        countNum: $t.find(".count-text").text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function () {
                            $t.find(".count-text").text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $t.find(".count-text").text(this.countNum);
                        }
                    });
                }

            }, {
                accY: 0
            });
        }


        //===== Back to top

        // Show or hide the sticky footer button
        jQuery(window).on('scroll', function (event) {
            if (jQuery(this).scrollTop() > 600) {
                jQuery('.back-to-top').fadeIn(200)
            } else {
                jQuery('.back-to-top').fadeOut(200)
            }
        });



        /*===============================  
             counter up
        ================================*/

        jQuery('.counter').counterUp({
            delay: 10,
            time: 2000
        });



        //===== Scroll It active

        jQuery.scrollIt({
            upKey: 38, // key code to navigate to the next section
            downKey: 40, // key code to navigate to the previous section
            easing: 'linear', // the easing function for animation
            scrollTime: 1300, // how long (in ms) the animation takes
            activeClass: 'active', // class given to the active nav element
            onPageChange: null, // function(pageIndex) that is called when page is changed
            topOffset: -70, // offste (in px) for fixed top navigation
        });


    });







    //===== 







})(jQuery);
