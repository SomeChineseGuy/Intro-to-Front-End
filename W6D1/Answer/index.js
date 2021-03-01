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
  $('.searchForm').submit(function(){
    event.preventDefault();
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



      // Second Section
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

      var sign = $('.names').val();
      $.get('http://horoscope-lhl.herokuapp.com/horoscopes/' + sign, function(data, error) {
        console.log(data);
        console.log(error)
        $('.results').html('<h1>' + data.sign + '</h1><p>Your horoscope today is "' + data.horoscope + '"</p>');
      })

  });
});
