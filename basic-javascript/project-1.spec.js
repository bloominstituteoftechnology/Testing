const helpers = require("./project-1");

// start testing!

describe("multiplyByTen", () => {
  it("number should multiply by ten", () => {
    expect(helpers.multiplyByTen(5)).toBe(50);
    expect(helpers.multiplyByTen(4)).toBe(40);
    expect(helpers.multiplyByTen(3)).toBe(30);
  });
});

describe("subtractFive", () => {
  it("number should subtract five", () => {
    expect(helpers.subtractFive(5)).toBe(0);
  });
});

describe("areSameLength", () => {
  it("should return true if two string length are true", () => {
    expect(helpers.areSameLength("hey", "bye")).toBe(true);
  });
});

describe("areEqual", () => {
  it("should return true if two variables are strict equal", () => {
    expect(helpers.areEqual(2, 2)).toBe(true);
  });
});

describe("lessThanNinety", () => {
  it("should return true if num is less than 90 or false if it is greater than 90", () => {
    expect(helpers.lessThanNinety(80)).toBe(true);
    expect(helpers.lessThanNinety(92)).toBe(false);
  });
});

describe("greaterThanFifty", () => {
  it("should return true if num is greater than 50 or false if is less than 50", () => {
    expect(helpers.greaterThanFifty(52)).toBe(true);
    expect(helpers.greaterThanFifty(40)).toBe(false);
  });
});

describe("add", () => {
  it("should return the sum of two variables", () => {
    expect(helpers.add(4, 5)).toBe(9);
  });
});

describe("subtract", () => {
  it("should return the difference of two variables", () => {
    expect(helpers.subtract(5, 4)).toBe(1);
  });
});

describe("divide", () => {
  it("sould return the quotient of two variables", () => {
    expect(helpers.divide(10, 2)).toBe(5);
  });
});

describe("multiply", () => {
  it("should return the product of two variables", () => {
    expect(helpers.multiply(3, 3)).toBe(9);
  });
});

describe("getRemainder", () => {
  it("should return the remainder of two variables", () => {
    expect(helpers.getRemainder(5, 2)).toBe(1);
  });
});
