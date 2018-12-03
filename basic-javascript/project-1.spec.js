const helpers = require("./project-1");

// start testing!
describe("multiplyByTen", () => {
  test("multiples num by 10", () => {
    // Arrange:
    const input = 10;
    const expected = 100;
    // Act:
    const result = helpers.multiplyByTen(input);

    // Expect:
    expect(result).toBe(expected);
  });
});

describe("subtractFive", () => {
  it("subtracts 5 from num", () => {
    const input = 10;
    const expected = 5;
    const result = helpers.subtractFive(input);
    expect(result).toBe(expected);
  });
});

describe("areSameLength", () => {
  it("checks if two strings are equal length", () => {
    const areSameLength = helpers.areSameLength;

    const notEqual = areSameLength("abc", "abcd");
    const equal = areSameLength("abd", "bds");

    expect(notEqual).toBeFalsy();
    expect(equal).toBeTruthy();
  });
});

describe("areEqual", () => {
  it("checks if two inputs are strictly equal", () => {
    const input1 = 42;
    const input2 = 42;
    const result = helpers.areEqual(input1, input2);
    expect(result).toBeTruthy();
  });
});

describe("lessThanNinety", () => {
  const lessThanNinety = helpers.lessThanNinety;
  it("checks if input is a number", () => {
    const isNum = lessThanNinety(20);
    const notNum = lessThanNinety("twenty");

    expect(isNum).toBeTruthy();
    expect(notNum).toBeFalsy();
  });

  it("checks if input is less than 90", () => {
    const less = lessThanNinety(89);
    const same = lessThanNinety(90);
    const greater = lessThanNinety(91);

    expect(less).toBeTruthy();
    expect(same).toBeFalsy();
    expect(greater).toBeFalsy();
  });
});
