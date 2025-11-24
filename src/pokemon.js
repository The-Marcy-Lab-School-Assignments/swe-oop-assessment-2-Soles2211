class Pokemon {
  #health = 100;

  #level = 1;

  static allPokemon = [];

  constructor(name, type) {
    this.name = name;
    this.type = type;
    Pokemon.allPokemon.push(this);
  }

  getHealth() {
    return this.#health;
  }

  getLevel() {
    return this.#level;
  }

  levelUp() {
    this.#level += 1;
    return `${this.name} leveled up to level ${this.#level}!`;
  }

  isFainted() {
    if (this.#health <= 0) {
      return true;
    }
    return false;
  }

  attack(targetPokemon) {
    targetPokemon.#health -= this.#level * 10;
    return `${this.name} attacked ${targetPokemon.name}!`;
  }

  static getTotalPokemon() {
    return Pokemon.allPokemon.length;
  }

  static findByName(name) {
    return Pokemon.allPokemon.find((pokemon) => pokemon.name === name);
  }
}

// TEST YOUR CODE HERE
const charizard = new Pokemon(`Charizard`, `Fire`);
const squirtle = new Pokemon(`Squirtle`, `Water`);

// 1. Checking instance properties
console.log(charizard);
console.log(squirtle);

// 2. Leveling up a Pokemon
squirtle.levelUp();
squirtle.levelUp();
squirtle.levelUp();

// 3. Checking the level
console.log(squirtle.getLevel());
// OR if you use the get syntax
console.log(squirtle.level);

// 4. Checking on health
console.log(squirtle.getHealth());
// OR if you use the get syntax
console.log(squirtle.health);

// 5. Attacking until one faints
while (!charizard.isFainted()) {
  squirtle.attack(charizard);
}
console.log('Charizard has fainted!');

// 6. Finding a Pokemon instance
console.log(Pokemon.findByName('Charizard'));

// 7. Viewing count of all Pokemon
console.log('Total Pokemon:', Pokemon.getTotalPokemon());
// DO NOT REMOVE
module.exports = { Pokemon };
