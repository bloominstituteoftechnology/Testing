const helpers = require("./project-1");

// start testing!
// start multiplyByTen tests
it("should multiply num by 10", () => {
  expect(helpers.multiplyByTen(5)).toBe(50);
  expect(helpers.multiplyByTen(20)).toBe(200);
  expect(helpers.multiplyByTen(20.55)).toBe(205.5);
});

it("should convert to number if typeof not number and multiply", () => {
  expect(helpers.multiplyByTen("5")).toBe(50);
  expect(helpers.multiplyByTen("20")).toBe(200);
});
// end multiplyByTen tests

// start subtractFive tests
it("should subtract 5 from num", () => {
  expect(helpers.subtractFive(5555)).toBe(5550);
  expect(helpers.subtractFive(20.333)).toBeCloseTo(15.333, 5);
});

it("should return 'missing number' if undefined", () => {
  expect(helpers.subtractFive()).toBe("missing number");
});
// end subtractFive tests

// start areSameLength tests
it("should return true if strings are same length", () => {
  expect(helpers.areSameLength("Gill", "Gill")).toBe(true);
  expect(helpers.areSameLength("Gilly", "Gill")).toBe(false);
  expect(helpers.areSameLength("Gill ", "Gill")).toBe(false);
});

it("missing one param", () => {
  expect(helpers.areSameLength("Gill")).toBe("missing one of the arguments");
});
// end areSameLength tests

// start areEqual tests
it("should return true if args are equal", () => {
  expect(helpers.areEqual("Gill", "Gill")).toBe(true);
  expect(helpers.areEqual(5, 5)).toBe(true);
  expect(helpers.areEqual(["Gill", "Bill"], ["Gill", "Bill"])).toBe(true);
});

it("should return false if args are !equal", () => {
  expect(helpers.areEqual("Gilla", "Gill")).toBe(false);
  expect(helpers.areEqual(5.1, 5)).toBe(false);
  expect(helpers.areEqual(["Gilla", "Bill"], ["Gill", "Bill"])).toBe(false);
});
// end areEqual tests

// start lessThanNinety tests
it("should return true if num is less than 90", () => {
  expect(helpers.lessThanNinety(5)).toBe(true);
  expect(helpers.lessThanNinety(-1)).toBe(true);
  expect(helpers.lessThanNinety(89)).toBe(true);
});

it("should return false if num is less than 90", () => {
  expect(helpers.lessThanNinety(999)).toBe(false);
  expect(helpers.lessThanNinety(100)).toBe(false);
  expect(helpers.lessThanNinety(90)).toBe(false);
});
// end lessThanNinety tests

// start greaterThanFifty tests
it("should return false if num is less than 50", () => {
  expect(helpers.greaterThanFifty(5)).toBe(false);
  expect(helpers.greaterThanFifty(-1)).toBe(false);
  expect(helpers.greaterThanFifty(49)).toBe(false);
});

it("should return true if num is less than 50", () => {
  expect(helpers.greaterThanFifty(999)).toBe(true);
  expect(helpers.greaterThanFifty(100)).toBe(true);
  expect(helpers.greaterThanFifty(51)).toBe(true);
});
// end greaterThanFifty tests

// start add tests
it("should return the sum of x and y", () => {
  expect(helpers.add(5, 4)).toBe(9);
  expect(helpers.add(-1, 5)).toBe(4);
  expect(helpers.add(10, -1)).toBe(9);
  expect(helpers.add(10, -1.55)).toBe(8.45);
});

it("should convert x or y if either is a string number", () => {
  expect(helpers.add("5", 4)).toBe(9);
  expect(helpers.add("-1", "5")).toBe(4);
  expect(helpers.add("10", -1)).toBe(9);
  expect(helpers.add(10, "-1.55")).toBe(8.45);
});
// end add tests

// start subtract tests
it("should return the difference of x and y", () => {
  expect(helpers.subtract(50, 4)).toBe(46);
  expect(helpers.subtract(-1, 5)).toBe(-6);
  expect(helpers.subtract(10, -1)).toBe(11);
  expect(helpers.subtract(10, -1.55)).toBe(11.55);
});

it("should convert x or y if either is a string number", () => {
  expect(helpers.subtract("50", 4)).toBe(46);
  expect(helpers.subtract(-1, "5")).toBe(-6);
  expect(helpers.subtract("10", "-1")).toBe(11);
  expect(helpers.subtract("10", -1.55)).toBe(11.55);
});
// end subtract tests
