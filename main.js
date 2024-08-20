

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
setInterval(moveCircles, 20);

// ----------------------------------------------------------------



document.addEventListener('DOMContentLoaded', function () {
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





/*   function compressOutput(input) {
    let result = "";
    let count = 1;

    for(let i = 0; i < input.length; i++) {
      if(input[i] === input[i+1]) {
        count++
      } else {
        result += input[i] + count;
        count = 1;
      }
    } return result

  }

  let inputStringOne = "aabbccc";
  let compressedOutput = compressOutput(inputStringOne);
  console.log(compressedOutput); */


/* MAGIC DICE (start commented out my start) --------------------------------------*/

/*   let myDiv = document.getElementById("mydiv");
  myDiv.innerHTML = Math.random().toString;
  myDiv.style.color = "green";
  myDiv.style.fontSize = "2rem";
myDiv.style.position = "relative";
myDiv.style.left = "8rem";



let diceBtn = document.getElementById("dBtn");
diceBtn.addEventListener("click", function magicDice() {
  myDiv.Math.random();
}); */

document.addEventListener('DOMContentLoaded', function () {
  let myDiv = document.getElementById("mydiv");
  let diceBtn = document.getElementById("dBtn");

  function magicDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1; // Generate a number between 1 and 6
    myDiv.innerHTML = randomNumber;
    myDiv.style.display = 'flex';
    myDiv.style.alignItems = 'center';
    myDiv.style.justifyContent = 'center';
    myDiv.style.fontSize = '4rem'; // Large font size for the number
  }

  diceBtn.addEventListener("click", magicDice);
});


/* Dice END -------------------------------- --------------------------------*/

/* Write a function that takes a string and returns the string where each character is followed by its ASCII value.*/

function charWithAscii(input) {
  let resulttest = "";
  for (let i = 0; i < input.length; i++) {
    resulttest += input.charCodeAt(i);
  }
  return resulttest;

}

let testString = "abc";
console.log(charWithAscii(testString));

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

let inputString = "aaaabbcc";
let constructedOutput = constructOutput(inputString);

console.log(constructedOutput); */

function constructOutput(input) {
  let result = '';
  let count = 1;

  for (let i = 0; i < input.length; i++) {

    if (input[i] === input[i + 1]) {
      count++
    } else {
      result += input[i] + count;
    }

  } return result;
}

let inputString = "aabbbddcc";
let constructedOutput = constructOutput(inputString);

console.log(constructedOutput);

let mySecondBtn = document.getElementById("mySecondBtn");
let myNewDiv = document.getElementById("myNewDiv");
myNewDiv.innerHTML = "<h1 class=''></h1>";
/* 
let isTrue = true;
isTrue = !isTrue; */

function toggleDiv() {

  if (myNewDiv.style.display === "none" || myNewDiv.style.display === "") {
    myNewDiv.style.display = "block";
  } else {
    myNewDiv.style.display = "none";
  }


}

mySecondBtn.addEventListener("click", toggleDiv);


/* node.js --------------------------------*/



/* 
function compressOutput(input) {
  let result = "";
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    if(input[i] === input[i+1]) {
      count++;
    } else {
      result += input[i] + count;
    }
} return result;
};

let inputString ="aabbcccccccccccc";
let compressedOutput = compressOutput(inputString);

console.log(compressedOutput); */

/* ---------------------------------------------------------------- */

function compressOutput(input) {
  let result = "";
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

let inputStringThree = "gaudenz";
let compressedOutput = compressOutput(inputStringThree);

console.log(compressedOutput);

