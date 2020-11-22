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

var psswrdLength
var chrctrTypes 
var lwrcase 
var upprCase 
var nmbr
var chrctr 
