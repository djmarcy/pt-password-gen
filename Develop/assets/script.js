// Variables
var generateBtn = document.querySelector("#generate");

// Password Character Options
const lowerCase = document.getElementById("lowercase-lttrs")
const upperCase = document.getElementById("uppercase-lttrs")
const numbers = document.getElementById("numbers")
const symbols = document.getElementById("symbols")


// Write password to the #password input
function writePassword() {

  // Write password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



function generatePassword() {
  var passwordLength = document.getElementById("pw-length").value
  console.log(passwordLength)

  // Fail States
  if (lowerCase.checked == false &&
    upperCase.checked == false &&
    numbers.checked == false &&
    symbols.checked == false) {
      alert("Please choose at least one character set.")
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a valid password length.")
  }

  // Evaluate which character sets should be included in password
  let charSet = ""
  let lowerChars = "abcdefghijklmnopqrstuvwxyz"
  let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let nums = "1234567890"
  let syms = "!@#$%^&*()_-=+|]}{[':;.><,/?"

  if () {
    charSet = charSet + lowerChars
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
