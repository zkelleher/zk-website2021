( function($) {
    'use strict';
jQuery("#portfolio-carousel").owlCarousel({
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

 // Custom Navigation owlCarousel
//  $(".pf-nav.left").on("click", function() {
//     $('#portfolio-carousel').trigger('prev.owl.carousel');
// });
// $(".pf-nav.right").on("click", function() {
//     $('#portfolio-carousel').trigger('next.owl.carousel');
// });

// jQuery('.owl-custom-nav').each(function() {
//     var owl = $('.owl-custom-nav').next();
//     var ow = parseInt(owl.css("height"), 10);
//     $(this).css("margin-top", (ow / 2) - 25);
//     owl.owlCarousel();
//     // Custom Navigation Events
//     $(".btn-next").on("click", function() {
//         owl.trigger('owl.next');
//     });
//     $(".btn-prev").on("click", function() {
//         owl.trigger('owl.prev');
//     });
// });

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


function get_url() {
    $('.carousel-item').on("click", function() {
        window.location = jQuery(this).data('url');
    });
}

})(jQuery);



