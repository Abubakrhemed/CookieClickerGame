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
let currentClicks = [1, 2, 4, 5, 6, 7, 8, 10, 15, 20, 24,50,90,100
  ,113,135,256,300,250,500,570,600,700,800,870,950
  ,1000,2000,3000 , 3150, 3200, 3300 ,4000 ,4500 , 4700 , 5000];
let upgradeCursorLevel = [
  5, 10, 25, 50, 100, 150, 200, 275, 350, 450, 600,
  800, 1100, 1400, 1800, 2200, 2800, 3500, 4200, 5000,
  6000, 7200, 8500, 10000, 11500, 13000, 15000, 20000, 30000, 40000, 50000
  , 75000, 100000, 125000, 150000, 200000
];
let currentClickLevel = 1;

// Autofarm system using arrays now
let autoFarmValues = [
  0, 2, 4, 6, 8, 10, 12, 15, 18, 22, 25,
  30, 36, 42, 50, 60, 75, 90, 110, 130,
  150, 175, 200, 250, 300, 400, 500, 650, 800,
  1000 , 1450 , 1700, 2400 , 2700 , 3450 , 4500
];
let upgradeAutoFarmLevels = [
  20, 50, 100, 200, 350, 500, 700, 950, 1300, 1700, 2100,
  2600, 3200, 3900, 4700, 5600, 6700, 7900, 9200, 11000,
  13000, 15500, 18000, 21000, 25000, 30000, 36000, 43000, 50000,
  100000 , 134000 , 150000 , 200000 , 250000 , 289000 , 350000
];
let currentFarmLevel = 0;
let isAutoFarmRunning = false;

// Initialize display
cookieScreen.textContent = formatCookies(totalCookies);
clickerLevel.textContent = currentClickLevel ?? "MAX";
clickNextLevel.textContent = upgradeCursorLevel[0] ;
bakerLevel.textContent = currentFarmLevel ?? "MAX";
farmNextLevel.textContent = upgradeAutoFarmLevels[0] ;
clickgain.textContent = currentClicks[0]
bakergain.textContent = autoFarmValues[0]



// Cookie click
cookieClicked.addEventListener("click", () => {
  totalCookies += currentClicks[0];
  cookieScreen.textContent = formatCookies(totalCookies);
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

    // Check if maxed
    if (currentClicks.length === 0 || upgradeCursorLevel.length === 0) {
      clickerLevel.textContent = "MAX";
      clickgain.textContent = "MAX";
      clickNextLevel.textContent ="MAX"
    } else {
      clickNextLevel.textContent = upgradeCursorLevel[0];
      clickgain.textContent = currentClicks[0];
    }
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
    cookieScreen.textContent = formatCookies(totalCookies);
   

    // Check if maxed
    if (autoFarmValues.length === 0 || upgradeAutoFarmLevels.length === 0) {
      bakerLevel.textContent = "MAX";
      bakergain.textContent = "MAX";
      

    } else {
      farmNextLevel.textContent = upgradeAutoFarmLevels[0];
      bakergain.textContent = autoFarmValues[0];
    }

    // Start auto-farm if not already running
    if (!isAutoFarmRunning && autoFarmValues.length > 0) {
      isAutoFarmRunning = true;

      setInterval(() => {
        let earnedCookies = autoFarmValues[0] || 0;
        totalCookies += earnedCookies;
        cookieScreen.textContent = formatCookies(totalCookies);
        bakergain.textContent = autoFarmValues[0] ?? "MAX";
      }, 3000);
    }
    checkScore();
  }
});



function formatCookies(num) {
  if (num < 100_000) {
    return num.toLocaleString(); // e.g., 45,000
  } else if (num < 1_000_000) {
    return Math.round(num / 1000) + "k"; // e.g., 115k
  } else if (num < 1_000_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + "M"; // e.g., 1.2M
  } else if (num < 1_000_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + "B"; // e.g., 3.5B
  } else {
    return (num / 1_000_000_000_000).toFixed(2).replace(/\.0+$/, '') + "T"; // e.g., 1.25T
  }
}


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
