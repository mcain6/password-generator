// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  var userInput = window.prompt("Enter a number between 8 and 128");
  if(userInput > 128){
    window.alert("The number you provided was too large!")
    return;
  }else if(userInput < 8){
    window.alert("The number you entered is too small!");
  }
  var userInput2 = window.prompt("Do you want 'uppercase', 'lowercase', or 'both'?");
  if( userInput2 == "uppercase"){
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }else if(userInput2 == "lowercase"){
    var chars = "abcdefghijklmnopqrstuvwxyz"
  }else if(userInput2 == "both"){
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  }else{
    window.alert("you must enter uppercase, lowercase, or both")
    return;
  }
  var userInput3 = window.prompt("Would you like to include special characters? yes or no?");
  if( userInput2 == "uppercase"){
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }else if(userInput2 == "lowercase"){
    var chars = "abcdefghijklmnopqrstuvwxyz"
  }else if(userInput2 == "both"){
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  }else{
    window.alert("you must enter uppercase, lowercase, or both")
    return;
  }
  var chars = "";

if( userInput3 == "yes"){
  var chars = chars + "!@#$%^&*";
}else if(userInput3 == "no"){
  var chars = chars;
}else{
  window.alert("You need to enter yes or no")
  return;
}
  var passwordLength = userInput; 
  var returnValue = ""; 
  var n = chars.length; 
  for (let i = 0; i < passwordLength; i++) { 
    returnValue += chars.charAt(Math.floor(Math.random() * n)); 
  }                                                             
                                          
  return returnValue;                                           
                                
      
}                                                  