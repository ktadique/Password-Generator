// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//========================================================================
//Password generator Psuedocode
//------------------------------------------------------------------------
//user clicks generate password

//generator prompts options:
// password length
//   prompts for input
//    password length must be between 10-64
//    parse input into a number
//    if not error message (must be at least 10/can not be  more than 64)
// Validate:
//  lowercase
// Validate:
//  uppercase
// Validate:
//  numerical
// Validate:
//  special characters
//  if none are selected another error message

//  use math.random on all the options to randomly select a character
//    use math.random to randomly position selected random characters

//generator creates password based on the selected options

//create a jumbler at the end to randomize the output string
//========================================================================

let lengthInput = 0;
let passLowerCase = false;
let passUpperCase = false;
let passNumeric = false;
let passSpecial = false;

// Function to prompt user for password length
function getPasswordLength() {
  // do...while = executes the body of the loop first, then the while condition is evaluated
  do {
    //parseInt ensures that the input will always be a number
    lengthInput = parseInt(
      prompt(
        "How many characters would you like your password to contain? (Must be between 10-64)"
      )
    );
    if (lengthInput < 10 || lengthInput > 64 || isNaN(lengthInput)) {
      alert("Password must be between 10-64 characters long.");
    }
  } while (lengthInput < 10 || lengthInput > 64 || isNaN(lengthInput));
  //if above is true, the body of do statement is executed again
  //if not, loop stops.
}

// Function to prompt user for password options
function getPasswordOptions() {
  do {
    passLowerCase = confirm("Would you like to include lower case characters?");
    passUpperCase = confirm("Would you like to include upper case characters?");
    passNumeric = confirm("Would you like to include numbers?");
    passSpecial = confirm("Would you like to include special characters?");
    //if no option is selected, error:
    if (!passLowerCase && !passUpperCase && !passNumeric && !passSpecial) {
      alert("You must have at least one type of character");
    }
  } while (!passLowerCase && !passUpperCase && !passNumeric && !passSpecial);
  //if above is true, the body of do statement is executed again
  //if not, loop stops.
}

// Function for getting a random element from an array
function getRandom(arr) {
  // get a random index value from an array
  let randomIndex = Math.floor(Math.random() * arr.length);
  // get a random character
  let randomCharacter = arr[randomIndex];

  return randomCharacter;
}

// Function to shuffle an array
function shuffleArray(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

function assemblePassword() {
  // Create an empty array which will contain the items from the selected options.
  let prejumble = [];

  while (true) {
    if (passLowerCase) {
      prejumble.push(getRandom(lowerCasedCharacters));
      //checks to see if the length of prejumble is as long as lengthinput, if true then stop
      if (prejumble.length === lengthInput) {
        break;
      }
    }
    if (passUpperCase) {
      prejumble.push(getRandom(upperCasedCharacters));
      if (prejumble.length === lengthInput) {
        break;
      }
    }
    if (passNumeric) {
      prejumble.push(getRandom(numericCharacters));
      if (prejumble.length === lengthInput) {
        break;
      }
    }
    if (passSpecial) {
      prejumble.push(getRandom(specialCharacters));
      if (prejumble.length === lengthInput) {
        break;
      }
    }
  }
  return prejumble;
}

// Function to generate password with user input:
//Order of operation:
function generatePassword() {
  //Get password length
  getPasswordLength();
  //Get password options
  getPasswordOptions();

  //Get the assembled, prejumbled password
  //Shuffle the password to ensure it is truly randomized
  //Merge the array into a string with no commas and return the final password.
  return shuffleArray(assemblePassword()).join("");
}

//DO NOT TOUCH
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
