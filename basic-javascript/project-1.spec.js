const helpers = require("./project-1");

// start testing!
describe("multiplyByTen", () => {
  test("multiples num by 10", () => {
    // Arrange:
    const input = 10;
    const expected = 100;
    // Act:
    const result = helpers.multiplyByTen(input);

    // Expect:
    expect(result).toBe(expected);
  });
});

describe("subtractFive", () => {
  it("subtracts 5 from num", () => {
    const input = 10;
    const expected = 5;
    const result = helpers.subtractFive(input);
    expect(result).toBe(expected);
  });
});

describe("areSameLength", () => {
  it("checks if two strings are equal length", () => {
    const areSameLength = helpers.areSameLength;

    const notEqual = areSameLength("abc", "abcd");
    const equal = areSameLength("abd", "bds");

    expect(notEqual).toBeFalsy();
    expect(equal).toBeTruthy();
  });
});

describe("areEqual", () => {
  it("checks if two inputs are strictly equal", () => {
    const input1 = 42;
    const input2 = 42;
    const result = helpers.areEqual(input1, input2);
    expect(result).toBeTruthy();
  });
});

describe("lessThanNinety", () => {
  const lessThanNinety = helpers.lessThanNinety;

  it("checks if input is a number", () => {
    const isNum = lessThanNinety(20);
    const notNum = lessThanNinety("twenty");

    expect(isNum).toBeTruthy();
    expect(notNum).toBeFalsy();
  });

  it("checks if input is less than 90", () => {
    const less = lessThanNinety(89);
    const same = lessThanNinety(90);
    const greater = lessThanNinety(91);

    expect(less).toBeTruthy();
    expect(same).toBeFalsy();
    expect(greater).toBeFalsy();
  });
});

describe("greaterThanFifty", () => {
  const greaterThanFifty = helpers.greaterThanFifty;

  it("checks if input is number greater than 50", () => {
    const less = greaterThanFifty(49);
    const same = greaterThanFifty(50);
    const greater = greaterThanFifty(51);

    expect(less).toBeFalsy();
    expect(same).toBeFalsy();
    expect(greater).toBeTruthy();
  });
});

describe("add", () => {
  it("sums two inputs", () => {
    const { add } = helpers;

    const five = add(2, 3);
    const abcd = add("ab", "cd");

    expect(five).toBe(5);
    expect(abcd).toBe("abcd");
  });
});

describe("subtract", () => {
  it("subtracts one input from another", () => {
    const { subtract } = helpers;

    const five = subtract(10, 5);
    const zero = subtract(2, 2);

    expect(five).toBe(5);
    expect(zero).toBe(0);
  });
});

describe("divide", () => {
  it("divides input1 by input2", () => {
    const { divide } = helpers;

    const five = divide(25, 5);
    const one = divide(3, 3);

    expect(five).toBe(5);
    expect(one).toBe(1);
  });
});

describe("multiply", () => {
  it("multiplies two numbers", () => {
    const { multiply } = helpers;

    const hundred = multiply(10, 10);
    const one = multiply(1, 1);

    expect(hundred).toBe(100);
    expect(one).toBe(1);
  });
});

describe("getRemainder", () => {
  const { getRemainder } = helpers;
  const input1 = 100;
  const input2 = 50;
  it("returns a number", () => {
    const example = getRemainder(input1, input2);
    expect(typeof example === "number").toBeTruthy();
  });
  it("returns remainder of two inputs", () => {
    const zero = getRemainder(input1, input2);
    const one = getRemainder(10, 3);

    expect(zero).toBe(0);
    expect(one).toBe(1);
  });
});

describe("isEven", () => {
  const { isEven } = helpers;

  it("returns a boolean", () => {
    const example = isEven(20);
    expect(typeof example).toBe("boolean");
  });

  it("checks if number is even", () => {
    const even = isEven(10);
    const odd = isEven(11);

    expect(even).toBeTruthy();
    expect(odd).toBeFalsy();
  });
});

describe("isOdd", () => {
  const { isOdd } = helpers;

  it("checks if number is odd", () => {
    const even = isOdd(10);
    const odd = isOdd(11);

    expect(even).toBeFalsy();
    expect(odd).toBeTruthy();
  });
});

describe("square", () => {
  const { square } = helpers;
  it("returns the square of the input", () => {
    const sixteen = square(4);
    const nine = square(3);

    expect(sixteen).toBe(16);
    expect(nine).toBe(9);
  });
});

describe("cube", () => {
  const { cube } = helpers;
  it("returns the cubed value of the input", () => {
    const eight = cube(2);
    const twentyseven = cube(3);
    expect(eight).toBe(8);
    expect(twentyseven).toBe(27);
  });
});

describe("raiseToPower", () => {
  it("raises a number by the given exponent's power", () => {
    const { raiseToPower } = helpers;
    const eight = raiseToPower(2, 3);
    const one = raiseToPower(1, 8);
    expect(eight).toBe(8);
    expect(one).toBe(1);
  });
});

describe("roundNumber", () => {
  it("returns the rounded value of a given number", () => {
    const { roundNumber } = helpers;
    const nineteen = roundNumber(19.4);
    const two = roundNumber(1.9);
    expect(nineteen).toBe(19);
    expect(two).toBe(2);
  });
});

describe("roundUp", () => {
  it("rounds number to next highest integer", () => {
    const { roundUp } = helpers;

    const three = roundUp(2.9);
    const threealso = roundUp(2.1);
    expect(three).toBe(3);
    expect(threealso).toBe(3);
  });
});

describe("addExclamationPoint", () => {
  const { addExclamationPoint } = helpers;
  it("returns a string", () => {
    const example = addExclamationPoint("hi");
    expect(typeof example).toBe("string");
  });

  it("adds a ! on the end of the string", () => {
    const input = "hi";
    const expected = "hi!";
    const actual = addExclamationPoint(input);
    expect(actual).toBe(expected);
  });
});

describe("combineNames", () => {
  const { combineNames } = helpers;
  it("returns a string", () => {
    const example = combineNames("Adam", "McKenney");
    expect(typeof example).toBe("string");
  });

  it("combines two names", () => {
    const expected = "Adam McKenney";
    const actual = combineNames("Adam", "McKenney");
    expect(actual).toBe(expected);
  });
});

describe("getGreeting", () => {
  it("returns a greeting from the given name", () => {
    const { getGreeting } = helpers;

    const input = "Adam";
    const expected = "Hello Adam!";
    const actual = getGreeting("Adam");

    expect(actual).toBe(expected);
  });
});

describe("getRectangleArea", () => {
  const { getRectangleArea } = helpers;
  const input1 = 20;
  const input2 = 5;
  it("makes sure given width and length are numbers", () => {
    expect(typeof input1).toBe("number");
    expect(typeof input2).toBe("number");
  });

  it("returns a number", () => {
    const example = getRectangleArea(input1, input2);
    expect(typeof example).toBe("number");
  });

  it("returns width times length", () => {
    const expected = 100;
    const actual = getRectangleArea(input1, input2);
    expect(actual).toBe(expected);
  });
});

describe("getTriangleArea", () => {
  const { getTriangleArea } = helpers;
  it("returns area of triangle with given base and height", () => {
    const input1 = 5;
    const input2 = 2;
    const expected = 5;
    const actual = getTriangleArea(input1, input2);
    expect(actual).toBe(expected);
  });
});

describe("getCircleArea", () => {
  const { getCircleArea } = helpers;
  it("calculates area of circle given the radius", () => {
    const input = 2;
    const expected = Math.PI * 4;
    const actual = getCircleArea(input);
    expect(actual).toBe(expected);
  });
});

describe("getRectangularPrismVolume", () => {
  const { getRectangularPrismVolume } = helpers;
  const input1 = 5;
  const input2 = 5;
  const input3 = 10;
  const example = getRectangularPrismVolume(input1, input2, input3);
  it("returns a number", () => {
    expect(typeof example).toBe("number");
  });
  it("returns the volume of a rectangular prism given the width, height, and length", () => {
    expect(example).toBe(250);
  });
});
