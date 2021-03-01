var persons = [
  {"name":"alvin",
  "city":"Vancouver"},
  {"name":"beatrice",
  "city":"Mexico"},
  {"name":"liam",
  "city":"New York"},
  {"name":"nhi",
  "city":"Spain"},
  {"name":"robert",
  "city":"Korea"},
  {"name":"yin",
  "city":"South Africa"},
  {"name":"yury",
  "city":"London"},
  {"name":"dao",
  "city":"France"},
  {"name":"ting",
  "city":"Russia"},
  {"name":"tram",
  "city":"Toronto"},
  {"name":"nu",
  "city":"Seattle"},
];

$(document).ready(function(){
  $('.searchForm').submit(function(event){
    event.preventDefault()
    // console.log(persons)
    var sign = $('.names').val()
    // console.log(name)

    // for(var i = 0; i < persons.length; i++) {
    //   // console.log(persons[i].name)
    //   if(persons[i].name === name) {
    //     $('.results').html('<h1>' + persons[i].name + '</h1><p> favourite city is ' + persons[i].city + '</p>')
    //     return true;
    //   } else {
    //     $('.results').html('<h1> Sorry no results found</h1>')
    //   }
    // }

    // $.get('http://horoscope-lhl.herokuapp.com/horoscopes/' + name, function(data, error) {
    //   if(error) {
    //     console.log(error)
    //   } else {
    //     console.log(data.horoscope)
    //   }
    // })


    $.get('http://horoscope-lhl.herokuapp.com/horoscopes/' + sign, function(data, error) {
      console.log(data);
      if(error) {
        console.log(error)
      }
      $('.results').html('<h1>' + data.sign + '</h1><p>Your horoscope today is "' + data.horoscope + '"</p>');
    })




  })
});
