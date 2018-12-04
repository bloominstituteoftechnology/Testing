const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("project-2.js functions", () => {
  test("jest runs", () => {});

  describe("getBiggest()", () => {
    it("should return a number", () => {
      expect(typeof funcs.getBiggest(1, 2)).toBe("number");
    });
    it("should return the biggest number", () => {
      expect(funcs.getBiggest(1, 2)).toBe(2);
    });
  });

  describe("greeting()", () => {
    it("should return a string", () => {
      expect(typeof funcs.greeting("Spanish")).toBe("string");
    });
    it("should return the correct language", () => {
      expect(funcs.greeting("Spanish")).toBe("Hola!");
    });
  });

  describe("isTenOrFive", () => {
    it("should return a boolean", () => {
      expect(typeof funcs.isTenOrFive(9)).toBe("boolean");
    });
    it("should only return 10 or 5", () => {
      expect(funcs.isTenOrFive(5)).toBeTruthy();
    });
  });
});
