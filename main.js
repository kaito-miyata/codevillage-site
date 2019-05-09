$(function() {
  $('#js-toggle_menu').on('click',function(){
    $(this).toggleClass('active');
    $('nav').toggleClass('active');
  })
})
