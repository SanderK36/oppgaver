
let pikachu = {
  name: "Pikachu",
  health: 45,
  image: "Images/pikachu.png",
  level: 8,
};

let bulbasaur = {
  name: "Bulbasaur",
  health: 70,
  image: "Images/bulbasaur.png",
  level: 12,
};

let oranguru = {
  name: "Oranguru",
  health: 170,
  image: "Images/oranguru.png",
  level: 45,
};

let drowzee = {
  name: "Drowzee",
  health: 90,
  image: "Images/drowzee.png",
  level: 33,
};

let trainer = {
  name: "Sander",
  image: "./Images/pokemonTrainerIdle.png",
  trainerPokemon: [],
}

let possiblePokemon = [pikachu, bulbasaur, oranguru, drowzee];
let randomPokemon = null;
let app = document.getElementById("app");

updateView();

function updateView() {
  getRandomPokemon();
  app.innerHTML = /*HTML*/ `
  <div class="container">
    <div class="opposingPokemon">
        <div>${randomPokemon.name}</div> 
        <div>lvl: ${randomPokemon.level}</div>
        <img src="${randomPokemon.image}">
    </div>
    
    <div class="bottomScreen">
        <div class="player">
            <img src="${trainer.image}">
            <div>${trainer.name}</div>
        </div>

        <div class="buttonContainer">
            <button onclick="catchPokemon()">Fang</button>    
            <button onclick="updateView()">Finn en annen</button>
            <button onclick="showPokemon()">Vis dine pokemon</button>       
        </div>

    </div>
  </div>
  `;
}

function caughtPokemonView(){
  app.innerHTML = /*HTML*/`
  <div class="caughtContainer">
    <h1>Du fanget ${trainer.trainerPokemon[trainer.trainerPokemon.length - 1].name}</h1>
    <div class="buttonContainer">
              <button onclick="updateView()">Finn en annen</button>
              <button onclick="showPokemon()">Vis dine pokemon</button>
          </div>
  </div>
  `;
}

function catchPokemon(){
  trainer.trainerPokemon.push(randomPokemon);
  caughtPokemonView();
}

function showPokemon() {
  // Hvis vi har Pokémon i trainerPokemon, vis dem
  if (trainer.trainerPokemon.length > 0) {
    let pokemonList = "";
    
    // Bruker en vanlig for-løkke for å iterere gjennom Pokémonene
    for (let i = 0; i < trainer.trainerPokemon.length; i++) {
      let pokemon = trainer.trainerPokemon[i];
      pokemonList += `
        <div class="pokemonItem">
          <div>Navn: ${pokemon.name}</div>
          <div>Lvl: ${pokemon.level}</div>
          <img src="${pokemon.image}" alt="${pokemon.name}">
        </div>
      `;
    }

    app.innerHTML = /*HTML*/`
    <div class="pokemonContainer">
      <h2>Fangede Pokémon:</h2>
      <div class="pokemonList">${pokemonList}</div>
      <div class="buttonContainer">
        <button onclick="updateView()">Finn en annen Pokémon</button>
        <button onclick="showPokemon()">Vis dine pokemon</button>
      </div>
    </div>
    `;
  } else {
    // Hvis ingen Pokémon er fanget, vis en melding
    app.innerHTML = /*HTML*/`
    <div class="noPokemonContainer">
      <h2>Du har ikke fanget noen Pokémon ennå.</h2>
      <div class="buttonContainer">
        <button onclick="updateView()">Finn en Pokémon</button>
      </div>
    </div>
    `;
  }
}


function getRandomPokemon(){
  let randomNum = Math.floor(Math.random() * possiblePokemon.length);
  randomPokemon = possiblePokemon[randomNum];
}
