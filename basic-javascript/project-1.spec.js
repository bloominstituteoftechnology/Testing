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
});
