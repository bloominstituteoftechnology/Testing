const helpers = require("./project-1");

// start testing!

it("Should multiply by ten", () => {
  const multiplyByTen = helpers.multiplyByTen;
  const expected = 100;
  const actual = multiplyByTen(10);
  expect(actual).toBe(100);
});

it("Should subtract five from a number", () => {
  const subtractFive = helpers.subtractFive;
  const expected = 20;
  const actual = subtractFive(25);
  expect(actual).toBe(20);
});

it("Should return true or false to the strings being equal", () => {
  const areSameLength = helpers.areSameLength;
  const str1 = "Max";
  const str2 = "123";
  expect(str1.length).toEqual(str2.length);
});

it("Should return true or false to the numbers being equal", () => {
  const areEqual = helpers.areEqual;
  const num1 = 18;
  const num2 = 18;
  expect(num1).toEqual(num2);
});

it("Should return true or false if number is less then 90", () => {
  const lessThanNinety = helpers.lessThanNinety;
  const num = 69;
  expect(num).toBeLessThan(90);
});

it("Should return true or false if number is greater then 50", () => {
  const greaterThanFifty = helpers.greaterThanFifty;
  const num = 56;
  expect(num).toBeGreaterThan(50);
});

it("Should add two numbers ", () => {
  const add = helpers.add;
  const a = 9;
  const b = 9;
  const sum = add(a,b);
  expect(sum).toEqual(18)
});

it("Should subtract two numbers", () => {
    const subtract = helpers.subtract;
    const a = 20;
    const b = 5;
    const sum = subtract(a,b);
    expect(sum).toEqual(15)
  });

  it("Should divide two numbers", () => {
    const divide = helpers.divide;
    const a = 9;
    const b = 3;
    const sum = divide(a,b);
    expect(sum).toEqual(3)
  });

  it("Should muliply two numbers", () => {
    const multiply = helpers.multiply;
    const a = 9;
    const b = 9;
    const sum = multiply(a,b);
    expect(sum).toEqual(81)
  });

  
  