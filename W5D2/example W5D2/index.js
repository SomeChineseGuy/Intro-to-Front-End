$(document).ready(function(){
// Write Our code here!
  $('.box-one').click(function(){
    $(this).css('background', 'teal');
  });

    $('.box-two').click(function(){
      $('.box-three').css('background', 'blue');
    });

    $('.box-three').click(function(){
      $('.box-one, .box-two').slideUp(500);
    });

    $('.box-black').click(function(){
      $('.box-one, .box-two').slideDown(500);
    });

    $('form button').click(function() {
      event.preventDefault();
      $('.hide').show(500);
      $('form input').css('background', 'white').val("");
    });

    $('form input').on('focus', function(){
        $(this).css("background", 'red');
    });

    $('.box-four').on('mouseenter mouseleave', function(){
      $(this).toggleClass('black');
    });



for (var key in weather)

    $('.box-five').click(function() {
      // $('.heading').append('<p>Hello, I am at the end</p>').prepend('<p>Hello, I am at the start</p>')
      // $('.heading').before('<p>Hello This is before</p>').after('<p>Hell this is after</p>');
      // $('.heading').replaceWith("<p>Hi I am New!</p>");
      $('.heading').html("<p>Hello!</p>");
      $('.box-four').html("<p>Hello!</p>");


    });





});
