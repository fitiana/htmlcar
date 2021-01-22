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
    
})(jQuery);