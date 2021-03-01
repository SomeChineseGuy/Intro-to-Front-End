// Example one
function whatNumber(num) {
    if(num == 11) {
      console.log("Found it!", typeof num, num);
    } else {
      console.log("oh no!", typeof num, num);
    }
}

whatNumber("10" + 1);

function whatsMyName (name) {
    if(name == "Ali") {
        console.log("We Found Ali!");
    } else if (name === "Al") {
        console.log("Oh no!");
    }
}

whatsMyName("Al" + "i");

// Example two
var myName = "Eunice";
var myName = "Zuge";

console.log(myName);

// Example three
var myName = "Josh";

function whatsMyName(myName) {
  console.log(myName);
  var myName = "Erick";
  var myName = "Julie";
}

whatsMyName();

// Objects
var books= {
    bookOne: {
      title: "Harry Potter and the Prisoner of Azkaban",
      author: "J.K Rowling",
      releaseDate: "July 8, 1999",
      amazon: "4.6 / 5",
      goodreads: "4.54 / 5"
    },
    bookTwo: {
      title: "Twilight",
      author: "Stephenie Meyer",
      releaseDate: "October 5, 2005"
    }
}


Object.keys(books).forEach(function(key) {
  console.log(key, books[key])
});

// Array
var readingList = ["1984", "The Great Gatsby", "Lord of the Flies", "Charlotte’s Web", "The Hobbit"];
var mixedArray = ["string", true, 23, 37, false, "false"]

readingList.length()
mixedArray.length()

// Loops
var readingList = ["1984", "The Great Gatsby", "Lord of the Flies", "Charlotte’s Web", "The Hobbit"];
for (var i = 0; i < readingList.length; i++) {
    console.log(readingList[i])
}

// While  Loops
var count = 1;

while (count < 10) {
        console.log(count);
        count = count + 1;
}

// Bonus
var books= {
    bookOne: {
      title: "Harry Potter and the Prisoner of Azkaban",
      author: "J.K Rowling",
      releaseDate: "July 8, 1999",
      reviews: ["I loved it!", "Wow! It was amazing!"]
    },
    bookTwo: {
      title: "Twilight",
      author: "Stephenie Meyer",
      releaseDate: "October 5, 2005",
      reviews: ["I like Vampires!", "I like Werewolves!"]
    }
}

var books= {
    bookOne: {
      title: "Harry Potter and the Prisoner of Azkaban",
      author: "J.K Rowling",
      releaseDate: "July 8, 1999",
      reviews: ["I loved it!", "Wow! It was amazing!"],
      moreInfo: [goodCharacters= {
        main: "Harry",
        side: "Ron"
      },
      badCharacters = {
        main: "voldemort"
      }]
    },
    bookTwo: {
      title: "Twilight",
      author: "Stephenie Meyer",
      releaseDate: "October 5, 2005",
      reviews: ["I like Vampires!", "I like Werewolves!"],
      characters: [
        guys = {
          vampire: "Edward",
          wereWolf: "Jacob"
        }
      ]
    }
}
