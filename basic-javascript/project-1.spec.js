const helpers = require("./project-1");

describe("Multiply the number passed with 10", () => {
  const multiplyByTen = helpers.multiplyByTen;
  it("Should multiply two numbers together", () => {
    expect(multiplyByTen(20)).toBe(200);
  });
  it("Should multiply a negative number", () => {
      expect(multiplyByTen(-2)).toBe(-20);
  });
  it("the argument passed should equal a whole number", () => {
    expect(multiplyByTen(5.5)).toBe(false);
  });
  it("the argument passed should be a number type", () => {
    expect(multiplyByTen("10")).toBe(false);
  });
});
// start testing!
