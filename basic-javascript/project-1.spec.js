const helpers = require('./project-1');

describe("multiplyByTen", () => {
    it("num should be a number", () => {
        const num = helpers.multiplyByTen(7);
        expect(typeof num).toBe("number");
    });
    it("should multiply the num by 10", () => {
        const multiplyByTen = helpers.multiplyByTen;
        const expected = multiplyByTen(3);
        expect(expected).toBe(30);
    });
});

describe("subtractFive", () => {
    it("num should be a number", () => {
        const num = helpers.subtractFive(3);
        expect(typeof num).toBe("number");
    });
    it("should substract the num", () => {
        const substractFive = helpers.subtractFive;
        const expected = substractFive(9);
        expect(expected).toBe(4);
    });
});

describe("areSameLength", () => {
    const areSameLength = helpers.areSameLength;
    const str1 = "apple";
    const str2 = "orange";
    const str3 = "juice";
    it("should return a bool", () => {
        expect(typeof areSameLength(str1, str2)).toBe("boolean");
    });
    it("should return true", () => {
        expect(areSameLength(str1, str3)).toBeTruthy();
    });
    it("should return false", () => {
        expect(areSameLength(str1, str2)).toBeFalsy();
    });
});

describe("areEqual", () => {
    const areEqual = helpers.areEqual;
    const num1 = 8;
    const num2 = 5;
    const num3 = 8;

    it("should return a boolean", () => {
        expect(typeof areEqual(num1, num2)).toBe("boolean");
    });
    it("should return true", () => {
        expect(areEqual(num1, num3)).toBeTruthy();
    });
    it("should return false", () => {
        expect(areEqual(num1, num2)).toBeFalsy();
    });
});

describe("lessThanNinety", () => {
    const lessThanNinety = helpers.lessThanNinety;
    it("checks if the num is less than ninety", () => {
        expect(lessThanNinety(70)).toBeTruthy();
        expect(lessThanNinety(99)).toBeFalsy();
    });
});

describe("greaterThanFifty", () => {
    const greaterThanFifty = helpers.greaterThanFifty;
    it("checks if the num is greater than fifty", () => {
        expect(greaterThanFifty(71)).toBeTruthy();
        expect(greaterThanFifty(40)).toBeFalsy();
    });
});

describe("add", () => {
    const add = helpers.add;
    it("should add two numbers", () => {
        expect(add(8, 2)).toBe(10);
        expect(add(2, -2)).toBe(0);
    });
});

describe("subtract", () => {
    const subtract = helpers.subtract;
    it("should substract a number from another number", () => {
        expect(subtract(9, 3)).toBe(6);
        expect(subtract(4, 7)).toBe(-3);
    });
});

describe("divide", () => {
    const divide = helpers.divide;
    it("should divide a number to another", () => {
        expect(divide(14, 7)).toBe(2);
        expect(divide(8, 4)).toBe(2);
    });
});

describe("multiply", () => {
    const multiply = helpers.multiply;
    it("should multiply two numbers ", () => {
        expect(multiply(3, 7)).toBe(21);
        expect(multiply(1, -3)).toBe(-3);
    });
});

describe("getRemainder", () => {
    const getRemainder = helpers.getRemainder;
    it("should get remainder of two numbers", () => {
        expect(getRemainder(9, 3)).toBe(0);
        expect(getRemainder(5, 3)).toBe(2);
    });
});

describe("isEven", () => {
    const isEven = helpers.isEven;
    it("should check if the num is even", () => {
        expect(isEven(8)).toBeTruthy();
        expect(isEven(5)).toBeFalsy();
    });
});

describe("isOdd", () => {
    const isOdd = helpers.isOdd;
    it("should check if the num is odd", () => {
        expect(isOdd(5)).toBeTruthy();
        expect(isOdd(8)).toBeFalsy();
    });
});

describe("square", () => {
    const square = helpers.square;
    it("should get a square of the num", () => {
        expect(square(3)).toBe(9);
        expect(square(1)).toBe(1);
    });
});

describe("cube", () => {
    const cube = helpers.cube;
    it("should get a cube of the num", () => {
        expect(cube(3)).toBe(27);
        expect(cube(1)).toBe(1);
    });
});

describe("raiseToPower", () => {
    const raiseToPower = helpers.raiseToPower;
    it("should raise a num to power based on exponent", () => {
        expect(raiseToPower(3, 2)).toBe(9);
        expect(raiseToPower(5, 0)).toBe(1);
    });
});

describe("roundNumber", () => {
    const roundNumber = helpers.roundNumber;
    it("should round the num", () => {
        expect(roundNumber(5.232)).toBe(5);
        expect(roundNumber(8.5)).toBe(9);
    });
});

describe("roundUp", () => {
    const roundUp = helpers.roundUp;
    it("should round up a number to its ceiling", () => {
        expect(roundUp(8.43)).toBe(9);
        expect(roundUp(3.5)).toBe(4);
        expect(roundUp(0)).toBe(0);
    });
});

describe("addExclamationPoint", () => {
    const addExclamationPoint = helpers.addExclamationPoint;
    it("should add exclamation to the string", () => {
        expect(addExclamationPoint("hello")).toBe("hello!");
    });
});

describe("combineNames", () => {
    const combineNames = helpers.combineNames;
    it("should combine two strings", () => {
        expect(combineNames("Erinc", "Emer")).toBe("Erinc Emer");
    });
});

describe("getGreeting", () => {
    const getGreeting = helpers.getGreeting;
    it("should take a string and return a greeting", () => {
        expect(getGreeting("Siri")).toBe("Hello Siri!");
    });
});

describe("getRectangleArea", () => {
    const getRectangleArea = helpers.getRectangleArea;
    it("should calculate the rectangle area", () => {
        expect(getRectangleArea(3, 5)).toBe(15);
        expect(getRectangleArea(6, 1)).toBe(6);
    });
});

describe("getTriangleArea", () => {
    const getTriangleArea = helpers.getTriangleArea;
    it("should calculate the triangle area", () => {
        expect(getTriangleArea(6, 1)).toBe(3);
        expect(getTriangleArea(7, 4)).toBe(14);
    });
});

describe("getCircleArea", () => {
    const getCircleArea = helpers.getCircleArea;
    it("should calculate the circle area", () => {
        expect(getCircleArea(3)).toBe(3 * Math.PI * 3);
        expect(getCircleArea(0)).toBe(0);
    });
});

describe("getRectangularPrismVolume", () => {
    const getRectangularPrismVolume = helpers.getRectangularPrismVolume;
    it("calculates the volume of a prism", () => {
        expect(getRectangularPrismVolume(3,1,9)).toBe(27);
        expect(getRectangularPrismVolume(4, 8, 3)).toBe(96);
    });
});