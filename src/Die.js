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

export class AbstractDie {
  value;
  color;

  constructor(color) {
    this.color = color;
    this.value = AbstractDie.roll();
  }

  face() {
    if (DieColor.White === this.color) {
      switch (this.value) {
        case WhiteSide.Warrior:
          return "Warrior";
        case WhiteSide.Wizard:
          return "Wizard";
        case WhiteSide.Cleric:
          return "Cleric";
        case WhiteSide.Rogue:
          return "Rogue";
        case WhiteSide.Skull:
          return "Skull";
        default:
          return "Clover";
      }
    }
    switch (this.value) {
      case BlackSide.Warrior:
        return "Warrior";
      case BlackSide.Wizard:
        return "Wizard";
      case BlackSide.Cleric:
        return "Cleric";
      case BlackSide.Rogue:
        return "Rogue";
      case BlackSide.Skull:
        return "Skull";
      default:
        return "Boot";
    }
  }

  static sort(a, b) {
    if (a.value < b.value) {
      return -1;
    } else if (a.value > b.value) {
      return 1;
    }
    return 0;
  }

  static roll() {
    return Math.floor(Math.random() * 6) + 1;
  }

  static rollDice() {
    let white = [
      new AbstractDie(DieColor.White),
      new AbstractDie(DieColor.White),
      new AbstractDie(DieColor.White),
    ];
    let clovers = white.reduce((acc, curr) => {
      if (WhiteSide.Clover === curr.value) {
        acc += 1;
      }
      return acc;
    }, 0);
    if (3 === clovers) {
      return AbstractDie.rollDice();
    }
    let black = [
      new AbstractDie(DieColor.Black),
      new AbstractDie(DieColor.Black),
      new AbstractDie(DieColor.Black),
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
      return AbstractDie.rollDice();
    }
    white.sort(AbstractDie.sort);
    black.sort(AbstractDie.sort);
    return {
      white,
      black,
    };
  }
}

export default function Die(props) {
  const self = props.self;
  return (
    <div
      className={`die ${
        DieColor.White === self.color ? "white" : "black"
      } ${self.face().toLowerCase()}`}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${
          DieColor.White === self.color ? "white" : "black"
        }-${self.face().toLowerCase()}.png)`,
      }}
    ></div>
  );
}
