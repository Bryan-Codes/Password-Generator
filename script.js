// Assignment code here

//Define characters
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()";

//Create empty strings

var characters = "";
var password = "";

//array
const array =[characters]
console.log(array)

//Generator logic
var generatePassword = function(){
  
  var passwordLength = prompt("Please Select a password length with a minimum of 8 characters and no more than 128 characters.")

  if (passwordLength >=8 || passwordLength <= 128) {
    console.log (passwordLength)
  }else {alert("Please be sure your response is between 8 and 128 characters")
  return "";
}

var passUpper = confirm ("Include UPPERCASE letters?")

if (passUpper==true) {
  characters += uppercase;
}
console.log(passUpper)
var passlower = confirm ("Include lowercase letters?")
if (passlower==true) {
  characters += lowercase;
}
console.log(passlower)
var passnum = confirm ("Include Numbers?")
if (passnum==true) {
  characters += numbers;
}
console.log(passnum)
var passchar = confirm ("Include special characters?")
if (passchar==true) {
  characters += specialCharacters;

}
console.log(passchar)
if (!passUpper && !passlower && !passnum && !passchar){
  alert("You must select at least one set of characters.")
  return "";
}

for (var index = 0; index < passwordLength; index++) {
  password += characters.charAt(Math.floor(Math.random()* characters.length));


  
}
return password
console.log(characters);
console.log(password)
}


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


