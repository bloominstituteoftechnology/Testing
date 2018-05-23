const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-2', () => {
    describe('getBiggest', () => {
        const getBiggest = funcs.getBiggest;    
        it('should get biggest number', () => {
            expect(getBiggest(2,4)).toBe(4);
            expect(getBiggest(33,77)).toBe(77);
        });
    });

    describe('greeting', () => {
        const greeting = funcs.greeting;    
        it('should get greetings', () => {
            expect(greeting('German')).toBe('Guten Tag!');
            expect(greeting('Spanish')).toBe('Hola!');
            expect(greeting()).toBe('Hello!');
        });
    });

    describe('isTenOrFive', () => {
        const isTenOrFive = funcs.isTenOrFive;    
        it('should be true if ten or five', () => {
            expect(isTenOrFive(2)).toBeFalsy();
            expect(isTenOrFive(5)).toBeTruthy();
            expect(isTenOrFive(10)).toBeTruthy();
            expect(isTenOrFive(11)).toBeFalsy();
            
            
        });
    });

    describe('isInRange', () => {  
        it('should be true if in range', () => {
            expect(funcs.isInRange(25)).toBeTruthy();
            expect(funcs.isInRange(55)).toBeFalsy();
            expect(funcs.isInRange(77)).toBeFalsy();
            expect(funcs.isInRange(11)).toBeFalsy();            
        });
    });

    describe('isInteger', () => {
        const isInteger = funcs.isInteger;    
        it('should be true if interger', () => {
            expect(isInteger(33.3)).toBeFalsy();
            expect(isInteger(77)).toBeTruthy();
            expect(isInteger('wut')).toBeFalsy();            
        });
    });

    describe('fizzBuzz', () => {
        const fizzBuzz = funcs.fizzBuzz;    
        it('should be fizzBuzz when divisible by 5 and 3, buzz when by 5 and fizz by 3 and just number for others', () => {
            expect(fizzBuzz(30)).toBe('fizzbuzz');
            expect(fizzBuzz(5)).toBe('buzz');
            expect(fizzBuzz(5)).toBe('buzz');
            expect(fizzBuzz(1)).toBe(1);
        });
    });

    describe('isPrime', () => {
        const isPrime = funcs.isPrime;    
        it('should be truth when prime', () => {
            expect(isPrime(3)).toBeTruthy();
            expect(isPrime(4)).toBeFalsy();
            expect(isPrime(0)).toBeFalsy(); 
            expect(isPrime(7)).toBeTruthy(); 
        });
    });

    describe('returnFirst', () => {
        const returnFirst = funcs.returnFirst;
        const arr = [3, 6, 7];
        it('should return first item of array', () => {
            expect(returnFirst(arr)).toBe(3);
            expect(returnFirst('wtf')).toBe('w');
            expect(returnFirst(3, 3)).toBe(undefined);
        });
    });

    describe('returnLast', () => {
        const returnLast = funcs.returnLast;
        const arr = [3, 6, 7];
        it('should return last item of array', () => {
            expect(returnLast(arr)).toBe(7);
            expect(returnLast('wtf')).toBe('f');
            expect(returnLast(3, 3)).toBe(undefined);
        });
    });

    describe('getArrayLength', () => {
        const getArrayLength = funcs.getArrayLength;
        const arr = [3, 6, 7];  
        it('should get the length of the array', () => {
            expect(getArrayLength(arr)).toBe(3);
            expect(getArrayLength(2, 4)).toBe(undefined);
            expect(getArrayLength('wtf')).toBe(3);            
        });
    });

    describe('incrementByOne', () => {
        const incrementByOne = funcs.incrementByOne;
        const arr = [3, 6, 7];        
        it('should increment items by one', () => {
            expect(incrementByOne(arr)).toEqual([4, 7, 8]);
        });
    });

    describe('addItemToArray', () => {
        const addItemToArray = funcs.addItemToArray;    
        it('should add an item to the end of the array', () => {
            expect(addItemToArray([3, 6, 7], 7)).toEqual([3, 6, 7, 7]);
            expect(addItemToArray([3, 6, 7], 'pizdet')).toEqual([3, 6, 7, 'pizdet']);
        });
    });

    describe('addItemToFront', () => {
        const addItemToFront = funcs.addItemToFront;
        it('should add an item to te front of the array', () => {
            expect(addItemToFront([3, 6, 7], 7)).toEqual([7, 3, 6, 7]);
            expect(addItemToFront([3, 6, 7], 'pizdet')).toEqual(['pizdet', 3, 6, 7]);
        });
    });

    describe('wordsToSentence', () => {
        const wordsToSentence = funcs.wordsToSentence;    
        it('should use words to create sentence', () => {
            expect(wordsToSentence(['Julian', 'Alexander'])).toEqual('Julian Alexander');
        });
    });

    describe('contains', () => {
        const contains = funcs.contains;
        it('should be true if array contains item', () => {
            expect(contains([3, 6, 7], 7)).toBeTruthy();
            expect(contains([3, 6, 7], 'pizdet')).toBeFalsy();
        });
    });

    describe('addNumbers', () => {
        const addNumbers = funcs.addNumbers;
        it('should sum all numbers', () => {
            expect(addNumbers([3, 6, 7])).toBe(16);
            expect(addNumbers([3, 6, 7], 'pizdet')).toBe(16);
            expect(addNumbers([3, 3, 3])).toBe(9);
        });
    });  

    describe('averageTestScore', () => {
        const averageTestScore = funcs.averageTestScore;    
        it('should get average score', () => {
            expect(averageTestScore([1, 2, 3])).toBe(2);
            expect(averageTestScore([1, 2], "tf")).toBe(1.5);
            expect(averageTestScore("wut", 3)).toBe(NaN);
            expect(averageTestScore([], 3)).toBe(NaN);
        });
    });    

    describe('largestNumber', () => {
        const largestNumber = funcs.largestNumber;    
        it('should get the largest number from the array', () => {
            expect(largestNumber([3, 6, 7])).toBe(7);
            expect(largestNumber([3, 6, 7], 'pizdet')).toBe(7);
            expect(largestNumber([3, 3, 3])).toBe(3);
        });
    });
});