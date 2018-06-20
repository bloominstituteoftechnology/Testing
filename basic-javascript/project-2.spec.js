const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('project-2', () => {
    describe('getBiggest', () => {
        it('should return the bigger number', () => {
            expect(funcs.getBiggest(0, 4)).toBe(4);
        });
    });
});

//make random string
function getRandomStringExcept(array) {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    if (array.includes(text)) {
        return getRandomStringExcept(array)
    }

    return text;
}

describe('project-2', () => {
    describe('getBiggest', () => {
        it('should return the "hello" in corrected language', () => {
            expect(funcs.greeting('German')).toBe('Guten Tag!');
            expect(funcs.greeting('Spanish')).toBe('Hola!');
            expect(funcs.greeting(getRandomStringExcept(['German', 'Spanish']))).toBe('Hello!');
        });
    });
});

describe('project-2', () => {
    describe('isTenOrFive', () => {
        it('should return a boolean indicate the given number is 10 or 5', () => {
            expect(funcs.isTenOrFive(10)).toBe(true);
            expect(funcs.isTenOrFive(5)).toBe(true);
            expect(funcs.isTenOrFive(1)).toBe(false);
        });
    });
});

describe('project-2', () => {
    describe('isInRange', () => {
        it('should return a boolean indicate the given number is in range (20...50)', () => {
            expect(funcs.isInRange(20)).toBe(false);
            expect(funcs.isInRange(21)).toBe(true);
        });
    });
});

describe('project-2', () => {
    describe('fizzBuzz', () => {
        it('should return a corrected string depends on the given number', () => {
            expect(funcs.fizzBuzz(6)).toBe('fizz');
            expect(funcs.fizzBuzz(25)).toBe('buzz');
            expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
        });
    });
});

describe('project-2', () => {
    describe('isPrime', () => {
        it('should return a boolean indicate the given number is prime number', () => {
            expect(funcs.isPrime(-9)).toBe(false);
            expect(funcs.isPrime(0)).toBe(false);
            expect(funcs.isPrime(1)).toBe(false);
            expect(funcs.isPrime(23)).toBe(true);
        });
    });
});

describe('project-2', () => {
    describe('returnFirst', () => {
        it('should return the first item in array', () => {
            expect(funcs.returnFirst([1, 2, 3])).toBe(1);
        });
    });
});

describe('project-2', () => {
    describe('returnLast', () => {
        it('should return the last item in array', () => {
            expect(funcs.returnLast([1, 2, 3])).toBe(3);
        });
    });
});

describe('project-2', () => {
    describe('getArrayLength', () => {
        it('should return the length of the given array', () => {
            expect(funcs.getArrayLength([1, 2, 3])).toBe(3);
        });
    });
});

describe('project-2', () => {
    describe('incrementByOne', () => {
        it('should return the given array whose contained numbers are increased by 1', () => {
            expect(funcs.incrementByOne([1, 2, 3])).toEqual([2, 3, 4]);
        });
    });
});

describe('project-2', () => {
    describe('wordsToSentence', () => {
        it('should return a sentence combined by array of words', () => {
            expect(funcs.wordsToSentence(['hello', 'world', '!'])).toBe('hello world !');
        });
    });
});

describe('project-2', () => {
    describe('contains', () => {
        it('should return a boolean indicate the given array contains the given number', () => {
            expect(funcs.contains([1, 2, 3], 1)).toBe(true);
            expect(funcs.contains([1, 2, 3], 0)).toBe(false);
        });
    });
});

describe('project-2', () => {
    describe('addNumbers', () => {
        it('should return a sum of all numbers in the given array', () => {
            expect(funcs.addNumbers([1, 2, 3])).toBe(6);
        });
    });
});

describe('project-2', () => {
    describe('averageTestScore', () => {
        it('should return the average of numbers in the given array', () => {
            expect(funcs.averageTestScore([1, 2, 3])).toBe(2);
        });
    });
});

describe('project-2', () => {
    describe('largestNumber', () => {
        it('should return the largest number', () => {
            expect(funcs.largestNumber([1, 2, 3])).toBe(3);
        });
    });
});
