const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe.only('project-1', () => {
    describe('getBiggest', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(funcs.getBiggest(undefined, undefined)).toBe(undefined);
            expect(funcs.getBiggest('two', 'three')).toBe('two');
            expect(funcs.getBiggest(-4, -9)).toEqual(-4);
            expect(funcs.getBiggest(8, 9)).toBe(9);
        })
        it('should return the given number multiplied by 10', () => {
        })
    })
})

describe.only('project-1', () => {
    describe('greeting', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(funcs.greeting(undefined)).toBe('Hello!');
            expect(funcs.greeting('French')).toBe('Hello!');
            expect(funcs.greeting('Spanish')).toBe('Hola!');
        })
        it('should return the given number multiplied by 10', () => {
        })
    })
})

describe.only('project-1', () => {
    describe('isTenOrFive', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(funcs.isTenOrFive(undefined)).toBe(false);
            expect(funcs.isTenOrFive(8)).toBe(false);
            expect(funcs.isTenOrFive(5)).toBe(true);
            expect(funcs.isTenOrFive(10)).toBe(true);
        })
        it('should return the given number multiplied by 10', () => {
        })
    })
})

describe.only('project-1', () => {
    describe('isInRange', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(funcs.isInRange(undefined)).toBe(false);
            // expect(funcs.isInRange(8)).toBe(false);
            expect(funcs.isInRange(19)).toBe(false);
            expect(funcs.isInRange(30)).toBe(true);
        })
        it('should return the given number multiplied by 10', () => {
        })
    })
})

describe.only('project-1', () => {
    describe('isInteger', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(funcs.isInteger(undefined)).toBe(false);
            expect(funcs.isInteger(19.6)).toBe(false);
            expect(funcs.isInteger(30)).toBe(true);
        })
        it('should return the given number multiplied by 10', () => {
        })
    })
})

describe.only('project-1', () => {
    describe('fizzBuzz', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(funcs.fizzBuzz(undefined)).toBe(undefined);
            expect(funcs.fizzBuzz(3)).toBe('fizz');
            expect(funcs.fizzBuzz(5)).toBe('buzz');
            expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
        })
        it('should return the given number multiplied by 10', () => {
        })
    })
})

describe.only('project-1', () => {
    describe('isPrime', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(funcs.isPrime(undefined)).toBe(true);
            expect(funcs.isPrime(5)).toBe(true);
            expect(funcs.isPrime(-1)).toBe(false);
            expect(funcs.isPrime(0)).toBe(false);
            expect(funcs.isPrime(1)).toBe(false);
        })
        it('should return the given number multiplied by 10', () => {
        })
    })
})

describe.only('project-1', () => {
    describe('returnFirst', () => {
        it('returns NaN when there is a non numerical value', () => {
            // expect(funcs.returnFirst(undefined)).toBe(undefined);
            // expect(funcs.returnFirst(5)).toBe(true);
            // expect(funcs.returnFirst()).toBe(false);
            expect(funcs.returnFirst({})).toBe(undefined);
            expect(funcs.returnFirst([1, 3, 5])).toBe(1);
        })
        it('should return the given number multiplied by 10', () => {
        })
    })
})

describe.only('project-1', () => {
    describe('returnLast', () => {
        it('returns NaN when there is a non numerical value', () => {
            // expect(funcs.returnLast(undefined)).toBe(undefined);
            // expect(funcs.returnLast(5)).toBe(true);
            // expect(funcs.returnLast()).toBe(false);
            expect(funcs.returnLast({})).toBe(undefined);
            expect(funcs.returnLast([1, 3, 5])).toBe(5);
        })
        it('should return the given number multiplied by 10', () => {
        })
    })
})

describe.only('project-1', () => {
    describe('getArrayLength', () => {
        it('returns NaN when there is a non numerical value', () => {
            // expect(funcs.getArrayLength(undefined)).toBe(undefined);
            // expect(funcs.getArrayLength(5)).toBe(true);
            // expect(funcs.getArrayLength()).toBe(false);
            expect(funcs.getArrayLength({})).toBe(undefined);
            expect(funcs.getArrayLength([1, 3, 5])).toBe(3);
        })
        it('should return the given number multiplied by 10', () => {
        })
    })
})

describe.only('project-1', () => {
    describe('incrementByOne', () => {
        it('returns NaN when there is a non numerical value', () => {
            // expect(funcs.incrementByOne(undefined)).toBe(undefined);
            // expect(funcs.incrementByOne(5)).toBe(true);
            // expect(funcs.incrementByOne()).toBe(false);
            expect(funcs.incrementByOne(['x','y','z'])).toEqual([NaN, NaN, NaN]);
            expect(funcs.incrementByOne([1,2,3])).toEqual([2,3,4]);
        })
        it('should return the given number multiplied by 10', () => {
        })
    })
})

describe.only('project-1', () => {
    describe('addItemToArray', () => {
        it('returns NaN when there is a non numerical value', () => {
            // expect(funcs.addItemToArray(undefined)).toBe(undefined);
            // expect(funcs.addItemToArray(5)).toBe(true);
            // expect(funcs.addItemToArray()).toBe(false);
            // expect(funcs.addItemToArray({})).toBe(undefined);
            expect(funcs.addItemToArray([3,4,5], 8)).toEqual([3,4,5,8]);
        })
        it('should return the given number multiplied by 10', () => {
        })
    })
})

describe.only('project-1', () => {
    describe('addItemToFront', () => {
        it('returns NaN when there is a non numerical value', () => {
            // expect(funcs.addItemToFront(undefined)).toBe(undefined);
            // expect(funcs.addItemToFront(5)).toBe(true);
            // expect(funcs.addItemToFront()).toBe(false);
            // expect(funcs.addItemToFront({})).toBe(undefined);
            expect(funcs.addItemToFront([1, 3, 5], 8)).toEqual([8,1,3,5]);
        })
        it('should return the given number multiplied by 10', () => {
        })
    })
})

describe.only('project-1', () => {
    describe('wordsToSentence', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(funcs.wordsToSentence(false)).toBe('');
            expect(funcs.wordsToSentence(true)).toBe('');
            expect(funcs.wordsToSentence(['words'])).toBe('words');
            expect(funcs.wordsToSentence(['words', 'sentence'])).toBe('words sentence');
        })
        it('should return the given number multiplied by 10', () => {
        })
    })
})

describe.only('project-1', () => {
    describe('contains', () => {
        it('returns NaN when there is a non numerical value', () => {
            // expect(funcs.contains(undefined)).toBe(undefined);
            // expect(funcs.contains(5)).toBe(true);
            // expect(funcs.contains()).toBe(false);
            // expect(funcs.contains({})).toBe(undefined);
            expect(funcs.contains(['words', 'london'], 'words')).toBeTruthy();
        })
        it('should return the given number multiplied by 10', () => {
        })
    })
})

describe.only('project-1', () => {
    describe('addNumbers', () => {
        it('returns NaN when there is a non numerical value', () => {
            // expect(funcs.addNumbers(undefined)).toBe(undefined);
            // expect(funcs.addNumbers(5)).toBe(true);
            // expect(funcs.addNumbers()).toBe(false);
            expect(funcs.addNumbers([true, false, true])).toBe(2);
            expect(funcs.addNumbers([1, 3, 5])).toBe(9);
        })
        it('should return the given number multiplied by 10', () => {
        })
    })
})

describe.only('project-1', () => {
    describe('averageTestScore', () => {
        it('returns NaN when there is a non numerical value', () => {
            // expect(funcs.averageTestScore(undefined)).toBe(undefined);
            // expect(funcs.averageTestScore(5)).toBe(true);
            // expect(funcs.averageTestScore()).toBe(false);
            expect(funcs.averageTestScore([true, false, true])).toBe(0.6666666666666666);
            expect(funcs.averageTestScore([1, 3, 5])).toBe(3);
        })
        it('should return the given number multiplied by 10', () => {
        })
    })
})

describe.only('project-1', () => {
    describe('largestNumber', () => {
        it('returns NaN when there is a non numerical value', () => {
            // expect(funcs.largestNumber(undefined)).toBe(undefined);
            // expect(funcs.largestNumber(5)).toBe(true);
            // expect(funcs.largestNumber()).toBe(false);
            expect(funcs.largestNumber([0,1,0])).toBe(1);
            expect(funcs.largestNumber([1, 3, 5])).toBe(5);
        })
        it('should return the given number multiplied by 10', () => {
        })
    })
})