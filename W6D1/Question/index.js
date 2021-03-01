var persons = [
  {"name":"Alesandria",
  "city":"Vancouver"},
 {"name":"Anna",
  "city":"Calgary"},
 {"name":"Benny",
  "city":"Vancouver"},
  {"name":"Brandon",
  "city":"Toronto"},
  {"name":"Garry",
  "city":"Mexico"},
  {"name":"Jing",
  "city":"New York"},
  {"name":"Justin",
  "city":"Spain"},
  {"name":"Kristen",
  "city":"Korea"},
  {"name":"Lucas",
  "city":"France"},
  {"name":"Mattias",
  "city":"Hong Kong"},
  {"name":"Mridula",
  "city":"Ireland"},
  {"name":"Nic",
  "city":"London"},
  {"name":"Pratik",
  "city":"Sydney"},
  {"name":"Sven",
  "city":"London"},
  {"name":"Vivian",
  "city":"Wellington"},
  {"name":"YJ",
  "city":"New Jersey"},
];

$(document).ready(function(){
  $('.searchForm').submit(function(){
    event.preventDefault();
    // var person = $('.names').val();
    // for(var key in persons) {
    //   if(persons[key].name === person) {
    //     $('.results').html('<h1>'+ persons[key].name + '</h1><p>favourite city is ' + persons[key].city + '</p>');
    //     return true;
    //   } else {
    //     $('.results').html('<h1>Sorry results not found</h1>')
    //   }
    // }


        // Aquarius
        // Pisces
        // Aries
        // Taurus
        // Gemini
        // Cancer
        // Leo
        // Virgo
        // Libra
        // Sorpio
        // Sagittarius
        // Capricorn


        var drink = $('.names').val();
        $.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=', function(data) {
          for(let i = 0; i < data.drinks.length; i++) {
            console.log(data.drinks[i]);
          }
        })
  })
});
