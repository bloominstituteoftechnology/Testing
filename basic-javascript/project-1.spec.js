const helpers = require("./project-1");

// -------------------------- (*) BY TEN -------------------------

it("multiply both positive and negative by 10", () => {
  expect(helpers.multiplyByTen(10)).toBe(100);
  expect(helpers.multiplyByTen(-10)).toBe(-100);
});

it("multiply string parameter value", () => {
  expect(helpers.multiplyByTen("-10")).toBe(-100);
  expect(helpers.multiplyByTen("10")).toBe(100);
});

// ------------------------ (-) FIVE ----------------------------

it("subtract the number by 5", () => {
  expect(helpers.subtractFive(10)).toBe(5);
  expect(helpers.subtractFive(-10)).toBe(-15);
});

it("subtract the number by 5 even if string", () => {
  expect(helpers.subtractFive("10")).toBe(5);
});

//--------------------------SAME LENGTH --------------------------

it("return true if parameters are same length", () => {
  expect(helpers.areSameLength("Hello", "Hey")).toBeFalsy();
  expect(helpers.areSameLength("NO", "YO")).toBeTruthy();
});

// ---------------------ARE = ---------------------------------------

it("check if two parameters are the same", () => {
  expect(helpers.areEqual(10, 10)).toBeTruthy();
  expect(helpers.areEqual(10, 9)).toBeFalsy();
  expect(helpers.areEqual("123", "123")).toBeTruthy();
  expect(helpers.areEqual("abc", "cba")).toBeFalsy();
  expect(helpers.areEqual(10, "10")).toBeFalsy(); 
});

// -------------------- < 90 -------------------------------

it('return true if less than 90', () => {
    expect(helpers.lessThanNinety(100)).toBeFalsy();
    expect(helpers.lessThanNinety(10)).toBeTruthy();
    expect(helpers.lessThanNinety(90)).toBeFalsy();
});

// ------------------ > 50 --------------------------

it('return true if value is greater than fifty', () => {
    expect(helpers.greaterThanFifty(51)).toBeTruthy();
    expect(helpers.greaterThanFifty(50)).toBeFalsy();
    expect(helpers.greaterThanFifty(10)).toBeFalsy();

});