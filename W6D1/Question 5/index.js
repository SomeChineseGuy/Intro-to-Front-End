var persons = [
  {"name":"Eric",
  "city":"Vancouver"},
 {"name":"Sheena",
  "city":"Calgary"},
 {"name":"Aaron",
  "city":"Edmonton"},
  {"name":"Connor",
  "city":"Toronto"},
  {"name":"Alvin",
  "city":"Mexico"},
  {"name":"Etebom",
  "city":"New York"},
  {"name":"Jolie",
  "city":"Spain"},
  {"name":"Kevin",
  "city":"Korea"},
  {"name":"Adriana",
  "city":"France"},
  {"name":"Anderi",
  "city":"Hong Kong"},
  {"name":"Alpha",
  "city":"Ireland"},
  {"name":"Jessica",
  "city":"London"},
  {"name":"Saeed",
  "city":"New Zealand"},
];

var apiKey = '3b5c51a03cca3b792e0b9c218f807acd'

$(document).ready(function(){
  // Start here!
  $('.searchForm').submit(function(e) {
    e.preventDefault()
    var name = $('.names').val()
    for(var i = 0; i < persons.length; i++) {
      if(name === persons[i].name) {
        return $('.results').html("<h1>This is " + persons[i].name + "</h1><p> Who's favourite city is " + persons[i].city + "</p>")
      } else {
        $('.results').html('<h1>Sorry no results</h1>')
      }
    }

    $.get('https://api.openweathermap.org/data/2.5/weather?units=metric&q=' + name + '&appid=' + apiKey, function(data, error) {
      console.log(data)
      $('.results').html('<h1>The City is' + data.name + ' and todays weather is ' + data.weather[0].main +  '</h1>')

    })

  })


});
