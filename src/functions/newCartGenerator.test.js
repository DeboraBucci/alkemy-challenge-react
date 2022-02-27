import { newCartGenerator } from "./newCartGenerator";

test("should return cart object", () => {
  const cartObj = newCartGenerator(
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven"
  );

  expect(cartObj).toStrictEqual({
    totalDishes: "one",
    totalPrice: "two",
    totalTime: "three",
    totalHealthScore: "four",
    totalServings: "five",
    veganMeals: "six",
    nonVeganMeals: "seven",
  });
});
