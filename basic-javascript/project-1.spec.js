const helpers = require('./project-1');

// Format Example:
// describe('helpers.js', () => {
//     test('should run tests', () => {
//         //tests all the things
//     });

//     it('should run tests using it instead of test', () => {
//         //Arrange : setup the world
//         //Act : execute the code you're testing
//         //Assert : check that it works
//     });   
// });


describe.skip('used to skip testing this file', () => {
// start testing!
describe('multiplyByTen()', () => {
    it('should multiply provided number by ten', () => {
        //Arrange:
        // const expected = 101; //remember to fail the test first
        const expected = 100; //next pass the test
        //Act:
        const actual = helpers.multiplyByTen(10);
        //Assert:
        expect(actual).toEqual(expected)
    });
});

describe('subtractFive()', () => {
    it('should subtract a number by five', () => {
        // const expected = 98;
        const expected = 95;

        const actual = helpers.subtractFive(100);

        expect(actual).toEqual(expected)
    });
});

describe('areSameLength()', () => {
    it('boolean: two strings should have the same length', () => {
        const expected = true;

        // const actual = helpers.areSameLength('ab', 'cab') //fail
        const actual = helpers.areSameLength('abc', 'cab')

        expect(actual).toBe(expected);
    });
});


describe('areEqual()', () => {
    it('boolean: two numbers should equal', () => {
        const expected = true;

        // const actual = helpers.areEqual(5, 7); //fail
        // const actual = helpers.areEqual(5, '5'); //fail
        const actual = helpers.areEqual(5, 5);

        expect(actual).toBe(expected);
    });
});

describe('lessThanNinety()', () => {
    it('boolean: number should be less than ninety', () => {
        const expected1 = false;
        const expected2 = true;

        const actual1 = helpers.lessThanNinety(91); 
        const actual2 = helpers.lessThanNinety(89);

        expect(actual1).toBe(expected1);
        expect(actual2).toBe(expected2);

    });
});

describe('greaterThanFifty()', () => {
    it('boolean: number should be greater than fifty', () => {
        const expected1 = false;
        const expected2 = true;

        const actual1 = helpers.greaterThanFifty(45); 
        const actual2 = helpers.greaterThanFifty(55);

        expect(actual1).toBe(expected1);
        expect(actual2).toBe(expected2);
    });
});

describe('add()', () => {
    it('should add two numbers', () => {
        // const expected = 11; //fail
        const expected = 10;

        const actual = helpers.add(5, 5);

        expect(actual).toBe(expected);
    });
});

describe('subtract()', () => {
    it('should subtract two numbers', () => {
        // const expected = 10; //fail
        const expected = 5;

        const actual = helpers.subtract(5, 0);

        expect(actual).toBe(expected);
    });
});

describe('divide()', () => {
    it('should divide two numbers', () => {
        // const expected = 10; //fail
        const expected = 1;

        const actual = helpers.divide(5, 5);

        expect(actual).toBe(expected);
    });
});

describe('multiply()', () => {
    it('should multiply two numbers', () => {
        // const expected = 10; //fail
        const expected = 25;

        const actual = helpers.multiply(5, 5);

        expect(actual).toBe(expected);
    });
});

describe('getRemainder()', () => {
    it('should get a remainder', () => {
        // const expected = 0; //fail
        const expected = 4;

        const actual = helpers.getRemainder(10, 6);

        expect(actual).toBe(expected);
    });
});

describe('isEven()', () => {
    it('boolean: should be even', () => {
        const expected1 = false;
        const expected2 = true;

        const actual1 = helpers.isEven(45); 
        const actual2 = helpers.isEven(50);

        expect(actual1).toBe(expected1);
        expect(actual2).toBe(expected2);
    });
});

describe('isOdd()', () => {
    it('boolean: should be odd', () => {
        const expected1 = false;
        const expected2 = true;

        const actual1 = helpers.isOdd(50); 
        const actual2 = helpers.isOdd(45);

        expect(actual1).toBe(expected1);
        expect(actual2).toBe(expected2);
    });
});

describe('square()', () => {
    it('should give the square of a number', () => {
        // const expected = 10; //fail
        const expected = 25;

        const actual = helpers.square(5);

        expect(actual).toBe(expected);
    });
});

describe('cube()', () => {
    it('should give the cube of a number', () => {
        // const expected = 10; //fail
        const expected = 125;

        const actual = helpers.cube(5);

        expect(actual).toBe(expected);
    });
});

describe('raiseToPower()', () => {
    it('should give the raiseToPower of a number', () => {
        // const expected = 10; //fail
        const expected = 625;

        const actual = helpers.raiseToPower(5, 4);

        expect(actual).toBe(expected);
    });
});

describe('roundNumber()', () => {
    it('should round a number', () => {
        // const expected = 10; //fail
        const expected = 5;

        const actual = helpers.roundNumber(5.4);

        expect(actual).toBe(expected);
    });
});

describe('roundUp()', () => {
    it('should round up a number', () => {
        // const expected = 10; //fail
        const expected = 5;

        const actual = helpers.roundUp(4.3333);

        expect(actual).toBe(expected);
    });
});

describe('addExclamationPoint()', () => {
    it('should add an exclamation point', () => {
        // const expected = "hello world"; //fail
        const expected = "hello world !";

        const actual = helpers.addExclamationPoint("hello world ");

        expect(actual).toBe(expected);
    });
});

describe('combineNames()', () => {
    it('should combine names', () => {
        // const expected = "Jane Doe"; //fail
        const expected = "John Doe";

        const actual = helpers.combineNames("John", "Doe");

        expect(actual).toBe(expected);
    });
});

describe('getGreeting()', () => {
    it('should add greeting', () => {
        // const expected = "Hello Jane!"; //fail
        const expected = "Hello John!";

        const actual = helpers.getGreeting("John");

        expect(actual).toBe(expected);
    });
});

describe('getRectangleArea()', () => {
    it('should get the rectangle area', () => {
        // const expected = 18; //fail
        const expected = 16;

        const actual = helpers.getRectangleArea(4, 4);

        expect(actual).toBe(expected);
    });
});

describe('getTriangleArea()', () => {
    it('should get triangle area', () => {
        // const expected = 16; //fail
        const expected = 8;

        const actual = helpers.getTriangleArea(4, 4);

        expect(actual).toBe(expected);
    });
});

describe('getCircleArea()', () => {
    it('should get circle area', () => {
        // const expected = 16; //fail
        const expected = 50.27;

        const actual = helpers.getCircleArea(4, 4);

        expect(actual).toBeCloseTo(expected);
    });
});

describe('getRectangularPrismVolume()', () => {
    it('should get rectangular prism volume', () => {
        // const expected = 16; //fail
        const expected = 24;

        const actual = helpers.getRectangularPrismVolume(2, 3, 4);

        expect(actual).toBe(expected);
    });
});

});
