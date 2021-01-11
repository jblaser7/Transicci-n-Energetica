$(document).ready(function() {
  /* For the sticky navigation */ 
  $('.js--section-features').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '70px;'
  });

  /* SCROLL ON BUTTONS */ 
  $('.js--scroll-to-plans').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 500)
  });

  $('.js--scroll-to-start').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 500)
  });

 /* NAVIGATION SCROLL */
 $('.js--wp-1').waypoint(function(direction) {
   $('.js--wp-1').addClass('animated animate__fadeIn');
 }, {
   offset: '50%'
  });

  $('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated animate__fadeInUp');
  }, {
    offset: '50%'
   });

   $('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated animate__fadeIn');
  }, {
    offset: '50%'
   });

   $('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated animate__lightSpeedInLeft');
  }, {
    offset: '50%'
   });

   /* Mobile nav*/ 
   $('.js--nav-icon').click(function() {
     var nav = $('.js--main-nav');
     var icon = $('.js--nav-icon ion-icon name');

     nav.slideToggle(200);
     if (icon.hasClass('mobile_icon')) {
      icon.addClass('close-outline');
      icon.removeClass('reorder-three-outline')
    } else {
     icon.addClass('reorder-three-outline');
     icon.removeClass('close-outline')
    }

   })


});

/*
nav.slideToggle(200);
if (icon.hasClass('mobile_icon')) {
  icon.attr('close-outline');
  icon.removeClass('mobile_icon')
} else {
 icon.addClass('reorder-three-outline');
 icon.removeClass('close-outline')
}

<ion-icon name="close-outline"></ion-icon>

if (icon.hasClass('mobile_icon')) {
  icon.addClass('close-outline');
  icon.removeClass('reorder-three-outline')
} else {
 icon.addClass('reorder-three-outline');
 icon.removeClass('close-outline')
}

<a class="mobile-nav-icon js--nav-icon"><ion-icon name="reorder-three-outline" class="mobile_icon"></ion-icon></a>
          <a class="mobile-nav-icon js--nav-icon"><ion-icon class="close-outline"></ion-icon></a>

*/

