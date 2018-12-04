const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/



describe('getBiggest function', () => {
    it('should return 10 when passed 5 , 10 in', () => {
        expect(funcs.getBiggest(5,10)).toEqual(10);
    });
});

describe('greeting function', () => {
    it('should return "Hello! by default', () => {
        expect(funcs.greeting()).toEqual('Hello!');
    });
    it('should return Guten Tag! when passed in German', () => {
        expect(funcs.greeting('German')).toEqual('Guten Tag!');
    });
    it('should return Hola! when passed in Spanish', () => {
        expect(funcs.greeting('Spanish')).toEqual('Hola!');
    });
});

describe('isTenOrFive function', () => {
    it('should return true if passed in 10 or 5', () => {
        expect(funcs.isTenOrFive(5)).toEqual(true);
        expect(funcs.isTenOrFive(10)).toEqual(true);
    });
    it('should return false if passed a number thats not 10 or 5', () => {
        expect(funcs.isTenOrFive(4)).toEqual(false);
        expect(funcs.isTenOrFive(9)).toEqual(false);
    });
    
});

describe('isInRange function', () => {
    it('should return true if number between 50 and 20 is passed', () => {
        expect(funcs.isInRange(25)).toEqual(true);
    });
    it('should return false if number is not between 50 and 20 is passed', () => {
        expect(funcs.isInRange(15)).toEqual(false);
    });
});

describe('isInteger function', () => {
    it('should return true if interger is passed in', () => {
        expect(funcs.isInteger(10)).toEqual(true)
    });
    it('should return false if none integer is passed in', () => {
        expect(funcs.isInteger('1')).toEqual(false)
        expect(funcs.isInteger([1])).toEqual(false)
        expect(funcs.isInteger({num:1})).toEqual(false)
    });
});

describe('fizzbuzz function', () => {
    it('should return fizzbuzz if number is divisible by 5 and 3', () => {
        expect(funcs.fizzBuzz(15)).toEqual('fizzbuzz');
    });
    it('should return fizz if number is divisible by 3', () => {
        expect(funcs.fizzBuzz(3)).toEqual('fizz');
    });
    it('should return buzz if number is divisible by 5', () => {
        expect(funcs.fizzBuzz(5)).toEqual('buzz');
    });
    it('shoudl return the number passed if its not divisible by 3 or 5', () => {
        expect(funcs.fizzBuzz(4)).toEqual(4)
    });
});

describe('isPrime function', () => {
    it('should return true if number is prime', () => {
        expect(funcs.isPrime(2)).toBe(true)
    });
    it('should return false if number is not prime', () => {
        expect(funcs.isPrime(4)).toBe(false)
    });
});

describe('returnFirst function', () => {
    it('should return first item in array', () => {
        expect(funcs.returnFirst([0,1,2,3])).toEqual(0)
    });
});

describe('returnLast function', () => {
    it('should return last item in array', () => {
        expect(funcs.returnLast([0,1,2,3])).toEqual(3)
    });
});

describe(' getArrayLength function', () => {
    it('should return array length', () => {
        expect(funcs.getArrayLength([0,1,2,3])).toEqual(4);
    });
});

describe('incrementByOne function', () => {
    it('should return array with value incremented by 1', () => {
        expect(funcs.incrementByOne([0,1,2,3])).toEqual([1,2,3,4])
    });
});

describe('addItemToArray function', () => {
    it('should add item passed in to the array passed in', () => {
        expect(funcs.addItemToArray([0,1,2], 3)).toEqual([0,1,2,3])
    });
});

describe('addItemToFront function', () => {
    it('should add item to the front of the array passed in', () => {
        expect(funcs.addItemToFront([0,1,2], 3)).toEqual([3,0,1,2])
    });
});

describe('wordsToSentence function', () => {
    it('should return the array of strings into one combined string', () => {
        expect(funcs.wordsToSentence(['hi', 'these tests', 'blow'])).toEqual('hi these tests blow')
    });
});

describe('contains function', () => {
    it('should return true if item passed in exist in array passed in', () => {
        expect(funcs.contains([1,2,3], 2)).toEqual(true)
    });
    it('should return false if item passed in does not exist in array passed in', () => {
        expect(funcs.contains([1,2,3], 5)).toEqual(false)
    });
});

describe('addNumbers function', () => {
    it('return all the numbers in teharray passed in', () => {
        expect(funcs.addNumbers([1,2,3,4])).toEqual(10)
    });
});
describe('averageTestScore function', () => {
    it('should return the average of all the numebrs passed in as an array', () => {
        expect(funcs.averageTestScore([1,2,3,4,5])).toEqual(3);
    });
});
describe('largestNumber function', () => {
    it('should return the largest number in the array', () => {
        expect(funcs.largestNumber([1,2,350])).toEqual(350);
    });
});
