const helpers = require("./project-1");

// start testing!
describe("project-1.js", () => {
  test("Try", () => {});

  describe("multiplyByTen()", () => {
    const { multiplyByTen } = helpers;

    test("Should multiply number by 10", () => {
      const input = 5;
      const expected = 50;
      expect(multiplyByTen(input)).toEqual(expected);
    });
  });

  describe("subtractFive()", () => {
    const { subtractFive } = helpers;

    test("Should subtract number from 5", () => {
      const input = 50;
      const expected = 45;
      expect(subtractFive(input)).toEqual(expected);
    });
  });

  describe("areSameLength()", () => {
    const { areSameLength } = helpers;

    test("Should return false if both strings' length are different", () => {
      const input1 = "hello";
      const input2 = "hi";
      expect(areSameLength(input1, input2)).toBeFalsy();
    });

    test("Should return true if both strings' length are same", () => {
      const input1 = "hello";
      const input2 = "there";
      expect(areSameLength(input1, input2)).toBeTruthy();
    });
  });

  describe("areEqual()", () => {
    const { areEqual } = helpers;

    describe("=> Strings as input", () => {
      test("Should return false if both strings are not equal", () => {
        const input1 = "jasmine";
        const input2 = "23";
        expect(areEqual(input1, input2)).toBeFalsy();
      });

      test("Should return true if both strings are equal", () => {
        const input1 = "jasmine";
        const input2 = "jasmine";
        expect(areEqual(input1, input2)).toBeTruthy();
      });
    });

    describe("=> Numbers as input", () => {
      test("Should return false if both numbers are not equal", () => {
        const input1 = 0;
        const input2 = 1;
        expect(areEqual(input1, input2)).toBeFalsy();
      });

      test("Should return true if both numbers are equal", () => {
        const input1 = 0;
        const input2 = 0;
        expect(areEqual(input1, input2)).toBeTruthy();
      });
    });

    describe("=> Booleans as input", () => {
      test("Should return false if both boolean values are not equal", () => {
        const input1 = true;
        const input2 = false;
        expect(areEqual(input1, input2)).toBeFalsy();
      });

      test("Should return true if both boolean values are equal", () => {
        const input1 = false;
        const input2 = false;
        expect(areEqual(input1, input2)).toBeTruthy();
      });
    });
  });

  describe("lessThanNinety()", () => {
    const { lessThanNinety } = helpers;

    test("Should return false if number is greater than or equal 90", () => {
      const input = 90;
      expect(lessThanNinety(input)).toBeFalsy();
    });

    test("Should return true if number is less than 90", () => {
      const input = 10;
      expect(lessThanNinety(input)).toBeTruthy();
    });
  });

  describe("greaterThanFifty()", () => {
    const { greaterThanFifty } = helpers;

    test("Should return false if number is less than or equal to 50", () => {
      const input = 50;
      expect(greaterThanFifty(input)).toBeFalsy();
    });

    test("Should return true if number is greater than 50", () => {
      const input = 51;
      expect(greaterThanFifty(input)).toBeTruthy();
    });
  });

  describe("add()", () => {
    const { add } = helpers;

    test("Should add two numbers", () => {
      const input1 = 5;
      const input2 = 15;
      const expected = 20;
      expect(add(input1, input2)).toEqual(expected);
    });
  });

  describe("subtract()", () => {
    const { subtract } = helpers;

    test("Should subtract two numbers", () => {
      const input1 = 5;
      const input2 = 1;
      const expected = 4;
      expect(subtract(input1, input2)).toEqual(expected);
    });
  });

  describe("divide()", () => {
    const { divide } = helpers;

    test("Should divide two numbers", () => {
      const input1 = 64;
      const input2 = 8;
      const expected = 8;
      expect(divide(input1, input2)).toEqual(expected);
    });
  });

  describe("multiply()", () => {
    const { multiply } = helpers;

    test("Should multiply two numbers", () => {
      const input1 = 5;
      const input2 = 15;
      const expected = 75;
      expect(multiply(input1, input2)).toEqual(expected);
    });
  });

  describe("getRemainder()", () => {
    const { getRemainder } = helpers;

    test("Should get the remainder of two numbers", () => {
      const input1 = 4;
      const input2 = 2;
      const expected = 0;
      expect(getRemainder(input1, input2)).toEqual(expected);
    });
  });

  describe("isEven()", () => {
    const { isEven } = helpers;

    test("Should return false if number is not even", () => {
      const input = 45;
      expect(isEven(input)).toBeFalsy();
    });

    test("Should return true if number is even", () => {
      const input = 88;
      expect(isEven(input)).toBeTruthy();
    });
  });

  describe("isOdd()", () => {
    const { isOdd } = helpers;

    test("Should return false if number is not odd", () => {
      const input = 42;
      expect(isOdd(input)).toBeFalsy();
    });

    test("Should return true if number is odd", () => {
      const input = 23;
      expect(isOdd(input)).toBeTruthy();
    });
  });

  describe("square()", () => {
    const { square } = helpers;

    test("Should return the square of a number", () => {
      const input = 4;
      const expected = 16;
      expect(square(input)).toEqual(expected);
    });
  });

  describe("cube()", () => {
    const { cube } = helpers;

    test("Should return the cube of a number", () => {
      const input = 3;
      const expected = 27;
      expect(cube(input)).toEqual(expected);
    });
  });

  describe("raiseToPower()", () => {
    const { raiseToPower } = helpers;

    test("Should return the raised number to an exponent (lol)", () => {
      const input1 = 12;
      const input2 = 2;
      const expected = 144;
      expect(raiseToPower(input1, input2)).toEqual(expected);
    });
  });

  describe("roundNumber()", () => {
    const { roundNumber } = helpers;

    test("Should return the rounded down number", () => {
      const input = 5.353432;
      const expected = 5;
      expect(roundNumber(input)).toEqual(expected);
    });
  });

  describe("roundUp()", () => {
    const { roundUp } = helpers;

    test("Should return the rounded up number", () => {
      const input = 6.5656234324234;
      const expected = 7;
      expect(roundUp(input)).toEqual(expected);
    });
  });

  describe("addExclamationPoint()", () => {
    const { addExclamationPoint } = helpers;

    test("Should concat ! at the end of a string", () => {
      const input = "Hello";
      const expected = "Hello!";
      expect(addExclamationPoint(input)).toBe(expected);
    });
  });

  describe("combineNames()", () => {
    const { combineNames } = helpers;

    test("Should concat string1 to string2", () => {
      const input1 = "John";
      const input2 = "Doe";
      const expected = "John Doe";
      expect(combineNames(input1, input2)).toBe(expected);
    });
  });

  describe("getGreeting()", () => {
    const { getGreeting } = helpers;

    test("Should return a greeting message", () => {
      const input = "Jasmine";
      const expected = "Hello Jasmine!";
      expect(getGreeting(input)).toBe(expected);
    });
  });

  describe("getRectangleArea()", () => {
    const { getRectangleArea } = helpers;

    test("Should return the area of a rectangle", () => {
      const input1 = 30;
      const input2 = 45;
      const expected = 1350;
      expect(getRectangleArea(input1, input2)).toEqual(expected);
    });
  });

  describe("getTriangleArea()", () => {
    const { getTriangleArea } = helpers;

    test("Should return the area of a triangle", () => {
      const input1 = 30;
      const input2 = 45;
      const expected = 675;
      expect(getTriangleArea(input1, input2)).toEqual(expected);
    });
  });

  describe("getCircleArea()", () => {
    const { getCircleArea } = helpers;

    test("Should return the area of a circle", () => {
      const input = 12.33231;
      const expected = 477.79185170606456;
      expect(getCircleArea(input)).toEqual(expected);
    });
  });

  describe("getRectangularPrismVolume()", () => {
    const { getRectangularPrismVolume } = helpers;

    test("Should return the volume of a rectangular prism", () => {
      const input1 = 30;
      const input2 = 10;
      const input3 = 40;
      const expected = 12000;
      expect(getRectangularPrismVolume(input1, input2, input3)).toEqual(
        expected
      );
    });
  });
});
