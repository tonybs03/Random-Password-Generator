// Assignment Code
var generateBtn = document.querySelector("#generate");

// generatePssword function

var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lower = 'abcdefghijklmnopqrstuvwxyz'
var digits = '0123456789'
var symbols = '~!#$%&*-+|'



function generatePassword() {
  var length = prompt("What is your preferred length of the Password? (8 - 128)")
  var uppercase = confirm("Would you like to include upper characters?")
  var lowercase = confirm("Would you like to include lower character?")
  var special = confirm("Would you like to include special characters?")
  var numbers = confirm("Would you like to include numerical character?")

  returnedpassword = "";
  charset = ""
  if (special == true) {
    console.log("include specials");
    returnedpassword += symbols.charAt(Math.floor(Math.random() * symbols.length))
    length--;
    charset += symbols;
  }
  if (numbers == true) {
    console.log("include numbers");
    returnedpassword += digits.charAt(Math.floor(Math.random() * digits.length))
    length--;
    charset += digits;
  }
  if (uppercase == true) {
    console.log("include uppercase");
    returnedpassword += upper.charAt(Math.floor(Math.random() * upper.length))
    length--;
    charset += upper;
  }  
  if (lowercase == true) {
    console.log("include lowercase");
    returnedpassword += lower.charAt(Math.floor(Math.random() * lower.length))
    length--;
    charset += lower;
  } 

  for (var i = 0, n = charset.length; i < length; ++i) {
    returnedpassword += charset.charAt(Math.floor(Math.random() * n));
  }
  
  var str = returnedpassword
  var shuffled = str.split('').sort(function(){return 0.5-Math.random()}).join('');

  return shuffled;
}






// /**
//  * sets of charachters
//  */
//  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//  var lower = 'abcdefghijklmnopqrstuvwxyz'
//  var digit = '0123456789'
//  var all = upper + lower + digit
 
//  /**
//   * generate random integer not greater than `max`
//   */
 
//  function rand (max) {
//    return Math.floor(Math.random() * max)
//  }
 
//  /**
//   * generate random character of the given `set`
//   */
 
//  function random (set) {
//    return set[rand(set.length - 1)]
//  }
 
//  /**
//   * generate an array with the given `length` 
//   * of characters of the given `set`
//   */
 
//  function generate (length, set) {
//    var result = []
//    while (length--) result.push(random(set))
//    return result
//  }
 
//  /**
//   * shuffle an array randomly
//   */
//  function shuffle (arr) {
//    var result = []
 
//    while (arr.length) {
//      result = result.concat(arr.splice(rand[arr.length - 1]))
//    }
 
//    return result
//  }
//  /**
//   * do the job
//   */
//  function password (length) {
//    var result = [] // we need to ensure we have some characters
 
//    result = result.concat(generate(1, upper)) // 1 upper case
//    result = result.concat(generate(1, lower)) // 1 lower case
//    result = result.concat(generate(1, digit)) // 1 digit
//    result = result.concat(generate(length - 3, all)) // remaining - whatever
 
//    return shuffle(result).join('') // shuffle and make a string
//  }
 
//  console.log(password(6))








// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
