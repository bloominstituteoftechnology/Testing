const funcs = require("./project-1");

// write your tests here

describe("default", () => {
  it("run the tests", () => {});
});

describe("Multiply by ten", () => {
  it("Should multiply by ten", () => {
    // arrange
    const multiplyByTen = funcs.multiplyByTen;

    // act
    const hundred = multiplyByTen(10);
    const zero = multiplyByTen(0);
    const twenty = multiplyByTen(2);

    // assert
    expect(hundred).toBe(100);
    expect(zero).toBe(0);
    expect(twenty).toBe(20);
  });
});

describe("Subtract by five", () => {
  it("Should subtract by five", () => {
    const subtractFive = funcs.subtractFive;

    const twnetyEight = subtractFive(33);
    const zero = subtractFive(5);
    const negThree = subtractFive(2);

    expect(twnetyEight).toBe(28);
    expect(zero).toBe(0);
    expect(negThree).toBe(-3);
  });
});

describe("Are same length", () => {
  it("Should have same string length", () => {
    const areSameLength = funcs.areSameLength;

    const length1 = areSameLength("james", "jason");
    const length2 = areSameLength("bourne", "bond");
    const length3 = areSameLength("herdy", "gerdies");

    expect(length1).toBe(true);
    expect(length2).toBe(false);
    expect(length3).toBe(false);
  });
});

describe("Have same value", () => {
  it("Both should have same value", () => {
    const areEqual = funcs.areEqual;

    const equal1 = areEqual(1, 1);
    const equal2 = areEqual(1, -1);
    const equal3 = areEqual(24, 42);
    const equal4 = areEqual(0, 0);

    expect(equal1).toBe(true);
    expect(equal2).toBe(false);
    expect(equal3).toBe(false);
    expect(equal4).toBe(true);
  });
});

describe("Less than ninety", () => {
  it("Value is less than ninety", () => {
    const lessThanNinety = funcs.lessThanNinety;

    const lessNinety1 = lessThanNinety(89);
    const lessNinety2 = lessThanNinety(91);
    const lessNinety3 = lessThanNinety(90);
    const lessNinety4 = lessThanNinety(1000);
    const lessNinety5 = lessThanNinety(-2);

    expect(lessNinety1).toBe(true);
    expect(lessNinety2).toBe(false);
    expect(lessNinety3).toBe(false);
    expect(lessNinety4).toBe(false);
    expect(lessNinety5).toBe(true);
  });
});

describe("Greater than fifty", () => {
  it("Value is greater than fifty", () => {
    const greaterThanFifty = funcs.greaterThanFifty;

    const greaterFifty1 = greaterThanFifty(100);
    const greaterFifty2 = greaterThanFifty(0);
    const greaterFifty3 = greaterThanFifty(-1);
    const greaterFifty4 = greaterThanFifty(50);
    const greaterFifty5 = greaterThanFifty(51);

    expect(greaterFifty1).toBe(true);
    expect(greaterFifty2).toBe(false);
    expect(greaterFifty3).toBe(false);
    expect(greaterFifty4).toBe(false);
    expect(greaterFifty5).toBe(true);
  });
});

describe("Add function", () => {
  it("Add two number together", () => {
    const add = funcs.add;

    const twenty = add(10, 10);
    const thrityFive = add(17, 18);
    const threeFiddy = add(324, 26);
    const negThree = add(-10, 7);
    const zero = add(-11, 11);

    expect(twenty).toBe(20);
    expect(thrityFive).toBe(35);
    expect(threeFiddy).toBe(350);
    expect(negThree).toBe(-3);
    expect(zero).toBe(0);
  });
});

describe("Subtract function", () => {
  it("Subtract y from x", () => {
    const subtract = funcs.subtract;

    const hundred = subtract(103, 3);
    const negOne = subtract(17, 18);
    const threeFiddy = subtract(355, 5);
    const negThree = subtract(0, 3);
    const zero = subtract(21, 21);

    expect(hundred).toBe(100);
    expect(negOne).toBe(-1);
    expect(threeFiddy).toBe(350);
    expect(negThree).toBe(-3);
    expect(zero).toBe(0);
  });
});

describe("Divide function", () => {
  it("Divide x by y", () => {
    const divide = funcs.divide;

    const one = divide(10, 10);
    const zero = divide(0, 6);
    const negThree = divide(-12, 4);
    const revNegThree = divide(12, -4);
    const undefined = divide(1, 0);

    expect(one).toBe(1);
    expect(zero).toBe(0);
    expect(negThree).toBe(-3);
    expect(revNegThree).toBe(-3);
    expect(undefined).toBe(undefined);
  });
});

describe("Multiply function", () => {
  it("Multiply both numbers", () => {
    const multiply = funcs.multiply;

    const hundred = multiply(10, 10);
    const zero = multiply(0, 6);
    const revZero = multiply(1, 0);
    const negTwelve = multiply(-3, 4);
    const revNegTwelve = multiply(3, -4);

    expect(hundred).toBe(100);
    expect(zero).toBe(0);
    expect(revZero).toBe(0);
    expect(negTwelve).toBe(-12);
    expect(revNegTwelve).toBe(-12);
  });
});

describe("Modulo function", () => {
  it("Divide x by y then return remainer", () => {
    const getRemainder = funcs.getRemainder;

    const three = getRemainder(17, 7);
    const zero = getRemainder(10, 10);
    const anthoerZero = getRemainder(0, 6);
    const negTwo = getRemainder(-14, 3);
    const threeNegDiv = getRemainder(15, -4);
    const undefined = getRemainder(1, 0);

    expect(three).toBe(3);
    expect(zero).toBe(0);
    expect(anthoerZero).toBe(0);
    expect(negTwo).toBe(-2);
    expect(threeNegDiv).toBe(3);
    expect(undefined).toBe(undefined);
  });
});
