### W5D1 Intro to jQuery

### To Do
- [] Create and manipulate elements on a page using jQuery
- Collect User input via Forms

### JS Review

### The DOM
- Document Object Model
- A way for browsers to structure a webpage
- Browser reads an HTML file, it converts it to a data structure known as the Document

## What is jQuery?
- jQuery is one of the worlds most populator JS frameworks
- Basically its an extra layer on top of vanilla Javascript and gives
you a library that you normally won't have

### Adding Javascript to Our Project


### $ Money Money Money!
- The short hand for jQuery is $, $ = jQuery
so rather than saying

`jQuery(document).ready(function(){ })`

We can just say

`$(document).ready(function(){ })`

### Selecting elements with jquery
- We can use the same selector as we did with CSS
- Tags, Class, ID, Siblings

``$('main')`` // Selection by tagname - selects all 'main' Elements

``$('.slide')`` // Selection by class - selects all elements with class='slide'

``$('#slides-container')`` // Selection by id - selects the element with id='slides-container'

``$('article ~ article')`` // General Sibling selector

### Add event Listener
Syntax
$(selector string).on(event string, function() {
  // do these stuffs when event(s) specified happen(s)
})

// Example 1: Click event
$('button').on('click', function() {
  console.log('Im clicked')
})

// With shorthand
$('button').click(function() {
  console.log('I have been clicked too!')
})

// Example 2: Submit event
$('form').on('submit', function() {
  console.log('submitting this form')
})
