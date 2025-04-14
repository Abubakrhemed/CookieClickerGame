console.log("scripts loaded");

// Declare DOM elements
const cookieClicked = document.querySelector("#cookie");
const upgradeClicker = document.querySelector("#upgradeClick");
const upgradeBacker = document.querySelector("#upgradeAutoBaker");
const cookieScreen = document.querySelector("#cookieCount");
const clickerLevel = document.querySelector("#clickLevel");
const bakerLevel = document.querySelector("#bakerLevel");
const clickNextLevel = document.querySelector("#clickNextLevel");
const farmNextLevel = document.querySelector("#bakerNextLevel");
const clickgain = document.querySelector("#clickGain")
const bakergain = document.querySelector("#bakerGain")

// Game variables
let totalCookies = 0;

// Click upgrade system
let currentClicks = [1, 2, 4, 5, 6, 7, 8, 10, 15, 20, 24];
let upgradeCursorLevel = [5, 10, 20, 45, 100, 300, 450];
let currentClickLevel = 1;

// Autofarm system using arrays now
let autoFarmValues = [0, 2, 4, 6, 8, 10, 12]; // cookies per 5 sec
let upgradeAutoFarmLevels = [20, 50, 100, 200, 400];
let currentFarmLevel = 0;
let isAutoFarmRunning = false;

// Initialize display
cookieScreen.textContent = totalCookies;
clickerLevel.textContent = currentClickLevel;
clickNextLevel.textContent = upgradeCursorLevel[0] ?? "MAX";
bakerLevel.textContent = currentFarmLevel;
farmNextLevel.textContent = upgradeAutoFarmLevels[0] ?? "MAX";
clickgain.textContent = currentClicks[0]
bakergain.textContent = autoFarmValues[0]

// Cookie click
cookieClicked.addEventListener("click", () => {
  totalCookies += currentClicks[0];
  cookieScreen.textContent = totalCookies;
  checkScore();
});

// Upgrade clicker
upgradeClicker.addEventListener("click", () => {
  if (totalCookies >= upgradeCursorLevel[0]) {
    totalCookies -= upgradeCursorLevel[0];
    currentClickLevel++;

    // Remove used values
    currentClicks.shift();
    upgradeCursorLevel.shift();

    // Update UI
    cookieScreen.textContent = totalCookies;
    clickerLevel.textContent = currentClickLevel;
    clickNextLevel.textContent = upgradeCursorLevel[0] ?? "MAX";
    clickgain.textContent = currentClicks[0]

    checkScore();
  }
});

// Upgrade farm
upgradeBacker.addEventListener("click", () => {
  if (totalCookies >= upgradeAutoFarmLevels[0]) {
    totalCookies -= upgradeAutoFarmLevels[0];
    currentFarmLevel++;

    autoFarmValues.shift();
    upgradeAutoFarmLevels.shift();

    // Update UI
    bakerLevel.textContent = currentFarmLevel;
    farmNextLevel.textContent = upgradeAutoFarmLevels[0] ?? "MAX";
    cookieScreen.textContent = totalCookies;

    if (!isAutoFarmRunning) {
      isAutoFarmRunning = true;

      setInterval(() => {
        let earnedCookies = autoFarmValues[0];
        totalCookies += earnedCookies;
        cookieScreen.textContent = totalCookies;
        bakergain.textContent = autoFarmValues[0]
      }, 5000);
    }
    bakergain.textContent = autoFarmValues[0]
    checkScore();
  }
});

// Check score to enable buttons
function checkScore() {
  if (upgradeCursorLevel.length && totalCookies >= upgradeCursorLevel[0]) {
    upgradeClicker.disabled = false;
    upgradeClicker.style.backgroundColor = "";
    upgradeClicker.style.cursor = "pointer";
    clickNextLevel.style.color = "rgba(25, 210, 62, 0.53)";
  } else {
    upgradeClicker.disabled = true;
    upgradeClicker.style.backgroundColor = "rgba(59, 59, 59, 0.53)";
    clickNextLevel.style.color = "";
  }

  if (upgradeAutoFarmLevels.length && totalCookies >= upgradeAutoFarmLevels[0]) {
    upgradeBacker.disabled = false;
    upgradeBacker.style.backgroundColor = "";
    upgradeBacker.style.cursor = "pointer";
    farmNextLevel.style.color = "rgba(25, 210, 62, 0.53)";
  } else {
    upgradeBacker.disabled = true;
    upgradeBacker.style.backgroundColor = "rgba(59, 59, 59, 0.53)";
    farmNextLevel.style.color = "";
  }
}

// Initial check
checkScore();
