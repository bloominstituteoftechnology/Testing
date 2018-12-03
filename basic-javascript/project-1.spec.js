const helpers = require("./project-1");

// start testing!
test("Jest runs", () => {});

it("multiplies parameter by 10", () => {
  const input = 2;
  const result = helpers.multiplyByTen(input);
  expect(result).toBe(20);
});

it("subtracts parameter by 5", () => {
  const input = 10;
  const result = helpers.subtractFive(input);
  expect(result).toBe(5);
});

it("checks that parameters are the same length", () => {
  const input1 = "sham";
  const input2 = "max";
  const result = helpers.areSameLength(input1, input2);
  expect(result).toBe(false);
});

it("checks that parameters are the same value", () => {
  const input1 = "sham";
  const input2 = "spam";
  const result = helpers.areEqual(input1, input2);
  expect(result).toBe(false);
});

it("checks that parameter's value is less than 90", () => {
  const input = 80;
  const result = helpers.lessThanNinety(input);
  expect(result).toBe(true);
});

it("checks that parameter's value is greater than 50", () => {
  const input = 80;
  const result = helpers.greaterThanFifty(input);
  expect(result).toBe(true);
});

it("returns the sum of the parameters", () => {
  const input1 = 5;
  const input2 = 2;
  const result = helpers.add(input1, input2);
  expect(result).toBe(7);
});

it("returns the difference of the parameters", () => {
  const input1 = 5;
  const input2 = 2;
  const result = helpers.subtract(input1, input2);
  expect(result).toBe(3);
});

it("returns the result of the paramter 1 being divided by paramater 2", () => {
  const input1 = 6;
  const input2 = 2;
  const result = helpers.divide(input1, input2);
  expect(result).toBe(3);
});
