const helpers = require("./project-1");

// start testing!
// start multiplyByTen tests
describe("multiplyByTen function", () => {
  it("should multiply num by 10", () => {
    expect(helpers.multiplyByTen(5)).toBe(50);
    expect(helpers.multiplyByTen(20)).toBe(200);
    expect(helpers.multiplyByTen(20.55)).toBe(205.5);
  });

  it("should convert to number if typeof not number and multiply", () => {
    expect(helpers.multiplyByTen("5")).toBe(50);
    expect(helpers.multiplyByTen("20")).toBe(200);
  });
});
// end multiplyByTen tests

// start subtractFive tests
describe("subtractFive function", () => {
  it("should subtract 5 from num", () => {
    expect(helpers.subtractFive(5555)).toBe(5550);
    expect(helpers.subtractFive(20.333)).toBeCloseTo(15.333, 5);
  });

  it("should return 'missing number' if undefined", () => {
    expect(helpers.subtractFive()).toBe("missing number");
  });
});
// end subtractFive tests

// start areSameLength tests
describe("areSameLength function", () => {
  it("should return true if strings are same length", () => {
    expect(helpers.areSameLength("Gill", "Gill")).toBe(true);
    expect(helpers.areSameLength("Gilly", "Gill")).toBe(false);
    expect(helpers.areSameLength("Gill ", "Gill")).toBe(false);
  });

  it("missing one param", () => {
    expect(helpers.areSameLength("Gill")).toBe("missing one of the arguments");
  });
});
// end areSameLength tests

// start areEqual tests
describe("areEqual function", () => {
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
});
// end areEqual tests

// start lessThanNinety tests
describe("lessThanNinety function", () => {
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
});
// end lessThanNinety tests

// start greaterThanFifty tests
describe("greaterThanFifty function", () => {
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
});
// end greaterThanFifty tests

// start add tests
describe("add function", () => {
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
});
// end add tests

// start subtract tests
describe("subtract function", () => {
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
});
// end subtract tests

// start divide tests
describe("divide function", () => {
  it("should return the quotient of x divided y", () => {
    expect(helpers.divide(40, 4)).toBeCloseTo(10, 5);
    expect(helpers.divide(5, 5)).toBeCloseTo(1, 3);
    expect(helpers.divide(10, -1)).toBeCloseTo(-10, 3);
    expect(helpers.divide(-10, -1.55)).toBeCloseTo(6.455, 2);
  });

  it("should convert x or y if either is a string number and return quotient", () => {
    expect(helpers.divide("40", 4)).toBeCloseTo(10, 5);
    expect(helpers.divide(5, "5")).toBeCloseTo(1, 3);
    expect(helpers.divide("10", "-1")).toBeCloseTo(-10, 3);
    expect(helpers.divide("-10", -1.55)).toBeCloseTo(6.451, 2);
  });
});
// end divide tests

// start multiply tests
describe("multiply function", () => {
  it("should return the product of x multiplied y", () => {
    expect(helpers.multiply(4, 4)).toBeCloseTo(16, 5);
    expect(helpers.multiply(5, -5)).toBeCloseTo(-25, 3);
    expect(helpers.multiply(10, -1)).toBeCloseTo(-10, 3);
    expect(helpers.multiply(-10, -1.55)).toBeCloseTo(15.5, 2);
  });

  it("should convert x or y if either is a string number and return product", () => {
    expect(helpers.multiply("4", 4)).toBeCloseTo(16, 5);
    expect(helpers.multiply(5, "-5")).toBeCloseTo(-25, 3);
    expect(helpers.multiply("10", "-1")).toBeCloseTo(-10, 3);
    expect(helpers.multiply("-10", -1.55)).toBeCloseTo(15.5, 2);
  });
});
// end multiply tests

// start getRemainder tests
describe("getRemainder function", () => {
  it("should return remainder of x and y", () => {
    expect(helpers.getRemainder(4, 4)).toBe(0);
    expect(helpers.getRemainder(10, -5)).toBe(0);
    expect(helpers.getRemainder(10, -3)).toBe(1);
    expect(helpers.getRemainder(-10, -1.55)).toBeCloseTo(-0.699, 2);
  });

  it("should convert x or y if either is a string number and return product", () => {
    expect(helpers.getRemainder(4, 4)).toBe(0);
    expect(helpers.getRemainder("10", -5)).toBe(0);
    expect(helpers.getRemainder(10, "-3")).toBe(1);
    expect(helpers.getRemainder("-10", "-1.55")).toBeCloseTo(-0.699, 2);
  });
});
// end getRemainder tests
