const helpers = require("./project-1");

// start testing!

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
  expect(helpers.multiplyByTen("10")).toBe(0);
});
