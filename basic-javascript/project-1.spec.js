const helpers = require("./project-1");

// start testing!
test("multiply ten times ten", () => {
  const input = 10;
  const output = 100;

  expect(helpers.multiplyByTen(input)).toBe(output);
});

test("subtract five from ten", () => {
  const input = 10;
  const output = 5;

  expect(helpers.subtractFive(input)).toBe(output);
});

test("strings same length", () => {
  const str1 = "stringof9";
  const str2 = "peterpham";

  expect(helpers.areSameLength(str1, str2)).toBe(true);
});

test("strict equals", () => {
  const x = 10;
  const y = 10;

  expect(helpers.areEqual(x, y)).toBe(true);
});

describe("lessThanNinety", () => {
  test("70 < 90", () => {
    expect(helpers.lessThanNinety(70)).toBe(true);
  });
  test("100 < 90", () => {
    expect(helpers.lessThanNinety(100)).toBe(false);
  });
});

describe("greaterThanFifty", () => {
  test("100 > 50", () => {
    expect(helpers.greaterThanFifty(100)).toBe(true);
  });
  test("10 > 50", () => {
    expect(helpers.greaterThanFifty(10)).toBe(false);
  });
});

test("add 2 + 3", () => {
  expect(helpers.add(2, 3)).toBe(5);
});

test("subtract 10 - 7", () => {
  expect(helpers.subtract(10, 7)).toBe(3);
});

test("divide 100 / 4", () => {
  expect(helpers.divide(100, 4)).toBe(25);
});

test("multiply 5 * 5", () => {
  expect(helpers.multiply(5, 5)).toBe(25);
});

test("remainder 10 % 7", () => {
  expect(helpers.getRemainder(10, 7)).toBe(3);
});

describe("isEven", () => {
  test("10", () => {
    expect(helpers.isEven(10)).toBe(true);
  });
  test("7", () => {
    expect(helpers.isEven(7)).toBe(false);
  });
});

describe("isOdd", () => {
  test("10", () => {
    expect(helpers.isOdd(10)).toBe(false);
  });
  test("7", () => {
    expect(helpers.isOdd(7)).toBe(true);
  });
});

test("square 5 is 25", () => {
  expect(helpers.square(5)).toBe(25);
});

test("cube 5 is 125", () => {
  expect(helpers.cube(5)).toBe(125);
});
