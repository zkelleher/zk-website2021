( function($) {
  'use strict';
  	

  	/* Window Load */
	$(window).on('load',function(){
		$('.loader').fadeOut(200);
        $('.line').addClass('active');
        get_url();
        
	});


    /* Navbar scroll*/
    $('.navbar-nav ul li a').on('click', function() {
        var target = $(this.hash);
        if (target.length) {
            $('html,body').animate({
                scrollTop: (target.offset().top)
            }, 1000);
            $('body').removeClass('menu-is-opened').addClass('menu-is-closed');
            return false;
        }
    });



    

    /* Full page scroll*/
    if ($('#pagepiling').length > 0){

        $('#pagepiling').pagepiling({
            scrollingSpeed: 280,
            navigation:false,
            menu: '.navbar-nav',
            anchors: ['home', 'portfolio', 'about', 'contact'],
            afterRender: function(anchorLink, index){ 
              NavbarColor();

            },
            afterLoad: function(anchorLink, index){
                $('.pp-section .intro').removeClass('animate');
                $('.active .intro').addClass('animate');
                NavbarColor();
            }
        });

  

        function NavbarColor(){
         if ($('.pp-section.active').hasClass('navbar-is-white')){
                $('.navbar-desctop').addClass('navbar-white');
                $('.progress-nav').addClass('progress-nav-white');
                $('.navbar-bottom').addClass('navbar-bottom-white');
            }
            else{
                $('.navbar-desctop').removeClass('navbar-white');
                $('.progress-nav').removeClass('progress-nav-white');
                $('.navbar-bottom').removeClass('navbar-bottom-white');
            }
        }
    }


    /* Navbar toggler */
    $('.toggler').on('click',function(){
    	$('body').addClass('menu-is-open');
    });

    $('.close, .click-capture').on('click',function(){
    	$('body').removeClass('menu-is-open');
    });


    /* Navbar mobile */
    $('.navbar-nav-mobile li a').on('click', function(){
    	$('body').removeClass('menu-is-open');
    	$('.navbar-nav-mobile li a').removeClass('active');
    	$(this).addClass('active');
    });

    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });



    /* Change bacgkround on project section*/
    $('.project-box').on('mouseover',function(){
        var index = $('.project-box').index(this);
        $('.bg-changer .section-bg').removeClass('active').eq(index).addClass('active');
    });


    $("#portfolio-carousel").owlCarousel({
        center: false,
        items:4,
        loop:true,
        margin:0,
        nav: true,
        dots: false,
        responsive:{
            1000:{
                items:4
            },
            992:{
                items:3
            },
            600:{
                items:2
            },
            0:{
                items:1
            }
        }
     });

    
     function get_url() {
		$('.carousel-item').on("click", function() {
			window.location = jQuery(this).data('url');
		});
	}
    function init_de() {
		jQuery('.de-team-list').each(function() {
			jQuery(this).find("img").on('load', function() {
				var w = jQuery(this).css("width");
				var h = jQuery(this).css("height");
				//nh = (h.substring(0, h.length - 2)/2)-48;
				jQuery(this).parent().parent().find(".team-pic").css("height", h);
				jQuery(this).parent().parent().find(".team-desc").css("width", w);
				jQuery(this).parent().parent().find(".team-desc").css("height", h);
				jQuery(this).parent().parent().find(".team-desc").css("top", h);
			}).each(function() {
				if (this.complete) $(this).load();
			});
		});
		jQuery(".de-team-list").on("mouseenter", function() {
				var h;
				h = jQuery(this).find("img").css("height");
				jQuery(this).find(".team-desc").stop(true).animate({
					'top': "0px"
				}, 350, 'easeOutQuad');
				jQuery(this).find("img").stop(true).animate({
					'margin-top': "-100px"
				}, 400, 'easeOutQuad');
			}).on("mouseleave", function() {
				var h;
				h = jQuery(this).find("img").css("height");
				jQuery(this).find(".team-desc").stop(true).animate({
					'top': h
				}, 350, 'easeOutQuad');
				jQuery(this).find("img").stop(true).animate({
					'margin-top': "0px"
				}, 400, 'easeOutQuad');
			})
			// portfolio
		jQuery('.item .picframe').each(function() {
			jQuery(this).find("img").css("width", "100%");
			jQuery(this).find("img").css("height", "auto");
			jQuery(this).find("img").on('load', function() {
				var w = jQuery(this).css("width");
				var h = jQuery(this).css("height");
				//nh = (h.substring(0, h.length - 2)/2)-48;
				jQuery(this).parent().css("height", h);
			}).each(function() {
				if (this.complete) $(this).load();
			});
		});
		// --------------------------------------------------
		// portfolio hover
		// --------------------------------------------------
		jQuery('.overlay').fadeTo(1, 0);
		// gallery hover
		jQuery(".item .picframe").on("mouseenter", function() {
			jQuery(this).parent().find(".overlay").width(jQuery(this).find("img").css("width"));
			jQuery(this).parent().find(".overlay").height(jQuery(this).find("img").css("height"));
			jQuery(this).parent().find(".overlay").stop(true).fadeTo(200, .9);
			var picheight = jQuery(this).find("img").css("height");
			var newheight;
			newheight = (picheight.substring(0, picheight.length - 2) / 2) - 10;
			//alert(newheight);
			//jQuery(this).parent().find(".pf_text").stop(true).animate({'margin-top': newheight},200,'easeOutCubic');
			jQuery(this).parent().find(".pf_text").css('margin-top', newheight);
			jQuery(this).parent().find(".pf_text").stop(true).animate({
				'opacity': '1'
			}, 1000, 'easeOutCubic');
			var w = jQuery(this).find("img").css("width");
			var h = jQuery(this).find("img").css("height");
			var w = parseInt(w, 10);
			var h = parseInt(h, 10);
			var $scale = 1;
			//alert(w);
			jQuery(this).find("img").stop(true).animate({
				width: w * $scale,
				height: h * $scale,
				'margin-left': -w * ($scale - 1) / 2,
				'margin-top': -h * ($scale - 1) / 2
			}, 400, 'easeOutCubic');
		}).on("mouseleave", function() {
			var newheight;
			var picheight = jQuery(this).find("img").css("height");
			newheight = (picheight.substring(0, picheight.length - 2) / 2) - 10;
			//jQuery(this).parent().find(".pf_text").stop(true).animate({'margin-top': newheight - 30},200,'easeOutCubic');
			jQuery(this).parent().find(".pf_text").stop(true).animate({
				'opacity': '0'
			}, 400, 'easeOutCubic');
			jQuery(this).parent().find(".overlay").stop(true).fadeTo(200, 0);
			jQuery(this).find("img").stop(true).animate({
				width: '100%',
				height: '100%',
				'margin-left': 0,
				'margin-top': 0
			}, 400, 'easeOutQuad');
		})
		jQuery('.overlay').fadeTo(1, 0);
		$.stellar('refresh');
		
		var preloader_pos = parseInt(jQuery(window).innerHeight()/2)-30;
		$(".preloader1").css("top",preloader_pos);
	}

    	function custom_bg() {
		$("div,section,span").css('background-color', function() {
			return jQuery(this).data('bgcolor');
		});
		$("body,div,section").css('background-image', function() {
			return jQuery(this).data('bgimage');
		});
		
		$('.img-url').each(function() {
			$img_name = $(this).parent().find('img').attr('src');
			//alert('url("'+$img_name+'")');
			$(this).css('background','url('+$img_name+')');
		});
		
		/*$(".img-url").css('background', function() {
			return 'url("images/misc/pic-1.jpg")';
		});*/
		
		$("div,section").css('background-size', function() {
			return 'cover';
		});
		
		$(".img-url").css('background-position', function() {
			return 'top center';
		});
		
		
	}

    

    

    /* Send form */
	if ($('.js-ajax-form').length) {
		$('.js-ajax-form').each(function(){
			$(this).validate({
				errorClass: 'error',
			    submitHandler: function(form){
		        	$.ajax({
			            type: "POST",
			            url:"mail.php",
			            data: $(form).serialize(),
			            success: function() {
		                	$('#success-message').show();
		                },

		                error: function(){
		                	$('#error-message').show();
			            }
			        });
			    }
			});
		});
	}

})(jQuery);


