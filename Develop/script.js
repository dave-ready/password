// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Password Criteria

//must be between 8 and 128 characters long

//must include character types lowercase, uppercase, numeric 
//and/or special characters



//Input should be validated and at least one character type should 
//be selected

//after all prompts are answered, a password needs to be generated and 
//displayed as a prompt or on screen

var psswrdLength = prompt("Welcome To Password Generator! How many characters would you like your password to be?");
var lwrCase = confirm("Would you like to use lower case letters?");
var upprCase = confirm("Would youi like to use upper-case letters?");
var numbChar = Confirm ("Would you like to use and numbers or special characters?");



prompt("Welcome To Password Generator! How many characters would you like your password to be?")

if (psswrdLength === < 8) {
  prompt("SORRY: Password must be at least 8 characters long. Please enter another number"){

  } Else if (psswrdLength === > 128) {
    prompt("Sorry: Password can be no longer than 128 characters.  Please enter another number") {

    } Else ("Your password is" + " " + psswrdLength + " " + "characters long!")
  }
}
