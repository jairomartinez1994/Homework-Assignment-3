//assigning variable
var lowerchar1 = "abcdefghijklmnopqrstuvwxyz";
var upperchar2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Assignment Code
var charNumber = document.getElementById("characternumber");//numbers will randomly be chosen
var uppercase = document.getElementById("uppercase");// Will choose any uppercase letter
var numInput = document.getElementById("number"); // Will choose any available number
var symbInput = document.getElementById("symbol"); // Will choose any available symbol
var passwordText = document.querySelector("#password"); // Will Generate password
var generateBtn = document.querySelector("#generate"); // Will be the button to generate a password

// Write password to the #password input

function writePassword() {
  var characters = lowerchar1;
  var lengthchar = charNumber.value; // the length of the number will be given the value by .value


  if(numInput.radio==true){              // When number is chosen
    characters+=numbers;            // then will focus on the character and number chosen
                                    // then characters value will be the number and character
                                    // When the password is selected
                                    // then the symbols will be randomly chosen
  }

  if(symbInput.radio==true){
    characters+=symbols;
  
}
  
  if(uppercase.radio==true){
characters+=upperchar2;

}
  var password = generatePassword(characters, lengthchar);
  passwordText.value = password;
  
  function generatePassword (characters, lengthchar){
    var localpass = "";
    for (var i = 0; i < lengthchar; i++){
      localpass = localpass + characters.charAt(Math.floor(Math.random() * characters.length));
      
    }
    return localpass
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
