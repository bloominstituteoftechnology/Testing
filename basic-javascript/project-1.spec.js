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

describe(`${helpers.multiply.name}`, () => {
    const multiply = helpers.multiply;
    it("Should multiply numbers together to equal their target value", () => {
        expect(multiply(5,2)).toBe(10);
        expect(multiply(3,1)).toBe(3);
        expect(multiply(100,22)).toBe(2200);
        expect(multiply(-2, -4)).toBe(8);
        expect(multiply(-2, 4)).toBe(-8);
    });
});

describe(`${helpers.getRemainder.name}`, () => {
    const getRemainder = helpers.getRemainder;
    it("Should getRemainder numbers together to equal their target value", () => {
        expect(getRemainder(5,2)).toBe(1);
        expect(getRemainder(3,1)).toBe(0);
        expect(getRemainder(100,22)).toBe(12);
        expect(getRemainder(-2, -4)).toBe(-2);
        expect(getRemainder(-2, 4)).toBe(-2);
    });
});
describe(`${helpers.isEven.name}`, () => {
    const isEven = helpers.isEven;
    it("Should return true for the number argument", () => {
        expect(isEven(2)).toBeTruthy();
        expect(isEven(4)).toBeTruthy()
        expect(isEven(122)).toBeTruthy();
        expect(isEven(252)).toBeTruthy()
        expect(isEven(4)).toBeTruthy();
    });
    it ("Should return false for the number argument", () => {
        expect(isEven(3)).toBeFalsy();
        expect(isEven(5)).toBeFalsy()
        expect(isEven(121)).toBeFalsy();
        expect(isEven(251)).toBeFalsy()
        expect(isEven(-5)).toBeFalsy();
    })
});
describe(`${helpers.isOdd.name}`, () => {
    const isOdd = helpers.isOdd;
    it("Should return false for the number argument", () => {
        expect(isOdd(2)).toBeFalsy();
        expect(isOdd(4)).toBeFalsy()
        expect(isOdd(122)).toBeFalsy();
        expect(isOdd(252)).toBeFalsy()
        expect(isOdd(4)).toBeFalsy();
    });
    it ("Should return true for the number argument", () => {
        expect(isOdd(3)).toBeTruthy();
        expect(isOdd(5)).toBeTruthy()
        expect(isOdd(121)).toBeTruthy();
        expect(isOdd(251)).toBeTruthy()
        expect(isOdd(-5)).toBeTruthy();
    })
});

describe(`${helpers.square}`, () => {
    const square = helpers.square;

    it('Should square the argument passed', () => {
        expect(square(2)).toBe(4);
        expect(square(4)).toBe(16);
        expect(square(6)).toBe(36);
        expect(square(11)).toBe(121);
    });
    it('Should square a negative argument', () => {
        expect(square(-2)).toBe(4);
        expect(square(-4)).toBe(16);
        expect(square(-6)).toBe(36);
        expect(square(-11)).toBe(121);
    });
});
describe(`${helpers.cube}`, () => {
    const cube = helpers.cube;

    it('Should cube the argument passed', () => {
        expect(cube(2)).toBe(8);
        expect(cube(4)).toBe(64);
        expect(cube(6)).toBe(216);
        expect(cube(11)).toBe(1331);
    });
    it('Should cube a negative argument', () => {
        expect(cube(-2)).toBe(-8);
        expect(cube(-4)).toBe(-64);
        expect(cube(-6)).toBe(-216);
        expect(cube(-11)).toBe(-1331);
    });
});

describe(`${helpers.raiseToPower.name}`, () => {
    const raiseToPower = helpers.raiseToPower;
    it('should return a 1 if the exponent argument is 0', () => {
        expect(raiseToPower(20,0)).toBe(1);
    }) 
    it('should use the exponent argument and use the base to calculate', () => {
        expect(raiseToPower(3,2)).toBe(9);
        expect(raiseToPower(5,4)).toBe(625);
    });
});

describe(`${helpers.roundNumber.name}`, () => {
    const roundNumber = helpers.roundNumber;
    it('should round the number to the nearest whole number', () => {
        expect(roundNumber(5.5)).toBe(6);
        expect(roundNumber(5.4)).toBe(5);
    }) 
});

describe(`${helpers.roundUp.name}`, () => {
    const roundUp = helpers.roundUp;
    it('should round the number up to the biggest whole number', () => {
        expect(roundUp(5.5)).toBe(6);
        expect(roundUp(5.4)).toBe(6);
    }) 
});

describe(`${helpers.addExclamationPoint.name}`, () => {
    const addExclamationPoint = helpers.addExclamationPoint;
    const tests = ['This is a te3!st', 'Another test', 'exclamation point'];

    const exclamationTests = tests.map(item => {
       return addExclamationPoint(item);
    });

    it('should have an exclamation at the end of the string', () => {
        for(let i = 0; i < exclamationTests.length; i++) {
        expect(exclamationTests[i]).toMatch(tests[i]+"!")
        }
    }) 
});

describe(`${helpers.combineNames.name}`, () => {
    const combineNames = helpers.combineNames;
    const regex = /\w+ \w+/;
    it("should display the first and last name", () => {
        expect(combineNames('John', 'Smith')).toMatch(regex);
        expect(combineNames('Dragon', 'Tim')).toMatch(regex);
        expect(combineNames('Tommy', 'Smith')).toMatch(regex);
    });
});


describe(`${helpers.getGreeting.name}`, () => {
    const getGreeting = helpers.getGreeting;
    const names = ['Johnny', 'Bill', 'Darwin'];
    it('should have Hello at the beginning of the greeting', () => {
        for(let i = 0; i < names.length; i++) {
        expect(getGreeting(names[i])).toMatch('Hello ' + names[i]);
        }
    })
})

describe(`${helpers.getRectangleArea.name}`, () => {
    const getRectangleArea = helpers.getRectangleArea;
    it('should return the area of the rectangle', () => {
        expect(getRectangleArea(4,3)).toBe(12);
    })
});

describe(`${helpers.getTriangleArea.name}`, () => {
    const getTriangleArea = helpers.getTriangleArea;
    it('should return the triangle area', () => {
        expect(getTriangleArea(3,2)).toBe(3);
    });
});
describe(`${helpers.getCircleArea.name}`, () => {
    const getCircleArea = helpers.getCircleArea;
    it('should return the circle area', () => {
        expect(getCircleArea(3)).toBeCloseTo(28.274);
        expect(getCircleArea(5)).toBeCloseTo(78.539);
    });
});
describe(`${helpers.getRectangularPrismVolume.name}`, () => {
    const getRectangularPrismVolume = helpers.getRectangularPrismVolume;
    it('should return the rectangular prism volume', () => {
        expect(getRectangularPrismVolume(4,3,6)).toBe(72);
        expect(getRectangularPrismVolume(2,2,2)).toBe(8);
    });
});
// start testing!
