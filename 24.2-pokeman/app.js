function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon = function () {
  console.log(`I choose you ${this.name}`);
};

Pokemon.prototype.attack = function (attackNum) {
  if (typeof attackNum !== "number" || attackNum < 0 || attackNum > 4) {
    console.log(`${attackNum} is invalid!`);
  } else {
    console.log(`${this.name} attack ${this.attackList[attackNum]}`);
  }
};

let pokemon1 = new Pokemon("Alakazam", "Psychic", [
  "Shadow Ball",
  "Focus Blast",
  "Future Sight",
  "Fire Punch",
]);
let pokemon2 = new Pokemon("Pikachu", "Electric", [
  "Thunder Shock",
  "Thunderbolt",
  "Quick Attack",
  "Iron Tail",
]);
let pokemon3 = new Pokemon("Charizard", "Fire", [
  "Ember Fire",
  "Fire Spin Fire",
  "Air Slash Flying",
  "Wing Attack Flying",
]);

let random = Math.floor(Math.random() * 4);

pokemon1.callPokemon();
pokemon1.attack(random);
pokemon2.callPokemon();
pokemon2.attack(random);
pokemon3.callPokemon();
pokemon3.attack(random);
