const helpers = require("./project-1");

// start testing!
describe("project-1", () => {

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
    const sum = add(a, b);
    expect(sum).toEqual(a + b);
  });

  it("Should subtract two numbers", () => {
    const subtract = helpers.subtract;
    const a = 20;
    const b = 5;
    const sum = subtract(a, b);
    expect(sum).toEqual(a - b);
  });

  it("Should divide two numbers", () => {
    const divide = helpers.divide;
    const a = 9;
    const b = 3;
    const sum = divide(a, b);
    expect(sum).toEqual(a / b);
  });

  it("Should muliply two numbers", () => {
    const multiply = helpers.multiply;
    const a = 9;
    const b = 9;
    const sum = multiply(a, b);
    expect(sum).toEqual(a * b);
  });

  it("Should got the remainder", () => {
    const getRemainder = helpers.getRemainder;
    const a = 9;
    const b = 9;
    const sum = getRemainder(a, b);
    expect(sum).toEqual(a % b);
  });

  it("Is Even?", () => {
    const isEven = helpers.isEven;
    num = isEven(4);
    expect(num).toBe(true);
  });

  it("Is Odd?", () => {
    const isOdd = helpers.isOdd;
    num = isOdd(7);
    expect(num).toBe(true);
  });

  it("Should be the square of the number", () => {
    const square = helpers.square;
    const num1 = 3;
    sum = square(num1);
    expect(sum).toBe(num1 * num1);
  });

  it("Should be the cube of the number", () => {
    const cube = helpers.cube;
    const num1 = 3;
    sum = cube(num1);
    expect(sum).toBe(num1 * num1 * num1);
  });

  it("Should raise to an exponent", () => {
    const raiseToPower = helpers.raiseToPower;
    num = 4;
    exponent = 2;
    answer = num ** exponent;
    expect(answer).toBe(16);
  });

  it("Should round a number", () => {
    const roundNumber = helpers.roundNumber;
    answer = roundNumber(8.6);
    expect(answer).toBe(9);
  });

  it("Should roundup a number", () => {
    const roundUp = helpers.roundUp;
    answer = roundUp(8.1);
    expect(answer).toBe(9);
  });

  it("Should add exclamation point", () => {
    expect(helpers.addExclamationPoint("hello")).toBe("hello!");
  });

  it("Should combine the two names", () => {
    expect(helpers.combineNames("Max", "Washington")).toBe("Max Washington");
  });

  it("Should greet by name", () => {
    expect(helpers.getGreeting("Max")).toBe("Hello Max!");
  });

  it("Should get the area of a Rectangle", () => {
    expect(helpers.getRectangleArea(9, 9)).toBe(81);
  });

  it("Should get the area of a Triangle", () => {
    expect(helpers.getTriangleArea(9, 9)).toBe(40.5);
  });

  it("Should get the area of a Circle", () => {
    expect(helpers.getCircleArea(18)).toBeCloseTo(1017.87, 1);
  });

  it("Should get the volume of a Rectangular Prism", () => {
    expect(helpers.getRectangularPrismVolume(1, 2, 3)).toBeCloseTo(6);
  });
});
