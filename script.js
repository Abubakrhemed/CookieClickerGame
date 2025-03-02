console.log("scripts loaded")
// declare varibales for later usage
const cookieClicked = document.querySelector("#cookie");
const upgradeClicker = document.querySelector("#upgradeClick");
const upgradeBacker = document.querySelector("#upgradeAutoBaker");
const score = document.querySelector("#cookieCount");
const clickerLevel = document.querySelector("#clickLevel")
const bakerLevel = document.querySelector("#bakerLevel");
const clickNextLevel = document.querySelector("#clickNextLevel")

//Game varibales 
let sum = 0;
let currentClicks = 0;
let autofarm = 0
let upgradeCursorLevel = 5;
let currentClickLevel = 0;

//text content for scores and levels
score.textContent = sum;
clickerLevel.textContent = currentClickLevel;
clickNextLevel.textContent = upgradeCursorLevel


// when cookie is clicked
function cookieClicks (){
  cookieClicked.addEventListener("click" , () => {
    sum += currentClicks + 1;
    score.textContent = sum
    checkScore();
  })
}

//when upgrade clicker is clicked
function upgradeClick (){
  upgradeClicker.addEventListener("click",() => {
    currentClicks = 5
    clickLevel()
  })
}

//updates text content of upgrade click level
function clickLevel (){
  currentClickLevel++;
  clickerLevel.textContent = currentClickLevel;
}

// Set upgradeClicker to be disabled initially
upgradeClicker.style.backgroundColor = "rgba(59, 59, 59, 0.53)";
upgradeClicker.disabled = true; // Disables the button

// Check the score and activate upgrade click based on score
function checkScore() {
  if (sum < upgradeCursorLevel) {
  } else {
    upgradeClicker.style.backgroundColor = ""; 
    upgradeClicker.style.cursor = "pointer";
    upgradeClicker.disabled = false; 
    clickNextLevel.style.color = "rgba(25, 210, 62, 0.53)"
  }
}


//function calls
upgradeClick()
cookieClicks()
