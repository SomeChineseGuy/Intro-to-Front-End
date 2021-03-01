// Info
var persons = [
  {"name":"Josh",
  "city":"Vancouver"},
 {"name":"Ali",
  "city":"Calgary"},
 {"name":"Janelle",
  "city":"Vancouver"},
  {"name":"Zuge",
  "city":"Toronto"},
  {"name":"Alvin",
  "city":"Mexico"},
  {"name":"Sahand",
  "city":"New York"},
  {"name":"Catherin",
  "city":"Spain"},
  {"name":"Christy",
  "city":"Korea"},
  {"name":"Julie",
  "city":"France"},
  {"name":"Eunice",
  "city":"Hong Kong"},
  {"name":"Justine",
  "city":"Ireland"},
  {"name":"Erick",
  "city":"London"},
];

$(document).ready(function(){
// Write Our code here!
  console.log("Can you see me?");
  $('.info-button').click(function() {
    event.preventDefault();
    $('.add-content').append('<p> Alvin! </p>');
    $('.add-content').prepend('<p> Sneaky </p>');
  });

  $('.learn-button').click(function() {
    event.preventDefault();
    console.log("Hi!")
    $('.middle').before("<li> I go before my siblings </li>")
    $('.middle').after("<li> I go after my siblings </li>")
    // Removes everything and replaces it
    // $('.second-info').html('<h1> Everything is gone?! </h1> <p> This is sad :( </p>');
    // Gets content from every item with class "second-info" - skipping
    // any HTML tags and just returning plain text.
  });

  $('.url-button').click(function() {
    event.preventDefault();
    $('.location').attr('href', 'https://www.mlb.com/');
  });

  $('.remove-button').click(function() {
    event.preventDefault();
    // This Removes
    // $('h1').remove();
    // This Replaces
    // $('.replace-me h1').replaceWith('<p>Not telling!</p>');
    // Removes everything and replaces it
    // $('.replace-me').html('<h1> Everything is gone?! </h1> <p> This is sad :( </p>');
    // Gets content from every item with class "second-info" - skipping
    // any HTML tags and just returning plain text.
    // $('.replace-me').text('Not telling!');
  });

  $('form').submit(function(event) {
  event.preventDefault()
  // First thing you do ALWAYS console.log your data
  console.log(persons)
  // Set a variable for the value
  var person = $('.names').val();
  // Loop over the array
  // Same as for (var key in persons)
   for (var key = 0; key < persons.length; key ++) {
     // Check If the names match
     if(persons[key].name === person) {
      $('.results').html('<h1>' + persons[key].name + '</h1><p>favourite city is ' + persons[key].city + '</p>');
      // Stops the Loop Once it makes a match
      // Remember to show what happens otherwise
      return true;
      } else {
        $('.results').html('<h1> Sorry No results found</h1>');
      }
    }
  })
});
