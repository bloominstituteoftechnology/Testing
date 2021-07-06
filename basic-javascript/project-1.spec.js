const helpers = require('./project-1');

// start testing!
it ('should add two numbers', () => {
    //arrange / setup
    const value1 = 3;
    const value2 = 5;
    const expected = 8;
    //act / exucute the System Under Test (SUT)
    const sum = helpers.add(value1, value2);
    //assert: check your assumptions
    expect(sum).toEqual(expected);
});

describe('multiplyByTen', () => {
    it('should multiply a number by ten', () => {
        expect(helpers.multiplyByTen(10)).toEqual(100);
        expect(helpers.multiplyByTen(undefined)).toEqual(NaN);
    });
});

describe('subtractFive', () => {
    it('subtract a number by five', () => {
        expect(helpers.subtractFive(10)).toEqual(5);
        expect(helpers.subtractFive(undefined)).toEqual(false);
        expect(helpers.subtractFive('string')).toEqual(false);
    });
});

describe('areSameLength', () => {
    it('compare lengths of two strings', () => {
        expect(helpers.areSameLength('str', 'str')).toEqual(true);
        expect(helpers.areSameLength('str', 'string')).toEqual(false);
        expect(helpers.areSameLength('string', 5)).toEqual(undefined);
    });
});

describe('areEqual', () => {
    it('compares two variables to be extactly equal', () => {
        expect(helpers.areEqual(3,3)).toEqual(true);
        expect(helpers.areEqual(3,4)).toEqual(false);
        expect(helpers.areEqual('4',4)).toEqual(false);
    });
});

describe('lessThanNinety', () => {
    it('if input less than 90, return true, else false', () => {
        expect(helpers.lessThanNinety(89)).toEqual(true);
        expect(helpers.lessThanNinety(91)).toEqual(false);
        expect(helpers.lessThanNinety(90)).toEqual(false);
    });
});

describe('greaterThanFifty', () => {
    it('greaterThanFifty', () => {
        expect(helpers.greaterThanFifty(51)).toEqual(true);
        expect(helpers.greaterThanFifty(49)).toEqual(false);
        expect(helpers.greaterThanFifty(50)).toEqual(false);
    });
});

describe('subtract', () => {
    it('subtract two numbers', () => {
        expect(helpers.subtract(10,5)).toEqual(5);
        expect(helpers.subtract(5,10)).toEqual(-5);
        expect(helpers.subtract(true, true)).toEqual(0);
        expect(helpers.subtract(true, false)).toEqual(1);
        expect(helpers.subtract(false, false)).toEqual(0);
    });
});

describe('divide', () => {
    it('divide 2 nums', () => {
        expect(helpers.divide(10,5)).toEqual(2);
    });
});

describe('multiply', () => {
    it('multiply 2 nums', () => {
        expect(helpers.multiply(10,5)).toEqual(50);
    });
});

describe('getRemainder', () => {
    it('getRemainder 2 nums after dividing', () => {
        expect(helpers.getRemainder(11,5)).toEqual(1);
    });
});

describe('isEven', () => {
    it('if one num is even, return true, else false', () => {
        expect(helpers.isEven(2)).toEqual(true);
        expect(helpers.isEven(3)).toEqual(false);
    });
});

describe('isOdd', () => {
    it('if one num is odd, return true, else false', () => {
        expect(helpers.isOdd(3)).toEqual(true);
        expect(helpers.isOdd(2)).toEqual(false);
    });
});

describe('square', () => {
    it('squares two nums', () => {
        expect(helpers.square(2,2)).toEqual(4);
        expect(helpers.square(10,10)).toEqual(100);
    });
});

describe('cube', () => {
    it('cube', () => {
        expect(helpers.cube(3,3,3)).toEqual(27);
    });
});

describe('raiseToPower', () => {
    it('raiseToPower', () => {
        expect(helpers.raiseToPower(10,10)).toEqual(10000000000);
        expect(helpers.raiseToPower(10000000000,10000000000)).toEqual('too big for js!');
        expect(helpers.raiseToPower(2,53)).toEqual(9007199254740992);
    });
});

describe('roundNumber', () => {
    it('roundNumber', () => {
        expect(helpers.roundNumber(1.17)).toEqual(1);
        expect(helpers.roundNumber(1.99)).toEqual(2);
    });
});

describe('roundUp', () => {
    it('roundUp', () => {
        expect(helpers.roundUp(1.17)).toEqual(2);
        expect(helpers.roundUp(1.99)).toEqual(2);
    });
});

describe('addExclamationPoint', () => {
    it('addExclamationPoint', () => {
        expect(helpers.addExclamationPoint('str')).toEqual('str!');
    });
});

it('combineNames', () => {
    expect(helpers.combineNames('hey','you')).toEqual('hey you');
});

it('getGreeting', () => {
    expect(helpers.getGreeting('hi')).toEqual('Hello hi!');
});

it('getRectangleArea', () => {
    expect(helpers.getRectangleArea(10,10)).toEqual(100);
});

it('getTriangleArea', () => {
    expect(helpers.getTriangleArea(5,5)).toEqual(12.5);
});

it('getCircleArea', () => {
    expect(helpers.getCircleArea(360,360)).toEqual(407150.4079052372);
});

it('getRectangularPrismVolume', () => {
    expect(helpers.getRectangularPrismVolume(3,3,3)).toEqual(27);
});
