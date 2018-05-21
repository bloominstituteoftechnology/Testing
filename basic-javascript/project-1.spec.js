const funcs = require('./project-1');

// write your tests here
describe('default', () => {
    it('the default test', () => {});
});

describe('multiply by 10', () => {
    it('should be 50', () => {
    //arranging
    const expected = 50;
    const multiplyByTen = funcs.multiplyByTen;

    //acting
    const actual = multiplyByTen(5);

    //asserting
    expect(actual).toBeCloseTo(expected);
    });

    it('should be 25', () => {
        const expected = 25;
        const multiplyByTen = funcs.multiplyByTen;
        const actual = multiplyByTen(2.5);
        expect(actual).toBe(expected);
    });
});

describe('subtract 5', () => {
    it('should be 15', () => {
        const expected = 15;
        const subtractFive = funcs.subtractFive;

        const actual = subtractFive(20);

        expect(actual).toBe(expected);
    });
    it('should be -5', () => {
        const expected = -5;
        const subtractFive = funcs.subtractFive;

        const actual = subtractFive(0);

        expect(actual).toBe(expected);
    });
});

describe('are same length', () => {
    const areSameLength = funcs.areSameLength;
    it('should be true', () => {
        const expected = true;

        const actual = areSameLength('yes', [1, 2, 3]);

        expect(actual).toBe(expected);
    });
    it('should be false', () => {
        const expected = false;

        const actual = areSameLength([1, 2, 3, 4], 'meowsers');

        expect(actual).toBe(expected);
    });
});

describe('are equal', () => {
    const areEqual = funcs.areEqual;
    it('should be true', () => {
        const expected = true;
        const actual = areEqual(5, 5);
        expect(actual).toBe(expected);
    });
    it('should be false', () => {
        const expected = false;
        const actual = areEqual(5, 4);
        expect(actual).toBe(expected);
    });
});

describe('less than ninety', () => {
    const lessThanNinety = funcs.lessThanNinety;
    it('should be true', () => {
        const expected = true;
        const actual = lessThanNinety(11)
        expect(actual).toBe(expected);
    });
    it('should be false', () => {
        const expected = false;
        const actual = lessThanNinety(99);
        expect(actual).toBe(expected);
    });
});

describe('greaterThanFifty', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    it('should be true', () => {
        const expected = true;
        const actual = greaterThanFifty(499);
        expect(actual).toBe(expected);
    });
    it('should be false', () => {
        const expected = false;
        const actual = greaterThanFifty(1);
        expect(actual).toBe(expected);
    });
});

describe('add', () => {
    const add = funcs.add;
    it('should be 9', () => {
        const expected = 9;
        const actual = add(5, 4);
        expect(actual).toBe(expected);
    });
    it('should be 8', () => {
        const expected = 8;
        const actual = add(1, 7);
        expect(actual).toBe(expected);
    });
});

describe('subtract', () => {
    const subtract = funcs.subtract;
    it('should be 9', () => {
        const expected = 9;
        const actual = subtract(10, 1);
        expect(actual).toBe(expected);
    });
    it('should be 8', () => {
        const expected = 8;
        const actual = subtract(18, 10);
        expect(actual).toBe(expected);
    });
});


describe('divide', () => {
    const divide = funcs.divide;
    it('should be 9', () => {
        const expected = 9;
        const actual = divide(18, 2);
        expect(actual).toBe(expected);
    });
    it('should be 8', () => {
        const expected = 8;
        const actual = divide(32, 4);
        expect(actual).toBe(expected);
    });
});

describe('multiply', () => {
    const multiply = funcs.multiply;
    it('should be 9', () => {
        const expected = 9;
        const actual = multiply(3, 3);
        expect(actual).toBe(expected);
    });
    it('should be 8', () => {
        const expected = 8;
        const actual = multiply(2, 4);
        expect(actual).toBe(expected);
    });
});

describe('getRemainder', () => {
    const getRemainder = funcs.getRemainder;
    it('should be 4', () => {
        const expected = 4;
        const actual = getRemainder(9, 5);
        expect(actual).toBe(expected);
    });
    it('should be 2', () => {
        const expected = 2;
        const actual = getRemainder(2, 7);
        expect(actual).toBe(expected);
    });
});

describe('isEven', () => {
    const isEven = funcs.isEven;
    it('should be true', () => {
        const expected = true;
        const actual = isEven(8);
        expect(actual).toBe(expected);
    });
    it('should be false', () => {
        const expected = false;
        const actual = isEven(9);
        expect(actual).toBe(expected);
    });
});

describe('isOdd', () => {
    const isOdd = funcs.isOdd;
    it('should be true', () => {
        const expected = true;
        const actual = isOdd(9);
        expect(actual).toBe(expected);
    });
    it('should be false', () => {
        const expected = false;
        const actual = isOdd(8);
        expect(actual).toBe(expected);
    });
});

describe('square', () => {
    const square = funcs.square;
    it('should be 64', () => {
        const expected = 64;
        const actual = square(8);
        expect(actual).toBe(expected);
    });
    it('should be 81', () => {
        const expected = 81;
        const actual = square(9);
        expect(actual).toBe(expected);
    });
});

describe('cube', () => {
    const cube = funcs.cube;
    it('should be 8', () => {
        const expected = 8;
        const actual = cube(2);
        expect(actual).toBe(expected);
    });
    it('should be 27', () => {
        const expected = 27;
        const actual = cube(3);
        expect(actual).toBe(expected);
    });
});

describe('raiseToPower', () => {
    const raiseToPower = funcs.raiseToPower;
    it('should be 1073741824', () => {
        const expected = 1073741824;
        const actual = raiseToPower(8, 10);
        expect(actual).toBe(expected);
    });
    it('should be 27', () => {
        const expected = 27;
        const actual = raiseToPower(3, 3);
        expect(actual).toBe(expected);
    });
});

describe('roundNumber', () => {
    const roundNumber = funcs.roundNumber;
    it('should be 8', () => {
        const expected = 8;
        const actual = roundNumber(8.2);
        expect(actual).toBe(expected);
    });
    it('should be 4', () => {
        const expected = 4;
        const actual = roundNumber(3.54);
        expect(actual).toBe(expected);
    });
});

describe('roundUp', () => {
    const roundUp = funcs.roundUp;
    it('should be 9', () => {
        const expected = 9;
        const actual = roundUp(8.2);
        expect(actual).toBe(expected);
    });
    it('should be 4', () => {
        const expected = 4;
        const actual = roundUp(3.54);
        expect(actual).toBe(expected);
    });
});

describe('addExclamationPoint', () => {
    const addExclamationPoint = funcs.addExclamationPoint;
    it('should be hello!', () => {
        const expected = 'hello!';
        const actual = addExclamationPoint('hello');
        expect(actual).toBe(expected);
    });
    it('should be meow!', () => {
        const expected = 'meow!';
        const actual = addExclamationPoint('meow');
        expect(actual).toBe(expected);
    });
});

describe('combineNames', () => {
    const combineNames = funcs.combineNames;
    it('should be John Smith', () => {
        const expected = 'John Smith';
        const actual = combineNames('John', 'Smith');
        expect(actual).toBe(expected);
    });
    it('should be Sara Jean', () => {
        const expected = 'Sara Jean';
        const actual = combineNames('Sara', 'Jean');
        expect(actual).toBe(expected);
    });
});

describe('getGreeting', () => {
    const getGreeting = funcs.getGreeting;
    it('should be Hello John!', () => {
        const expected = 'Hello John!';
        const actual = getGreeting('John');
        expect(actual).toBe(expected);
    });
    it('should be Hello Sara!', () => {
        const expected = 'Hello Sara!';
        const actual = getGreeting('Sara');
        expect(actual).toBe(expected);
    });
});

describe('getRectangleArea', () => {
    const getRectangleArea = funcs.getRectangleArea;
    it('should be 20', () => {
        const expected = 20;
        const actual = getRectangleArea(4, 5);
        expect(actual).toBe(expected);
    });
    it('should be 8', () => {
        const expected = 8;
        const actual = getRectangleArea(2, 4);
        expect(actual).toBe(expected);
    });
});

describe('getTriangleArea', () => {
    const getTriangleArea = funcs.getTriangleArea;
    it('should be 1.5', () => {
        const expected = 1.5;
        const actual = getTriangleArea(1, 3, 5);
        expect(actual).toBe(expected);
    });
    it('should be 7.5', () => {
        const expected = 7.5;
        const actual = getTriangleArea(3, 5);
        expect(actual).toBe(expected);
    });
});

describe('getCircleArea', () => {
    const getCircleArea = funcs.getCircleArea;
    it('should be 201.06192982974676', () => {
        const expected = 201.06192982974676;
        const actual = getCircleArea(8);
        expect(actual).toBe(expected);
    });
    it('should be 28.274333882308138', () => {
        const expected = 28.274333882308138;
        const actual = getCircleArea(3);
        expect(actual).toBe(expected);
    });
});


describe('getRectangularPrismVolume', () => {
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
    it('should be 125', () => {
        const expected = 125;
        const actual = getRectangularPrismVolume(5, 5, 5);
        expect(actual).toBe(expected);
    });
    it('should be 252', () => {
        const expected = 252;
        const actual = getRectangularPrismVolume(6, 6, 7);
        expect(actual).toBe(expected);
    });
});