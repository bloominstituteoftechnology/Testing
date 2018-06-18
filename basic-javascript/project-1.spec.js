const helpers = require('./project-1');

// start testing!
describe('project-1', () => { // describe.only will run only the tests in that particular suite
    describe('multiplyByTen', () => {
        it('returns NaN when given a non numeric value', () => {
            expect(helpers.multiplyByTen(undefined)).toBeNaN();
            expect(helpers.multiplyByTen('two')).toBeNaN();
            expect(helpers.multiplyByTen(false)).toEqual(0);
            expect(helpers.multiplyByTen(true)).toEqual(10); 
        })
        it('should return the given number multiplied by 10', () => {});
    });
});

// write down test ideas below
// should return the right amount given a numeric value
// another idea

describe('isEven', () => {
    it('isEven should return true for even numbers', () => {
        expect(helpers.isEven(4)).toBeTruthy();
        expect(helpers.isEven(0)).toBeTruthy();
    });

    it('isEven should return false for odd numbers', () => {
        expect(helpers.isEven(3)).toBeFalsy();
        expect(helpers.isEven(-1)).toBeFalsy();
    });

});

describe('subtractFive', () => {
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.subtractFive(undefined)).toBeNaN();
        expect(helpers.subtractFive('two')).toBeNaN();
        expect(helpers.subtractFive(false)).toBe(-5);
        expect(helpers.subtractFive(true)).toEqual(-4); 
    })

    it('should return the given number subtracted by 5', () => {
        expect(helpers.subtractFive(5)).toEqual(0);
        expect(helpers.subtractFive(15)).toEqual(10);
        expect(helpers.subtractFive(16)).toEqual(11);
    });
});

describe('areSameLength', () => {
    // it('should return true if lengths are the same', () => {
    //     expect(helpers.areSameLength().toBeUndefined());
    // })

    it ('should return true if lengths are the same or false if not', () => {
        expect(helpers.areSameLength('test', 'test')).toBeTruthy();
        expect(helpers.areSameLength('tests', 'test')).toBeFalsy();
    })

    // come back and figure out what if one str is missing 
})

describe('areEqual', () => {
    it('should return true if arguments pass strict equality', () => {
        expect(helpers.areEqual(5, 5)).toBe(true);
        expect(helpers.areEqual(5, '5')).toEqual(false); // even though toEqual doesnt check for deep equality, the function does 
        expect(helpers.areEqual('test', 5)).toBe(false);
        expect(helpers.areEqual(true, true)).toBe(true);
        expect(helpers.areEqual(true, false)).toBe(false);
    })
})

describe('lessThanNinety', () => {
    it('should return true if given number is less than 90', () => {
        expect(helpers.lessThanNinety(89)).toBeTruthy();
        expect(helpers.lessThanNinety(90)).toBeFalsy();
        expect(helpers.lessThanNinety('test')).toBeFalsy();  
    })
})

describe('greaterThanFifty', () => {
    it('should return true if given number is greater than 50', () => {
        expect(helpers.greaterThanFifty(51)).toBeTruthy();
        expect(helpers.greaterThanFifty(49)).toBeFalsy();
        expect(helpers.greaterThanFifty(50)).toBeFalsy();
        expect(helpers.greaterThanFifty('test')).toBeFalsy();
    })
})

describe('add', () => {
    it('can add two numbers', () => {
        expect(helpers.add(50, 5)).toEqual(55);
        // expect(helpers.add('test', 5)).toBeNaN();
        // const max = Math.max;
        // expect(helpers.add(max, 2)).toBeNaN(); // same as class code on multiply, figure out why doesnt work 
    })
})


describe('subtract', () => {
    it('can subtract two numbers', () => {
        expect(helpers.subtract(10, 5)).toEqual(5);
        expect(helpers.subtract('test', 5)).toBeNaN();
    })
})

describe('divide', () => {
    it('can divide two numbers', () => {
        expect(helpers.divide(10, 2)).toEqual(5);
        expect(helpers.divide('test', 5)).toBeNaN();
        expect(helpers.divide(-10, -1)).toEqual(10)
        expect(helpers.divide(-10, 1)).toEqual(-10)
    })
})


describe('multiply', () => {
    it('can multiply two numbers', () => {
        expect(helpers.multiply(10, 2)).toEqual(20)
        expect(helpers.multiply(10, -2)).toEqual(-20)
        expect(helpers.multiply('test', 5)).toBeNaN();
        expect(helpers.multiply('5', 5)).toEqual(25);
        expect(helpers.multiply(null, 20)).toEqual(0)
        expect(helpers.multiply(null, null)).toEqual(0)
    })
})

describe('getRemainder', () => {
    it('can get remainder after dividing two numbers', () => {
        expect(helpers.getRemainder(5, 5)).toEqual(0);
        expect(helpers.getRemainder(10, 3)).toEqual(1);
        expect(helpers.getRemainder('test', 3)).toBeNaN();
        expect(helpers.getRemainder('3', 3)).toEqual(0);
    })
})

describe('isEven', () => {
    it('should return true for even numbers', () => {
        expect(helpers.isEven(4)).toBeTruthy();
        expect(helpers.isEven(0)).toBeTruthy();
    });
    it('should return false for odd numbers', () => {
        expect(helpers.isEven(3)).toBeFalsy();
        expect(helpers.isEven(-1)).toBeFalsy();
    });
});

describe('isOdd', () => {
    it('should return true for even numbers', () => {
        expect(helpers.isOdd(4)).toBeFalsy();
        expect(helpers.isOdd(0)).toBeFalsy();
    });
    it('should return false for odd numbers', () => {
        expect(helpers.isOdd(3)).toBeTruthy();
        expect(helpers.isOdd(-1)).toBeTruthy();
    });
    it('should return true for non numeric values ???', () => { // console.log(NaN % 2 !== 0)
        expect(helpers.isOdd('test')).toBeTruthy();
    })
});


describe('square', () => {
    it('should square the given number', () => {
        expect(helpers.square(5)).toEqual(25);
        expect(helpers.square(-5)).toEqual(25);
        expect(helpers.square('test')).toEqual(NaN);
        expect(helpers.square('test')).toBeNaN();
    })
})

describe('cube', () => {
    it('should cube the given number', () => {
        expect(helpers.cube(2)).toEqual(8);
        expect(helpers.cube(-2)).toEqual(-8);
        expect(helpers.cube('test')).toEqual(NaN);
    })
})

describe('raiseToPower', () => {
    it('should raise base number by the exponent', () => {
        expect(helpers.raiseToPower(5, 2)).toEqual(25);
        expect(helpers.raiseToPower(0, 0)).toEqual(1);
        expect(helpers.raiseToPower(-5, 0)).toEqual(1);
        expect(helpers.raiseToPower(5, 0)).toEqual(1);
        expect(helpers.raiseToPower(16, -2)).toBeGreaterThan(0);
        expect(helpers.raiseToPower(16, -2)).toBeLessThan(1);
        expect(helpers.raiseToPower('test', 2)).toEqual(NaN);
        expect(helpers.raiseToPower('test', 2)).toBeNaN();
    })
})

describe('roundNumber', () => {
    it('should round the given number up', () => {
        expect(helpers.roundNumber(3.2)).toEqual(3);
        expect(helpers.roundNumber(-3.2)).toEqual(-3);
        expect(helpers.roundNumber(-'test')).toBeNaN();
    })
})

describe('roundUp', () => {
    it('should round the given number up', () => {
        expect(helpers.roundUp(3.2)).toEqual(4);
        expect(helpers.roundUp(-3.2)).toEqual(-3);
        expect(helpers.roundUp(-'test')).toBeNaN();
    })
})

describe('addExclamationPoint', () => {
    it('should add an exclamation point to the end of the string', () => {
        expect(helpers.addExclamationPoint('Iqra')).toEqual('Iqra!')
        expect(helpers.addExclamationPoint(5)).toEqual('5!')
        expect(helpers.addExclamationPoint(true)).toEqual('true!')
        expect(helpers.addExclamationPoint(undefined)).toEqual('undefined!')
        expect(helpers.addExclamationPoint(null)).toEqual('null!')
    })
})

describe('combineNames', () => {
    it('should combine two strings of names into a single string with space in between', () => {
        expect(helpers.combineNames('iqra', 'javed')).toEqual('iqra javed');
        expect(helpers.combineNames('5', '5')).toEqual('5 5');
        expect(helpers.combineNames(undefined, undefined)).toEqual('undefined undefined')
        expect(helpers.combineNames(5, 5)).toEqual('5 5');
    })
})

describe('getGreeting', () => {
    it('should combine the string Hello and the given name + ! into a single string', () => {
        expect(helpers.getGreeting('Iqra')).toEqual('Hello Iqra!');
        expect(helpers.getGreeting('5')).toEqual('Hello 5!');
        expect(helpers.getGreeting(undefined)).toEqual('Hello undefined!');
        expect(helpers.getGreeting('!')).toEqual('Hello !!');
    })
})

describe('getRectangleArea', () => {
    it('should multiply the two given numbers to give back the rectangle area', () => {
        expect(helpers.getRectangleArea(5, 4)).toEqual(20);
        expect(helpers.getRectangleArea(-1, 4)).toEqual(-4);
        expect(helpers.getRectangleArea(NaN, 4)).toBeNaN();
        expect(helpers.getRectangleArea(0, 0)).toBeFalsy();
        expect(helpers.getRectangleArea('test', 'test')).toBeNaN();
    })
})

describe('getTriangleArea', () => {
    it('should multiply the given numbers by 0.5 to give back area of triangle', () => {
        expect(helpers.getTriangleArea(10, 2)).toEqual(10);
        expect(helpers.getTriangleArea(0, 2)).toEqual(0);
        expect(helpers.getTriangleArea('test', 2)).toBeNaN();
        expect(helpers.getTriangleArea(-10, 2)).toEqual(-10);
    })
})