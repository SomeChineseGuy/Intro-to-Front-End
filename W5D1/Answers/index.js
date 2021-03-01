$(document).ready(function() {
  // Initialization
  var slideIndex = 0
  var slides = $('.slides-container').children('.slide')
  function showSlide(index) {
    $(slides[index]).fadeIn(2000)
  }
  function hideSlide(index) {
    $(slides[index]).fadeOut(2000)
  }
  showSlide(0)

  // Listeners
  // Event - hovering on slide
  // Notice here there are two events being listened to ie 'mouseenter' and 'mouseleave'
  $('.slide').on('mouseenter mouseleave', function() {
    $('.slide').toggleClass('blacked')
  })
  // Event - clicking 'hide slide' button
  $('.hide').click(function() {
    hideSlide(slideIndex)
  })
  // Event - clicking 'show slide' button
  $('.show').click(function() {
    showSlide(slideIndex)
  })
  // Event - clicking 'Previous' button
  $('.prev').click(function() {
    hideSlide(slideIndex)
    slideIndex--
    if(slideIndex < 0) slideIndex = slides.length - 1;
    showSlide(slideIndex)
  })
  // Event - clicking 'Next' button
  $('.next').click(function() {
    hideSlide(slideIndex)
    slideIndex++
    if(slideIndex >= slides.length) slideIndex = 0;
    showSlide(slideIndex)
  })
})
