const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('project-2', () => {
    describe('getBiggest', () => {
        it('returns biggest number', () => {
            expect(funcs.getBiggest(2, 3)).toBe(3);
            expect(funcs.getBiggest(3, 3)).toBe(3);
            expect(funcs.getBiggest(3, 2)).toBe(3);
        })
        it('returns NaN if given NaN', () => {
            expect(funcs.getBiggest(undefined)).toBe(undefined);
        });
    });
    describe("greeting", () => {
        it("returns correct greeting for given language", () => {
            expect(funcs.greeting('German')).toBe('Guten Tag!');
            expect(funcs.greeting('Spanish')).toBe('Hola!');
            expect(funcs.greeting()).toBe('Hello!');
        });
    });
    describe("isTenOrFive", () => {
        it("if the number is 10 or 5, returns true", () => {
            expect(funcs.isTenOrFive(5)).toBeTruthy();
            expect(funcs.isTenOrFive(10)).toBeTruthy();
        });
        it('returns false if number is not 10 or 5', () => {
            expect(funcs.isTenOrFive(3)).toBeFalsy();
            expect(funcs.isTenOrFive(-10)).toBeFalsy();
        });
    });
    describe('isInRange', () => {
        it('returns true if number is between 50 and 20', () => {
            expect(funcs.isInRange(30)).toBeTruthy();
        })
        it('returns false if number is not between 50 and 20', () => {
            expect(funcs.isInRange(10)).toBeFalsy()
        });
    });
    describe('isInteger', () => {
        it('returns true if is integer', () => {
            expect(funcs.isInteger(3)).toBeTruthy();
        })
        it('returns false if it is not an integer', () => {
            expect(funcs.isInteger("three")).toBeFalsy();
            expect(funcs.isInteger(undefined)).toBeFalsy();
            expect(funcs.isInteger(false)).toBeFalsy();
        });
    });
    describe('fizzBuzz', () => {
        it('returns fizzbuzz if num is divisible by 3 and 5', () => {
            expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
        })
        it('returns fizzbuzz if num is divisible by 5', () => {
            expect(funcs.fizzBuzz(5)).toBe('buzz');
        })
        it('returns fizzbuzz if num is divisible by 3 and 5', () => {
            expect(funcs.fizzBuzz(6)).toBe('fizz');
        })
        it('just returns the num given if not divisible by 3 or 5', () => {
            expect(funcs.fizzBuzz(2)).toBe(2)
        });
    });
    describe('isPrime', () => {
        it('if number is less than 0, return false', () => {
            expect(funcs.isPrime(-1)).toBeFalsy();
        })
        it('if number is equal to 1 or 0, return false', () => {
            expect(funcs.isPrime(1)).toBeFalsy();
        })
        it('if number is less than 0, return false', () => {
            expect(funcs.isPrime(-1)).toBeFalsy();
        })
        it('if number is divisible by 2, return false', () => {
            expect(funcs.isPrime(4)).toBeFalsy();
        })
        it('if number is prime return true', () => {
            expect(funcs.isPrime(5)).toBeTruthy();
        });
    });
    describe("returnFirst", () => {
        it("returns the 0th index in the given array", () => {
            const arr = [1,2,3,4,5,6]
            expect(funcs.returnFirst(arr)).toEqual(1)
        });
    });

    describe("getArrayLength", () => {
        it('returns the length of the array', () => {
            const arr = [1,2,3,4,5,6]
            expect(funcs.getArrayLength([1,2,3,4])).toEqual(4)
        });
    });
    describe('incrementByOne', () => {
        it('returns each item in array incremented by one', () => {
            expect(funcs.incrementByOne([2,3,4])).toEqual([3,4,5])
        });
    });
    describe('addItemToArray', () => {
        it('adds item to the array', () => {
            expect(funcs.addItemToArray([2,3,4], 5)).toEqual([2,3,4,5]);
        });
    });
    describe('addItemToFront', () => {
        it(' adds new item to beginning of the array', () => {
            expect(funcs.addItemToFront([2,3,4],5)).toEqual([5,2,3,4]);
        });
    });
    describe("wordsToSentence", () => {
        it('returns new sentence', () => {
            expect(funcs.wordsToSentence("Hello")).toBe("H e l l o");
        });
    });
    describe("contains", () => {
        it('returns true if the array contains passed in Item', () => {
            expect(funcs.contains([1,2,3], 3)).toBeTruthy();
        });
        it('returns false if the array does not contain passed in Item', () => {
            expect(funcs.contains([1,2,3], 4)).toBeFalsy();
        });
    });
    describe('addNumbers', () => {
        it('returns the sum of all the numbers in given array', () => {
            expect(funcs.addNumbers([1,2,3])).toBe(6);
        });
    });
    describe('averageTestScore', () => {
        it('returns average test score', () => {
            expect(funcs.averageTestScore([90,70,50])).toBe(70);
        });
    });
    describe('largestNumber', () => {
        it('returns the largest number', () => {
            expect(funcs.largestNumber([3,4,5])).toBe(5);
        });
    });
});