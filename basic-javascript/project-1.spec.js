const helpers = require("./project-1");

describe("multiplyByTen - Multiply the number passed with 10", () => {
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

describe("subtractFive - Subtract the number passed by 5", () => {
    const subtractFive = helpers.subtractFive;

    it("Should subtract the passed argument by 5", () => {
        expect(subtractFive(6)).toBe(1);
    });

    it("Should have a negative number if the value you are using for subtraction is bigger than the argument", () => {
        expect(subtractFive(3)).toBe(-2);
    });
});

describe("areSameLength - The two strings have the same length", () => {
    const areSameLength = helpers.areSameLength;

    it("Both strings should have the same length", () => {
        expect(areSameLength("dragon","margin")).toBe(true);
    })
    it("Both strings should have different lengths", () => {
        expect(areSameLength("test","margin")).toBe(false);
    })
})

describe(`${helpers.areEqual.name} - Both values equal to one another.`, () => {
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

describe(`${helpers.lessThanNinety.name}`, () => {
    const lessThanNinety = helpers.lessThanNinety;

    it("should return true if the number is less than ninety", () => {
        expect(lessThanNinety(55)).toBe(true);
        expect(lessThanNinety(77)).toBe(true);
        expect(lessThanNinety(89)).toBe(true);
    });
    it("should return false if the number is greater or equal to ninety", () => {
        expect(lessThanNinety(91)).toBe(false);
        expect(lessThanNinety(999)).toBe(false);
        expect(lessThanNinety(90)).toBe(false);
    });
});

describe(`${helpers.greaterThanFifty.name}`, () => {
    const greaterThanFifty = helpers.greaterThanFifty;
    it("Should return true if the argument passed is greater than 50", () => {
        expect(greaterThanFifty(51)).toBe(true);
        expect(greaterThanFifty(5204)).toBe(true);
        expect(greaterThanFifty(444)).toBe(true);
    });
    it("Should return false if the argument passed is less than or equal to 50", () => {
        expect(greaterThanFifty(50)).toBe(false);
        expect(greaterThanFifty(2)).toBe(false);
        expect(greaterThanFifty(-55)).toBe(false);
    });
})
describe(`${helpers.add.name}`, () => {
    const add = helpers.add;
    it("Should add numbers together to equal their target value", () => {
        expect(add(5,2)).toBe(7);
        expect(add(3,1)).toBe(4);
        expect(add(100,22)).toBe(122);
        expect(add(-55,22)).toBe(-33);
    });
});
describe(`${helpers.subtract.name}`, () => {
    const subtract = helpers.subtract;
    it("Should subtract numbers together to equal their target value", () => {
        expect(subtract(5,2)).toBe(3);
        expect(subtract(3,1)).toBe(2);
        expect(subtract(100,22)).toBe(78);
        expect(subtract(-55,22)).toBe(-77);
    });
});

describe(`${helpers.divide.name}`, () => {
    const divide = helpers.divide;
    it("Should divide numbers together to equal their target value", () => {
        expect(divide(5,2)).toBe(2.5);
        expect(divide(3,1)).toBe(3);
        expect(divide(100,20)).toBe(5);
        expect(divide(-50,2)).toBe(-25);
    });
    it("Should check if the value is Infinity", () => {
        expect(divide(50,0)).toBe(Infinity);
        expect(divide(20,0)).toBe(Infinity);
    })
    it("Should check if both arguments are 0", () => {
        expect(divide(0,0)).toBeNaN();
    });
});
// start testing!
