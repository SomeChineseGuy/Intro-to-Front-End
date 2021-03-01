var persons = [
  {"name":"Colin",
  "city":"Surrey"},
 {"name":"Andrew",
  "city":"Calgary"},
 {"name":"Cameron",
  "city":"Vancouver"},
  {"name":"Emily",
  "city":"Toronto"},
  {"name":"Eric",
  "city":"Mexico"},
  {"name":"Jason",
  "city":"New York"},
  {"name":"Kaden",
  "city":"Spain"},
  {"name":"Kaylyn",
  "city":"Korea"},
  {"name":"Mar",
  "city":"France"},
  {"name":"Samantha",
  "city":"Germany"},
  {"name":"Alvin",
  "city":"World"},
];

$(document).ready(function(){
  // Start here!

  var apiKey = "1jkh238dj10wdmn27"
  $('.searchForm').submit(function(event) {
    event.preventDefault();
    // var input = $('.names').val()
    // for(var i = 0; i < persons.length; i++) {
    //   if(persons[i].name === input ) {
    //     $('.results').html('<h1>' + persons[i].name + '</h1><p> favourite city is ' + persons[i].city + '</p>');
    //     return true;
    //   } else {
    //     $('.results').html('<h1>Sorry no results found :(</h1>')
    //   }
    // }

    var input = $('.names').val()
    $.get('https://api.openweathermap.org/data/2.5/weather?units=metric&q='+ input +'&appid=' + apiKey, function (data) {
      console.log(data)

    })
  })



});
