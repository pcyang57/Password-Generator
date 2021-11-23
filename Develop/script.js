// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for password
var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
var numberString = "1234567890";
var specialString = "~!@#$%^&*()_-=+;:?";
var charLength;
var chosenChar = "";

// Function to generate password
function generatePassword() {

  // Prompt for character length limits 
var charLength = prompt("Please enter the amount of characters you want, between 8 and 128.")


if (isNaN(charLength)){
  alert ("Please enter a number, between 8 and 128.")
  return
}

if (charLength < 8) {
  alert ("Please enter a number greater than 8.")
  return
}

if (charLength > 128) {
  alert ("Please enter a number less than 128.")
  return
}

// prompts to confirm what characters to use
if (8 <= charLength <= 128) {
  var upperCase = confirm("Choose OK to include uppercase letters in password, Cancel for No.")

  var lowerCase = confirm("Choose OK to include lowercase letters in password, Cancel for No.")

  var numberChar = confirm("Choose OK to include numbers in password, Cancel for No.")

  var specialChar = confirm("Choose OK to include special characters in password, Cancel for No.")

}

// Alert if no characters are selected
if (!upperCase && !lowerCase && !numberChar && !specialChar) {

  alert ("You must choose OK to at least one type of character, please try again.");
  return
}

if (upperCase === true) {
    chosenChar = chosenChar.concat(upperCaseString)
 } 

 if (lowerCase === true) {
  chosenChar = chosenChar.concat(lowerCaseString)
}

if (numberChar === true) {
    chosenChar = chosenChar.concat(numberString)
}

if (specialChar === true) {
    chosenChar = chosenChar.concat(specialString)
}

// Final output of string
var passwordOutput = [];

// Making random characters from string
for (var i = 0; i < charLength; i++) {
  
  var charString = chosenChar[Math.floor(Math.random() * chosenChar.length)];
  passwordOutput.push(charString);
  console.log(charString);
}
// Making random characters output to password variable
var password = passwordOutput.join("");
return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
