/* ======================================
	
	Template: Umbrella
	Version: 1
	Design and Developed by:Umbrella Theme

========================================= */

/*================================================
[  Table of contents  ]
================================================

	01. Menu Sticky
	02. One Page Menu
	03. Change Diffrent Logos on Nav
	04. About Owl Active
	05. Portfolio Masonary Active
	06. Wow Js Active
	
================================================*/

(function ($) {
 "use strict";

	/*------ 01. Menu Sticky ------*/
	var wstick = $(window);
    wstick.on('scroll',function() {    
        var scroll = wstick.scrollTop();
        if (scroll < 245) { 
            $(".sticker").removeClass("stick");
        }else{
            $(".sticker").addClass("stick");
        }
    }); 
	
	/*------ 02. One Page Menu ------*/
    var TopOffsetId = $('.header-area').height() - 25;
    $('#main-menu nav').onePageNav({
        currentClass: 'active',
        scrollThreshold: 0.2,
        scrollSpeed: 1000,
        scrollOffset: TopOffsetId,
    });
 
	/*------ 03. Change Diffrent Logos on Nav ------*/
	var wlogo = $(window);
	wlogo.scroll(function() {
		if (wlogo.scrollTop() >= 25) {
			$(".logo > img").attr("src", "img/icon/logo.png");
		}
		else {
			$(".logo > img").attr("src", "img/icon/logo.png");
		}
	});
 
	/*------ 04. About Owl Active ------*/
	$('#about-active').owlCarousel({
	  loop: true,
	  margin: 0,
	  autoplay: false,
	  nav: true,
	  dots:false,
	  navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	  responsive: {
		0: {
		  items: 1
		},
		600: {
		  items: 1
		},
		1000: {
		  items: 1
		}
	  }
	})
	
	/*------ 05. Portfolio Masonary Active ------*/
	$('.grid').imagesLoaded( function() {
	// filter items on button click
	
	$('.portfolio-menu').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});	
	
	// Isotop Menu Active
    $('.portfolio-menu button').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	 });
	 
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
	
	});
	
	/*------ 06. Wow Js Active ------*/
	var wow = new WOW();
	wow.init();
	
	/*--------------------------
	 12. scrollUp
	---------------------------- */	
	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});
	
 
})(jQuery);  