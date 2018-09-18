const helpers = require("./project-1");

// start testing!

//multiplyByTen

it("should multiply a number by 10", () => {
  //test something here

  //Arrange: set up the world
  const expected = 50;

  //Act: execute the tested code
  const actual = helpers.multiplyByTen(5);

  //Assert: check the results are correct

  expect(actual).toBe(expected);

  //toBe is a matcher
});

it("should return zero if not given a number", () => {
  expect(helpers.multiplyByTen(undefined)).toBe(0);
  expect(helpers.multiplyByTen(null)).toBe(0);
  expect(helpers.multiplyByTen(NaN)).toBe(0);
  expect(helpers.multiplyByTen("cat")).toBe(0);
});

it("should convert a string to a number if possible", () => {
  expect(helpers.multiplyByTen("10")).toBe(100);
  expect(helpers.multiplyByTen("10.5")).toBe(105);
});

//subtractFive

it("should subtract 5 from a number", () => {
  expect(helpers.subtractFive(10)).toBe(5);
});

it("should return zero if not given a number", () => {
  expect(helpers.subtractFive(undefined)).toBe(0);
  expect(helpers.subtractFive(null)).toBe(0);
  expect(helpers.subtractFive(NaN)).toBe(0);
  expect(helpers.subtractFive("cat")).toBe(0);
});

it("should convert a string to a number if possible", () => {
  expect(helpers.subtractFive("10")).toBe(5);
  expect(helpers.subtractFive("10.5")).toBe(5.5);
});

//areSameLength 


