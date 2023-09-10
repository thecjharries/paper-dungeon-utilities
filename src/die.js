export const WhiteSide = {
  Warrior: 1,
  Wizard: 2,
  Cleric: 3,
  Rogue: 4,
  Skull: 5,
  Clover: 6,
};

export const BlackSide = {
  Warrior: 1,
  Wizard: 2,
  Cleric: 3,
  Rogue: 4,
  Skull: 5,
  Boot: 6,
};

export const DieColor = {
  White: 0,
  Black: 1,
};

export class Die {
  value;
  color;

  constructor(color) {
    this.color = color;
    this.value = Die.roll();
  }

  static roll() {
    return Math.floor(Math.random() * 6) + 1;
  }

  static rollDice() {
    let white = [
      new Die(DieColor.White),
      new Die(DieColor.White),
      new Die(DieColor.White),
    ];
    let clovers = white.reduce((acc, curr) => {
      if (WhiteSide.Clover === curr.value) {
        acc += 1;
      }
      return acc;
    }, 0);
    if (3 === clovers) {
      return Die.rollDice();
    }
    let black = [
      new Die(DieColor.Black),
      new Die(DieColor.Black),
      new Die(DieColor.Black),
    ];
    let skulls = [...white, ...black].reduce((acc, curr) => {
      if (curr.color === DieColor.Black && BlackSide.Skull === curr.value) {
        acc += 1;
      } else if (
        curr.color === DieColor.White &&
        WhiteSide.Skull === curr.value
      ) {
        acc += 1;
      }
      return acc;
    }, 0);
    if (3 <= skulls) {
      return Die.rollDice();
    }
    return {
      white,
      black,
    };
  }
}
