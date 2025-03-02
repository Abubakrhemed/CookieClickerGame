console.log("scripts loaded");
// declare varibales for later usage
const cookieClicked = document.querySelector("#cookie");
const upgradeClicker = document.querySelector("#upgradeClick");
const upgradeBacker = document.querySelector("#upgradeAutoBaker");
const cookieScreen = document.querySelector("#cookieCount");
const clickerLevel = document.querySelector("#clickLevel");
const bakerLevel = document.querySelector("#bakerLevel");
const clickNextLevel = document.querySelector("#clickNextLevel");
const farmNextLevel = document.querySelector("#bakerNextLevel");


//Game varibales 
let totalCookies = 0;

//cursor click varibales 
let currentClicks = 0;
let upgradeCursorLevel = 5;
let currentClickLevel = 1;

//autofarm varibales
let autofarm = 0
let upgradeautofarmLevel = 20;
let currentFarmLevel = 0;
let isAutoFarmRunning = false; 

//text content for scores and levels
cookieScreen.textContent = totalCookies;
clickerLevel.textContent = currentClickLevel;
clickNextLevel.textContent = upgradeCursorLevel;
bakerLevel.textContent = currentFarmLevel;
farmNextLevel.textContent = upgradeautofarmLevel;


// when cookie is clicked
function cookieClicks() {
  cookieClicked.addEventListener("click", () => {
    totalCookies += currentClicks + 1;
   cookieScreen.textContent = totalCookies;
    checkScore();
  })
}

//when upgrade clicker is clicked
function upgradeClick() {
  upgradeClicker.addEventListener("click", () => {
    currentClicks = 5;
    clickLevel();
  })
}

//updates text content of upgrade click level
function clickLevel() {
  currentClickLevel++;
  clickerLevel.textContent = currentClickLevel;
}


function upgradeFarm() {
  upgradeBacker.addEventListener("click", () => {
    farmLevel()
    if (!isAutoFarmRunning) {
      isAutoFarmRunning = true;

      setInterval(() => {
        let earnedCookies = autofarm + 2; 
        totalCookies += earnedCookies; 
        cookieScreen.textContent = totalCookies; 
       
      }, 5000);
    }
  });
}

function farmLevel(){
  currentFarmLevel++
  bakerLevel.textContent = currentFarmLevel;
}


// Set upgradeClicker to be disabled initially
upgradeClicker.style.backgroundColor = "rgba(59, 59, 59, 0.53)";
upgradeClicker.disabled = true; 
upgradeBacker.style.backgroundColor = "rgba(59, 59, 59, 0.53)";
upgradeBacker.disabled = true; 

// Check the cookieScreen and activate upgrade click based on cookieScreen
function checkScore() {
  if (totalCookies < upgradeCursorLevel) {
  } else {
    upgradeClicker.style.backgroundColor = "";
    upgradeClicker.style.cursor = "pointer";
    upgradeClicker.disabled = false;
    clickNextLevel.style.color = "rgba(25, 210, 62, 0.53)";
  }

  if (totalCookies < upgradeautofarmLevel){

  }else{
    upgradeBacker.style.backgroundColor = "";
    upgradeBacker.style.cursor = "pointer";
    upgradeBacker.disabled = false;
    farmNextLevel.style.color = "rgba(25, 210, 62, 0.53)";
  }
}

//function calls
upgradeClick();
cookieClicks();
upgradeFarm();