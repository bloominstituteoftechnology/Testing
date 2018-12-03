const helpers = require("./project-1");

// start testing!

describe("project-1.js helpers", () => {
  test("jest runs", () => {});

  beforeEach(() => {
    console.log("running");
  });

  describe("multiplyByTen()", () => {
    it("should multiply provided number by 10", () => {
      const expected = 100;
      const actual = helpers.multiplyByTen(10);
      expect(actual).toEqual(expected);
    });
  });
});
