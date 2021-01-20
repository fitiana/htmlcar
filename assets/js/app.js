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
        if ($(window).scrollTop() > 40)
        {
            $(".head-sticky").addClass('fix-header animated slideInDown');
        } else
        {
            $(".head-sticky").removeClass('fix-header animated slideInDown');
        }
    });
})(jQuery);