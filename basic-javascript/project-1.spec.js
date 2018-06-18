const helpers = require("./project-1");

const testWrongTypes = (functionTested, expectedType, failReturn) => {
  const dataTypes = [
    "doggie",
    true,
    null,
    undefined,
    { key: "value" },
    NaN,
    17
  ];
  it(`Returns ${failReturn} if given the wrong data type`, () => {
    dataTypes.forEach(type => {
      if (typeof type !== expectedType)
        expect(functionTested(type)).toBe(failReturn);
    });
  });
};

// start testing!
describe("multiplyByTen", () => {
  testWrongTypes(helpers.multiplyByTen, "number", undefined);

  it("returns 10n when given a number n", () => {
    expect(helpers.multiplyByTen(0)).toBe(0);
    expect(helpers.multiplyByTen(10.11)).toBe(101.1);
    expect(helpers.multiplyByTen(2)).toBe(20);
    expect(helpers.multiplyByTen(-3)).toBe(-30);
  });
});

describe("subtractFive", () => {
  testWrongTypes(helpers.subtractFive, "number", undefined);

  it("returns 10n when given a number n", () => {
    expect(helpers.subtractFive(0)).toBe(-5);
    expect(Number(parseFloat(helpers.subtractFive(10.12)).toPrecision(3))).toBe(
      5.12
    );
    expect(helpers.subtractFive(2)).toBe(-3);
    expect(helpers.subtractFive(-3)).toBe(-8);
  });
});
