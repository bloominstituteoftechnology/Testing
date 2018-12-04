const helpers = require("./project-1");

// start testing!

describe("project-1.js helpers", () => {
  test("jest runs", () => {});

  describe("multiplyByTen()", () => {
    it("should multiply number by 10", () => {
      expect(helpers.multiplyByTen(10)).toEqual(100);
    });

    it("should return a number", () => {
      expect(typeof 10 === "number").toBeTruthy();
    });
  });

  describe("subtractFive()", () => {
    it("should subtract number by 5", () => {
      expect(helpers.subtractFive(10)).toEqual(5);
    });
    it("should return a number", () => {
      expect(typeof 5).toBe("number");
    });
  });

  describe("areSameLength()", () => {
    it("should be the same length", () => {
      expect(helpers.areSameLength("string", "string")).toBeTruthy();
    });
  });

  describe("areEqual()", () => {
    it("should be equal", () => {
      expect(helpers.areEqual(5, 5)).toBeTruthy();
    });

    it("should return a boolean", () => {
      expect(typeof helpers.areEqual(5, 5)).toBe("boolean");
    });
  });

  describe("lessThanNinety()", () => {
    it("should be less than 90", () => {
      expect(helpers.lessThanNinety(91)).not.toBeTruthy();
    });

    it("should return a boolean", () => {
      expect(typeof helpers.lessThanNinety(89)).toBe("boolean");
    });
  });

  describe("greaterThanFifty()", () => {
    it("should be greater than fifty", () => {
      expect(helpers.greaterThanFifty(51)).toBeTruthy();
    });
  });

  describe("add()", () => {
    it("should return a number", () => {
      expect(typeof helpers.add(1, 2)).toBe("number");
    });

    it("should add received numbers", () => {
      expect(helpers.add(1, 2)).toEqual(3);
    });
  });

  describe("subtract()", () => {
    it("should return a number", () => {
      expect(typeof helpers.subtract(3, 2)).toBe("number");
    });

    it("should subtract received numbers", () => {
      expect(helpers.subtract(3, 2)).toEqual(1);
    });
  });

  describe("divide()", () => {
    it("should return a number", () => {
      expect(typeof helpers.divide(1, 2)).toBe("number");
    });
    it("should divide received numbers", () => {
      expect(helpers.divide(4, 2)).toEqual(2);
    });
  });

  describe("multiply()", () => {
    it("should return a number", () => {
      expect(typeof helpers.multiply(1, 2)).toBe("number");
    });
    it("should divide received numbers", () => {
      expect(helpers.multiply(2, 2)).toEqual(4);
    });
  });

  describe("getRemainder()", () => {
    it("should return a number", () => {
      expect(typeof helpers.getRemainder(1, 2)).toBe("number");
    });
    it("should get the remainder of received numbers", () => {
      expect(helpers.getRemainder(4, 3)).toEqual(1);
    });
  });

  describe("isEven()", () => {
    it("should return a boolean", () => {
      expect(typeof helpers.isEven(2)).toBe("boolean");
    });
    it("should be even", () => {
      expect(helpers.isEven(2)).toBeTruthy();
    });
  });

  describe("isOdd()", () => {
    it("should return a boolean", () => {
      expect(typeof helpers.isOdd(1)).toBe("boolean");
    });
    it("should be odd", () => {
      expect(helpers.isOdd(1)).toBeTruthy();
    });
  });

  describe("square()", () => {
    it("should return a number", () => {
      expect(typeof helpers.square(2)).toBe("number");
    });
    it("should get the square of received number", () => {
      expect(helpers.square(2)).toEqual(4);
    });
  });

  describe("cube()", () => {
    it("should return a number", () => {
      expect(typeof helpers.cube(2)).toBe("number");
    });
    it("should calculate the cube of received number", () => {
      expect(helpers.cube(2)).toEqual(8);
    });
  });

  describe("raiseToPower()", () => {
    it("should return a number", () => {
      expect(typeof helpers.raiseToPower(2)).toBe("number");
    });
    it("should raise to the nth power", () => {
      expect(helpers.raiseToPower(3, 2)).toEqual(9);
    });
  });

  describe("roundNumber", () => {
    it("should return a number", () => {
      expect(typeof helpers.roundNumber(2.2)).toBe("number");
    });
    it("should round up the number", () => {
      expect(helpers.roundNumber(4.8)).toEqual(5);
    });
  });

  describe("addExclamationPoint()", () => {
    it("should return a string", () => {
      expect(typeof helpers.addExclamationPoint("hey")).toBe("string");
    });
    it("should add an exclamation point to received string", () => {
      expect(helpers.addExclamationPoint("hey")).toBe("hey!");
    });
  });

  describe("combineNames()", () => {
    it("should return a string", () => {
      expect(typeof helpers.combineNames("Bob", "Marley")).toBe("string");
    });
    it("should combine first name and last name", () => {
      expect(helpers.combineNames("Bob", "Marley")).toBe("Bob Marley");
    });
  });

  describe("getGreeting()", () => {
    it("should return a string", () => {
      expect(typeof helpers.getGreeting("hey")).toBe("string");
    });
    it("should greet the received name", () => {
      expect(helpers.getGreeting("Gabe")).toBe("Hello Gabe!");
    });
  });

  describe("getRectangleArea()", () => {
    it("should return a number", () => {
      expect(typeof helpers.getRectangleArea(2, 2)).toBe("number");
    });
    it("should get the rectangle area of received numbers", () => {
      expect(helpers.getRectangleArea(2, 2)).toEqual(4);
    });
  });

  describe("getTriangleArea()", () => {
    it("should return a number", () => {
      expect(typeof helpers.getTriangleArea(2, 2)).toBe("number");
    });
    it("should get the triangle area of received numbers", () => {
      expect(helpers.getTriangleArea(4, 5)).toEqual(10);
    });
  });

  describe("getCircleArea()", () => {
    it("should return a number", () => {
      expect(typeof helpers.getCircleArea(2)).toBe("number");
    });
    it("should get the circle area of received number", () => {
      expect(helpers.getCircleArea(3)).toEqual(28.274333882308138);
    });
  });

  describe("getRectangularPrismVolume", () => {
    it("should return a number", () => {
      expect(typeof helpers.getRectangularPrismVolume(2, 2, 2)).toBe("number");
    });
    it("should get the rectangular prism volume of received numbers", () => {
      expect(helpers.getRectangularPrismVolume(2, 3, 4)).toEqual(24);
    });
  });
});
