(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });



  
})(jQuery); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(event) {
  var that = $(this);
  that.on('click', onMapClickHandler);
  that.off('mouseleave', onMapMouseleaveHandler);
  that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function(event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off('click', onMapClickHandler);
  // Enable scrolling zoom
  that.find('iframe').css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on('mouseleave', onMapMouseleaveHandler);
}
// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);

$(document).ready(function(){
  //Animations on scroll
  $('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1').addClass('animated bounceInLeft');
    }, {
      offset: '50%;'
  });

  $('.js--wp-2').waypoint(function(direction){
    $('.js--wp-2').addClass('animated bounceInRight');
    }, {
      offset: '50%;'
  });

  $('.js--wp-3').waypoint(function(direction){
    $('.js--wp-3').addClass('animated fadeInLeftBig');
    }, {
      offset: '40%;'
  });

  $('.js--wp-4').waypoint(function(direction){
    $('.js--wp-4').addClass('animated fadeInRightBig');
    }, {
      offset: '40%;'
  });

  $('.js--wp-6').waypoint(function(direction){
    $('.js--wp-6').addClass('animated fadeInUpBig');
    }, {
      offset: '40%;'
  });

  $('.js--wp-5').waypoint(function(direction){
    $('.js--wp-5').addClass('animated tada');
    }, {
      offset: '50%;'
  });

});