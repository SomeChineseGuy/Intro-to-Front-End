// For review

var obj= {
  hello = function(){ console.log("Hello")},
  googbye = function() {console.log("Goodbye")}
}

// Loops
arr= [1, 2, 3,  4, 5]
for(var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


number = 0;
while(number > 50) {
  number = number + 1;
  console.log(number)
}

1 += 2

x += y is shorthand for x = x + y;

// Functions Two way
// When writing functions in JS We use camelCase
// HTML/CSS Use kebab-case words-look-like-a-kebab
// snake_case, TitleCase/PascalCase

function sayHello(name) {
  console.log('Hello ' + name)
}

sayHello("Sahand")


// Takes a function as an arguement and invokes it inside
var secondFunction = function(putFunctionInHere) {
  putFunctionInHere('Justine');
}

secondFunction(sayHello);
secondFunction(console.log);

console.log(console);


// Homework // REVIEW:
var foods = ["pizza", "celery", "bananas", "pizza", "lettuce", "cookies", "pizza"]

function wordCount(wordsArray, searchWord) {
  // Loop throught the Array
  // Write an if statement if it matches increase a number by one
  var newWord = searchWord.toLowerCase();
  var number = 0;
  for(var i = 0; i < wordsArray.length; i++) {
    if(newWord === wordsArray[i]) {
      number += 1;
      console.log(wordsArray, newWord);
    }
  }
  console.log(number);
  // console.log(wordsArray, searchWord);
}


number = 1;
while(number < 100) {
  if(number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
    number += 1;
  } else if(number % 3 === 0) {
    console.log("Fizz");
    number += 1;
  } else if(number % 5 === 0) {
    console.log("Buzz");
    number += 1;
  } else {
    console.log(number)
    number += 1;
  }
}
wordCount(foods, "Pizza");



function letterValue(str){
   var newStr = str.toLowerCase();
   console.log(newStr)
   var annum = {
     a:2,b:2,c:2,d:3,e:3,f:3,g:4,h:4,i:4,j:5,k:5,l:5,m:6,n:6,o:6,p:7,q:7,r:7,s:7,t:8,u:8,v:8,w:9,x:9,y:9,z:9
   }
   if (newStr.length == 1) return annum[newStr];
   return newStr.split('').map(letterValue);
 }
letterValue('Lighthouse')


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
