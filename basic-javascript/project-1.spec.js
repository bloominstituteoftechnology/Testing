const helpers = require("./project-1");

// start testing!
// start multiplyByTen tests
it("should multiply num by 10", () => {
  expect(helpers.multiplyByTen(5)).toBe(50);
  expect(helpers.multiplyByTen(20)).toBe(200);
});

it("should convert to number if typof not number and multiply", () => {
  expect(helpers.multiplyByTen("5")).toBe(50);
  expect(helpers.multiplyByTen("20")).toBe(200);
});
// end multiplyByTen tests
