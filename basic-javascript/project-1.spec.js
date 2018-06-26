const helpers = require('./project-1');

// start testing!

describe('multiplyByTen', () => {
    it('returns the given number multiplied by 10', () => {
        // let actual = helpers.multiplyByTen(5)
        expect(helpers.multiplyByTen(5)).toEqual(50);
        expect(helpers.multiplyByTen(-3)).toEqual(-30);
        expect(helpers.multiplyByTen(2.5)).toBe(25);
        expect(helpers.multiplyByTen(0)).toBe(0);
    })
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.multiplyByTen(undefined)).toBeNaN();
        expect(helpers.multiplyByTen('five')).toBeNaN();

    })       
})

describe('subtractFive', () => {
    it('should return the given number subtracted by 5', () => {
        expect(helpers.subtractFive(100)).toEqual(95);
        expect(helpers.subtractFive(-20)).toEqual(-25);
        expect(helpers.subtractFive(0)).toEqual(-5);
    })
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.subtractFive(undefined)).toBeNaN();
        expect(helpers.subtractFive('nine')).toBeNaN();
    })
})

describe('areSameLength', () => {
    it('returns TRUE if they have the same length', () => {
        expect(helpers.areSameLength('Harry Potter', 'James Potter')).toBeTruthy();
        expect(helpers.areSameLength('no-no', 'ho-ho')).toBeTruthy();
        expect(helpers.areSameLength('0.0008', 'hahaha')).toBeTruthy()
    })
    it('returns FALSE if they DO NOT have the same length', () => {
        expect(helpers.areSameLength('Harry Potter', 'Hermione Granger')).toBeFalsy();
        expect(helpers.areSameLength('', 'ho-ho')).toBeFalsy();
        expect(helpers.areSameLength('0.0008', '1,000,000')).toBeFalsy();
    })
})

describe('areEqual', () => {
    it('returns TRUE if they are deep equal', () => {
        expect(helpers.areEqual('numbers', 'numbers')).toBeTruthy();
        expect(helpers.areEqual(0.009, 0.009)).toBeTruthy();
    })
    it('returns FALSE if they are NOT deep equal', () => {
        expect(helpers.areEqual('99,999', 99,999)).toBeFalsy();
        expect(helpers.areEqual('hello', 'hola')).toBeFalsy();
    })
})

describe('lessThanNinety', () => {
    it('returns TRUE if they are less than 90', () => {
        expect(helpers.lessThanNinety(50)).toBeTruthy();
        expect(helpers.lessThanNinety(89.999)).toBeTruthy();
    })
    it('returns FALSE if they are NOT less than 90', () => {
        expect(helpers.lessThanNinety(90)).toBeFalsy();
        expect(helpers.lessThanNinety('eighty')).toBeFalsy();
    })
})

describe('greaterThanFifty', () => {
    it('returns TRUE if they are greater than 50', () => {
        expect(helpers.greaterThanFifty(80)).toBeTruthy();
        expect(helpers.greaterThanFifty(50.5)).toBeTruthy();
    })
    it('returns FALSE if they are NOT greater than 50', () => {
        expect(helpers.greaterThanFifty(50)).toBeFalsy();
        expect(helpers.greaterThanFifty('eighty')).toBeFalsy();
    })
})

describe('add', () => {
    it('returns the sum of the two numbers', () => {
        expect(helpers.add(80, 8)).toEqual(88);
        expect(helpers.add(50, 5)).toEqual(55);
    })
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.add(50, undefined)).toBeNaN();
        expect(helpers.add(50, NaN)).toBeNaN();
    })
})

describe('subtract', () => {
    it('returns the balance of the subtracted numbers', () => {
        expect(helpers.subtract(80, 8)).toEqual(72);
        expect(helpers.subtract(50, -5)).toEqual(55);
    })
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.subtract(50, undefined)).toBeNaN();
        expect(helpers.subtract(50, NaN)).toBeNaN();
    })
})

describe('divide', () => {
    it('returns the result of the divided numbers', () => {
        expect(helpers.divide(80, 8)).toEqual(10);
        expect(helpers.divide(50, -5)).toEqual(-10);
    })
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.divide(50, undefined)).toBeNaN();
        expect(helpers.divide(50, NaN)).toBeNaN();
    })
})

describe('multiply', () => {
    it('returns the result of the multiplied numbers', () => {
        expect(helpers.multiply(80, 8)).toEqual(640);
        expect(helpers.multiply(50, -5)).toEqual(-250);
    })
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.multiply(50, undefined)).toBeNaN();
        expect(helpers.multiply(50, NaN)).toBeNaN();
    })
})

describe('getRemainder', () => {
    it('returns the result of the multiplied numbers', () => {
        expect(helpers.getRemainder(80, 8)).toEqual(0);
        expect(helpers.getRemainder(50, -5)).toEqual(0);
        expect(helpers.getRemainder(10, 4)).toEqual(2);
    })
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.getRemainder(50, undefined)).toBeNaN();
        expect(helpers.getRemainder(50, NaN)).toBeNaN();
    })
})

describe('isEven', () => {
    it('returns TRUE if number is even', () => {
        expect(helpers.isEven(80)).toBeTruthy();
        expect(helpers.isEven(0)).toBeTruthy();
    })
    it('returns FALSE if number is NOT even', () => {
        expect(helpers.isEven(0.3)).toBeFalsy();
        expect(helpers.isEven(-7)).toBeFalsy();
    })
})

describe('isOdd', () => {
    it('returns TRUE if number is even', () => {
        expect(helpers.isOdd(89)).toBeTruthy();
        expect(helpers.isOdd(-5)).toBeTruthy();
    })
    it('returns FALSE if number is NOT even', () => {
        expect(helpers.isOdd(0)).toBeFalsy();
        expect(helpers.isOdd(8)).toBeFalsy();
    })
})

describe('square', () => {
    it('returns the result of the squared numbers', () => {
        expect(helpers.square(2)).toEqual(4);
        expect(helpers.square(0)).toEqual(0);
        expect(helpers.square(-2)).toEqual(4);
    })
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.square('two')).toBeNaN();
        expect(helpers.square(undefined)).toBeNaN();
        expect(helpers.square(NaN)).toBeNaN();
    })
})

describe('cube', () => {
    it('returns the result of the cubed numbers', () => {
        expect(helpers.cube(3)).toEqual(27);
        expect(helpers.cube(0)).toEqual(0);
        expect(helpers.cube(-3)).toEqual(-27);
    })
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.cube('three')).toBeNaN();
        expect(helpers.cube(undefined)).toBeNaN();
        expect(helpers.cube(NaN)).toBeNaN();
    })
})

describe('raiseToPower', () => {
    it('returns the result of the raise to power numbers', () => {
        expect(helpers.raiseToPower(3, 2)).toEqual(9);
        expect(helpers.raiseToPower(3, 0)).toEqual(1);
        expect(helpers.raiseToPower(0, 2)).toEqual(0);
        expect(helpers.raiseToPower(-3, 2)).toEqual(9);
    })
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.raiseToPower('three', 'two')).toBeNaN();
        expect(helpers.raiseToPower(undefined, 2)).toBeNaN();
        expect(helpers.raiseToPower(NaN, 2)).toBeNaN();
    })
})

describe('roundNumber', () => {
    it('returns the result of the round numbers', () => {
        expect(helpers.roundNumber(3.3333)).toEqual(3);
        expect(helpers.roundNumber(-3.3333)).toEqual(-3);
        expect(helpers.roundNumber(0.56789)).toEqual(1);
        expect(helpers.roundNumber(0)).toEqual(0);
    })
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.roundNumber('three')).toBeNaN();
        expect(helpers.roundNumber(undefined)).toBeNaN();
        expect(helpers.roundNumber(NaN)).toBeNaN();
    })
})

describe('roundUp', () => {
    it('returns the result of the roundUp numbers', () => {
        expect(helpers.roundUp(3.3333)).toEqual(4);
        expect(helpers.roundUp(-3.3333)).toEqual(-3);
        expect(helpers.roundUp(0.10)).toEqual(1);
        expect(helpers.roundUp(0)).toEqual(0);
    })
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.roundUp('three')).toBeNaN();
        expect(helpers.roundUp(undefined)).toBeNaN();
        expect(helpers.roundUp(NaN)).toBeNaN();
    })
})

describe('addExclamationPoint', () => {
    it('returns the string with !', () => {
        expect(helpers.addExclamationPoint('Hello')).toBe('Hello!');
    })
    it('returns undefined when receive undefined', () => {
        expect(helpers.addExclamationPoint(undefined)).toBe('undefined!');
    })
})

describe('combineNames', () => {
    it('returns the concatenated name', () => {
        expect(helpers.combineNames('Harry', 'Potter')).toBe('Harry Potter');
        expect(helpers.combineNames('Harry', 'Potter')).not.toBe('HarryPotter');
    })
})

describe('getGreeting', () => {
    it('returns greeting with name', () => {
        expect(helpers.getGreeting('Ron')).toBe('Hello Ron!');
    })
})

describe('getRectangleArea', () => {
    it('returns the area of rectangle', () => {
        expect(helpers.getRectangleArea(3, 2)).toEqual(6);
    })
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.getRectangleArea('three', 'two')).toBeNaN();
        expect(helpers.getRectangleArea(NaN, 2)).toBeNaN();
    })
})

describe('getTriangleArea', () => {
    it('returns the area of triangle', () => {
        expect(helpers.getTriangleArea(10, 2)).toEqual(10);
    })
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.getTriangleArea('ten', 'two')).toBeNaN();
        expect(helpers.getTriangleArea(NaN, 2)).toBeNaN();
    })
})

describe('getCircleArea', () => {
    it('returns the area of circle', () => {
        expect(helpers.getCircleArea(5)).toEqual(78.53981633974483);
    })
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.getCircleArea('three')).toBeNaN();
        expect(helpers.getCircleArea(NaN)).toBeNaN();
    })
})

describe('getRectangularPrismVolume', () => {
    it('returns the volume of prism', () => {
        expect(helpers.getRectangularPrismVolume(2, 2, 2)).toEqual(8);
    })
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.getRectangularPrismVolume('two', 'two', 'two')).toBeNaN();
        expect(helpers.getRectangularPrismVolume(NaN, NaN, NaN)).toBeNaN();
    })
})
