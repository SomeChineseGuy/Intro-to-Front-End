var persons = [
  {"name":"alvin",
  "city":"Vancouver"},
  {"name":"braeden",
  "city":"Mexico"},
  {"name":"vera",
  "city":"New York"},
  {"name":"chris",
  "city":"Spain"},
  {"name":"jake",
  "city":"Korea"},
  {"name":"jaquelin",
  "city":"Japan"},
];

$(document).ready(function(){
  $('.searchForm').on('submit', function(){
    event.preventDefault();
    var drinks = $('.names').val().toLowerCase();
    // for(var i = 0; i < persons.length; i++) {
    //   if(name === persons[i].name) {
    //     $('.results').html(
    //       "<h1 class='names-results'>'s"  + persons[i].name + ' favourite city is ' + persons[i].city + '</h1>'
    //     )
    //     return true;
    //   } else {
    //     $('.results').html('<h1>Sorry no results are found! :(</h1>')
    //   }
    // }

    $.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drinks, function(data, error) {
      console.log(data);
      console.log(error);

    })

  })
});








//
// $.get('http://horoscope-lhl.herokuapp.com/horoscopes/' + sign, function(data, error) {
//   console.log(data);
//   $('.results').html('<h1>' + data.sign + '</h1><p>Your horoscope today is "' + data.horoscope + '"</p>');
// })
