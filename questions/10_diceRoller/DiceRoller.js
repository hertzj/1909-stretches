// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  constructor(sides, numDice) {
    if (typeof sides !== 'number' || typeof numDice !== 'number') {
      throw 'I need two numbers!'
      // for completness should have if statements
      // for all possible errors
      // so that we state exactly what went wrong
      // so would want if (!sides || !numDice) {throw 'bad'!}
      // above this
    }
    else if (sides < 1 || numDice < 1) {
      throw 'Must be positive!'
    }
    this.sides = sides;
    this.numDice = numDice;
    this.history = [];
  }

  roll() {
    let rolls = []
    for (let i = 0; i < this.numDice; i++) {
      let value = Math.ceil(Math.random() * this.sides);
      rolls.push(value)
    }
    this.history.push(rolls)
    return rolls;
  }
}

module.exports = { DiceRoller };
