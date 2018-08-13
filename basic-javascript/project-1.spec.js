const helpers = require('./project-1');

// start testing!
describe('multiplyByTen(num)', () => {
    it('should multiply num by ten', () => {
        expect(helpers.multiplyByTen(4)).toEqual(40);
    })
});

describe('subtractFive(num)', () => {
    it('should subtract five from number passed', () => {
        expect(helpers.subtractFive(25)).toBe(20);
    })
})

describe('areSameLength(str1, str2)', () => {
    it('string lengths should be equal', () => {
        expect(helpers.areSameLength('lambda', 'school')).toBe(true);
        expect(helpers.areSameLength('javascript', 'node')).toBe(false);
    })
})

describe('areEqual(x, y)', () => {
    it('x should equal y', () => {
        expect(helpers.areEqual(4,4)).toBe(true);
        expect(helpers.areEqual(4,9)).toBe(false);
        expect(helpers.areEqual(4,undefined)).toBe(false);
    })
})
  
describe('lessThanNinety(num)', () => {
    it('should return true if less than 90', () => {
        expect(helpers.lessThanNinety(78)).toBe(true);
        expect(helpers.lessThanNinety(98)).toBe(false);
        expect(helpers.lessThanNinety(90)).toBe(false);
        expect(helpers.lessThanNinety(undefined)).toBe(false);
    })
})
  
describe('greaterThanFifty(num)', () => {
    it('should return true if num is greater than fifty', () => {
        expect(helpers.greaterThanFifty(79)).toBe(true);
        expect(helpers.greaterThanFifty(48)).toBe(false);
        expect(helpers.greaterThanFifty(50)).toBe(false);
        expect(helpers.greaterThanFifty(undefined)).toBe(false);
    })
})

describe('add(x, y)', () => {
    it('should add x and y', () => {
        expect(helpers.add(3, 7)).toBe(10);
    })
})

describe('subtract(x, y)', () => {
    it('should subtract y from x', () => {
        expect(helpers.subtract(34, 23)).toBe(11);
        expect(helpers.subtract(-20, 20)).toBe(-40);
    })
})

describe('divide(x, y)', () => {
    it('should divide x by y', () => {
        expect(helpers.divide(100, 10)).toBe(10);
        expect(helpers.divide(30, -5)).toBe(-6);
    })
})

describe('multiply(x, y)', () => {
    it('should multiply x and y', () => {
        expect(helpers.multiply(3, 5)).toBe(15);
        expect(helpers.multiply(11, -2)).toBe(-22);
    })
})

describe('getRemainder(x, y)', () => {
    it('should return remainder of x divided by y', () => {
        expect(helpers.getRemainder(15, 5)).toBe(0);
        expect(helpers.getRemainder(11, 2)).toBe(1);
    })
})

describe('isEven(num)', () => {
    it('should return true if num is even', () => {
        expect(helpers.isEven(34)).toBe(true);
        expect(helpers.isEven(9)).toBe(false);
    })
})

describe('isOdd(num)', () => {
    it('should return true if num is odd', () => {
        expect(helpers.isOdd(39)).toBe(true);
        expect(helpers.isOdd(12)).toBe(false);
    })
})

describe('square(num)', () => {
    it('should return num squared', () => {
        expect(helpers.square(3)).toBe(9);
        expect(helpers.square(9)).toBe(81);
    })
})

describe('cube(num)', () => {
    it('should return num cubed', () => {
        expect(helpers.cube(3)).toBe(27);
        expect(helpers.cube(5)).toBe(125);
    })
})

describe('raiseToPower(num, exponent)', () => {
    it('should return num to the exponent power', () => {
        expect(helpers.raiseToPower(3, 4)).toBe(81);
        expect(helpers.raiseToPower(9, 5)).toBe(59049);
    })
})

describe('roundNumber(num)', () => {
    it('should round number to the nearest integer', () => {
        expect(helpers.roundNumber(3.2)).toBe(3);
        expect(helpers.roundNumber(7.5)).toBe(8);
    })
})

describe('roundUp(num)', () => {
    it('should round num up to the next higher integer', () => {
        expect(helpers.roundUp(4.2)).toBe(5);
        expect(helpers.roundUp(8)).toBe(8);
    })
})

describe('addExclamationPoint(str)', () => {
    it('should add an exclamatin point to the end of the string', () => {
        expect(helpers.addExclamationPoint('hello')).toBe('hello!');
    })
})

describe('combineNames(firstName, lastName)', () => {
    it('should combine first and last names into single string', () => {
        expect(helpers.combineNames('Mickey', 'Mouse')).toBe('Mickey Mouse');
    })
})

describe('getGreeting(name)', () => {
    it('should add name to greeting', () => {
        expect(helpers.getGreeting('Erin')).toBe('Hello Erin!');
    })
})

describe('getRectangleArea(length, width)', () => {
    it('should multiply length and width', () => {
        expect(helpers.getRectangleArea(4, 3)).toBe(12);
    }) 
})

describe('getTriangleArea(base, height)', () => {
    it('should return area of a triangle', () => {
        expect(helpers.getTriangleArea(4, 3)).toBe(6);
    }) 
})

describe('getCircleArea(radius)', () => {
    it('should return area of a circle', () => {
        expect(helpers.getCircleArea(8)).toBe(201.06192982974676);
    }) 
})

describe('getRectangularPrismVolume(length, width, height', () => {
    it('should return length times width times height', () => {
        expect(helpers.getRectangularPrismVolume(5, 6, 3)).toBe(90);
    })
})