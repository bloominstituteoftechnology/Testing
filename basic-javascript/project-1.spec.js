const helpers = require("./project-1");

// start testing!
describe("Project-1", () => {
  describe("multiplyByTen(num)", () => {
    test("Multiply by 10", () => {
      expect(helpers.multiplyByTen(1)).toEqual(10);
      expect(helpers.multiplyByTen()).toEqual(0);
    });

    // String
    test("Throw an error if argument is not a number", () => {
      expect(() => {
        helpers.multiplyByTen("1").toThrow();
      });
    });
  });

  describe("subtractFive(num)", () => {
    test("Subtract by 5", () => {
      expect(helpers.subtractFive(10)).toEqual(5);
    });

    test("Throw an error if argument is not a number", () => {
      expect(() => {
        helpers.subtractFive("5").toThrow();
      });
    });
  });

  describe("areSameLength(str1, str2)", () => {
    test("Same length", () => {
      expect(helpers.areSameLength("hello", "three"));
    });
  });

  describe("areEqual(x, y)", () => {
    test("Are Equal", () => {
      expect(helpers.areEqual(5, 5));
    });
  });

  describe("lessThanNinety(num)", () => {
    test("Less than 90", () => {
      expect(helpers.lessThanNinety(89));
    });
  });

  describe("greaterThenFifty(num)", () => {
    test("Greater than 50", () => {
      expect(helpers.greaterThanFifty(51));
    });
  });

  describe("add(x, y)", () => {
    test("Add two numbers", () => {
      expect(helpers.add(2, 2)).toEqual(4);
    });

    test("Throw an error if an argument is not a number", () => {
      expect(() => {
        helpers.add("5", 5).toThrow();
      });
      expect(() => {
        helpers.add("5", "5").toThrow();
      });
      expect(() => {
        helpers.add(5, "5").toThrow();
      });
    });
  });

  describe("subtract(x, y)", () => {
    test("Subtract two numbers", () => {
      expect(helpers.subtract(8, 2)).toEqual(6);
    });

    test("Throw an error if an argument is not a number", () => {
      expect(() => {
        helpers.add("5", null).toThrow();
      });
      expect(() => {
        helpers.add("5", "5").toThrow();
      });
      expect(() => {
        helpers.add(5, "5").toThrow();
      });
    });
  });

  describe("divide(x, y)", () => {
    test("Divide two numbers", () => {
      expect(helpers.divide(25, 5)).toEqual(5);
    });
  });

  describe("multiply(x, y)", () => {
    test("Multiply two numbers", () => {
      expect(helpers.multiply(5, 5)).toEqual(25);
    });
  });

  describe("getRemainder(x, y)", () => {
    test("Get remainder between two numbers", () => {
      expect(helpers.getRemainder(11, 5)).toEqual(1);
    });
  });

  describe("isEven(num)", () => {
    test("Is number even", () => {
      expect(helpers.isEven(10)).toEqual(true);
    });
  });

  describe("isOdd(num)", () => {
    test("Is number odd", () => {
      expect(helpers.isOdd(10)).toEqual(false);
    });
  });

  describe("square(num)", () => {
    test("Square the number that is given", () => {
      expect(helpers.square(10)).toEqual(100);
    });
  });

  describe("cube(num)", () => {
    test("Cube the number that is given", () => {
      expect(helpers.cube(10)).toEqual(1000);
    });
  });

  describe("raiseToPower(num, exponent)", () => {
    test("Raise num to the power of the exponent", () => {
      expect(helpers.raiseToPower(2, 2)).toEqual(4);
    });
  });

  describe("roundNumber(num)", () => {
    test("Round the num that is given", () => {
      expect(helpers.roundNumber(2.2)).toEqual(2);
    });
  });

  describe("roundUp(num)", () => {
    test("Round up the num that is given", () => {
      expect(helpers.roundUp(2.75)).toEqual(3);
    });
  });

  describe("addExclamationPoint(str)", () => {
    test("Add an ! to the string", () => {
      expect(helpers.addExclamationPoint("Hello World")).toEqual(
        "Hello World!"
      );
    });
  });

  describe("combineNames(firstName, lastName)", () => {
    test("Combine the first and last name", () => {
      expect(helpers.combineNames("Jon", "Snow")).toEqual("Jon Snow");
    });
  });

  describe("getGreeting(name)", () => {
    test("Give a greeting", () => {
      expect(helpers.getGreeting("Jon")).toEqual("Hello Jon!");
    });
  });

  describe("getRectangleArea(length, width)", () => {
    test("Get area of the rectangle", () => {
      expect(helpers.getRectangleArea(6, 7)).toEqual(42);
    });
  });

  describe("getTriangleArea(base, height)", () => {
    test("Get area of the triangle", () => {
      expect(helpers.getTriangleArea(6, 7)).toEqual(21);
    });
  });

  describe("getCircleArea(radius", () => {
    test("Get area of the circle", () => {
      expect(helpers.getCircleArea(1)).toEqual(Math.PI);
    });
  });

  describe("getRectangleArea(length, width, height)", () => {
    test("Get volume of the rectangle", () => {
      expect(helpers.getRectangularPrismVolume(4, 3, 2)).toEqual(24);
    });
  });
}); // Project 1
