/**
 *
 * array test
 */
/* const persons = [
  { name:"John", age: 20},
  { name:"Mary", age: 22}
];

const output = persons.map((persons) => {
  return `${persons.name} is ${persons.age} old.`
});

console.log(output); */
/* 
  let constructedOutput = document.getElementById("testOutput");
  constructOutput.innerHTML = ""; */

/*   function constructOutput(input) {
    let result = '';
    let count = 1;

    for (let i = 0; i < input.length; i++) {
      if (input[i] === input[i+1]) {
        count++;
      } else {
        result += input[i] + count;
        count = 1;
      }
    }
    return result;
  }

let inputString = "aa";
let constructedOutput = constructOutput(inputString);
console.log(constructedOutput); */

/* let mySpan = document.getElementById("myspan");


function countUp() {
  let count = parseInt(mySpan.innerHTML);
  count += 1; //
  mySpan.innerHTML =  count;
} */

/*   let cars = ['volvo', 'saab', 'honda'];

  let text = "";

  for (let i = 0; i < cars.length; i++){
    text += cars[0] + '<br>';
  };

  document.getElementById("demo").innerHTML = text; */

  /* ----------------------------------------------------------------*/

  /* function constructOutput(input) {
  let result = '';
  let count = 1;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      count++;
    } else {
      result += input[i] + count;
      count = 1;
    }
  }
  return result;
}

let inputString = "aaabbccccd";
let constructedOutput = constructOutput(inputString);

console.log(constructedOutput);


 */

/* let myStr = "hello world";
let strTest = myStr.toUpperCase();

console.log(strTest); */
/*
Input: aaabbccccd
Ouput: a3b2c4d1*/

/* let inputString = "aaabbccccd";

letcountString = inputString.length;

console.log(letcountString);
 */

/* function timesFive(num) {
    return num * 5;
  }
  
  const answer = timesFive(3); */
/*   function bar(x) {
    if (x < 2) {
      return "Less than two";
    } else if (x < 1) {
      return "Less than one";
    } else {
      return "Greater than or equal to two";
    }
  }
  console.log(bar(3));
  console.log(bar(1));
  console.log(bar(2));
 */

/*   function orderMyLogic(val) {
    if (val < 5)  {
      return "Less than 10";
    } else if (val < 10) {
      return "Less than 5";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  console.log(orderMyLogic(10)); */

/*   function constructOutput(input) {
    let result = '';
    let count = 1;
  
    for (let i = 0; i < input.length; i++) {
      if (input[i] === input[i + 1]) {
        count++;
      } else {
        result += input[i] + count;
        count = 1;
      }
    }
    return result;
  }
  
  let inputString = "aaabbccccd";
  let constructedOutput = constructOutput(inputString);
  
  console.log(constructedOutput);

function reverseString(str) { 
    reverseString(str[str.length - 1]);}; */

/* function myconstructOutput(input) {
  let output = '';
  let count = 1;

  for(let i = 0; i < input.length; i++ ) {
    if (input[i] === input[i + 1]) {
      count++;
    } else {
      output += input[i] + count;
      count = 1;
    }
  }
  return output;
};

let inputString = "aaaabbbccccdd";
let myconstructedOutput = myconstructOutput(inputString);

console.log(myconstructedOutput); */

/* let myWord = "abcdefghijklmnopqrstuvwxyz";
console.log(myWord.toUpperCase()); */
/* 
document.addEventListener('DOMContentLoaded',  () => {
  
  const frame = document.getElementById('frameOne');

  const circle = document.createElement('div');
  const circleTwo = document.createElement('div');

  circle.classList.add('circle');
  circleTwo.classList.add('circleTwo');
  

  frame.appendChild(circle).style.left = "10px";
  frame.appendChild(circle).style.top = "300px";
  frame.appendChild(circleTwo).style.left = "300px";
  frame.appendChild(circleTwo).style.top = "300px";
});

var leftPos = 300;
var start = function() {
  moveCircle = setInterval(move, 10);
}
var reset = function() {
  leftPos = 0;
  circle.style.left = leftPos + 'px';
}


function move() {
  circle++;
  circle.style.left = leftPos + "px";
   if (leftPos === window.innerWidth) {
    clearInterval(moveCircle); }
   
} */

/* let myText = document.getElementById('textOne');
let myButton = document.getElementById('btnOne');

const textOne = "<h1 class='text-danger'>Hello World!</h1>";
const textTwo = "<h1 class='text-danger'>Goodbye World!</h1>";

let isTextOne = true; // Flag to track the current state

function toggleText() {
  if (isTextOne) {
    myText.innerHTML = textTwo;
  } else {
    myText.innerHTML = textOne;
  }
  isTextOne = !isTextOne; // Toggle the flag
};

myButton.addEventListener('click', toggleText);

let userName = " ";
userName ? console.log("Hello " + userName + "!") : console.og("Hello!");

let userQuestion = " ";

console.log("Was that your Question :" + userQuestion + "?");

let randomNumber = Math.floor(Math.random() * 8);

console.log(randomNumber);

let eightBall = "";

switch (randomNumber) {
  case 0:
  console.log("It is certain");
  break;
  case 1:
  console.log("It is decidedly so");
  break;  
  case 2:
  console.log("It is certain");
  break;  
  case 3:
  console.log("Reply hazy try again");
  break;  
  case 4:
  console.log("Cannot predict now");
  break;  
  case 5:
  console.log("Do not count on it");
  break;  
  case 6:
  console.log("My sources say no");
  break;  
  case 7:
  console.log("Outlook not so good");
  break;
  case 8:
  console.log("Signs point to yes!")
  break;  
  default:
  console.log("retry...");
  break;
}

console.log(eightBall);

let myText = document.getElementById("myTextDiv");
let myButton = document.getElementById("myButtonDiv");

const textOne = "<h2 class='bg-danger'>Hello, Hello!</h2>";
const textTwo = "<h2>Goodbye, Goodbye!</h2>";

let isText = true;

function toggleText () {
  if (isText) {
    myText.innerHTML = textTwo;
   } else {
    myText.innerHTML = textOne;
   }
   isText = !isText;

}

myButton.addEventListener('click', toggleText); */

/**
 * moving circles like ball with gravity parameter
 *
 *
 */
// ----------------------------------------------------------------

// Get references to the circle elements
/* let circle1 = document.getElementById('circle1');
let circle2 = document.getElementById('circle2');


// Initial positions
let initialPosition = 50;
let position1 = initialPosition; // Initial left position of circle1
let position2 = initialPosition; // Initial left position of circle2

// Move function that updates the position of the circles
function moveCircles() {
  position1 += 10; // Move circle1 10px to the right
  position2 += 10; // Move circle2 10px to the right

  // Update the left position of the circles
  circle1.style.left = position1 + 'px';
  circle2.style.left = position2 + 'px';

  // Check if circles are off-screen
  let screenWidth = window.innerWidth;
  if (position1 > screenWidth || position2 > screenWidth) {
    // Reset positions if they are off-screen
    position1 = initialPosition;
    position2 = initialPosition;
  }
}
// Set an interval to move the circles every millisecond (1000ms = 1 second)
setInterval(moveCircles,30); */

/* function createTable() {
const blockchainDisplay = document.getElementById(`BlockchainDisplay`);
blockchainDisplay.innerHTML = ''; // Clear previous display.


const table = document.createElement('table');
  table.className = 'table table-striped-columns';

    // Create table header
    const headerRow = table.insertRow(0);
    const headers = ['Block Number', 'Timestamp', 'Data', 'Value', 'Currency', 'Hash', 'Previous Hash', 'Total Currency'];
    headers.forEach(headerText => {
      const header = document.createElement('th');
      header.textContent = headerText;
      headerRow.appendChild(header);
    });

      // Append the table to the display element
  blockchainDisplay.appendChild(table);
} */

/*   let persons = [
    { name: 'John', age: 20 },
    { name: 'Anna', age: 43 },
    { name: 'Stan', age: 33 }
  ];

let i = [1];

for (let i = 0; i < persons.length; i++) {
  console.log(persons[i].name + " is " + persons[i].age + " years old.");
};

// Log the length of the array
console.log("Total number of persons: " + persons.length); */