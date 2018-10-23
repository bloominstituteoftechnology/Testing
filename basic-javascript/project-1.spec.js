const helpers = require('./project-1');

// start testing!
describe('project-1', () => {
    describe('multiplyByTen', () => {
        it('should run tests', () => {});
        it('should multiply by ten', () => {
            const expected = 100;
            const actual = helpers.multiplyByTen(10);
            expect(actual).toEqual(expected);
        });
        it('should return NaN when not provided a number', () => {
            const result = helpers.multiplyByTen();
            expect(result).toBe(NaN);
        });
    });

    describe('subtractFive', () => {
        it('should subtract five', () => {
            const expected = 10;
            const actual = helpers.subtractFive(15);
            expect(actual).toEqual(expected);
        });
        it('should return NaN when not provided a number', () => {
            const result = helpers.subtractFive();
            expect(result).toBe(NaN);
        });
    });

    describe('areSameLength', () => {
        it('should determine same length', () => {
            const result = helpers.areSameLength('apples', 'oranges');
            expect(result).toBe(false);
        });
        it('should throw an error when not provided an input', () => {
            expect(() => areSameLength()).toThrow();
        });
        it('should throw an error when only provided one input', () => {
            expect(() => areSameLength('apples')).toThrow();
        });
        it('should return undefined when not provided correct input', () => {
            const result = helpers.areSameLength(4, 55);
            expect(result).toBe(undefined);
        });
    });

    describe('areEqual', () => {
        it('should determine equality of numbers', () => {
            const result = helpers.areEqual(3, 6);
            expect(result).toBe(false);
        });
        it('should determine equality of strings', () => {
            const result = helpers.areEqual('bananas', 'bananas');
            expect(result).toBe(true);
        });
        it('should determine equality of objects', () => {
            const obj1 = { foo: 45 };
            const obj2 = { foo: 45 };
            expect(obj1).toEqual(obj2);
            expect(obj1).not.toBe(obj2);
        });
        it('should determine equality of symbols', () => {
            const sym1 = Symbol();
            const sym2 = Symbol();
            expect(sym1).not.toEqual(sym2);
        });
    });

    describe('lessThanNinety', () => {
        it('should determine whether number is less than ninety', () => {
            const result = helpers.lessThanNinety(67);
            expect(result).toBe(true);
        });
        it('should determine whether string is less than ninety', () => {
            const result = helpers.lessThanNinety('80');
            expect(result).toBe(true);
        });
        it('should return false when provided an invalid input', () => {
            const obj1 = { num: 91 };
            // destructure
            const result = helpers.lessThanNinety(obj1['num']);
            expect(result).toBe(false);
        });
        it('should return false when not provided an input', () => {
            const result = helpers.lessThanNinety();
            expect(result).toBe(false); 
        });
    });

    describe('greaterThanFifty', () => {
        it('should determine whether number is greater than fifty', () => {
            const result = helpers.greaterThanFifty(74);
            expect(result).toBe(true);
        });
        it('should determine whether string is greater than fifty', () => {
            const result = helpers.greaterThanFifty('43');
            expect(result).toBe(false);
        });
        it('should return false when provided an invalid input', () => {
            const result = helpers.greaterThanFifty(true);
            expect(result).toBe(false);
        });
        it('should return false when not provided an input', () => {
            const result = helpers.greaterThanFifty();
            expect(result).toBe(false); 
        });
    });

    describe('add', () => {
        it('should add numbers', () => {
            const expected = 7;
            const actual = helpers.add(3, 4);
            expect(actual).toEqual(expected);
        });
        it('should add strings', () => {
            const expected = 9;
            const actual = helpers.add('1','8');
            expect(actual).toEqual(expected);
        });
        it('should return zero when provided alternative input', () => {
            const result = helpers.add(null, undefined);
            expect(result).toEqual(0);
        });
        it('should return zero when provided an invalid input', () => {
            const result = helpers.add([1, 2], [3, 4]);
            expect(result).toEqual(0);
        });
    });

    describe('subtract', () => {
        it('should subtract numbers', () => {
            const expected = 16;
            const actual = helpers.subtract(24,8);
            expect(actual).toEqual(expected);
        });
        it('should add strings', () => {
            const expected = 12;
            const actual = helpers.subtract('17','5');
            expect(actual).toEqual(expected);
        });
        it('should return zero when provided alternative input', () => {
            const result = helpers.subtract('thirty-one', 'sixty');
            expect(result).toEqual(0);
        });
        it('should return zero when provided an invalid input', () => {
            const result = helpers.subtract({num: 14}, {num: 11});
            expect(result).toEqual(0);
        });
    });

    describe('divide', () => {
        it('should divide numbers', () => {
            const expected = 19;
            const actual = helpers.divide(38,2);
            expect(actual).toEqual(expected);
        });
        it('should divide strings', () => {
            const expected = 27;
            const actual = helpers.divide('108','4');
            expect(actual).toEqual(expected);
        });
        it('should return NaN when provided alternative input', () => {
            const result = helpers.divide('50two', 'error');
            expect(result).toEqual(NaN);
        });
        it('should return infinity when provided an invalid input', () => {
            const result = helpers.divide([89], { num: true });
            expect(result).toEqual(Infinity);
        });
    });

    describe('multiply', () => {
        it('should multiply numbers', () => {
            const expected = 40;
            const actual = helpers.multiply(2, 20);
            expect(actual).toEqual(expected);
        });
        it('should multiply strings', () => {
            const expected = 72;
            const actual = helpers.multiply('6','12');
            expect(actual).toEqual(expected);
        });
        it('should return zero when provided alternative input', () => {
            const result = helpers.multiply('', false);
            expect(result).toEqual(0);
        });
        it('should return negative zero when provided an invalid input', () => {
            const result = helpers.multiply(new Date(), document.all);
            expect(result).toEqual(-0);
        });
    });

    describe('getRemainder', () => {
        it('should get remainder of numbers', () => {
            const expected = 2;
            const actual = helpers.getRemainder(8, 6);
            expect(actual).toEqual(expected);
        });
        it('should get remainder of strings', () => {
            const expected = 0;
            const actual = helpers.getRemainder('26','13');
            expect(actual).toEqual(expected);
        });
        it('should return undefined when provided alternative input', () => {
            const result = helpers.getRemainder(Symbol(88), 23.56);
            expect(result).toEqual(undefined);
        });
        it('should return NaN when provided an invalid input', () => {
            let z;
            const result = helpers.getRemainder(z, undefined);
            expect(result).toBe(NaN);
        });
    });

    describe('isEven', () => {
        it('should be even', () => {
            const result = helpers.isEven(54);
            expect(result).toBe(true);
        });
    });

    describe('isOdd', () => {
        it('should be odd', () => {
            const result = helpers.isOdd(59);
            expect(result).toBe(true);
        });
    });

    describe('square', () => {
        it('should square itself', () => {
            const expected = 121;
            const actual = helpers.square(11);
            expect(actual).toEqual(expected);
        });
    });

    describe('cube', () => {
        it('should cube itself', () => {
            const expected = 64;
            const actual = helpers.cube(4);
            expect(actual).toEqual(expected);
        });
    });

    describe('raiseToPower', () => {
        it('should raise to a power', () => {
            const expected = 32;
            const actual = helpers.raiseToPower(2, 5);
            expect(actual).toEqual(expected);
        });
    });

    describe('roundNumber', () => {
        it('should round a number', () => {
            const expected = 99;
            const actual = helpers.roundNumber(98.81);
            expect(actual).toEqual(expected);
        });
    });

    describe('roundUp', () => {
        it('should round up', () => {
            const expected = 78;
            const actual = helpers.roundUp(77.39);
            expect(actual).toEqual(expected);
        });
    });

    describe('addExclamationPoint', () => {
        it('should add an exclamation point', () => {
            const expected = 'Mangos!';
            const actual = helpers.addExclamationPoint('Mangos');
            expect(actual).toBe(expected);
        });
    });

    describe('combineNames', () => {
        it('should combine names', () => {
            const expected = 'Natalia Holt';
            const actual = helpers.combineNames('Natalia','Holt');
            expect(actual).toBe(expected);
        });
    });

    describe('getGreeting', () => {
        it('should greet', () => {
            const expected = 'Hello Martin!'
            const actual = helpers.getGreeting('Martin');
            expect(actual).toBe(expected);
        });
    }); 

    describe('getRectangleArea', () => {
        it('should get rectangle area', () => {
            const expected = 25;
            const actual = helpers.getRectangleArea(5, 5);
            expect(actual).toEqual(expected);
        });
    });

    describe('getTriangleArea', () => {
        it('should get triangle area', () => {
            const expected = 80;
            const actual = helpers.getTriangleArea(20, 8);
            expect(actual).toEqual(expected);
        });
    });

    describe('getCircleArea', () => {
        it('should get circle area', () => {
            const expected = 153.93804002589985;
            const actual = helpers.getCircleArea(7);
            expect(actual).toEqual(expected);
        });
    });

    describe('getRectangularPrismVolume', () => {
        it('should get rectangular prism volume', () => {
            const expected = 252;
            const actual = helpers.getRectangularPrismVolume(7,4,9);
            expect(actual).toEqual(expected);
        });
    });
});
