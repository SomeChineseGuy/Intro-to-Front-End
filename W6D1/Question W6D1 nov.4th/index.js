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
  $('.search').click(function(){
    event.preventDefault();
    var sign = $('.names').val();
    // This is going to loop over my Database to find
    // a matching name

    // for(var i = 0; i < persons.length; i++) {
    //   if(name === persons[i].name) {
    //     $('.results').html("<h1>" + name + " Favourite city is " + persons[i].city +  "</h1>");
    //     return  true;
    //   } else {
    //     $('.results').html("<h1>Sorry Your search was not found! :( Please try again</h1>")
    //   }
    // }
    $.get('http://horoscope-lhl.herokuapp.com/horoscopes/' + sign, function(data, error) {
      console.log(data);
      $('.results').html('<h1>' + data.sign + '</h1><p>Your horoscope today is "' + data.horoscope + '"</p>');
    })
  });
});
