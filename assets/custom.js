$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('nav').addClass("bg-white nav-box-shadow");
  }
  else{
    $('nav').removeClass("bg-white nav-box-shadow");
  }
});
$(document).ready(function(){
  $('.hamburger-menu , .hamburger-menu-close').on('click', function(eb) {
    eb.preventDefault(); 
    $('.nav-bar-items , .nav-bar-items-last').toggleClass('trnsform-y-0');
  });
   $('.nav-bar-hamburger').click(function () {
      $('.hamburger-menu').toggleClass('d-block d-none');
      $('.hamburger-menu-close').toggleClass('d-block d-none');
    });
});