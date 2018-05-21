const funcs = require("./project-1");

// write your tests here
describe("multiplyByTen", () => {
  it("should multiply by 10", () => {
    const multiplyByTen = funcs.multiplyByTen;

    const twenty = multiplyByTen(2);
    const minusThirty = multiplyByTen(-3);
    const fifty = multiplyByTen(5);

    expect(twenty).toBe(20);
    expect(minusThirty).toBe(-30);
    expect(fifty).toBe(50);
  });
});

describe("subtractFive", () => {
  it("should subtract 5", () => {
    expect(funcs.subtractFive(5)).toBe(0);
  });
});

describe("areSameLength", () => {
  it("lengths should be the same", () => {
    expect(funcs.areSameLength("pie", "tea")).toBe(true);
    expect(funcs.areSameLength("pie", "taco")).toBe(false);
  });
});

describe("areEqual", () => {
  it("should return if equal", () => {
    expect(funcs.areEqual(5, 5)).toBe(true);
    expect(funcs.areEqual(5, 23)).toBe(false);
  });
});
