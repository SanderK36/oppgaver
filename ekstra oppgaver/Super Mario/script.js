let bowser = {
  name: "Bowser",
  hp: 300,
  Image: "./img/bowser (1).png",
};

let mario = {
  name: "Mario",
  hp: 200,
  Image: "./img/mario (1).png",
};

let peach = {
  name: "Peach",
  hp: 100,
  Image: "./img/peach (1).png",
};

let yoshi = {
  name: "Yoshi",
  hp: 80,
  Image: "./img/yoshi (1).png",
};

let luigi = {
  name: "Luigi",
  hp: 140,
  Image: "./img/luigi (1).png",
};

        const app = document.getElementById("app");
        const result = document.getElementById("result");
        let selectedCharacter = null;
        let currentBowserHP = bowser.hp;

        updateView();
        function updateView() {
            app.innerHTML = /*HTML*/ `
                <h1 id="header">Select your character!</h1>
                <div id="SelectableCharacters">
                    <div class="mario" onclick="selectCharacter(mario)">
                        <img src="${mario.Image}" alt="mario">
                        <p>${mario.name} (HP: ${mario.hp})</p>
                    </div>
                    <div class="peach" onclick="selectCharacter(peach)">
                        <img src="${peach.Image}" alt="peach">
                        <p>${peach.name} (HP: ${peach.hp})</p>
                    </div>
                    <div class="yoshi" onclick="selectCharacter(yoshi)">
                        <img src="${yoshi.Image}" alt="yoshi">
                        <p>${yoshi.name} (HP: ${yoshi.hp})</p>
                    </div>
                    <div class="luigi" onclick="selectCharacter(luigi)">
                        <img src="${luigi.Image}" alt="luigi">
                        <p>${luigi.name} (HP: ${luigi.hp})</p>
                    </div>
                </div>
            `;
            result.textContent = ""; // Clear result
            currentBowserHP = bowser.hp; // Reset Bowser's HP
        }

        function selectCharacter(character) {
            selectCharacter = character;
            bossFightView();
        }

function bossFightView() {
    if (selectCharacter) {
        app.innerHTML = /*HTML*/ `
            <h1>Fight!</h1>
            <div id="fightScene">
                <div>
                    <img src="${selectCharacter.Image}" alt="${selectCharacter.name}">
                    <p>${selectCharacter.name} HP: ${selectCharacter.hp}</p>
                </div>
                <div>
                    <img src="${bowser.Image}" alt="Bowser">
                    <p>${bowser.name} HP: ${currentBowserHP}</p>
                </div>
            </div>
            <div style="text-align: center;">
                <button onclick="attack()">Attack</button>
                <button onclick="run()">Run</button>
            </div>
        `;
        result.textContent = "Click 'Attack' to deal 50 damage to Bowser!";
    }
}

function winnerScreen() {
    app.innerHTML = /*HTML*/ `
        <div id="winnerScreen">
            <h1>Victory!</h1>
            <img src="${selectedCharacter.Image}" alt="${selectedCharacter.name}">
            <p>${selectedCharacter.name} has defeated Bowser!</p>
            <button onclick="updateView()">Play Again</button>
        </div>
    `;
    result.textContent = "";
}

function attack() {
    currentBowserHP -= 50;

    app.innerHTML = /*HTML*/ `
        <h1>Fight!</h1>
        <div id="fightScene">
            <div>
                <img src="${selectCharacter.Image}" alt="${selectCharacter.name}">
                <p>${selectCharacter.name} HP: ${selectCharacter.hp}</p>
            </div>
            <div>
                <img src="${bowser.Image}" alt="Bowser">
                <p>${bowser.name} HP: ${currentBowserHP}</p>
            </div>
        </div>
        <div style="text-align: center;">
            <button onclick="attack()">Attack</button>
            <button onclick="run()">Run</button>
        </div>
    `;

    
    if (currentBowserHP <= 0) {
        result.textContent = `${selectCharacter.name} defeats Bowser!`;
        app.innerHTML += /*HTML*/ `
            <div style="text-align: center;">
                <button onclick="updateView()">Back to Selection</button>
            </div>
        `;
    } else {
        result.textContent = `Bowser has ${currentBowserHP} HP left!`;
    }
}

function run() {
    updateView();
}

