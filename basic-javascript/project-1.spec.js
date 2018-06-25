const helpers = require('./project-1');

// start testing!
describe('project-1', () => {
    describe('multiplyByTen', () => {
    it('returns NaN when given a non number', () => {
        expect(helpers.multiplyByTen(undefined)).toBeNaN();
        expect(helpers.multiplyByTen('three')).toBeNaN();
        expect(helpers.multiplyByTen(false)).toEqual(0);
        expect(helpers.multiplyByTen(true)).toEqual(10);
    });

    it('should return the given number multiplied by 10', () => {
        expect(helpers.multiplyByTen(2)).toBe(20);
    });
});

describe('subtractFive', () => {
    it('returns NaN when not provided a number', () => {
        expect(helpers.subtractFive('five')).toBeNaN();
        expect(helpers.subtractFive(undefined)).toBeNaN();
        expect(helpers.subtractFive('five')).toBeNaN();
    });

    it('returns the given value minus 5', () => {
        expect(helpers.subtractFive(5)).toBe(0);
        expect(helpers.subtractFive(8)).toBe(3);
    })
})

describe('areSameLength', () => {
    it('returns true when two things are same length', () => {
        expect(helpers.areSameLength('five', 'four')).toBe(true);
        expect(helpers.areSameLength('1234567890', '0987654321')).toBe(true);
    });
    
    it('returns false when two things are not same length', () => {
        expect(helpers.areSameLength('five', 'seven')).toBe(false);
        expect(helpers.areSameLength('10', '400000')).toBe(false);
    });

    it('returns true when no Strings are provided', () => {
        expect(helpers.areSameLength(12, 123)).toBe(true);
        expect(helpers.areSameLength(1, 1)).toBe(true);
    });

    it('returns false when one String is not provided', () => {
        expect(helpers.areSameLength('123', 123)).toBe(false);
        expect(helpers.areSameLength('lloonngg', 5401)).toBe(false);
    });
});

describe('areEqual', () => {
    it('returns true when two things have equal value', () => {
        expect(helpers.areEqual(6, 6)).toBe(true);
        expect(helpers.areEqual('one', 'one')).toBe(true);
        expect(helpers.areEqual(undefined, undefined)).toBe(true);
        expect(helpers.areEqual(false, false)).toBe(true);
    });

    it('returns false when two things do not have equal value', () => {
        expect(helpers.areEqual(6, 7)).toBe(false);
        expect(helpers.areEqual('one', 'two')).toBe(false);
        expect(helpers.areEqual(true, false)).toBe(false);
    });
});

describe('lessThanNinety', () => {
    it('returns true if num < 90', () => {
        expect(helpers.lessThanNinety(89)).toBe(true);
        expect(helpers.lessThanNinety(20)).toBe(true);
        expect(helpers.lessThanNinety(-200)).toBe(true);
    });

    it('returns false if num >= 90', () => {
        expect(helpers.lessThanNinety(90)).toBe(false);
        expect(helpers.lessThanNinety(91)).toBe(false);
        expect(helpers.lessThanNinety(200)).toBe(false);
    });

    it('returns false if num is not a Number', () => {
        expect(helpers.lessThanNinety('what')).toBe(false);
        expect(helpers.lessThanNinety(undefined)).toBe(false);
    });
});

describe('greaterThanFifty', () => {
    it('returns true if num > 50', () => {
        expect(helpers.greaterThanFifty(51)).toBe(true);
        expect(helpers.greaterThanFifty(600)).toBe(true);
    });
    
    it('returns false if num <= 50', () => {
        expect(helpers.greaterThanFifty(50)).toBe(false);
        expect(helpers.greaterThanFifty(2)).toBe(false);
    });

    it('returns false num is not a Number', () => {
        expect(helpers.greaterThanFifty('String')).toBe(false);
        expect(helpers.greaterThanFifty(undefined)).toBe(false);
    });
});

describe('add', () => {
    it('returns a + b with 2 Numbers', () => {
        expect(helpers.add(2, 2)).toBe(4);
        expect(helpers.add(3235, 2345)).toBe(5580);
    });
    
    it('returns a combined string when provided with a String', () => {
        expect(helpers.add('one', 'two')).toBe('onetwo');
        expect(helpers.add(1, 'two')).toBe('1two');
    });
});

describe('subtract', () => {
    it('returns a - b with 2 Numbers', () => {
        expect(helpers.subtract(2, 2)).toBe(0);
        expect(helpers.subtract(0, 5)).toBe(-5);
    });
    
    it('returns NaN with a String', () => {
        expect(helpers.subtract(2, 'two')).toBeNaN();
        expect(helpers.subtract('two', 'two')).toBeNaN();
    });
});

describe('divide', () => {
    it('returns a / b with 2 Numbers', () => {
        expect(helpers.divide(2, 2)).toBe(1);
        expect(helpers.divide(7, 2)).toBe(3.5);
    });

    it('returns _ with a String', () => {
        expect(helpers.divide('two', 2)).toBeNaN();
        expect(helpers.divide('two', 'two')).toBeNaN();
    });
});

describe('multiply', () => {
    it('returns a * b with 2 Numbers', () => {
        expect(helpers.multiply(2, 2)).toBe(4);
        expect(helpers.multiply(2, 7)).toBe(14);
    });
    
    it('returns NaN when not provided with Numbers', () => {
        expect(helpers.multiply('two', 2)).toBeNaN();
        expect(helpers.multiply('two', 'seven')).toBeNaN();
        expect(helpers.multiply(undefined, 'seven')).toBeNaN();
    });
});

describe('getRemainder', () => {
    it('returns remainder with 2 Numbers', () => {
        expect(helpers.getRemainder(2, 2)).toBe(0);
        expect(helpers.getRemainder(5, 2)).toBe(1);
    });

    it('returns NaN without 2 numbers', () => {
        expect(helpers.getRemainder('two', 2)).toBeNaN();
        expect(helpers.getRemainder('five', 'two')).toBeNaN();
    });
});

describe('isEven', () => {
    it('should return true for even numbers', () => {
        expect(helpers.isEven(4)).toBeTruthy();
        expect(helpers.isEven(3)).toBeFalsy();
        expect(helpers.isEven(0)).toBeTruthy();
        expect(helpers.isEven(-1)).toBeFalsy();
    });
});

describe('isOdd', () => {
    it('should return true for odd numbers', () => {
        expect(helpers.isOdd(4)).toBeFalsy();
        expect(helpers.isOdd(3)).toBeTruthy();
        expect(helpers.isOdd(0)).toBeFalsy();
        expect(helpers.isOdd(-1)).toBeTruthy();
    });
});

describe('square', () => {
    it('should return num ^ 2 for a Number', () => {
        expect(helpers.square(4)).toBe(16);
        expect(helpers.square(-4)).toBe(16);
        expect(helpers.square(0)).toBe(0);
    });

    it('should return NaN for a non-Number', () => {
        expect(helpers.square('hi')).toBeNaN();
        expect(helpers.square(undefined)).toBeNaN();
    });
});

describe('cube', () => {
    it('should return num ^ 3 for a Number', () => {
        expect(helpers.cube(2)).toBe(8);
        expect(helpers.cube(-2)).toBe(-8);
        expect(helpers.cube(0)).toBe(0);
    });

    it('should return NaN for a non-Number', () => {
        expect(helpers.cube('hi')).toBeNaN();
        expect(helpers.cube(undefined)).toBeNaN();
    });
});

describe('raiseToPower', () => {
    it('returns num ^ exponent for 2 Numbers', () => {
        expect(helpers.raiseToPower(2, 3)).toBe(8);
        expect(helpers.raiseToPower(2, 0)).toBe(1);
        expect(helpers.raiseToPower(-2, 3)).toBe(-8);
    });

    it('returns NaN for non-Numbers', () => {
        expect(helpers.raiseToPower(2, 'exponent')).toBeNaN();
        expect(helpers.raiseToPower('num', 'exponent')).toBeNaN();
    });

    it('returns a Number using booleans', () => {
        expect(helpers.raiseToPower(2, false)).toBe(1);
        expect(helpers.raiseToPower(true, 2)).toBe(1);
        expect(helpers.raiseToPower(false, true)).toBe(0);
    });
});

describe('roundNumber', () => {
    it('returns the Number rounded regularly', () => {
        expect(helpers.roundNumber(2.4)).toBe(2);
        expect(helpers.roundNumber(2.5)).toBe(3);
        expect(helpers.roundNumber(2.6)).toBe(3);
        expect(helpers.roundNumber(false)).toBe(0);
    });

    it('returns NaN for non-Numbers', () => {
        expect(helpers.roundNumber('two')).toBeNaN();
        expect(helpers.roundNumber(undefined)).toBeNaN();
    });
});

describe('roundUp', () => {
    it('returns the Number rounded up', () => {
        expect(helpers.roundUp(2.4)).toBe(3);
        expect(helpers.roundUp(2.5)).toBe(3);
        expect(helpers.roundUp(2.6)).toBe(3);
        expect(helpers.roundUp(false)).toBe(0);
    });

    it('returns NaN for non-Numbers', () => {
        expect(helpers.roundUp('two')).toBeNaN();
        expect(helpers.roundUp(undefined)).toBeNaN();
    });
});

describe('addExclamationPoint', () => {
    it('returns the thing with an exclamation point', () => {
        expect(helpers.addExclamationPoint('hey')).toBe('hey!');
        expect(helpers.addExclamationPoint('!')).toBe('!!');
        expect(helpers.addExclamationPoint(30)).toBe('30!');
        expect(helpers.addExclamationPoint(undefined)).toBe('undefined!');
        expect(helpers.addExclamationPoint(false)).toBe('false!');
        expect(helpers.addExclamationPoint(null)).toBe('null!');
    });
});

describe('combineNames', () => {
    it('returns one String with the combined names', () => {
        expect(helpers.combineNames('Kelly', 'Manahan')).toBe('Kelly Manahan');
        expect(helpers.combineNames('Miss', 123)).toBe('Miss 123');
        expect(helpers.combineNames(123, 456)).toBe('123 456');
        expect(helpers.combineNames(true, false)).toBe('true false');
    });
});

describe('getGreeting', () => {
    it('returns one String with the name inserted into a greeting', () => {
        expect(helpers.getGreeting('Kelly')).toBe('Hello Kelly!');
        expect(helpers.getGreeting(123)).toBe('Hello 123!');
        expect(helpers.getGreeting(undefined)).toBe('Hello undefined!');
    });
});

describe('getRectangleArea', () => {
    it('returns the area of rectangle provided 2 Numbers', () => {
        expect(helpers.getRectangleArea(2, 3)).toBe(6);
    });

    it('returns NaN provided non-Numbers', () => {
        expect(helpers.getRectangleArea('two', 3)).toBeNaN();
        expect(helpers.getRectangleArea('two', 'three')).toBeNaN();
    });

    it('returns a Number provided Booleans', () => {
        expect(helpers.getRectangleArea(true, false)).toBe(0);
        expect(helpers.getRectangleArea(true, true)).toBe(1);
    });
});

describe('getTriangleArea', () => {
    it('returns the area of triangle provided 2 Numbers', () => {
        expect(helpers.getTriangleArea(3, 3)).toBe(4.5);
    });

    it('returns NaN provided non-Numbers', () => {
        expect(helpers.getTriangleArea('three', 3)).toBeNaN();
        expect(helpers.getTriangleArea('three', 'foour')).toBeNaN();
    });
});

describe('getCircleArea', () => {
    it('returns the area of circle provided a Number', () => {
        expect(helpers.getCircleArea(1)).toBe(Math.PI);
    });

    it('returns NaN provided a non-Number', () => {
        expect(helpers.getCircleArea('pi')).toBeNaN();
    });
});

describe('getRectangularPrismVolume', () => {
    it('returns the area of circle provided a Number', () => {
        expect(helpers.getRectangularPrismVolume(1, 1, 1)).toBe(1);
        expect(helpers.getRectangularPrismVolume(4, 8, 2)).toBe(64);
    });

    it('returns NaN provided a non-Number', () => {
        expect(helpers.getRectangularPrismVolume('string1', 'string2', 'string3')).toBeNaN();
    });
});
});