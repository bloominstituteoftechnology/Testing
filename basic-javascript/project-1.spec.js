const helpers = require("./project-1");

// start testing!

//Run all tests
test("should run tests", () => {});

//Use 'it' instead of 'tests'
it("should run tests using it() in addition to test()", () => {});

//Multiply by ten
it("should multiply provided number by ten", () => {
  const expected = 100;

  const actual = helpers.multiplyByTen(10);
  expect(actual).toEqual(expected);
});

it("should return 0 when called with no value", () => {
  const product = helpers.multiplyByTen();

  expect(product).toBe(0);
});

//Subtract by five
it("should subtract provided number by five", () => {
  const expected = 6;

  const actual = helpers.subtractFive(11);
  expect(actual).toEqual(expected);
});

//Are the strings the same length
it("should check if strings are the same length", () => {
  const expected = true;

  const actual = helpers.areSameLength("bear", "bear");
  expect(actual).toEqual(expected);
});

//Are the values equal
it("should check if values are the equal", () => {
  const expected = true;

  const actual = helpers.areEqual("bear", "bear");
  expect(actual).toEqual(expected);
});
