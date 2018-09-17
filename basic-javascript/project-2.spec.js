const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
// getBiggest start
it("return bigger num", () => {
  expect(funcs.getBiggest(4, 4)).toBe(4);
  expect(funcs.getBiggest(10, 5)).toBe(10);
  expect(funcs.getBiggest(-10, -3)).toBe(-3);
  expect(funcs.getBiggest(12, 12.1)).toBe(12.1);
});
// end getBiggest start

// greeting start
it("return correct greeting", () => {
  expect(funcs.greeting("swahili")).toEqual("Hello!");
  expect(funcs.greeting("German")).toEqual("Guten Tag!");
  expect(funcs.greeting("Spanish")).toEqual("Hola!");
  expect(funcs.greeting("Klingon")).toEqual("Hello!");
});
// end greeting start
