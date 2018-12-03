const helpers = require('./project-1');

// start testing!
describe('multiplyByTen', () => {
    it('it multiplies by ten', () => {
        expect(helpers.multiplyByTen(20)).toEqual(200);
    })
})

describe('subtractFive', () => {
    it('it substracts five', () => {
        expect(helpers.subtractFive(15)).toEqual(10);
    })
})

describe('areSameLength', () => {
    it('it checks if both of the strings are the same length', () => {
        expect(helpers.areSameLength('string', 'writer')).toEqual(true);
    })
})

describe('areEqual', () => {
    it('it checks if two numbers are equal', () => {
        expect(helpers.areEqual(5, 5)).toEqual(true);
    })
})

describe('lessThanNinety', () => {
    it('it checks if a number is less than 90', () => {
        expect(helpers.lessThanNinety(89)).toEqual(true);
    })
})

describe('greaterThanFifty', () => {
    it('it checks if a number is greater than 51', () => {
        expect(helpers.greaterThanFifty(51)).toEqual(true);
    })
})

describe('add', () => {
    it('it adds two numbers, 21 + 23 should be equal to 44', () => {
        expect(helpers.add(21, 23)).toEqual(44);
    })
})

describe('subtract', () => {
    it('it substracts two numbers, 50 - 20 should be equal to 30', () => {
        expect(helpers.subtract(50, 20)).toEqual(30);
    })
})

describe('divide', () => {
    it('it divides two numbers, 20 / 10 should be equal to 2', () => {
        expect(helpers.divide(20, 10)).toEqual(2);
    })
})

describe('multiply', () => {
    it('it multiplies two numbers, 21 * 30 should be equal to 630', () => {
        expect(helpers.multiply(21, 30)).toEqual(630);
    })
})

describe('getRemainder', () => {
    it('it checks if the remainder of 10 is 0', () => {
        expect(helpers.getRemainder(10, 2)).toEqual(0);
    })
})

describe('isEven', () => {
    it('it checks if a number is even', () => {
        expect(helpers.isEven(8)).toEqual(true);
    })
})

describe('isOdd', () => {
    it('it checks if a number is odd', () => {
        expect(helpers.isOdd(9)).toEqual(true);
    })
})

describe('square', () => {
    it('it checks if 6 ^ 2 is equal to 36', () => {
        expect(helpers.square(6)).toEqual(36);
    })
})

describe('cube', () => {
    it('it checks if 2 ^ 3 is equal to 8', () => {
        expect(helpers.cube(2)).toEqual(8);
    })
})

describe('raiseToPower', () => {
    it('4^4 should be equal to 256', () => {
        expect(helpers.raiseToPower(4, 4)).toEqual(256);
    })
})

describe('roundNumber', () => {
    it('4.9 should round to 5', () => {
        expect(helpers.roundNumber(4.9)).toEqual(5);
    })
})

describe('roundUp', () => {
    it('2.2 should round up to 3', () => {
        expect(helpers.roundUp(3.3)).toEqual(4);
    })
})


describe('addExclamationPoint', () => {
    it('add exclamation point to a string, "dog" should become "dog!"', () => {
        expect(helpers.addExclamationPoint('dog')).toEqual('dog!');
    })
})

describe('combineNames', () => {
    it('two strings should become one string', () => {
        expect(helpers.combineNames('Pedro', 'Montesinos')).toEqual('Pedro Montesinos');
    })
})

describe('getGreeting', () => {
    it('Pedro should become "Hello Pedro!" ', () => {
        expect(helpers.getGreeting('Pedro')).toEqual('Hello Pedro!');
    })
})

describe('getRectangleArea', () => {
    it('If width or height is equal to 0, the area should be 0', () => {
        expect(helpers.getRectangleArea(0, 1)).toEqual(0);
        expect(helpers.getRectangleArea(1, 0)).toEqual(0);
        expect(helpers.getRectangleArea(6, 5)).toEqual(30);
    })
})

describe('getTriangleArea', () => {
    it('If base or height is equal to 0, the area should be 0', () => {
        expect(helpers.getTriangleArea(0, 1)).toEqual(0);
        expect(helpers.getTriangleArea(1, 0)).toEqual(0);
        expect(helpers.getTriangleArea(4, 5)).toEqual(10);
    })
})

describe('getCircleArea', () => {
    it('If the radius is 8, the area should be 201.06', () => {
        expect(helpers.getCircleArea(8)).toEqual(201.06192982974676);
    })
})

describe('getRectangularPrismVolume', () => {
    it('if the width, height, or length is 0, the volume should be 0', () => {
        expect(helpers.getRectangularPrismVolume(1, 1, 0)).toEqual(0);
        expect(helpers.getRectangularPrismVolume(0, 1, 1)).toEqual(0);
        expect(helpers.getRectangularPrismVolume(1, 0, 1)).toEqual(0);
        expect(helpers.getRectangularPrismVolume(3, 4, 5)).toEqual(60);
    })

})