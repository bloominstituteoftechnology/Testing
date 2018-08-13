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

it("Returns the remainder after dividing num_a and num_b", () => {
  expect(helpers.getRemainder(10, 5)).toBe(0);
  expect(helpers.getRemainder(10, 3)).toBe(1);
  expect(helpers.getRemainder(10, 0)).toBe(NaN);
});

it("Returns true if given number is even", () => {
  expect(helpers.isEven(15)).toBe(false);
  expect(helpers.isEven(14)).toBe(true);
  expect(helpers.isEven(14.5)).toBe(false);
  expect(helpers.isEven(-14)).toBe(true);
});

it("Returns true if given number is odd", () => {
  expect(helpers.isOdd(5)).toBe(true);
  expect(helpers.isOdd(-5)).toBe(true);
  expect(helpers.isOdd(4)).toBe(false);
});

it("Returns the square of a number", () => {
  expect(helpers.square(2)).toBe(4);
  expect(helpers.square(0)).toBe(0);
  expect(helpers.square(-14)).toBe(196);
});

it("Returns the cube of a number", () => {
  expect(helpers.cube(2)).toBe(8);
  expect(helpers.cube(3)).toBe(27);
  expect(helpers.cube(-3)).toBe(-27);
});

it("Returns num_a to the power of num_0", () => {
  expect(helpers.raiseToPower(2, 3)).toBe(8);
  expect(helpers.raiseToPower(0, 10)).toBe(0);
  expect(helpers.raiseToPower(10, 10)).toBe(10000000000);
});

it("Returns the number rounded to the nearest integer", () => {
  expect(helpers.roundNumber(5.2)).toBe(5);
  expect(helpers.roundNumber(4.8)).toBe(5);
  expect(helpers.roundNumber(4.48)).toBe(4);
});

it("Returns the number as an int without remainder", () => {
  expect(helpers.roundUp(4.2)).toBe(5);
  expect(helpers.roundUp(5.8)).toBe(6);
});

it("Returns the string concatenated with an exclimation point", () => {
  expect(helpers.addExclamationPoint("")).toBe("!");
  expect(helpers.addExclamationPoint("test")).toBe("test!");
  expect(helpers.addExclamationPoint("HelloWorld")).toBe("HelloWorld!");
});

it("Returns first_string concatenated with second_string", () => {
  expect(helpers.combineNames("Rocky", "Balboa")).toBe("Rocky Balboa");
  expect(helpers.combineNames("1", "2")).toBe("1 2");
});

it("Returns Hello concatenated with the input string plus !", () => {
  expect(helpers.getGreeting("Fred")).toBe("Hello Fred!");
  expect(helpers.getGreeting("0")).toBe("Hello 0!");
});

it("Returns the area of a rectangle given two sides", () => {
  expect(helpers.getRectangleArea(10, 2)).toBe(20);
  expect(helpers.getRectangleArea(10, 10)).toBe(100);
  expect(helpers.getRectangleArea(10, 1.5)).toBe(15);
});

it("Returns the area of a triangle given two sides", () => {
  expect(helpers.getTriangleArea(10, 10)).toBe(50);
  expect(helpers.getTriangleArea(10, 5)).toBe(25);
  expect(helpers.getTriangleArea(10, 100)).toBe(500);
});

it("Given the radius of a circle returns the area", () => {
  expect(helpers.getCircleArea(5)).toBe(78.53981633974483);
  expect(helpers.getCircleArea(10)).toBe(314.1592653589793);
  expect(helpers.getCircleArea(1)).toBe(3.141592653589793);
});

it("Returns the rectangular prism volume", () => {
  expect(helpers.getRectangularPrismVolume(10, 10, 10)).toBe(1000);
  expect(helpers.getRectangularPrismVolume(10, 5, 10)).toBe(500);
  expect(helpers.getRectangularPrismVolume(10, 10, 5)).toBe(500);
});
