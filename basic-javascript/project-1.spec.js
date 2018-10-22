const helpers = require("./project-1");

// start testing!

describe("project-1", () => {
  describe("multiplyByTen", () => {
    it("should  return 0 when nothing or undefined is passed in", () => {
      expect(helpers.multiplyByTen(undefined)).toEqual(0);
    });
    it("should return an error if number is not of type number", () => {
      const actual = "5";
      expect(() => helpers.multiplyByTen(actual)).toThrow();
    });
    it("should multiply number by ten", () => {
      const actual = 10;
      const expected = 100;
      expect(helpers.multiplyByTen(actual)).toEqual(expected);
    });
  });

  describe("subtractFive", () => {
    it("should return 0 when nothing or undefined is passed in", () => {
      expect(helpers.subtractFive(undefined)).toEqual(0);
    });
    it("should return an error if number is not of type number", () => {
      const actual = "5";
      expect(() => helpers.subtractFive(actual)).toThrow();
    });
    it("should multiply number by ten", () => {
      const actual = 50;
      const expected = 45;
      expect(helpers.subtractFive(actual)).toEqual(expected);
    });
  });
  describe("areSameLength", () => {
    const v1 = 5;
    const v2 = 5;
    it("should return true even when both values are blank", () => {
      expect(helpers.areSameLength("", undefined)).toBe(true);
    });
    it("should type-cast non-string values to strings and still return true", () => {
      expect(() => {
        helpers.areSameLength(1, null);
      }).toThrow();
    });
    it("should return true", () => {
      expect(helpers.areSameLength(v1, v2)).toBe(true);
    });
  });

  describe("areEqual", () => {
    it("should be return true when both values are the same", () => {
      const v1 = 5;
      const v2 = 5;
      expect(helpers.areEqual(v1, v2)).toEqual(true);
    });
    it("should typecast to same data type if they are loosely the same data type and are a string or number based on type of first values data type.", () => {
      expect(helpers.areEqual(5, "5")).toEqual(true);
    });
  });

  describe("lessThanNinety", () => {
    const actual = "44";
    it("should be true if less than 90", () => {
      expect(helpers.lessThanNinety(actual)).toBe(true);
    });
  });

  describe("greaterThanFifty", () => {
    const actual = 51;
    expect(helpers.greaterThanFifty(actual)).toBe(true);
  });

  describe("add", () => {
    it("should add two numbers and compare to an expected value", () => {
      const v1 = 10;
      const v2 = 40;
      const expected = 50;
      expect(helpers.add(v1, v2)).toEqual(expected);
      expect(helpers.add(v1, v2)).not.toEqual(51);
    });
  });

  describe("subtract", () => {
    it("should subtract two numbers and compare to an expected value", () => {
      const v1 = 40;
      const v2 = 10;
      const expected = 30;
      expect(helpers.subtract(v1, v2)).toEqual(expected);
      expect(helpers.subtract(v1, v2)).not.toEqual(51);
    });
  });

  describe("divide", () => {
    it("should divide two numbers and compare to an expected value", () => {
      const v1 = 40;
      const v2 = 10;
      const expected = 4;
      expect(helpers.divide(v1, v2)).toEqual(expected);
      expect(helpers.divide(v1, v2)).not.toEqual(51);
    });
  });

  describe("multiply", () => {
    it("should multiply two numbers and compare to an expected value", () => {
      const v1 = 40;
      const v2 = 10;
      const expected = 400;
      expect(helpers.multiply(v1, v2)).toEqual(expected);
      expect(helpers.multiply(v1, v2)).not.toEqual(51);
    });
  });

  describe("getRemainder", () => {
    const v1 = 10;
    const v2 = 20;
    const expected = v1 % v2;
    it("should return remainder of x and y and compare against expected", () => {
      expect(helpers.getRemainder(v1, v2)).toEqual(expected);
    });
  });

  describe("isEven", () => {
    const actual = 4;
    it("should be true if even", () => {
      expect(helpers.isEven(actual)).toBe(true);
    });
  });

  describe("isOdd", () => {
    const actual = 5;
    it("should be true if even", () => {
      expect(helpers.isOdd(actual)).toBe(true);
    });
  });

  describe("addExclamationPoint", () => {
    it("should concat an ! to end of string", () => {
      expect(helpers.addExclamationPoint("Hello, World")).toEqual(
        "Hello, World!"
      );
    });
  });

  describe("combineNames", () => {
    it("should combine two names", () => {
      expect(helpers.combineNames('Brian', 'Ruff')).toEqual('Brian Ruff');
    });
    it("should not combine two names properly", () => {
      expect(helpers.combineNames('Brian', 'Ruff')).not.toEqual('Brian Ruff - 2')
    })
  })
});
