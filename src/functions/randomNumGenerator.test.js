import { randomNumGenerator } from "./randomNumGenerator";

test("should return random number between min and max established (if no arguments passed, returns nums between 0 and 1)", () => {
  const num1 = Math.floor(randomNumGenerator());
  expect(num1).toStrictEqual(0);

  const num2 = Math.ceil(randomNumGenerator());
  expect(num2).toStrictEqual(1);

  const num3 = Math.floor(randomNumGenerator(3, 4));
  expect(num3).toStrictEqual(3);
});
