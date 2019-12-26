const helpers = require("./project-1");

describe("Math", () => {
  it("should multiply by ten", () => {
    expect(helpers.multiplyByTen(10)).toBe(100);
  });

  it("should sumbtract by five", () => {
    expect(helpers.subtractFive(10)).toBe(5);
  });

  it("should check the length", () => {
    expect(helpers.areSameLength([1, 2, 4], [3, 2])).toBe(false);
  });

  it("should check if the number is less than ninety", () => {
    expect(helpers.lessThanNinety(100)).toBe(false);
  });

  it("should check if the number is greater than fifty", () => {
    expect(helpers.greaterThanFifty(50)).toBe(false);
  });

  it("should add numbers", () => {
    expect(helpers.add(6, 9)).toBe(15);
  });

  it("should subtract numbers", () => {
    expect(helpers.subtract(10, 10)).toBe(0);
  });

  it("shoul divide numbers", () => {
    expect(helpers.divide(1, 1)).toBe(1);
  });

  it("should multipy numbers", () => {
    expect(helpers.multiply(10, 10)).toBe(100);
  });

  it("should get remainder", () => {
    expect(helpers.getRemainder(1, 2)).toBe(1);
  });

  it("should check if even", () => {
    expect(helpers.isEven(2)).toBe(true);
  });

  it("should check if odd", () => {
    expect(helpers.isOdd(2)).toBe(false);
  });

  it("should square the number", () => {
    expect(helpers.square(2)).toBe(4);
  });

  it("should cube the number", () => {
    expect(helpers.cube(2)).toBe(8);
  });

  it("should raise to power", () => {
    expect(helpers.raiseToPower(2, 2)).toBe(4);
  });

  it("should round number", () => {
    expect(helpers.roundNumber(14.4)).toBe(14);
  });

  it("should round up the number", () => {
    expect(helpers.roundUp(14.4)).toBe(15);
  });

  describe("area problems", () => {
    it("should get rectangle area", () => {
      expect(helpers.getRectangleArea(10, 10)).toBe(100);
    });

    it("should get triangle area", () => {
      expect(helpers.getTriangleArea(10, 10)).toBe(50);
    });

    it("should get circle prism", () => {
      expect(helpers.getCircleArea(10)).toBe(314.1592653589793);
    });

    it("should get reactangle prism volume", () => {
      expect(helpers.getRectangularPrismVolume(10, 10, 10)).toBe(1000);
    });
  });
});

describe("general", () => {
  it("should add name in log", () => {
    expect(helpers.getGreeting("kamal")).toBe("Hello kamal!");
  });

  it("should combine name", () => {
    expect(helpers.combineNames("kamal", "mukkamala")).toBe("kamal mukkamala");
  });

  it("should add exclamation point", () => {
    expect(helpers.addExclamationPoint("Hey")).toBe("Hey!");
  });
});
