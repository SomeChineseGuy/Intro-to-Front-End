// Yellow Page
function letterConverter(str){
    if (str.length !== 10) {
      return false;
    }

    var arr = str.toLowerCase().split('');
    var num = '';

    for (var i = 0; i < arr.length; i++) {
      if( arr[i] === 'a' || arr[i] === 'b' || arr[i]==='c') {
        num += 2;
      } else if (arr[i] === 'd' || arr[i] === 'e' || arr[i] ==='f'){
        num += 3;
      } else if (arr[i] === 'g' || arr[i] === 'h' || arr[i] ==='i'){
        num += 4;
      } else if (arr[i] === 'j' || arr[i] === 'k' || arr[i] ==='l'){
        num += 5;
      } else if (arr[i] === 'm' || arr[i] === 'n' || arr[i] ==='o'){
        num += 6;
      } else if (arr[i] === 'p' || arr[i] === 'q' || arr[i] ==='r' || arr[i] ==='s'){
        num += 7;
      } else if (arr[i] === 't' || arr[i] === 'u' || arr[i] ==='v'){
        num += 8;
      }
      else if (arr[i] === 'w' || arr[i] === 'x' || arr[i] ==='y' || arr[i] === 'z'){
        num += 9;
      }
    }
    return num;
}

letterConverter("Lighthouse")

// Yellow Page part 2
var letters = {
  a:2, b:2, c:2, d:3, e:3, f:3, g:4, h:4, i:4, j:5, k:5, l:5, m:6, n:6, o:6,
  p:7, q:7, r:7, s:7, t:8, u:8, v:8, w:9, x:9, y:9, z:9 
}

function letterConverter(str){
    if (str.length !== 10) {
      return false;
    }

    var arr = str.toLowerCase().split('');
    var space = []; // Set a space to place all the numbers
    var numbers = 0; // Set a default number 

    for(var i = 0; i < arr.length; i++) {
      numbers = letters[arr[i]] 
      console.log(numbers)
      space.push(numbers) // This adds each number to an array
    }
    console.log(space)
    return space.map(String).join('') // Finally convert each number into a string and join the string together into one
}

letterConverter("Lighthouse")


// Word Count
var foods = ["pizza", "celery", "bananas", "pizza", "lettuce", "cookies", "pizza"]

function wordCount(wordsArray, searchWord) {
  var count = 0;

  for (var i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === searchWord) {
      count++
    }
  }

  return count;
}

wordCount(foods, 'apples');

// Fizz Buzz
for(var i = 1; i <= 100; i++) {
    if(i % 15 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}