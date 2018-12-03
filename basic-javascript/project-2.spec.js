const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("getBiggest", () => {
  

    test("2 , 5", () => {
      expect(funcs.getBiggest(2,5)).toBe(5);
    });
    test("10, 4", () => {
      expect(funcs.getBiggest(10, 4)).toBe(10);
    });
  });

  describe("greeting", () => {
  

    test("German", () => {
      expect(funcs.greeting("German")).toBe('Guten Tag!');
    });
    test("Default", () => {
      expect(funcs.greeting("KR")).toBe('Hello!');
    });
  });

  test("ten or Five 10", () => {
    expect(funcs.isTenOrFive(10)).toBe(true);
  });

  test("isInRange 50/20, 10", () => {
    expect(funcs.isInRange(10)).toBe(false);
  });
