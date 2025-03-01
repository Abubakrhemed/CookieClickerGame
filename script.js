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
    currentClicks = 10
    clickLevel()
  })
}

//updates text content of upgrade click level
function clickLevel (){
  currentClickLevel++;
  clickerLevel.textContent = currentClickLevel;
}

//set upgradeclick to be disabled first 
upgradeClicker.style.backgroundColor = "rgba(236, 236, 236, 0.852)";
upgradeClicker.style.cursor = "none";

//check the score and activate upgrade click based off score 
function checkScore(){
  if (sum < upgradeCursorLevel){
  }else{
    upgradeClicker.style.backgroundColor = "";
    upgradeClicker.style.cursor = "";
    upgradeClicker.classList.remove("hidden")
  }
}


//function calls
upgradeClick()
cookieClicks()
