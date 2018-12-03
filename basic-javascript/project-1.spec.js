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
