const helpers = require('./project-1');

// start testing!

test('should run tests', () => {
    // tests for all the cases or functions
    console.log('Welcome to automated testing!');
});

it('should run tests using "it" instead of "test"', () => {
    // Arrange: setup the world
    // Act: execute the code to be tested
    // Assert: check that it works
});

it('should multiply the provided number by 10', () => {
    const expected = 280;
    const actual = helpers.multiplyByTen(28);
    expect(actual).toEqual(expected);
});

it('should return 0 when called with no args', () => {
    const product = 100;
    const actual = helpers.multiplyByTen(0);
    expect(actual).toBe(0);
});

// remember to fail test first - make sure you are testing right function!!
// think of edge cases - AKA: corner cases
// TDD Flow: Failing Test(Red) -> Passing(Green) -> Refactor program code

// test for string argument(s)
// test for 
// TextTrackList('should');

describe('multiplyByTen', () => {
	it('should multiply number by 10', () => {
	    const expected = 100;
	    const actual = helpers.multiplyByTen(10);
	    expect(actual).toEqual(expected);
	});
	
	it('should throw error when called with a string', () => {
	    // expect(() => {
		helpers.multiplyByTen('five');
	    // }).toThrow();
	});
});
    
describe('subtractFive', () => {
	it('should subtract number by 5', () => {
	    const expected = 5;
	    const actual = helpers.subtractFive(10);
	    expect(actual).toEqual(expected);
	});
}); 

describe('areSameLength', () => {
	it('should check lengths', () => {
	    const expected = true;
	    const actual = helpers.areSameLength('hello', 'eachs');
	    expect(actual).toEqual(expected);
	});
});

describe('areEqual', () => {
	it('should be equal', () => {
	    const expected = true;
	    const actual = helpers.areEqual(1758, 1758);
	    expect(actual).toEqual(expected);
	});
});
    
describe('lessThanNinety', () => {
	it('should be less than *90*', () => {
	    const expected = true;
	    const actual = helpers.lessThanNinety(89);
	    expect(actual).toEqual(expected);
	});
});

describe('lessThanNinety', () => {
	it('should be more than *90*', () => {
	    const expected = false;
	    const actual = helpers.lessThanNinety(98);
	    expect(actual).toEqual(expected);
	});
});

describe('greaterThanFifty', () => {
	it('should check if number is great than 50', () => {
	    const expected = true;
	    const actual = helpers.greaterThanFifty(51);
	    expect(actual).toEqual(expected);
	});
});

describe('add', () => {
	it('should be equal', () => {
	    const expected = 133;
	    const actual = helpers.add(58, 75);
	    expect(actual).toEqual(expected);
	});
});

describe('subtract', () => {
	it('should subtract y from x', () => {
	    const expected = 1;
	    const actual = helpers.subtract(51, 50);
	    expect(actual).toEqual(expected);
	});
});

describe('divide', () => {
	it('should divide x by y', () => {
	    const expected = 5;
	    const actual = helpers.divide(50, 10);
	    expect(actual).toEqual(expected);
	});
});

describe('multiply', () => {
	it('should be equal', () => {
	    const expected = 50;
	    const actual = helpers.multiply(5, 10);
	    expect(actual).toEqual(expected);
	});
});

describe('getRemainder', () => {
	it('should return remainder of x divided by y', () => {
	    const expected = 25;
	    const actual = helpers.getRemainder(125, 50);
	    expect(actual).toEqual(expected);
	});
});

describe('isEven', () => {
	it('should tell if 7 is even', () => {
	    const expected = false;
	    const actual = helpers.isEven(5);
	    expect(actual).toEqual(expected);
	});
});
    
describe('isOdd', () => {
	it('should tell if 3 is odd', () => {
	    const expected = true;
	    const actual = helpers.isOdd(3);
	    expect(actual).toEqual(expected);
	});
});

    describe('square', () => {
	it('should square base number', () => {
	    const expected = 49;
	    const actual = helpers.square(7);
	    expect(actual).toEqual(expected);
	});
});

describe('cube', () => {
	it('should give cube of base', () => {
	    const expected = 125;
	    const actual = helpers.cube(5);
	    expect(actual).toEqual(expected);
	});
});

describe('raiseToPower', () => {
	it('should raise number to expected power', () => {
	    const expected = 125;
	    const actual = helpers.raiseToPower(5, 3);
	    expect(actual).toEqual(expected);
	});
});
    
describe('roundNumber', () => {
	it('should round up to next integer', () => {
	    const expected = 8;
	    const actual = helpers.roundNumber(7.58);
	    expect(actual).toEqual(expected);
	});
});

describe('roundUp', () => {
	it('should round float up', () => {
	    const expected = 6;
	    const actual = helpers.roundUp(5.4);
	    expect(actual).toEqual(expected);
	});
});

describe('addExclamationPoint', () => {
	it('should add exclamation point to string', () => {
	    const expected = 'hello!';
	    const actual = helpers.addExclamationPoint('hello');
	    expect(actual).toEqual(expected);
	});
});

describe('combineNames', () => {
	it('should combine team name strings', () => {
	    const expected = 'Minnesota Vikings';
	    const actual = helpers.combineNames('Minnesota', 'Vikings');
	    expect(actual).toEqual(expected);
	});
});

describe('getGreeting', () => {
	it('should produce greeting!', () => {
	    const expected = 'Hello Missus!';
	    const actual = helpers.getGreeting('Missus');
	    expect(actual).toEqual(expected);
	});
});

describe('getRectangleArea', () => {
	it('should get area of rectangle', () => {
	    const expected = 20;
	    const actual = helpers.getRectangleArea(5, 4);
	    expect(actual).toEqual(expected);
	});
});

describe('getTriangleArea', () => {
	it('should get triangle area', () => {
	    const expected = 10;
	    const actual = helpers.getTriangleArea(5, 4);
	    expect(actual).toEqual(expected);
	});
});
    
describe('getCircleArea', () => {
	it('should get circle area', () => {
	    const expected = 78.53981633974483;
	    const actual = helpers.getCircleArea(5);
	    expect(actual).toEqual(expected);
	});
});

describe('getRectangularPrismVolume', () => {
	it('should multiply rectangle area', () => {
	    const expected = 280;
	    const actual = helpers.getRectangularPrismVolume(7, 5, 8);
	    expect(actual).toEqual(expected);
	});
});