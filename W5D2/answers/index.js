$(document).ready(function(){
// Write Our code here!
  // Example one
  $('.box-one').click(function() {
    // this refers to '.box-one'
    $(this).css('background', 'teal' );
  });

  $('.box-two').click(function() {
    $('.box-three').css('background', 'blue' );
  });

  $('.box-three').click(function() {
    // Putting a Comma means we target 2 classes at once just like
    // in CSS
    $('.box-one, .box-two').slideUp(500);
  });

  $('.box-black').click(function() {
    $('.box-one, .box-two').slideDown(500);
  });

  // Example two
  $('form button').click(function() {
    // Event Prevent Default prevents page from submitting
    event.preventDefault();
    $('.hide').show(500)
    $('form input').css('background', 'white')
    // Val is the value of the input
    $('input').val("");
  });

  $('form input').on('focus', function() {
    // Focus is when we the Input is being selected
    $(this).css('background', 'red');
  });

  // Example three
  $('.box-four').on('mouseenter', function() {
    $('.box-four').addClass('black');
  });

  $('.box-four').on('mouseleave', function() {
    $('.box-four').removeClass('black');
  });
  // Ask what are two ways I can improve this code?

  // This is how we add both at once
  $('.box-four').on('mouseenter mouseleave', function() {
    $(this).toggleClass('black');
  });

  // Location stands for this page - reload is refresh
  $('.box-five').click(function() {
    // location.reload();
    // $('.heading').prepend("<p> I go at the start</p>")
    // $('.heading').append("<p> I go at the end</p>")
    // $('.list-item').after("<li> I go after</li>");
    $(this).html('<p>HELLO!</p>')
  });
  $('.box-five').click(function() {
    $(this).html()
  });
});
