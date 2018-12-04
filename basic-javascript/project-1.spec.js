const helpers = require("./project-1");

// start testing!
describe("project-1.js", () => {
  describe("multiplyByTen", () => {
    it("should multiply provided number by ten", () => {
      const expected = 100;

      const actual = helpers.multiplyByTen(10);

      expect(actual).toEqual(expected);
    });
    it("should return 0 when called with no value", () => {
      const product = helpers.multiplyByTen();

      expect(product).toBe(0);
    });

    it("should throw an error when called with a string", () => {
      expect(() => {
        helpers.multiplyByTen("five");
      }).toThrow();
    });
  });

  describe("subtractFive", () => {
    it("should subtract a number by five", () => {
      const expected = 5;

      const actual = helpers.subtractFive(10);

      expect(actual).toEqual(expected);
    });
    it("should return 0 when called with no value", () => {
      const product = helpers.subtractFive();

      expect(product).toBe(0);
    });

    it("should throw an error when called with a string", () => {
      expect(() => {
        helpers.subtractFive("five");
      }).toThrow();
    });
  });

  describe("areTheSameLength", () => {
    it("should return true if same length, false if not", () => {
      const expected = true;

      const actual = helpers.areSameLength(5, 5);

      expect(actual).toEqual(expected);
    });

    it("should return false when called with no value", () => {
      const product = helpers.areSameLength();

      expect(product).toBe(false);
    });
  });

  describe("areEqual", () => {
    it("should return true if values are the same", () => {
      const expected = true;

      const actual = helpers.areEqual(5, 5);

      expect(actual).toEqual(expected);
    });

    it("should return false when called with no value", () => {
      const product = helpers.areEqual();

      expect(product).toBe(false);
    });
  });
  describe("lessThanNinety", () => {
    it("should return true if values are less than 90", () => {
      const expected = true;
      const actual = helpers.lessThanNinety(89);
      expect(actual).toEqual(expected);
    });
    it("should return false when called with no value", () => {
      const product = helpers.lessThanNinety(0);
      expect(product).toBe(false);
    });
  });
  describe("greaterThanFifty", () => {
    it("should return true if values are more than 50", () => {
      const expected = true;
      const actual = helpers.greaterThanFifty(51);
      expect(actual).toEqual(expected);
    });
    it("should return false when called with no value", () => {
      const product = helpers.greaterThanFifty();
      expect(product).toBe(false);
    });
  });
  describe("add", () => {
    it("should add the two numbers together", () => {
      const expected = 10;
      const actual = helpers.add(5, 5);
      expect(actual).toEqual(expected);
    });
    it("should return 0 when called with no value", () => {
      const product = helpers.add();
      expect(product).toBe(0);
    });
    it("should throw an error when called with a string", () => {
      expect(() => {
        helpers.add("five", "five");
      }).toThrow();
    });
  });
  describe("subtract", () => {
    it("should subtract the two numbers together", () => {
      const expected = 0;
      const actual = helpers.subtract(5, 5);
      expect(actual).toEqual(expected);
    });
    it("should return 0 when called with no value", () => {
      const product = helpers.subtract();
      expect(product).toBe(0);
    });
    it("should throw an error when called with a string", () => {
      expect(() => {
        helpers.subtract("five", "five");
      }).toThrow();
    });
  });
  describe("divide", () => {
    it("should divide the two numbers", () => {
      const expected = 2;
      const actual = helpers.divide(4, 2);
      expect(actual).toEqual(expected);
    });
    it("should return 0 when called with no value", () => {
      const product = helpers.divide();
      expect(product).toBe(0);
    });
    it("should throw an error when called with a string", () => {
      expect(() => {
        helpers.divide("five", "five");
      }).toThrow();
    });
  });
  describe("multiply", () => {
    it("should multiply the two numbers together", () => {
      const expected = 8;
      const actual = helpers.multiply(4, 2);
      expect(actual).toEqual(expected);
    });
    it("should return 0 when called with no value", () => {
      const product = helpers.multiply();
      expect(product).toBe(0);
    });
    it("should throw an error when called with a string", () => {
      expect(() => {
        helpers.multiply("four", "two");
      }).toThrow();
    });
  });
  describe("getRemainder", () => {
    it("should return the remainder of the two numbers", () => {
      const expected = 6;
      const actual = helpers.getRemainder(6, 7);
      expect(actual).toEqual(expected);
    });
    it("should return 0 when called with no value", () => {
      const product = helpers.getRemainder();
      expect(product).toBe(0);
    });
    it("should throw an error when called with a string", () => {
      expect(() => {
        helpers.getRemainder("four", "two");
      }).toThrow();
    });
  });
  describe("isEven", () => {
    it("should return true if the number is even", () => {
      const expected = true;
      const actual = helpers.isEven(2);
      expect(actual).toEqual(expected);
    });
    it("should return false when called with no value", () => {
      const product = helpers.isEven();
      expect(product).toBe(0);
    });
    it("should throw an error when called with a string", () => {
      expect(() => {
        helpers.isEven("four");
      }).toThrow();
    });
  });
  describe("isOdd", () => {
    it("should return true if the number is odd", () => {
      const expected = true;
      const actual = helpers.isOdd(3);
      expect(actual).toEqual(expected);
    });
    it("should return 0 when called with no value", () => {
      const product = helpers.isOdd();
      expect(product).toBe(0);
    });
    it("should throw an error when called with a string", () => {
      expect(() => {
        helpers.isOdd("four");
      }).toThrow();
    });
  });
  describe("square", () => {
    it("should return the square of the number", () => {
      const expected = 4;
      const actual = helpers.square(2);
      expect(actual).toEqual(expected);
    });
    it("should return 0 when called with no value", () => {
      const product = helpers.square();
      expect(product).toBe(0);
    });
    it("should throw an error when called with a string", () => {
      expect(() => {
        helpers.square("four");
      }).toThrow();
    });
  });
  describe("cube", () => {
    it("should return the cube of the number", () => {
      const expected = 8;
      const actual = helpers.cube(2);
      expect(actual).toEqual(expected);
    });
    it("should return 0 when called with no value", () => {
      const product = helpers.cube();
      expect(product).toBe(0);
    });
    it("should throw an error when called with a string", () => {
      expect(() => {
        helpers.cube("four");
      }).toThrow();
    });
  });
  describe("raiseToPower", () => {
    it("should return the raised power of the two numbers", () => {
      const expected = 4;
      const actual = helpers.raiseToPower(2, 2);
      expect(actual).toEqual(expected);
    });
    it("should return 0 when called with no value", () => {
      const product = helpers.raiseToPower();
      expect(product).toBe(0);
    });
    it("should throw an error when called with a string", () => {
      expect(() => {
        helpers.raiseToPower("four", "four");
      }).toThrow();
    });
  });
  describe("roundNumber", () => {
    it("should return the rounded number", () => {
      const expected = 2;
      const actual = helpers.roundNumber(1.7);
      expect(actual).toEqual(expected);
    });
    it("should return 0 when called with no value", () => {
      const product = helpers.roundNumber();
      expect(product).toBe(0);
    });
    it("should throw an error when called with a string", () => {
      expect(() => {
        helpers.roundNumber("four", "four");
      }).toThrow();
    });
  });
  describe("roundUp", () => {
    it("should return the rounded number upwards", () => {
      const expected = 2;
      const actual = helpers.roundUp(1.7);
      expect(actual).toEqual(expected);
    });
    it("should return 0 when called with no value", () => {
      const product = helpers.roundUp();
      expect(product).toBe(0);
    });
    it("should throw an error when called with a string", () => {
      expect(() => {
        helpers.roundUp("four");
      }).toThrow();
    });
  });
  describe("addExclamationPoint", () => {
    it("should add an exclamation point to the end", () => {
      const expected = "hello!";
      const actual = helpers.addExclamationPoint("hello");
      expect(actual).toEqual(expected);
    });
    it("should thow an error called with no value", () => {
      expect(() => {
        helpers.addExclamationPoint();
      }).toThrow();
    });
  });
  describe("combineNames", () => {
    it("should combine the two names", () => {
      const expected = "nico yazawa";
      const actual = helpers.combineNames("nico", "yazawa");
      expect(actual).toEqual(expected);
    });
    it("should thow an error called with no value", () => {
      expect(() => {
        helpers.combineNames();
      }).toThrow();
    });
  });
  describe("getGreeting", () => {
    it("should return a greeting", () => {
      const expected = "Hello nico!";
      const actual = helpers.getGreeting("nico");
      expect(actual).toEqual(expected);
    });
    it("should thow an error when called with no value", () => {
      expect(() => {
        helpers.getGreeting();
      }).toThrow();
    });
  });
  describe("getRectangleArea", () => {
    it("should return the area of the rectangle", () => {
      const expected = 4;
      const actual = helpers.getRectangleArea(2, 2);
      expect(actual).toEqual(expected);
    });
    it("should return 0 when called with no value", () => {
      const product = helpers.getRectangleArea();
      expect(product).toBe(0);
    });
    it("should throw an error when called with a string", () => {
      expect(() => {
        helpers.getRectangleArea("four", "four");
      }).toThrow();
    });
  });
  describe("getTriangleArea", () => {
    it("should return the area of the triangle", () => {
      const expected = 2;
      const actual = helpers.getTriangleArea(2, 2);
      expect(actual).toEqual(expected);
    });
    it("should return 0 when called with no value", () => {
      const product = helpers.getTriangleArea();
      expect(product).toBe(0);
    });
    it("should throw an error when called with a string", () => {
      expect(() => {
        helpers.getTriangleArea("four", "four");
      }).toThrow();
    });
  });
  describe("getCircleArea", () => {
    it("should return the area of the rectangle", () => {
      const expected = 12.566370614359172;
      const actual = helpers.getCircleArea(2);
      expect(actual).toEqual(expected);
    });
    it("should return 0 when called with no value", () => {
      const product = helpers.getCircleArea();
      expect(product).toBe(0);
    });
    it("should throw an error when called with a string", () => {
      expect(() => {
        helpers.getCircleArea("four");
      }).toThrow();
    });
  });
  describe("getRectangularPrismVolume", () => {
    it("should return the area of the rectangle", () => {
      const expected = 8;
      const actual = helpers.getRectangularPrismVolume(2, 2, 2);
      expect(actual).toEqual(expected);
    });
    it("should return 0 when called with no value", () => {
      const product = helpers.getRectangularPrismVolume();
      expect(product).toBe(0);
    });
    it("should throw an error when called with a string", () => {
      expect(() => {
        helpers.getRectangularPrismVolume("four", "four", "four", "four");
      }).toThrow();
    });
  });
});
