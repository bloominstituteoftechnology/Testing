const funcs = require('./project-2');

describe(`${funcs.getBiggest.name}`, () => {
    const getBiggest = funcs.getBiggest;
    it('should return the x value if x is bigger than y', () => {
        expect(getBiggest(40,20)).toBe(40);
        expect(getBiggest(30,20)).toBe(30);
    })
    it('should return the y value if y is bigger than x', () => {
        expect(getBiggest(10,20)).toBe(20);
        expect(getBiggest(-5,20)).toBe(20);
    })
})

describe(`${funcs.greeting.name}`, () => {
    const greeting = funcs.greeting;
    it('should return the proper greeting depending on the input', () => {
        expect(greeting('German')).toBe('Guten Tag!');
        expect(greeting('Spanish')).toBe('Hola!');
        expect(greeting('Unknown')).toBe('Hello!');
    })
})
describe(`${funcs.isTenOrFive.name}`, () => {
    const isTenOrFive = funcs.isTenOrFive;
    it ('the argument should be a 5 or a 10 for it to return true', () => {
        expect(isTenOrFive(5)).toBeTruthy();
        expect(isTenOrFive(10)).toBeTruthy();
    })
    it ('any other number should return false that is not 5 or 10', () => {
        expect(isTenOrFive(4)).toBeFalsy();
        expect(isTenOrFive(11)).toBeFalsy();
    })
});

describe(`${funcs.isInRange.name}`, () => {
    const isInRange = funcs.isInRange;

    it ('should return true if the argument is less than 50 and greater than 20', () => {
        expect(isInRange(40)).toBeTruthy();
        expect(isInRange(25)).toBeTruthy();
        expect(isInRange(49)).toBeTruthy();
    })
    it ('should return false if the argument is not between 50 and 20', () => {
        expect(isInRange(19)).toBeFalsy();
        expect(isInRange(20)).toBeFalsy();
        expect(isInRange(50)).toBeFalsy();
    })
});

describe(`${funcs.isInteger.name}`, () => {
    const isInteger = funcs.isInteger;

    it('should return true for numbers that are true integers', () => {
        expect(isInteger(4)).toBeTruthy();
        expect(isInteger(42424)).toBeTruthy();
        expect(isInteger(-4151)).toBeTruthy();
    });
    it('should return false for numbers that are decimals', () => {
        expect(isInteger(4.3)).toBeFalsy();
    })
})
describe(`${funcs.fizzBuzz.name}`, () => {
    const fizzBuzz = funcs.fizzBuzz;
    it('should return fizzbuzz', () => {
        expect(fizzBuzz(15)).toMatch('fizzbuzz');
    })
    it('should return fizz', () => {
        expect(fizzBuzz(3)).toMatch('fizz');        
    })
    it('should return buzz', () => {
        expect(fizzBuzz(5)).toMatch('buzz');
    })
    it('should return number', () => {
        expect(fizzBuzz(7)).toBe(7);        
    })
});

describe(`${funcs.isPrime.name}`, () => {
    const isPrime = funcs.isPrime;
    
    it('should return true for a number that is prime', () => {
        expect(isPrime(5)).toBeTruthy();
    });
    it('should return false for negative numbers', () => {
        expect(isPrime(-4)).toBeFalsy();
    })
    it('should return false for a non-prime number', () => {
        expect(isPrime(6)).toBeFalsy();
    });
})
describe(`${funcs.returnFirst.name}`, () => {
    const returnFirst = funcs.returnFirst;
    const arr = [5,4,2,1];
    it('should return the first item in the array', () => {
        expect(returnFirst(arr)).toBe(5);
    });
});

describe(`${funcs.returnLast.name}`, () => {
    const returnLast = funcs.returnLast;
    const arr = [5,4,2,1];
    it('should return the last item in the array', () => {
        expect(returnLast(arr)).toBe(1);
    });
});

describe(`${funcs.getArrayLength.name}`, () => {
    const getArrayLength = funcs.getArrayLength;
    const arr = [5,4,2,1];
    it('should return the length of the array', () => {
        expect(getArrayLength(arr)).toBe(4);
    });
});
describe(`${funcs.incrementByOne.name}`, () => {
    const incrementByOne = funcs.incrementByOne;
    const arr = [5,4,2,1];
    it('should increment each item in the array by 1', () => {
        expect(incrementByOne(arr)).toEqual([6,5,3,2]);
    });
});
describe(`${funcs.addItemToArray.name}`, () => {
    const addItemToArray = funcs.addItemToArray;
    const arr = [5,4,2,1];
    it('should push a value to the end of the array', () => {
        expect(addItemToArray([...arr],6)).toEqual([...arr, 6]);
    });
});
describe(`${funcs.addItemToFront.name}`, () => {
    const addItemToFront = funcs.addItemToFront;
    const arr = [5,4,2,1];
    it('should put a value to the front of the array', () => {
        expect(addItemToFront([...arr],6)).toEqual([6, ...arr]);
    });
});
describe(`${funcs.wordsToSentence.name}`, () => {
    const wordsToSentence = funcs.wordsToSentence;

    it('constructs the sentence from a arr full of words', () => {
        expect(wordsToSentence(['The', 'dog', 'went', 'to','the','park'])).toMatch('The dog went to the park')
        expect(wordsToSentence(['this', 'is', 'a', 'sentence'])).toMatch('this is a sentence');
    })
})

describe(`${funcs.contains.name}`, () => {
    const contains = funcs.contains;
    it('The array contains 1 or more elements that matches its specifications', () => {
        expect(contains([5,4,6], 4)).toBeTruthy();
        expect(contains([5,4,6,7,2,1], 1)).toBeTruthy();
    })
    it('The array contains no elements that meets specifications', () => {
        expect(contains([2,4,1],3)).toBeFalsy();
    })
});
describe(`${funcs.addNumbers.name}`, () => {
    const addNumbers = funcs.addNumbers;
    it('should sum up all the numbers in the array', () => {
        expect(addNumbers([5,2,4])).toBe(11);
        expect(addNumbers([5,2,4,11,2])).toBe(24);
    })
})
// whoops.. there is no test suite for this file. You'll simply just have to create one :/
