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

/* document.addEventListener('DOMContentLoaded',  () => {
  
  const frame = document.getElementById('frameOne');

  const circle = document.createElement('div');
  const circleTwo = document.createElement('div');

  circle.classList.add('circle');
  circleTwo.classList.add('circleTwo');
  

  frame.appendChild(circle).style.left = "10px";
  frame.appendChild(circle).style.top = "300px";
  frame.appendChild(circleTwo).style.left = "300px";
  frame.appendChild(circleTwo).style.top = "300px";
}); */

/* var leftPos = 300;
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
/*
let myText = document.getElementById('textOne');
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

myButton.addEventListener('click', toggleText); */

/* let userName = " ";
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

console.log(eightBall); */


/* let myText = document.getElementById("myTextDiv");
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
/* 
// Get references to the circle elements
let circle1 = document.getElementById('circle1');
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
/* 
// Get references to the circle elements
let circle1 = document.getElementById('circle1');
let circle2 = document.getElementById('circle2');

// Initial positions and velocities
let position1 = { x: 50, y: 50 };
let position2 = { x: 50, y: 150 };
let velocity1 = { x: 2, y: 2 }; // Initial velocity of circle1
let velocity2 = { x: 3, y: 3 }; // Initial velocity of circle2
const gravity = 0.1; // Simulate gravity

// Move function that updates the position of the circles
function moveCircles() {
  // Update velocity with gravity
  velocity1.y += gravity;
  velocity2.y += gravity;

  // Update positions
  position1.x += velocity1.x;
  position1.y += velocity1.y;
  position2.x += velocity2.x;
  position2.y += velocity2.y;

  // Check for collisions with the floor
  let screenHeight = window.innerHeight;
  let screenWidth = window.innerWidth;
  if (position1.y + 50 > screenHeight) {
    position1.y = screenHeight - 50;
    velocity1.y *= -0.9; // Reverse and dampen velocity to simulate bounce
  }
  if (position2.y + 50 > screenHeight) {
    position2.y = screenHeight - 50;
    velocity2.y *= -0.9; // Reverse and dampen velocity to simulate bounce
  }

  // Check for collisions with the walls
  if (position1.x + 50 > screenWidth || position1.x < 0) {
    velocity1.x *= -1; // Reverse velocity to simulate bounce
  }
  if (position2.x + 50 > screenWidth || position2.x < 0) {
    velocity2.x *= -1; // Reverse velocity to simulate bounce
  }

  // Update the position of the circles
  circle1.style.left = position1.x + 'px';
  circle1.style.top = position1.y + 'px';
  circle2.style.left = position2.x + 'px';
  circle2.style.top = position2.y + 'px';
} 

// Set an interval to move the circles every millisecond (16ms = ~60fps)
setInterval(moveCircles, 16);
 */





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

document.addEventListener('DOMContentLoaded', function() {
  // Get the button element
  let toggleButton = document.getElementById('toggleDarkmode');

  // Function to toggle between dark and light mode
  function toggleDarkLightMode() {
      let body = document.body;

      // Check if dark mode is currently enabled
      if (body.classList.contains('dark-mode')) {
          // Switch to light mode
          body.classList.remove('dark-mode');
          body.classList.add('light-mode');
      } else {
          // Switch to dark mode
          body.classList.remove('light-mode');
          body.classList.add('dark-mode');
      }
  }

  // Add an event listener to the button
  toggleButton.addEventListener('click', toggleDarkLightMode);
});


function change() {
  // document.getElementsByTagName("h2") returns a NodeList of the <h2>
  // elements in the document, and the first is number 0:
  const header = document.getElementsByTagName("h2").item(0);

  // The firstChild of the header is a Text node:
  header.firstChild.data = "A dynamic document";

  // Now header is "A dynamic document".

  // Access the first paragraph
  const para = document.getElementsByTagName("p").item(0);
  para.firstChild.data = "This is the first paragraph.";

  // Create a new Text node for the second paragraph
  const newText = document.createTextNode("This is the second paragraph.");

  // Create a new Element to be the second paragraph
  const newElement = document.createElement("p");

  // Put the text in the paragraph
  newElement.appendChild(newText);

  // Put the paragraph on the end of the document by appending it to
  // the body (which is the parent of para)
  para.parentNode.appendChild(newElement);
}


function generateTable() {
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  // creating all cells
  for (let i = 0; i < 2; i++) {
    // creates a table row
    const row = document.createElement("tr");

    for (let j = 0; j < 2; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td");
      const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "2");
}


/**
 * 
 * INPUT OUTPUT
 */
/* function constructOutput(input) {
  let result ='';
  let count = 1;

  for ( let i = 0; i < input.length; i++) {
    if (input[i] === input[i+1]) {
      count++; 

    } else {
      result += input[i] + count;
      count = 1;
    }
  }
  return result;
};

let inputString = "aaabbcc";
let constructedOutput = constructOutput(inputString);

console.log(constructedOutput); */


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
