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

  it("returns n - 5 when given a number n", () => {
    expect(helpers.subtractFive(0)).toBe(-5);
    expect(Number(helpers.subtractFive(10.12).toFixed(2))).toBe(5.12);
    expect(helpers.subtractFive(2)).toBe(-3);
    expect(helpers.subtractFive(-3)).toBe(-8);
  });
});

describe("areSameLength", () => {
  testWrongTypes(helpers.areSameLength, "string", undefined);

  it("Checks if two strings are the same length", () => {
    expect(helpers.areSameLength("sdfsdf", "sdfsdf")).toBe(true);
    expect(helpers.areSameLength("dostuff", "dothings")).toBe(false);
    expect(helpers.areSameLength("iamacoolstring", "iamalamestring")).toBe(
      true
    );
    expect(helpers.areSameLength("aaaa", "aaa")).toBe(false);
  });
});

describe("areEqual", () => {
  it("Checks if two anythings are the same", () => {
    expect(helpers.areEqual("sdfsdf", "sdfsdf")).toBe(true);
    expect(helpers.areEqual(5, "5")).toBe(false);
    expect(helpers.areEqual("iamacoolstring", "iamalamestring")).toBe(false);
    expect(helpers.areEqual(6, 6)).toBe(true);
    expect(helpers.areEqual(7, undefined)).toBe(false);
    expect(helpers.areEqual(NaN, null)).toBe(false);
    expect(helpers.areEqual(false, 0)).toBe(false);
    expect(helpers.areEqual(true, { key: "value" })).toBe(false);
    expect(helpers.areEqual(false, "false")).toBe(false);
  });
});
