const helpers = require("./project-1");

// start testing!
describe("multiplyByTen()", () => {
  it("should multiply provided number by ten", () => {
    const expected = 100;
    const actual = helpers.multiplyByTen(10);
    expect(actual).toEqual(expected);
  });
});

describe("subtractFive()", () => {
  it("should subtract five from the provided number", () => {
    const expected = 10;
    const actual = helpers.subtractFive(15);
    expect(actual).toEqual(expected);
  });
});
