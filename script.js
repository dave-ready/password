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

var password = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

var getUpperCase = function (x) {
  return x.toUpperCase ();
};



prompt("Welcome To Password Generator! How many characters would you like your password to be?")

if (psswrdLength < 8) {
  prompt("SORRY: Password must be at least 8 characters long. Please enter another number")

 } Else if (psswrdLength > 128) {
    prompt("Sorry: Password can be no longer than 128 characters.  Please enter another number") 

    }Else {

     Alert ("Your password is" + " " + psswrdLength + " " + "characters long!")
  }

if (confirmLwrCase) {

}

if (confirmUpprCase) {

}

if (confirmNumChar) {
  
}







