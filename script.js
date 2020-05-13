var char1 = "abcdefghijklmnopqrstuvwxyz";
var char2="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var sym = "~`!@#$%^&*()_-+={[}]|\:;\"'<,>.?/";


var charNumber = document.getElementById("charNum");
var upperCase=document.getElementById("upperCase");
var numInput = document.getElementById("num");
var symbInput = document.getElementById("symb");
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");



function writePassword(){
  var characters = char1;
  var lengthchar = charNumber.value;
  
  if(numInput.checked==true){    
    characters+=num;            
                                
  }
  if(symbInput.checked==true){
    characters+=sym;
  
}
if(upperCase.checked==true){
  characters+=char2;

}
var password = generatePassword(lengthchar, characters);
passwordText.value = password;
}

function generatePassword(lengthchar, characters) {
  var localPass = "";
  for (var i = 0; i < lengthchar; i++) {
    localPass = localPass + characters.charAt(Math.floor(Math.random() * characters.length));

  }
  return localPass;
}


generateBtn.addEventListener("click", writePassword);
