jQuery(document).ready(function($) {
// Starting condition when page loads
$('.tabs-stage div').hide();
$('.tabs-stage div:first').show();
$('.tabs-stage div:first').addClass('active');
$('.tabs-nav li:first').addClass('tab-active');

// condition for tab click
$('.tabs-nav a').on('click', function(event){
  event.preventDefault();
  $('.tabs-nav li').removeClass('tab-active');
  $(this).parent().addClass('tab-active');
  $('.tabs-stage div').hide();
  $('.tabs-stage div').removeClass('active');
  $($(this).attr('href')).addClass('active');
  $($(this).attr('href')).fadeIn();
});
});