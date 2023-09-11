import { AbstractDie, DieColor, WhiteSide, BlackSide } from "./die";

test("Dice have colors", () => {
  const white = new AbstractDie(DieColor.White);
  expect(white.color).toBe(DieColor.White);
  const black = new AbstractDie(DieColor.Black);
  expect(black.color).toBe(DieColor.Black);
});

test("Dice have values", () => {
  const die = new AbstractDie(DieColor.White);
  expect(die.value).toBeGreaterThan(0);
  expect(die.value).toBeLessThan(7);
});

test("The full roll contains 3 white and 3 black dice", () => {
  const { white, black } = AbstractDie.rollDice();
  expect(white.length).toBe(3);
  expect(black.length).toBe(3);
});

test("The full roll contains no more than 2 clovers", () => {
  const { white } = AbstractDie.rollDice();
  const clovers = white.reduce((acc, curr) => {
    if (WhiteSide.Clover === curr.value) {
      acc += 1;
    }
    return acc;
  }, 0);
  expect(clovers).toBeLessThan(3);
});

test("The full roll contains no more than 2 skulls", () => {
  const { white, black } = AbstractDie.rollDice();
  const skulls = [...white, ...black].reduce((acc, curr) => {
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
  expect(skulls).toBeLessThan(3);
});
