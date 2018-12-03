const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("getBiggest", () => {
  test("10 > 7", () => {
    expect(funcs.getBiggest(10, 7)).toBe(10);
  });
  test("7 === 7", () => {
    expect(funcs.getBiggest(7, 7)).toBe(7);
  });
  test("3 < 7", () => {
    expect(funcs.getBiggest(3, 7)).toBe(7);
  });
});

describe("greeting", () => {
  test("german", () => {
    expect(funcs.greeting("German")).toBe("Guten Tag!");
  });
  test("spanish", () => {
    expect(funcs.greeting("Spanish")).toBe("Hola!");
  });
  test("default", () => {
    expect(funcs.greeting()).toBe("Hello!");
  });
});

describe("isTenOrFive", () => {
  test("5", () => {
    expect(funcs.isTenOrFive(5)).toBe(true);
  });
  test("0", () => {
    expect(funcs.isTenOrFive(0)).toBe(false);
  });
});

describe("isInRange", () => {
  test("30", () => {
    expect(funcs.isInRange(30)).toBe(true);
  });
  test("10", () => {
    expect(funcs.isInRange(10)).toBe(false);
  });
});

describe("isInteger", () => {
  test("1", () => {
    expect(funcs.isInteger(1)).toBe(true);
  });
  test("1.1", () => {
    expect(funcs.isInteger(1.1)).toBe(false);
  });
});

describe("fizzBuzz", () => {
  test("15", () => {
    expect(funcs.fizzBuzz(15)).toBe("fizzbuzz");
  });
  test("10", () => {
    expect(funcs.fizzBuzz(10)).toBe("buzz");
  });
  test("9", () => {
    expect(funcs.fizzBuzz(9)).toBe("fizz");
  });
  test("7", () => {
    expect(funcs.fizzBuzz(7)).toBe(7);
  });
});
