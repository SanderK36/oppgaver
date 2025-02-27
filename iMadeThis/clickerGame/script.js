let points = 1000;
let pointsPerClick = 1;
let upgradeCost = 10;
let autoClickerCost = 255;
let autoClickers = 0;
let gambleCost = 1000;

function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div id="showPoints">${points}</div>
    <button id="pointsBtn" onclick="addPoints()">Add points</button>
    <div id="upgradeBtns">
    <button onclick="upgrade()">Upgrade(${upgradeCost}) (Current: ${pointsPerClick} points per click) </button>
    <button onclick="buyAutoClicker()">Buy AutoClicker(${autoClickerCost}) (Current clicks per second: ${autoClickers})</button>
    <button id="gamble" onclick="gamble()">Gamble (Cost: ${gambleCost} points) Small chance to gain x500 points or lose all</button>
    </div>
    `;
}

function createButtonHtml(){
    return/*HTML*/ `
    
    `;
}

function addPoints() {
    points += pointsPerClick;
    updateView();
}

function upgrade(){
    if(points >= upgradeCost){
        points -= upgradeCost;
        pointsPerClick++;
        upgradeCost *= 3;
        updateView();
    } else {
        alert('Not enough points!');
    }
}

function buyAutoClicker(){
    if(points >= autoClickerCost){
        points -= autoClickerCost;
        autoClickers += 2;
        autoClickerCost *= 7;
        startAutoClicker();
        updateView();
    }else {
        alert('Not enough points!');
    }
}

function startAutoClicker(){
    setInterval(() => {
        points += autoClickers;
        updateView();
    }, 1000);
}

function gamble(){
    if(points >= gambleCost){
        let pointsGenerated = points;
        points -= gambleCost;
        if (Math.random() < 0.02){ 
            let winnings = pointsGenerated * 500; 
            points += winnings;
            alert(`Congratulations! You won the gamble and your points are multiplied by 500! You gained ${winnings} points.`);
        } else {
            points = 0;
            alert('Sorry, you lost the gamble and all your points are gone.');
        }
        updateView();
    } else {
        alert('Not enough points to gamble!');
    }
}