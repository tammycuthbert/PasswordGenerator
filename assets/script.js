// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = prompt (" Please enter a number between 8 and 128.");
  var charset = "";

  if (length > 7 && length < 129) {
    
  }
  else {
    return generatePassword();
  }

}

var isUppercase = confirm("Do you want uppercase characters?");
var isLowercase = confirm("Do you want lowercase characters?");
var isSpecialCharacters = confirm("Do you want special characters?");
var isnumeric = confirm("Do you want numbers?");

if (isUppercase){ 
  charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

}

if (isLowercase){
  charset += "abcdefghijklmnopqrstuvwxyz";
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
