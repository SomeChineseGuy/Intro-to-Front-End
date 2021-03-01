var persons = [
  {"name":"Belkis",
  "city":"New York"},
  {"name":"Shawn",
  "city":"Vancouver"},
 {"name":"Nestor",
  "city":"Calgary"},
  {"name":"Suzie",
  "city":"Toronto"},
  {"name":"Alvin",
  "city":"Canada"}
];

// Target
// Event
// Retarget Not this time
// Effect Not this time

var apiKey = 'dsow3jfb223452d';

$(document).ready(function(){
  // Start here!
  // console.log("Hello")
  $('.searchForm').submit(function(event) {
    event.preventDefault();
    var searchName = $('.names').val();

    $.get('https://api.openweathermap.org/data/2.5/weather?units=metric&q=' + searchName + 'appid=' + apiKey, function (data) {

      if(data.city === searchName) {
        // Correct Search Results
      } else {
        // Incorrect Search Results
      }
    })

      for(var i = 0; i < persons.length; i++) {
      // console.log(persons[i])
      if(searchName === persons[i].name) {

        return $('.results').replaceWith(
          // "<div class='results'><h2>" + persons[i].name + " favourite city is: " + persons[i].city  "</h2></div>"
          `<div class='results'><h2>  ${persons[i].name}  favourite city is:   ${persons[i].city}  </h2></div>`
        )
      } else {
        $('.results').replaceWith("<div class='results'><h2> Could not find anyone. Please try again. </h2></div>")

      }
    }
  })
});
