var persons = [
  {"name":"Mathius",
  "city":"Josh"},
 {"name":"Maria",
  "city":"Calgary"},
 {"name":"Thain",
  "city":"Vancouver"},
  {"name":"Harkirat",
  "city":"Toronto"},
  {"name":"Alvin",
  "city":"Mexico"},
  {"name":"Gill",
  "city":"New York"},
  {"name":"Kim",
  "city":"Spain"},
  {"name":"Colin",
  "city":"Korea"},
  {"name":"Alona",
  "city":"France"},
];

$(document).ready(function(){
  // $('.searchForm').submit(function(event) {
  //   event.preventDefault()
  //   var name = $('.names').val();
  //   // Loop Over our Database
  //   for(var i = 0; i < persons.length; i++) {
  //     if(persons[i].name === name) {
  //       $('.results').html('<h1>' + persons[i].name + "'s Favourite city is "   + persons[i].city + '</h1>')
  //       return true;
  //       console.log('Hello!')
  //     } else {
  //       console.log('person not found');
  //       $('.results').html('<h1>Incorrect name</h1>')
  //     }
  //   }
  // })


  $('.searchForm').submit(function(event) {
    event.preventDefault();
    var signs = $('.names').val();
    console.log(signs);
    $.get('http://horoscope-lhl.herokuapp.com/horoscopes/' + signs, function(data) {
      $('.results').html('<h1>' + data.sign + '</h1><p> Your horoscope is ' + data.horoscope + '</p>' )
    })
  })
});
