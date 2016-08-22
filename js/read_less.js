$(function(){

  $('.read_less').click(function(event){

    event.preventDefault();
    $(this).parents('.project').find('.more_text').hide();
    $(this).parents('.project').find('.read_more_btn').show();
    console.log('Read less');
  })
});
