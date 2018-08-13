const helpers = require("./project-1");

// start testing!
it("Runs the tests", () => {
  expect(true).toBe(true);
});

it("Multiplys By Ten", () => {
  expect(helpers.multiplyByTen(10)).toBe(100);
  expect(helpers.multiplyByTen(0)).toBe(0);
  expect(helpers.multiplyByTen(-4)).toBe(-40);
});

it("Subtracts Five", () => {
  expect(helpers.subtractFive(5)).toBe(0);
  expect(helpers.subtractFive(-5)).toBe(-10);
  expect(helpers.subtractFive(0)).toBe(-5);
  expect(helpers.subtractFive("four")).toBe(NaN);
});

it("Returns true if strings are same length", () => {
  expect(helpers.areSameLength("string1", "string2")).toBe(true);
  expect(helpers.areSameLength("string1", "string02")).toBe(false);
});

it("Returns true if both inputs match", () => {
  expect(helpers.areEqual(2, 2)).toBe(true);
  expect(helpers.areEqual("four", "four")).toBe(true);
  expect(helpers.areEqual(4, 397)).toBe(false);
  expect(helpers.areEqual(4, -4)).toBe(false);
  expect(helpers.areEqual(4, "4")).toBe(false);
});

it("Returns true if number is less than 90", () => {
  expect(helpers.lessThanNinety(90)).toBe(false);
  expect(helpers.lessThanNinety(-95)).toBe(true);
  expect(helpers.lessThanNinety("forty five")).toBe(false);
  expect(helpers.lessThanNinety(375)).toBe(false);
});

it("Returns true if given number is greater than 50", () => {
  expect(helpers.greaterThanFifty(50)).toBe(false);
  expect(helpers.greaterThanFifty(51)).toBe(true);
  expect(helpers.greaterThanFifty(-50)).toBe(false);
  expect(helpers.greaterThanFifty("789")).toBe(true);
});

it("Returns the sum of two numbers", () => {
  expect(helpers.add(4, 5)).toBe(9);
  expect(helpers.add(4, -5)).toBe(-1);
  expect(helpers.add("4", 7)).toBe("47");
});

it("Returns num_a - num_b", () => {
  expect(helpers.subtract(5, 5)).toBe(0);
  expect(helpers.subtract(5, -5)).toBe(10);
  expect(helpers.subtract(5, "-5")).toBe(10);
});

it("Returns num_a / num_b", () => {
  expect(helpers.divide(5, 5)).toBe(1);
  expect(helpers.divide(25, 5)).toBe(5);
  expect(helpers.divide(25, 0)).toBe(Infinity);
});

it("Returns num_a * num_b", () => {
  expect(helpers.multiply(10, 24)).toBe(240);
  expect(helpers.multiply(0, 24)).toBe(0);
  expect(helpers.multiply("0", 24)).toBe(0);
});
