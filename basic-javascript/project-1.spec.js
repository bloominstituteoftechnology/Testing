const helpers = require('./project-1');

// start testing!
describe('multiplyByTen', () => {
    it('should return num multiplied by 10', () => {
        expect(helpers.multiplyByTen(5)).toEqual(50);
    });
});

describe('subtractFive', () => {
    it('should return num subtracted by 5', () => {
        expect(helpers.subtractFive(5)).toEqual(0);
    });
});

describe('areSameLength', () => {
    it('should return true if both string lengths are equal', () => {
        expect(helpers.areSameLength('test', 'pass')).toEqual(true);
    });
    it('should return false if both string lengths are not equal', () => {
        expect(helpers.areSameLength('test', 'fails')).toEqual(false);
    });
});

describe('areEqual', () => {
    it('should return true if both objects are equal', () => {
        expect(helpers.areEqual(5, 5)).toEqual(true);
    });
    it('should return false if both objects are not equal', () => {
        expect(helpers.areEqual(5, 6)).toEqual(false);
    });
});

describe('lessThanNinety', () => {
    it('should return true if num is less than 90', () => {
        expect(helpers.lessThanNinety(89)).toEqual(true);
    });
    it('should return false if num is greater than 90', () => {
        expect(helpers.lessThanNinety(91)).toEqual(false);
    });
});

describe('greaterThanFifty', () => {
    it('should return true if num is greater than 50', () => {
        expect(helpers.greaterThanFifty(51)).toEqual(true);
    });
    it('should return false if num is less than 50', () => {
        expect(helpers.greaterThanFifty(49)).toEqual(false);
    });
});

describe('add', () => {
    it('should return result of x + y', () => {
        expect(helpers.add(5, 5)).toEqual(10);
    });
});

describe('subtract', () => {
    it('should return result of x - y', () => {
        expect(helpers.subtract(5, 5)).toEqual(0);
    });
});

describe('divide', () => {
    it('should return result of x / y', () => {
        expect(helpers.divide(5, 5)).toEqual(1);
    });
});

describe('multiply', () => {
    it('should return result of x * y', () => {
        expect(helpers.multiply(5, 5)).toEqual(25);
    });
});

describe('getRemainder', () => {
    it('should return result of x % y', () => {
        expect(helpers.getRemainder(5, 5)).toEqual(0);
    });
});

describe('isEven', () => {
    it('should return true if num is even', () => {
        expect(helpers.isEven(4)).toEqual(true);
    });
    it('should return false if num is not even', () => {
        expect(helpers.isEven(5)).toEqual(false);
    });
});

describe('isOdd', () => {
    it('should return true if num is odd', () => {
        expect(helpers.isOdd(5)).toEqual(true);
    });
    it('should return false if num is not odd', () => {
        expect(helpers.isOdd(4)).toEqual(false);
    });
});

describe('square', () => {
    it('should return num squared', () => {
        expect(helpers.square(5)).toEqual(25);
    });
});

describe('cube', () => {
    it('should return num cubed', () => {
        expect(helpers.cube(2)).toEqual(8);
    });
});

describe('raiseToPower', () => {
    it('should return num raised to the power of the exponent', () => {
        expect(helpers.raiseToPower(5, 2)).toEqual(25);
    });
});

describe('roundNumber', () => {
    it('should return rounded num', () => {
        expect(helpers.roundNumber(5.5)).toEqual(6);
    });
});

describe('roundUp', () => {
    it('should return num rounded up', () => {
        expect(helpers.roundUp(5.5)).toEqual(6);
    });
});

describe('addExclamationPoint', () => {
    it('should return str with exclamation point', () => {
        expect(helpers.addExclamationPoint('pass')).toEqual('pass!');
    });
});

describe('combineNames', () => {
    it('should return str of first and last name', () => {
        expect(helpers.combineNames('first','last')).toEqual('first last');
    });
});

describe('getGreeting', () => {
    it('should return greeting with name', () => {
        expect(helpers.getGreeting('name')).toEqual('Hello name!');
    });
});

describe('getRectangleArea', () => {
    it('should return area of rectangle', () => {
        expect(helpers.getRectangleArea(5, 5)).toEqual(25);
    });
});

describe('getTriangleArea', () => {
    it('should return area of triangle', () => {
        expect(helpers.getTriangleArea(2, 2)).toEqual(2);
    });
});

describe('getCircleArea', () => {
    it('should return area of circle', () => {
        expect(helpers.getCircleArea(1)).toEqual(Math.PI);
    });
});

describe('getRectangularPrismVolume', () => {
    it('should return volume of rectangle', () => {
        expect(helpers.getRectangularPrismVolume(2, 2, 2)).toEqual(8);
    });
});
