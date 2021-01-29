//JQuery Module Pattern

// An object literal
var app = {
  init: function() {
    app.functionOne();
  },
  functionOne: function () {
  }
};
$("document").ready(function () {
  app.init();
});



(function ($) {
    'use strict';
/*--------------------------------------------------------
    / 11. Fixed Header
    /----------------------------------------------------------*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 130)
        {
            $(".head-sticky").addClass('fix-header');
            $(".header-content").addClass('animated slideInDown');
        } else
        {
            $(".head-sticky").removeClass('fix-header animated slideInDown');
            $(".header-content").removeClass('animated slideInDown');
        }
    });
    
    $('.hamburger-menu').on('click', function() {
			$('body').toggleClass('mobile-menu-visible');
            $( this ).toggleClass('active')
		});
    
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        $('html, body').animate({scrollTop:(target.offset().top-8)},1200,"easeInOutExpo");
        $('body').toggleClass('mobile-menu-visible');
        event.preventDefault();
    });
    
    // marquage-slider
  $('.marquage-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    loop: true,
    autoplay: true,
    speed: 400,
     
    cssEase: 'linear',
   
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 2,
        centerMode: true,
        centerPadding: '40px',
      }
    }, {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 1,
          centerMode: true,
        centerPadding: '20px',
      }
    }]
  });
    
})(jQuery);