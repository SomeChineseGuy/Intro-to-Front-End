$(document).ready(function(){
// Write Our code here!

  //Step one: Target
  //Step two: Event Listener
  //Step Three: Retarget
  //Step four: Effect
  $('.box-one').click(function(){
    $('.box-two').slideUp(500)
    $(this).slideUp(500)
  })
  $('.box-black').click(function(){
    $('.box-one, .box-two').slideDown(500)
  })

  $('.form-submit').submit(function(event) {
    event.preventDefault()
    $('.hide').fadeIn(500)
  })

  // Target Box -four Event is going to be mouseenter Retarget is box-five

  $('.box-four').mouseenter(function() {
    $('.box-five').css('background-color', 'tomato')
  })
});
