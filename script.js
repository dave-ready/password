//Password Criteria
//must be between 8 and 128 characters long
//must include character types lowercase, uppercase, numeric 
//and/or special characters
//Input should be validated and at least one character type should 
//be selected
//after all prompts are answered, a password needs to be generated and 
//displayed as a prompt or on screen



// Write password to the #password input
//function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");

//  passwordText.value = password;

//}

//Create function to generate password s
//function generatePassword() {

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

//};



var psswrdLength = prompt("Welcome To Password Generator! How many characters would you like your password to be?");
var confirmLwrCase = confirm("Would you like to use lower case letters?");
var confirmUpprCase = confirm("Would you like to use upper-case letters?");
var confirmNumChar = Confirm ("Would you like to use and numbers or special characters?");

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

var upperCase = ["A", "B", "C","D","E", "F", "G", "H", "I","J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var spclChars = ["!", "@","#","$","%","&", "*", "'", "-", "_", "+", "=", ",", ".", "/", "?", "<", ">", "~"];

var passwordArray = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

var getUpperCase = function (x) {
  return x.toUpperCase ();
};

// Add event listener to generate button
generateBtn.addEventListener("click", function() { 
  password = generatePassword();
  document.getElementById("password").placeholder = password;
});

//Create function to generate password and write it to the #password id in the html file
function generatePassword() { 
  //determine password length
  var psswrdLength = parseInt(prompt("Welcome To Password Generator! How many characters would you like your password to be?"));

if (!psswrdLength) {
  alert("Please indicate your password length with a numeral.");

  } else if (psswrdLength < 8) {
    psswrdLength = parseInt(prompt("SORRY: Password must be at least 8 characters long."));

  } else if (psswrdLength > 128) {
      psswrdLength = parseInt(prompt("Sorry: Password can be no longer than 128 characters"));

      } else { 
        confirmNumbers = confirm("Would you like it to contain numbers?");
        confirmSpclChars = confirm("Would you like it to have special characters?");
        confirmUpperCase = confirm("Would you like it to contain Uppercase letters?");
        confirmLowerCase = confirm("Would you like it to contain Lowercase letters?");

      };


    };


//prompt("Welcome To Password Generator! How many characters would you like your password to be?")

if (confirmNumbers) {

}

if (confirmLwrCase) {

}

if (confirmUpprCase) {

}

if (confirmNumChar) {
  
}







