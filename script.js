// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var criteria = document.getElementById("password-criteria");
criteria.innerHTML += `<input type="checkbox" id="number" name="number" value="no">
<label for="number"> Would you like numbers in your password?</label><br>
<input type="checkbox" id="uppercase" name="uppercase">
<label for="vehicle1">Would you like uppercase letters in your password?</label><br>
<input type="checkbox" id="special-charachter" name="special-charachter">
<label for="vehicle1"> Would you like special charachters in your password?</label><br>`;


generateBtn.addEventListener("click", (writePassword) => {
  let number = document.querySelectorAll('input[name="number"]:checked');
  let uppercase = document.querySelectorAll('input[name="uppercase"]:checked');
  let specialCharachter = document.querySelectorAll('input[name="special-charachter"]:checked');
  let values = [];
  
  if(number.checked = true) {
    console.log('tes')
  }

  if(uppercase.checked = true) {
    console.log('tes')
  }

  if(specialCharachter.checked = true) {
    console.log('tes')
  }


 });
// Add event listener to generate button




