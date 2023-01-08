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
//
//    if none are selected another error message

//  use math.random on all the options to randomly select a character
//    use math.random to randomly position selected random characters

//generator creates password based on the selected options

//create a jumbler at the end to randomize the output string
//========================================================================

let lengthInput = 0;
let passLowerCase;
let passUpperCase;
let passNumeric;
let passSpecial;

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
    if (lengthInput < 10 || lengthInput > 64) {
      alert("Password must be between 10-64 characters long.");
    }
  } while (lengthInput < 10 || lengthInput > 64);
  //if above is true, the body of do statement is executed again
  //if not, loop stops.

  /*
  //makes sure that the while loop runs at least once
  lengthInput = 0;
  while (lengthInput < 10 || lengthInput > 64) {
    //parseint ensures that the input will always be a number
    lengthInput = parseInt(
      prompt(
        "How many characters would you like your password to contain? (Must be between 10-64)"
      )
    );
    if (lengthInput < 10 || lengthInput > 64) {
      alert("Password must be between 10-64 characters long.");
    }
  }*/
}

// Function to prompt user for password options
function getPasswordOptions() {
  do {
    passLowerCase = confirm("Would you like to include lower case characters?");
    passUpperCase = confirm("Would you like to include upper case characters?");
    passNumeric = confirm("Would you like to include numbers?");
    passSpecial = confirm("Would you like to include special characters?");
    if (!passLowerCase && !passUpperCase && !passNumeric && !passSpecial) {
      alert("You must have at least one type of character");
    }
  } while (!passLowerCase && !passUpperCase && !passNumeric && !passSpecial);
}

// Function for getting a random element from an array
function getRandom(arr) {
  // get a random index value from an array
  let randomIndex = Math.floor(Math.random() * arr.length);
  // get a random character
  let randomCharacter = arr[randomIndex];

  return randomCharacter;
}

// Function to generate password with user input
function generatePassword() {
  getPasswordLength();
  getPasswordOptions();
  console.log(lengthInput);
  console.log(passLowerCase, passUpperCase, passNumeric, passSpecial);
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
