// const characters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"];
let characters;

const symbols = "~`!@#$%^&*()_-+={}[],|:;<>.?/";
const numbers = "0123456789";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//  generate randon string length 15 long
function randomString(length = 15) {
  let result = "";

  const includeSymbols = document.querySelector("#include-symbols").checked;
  const includeNumbers = document.querySelector("#include-numbers").checked;

  //   reset characters to just letters at the start of each function call
  characters = letters;

  if (includeSymbols) {
    characters += symbols;
  }

  if (includeNumbers) {
    characters += numbers;
  }

  for (let i = 0; i < length; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }
  return result;
}


//  toggle dark/ light mode
document.getElementById('toggleButton').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
  


const generateBtn = document.querySelector("#generate-btn");
const firstField = document.querySelector("#first-field");
const secondField = document.querySelector("#second-field");

generateBtn.addEventListener("click", function () {
  const randomStringResult1 = randomString();
  const randomStringResult2 = randomString();

  firstField.value = randomStringResult1;
  secondField.value = randomStringResult2;
});

//  function to copy text to clipboard
async function copyToClipboard(inputField) {
  try {
    await navigator.clipboard.writeText(inputField.value);
    showNotification();
    //  alert('Text copied to clipboard');
  } catch (err) {
    alert("failed to copy text: " + err);
  }
}



//  select clipboard icons
const firstIcon = document.querySelector("#first-field" + " + .icon");
const secondIcon = document.querySelector("#second-field" + " + .icon");

firstIcon.addEventListener("click", function () {
  copyToClipboard(firstField);
});

secondIcon.addEventListener("click", function () {
  copyToClipboard(secondField);
});



//  show notification
function showNotification() {
  const notification = document.getElementById("notification");
  notification.className = "notification show";
  setTimeout(() => {
    notification.className = "notification";
  }, 4000);
}
