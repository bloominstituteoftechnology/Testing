const helpers = require("./project-1");

// start testing!
test("multiplyByTen", () => {
  expect(helpers.multiplyByTen(10)).toBe(100);
});

test("subtractFive", () => {
  expect(helpers.subtractFive(10)).toBe(5);
  expect(helpers.subtractFive(-10)).toBe(-15);
});

test("areSameLength", () => {
  expect(helpers.areSameLength("10", "20")).toBeTruthy();
});

test("areEqual", () => {
  expect(helpers.areEqual("10", "10")).toBeTruthy();
});

test("lessThanNinety", () => {
  expect(helpers.lessThanNinety(10)).toBeTruthy();
  expect(helpers.lessThanNinety(91)).toBeFalsy();
});

test("greaterThanFifty", () => {
  expect(helpers.greaterThanFifty(10)).toBeFalsy();
  expect(helpers.greaterThanFifty(91)).toBeTruthy();
});

test("add", () => {
  expect(helpers.add(10, 10)).toBe(20);
});

test("subtract", () => {
  expect(helpers.subtract(10, 10)).toBe(0);
});

test("divide", () => {
  expect(helpers.divide(20, 10)).toBe(2);
});

test("multiply", () => {
  expect(helpers.multiply(20, 10)).toBe(200);
});

test("getRemainder", () => {
  expect(helpers.getRemainder(20, 10)).toBe(0);
  expect(helpers.getRemainder(5, 2)).toBe(1);
});

test("isEven", () => {
  expect(helpers.isEven(20)).toBeTruthy();
  expect(helpers.isEven(21)).toBeFalsy();

});

test("isOdd", () => {
  expect(helpers.isOdd(21)).toBeTruthy();
  expect(helpers.isOdd(20)).toBeFalsy();
});

test("square", () => {
  expect(helpers.square(20)).toBe(400);
});

test("cube", () => {
  expect(helpers.cube(10)).toBe(1000);
});

test("raiseToPower", () => {
  expect(helpers.raiseToPower(10,3)).toBe(1000);
});

test("roundNumber", () => {
  expect(helpers.roundNumber(10.33)).toBe(10);
  expect(helpers.roundNumber(30.73)).toBe(31);
});

test("roundUp", () => {
  expect(helpers.roundUp(10.33)).toBe(11);
  expect(helpers.roundUp(30.73)).toBe(31);
});

test("addExclamationPoint", () => {
  expect(helpers.addExclamationPoint("10.33")).toEqual(expect.stringContaining("10.33!"));
});

test("combineNames", () => {
  expect(helpers.combineNames("10.33","test")).toEqual(expect.stringContaining("10.33 test"));
});

test("getGreeting", () => {
  expect(helpers.getGreeting("10.33")).toEqual(expect.stringContaining("Hello 10.33!"));
});

test("getRectangleArea", () => {
  expect(helpers.getRectangleArea(20, 10)).toBe(200);
  expect(helpers.getRectangleArea(5, 2)).toBe(10);
});

test("getTriangleArea", () => {
  expect(helpers.getTriangleArea(20, 10)).toBe(100);
  expect(helpers.getTriangleArea(5, 2)).toBe(5);
});

test("getCircleArea", () => {
  expect(helpers.getCircleArea(10)).toBeCloseTo(314,0);
});

test("getCircleArea", () => {
  expect(helpers.getRectangularPrismVolume(10,20,10)).toBe(2000);
});