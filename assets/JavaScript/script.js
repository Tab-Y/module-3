// click button to generate password
// presented with series of prompts for password criteria
// propt criteria to include password
// choose length of 8-128 characters
// ask character type to include
// confirm case and special characters
// input validated after each step
// when all prompts are answered
// then password is generated that matches criteria
// password is either displayed in prompt 

var capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "+", "<", ">", "?"]
var passLength = []
var isCap = []
var isLow = []
var isNumber = []
var isSpecial = []


// Assignment code here
function criteriaSelect() {
  let passLength = prompt("How long of a password would you like?");
  console.log(passLength);
  alert("you have chosen " + passLength + " characters.");
  askLength();

  function askLength() {
    var select = confirm("Is " + passLength + " your choice?")
    if (select == true) {
      useCap()
    } else {
      alert("Did not work")
    }
  }

  function useCap() {
    var isCapitalLetters = confirm("Do you want to use Capital letters?")
    if (isCapitalLetters == true) {
      alert("Use Capital letters.");
      useLow();
    } else {
      alert("Do not use Capital letters.");
      useLow();
    }
  }

  function useLow() {
    var isLowerCase = confirm("Do you want to use Lower-case letters?")
    if (isLowerCase == true) {
      alert("Use Lower-case letters.");
      useNumber();
    } else {
      alert("Do not use LowerCase");
      useNumber();
    }
  }

  function useNumber() {
    var isNumbers = confirm("Do you want to use Numbers?")
    if (isNumbers == true) {
      alert("Use Numbers");
      useSpecial();
    } else {
      alert("Do not use Numbers.");
      useSpecial();
    }
  }

  function useSpecial() {
    var isSpecial = confirm("Do you want to use Special Characters?")
    if (isSpecial == true) {
      alert("Use Special Characters.");
      nextfunction();
    } else {
      alert("Do not use Special Characters.");
      nextfunction();
    }
  }

  function nextfunction() {
    console.log(isCap);
    console.log(isLow);
    console.log(isNumber);
    console.log(isSpecial);
    console.log(passLength)
  }
}





// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
