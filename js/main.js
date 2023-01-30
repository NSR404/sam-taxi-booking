(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Team carousel
    $(".team-carousel, .related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });
    
})(jQuery);

// ###################################################

/*===== SCROLL REVEAL ANIMATION =====*/
// const sr = ScrollReveal({
//     origin: "top",
//     distance: "80px",
//     duration: 2000,
//     reset: true,
//   });
//   ScrollReveal().reveal('.text-body');
// ScrollReveal().reveal('.tagline', { delay: 500 });
// ScrollReveal().reveal('.punchline', { delay: 2000 });
//   /*SCROLL HOME*/
//   sr.reveal(".text-body", {});
//   sr.reveal(".text-body", { delay: 200 });
//   sr.reveal(".img-home", { delay: 400 });
//   sr.reveal(".home__social-icon", { interval: 200 });

//   ###########################

 
 /*===== SCROLL REVEAL ANIMATION =====*/
 const sr_top = ScrollReveal({
    origin: "top",
    distance: "40px",
    duration: 1460,
    opacity:0 ,
    reset: false,
    delay: 0 ,
    disktop:true ,
    mobile : true,
     useDelay : 'always' , // once , onload  , always
     easing :  'ease-in-out' ,    // ease , ease-in , ease-out , ease-in-out 
  });
 
 
  
  /*SCROLL HOME*/
  sr_top.reveal(".text-body", {});
//   sr_top.reveal(".", {});
 //  sr_top.reveal(".nav-item ", {delay:0});
 
 
 ScrollReveal().reveal('.nav-link , .navbar-toggler , .item-contact , .social_right',{ 
   origin : 'right',
   distance: "40px",
    duration: 970,
    interval: 100 ,
    opacity: 0 ,
    delay: 990 ,
    mobile : false,
    reset: false,
    disktop:true ,
    easing :  'ease-in-out' ,    // ease , ease-in , ease-out , ease-in-out ,
  });
  
 
//  Home - img - 
  ScrollReveal().reveal('.img-logo , .left , .item_service_left , .item_cars_left , .social_left',{ 
   origin : 'left' ,
   distance: "50px",
    duration: 1500,
    interval: 200 ,
    opacity: 0 ,
    delay: 990 ,
    reset: false,
    disktop:true ,
    mobile : true,
    easing :  'ease-in-out' ,    // ease , ease-in , ease-out , ease-in-out 
  });
 

//   Home - title
  ScrollReveal().reveal('.title_home',{ 
   origin : 'bottom' ,
   distance: "50px",
    duration: 1100,
    interval: 200 ,
    opacity: 0 ,
    delay: 1700 ,
    reset: false,
    disktop:true ,
    mobile : true,
    easing :  'ease-in-out' ,    // ease , ease-in , ease-out , ease-in-out 
  });

    // section - number_section
  ScrollReveal().reveal('.number_section',{ 
    origin : 'bottom' ,
    distance: "50px",
     duration: 990,
     interval: 200 ,
     opacity: 0 ,
     delay: 180 ,
     reset: false,
     disktop:true ,
     mobile : true,
     easing :  'ease-in-out' ,    // ease , ease-in , ease-out , ease-in-out 
   });

// section - title-section
  ScrollReveal().reveal('.title_section , .btn_home',{ 
    origin : 'bottom' ,
    distance: "50px",
     duration: 1300,
     interval: 200 ,
     opacity: 0 ,
     delay: 280 ,
     reset: false,
     disktop:true ,
     mobile : true,
     easing :  'ease-in-out' ,    // ease , ease-in , ease-out , ease-in-out 
   });


   // section - title-section
  ScrollReveal().reveal('.img-about , .description_about , .item_about , .item_service , .input-contact ,.icon-contact',{ 
    origin : 'bottom' ,
    distance: "50px",
     duration: 1300,
     interval: 200 ,
     opacity: 0 ,
     delay: 380 ,
     reset: false,
     disktop:true ,
     mobile : true,
     easing :  'ease-in-out' ,    // ease , ease-in , ease-out , ease-in-out 
   });


      // section Footer- All - page Booking 
  ScrollReveal().reveal(' .item_footer , .item_cars_b ',{ 
    origin : 'bottom' ,
    distance: "50px",
     duration: 960,
     interval: 200 ,
     opacity: 0 ,
     delay: 100 ,
     reset: false,
     disktop:true ,
     mobile : true,
     easing :  'ease-in-out' ,    // ease , ease-in , ease-out , ease-in-out 
   });

   //  footer
 ScrollReveal().reveal('.item_footer_right , .item_service_right , .item_cars_right',{ 
    origin : 'bottom',
    distance: "50px",
     duration: 900,
     interval: 100 ,
     opacity: 0 ,
     delay: 990 ,
     reset: false,
     disktop:true ,
     mobile : true,
     easing :  'ease-in-out' ,    // ease , ease-in , ease-out , ease-in-out ,
   });


 // Booking page - 
  ScrollReveal().reveal('.title_form_scroll  , .scrollreveal',{ 
    origin : 'bottom' ,
    distance: "50px",
     duration: 935,
     interval: 100 ,
     opacity: 0 ,
     delay: 100 ,
     reset: false,
     disktop:true ,
     mobile : true,
     easing :  'ease-in-out' ,    // ease , ease-in , ease-out , ease-in-out 
   });



 
//  ###########################
//  scroll for navbar
$(function(){


// scroll for li>a in navbar - 320 -601
    if (window.innerWidth > 320 && window.innerWidth < 601 ) {
        $(".nav-link-home").on('click',function(){
            $("html").animate({
                scrollTop : 0
            },1000);
           })
    
    
    $(".nav-link-about").on('click',function(){
         $("html").animate({
             scrollTop : 680
                 },1100);
        })
    
        $(".nav-link-service").on('click',function(){
            $("html").animate({
                scrollTop : 1820
            },1120);
           });

    $(".nav-link-allcar").on('click',function(){
            $("html").animate({
                scrollTop : 4465
            },1500);
           })
    
    $(".nav-link-contact").on('click',function(){
            $("html").animate({
                scrollTop : 7680
            },1500);
        })
}

// scroll for li>a in navbar - 601 - 768
if (window.innerWidth > 601 && window.innerWidth < 768 ) {
    $(".nav-link-home").on('click',function(){
        $("html").animate({
            scrollTop : 0
        },1000);
       })


$(".nav-link-about").on('click',function(){
     $("html").animate({
         scrollTop : 720
             },1100);
    })

    $(".nav-link-service").on('click',function(){
        $("html").animate({
            scrollTop : 1880
        },1120);
       });

$(".nav-link-allcar").on('click',function(){
        $("html").animate({
            scrollTop : 4465
        },1500);
       })

$(".nav-link-contact").on('click',function(){
        $("html").animate({
            scrollTop : 7810
        },1500);
    })
}



// scroll for li>a in navbar - 768 - 992
if (window.innerWidth > 767 && window.innerWidth < 992 ) {
    $(".nav-link-home").on('click',function(){
        $("html").animate({
            scrollTop : 0
        },1000);
       })


$(".nav-link-about").on('click',function(){
     $("html").animate({
         scrollTop : 818
             },1100);
    })

    $(".nav-link-service").on('click',function(){
        $("html").animate({
            scrollTop : 1985
        },1120);
       });

$(".nav-link-allcar").on('click',function(){
        $("html").animate({
            scrollTop : 3550
        },1500);
       })

$(".nav-link-contact").on('click',function(){
        $("html").animate({
            scrollTop : 5015
        },1500);
    })
}


// scroll for li>a in navbar - 768 - 992
if (window.innerWidth > 991 ) {
       $(".nav-link-home").on('click',function(){
        $("html").animate({
            scrollTop : 0
        },1000);
       })


$(".nav-link-about").on('click',function(){
     $("html").animate({
         scrollTop : 675
             },1100);
    })

$(".nav-link-service").on('click',function(){
        $("html").animate({
            scrollTop : 1490
        },1100);
       })
$(".nav-link-allcar").on('click',function(){
        $("html").animate({
            scrollTop : 2754
        },1100);
       })

$(".nav-link-contact").on('click',function(){
        $("html").animate({
            scrollTop : 3815
        },1200);
    })

}





});





