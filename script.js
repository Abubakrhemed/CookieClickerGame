console.log("scripts loaded")
// declare varibales for later usage
const cookieClicked = document.querySelector("#cookie");
const upgradeClicker = document.querySelector("#upgradeClick");
const upgradeBacker = document.querySelector("#upgradeAutoBaker");
const score = document.querySelector("#cookieCount");
const clickerLevel = document.querySelector("#clickLevel")
const bakerLevel = document.querySelector("#bakerLevel");



let sum = 0;
let currentClicks = 0;
let autofarm = 0
score.textContent = sum;
let upgradeLevel = 5;

/*
cookieClicked.addEventListener("click",() => {
  sum += 1;
  score.textContent= sum
})

upgradeClicker.addEventListener("click", () => {
   
})
*/

function cookieClicks (){
  cookieClicked.addEventListener("click" , () => {
    sum += currentClicks + 1;
    score.textContent = sum
    checkScore();
  })
}

function upgradeClick (){
  upgradeClicker.addEventListener("click",() => {
    currentClicks = 10
    setTimeout(() => {
      upgradeClicker.style.backgroundColor = "";
      upgradeClicker.style.cursor = "";
    }, 1000); 
  })
}

upgradeClicker.style.backgroundColor = "rgba(236, 236, 236, 0.852)";
upgradeClicker.style.cursor = "none";

function checkScore(){
  if (sum < upgradeLevel){
  }else{
    upgradeClicker.style.backgroundColor = "";
    upgradeClicker.style.cursor = "";
    upgradeClicker.classList.remove("hidden")
    upgradeClick()
  }
}

cookieClicks()
