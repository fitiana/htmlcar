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
        event.preventDefault();
    });
    
    $('a.nav-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        $('html, body').animate({scrollTop:(target.offset().top-25)},1200,"easeInOutExpo");
        $('body').toggleClass('mobile-menu-visible');
        event.preventDefault();
    });
    
    /***** Contact Input Animation *******/

	$('.contact-form_input').on('change paste keyup', function (e) {
		const val = $(this).val();

		if (val) {
			$(this).parent().addClass('has-value')
		} else {
			$(this).parent().removeClass('has-value')
		}
	})
    
    
    //Contact Popup
	if($('.contact-box-btn').length){
		
		//Show Popup
		$('.contact-box-btn').on('click', function() {
			$('.contact-popup').addClass('popup-visible');
            $('body').addClass('body-overlay');
            
            e.preventDefault();
		});
		
		//Hide Popup
		$('.contact-close-btn').on('click', function() {
			$('.contact-popup').removeClass('popup-visible');
             $('body').removeClass('body-overlay');
		});
	}
    
    //Mon espace Popup
	if($('.espace-box-btn').length){
		
		//Show Popup
		$('.espace-box-btn').on('click', function() {
			$('.espace-popup').addClass('popup-visible');
            $('body').addClass('body-overlay');
            
            e.preventDefault();
		});
		
		//Hide Popup
		$('.espace-close-btn').on('click', function() {
			$('.espace-popup').removeClass('popup-visible');
             $('body').removeClass('body-overlay');
		});
	}
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
        centerPadding: '30px',
      }
    }, {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 1,
          centerMode: true,
        centerPadding: '0px',
      }
    }]
  });
    
})(jQuery);