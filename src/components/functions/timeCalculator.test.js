const { timeCalculator } = require("./timeCalculator");

test("should return array with hours and minutes", () => {
  const time = timeCalculator(90);
  expect(time).toStrictEqual([1, 30]);
});
