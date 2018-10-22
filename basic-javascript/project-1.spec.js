const helpers = require('./project-1');

// // start testing!

test('should run tests', () => {});

// it('should multiply by 10', () => {
//     const expected = 100;
//     const actual = helpers.multiplyByTen(10);
//     expect(actual).toEqual(expected);
// });

describe('project-1.js', () => {

    describe('multiplyByTen', () => {
	it('should multiply number by 10', () => {
	    const expected = 100;
	    const actual = helpers.multiplyByTen(10);
	    expect(actual).toEqual(expected);
	});
	
	it('should throw error when called with a string', () => {
	    expect(() => {
		helpers.multiplyByTen('five');
	    }).toThrow();
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
	    const actual = helpers.areEqual(10, 10);
	    expect(actual).toEqual(expected);
	});
    });
    
    describe('lessThanNinety', () => {
	it('should be equal', () => {
	    const expected = true;
	    const actual = helpers.lessThanNinety(89);
	    expect(actual).toEqual(expected);
	});
    });

    describe('lessThanNinety', () => {
	it('should be equal', () => {
	    const expected = true;
	    const actual = helpers.lessThanNinety(89);
	    expect(actual).toEqual(expected);
	});
    });

    describe('greaterThanFifty', () => {
	it('should be equal', () => {
	    const expected = true;
	    const actual = helpers.greaterThanFifty(51);
	    expect(actual).toEqual(expected);
	});
    });

    describe('add', () => {
	it('should be equal', () => {
	    const expected = 101;
	    const actual = helpers.add(51, 50);
	    expect(actual).toEqual(expected);
	});
    });

    describe('subtract', () => {
	it('should be equal', () => {
	    const expected = 1;
	    const actual = helpers.subtract(51, 50);
	    expect(actual).toEqual(expected);
	});
    });

    describe('divide', () => {
	it('should be equal', () => {
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
	it('should be equal', () => {
	    const expected = 5;
	    const actual = helpers.getRemainder(5, 10);
	    expect(actual).toEqual(expected);
	});
    });

    describe('isEven', () => {
	it('should be equal', () => {
	    const expected = false;
	    const actual = helpers.isEven(5);
	    expect(actual).toEqual(expected);
	});
    });
    
    describe('isOdd', () => {
	it('should be equal', () => {
	    const expected = true;
	    const actual = helpers.isOdd(5);
	    expect(actual).toEqual(expected);
	});
    });

    describe('square', () => {
	it('should be equal', () => {
	    const expected = 25;
	    const actual = helpers.square(5);
	    expect(actual).toEqual(expected);
	});
    });

    describe('cube', () => {
	it('should be equal', () => {
	    const expected = 125;
	    const actual = helpers.cube(5);
	    expect(actual).toEqual(expected);
	});
    });

    describe('raiseToPower', () => {
	it('should be equal', () => {
	    const expected = 125;
	    const actual = helpers.raiseToPower(5, 3);
	    expect(actual).toEqual(expected);
	});
    });
    
    describe('roundNumber', () => {
	it('should be equal', () => {
	    const expected = 6;
	    const actual = helpers.roundNumber(5.6);
	    expect(actual).toEqual(expected);
	});
    });

    describe('roundUp', () => {
	it('should be equal', () => {
	    const expected = 6;
	    const actual = helpers.roundUp(5.4);
	    expect(actual).toEqual(expected);
	});
    });

    describe('addExclamationPoint', () => {
	it('should be equal', () => {
	    const expected = '5.4!';
	    const actual = helpers.addExclamationPoint(5.4);
	    expect(actual).toEqual(expected);
	});
    });

    describe('combineNames', () => {
	it('should be equal', () => {
	    const expected = 'Akshay Gadkari';
	    const actual = helpers.combineNames('Akshay', 'Gadkari');
	    expect(actual).toEqual(expected);
	});
    });

    describe('getGreeting', () => {
	it('should be equal', () => {
	    const expected = 'Hello Akshay!';
	    const actual = helpers.getGreeting('Akshay');
	    expect(actual).toEqual(expected);
	});
    });

    describe('getRectangleArea', () => {
	it('should be equal', () => {
	    const expected = 20;
	    const actual = helpers.getRectangleArea(5, 4);
	    expect(actual).toEqual(expected);
	});
    });

    describe('getTriangleArea', () => {
	it('should be equal', () => {
	    const expected = 10;
	    const actual = helpers.getTriangleArea(5, 4);
	    expect(actual).toEqual(expected);
	});
    });
    
    describe('getCircleArea', () => {
	it('should be equal', () => {
	    const expected = 78.53981633974483;
	    const actual = helpers.getCircleArea(5);
	    expect(actual).toEqual(expected);
	});
    });

    describe('getRectangularPrismVolume', () => {
	it('should be equal', () => {
	    const expected = 200;
	    const actual = helpers.getRectangularPrismVolume(5, 4, 10);
	    expect(actual).toEqual(expected);
	});
    });
});

