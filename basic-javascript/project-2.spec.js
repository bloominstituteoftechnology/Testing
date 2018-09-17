const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
it("return bigger num", () => {
  expect(funcs.getBiggest(4, 4)).toBe(4);
  expect(funcs.getBiggest(10, 5)).toBe(10);
  expect(funcs.getBiggest(-10, -3)).toBe(-3);
  expect(funcs.getBiggest(12, 12.1)).toBe(12.1);
});
