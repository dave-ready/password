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

//If user opts for one password criterion

if (confirmNumbers) {
    criteria = numbers;
      
  } else if (confirmLwrCase) {
    criteria = lowerCase;
      
  } else if (confirmUpprCase) {
    criteria = upperCase;
      
  } else if (confirmSpclChars) {
    criteria = spclChars;

//If user selects 2 criteria

  } else if (confirmSpclChars && confirmNumbers) {
    criteria = spclChars.concat(numbers);

  } else if (confirmNumbers && confirmUpperCase) {
    criteria = numbers.concat(upperCase);

  } else if (confirmLowerCase && confirmNumbers) {
    criteria = lowerCase.concat(numbers);

  } else if (confirmSpclChars && confirmLowerCase) {
    criteria = spclChars.concat(lowerCase);

  } else if (confirmSpclChars && confirmUpperCase) {
    criteria = spclChars.concat(upperCase);

  } else if (confirmLowerCase && confirmUpperCase) {
    criteria = lowerCase.concat(upperCase);

//If user selects 3 criteria

} else if (confirmNumbers && confirmSpclChars && confirmUpperCase) {
  criteria = numbers.concat(numbers, upperCase);

} else if (confirmNumbers && confirmSpclChars && confirmLowerCase) {
  criteria = numbers.concat(numbers, lowerCase);

} else if (confirmNumbers && confirmLowerCase && confirmUpperCase) {
  criteria = numbers.concat(lowerCase, upperCase);

} else if (confirmSpclChars && confirmLowerCase && confirmUpperCase) {
  criteria = spclChars.concat(upperCase, lowerCase);

//If user selects no criteria
} else if (!confirmNumbers && !confirmSpclChars && !confirmUpperCase && !confirmLowerCase) {
  criteria = alert("Please choose at least one password criterion.");

//If user selects all criteria
} else {
  criteria = spclChars.concat(numbers, lowerCase, upperCase);

};

var passwordArray = [];
for (var i = 0; i < enter; i++) {
  var selectCriteria = criteria[Math.floor(Math.random() * criteria.length)];
  passwordArray.push(selectCriteria);
}

var password = passwordArray.join("");
userInput(password);
return password;
};









