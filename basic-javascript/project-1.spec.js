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

describe("Even number", () => {
  it("Should return true if even", () => {
    const isEven = funcs.isEven;

    const three = isEven(3);
    const twoHundred = isEven(200);
    const zero = isEven(0);
    const negTwo = isEven(-2);
    const negThree = isEven(-3);

    expect(three).toBe(false);
    expect(twoHundred).toBe(true);
    expect(zero).toBe(true);
    expect(negTwo).toBe(true);
    expect(negThree).toBe(false);
  });
});

describe("Odd number", () => {
  it("Should return true if odd", () => {
    const isOdd = funcs.isOdd;

    const three = isOdd(3);
    const twoHundred = isOdd(200);
    const zero = isOdd(0);
    const negTwo = isOdd(-2);
    const negThree = isOdd(-3);

    expect(three).toBe(true);
    expect(twoHundred).toBe(false);
    expect(zero).toBe(false);
    expect(negTwo).toBe(false);
    expect(negThree).toBe(true);
  });
});

describe("Square function", () => {
  it("Should multiply number by itself", () => {
    const square = funcs.square;

    const threeSq = square(3);
    const elevenSq = square(11);
    const negFourSq = square(-4);
    const zero = square(0);
    const one = square(1);

    expect(threeSq).toBe(9);
    expect(elevenSq).toBe(121);
    expect(negFourSq).toBe(16);
    expect(zero).toBe(0);
    expect(one).toBe(1);
  });
});

describe("cubic fucntion", () => {
  it("Should multiply number by itself two times", () => {
    const cube = funcs.cube;

    const threeCb = cube(3);
    const elevenCb = cube(11);
    const negFourCb = cube(-4);
    const zero = cube(0);
    const one = cube(1);
    const negOne = cube(-1);

    expect(threeCb).toBe(27);
    expect(elevenCb).toBe(1331);
    expect(negFourCb).toBe(-64);
    expect(zero).toBe(0);
    expect(one).toBe(1);
    expect(negOne).toBe(-1);
  });
});

describe("power fucntion", () => {
  it("Should multiply number by itself based on number of power/exp", () => {
    const raiseToPower = funcs.raiseToPower;

    const threePwrThree = raiseToPower(3, 3);
    const elevenPwrTwo = raiseToPower(11, 2);
    const negTwoPwrFour = raiseToPower(-2, 4);
    const zero = raiseToPower(0, 10);
    const one = raiseToPower(1, 7);
    const negOne = raiseToPower(-1, 7);

    expect(threePwrThree).toBe(27);
    expect(elevenPwrTwo).toBe(121);
    expect(negTwoPwrFour).toBe(16);
    expect(zero).toBe(0);
    expect(one).toBe(1);
    expect(negOne).toBe(-1);
  });
});

describe("rounding fucntion", () => {
  it("Should round number to nearest ones place", () => {
    const roundNumber = funcs.roundNumber;

    const three = roundNumber(3.4423);
    const eleven = roundNumber(11.0651);
    const six = roundNumber(6.11151);
    const zero = roundNumber(0.0);
    const negTwo = roundNumber(-2.12);
    const HundredFifty = roundNumber(150);

    expect(three).toBe(3);
    expect(eleven).toBe(11);
    expect(six).toBe(6);
    expect(zero).toBe(0);
    expect(negTwo).toBe(-2);
    expect(HundredFifty).toBe(150);
  });
});

describe("round-up fucntion", () => {
  it("Should round number up to nearest one, regardless of the value of tenth place", () => {
    const roundUp = funcs.roundUp;

    const three = roundUp(3.4423);
    const eleven = roundUp(11.0651);
    const zero = roundUp(0.0);
    const negTwo = roundUp(-2.12);
    const HundredFifty = roundUp(150);

    expect(three).toBe(4);
    expect(eleven).toBe(12);
    expect(zero).toBe(0);
    expect(negTwo).toBe(-2);
    expect(HundredFifty).toBe(150);
  });
});

describe("round-up fucntion", () => {
  it("Should round number up to nearest one, regardless of the value of tenth place", () => {
    const roundUp = funcs.roundUp;

    const three = roundUp(3.4423);
    const eleven = roundUp(11.0651);
    const zero = roundUp(0.0);
    const negTwo = roundUp(-2.12);
    const HundredFifty = roundUp(150);

    expect(three).toBe(4);
    expect(eleven).toBe(12);
    expect(zero).toBe(0);
    expect(negTwo).toBe(-2);
    expect(HundredFifty).toBe(150);
  });
});
