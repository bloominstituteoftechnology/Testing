const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('project-2.js', () => {
    describe('getBiggest()', () => {
      it('returns x if x is larger than y, otherwise returns y', () => {
        const actual = funcs.getBiggest(2, 1);
        expect(actual).toBe(2);
      });
       it('returns x if x is larger than y, otherwise returns y', () => {
        const actual = funcs.getBiggest(-1, 0);
        expect(actual).toBe(0);
      });
       it('returns x if x is larger than y, otherwise returns y', () => {
        const actual = funcs.getBiggest(100, 100);
        expect(actual).toBe(100);
      });
    });
     describe('greeting()', () => {
      it('returns a greeting in specified language, otherwise defaults to English', () => {
        const actual = funcs.greeting();
        expect(actual).toBe('Hello!');
      });
       it('returns a greeting in specified language, otherwise defaults to English', () => {
        const actual = funcs.greeting('German');
        expect(actual).toBe('Guten Tag!');
      });
       it('returns a greeting in specified language, otherwise defaults to English', () => {
        const actual = funcs.greeting('Spanish');
        expect(actual).toBe('Hola!');
      });
    });
     describe('isTenOrFive()', () => {
      it('should return true if value is 10 or 5, otherwise false', () => {
        const actual = funcs.isTenOrFive(10);
        expect(actual).toBeTruthy();
      });
       it('should return true if value is 10 or 5, otherwise false', () => {
        const actual = funcs.isTenOrFive(5);
        expect(actual).toBeTruthy();
      });
       it('should return true if value is 10 or 5, otherwise false', () => {
        const actual = funcs.isTenOrFive(1);
        expect(actual).toBeFalsy();
      });
    });
     describe('isInRange()', () => {
      it('should return true for a number between 20 and 50 else return false', () => {
        const actual = funcs.isInRange(33);
        expect(actual).toBeTruthy();
      });
       it('should return true for a number between 20 and 50 else return false', () => {
        const actual = funcs.isInRange(99);
        expect(actual).toBeFalsy();
      });
       it('should return true for a number between 20 and 50 else return false', () => {
        const actual = funcs.isInRange(0);
        expect(actual).toBeFalsy();
      });
    });
     describe('isInteger()', () => {
      it('should return true for an integer else return false', () => {
        const actual = funcs.isInteger(2);
        expect(actual).toBeTruthy();
      });
       it('should return true for an integer else return false', () => {
        const actual = funcs.isInteger(0.5);
        expect(actual).toBeFalsy();
      });
    });
     describe('fizzBuzz()', () => {
      it('should return fizzbuzz if number is divisible by 5 and 3, else fizz for just divisible by 3, else just buzz if divisible by 5', () => {
        const actual = funcs.fizzBuzz(15);
        expect(actual).toBe('fizzbuzz');
      });
       it('should return fizzbuzz if number is divisible by 5 and 3, else fizz for just divisible by 3, else just buzz if divisible by 5', () => {
        const actual = funcs.fizzBuzz(25);
        expect(actual).toBe('buzz');
      });
       it('should return fizzbuzz if number is divisible by 5 and 3, else fizz for just divisible by 3, else just buzz if divisible by 5', () => {
        const actual = funcs.fizzBuzz(9);
        expect(actual).toBe('fizz');
      });
    });
     describe('isPrime()', () => {
      it('should return true or false depending on whether value is prime or not', () => {
        const actual = funcs.isPrime(0);
        expect(actual).toBeFalsy();
      });
       it('should return true or false depending on whether value is prime or not', () => {
        const actual = funcs.isPrime(1);
        expect(actual).toBeFalsy();
      });
       it('should return true or false depending on whether value is prime or not', () => {
        const actual = funcs.isPrime(11);
        expect(actual).toBeTruthy();
      });
    });
     describe('returnFirst()', () => {
      it('should return the first item in the array', () => {
        const actual = funcs.returnFirst([
          1,
          2,
          3
        ]);
        expect(actual).toBe(1);
      });
    });
    describe('returnFirst()', () => {
        it('should return the first item in the array', () => {
          const actual = funcs.returnFirst([
            'string',
            'also string',
            3
          ]);
          expect(actual).toBe('string');
        });
      });
     describe('returnLast()', () => {
      it('should return the last item in the array', () => {
        const actual = funcs.returnLast([
            1,
            2,
            3
        ]);
        expect(actual).toBe(3);
      });
    });
     describe('getArrayLength()', () => {
      it('should return the length of the array', () => {
        const actual = funcs.getArrayLength([
          'lord',
          'unicorn',
          'bat'
        ]);
        expect(actual).toBe(3);
      });
       it('should return the length of the array', () => {
        const actual = funcs.getArrayLength([]);
        expect(actual).toBe(0);
      });
    });
     describe('incrementByOne()', () => {
      it('should increment each item in the array by 1', () => {
        const actual = funcs.incrementByOne([1, 2, 3]);
        expect(actual).toEqual([2, 3, 4]);
      });
    });
     describe('addItemToArray()', () => {
      it('should add item to the end of the array', () => {
        const actual = funcs.addItemToArray([1, 2, 3], 4);
        expect(actual).toEqual([1, 2, 3, 4]);
      });
    });
     describe('addItemToFront()', () => {
      it('should add item to the front of the array', () => {
        const actual = funcs.addItemToFront([1, 2, 3], 0);
        expect(actual).toEqual([0, 1, 2, 3]);
      });
    });
     describe('wordsToSentence()', () => {
      it('should concatenate an array of words to a sentence', () => {
        const actual = funcs.wordsToSentence(['Hello', 'world', 'it', 'is', 'me']);
        expect(actual).toBe('Hello world it is me');
      });
    });
     describe('contains()', () => {
      it('should return boolean if array contains value', () => {
        const actual = funcs.contains(
          ['1', '2', '3'],
          '2'
        );
        expect(actual).toBeTruthy();
      });
       it('should return boolean if array contains value', () => {
        const actual = funcs.contains(
          ['1', '2', '3'],
          '4'
        );
        expect(actual).toBeFalsy();
      });
    });
     describe('addNumbers()', () => {
      it('should return the sum of the values in the array', () => {
        const actual = funcs.addNumbers([1, 2, 3]);
        expect(actual).toEqual(6);
      });
       it('should return the sum of the values in the array', () => {
        const actual = funcs.addNumbers([]);
        expect(actual).toEqual(0);
      });
    });
     describe('averageTestScore()', () => {
      it('should return the average of the values in the array', () => {
        const actual = funcs.averageTestScore([99, 60, 80, 85]);
        expect(actual).toEqual(81);
      });
    });
     describe('largestNumber()', () => {
      it('should return the largest number in the array', () => {
        const actual = funcs.largestNumber([1, 2, 9, 7]);
        expect(actual).toEqual(9);
      });
       it('should return the largest number in the array', () => {
        const actual = funcs.largestNumber([]);
        expect(actual).toEqual(0);
      });
    });
  });