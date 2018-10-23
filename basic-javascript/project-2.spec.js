const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

// Format Example:
// describe('helpers.js', () => {
//     test('should run tests', () => {
//         //tests all the things
//     });

//     it('should run tests using it instead of test', () => {
//         //Arrange : setup the world
//         //Act : execute the code you're testing
//         //Assert : check that it works
//     });   
// });

describe('getBiggest()', () => {
    it('should get the biggest number', () => {
        const expectedX = 5;
        const expectedY = 10
    
        const actual1 = funcs.getBiggest(5, 2);
        const actual2 = funcs.getBiggest(5, 10);
        const actual3 = funcs.getBiggest(5, 5);
    
        expect(actual1).toBe(expectedX);
        expect(actual2).toBe(expectedY);
        expect(actual3).toBe(expectedX);
        // expect(actual3).toBe(expectedY); //fail
    });
});

describe('greeting()', () => {
    it('should return a spanish, german or english greeting', () => {
        const expected1 = 'Hola!';
        const expected2 = 'Guten Tag!';
        const expected3 = 'Hello!';

        const actual1 = funcs.greeting("Spanish");
        const actual2 = funcs.greeting("German");
        const actual3 = funcs.greeting("French");

    
        expect(actual1).toBe(expected1);
        expect(actual2).toBe(expected2);
        expect(actual3).toBe(expected3);
        // expect(actual2).toBe(expected3);  //fail
    });
});

describe('isTenOrFive()', () => {
    it('boolean: should return true for ten or five', () => {
        const expectedF = false;
        const expectedT = true;

        const actual1 = funcs.isTenOrFive(15);
        const actual2 = funcs.isTenOrFive(5);
        const actual3 = funcs.isTenOrFive(10);

    
        expect(actual1).toBe(expectedF);
        expect(actual2).toBe(expectedT);
        expect(actual3).toBe(expectedT);
        // expect(actual2).toBe(expectedF);  //fail
    });
});

describe('isInRange()', () => {
    it('boolean: should return true if within range', () => {
        const expectedF = false;
        const expectedT = true;

        const actual1 = funcs.isInRange(3);
        const actual2 = funcs.isInRange(30);

    
        expect(actual1).toBe(expectedF);
        expect(actual2).toBe(expectedT);
        // expect(actual2).toBe(expectedF);  //fail
    });
});

describe('isInteger()', () => {
    it('boolean: should return true it is an integer', () => {
        const expectedF = false;
        const expectedT = true;

        const actual1 = funcs.isInteger("three");
        const actual2 = funcs.isInteger(30);

    
        expect(actual1).toBe(expectedF);
        expect(actual2).toBe(expectedT);
        // expect(actual2).toBe(expectedF);  //fail
    });
});

describe('fizzBuzz()', () => {
    it('should return fizzbuzz, buzz, fizz, or number', () => {
        const expectedFB = 'fizzbuzz';
        const expectedF = 'buzz';
        const expectedB = 'fizz'
        const expectedN = 7;

        const actual1 = funcs.fizzBuzz(15);
        const actual2 = funcs.fizzBuzz(5);
        const actual3 = funcs.fizzBuzz(3);
        const actual4 = funcs.fizzBuzz(7);

        expect(actual1).toBe(expectedFB);
        expect(actual2).toBe(expectedF);
        expect(actual3).toBe(expectedB);
        expect(actual4).toBe(expectedN);
        // expect(actual2).toBe(expectedN);  //fail
    });
});

describe('isPrime()', () => {
    it('boolean: should return true if prime', () => {
        const expectedF = false;
        const expectedT = true;

        const actual1 = funcs.isPrime(20);
        const actual2 = funcs.isPrime(7);

    
        expect(actual1).toBe(expectedF);
        expect(actual2).toBe(expectedT);
        // expect(actual2).toBe(expectedF);  //fail
    });
});

describe('returnFirst()', () => {
    it('should return first item in an array', () => {
        // const expected = 7; //fail
        const expected = 5;

        const actual = funcs.returnFirst([5, 3, 7]);

        expect(actual).toBe(expected);
    });
});

describe('returnLast()', () => {
    it('should return last item in an array', () => {
        // const expected = 5; //fail
        const expected = 7;

        const actual = funcs.returnLast([5, 3, 7]);

        expect(actual).toBe(expected);
    });
});

describe('getArrayLength()', () => {
    it('should get the length of an array', () => {
        // const expected = 5; //fail
        const expected = 3;

        const actual = funcs.getArrayLength([5, 3, 7]);

        expect(actual).toBe(expected);
    });
});

describe('incrementByOne()', () => {
    it('should increase an array by one', () => {
    // const expected = [1, 2, 3, 4]  //fail
    const expected = [2,3,4]
    
    const actual = funcs.incrementByOne([1,2,3])
    
	expect(actual).toEqual(expected)
    });
});

describe('addItemToArray()', () => {
    it('should add an item to the end of an array', () => {
        // expect(funcs.addItemToArray([1, 9, 4], 5)).toEqual([5, 1, 9, 4]) //fail
        expect(funcs.addItemToArray([1, 9, 4], 5)).toEqual([1, 9, 4, 5])
    });
});

describe('addItemToFront()', () => {
    it('should add an item to the front of an array', () => {
        // expect(funcs.addItemToFront([1, 9, 4], 5)).toEqual([1, 9, 4, 5]) //fail
        expect(funcs.addItemToFront([1, 9, 4], 5)).toEqual([5, 1, 9, 4]) 
    });
});

describe('wordsToSentence()', () => {
    it('should turn words into a sentence', () => {
        // expect(funcs.wordsToSentence("hello world")).toEqual("h e l l o w o r l d") //fail 
        expect(funcs.wordsToSentence("hello world")).toEqual("h e l l o   w o r l d") 
    });
});

describe('contains()', () => {
    it('boolean: should return true if an item exists within an array', () => {
        expect(funcs.contains(["hello", "world", "yay"], "yo")).toBeFalsy() 
        expect(funcs.contains(["hello", "world", "yay"], "yay")).toBeTruthy()
    });
});

describe('addNumbers()', () => {
    it('should return sum of numbers', () => {
        // expect(funcs.addNumbers([2, 4, "7"])).toEqual(13) //fail 
        expect(funcs.addNumbers([2, 4, 7])).toEqual(13) 
    });
});

describe('averageTestScore()', () => {
    it('should return the average from an array', () => {
        // expect(funcs.averageTestScore([2, 4, 7])).toEqual(4.33) //fail 
        expect(funcs.averageTestScore([2, 4, 7])).toBeCloseTo(4.33) 
    });
});

describe('largestNumber()', () => {
    it('should return the largest number', () => {
        // expect(funcs.largestNumber([2, 4, 7])).toEqual(4) //fail 
        expect(funcs.largestNumber([2, 4, 7])).toBeCloseTo(7) 
    });
});















