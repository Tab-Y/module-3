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

var selection = {
  capitalLetters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  lowerLetters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  special: [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\u005c", "]", "^", "_", "`", "{", "|", "}", "~"],
}
console.log(selection.special[24])
// ' !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~'
// console.log(selection)
// console.log(selection.capitalLetters)
// console.log(selection.lowerLetters)
// console.log(selection.capitalLetters + selection.lowerLetters)

// Assignment code here
var criteria = function() {
  var passLength = window.prompt("How long of a password would you like?\nPlease Choose between 8 and 128.");
  var password = [];

  // this section of code generates the individual characters per the chosen criteria
  var generatingPassword = function() {
    for (i = 0 ; i < passLength ; i) {
      var pathing = Math.floor(Math.random() * 4)
      if (pathing == 0) {
        if (!useUpper) {
        
        } else {
          var passHoldFour = Math.floor(Math.random() * selection.capitalLetters.length);
          password.unshift(selection.capitalLetters[passHoldFour]);
          i++;
        }
      } else if (pathing == 1) {
        if (!useLower) {
        
        } else {
          var passHoldThree = Math.floor(Math.random() * selection.lowerLetters.length);
          password.unshift(selection.lowerLetters[passHoldThree]);
          i++;
        }
      } else if (pathing == 2) {
        if (!useNumbers) {

        } else {
          var passHoldTwo = Math.floor(Math.random() * selection.numbers.length);
          password.unshift(selection.numbers[passHoldTwo]);
          i++;
        }
      } else {
        if (!useSpecial) {

        } else {
         var passHoldOne = Math.floor(Math.random() * selection.special.length);
          password.unshift(selection.special[passHoldOne]);
          i++;
        }
      }
    }
  }

// this section of code set the criteria of the password
  if ((8 > passLength) || (128 < passLength)){
    window.alert("Please select a length between 8 and 128 characters.");
  } else {
    window.alert("you have chosen " + Math.floor(passLength) + " characters.");
    var useUpper = window.confirm("Would you like to use upper-case letters?\nokay for yes, cancel for no.");
    if (!useUpper) {
    window.alert("You have chosen to not use upper-case letters.");
    } else {
      window.alert("You have chosen to use upper-case letters.");
    }
    var useLower = window.confirm("Would you like to use lower-case letters?\nokay for yes, cancel for no.");
    if (!useLower) {
    window.alert("You have chosen to not use lower-case letters.");
    } else {
      window.alert("You have chosen to use lower-case letters.");
    }
    var useNumbers = window.confirm("Would you like to use numbers?\nokay for yes, cancel for no.");
    if (!useNumbers) {
    window.alert("You have chosen to not use numbers.");
    } else {
     window.alert("You have chosen to use numbers.");
    }
    var useSpecial = window.confirm("Would you like to use special characters?\nokay for yes, cancel for no.");
    if (!useSpecial) {
    window.alert("You have chosen to not use special characters.");
    } else {
     window.alert("You have chosen to use special characters.");
    }
    if (!useSpecial && !useNumbers && !useLower && !useUpper) {
      alert("No password generated\nNo characters selected.");
      return;
    }
    generatingPassword();
  }

  // creates the password without any added elements based on the randomly chosen elements
  
  var passwordText = document.querySelector("#password");
  passwordText.textContent = password.join('');
  

}
