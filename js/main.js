(function($) {
	"use strict";
	
	$('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
	
	
	$('#main_navigator').affix({
        offset: {
            top: 100
        }
    })
	
})(jQuery);