const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('project-2', () => {
    describe('getBiggest (x,y)', () => {
        it('should return x if it is larget than y', () => {
            expect(funcs.getBiggest(1,2)).toBe(2);
        });
        it('should return y if it is larger than x', () => {
            expect(funcs.getBiggest(55, 66)).toBe(66);
        });
        it('should return either x or y if they are equal', () => {
            expect(funcs.getBiggest(33,33)).toBe(33);
        });
    });

    describe('greeting(language)', () => {
        it(`should return 'Guten Tag!' for German`, () => {
            expect(funcs.greeting('German')).toBe('Guten Tag!');
        });
        it(`should  return 'Hola!' for Spanish`, () => {
            expect(funcs.greeting('Spanish')).toBe('Hola!');
        });
        it(`should return 'Ni Hao!' for Chinese`, () => {
            expect(funcs.greeting('Chinese')).toBe('Ni Hao!');
        });
        it(`should return 'Hello' if no argument is passed in or if a language other than Spanish, English, German, or Chinese is passed in`, () => {
            expect(funcs.greeting('Mong')).toBe('Hello!');
        });
    });

    describe('isTenOrFive(num)', () => {
        it('should return true if nume is 10 or 5', () => {
            expect(funcs.isTenOrFive(5)).toBe(true);
            expect(funcs.isTenOrFive(10)).toBe(true);
        });
        it('should return false if num is anything other than 10 or 5', () => {
            expect(funcs.isTenOrFive(0)).toBe(false);
            expect(funcs.isTenOrFive(5.01)).toBe(false);
            expect(funcs.isTenOrFive(11)).toBe(false);
            expect(funcs.isTenOrFive(6)).toBe(false);
        });
    });
    
    describe('isInRange(num)', () => {
        it('should return true if num is inside range', () => {
          expect(funcs.isInRange(35.5)).toBe(true);
          expect(funcs.isInRange(40)).toBe(true);
          expect(funcs.isInRange(49)).toBe(true);
          expect(funcs.isInRange(21)).toBe(true);
        });
        it('should return false if outside of range', () => {
          expect(funcs.isInRange(10)).toBe(false);
          expect(funcs.isInRange(20)).toBe(false);
          expect(funcs.isInRange(50)).toBe(false);
          expect(funcs.isInRange(100)).toBe(false);
        });
      });
    
      describe('isInteger(num)', () => {
        it('should return true if num is 5', () => {
          expect(funcs.isInteger(5)).toBe(true);
        });
        it('should return false if num is 0.5', () => {
          expect(funcs.isInteger(0.5)).toBe(false);
        });
        it('should return true if num is -20', () => {
          expect(funcs.isInteger(-20)).toBe(true);
        });
        it('should return true for 0', () => {
          expect(funcs.isInteger(0)).toBe(true);
        });
      });
    
      describe('fizzBuzz(num)', () => {
        it('should return fizz if divisible by 3', () => {
          expect(funcs.fizzBuzz(9)).toBe('fizz');
        });
        it('should return buzz if divisible by 5', () => {
          expect(funcs.fizzBuzz(10)).toBe('buzz');
        });
        it('should return fizzbuzz if divisible by 3 and 5', () => {
          expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
        });
        it('should return num if not divisible by 3 or 5', () => {
          expect(funcs.fizzBuzz(4)).toBe(4);
        });
      });
    
      describe('isPrime(num)', () => {
        it('should return true if num is prime', () => {
          expect(funcs.isPrime(7)).toBe(true);
          expect(funcs.isPrime(97)).toBe(true);
        });
        it('should return false if num is not prime', () => {
          expect(funcs.isPrime(10)).toBe(false);
          expect(funcs.isPrime(100)).toBe(false);
          expect(funcs.isPrime(0)).toBe(false);
          expect(funcs.isPrime(1)).toBe(false);
        });
      });
    
      describe('returnFirst(arr)', () => {
        it('should return the first item in the array', () => {
          expect(funcs.returnFirst([10, 10, 16, 12])).toBe(10);
          expect(funcs.returnFirst([97, 100, 80, 55, 72, 94])).toBe(97);
        });
      });
    
      describe('returnLast(arr)', () => {
        it('should return the last item in the array', () => {
          expect(funcs.returnLast([10, 10, 16, 12])).toBe(12);
          expect(funcs.returnLast([97, 100, 80, 55, 72, 94])).toBe(94);
          expect(funcs.returnLast(['hi', 'there', 'how', 'are', 'you', 'doing?'])).toBe('doing?');
        });
      });
    
      describe('getArrayLength(arr)', () => {
        it('should return the length of the array', () => {
          expect(funcs.getArrayLength([10, 10, 16, 12])).toBe(4);
          expect(funcs.getArrayLength([97, 100, 80, 55, 72, 94])).toBe(6);
          expect(funcs.getArrayLength(['hi', 'there', 'how', 'are', 'you', 'doing?'])).toBe(6);
        });
      });
    
      describe('incrementByOne(arr)', () => {
        it('should return the array with each value incremented by one', () => {
          expect(funcs.incrementByOne([10, 10, 16, 12])).toEqual([11, 11, 17, 13]);
          expect(funcs.incrementByOne([97, 100, 80, 55, 72, 94])).toEqual([98, 101, 81, 56, 73, 95]);
          expect(funcs.incrementByOne([])).toEqual([]);
        });
      });
    
      describe('addItemToArray(arr, item)', () => {
        it('should return the array with the item added to the end', () => {
          expect(funcs.addItemToArray([10, 10, 16, 12], 10)).toEqual([10, 10, 16, 12, 10]);
          expect(funcs.addItemToArray([97, 100, 80, 55, 72, 94], 'Hello')).toEqual([97, 100, 80, 55, 72, 94, 'Hello']);
          expect(funcs.addItemToArray([], true)).toEqual([true]);
        });
      });
    
      describe('addItemToFront(arr, item)', () => {
        it('should return the array with the item added to the front', () => {
          expect(funcs.addItemToFront([10, 10, 16, 12], 10)).toEqual([10, 10, 10, 16, 12]);
          expect(funcs.addItemToFront([97, 100, 80, 55, 72, 94], 'Hello')).toEqual(['Hello', 97, 100, 80, 55, 72, 94]);
          expect(funcs.addItemToFront([], true)).toEqual([true]);
        });
      });
    
      describe('wordsToSentence(words)', () => {
        it('should return a string that has all of the words from the array separated by spaces', () => {
          expect(funcs.wordsToSentence(['LambdaSchool', 'JavaScript', 'Class'])).toBe('LambdaSchool JavaScript Class');
          expect(funcs.wordsToSentence(['LambdaSchool'])).toBe('LambdaSchool');
        });
      });
    
      describe('contains(arr, item)', () => {
        it('should return true if the array contains the item', () => {
          expect(funcs.contains([10, 10, 16, 12], 10)).toBe(true);
          expect(funcs.contains([97, 100, 80, 55, 72, 94], 'Hello')).toBe(false);
          expect(funcs.contains([], true)).toBe(false);
        });
      });
    
      describe('addNumbers(numbers)', () => {
        it('should add all of the numbers in the array together and return the sum', () => {
          expect(funcs.addNumbers([10, 10, 16])).toBe(36);
          expect(funcs.addNumbers([97, 100])).toBe(197);
          expect(funcs.addNumbers([0])).toBe(0);
        });
      });
    
      describe('averageTestScore(testScores)', () => {
        it('should return the average test score', () => {
          expect(funcs.averageTestScore([10, 10, 16, 12])).toBe(12);
          expect(funcs.averageTestScore([97, 100, 80, 55, 72, 94])).toBe(83);
        });
      });
    
      describe('largestNumber(numbers)', () => {
        it('should return the largest number', () => {
          expect(funcs.largestNumber([10, 10, 16, 12])).toBe(16);
          expect(funcs.largestNumber([97, 100, 80, 55, 72, 94])).toBe(100);
          expect(funcs.largestNumber([97, 10000, 80, 55, 7.2, -94])).toBe(10000);
        });
      });
});