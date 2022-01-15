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
  let syms = "!@#$%^&*()"

  if (lowerCase.checked) {
    charSet = charSet += lowerChars
  } 

  if (upperCase.checked) {
    charSet = charSet += upperChars
  }

  if (numbers.checked) {
    charSet = charSet += nums
  }

  if (symbols.checked) {
    charSet = charSet += syms
  }

  console.log(charSet)
  charSet = charSet.split("")
  console.log(charSet)

  // Choose random password
  let password = ""
  for (i = 0; i < passwordLength; i++) {
    pwLength = Math.floor(Math.random() * charSet.length)

    password = password += charSet[pwLength]
  }

  toString(password)

  console.log(password)
  return password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
