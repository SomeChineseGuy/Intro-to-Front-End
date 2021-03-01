### W5D1 Intro to jQuery

### To Do
- [] Create and manipulate elements on a page using jQuery
- Collect User input via Forms

### JS Review

## The Dom
- Document Object  Model
- A Way for browser to structure  a  webpage
- Browser read an HTML file and converts it to data structure known as a DOM

## Adding Javascript/jQuery to our project

### $ Money Money!!
- $ Is the short hand for jQuery

`jQuery(document).ready(function(){ })`

`$(document).ready(function(){ })`

### Selecting with jquery
- Tags, Class, ID, Siblings

``$('main')`` // Selection by tagname - selects all 'main' Elements

``$('.slide')`` // Selection by class - selects all elements with class='slide'

``$('#slides-container')`` // Selection by id - selects the element with id='slides-container'

``$('article ~ article')`` // General Sibling selector

## Add Event Listener
Syntax
$(selector string).on(event string, function() {
  // do these stuffs when event(s) specified happen(s)
})

$('button').on('click', function() {
  console.log('Im clicked')
})

### Adding or removing Classes
We use jQuery to Add or remove class

$('.slide').on('mouseenter', function() {
  $('.slide').addClass('blacked')
})
