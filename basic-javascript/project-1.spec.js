const helpers = require("./project-1");

// start testing!

//Run all tests
test("should run tests", () => {});

//Use 'it' in addition to 'tests'
it("should run tests using it() in addition to test()", () => {});

//Multiply by ten
describe("multiplyByTen()", () => {
  it("should multiply provided number by ten", () => {
    const expected = 100;

    const actual = helpers.multiplyByTen(10);
    expect(actual).toEqual(expected);
  });

  it("should throw an error if a string is passed", () => {
    expect(() => {
      helpers.multiplyByTen("123");
    }).toThrow();
    expect;
  });

  it("should return 0 when called with no value", () => {
    const product = helpers.multiplyByTen();

    expect(product).toBe(0);
  });
});

//Subtract by five
describe("subtractFive()", () => {
  it("should subtract provided number by five", () => {
    const expected = 6;

    const actual = helpers.subtractFive(11);
    expect(actual).toEqual(expected);
  });

  it("should return null if no number is provided", () => {
    const actual = helpers.subtractFive(undefined);
    expect(actual).toBe(null);
  });

  it("should throw an error if a string is passed", () => {
    expect(() => {
      helpers.subtractFive("123");
    }).toThrow();
    expect;
  });
});

//Are the strings the same length
describe("areSameLength()", () => {
  it("should check if strings are the same length", () => {
    const expected = true;

    const actual = helpers.areSameLength("bear", "bear");
    expect(actual).toEqual(expected);
  });

  it("should check if strings are not the same length", () => {
    const expected = false;

    const actual = helpers.areSameLength("bears", "bear");
    expect(actual).toEqual(expected);
  });

  it("should throw an error if a non string is passed", () => {
    expect(() => {
      helpers.areSameLength(123, 123);
    }).toThrow();
    expect;
  });
});

//Are the values equal
describe("areEqual()", () => {
  it("should check if values are the equal", () => {
    const expected = true;

    const actual = helpers.areEqual("bear", "bear");
    expect(actual).toEqual(expected);
  });

  it("should check if values are not equal", () => {
    const expected = false;

    const actual = helpers.areEqual(3, 4);
    expect(actual).toEqual(expected);
  });

  it("should return false if the values are not deeply equal", () => {
    const expected = false;

    const actual = helpers.areEqual(3, "3");
    expect(actual).toEqual(expected);
  });
});

//Are the values less than 90
describe("lessThanNinety()", () => {
  it("should check if values are less than 90", () => {
    const expected = true;

    const actual = helpers.lessThanNinety(80);
    expect(actual).toEqual(expected);
  });

  it("should check if values are not less than 90", () => {
    const expected = false;

    const actual = helpers.lessThanNinety(91);
    expect(actual).toEqual(expected);
  });

  it("should throw an error if a string is passed", () => {
    expect(() => {
      helpers.lessThanNinety("123");
    }).toThrow();
    expect;
  });
});

//Are the values greater than 50
describe("greaterThanFifty()", () => {
  it("should check if values are greater than 50", () => {
    const expected = true;

    const actual = helpers.greaterThanFifty(80);
    expect(actual).toEqual(expected);
  });

  it("should check if values are not greater than 50", () => {
    const expected = false;

    const actual = helpers.greaterThanFifty(-80);
    expect(actual).toEqual(expected);
  });

  it("should throw an error if a string is passed", () => {
    expect(() => {
      helpers.greaterThanFifty("123");
    }).toThrow();
    expect;
  });
});

//Add two values
describe("add()", () => {
  it("should give the sum of two numbers", () => {
    const expected = 180;

    const actual = helpers.add(80, 100);
    expect(actual).toEqual(expected);
  });

  it("should accept decimals rounded to the nearest hundredth", () => {
    const expected = 180.92;

    const actual = helpers.add(80.512, 100.41);
    expect(actual).toBeCloseTo(expected);
  });

  it("should throw an error if a string is passed", () => {
    expect(() => {
      helpers.add("123", "123");
    }).toThrow();
    expect;
  });
});

//Subtract the second value from first
describe("subtract()", () => {
  it("should subtract the second value from the first", () => {
    const expected = 100;

    const actual = helpers.subtract(180, 80);
    expect(actual).toEqual(expected);
  });

  it("should accept decimals rounded to the nearest hundredth", () => {
    const expected = 80.1;

    const actual = helpers.subtract(180.512, 100.41);
    expect(actual).toBeCloseTo(expected);
  });

  it("should throw an error if a string is passed", () => {
    expect(() => {
      helpers.subtract("123", "123");
    }).toThrow();
    expect;
  });
});

//Divide
describe("divide()", () => {
  it("should divide the first value by the second", () => {
    const expected = 50;

    const actual = helpers.divide(100, 2);
    expect(actual).toEqual(expected);
  });

  it("should accept decimal values rounded to the nearest tenth", () => {
    const expected = 33.33;

    const actual = helpers.divide(100, 3);
    expect(actual).toBeCloseTo(expected);
  });

  it("should accept fractions", () => {
    const expected = 0.44;

    const actual = helpers.divide(1 / 3, 6 / 8);
    expect(actual).toBeCloseTo(expected);
  });
});

//Multiply
describe("multiply()", () => {
  it("should give the product of two numbers", () => {
    const expected = 200;

    const actual = helpers.multiply(100, 2);
    expect(actual).toEqual(expected);
  });

  it("should return NaN if not a number", () => {
    const actual = helpers.multiply(100, "cat");
    expect(actual).toBeNaN();
  });
});

//Get Remainder
describe("getremainder()", () => {
  it("should get the remainder of the first value divided by the second", () => {
    const expected = 1;

    const actual = helpers.getRemainder(13, 2);
    expect(actual).toEqual(expected);
  });

  it("should return NaN if not a number", () => {
    const actual = helpers.getRemainder(100, "cat");
    expect(actual).toBeNaN();
  });
});

//Is the value Even
describe("isEven()", () => {
  it("should return true if value is even", () => {
    const expected = true;

    const actual = helpers.isEven(2);
    expect(actual).toBe(expected);
  });

  it("should throw an error if a string is passed", () => {
    expect(() => {
      helpers.isEven("123");
    }).toThrow();
    expect;
  });
});

//Is the value odd
describe("isOdd()", () => {
  it("should return true if value is odd", () => {
    const expected = true;

    const actual = helpers.isOdd(3);
    expect(actual).toEqual(expected);
  });

  it("should throw an error if a string is passed", () => {
    expect(() => {
      helpers.isOdd("123");
    }).toThrow();
    expect;
  });
});

//number squared
describe("square()", () => {
  it("should return a value squared", () => {
    const expected = 36;

    const actual = helpers.square(6);
    expect(actual).toEqual(expected);
  });
  it("should throw an error if a string is passed", () => {
    expect(() => {
      helpers.squared("123");
    }).toThrow();
    expect;
  });
});

//number cubed
describe("cube()", () => {
  it("should return a value cubed", () => {
    const expected = 27;

    const actual = helpers.cube(3);
    expect(actual).toEqual(expected);
  });
  it("should throw an error if a string is passed", () => {
    expect(() => {
      helpers.cube("123");
    }).toThrow();
    expect;
  });
});

//Number to a power of another number
describe("raiseToPower()", () => {
  it("should return a value raised to an exponent", () => {
    const expected = 9;

    const actual = helpers.raiseToPower(3, 2);
    expect(actual).toEqual(expected);
  });
  it("should throw an error if a string is passed", () => {
    expect(() => {
      helpers.raiseToPower("123");
    }).toThrow();
    expect;
  });
});

//Rounded value
describe("roundNumber()", () => {
  it("should return a value rounded to the nearest whole number", () => {
    const expected = 10;

    const actual = helpers.roundNumber(10.4);
    expect(actual).toEqual(expected);
  });
  it("should throw an error if a string is passed", () => {
    expect(() => {
      helpers.roundNumber("123");
    }).toThrow();
    expect;
  });
});

//Value rounded up
describe("roundUp()", () => {
  it("should return a value rounded up to the nearest whole number", () => {
    const expected = 11;

    const actual = helpers.roundUp(10.4);
    expect(actual).toEqual(expected);
  });
  it("should throw an error if a string is passed", () => {
    expect(() => {
      helpers.roundUp("123");
    }).toThrow();
    expect;
  });
});

//Greeting with !
describe("addExclamationPoint()", () => {
  it("should return a string with a ! at the end", () => {
    const expected = "hey!";

    const actual = helpers.addExclamationPoint("hey");
    expect(actual).toEqual(expected);
  });
  it("should throw an error if a non string is passed", () => {
    expect(() => {
      helpers.addExclamationPoint(123);
    }).toThrow();
    expect;
  });
});

//Combine strings
describe("combineNames()", () => {
  it("should return two strings concatenated", () => {
    const expected = "banana fruit";

    const actual = helpers.combineNames("banana", "fruit");
    expect(actual).toEqual(expected);
  });
  it("should throw an error if a non string is passed", () => {
    expect(() => {
      helpers.combineNames(123, 123);
    }).toThrow();
    expect;
  });
});

//Greeting to variable name
describe("getGreeting()", () => {
  it("should return a greeting to the variable passed in", () => {
    const expected = "Hello you!";

    const actual = helpers.getGreeting("you");
    expect(actual).toEqual(expected);
  });
  it("should throw an error if a non string is passed", () => {
    expect(() => {
      helpers.getGreeting(123);
    }).toThrow();
    expect;
  });
});

//Rectangle area
describe("getRectangleArea()", () => {
  it("should return the area of a rectangle that has the specified length and width", () => {
    const expected = 30;

    const actual = helpers.getRectangleArea(5, 6);
    expect(actual).toEqual(expected);
  });
  it("should throw an error if a string is passed", () => {
    expect(() => {
      helpers.getRectangleArea("123", "2");
    }).toThrow();
    expect;
  });
});

//triangle area
describe("getTriangleArea()", () => {
  it("should return the area of a triangle that has the specified base and height", () => {
    const expected = 15;

    const actual = helpers.getTriangleArea(5, 6);
    expect(actual).toEqual(expected);
  });
  it("should throw an error if a string is passed", () => {
    expect(() => {
      helpers.getTriangleArea("123", "2");
    }).toThrow();
    expect;
  });
});

//Circle area
describe("getCircleArea()", () => {
  it("should return the area of a circle that has the specified radius", () => {
    const expected = 50.265;

    const actual = helpers.getCircleArea(4);
    expect(actual).toBeCloseTo(expected);
  });
  it("should throw an error if a string is passed", () => {
    expect(() => {
      helpers.getCircleArea("123");
    }).toThrow();
    expect;
  });
});

//Rectangular Prism Volume
describe("getRectangularPrismVolume()", () => {
  it("should return the volume of a retangular prism that has the specified length, width and height", () => {
    const expected = 27;

    const actual = helpers.getRectangularPrismVolume(3, 3, 3);
    expect(actual).toEqual(expected);
  });
  it("should throw an error if a string is passed", () => {
    expect(() => {
      helpers.getRectangularPrismVolume("123", "200", "123");
    }).toThrow();
    expect;
  });
});
