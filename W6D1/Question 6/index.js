var persons = [
  {"name":"Nevada",
  "city":"Vancouver"},
 {"name":"Dylan",
  "city":"Calgary"},
 {"name":"Ivy",
  "city":"Vancouver"},
  {"name":"Mohammed",
  "city":"Toronto"},
  {"name":"Alvin",
  "city":"Mexico"},
  {"name":"Mu",
  "city":"New York"}
];

// Step 1 is Target
// Step 2 is event listener
// Step 3 is Retarget
// Step 4 is effect

var apiKey = '3b5c51a03cca3b792e0b9c218f807acd';

function callApi(name) {
  $.ajax({
    type:'POST',
    url:'https://aztro.sameerkumar.website?sign=' + name + '&day=today',
    success:function(data){
    console.log(data);
    return data
    }
  });
}

$(document).ready(function(){
  // Start here!
  $('.virgo').click(function() {
    callApi('virgo')
  })
  $('.yes').click(function() {
    $('.drink-search').fadeIn(500)
    $('.age-check').css('background-color', 'green')
  })
  $('.searchForm').submit(function(event) {
    event.preventDefault();
    var name = $('.names').val();
    // $.ajax({
    //   type: "POST",
    //   url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
    //   qs: {sign: 'aquarius', day: 'today'},
    //   beforeSend: function(xhr){
    //     xhr.setRequestHeader('x-rapidapi-key', '97b475cdc8msh0597cbdadba06b8p16c617jsn638aa02daa54')
    //     xhr.setRequestHeader('x-rapidapi-host', 'sameer-kumar-aztro-v1.p.rapidapi.com')
    //
    //    },
    //    success: function(data) {
    //      console.log(data)
    //    },
    // });

    // const settings = {
    // 	"async": true,
    // 	"crossDomain": true,
    // 	"url": "https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=aquarius&day=today",
    // 	"method": "POST",
    // 	"headers": {
    // 		"x-rapidapi-key": "97b475cdc8msh0597cbdadba06b8p16c617jsn638aa02daa54",
    // 		"x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com"
    // 	}
    // };
    //
    // $.ajax(settings).done(function (response) {
    // 	console.log(response);
    // });




  });
});
