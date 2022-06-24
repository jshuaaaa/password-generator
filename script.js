// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




generateBtn.addEventListener("click", (writePassword) => {

  function makePassword(length) {
  let number = prompt("Do you want numbers in your password y/n?")
  let uppercase =  prompt("Do you want uppercase letters in your password y/n?")
  let specialCharachter = prompt("Do you want Special characters in your password y/n?")
  var result = ""
  var charachter = "abcdefghijklmnopqrstuvwxyz"

  // Variables are set
  
  
  if(number === 'y' || number === "Y") {
    charachter = charachter + '0123456789'
  } 
   if(uppercase === 'y' || uppercase === "Y") {
    charachter = charachter + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
   } 
   if(specialCharachter === 'y' || specialCharachter === "Y") {
    charachter = charachter + '!#$&*'
 } 

 // takes user data from the prompts to add value to charachters variable
 
 
 charachtersLength = charachter.length;

 var length = prompt("Pick a number length for your password between 8-128")

  if (length < 8 || length > 128) {
    alert("ERROR: Input contains an invalid amount of characters")
    return
  }

  // Makes sure users password is within a certain range

 console.log(length)
 


  for(var i = 0; i < length; i++) {
  result += charachter.charAt(Math.floor(Math.random() * charachtersLength));
  }

  // Generates random password through a for loop

 
 
 
  return result;
}

  alert(makePassword(length));
  

 });





