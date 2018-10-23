const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('project-2', () => {
    describe('getBiggest', () => {
        it('should return undefined', () => {
            expect(funcs.getBiggest(((x) => x*2)(4), undefined)).toBeUndefined();
        });
        it('should get biggest', () => {
            expect(funcs.getBiggest(5, 8)).toEqual(8);
        });
    });

    describe('greeting', () => {
        it('should return incorrect language', () => {
            expect(funcs.greeting('French')).toBe('Hello!');
        });
        it('should greet', () => {
            expect(funcs.greeting('Spanish')).toBe('Hola!');
        });
    }); 

    describe('isTenOrFive', () => {
        it('should return false', () => {
            expect(funcs.isTenOrFive(true)).toBe(false);
        });
        it('should return true', () => {
            expect(funcs.isTenOrFive(10)).toBe(true);
        });
    });

    describe('isInRange', () => {
        it('should return true', () => {
            expect(funcs.isInRange('1'.charCodeAt(0))).toBe(true);
        });
        it('should return false', () => {
            expect(funcs.isInRange(Infinity)).toBe(false);
        });
    });

    describe('isInteger', () => {
        it('should return false', () => {
            expect(funcs.isInteger(true)).toBe(false);
        });
        it('should return false', () => {
            expect(funcs.isInteger(null)).toBe(false);
        });
    });

    describe('fizzbuzz', () => {
        it('should return array', () => {
            expect(funcs.fizzBuzz([15, 20, 25])).toEqual([15, 20, 25]);
        });
        it('should return fizzbuzz', () => {
            expect(funcs.fizzBuzz(30)).toBe('fizzbuzz');
        });
    });

    describe('isPrime', () => {
        it('should return true', () => {
            expect(funcs.isPrime('nine')).toBe(true);
        });
        it('should return true', () => {
            expect(funcs.isPrime(13)).toBe(true);
        });
    });

    describe('returnFirst', () => {
        it('should return object', () => {
            expect(funcs.returnFirst([{ num: 20}, { num: 80 }])).toEqual({ num: 20 });
        });
        it('should return first', () => {
            expect(funcs.returnFirst([3])).toEqual(3);
        });
    });

    describe('returnLast', () => {
        it('should return undefined', () => {
            expect(funcs.returnLast({ nums: [47, 49, 58]})).toBeUndefined();
        });
        it('should return last', () => {
            expect(funcs.returnLast([329, 474])).toEqual(474);
        });
    });

    describe('getArrayLength', () => {
        it('should get array length', () => {
            expect(funcs.getArrayLength([16, 17, 18, 19])).toEqual(4);
        });
    });

    describe('incrementByOne', () => {
        it('should increment by one', () => {
            expect(funcs.incrementByOne([8, 54, 93])).toEqual([9, 55, 94]);
        });
    });

    describe('addItemToArray', () => {
        it('should add item to array', () => {
            expect(funcs.addItemToArray([33, 37, 41], 46)).toEqual([33, 37, 41, 46]);
        });
    });

    describe('addItemToFront', () => {
        it('should add item to front', () => {
            expect(funcs.addItemToFront([53, 59, 63], 51)).toEqual([51, 53, 59, 63]);
        });
    });

    describe('wordsToSentence', () => {
        it('should add words to sentence', () => {
            expect(funcs.wordsToSentence('The fluidity of reciprocity is nearly philisophical in its interdependence'))
            .toBe('The fluidity of reciprocity is nearly philisophical in its interdependence');
        });
    });

    describe('contains', () => {
        it('should return true', () => {
            expect(funcs.contains(['a', 'b', 'c'], 'c')).toBe(true);
        });
    });

    describe('addNumbers', () => {
        it('should add numbers', () => {
            expect(funcs.addNumbers([71, 75, 76])).toEqual(222);
        });
    });

    describe('averageTestScore', () => {
        it('should calculate average test score', () => {
            expect(funcs.averageTestScore([79, 84, 88, 95, 97])).toBeCloseTo(89, 0);
        });
    });

    describe('largestNumber', () => {
        it('should return largest number', () => {
            expect(funcs.largestNumber([83, 50, 68, 28, 79])).toEqual(83);
        });
    });
});