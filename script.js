// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var criteria = document.getElementById("password-criteria");
criteria.innerHTML += `<input type="checkbox" id="number" name="number">
<label for="number"> Would you like numbers in your password?</label><br>
<input type="checkbox" id="uppercase" name="uppercase">
<label for="uppercase">Would you like uppercase letters in your password?</label><br>
<input type="checkbox" id="special-charachter" name="special-charachter">
<label for="special-charachter"> Would you like special charachters in your password?</label><br>`;


generateBtn.addEventListener("click", (writePassword) => {

  function makePassword(length) {
  let number = document.getElementById("number");
  let uppercase = document.getElementById("uppercase");
  let specialCharachter = document.getElementById("special-charachter");
  var result = ""
  var charachter = "abcdefghijklmnopqrstuvwxyz"
  
  
  if(number.checked) {
    charachter = charachter + '0123456789'
  } 
   if(uppercase.checked) {
    charachter = charachter + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
   } 
   if(specialCharachter.checked) {
    charachter = charachter + '!#$&*'
 } 
 
 
 charachtersLength = charachter.length;

 var length = prompt("Pick a number length for your password between 8-128")

  if (length < 8 || length > 128) {
    alert("ERROR: Input contains an invalid amount of characters")
    return
  }

 console.log(length)
 


  for(var i = 0; i < length; i++) {
  result += charachter.charAt(Math.floor(Math.random() * charachtersLength));
  }
 
 
  return result;
}

  alert(makePassword(length));
  

 });
// Add event listener to generate button




