const helpers = require("./project-1");

describe("Multiply the number passed with 10", () => {
  const multiplyByTen = helpers.multiplyByTen;
  it("Should multiply two numbers together", () => {
    expect(multiplyByTen(20)).toBe(200);
  });
  it("Should multiply a negative number", () => {
      expect(multiplyByTen(-2)).toBe(-20);
  });
  it("the argument passed should equal a whole number", () => {
    expect(multiplyByTen(5.5)).toBe(false);
  });
  it("the argument passed should be a number type", () => {
    expect(multiplyByTen("10")).toBe(false);
  });
});

describe("Subtract the number passed by 5", () => {
    const subtractFive = helpers.subtractFive;

    it("Should subtract the passed argument by 5", () => {
        expect(subtractFive(6)).toBe(1);
    });

    it("Should have a negative number if the value you are using for subtraction is bigger than the argument", () => {
        expect(subtractFive(3)).toBe(-2);
    });
});

describe("The two strings have the same length", () => {
    const areSameLength = helpers.areSameLength;

    it("Both strings should have the same length", () => {
        expect(areSameLength("dragon","margin")).toBe(true);
    })
    it("Both strings should have different lengths", () => {
        expect(areSameLength("test","margin")).toBe(false);
    })
})

describe("Both values equal to one another.", () => {
    const areEqual = helpers.areEqual;

    it("Both arguments of the same value should equal to true", () => {
        expect(areEqual(5,5)).toBe(true);
        expect(areEqual(2489,2489)).toBe(true);
        expect(areEqual(6,6)).toBe(true);
    })
    it("Arguments of different values should equal to false", () => {
        expect(areEqual(5,3)).toBe(false);
        expect(areEqual("drag",3)).toBe(false);
    })
})
// start testing!
