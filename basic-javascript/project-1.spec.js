const helpers = require("./project-1");

it("should multiply a number by 10", () => {
  const expected = 100;
  const actual = helpers.multiplyByTen(10);

  expect(helpers.multiplyByTen("something")).toBe(0);
  expect(actual).toBe(expected);
  expect(helpers.multiplyByTen(20)).toBe(200);
  expect(helpers.multiplyByTen("5")).toBe(50);
  expect(helpers.multiplyByTen("34a")).toBe(0);
});

it("should take a number and subtract 5 from it", () => {
  const expected = 10;
  const actual = helpers.subtractFive(15);
  expect(actual).toBe(expected); 
  expect(helpers.subtractFive("something")).toBe(-5);
  expect(helpers.subtractFive("345")).toBe(340);
  expect(helpers.subtractFive(23)).toBe(18);
  expect(helpers.subtractFive(-90)).toBe(-95);

});

// start testing!
