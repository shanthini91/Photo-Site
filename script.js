$(document).ready(function() {
  // Navbar burger animation
  $('.nav-button').click(function() {
    $(this).toggleClass('change');
  });

  // Auto close navbar on link click (mobile)
  $('.nav-link').click(function() {
    $('.navbar-collapse').collapse('hide');
    $('.nav-button').removeClass('change'); // reset burger animation
  });
$('a[href^="#"]').click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top - 70
  }, 600);
});

  // Single scroll event for all animations
  $(window).scroll(function() {
    let position = $(this).scrollTop();

    // Navbar background change
    if(position >= 200) {
      $('.nav-menu').addClass('custom-navbar');
    } else {
      $('.nav-menu').removeClass('custom-navbar');
    }

    // Mission image & text animation
    if(position >= 650) {
      $('.camera-img').addClass('fromLeft');
      $('.mission-text').addClass('fromRight');
    } else {
      $('.camera-img').removeClass('fromLeft');
      $('.mission-text').removeClass('fromRight');
    }

    // Mission title & content
    if(position >= 500) {
      $('.mission-title').addClass('fromLeft');
      $('.mission-content').addClass('fromRight');
    } else {
      $('.mission-title').removeClass('fromLeft');
      $('.mission-content').removeClass('fromRight');
    }

    // Collection cards animation
    if(position >= 700) {
      $('.card-shadow').addClass('moveFromBottom');
    } else {
      $('.card-shadow').removeClass('moveFromBottom');
    }

    // Pricing cards animation
    if(position >= 4300) {
      $('.card-1').addClass('moveFromLeft');
      $('.card-2').addClass('moveFromBottom');
      $('.card-3').addClass('moveFromRight');
    } else {
      $('.card-1').removeClass('moveFromLeft');
      $('.card-2').removeClass('moveFromBottom');
      $('.card-3').removeClass('moveFromRight');
    }
  });

  // Gallery filter
  $('.gallery-list-item').click(function() {
    let value = $(this).attr('data-filter');
    if(value === 'all') {
      $('.filter').show(300);
    } else {
      $('.filter').not('.' + value).hide(300);
      $('.filter').filter('.' + value).show(300);
    }

    // Active filter highlight
    $(this).addClass('active-item').siblings().removeClass('active-item');
  });
});

