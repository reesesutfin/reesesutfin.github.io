$(function(){
    $('.fadein img:gt(0)').hide();
    setInterval(function(){
      $('.fadein :first-child').fadeOut(750)
         .next('img').fadeIn(750)
         .end().appendTo('.fadein');}, 
      3500);
});