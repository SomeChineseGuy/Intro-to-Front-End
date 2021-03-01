// This is our fake data
var persons = [
  {"name":"Ximena",
  "city":"New York"},
  {"name":"Elan",
  "city":"Vancouver"},
 {"name":"Scotty",
  "city":"Calgary"},
  {"name":"Anita",
  "city":"Toronto"},
  {"name":"Dan",
  "city":"Canada"},
  {"name":"Bri",
  "city":"Mexico"},
  {"name":"Diana",
  "city":"France"},
  {"name":"Alvin",
  "city":"New West"}
];

$(document).ready(function(){
  // Start here!
  $('.searchForm').submit(function(event) {
    event.preventDefault();
    // var name = $('.names').val();
    // $('.names').val("")
    // for(var i = 0; i < persons.length; i++) {
    //   if(name === persons[i].name) {
    //     $('.results').empty();
    //     $('.results').append(`<p>This is ${persons[i].name}</p>`)
    //     $('.results').append(`<p> and ${persons[i].name}'s favourite city is ${persons[i].city}`)
    //     return true
    //   } else {
    //     $('.results').empty();
    //     $('.results').append(`<p>Sorry no results found</p>`)
    //   }
    // }
    var name = $('.names').val()
    $('.names').val("")
    var apiKEY = '3b5c51a03cca3b792e0b9c218f807acd';
    console.log(apiKEY)
    $.post(`https://aztro.sameerkumar.website?sign=${name}&day=today`, function (data) {
      console.log(data)

    })
  })
});
