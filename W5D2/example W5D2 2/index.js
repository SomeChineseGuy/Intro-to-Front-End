function nameOfCity(city) {
  '<div><p>Name of City is' + city.name  + 'and the weather is ' city.weather
}



$(document).ready(function(){

  $('.box-one').click(function() {
    $(this).css('background', 'teal')
  })

  $('.box-two').click(function() {
    $('.box-three').css('background', 'blue')
  })

  $('.box-three').click(function() {
    $('.box-one, .box-two').slideUp(500)
  })

  $('.box-black').click(function() {
    $('.box-one, .box-two').slideDown(500)
  })

  $('.form-submit').on('submit', function(event) {
    event.preventDefault();
  })

  $('.box-four').on('mouseenter', function() {
    $(this).css('background', 'tomato')
  })

  $('.box-five').on('mouseenter mouseleave', function() {
    $(this).toggleClass('black')
  })

  var name = 'alvin';
  function myName() {
    console.log(name)
  }

  myName()





});
