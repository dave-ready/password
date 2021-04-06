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



//var psswrdLength = prompt("Welcome To Password Generator! How many characters would you like your password to be?");
//var confirmLwrCase = confirm("Would you like to use lower case letters?");
//var confirmUpprCase = confirm("Would you like to use upper-case letters?");
//var confirmNumChar = confirm("Would you like to use and numbers or special characters?");

var psswrdLength;
var confirmSpclChars;
var confirmNumbers;
var confirmLowercase;
var confirmUppercase;

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

var upperCase = ["A", "B", "C","D","E", "F", "G", "H", "I","J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var spclChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

//var passwordArray = [];

var getUpperCase = function (x) {
  return x.getUpperCase ();
};


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", function() { //writePassword instead of function()
  password = generatePassword();
  document.getElementById("password").placeholder = password;
});

//Create function to generate password and write it to the #password id in the html file
function generatePassword() { 
  //determine password length
 psswrdLength = parseInt(prompt("Welcome To Password Generator! How many characters would you like your password to be?"));

if (!psswrdLength) {
  alert("Please indicate your password length with a numeral.");

  } else if (psswrdLength < 8 || psswrdLength > 128) {
    psswrdLength = parseInt(prompt("Please choose between 8 and 128"));
  }
  //Other Criteria
  else {
      confirmNumbers = confirm("Would you like it to contain numbers?");
      confirmSpclChars = confirm("Would you like it to have special characters?");
      confirmUpperCase = confirm("Would you like it to contain Uppercase letters?");
      confirmLowerCase = confirm("Would you like it to contain Lowercase letters?");
  };


//If user selects no to all criteria
 if (!confirmNumbers && !confirmSpclChars && !confirmUpperCase && !confirmLowerCase) {
  criteria = alert("Please choose at least one password criteria.");

//if user selects yes to all criteria
} else if (confirmNumbers && confirmSpclChars && confirmUpperCase && confirmLowerCase) {
  criteria = spclChars.concat(numbers, lowerCase, upperCase);

//if user selects 3 criteria

} else if(confirmNumbers && confirmSpclChars && confirmUpperCase) {
  criteria = numbers.concat(numbers, upperCase);

} else if(confirmNumbers && confirmSpclChars && confirmLowerCase) {
  criteria = numbers.concat(numbers, lowerCase);

} else if(confirmNumbers && confirmLowerCase && confirmUpperCase) {
  criteria = numbers.concat(lowerCase, upperCase);

} else if(confirmSpclChars && confirmLowerCase && confirmUpperCase) {
  criteria = spclChars.concat(upperCase, lowerCase);

//if user selects 2 criteria

} else if (confirmSpclChars && confirmNumbers) {
  criteria = spclChars.concat(numbers);

} else if (confirmSpclChars && confirmLowerCase) {
  criteria = spclChars.concat(lowerCase);

} else if (confirmSpclChars && confirmUpperCase) {
  criteria= spclChars.concat(upperCase);

} else if (confirmLowerCase && confirmNumbers) {
  criteria= smletter.concat(numbers);

} else if (confirmLowerCase && confirmUpperCase) {
  criteria= lowerCase.concat(upperCase);

} else if (confirmNumbers && confirmUpperCase) {
  criteria = numbers.concat(upperCase);

//If user opts for one password criterion

} else if (confirmSpclChars) {
  criteria = spclChars;

} else if (confirmLowerCase) {
  criteria = lowerCase;

} else if (confirmUpperCase) {
  criteria = upperCase;

} else if (numbers) {
  criteria = numbers;
};

var passwordArray = [];


for (var i = 0; i < psswrdLength; i++) {
  var chooseCriteria = criteria[Math.floor(Math.random() * criteria.length)];
  passwordArray.push(chooseCriteria);
};

var password = passwordArray.join("");
UserInput(password);
return password;
};

//add password to previously generated passwords
document.getElementById("lastPasswords").textContent += passwordArray+ "<br>";

function UserInput (password) {
    document.getElementById("password").textContent = password;
};

var copy = document.querySelector()
var passwordArray = generatePassword();
var pass = document.querySelector("password");
  pass.value = passwordArray;










