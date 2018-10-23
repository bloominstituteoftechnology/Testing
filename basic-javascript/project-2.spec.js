const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe.only('project-2.js', () => {
  describe('checks the biggest number', () => {
    it('x returned if it is greater', () => {
      expect(funcs.getBiggest(9, 5)).toBe(9);
    });

    it('y is greater than x', () => {
      expect(funcs.getBiggest(9, 12)).toBe(12);
    });

    it('if they are equal they return the the number', () => {
      expect(funcs.getBiggest(5, 5)).toBe(5);
    });
  }); //the biggest number

  describe('greeting', () => {
    it('respond in german', () => {
      expect(funcs.greeting('German')).toBe('Guten Tag!');
    });

    it('respond in spanish', () => {
      expect(funcs.greeting('Spanish')).toBe('Hola!');
    });

    it('respond default', () => {
      expect(funcs.greeting('Hi')).toBe('Hello!');
    });

    it('returns null if not a string', () => {
      expect(funcs.greeting(78)).toBeNull();
    });
  }); //greeting

  describe('checks to see if ten or five', () => {
    it('check to if it is true with ten', () => {
      expect(funcs.isTenOrFive(10)).toBeTruthy();
    });

    it('check to if it is true with five', () => {
      expect(funcs.isTenOrFive(5)).toBeTruthy();
    });

    it('check to if it is false with numbers not 10 or 5', () => {
      expect(funcs.isTenOrFive(7)).toBeFalsy();
    });

    it('return null if not a number', () => {
      expect(funcs.isTenOrFive('7')).toBeNull();
    });
  }); //is ten or five

  describe('is it in range', () => {
    it('number is range will be true', () => {
      expect(funcs.isInRange(30)).toBeTruthy();
    }); //number is in range

    it('higher than range', () => {
      expect(funcs.isInRange(60)).toBeFalsy();
    });

    it('lower than range', () => {
      expect(funcs.isInRange(10)).toBeFalsy();
    });

    it('return null if not a number', () => {
      expect(funcs.isInRange('7')).toBeNull();
    });
  }); //check to see if number it in range

  describe('is it an integer?', () => {
    it('check to see integer function will return true', () => {
      expect(funcs.isInteger(4)).toBeTruthy();
    });

    it('check to see if integer function will retrun false', () => {
      expect(funcs.isInteger(4.8)).toBeFalsy();
    });

    it('return null if not a number', () => {
      expect(funcs.isInteger('6.3')).toBeNull();
    });
  }); //is an Integer

  describe('fizzbuzz', () => {
    it('gets fizzbuzz', () => {
      expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
    });

    it('gets buzz', () => {
      expect(funcs.fizzBuzz(20)).toBe('buzz');
    });

    it('gets fizz', () => {
      expect(funcs.fizzBuzz(12)).toBe('fizz');
    });

    it('gets number if it is not divisible by 3 or 5', () => {
      expect(funcs.fizzBuzz(19)).toBe(19);
    });
  }); //fizzbuzz

  describe('gets a prime', () => {
    it('it is a prime', () => {
      expect(funcs.isPrime(7)).toBeTruthy();
      expect(funcs.isPrime(11)).toBeTruthy();
    });

    it('checks that 1 returns false', () => {
      expect(funcs.isPrime(1)).toBeFalsy();
    });

    it('checks that 0 returns false', () => {
      expect(funcs.isPrime(0)).toBeFalsy();
    });

    it('checks that non primes are false', () => {
      expect(funcs.isPrime(10)).toBeFalsy();
      expect(funcs.isPrime(20)).toBeFalsy();
    });
  }); //prime function

  describe('return the first or last values', () => {
    describe('return the first', () => {
      it('returns the first value of the array', () => {
        expect(funcs.returnFirst(['first', 'hi', 'last'])).toBe('first');
      });

      it('return null if not an array', () => {
        expect(funcs.returnFirst(1)).toBeNull();
      });
    }); //return First value

    describe('returns the last value of the array', () => {
      it('returns the last value of the array', () => {
        expect(funcs.returnLast(['first', 'hi', 'last'])).toBe('last');
      });

      it('return null if not an array', () => {
        expect(funcs.returnLast(1)).toBeNull();
      });
    }); //return last value
  }); //return first and last array

  describe('get the array length', () => {
    it('get the array length', () => {
      const arr1 = ['1', 'hi', 6];
      expect(funcs.getArrayLength(arr1)).toBe(3);
    });

    it('return null if not an array', () => {
      expect(funcs.getArrayLength(1)).toBeNull();
    });
  }); //get array length

  describe('increment by one', () => {
    it('incrments the numbers in an array', () => {
      expect(funcs.incrementByOne([1, 5, 3, 5])).toEqual([2, 6, 4, 6]);
    });

    it('return array with increased numbers and same strings', () => {
      expect(funcs.incrementByOne([1, 'hi', '8', 6])).toEqual([
        2,
        'hi',
        '8',
        7,
      ]);
    });

    it('return null if not an array', () => {
      expect(funcs.incrementByOne(1)).toBeNull();
    });
  }); //increment by one

  describe('add items to an array', () => {
    describe('add item to an array', () => {
      const arr = ['yes', 'no', 'hi'];
      it('add an item to an array', () => {
        expect(funcs.addItemToArray(arr, 'me')).toEqual([
          'yes',
          'no',
          'hi',
          'me',
        ]);
      });

      it('return null if not an array', () => {
        expect(funcs.addItemToArray(1)).toBeNull();
      });
    }); //add items to array

    describe('add item to the front of the array', () => {
      it('add item to the array', () => {
        const arr = ['yes', 'no', 'hi'];
        expect(funcs.addItemToFront(arr, 'yo')).toEqual([
          'yo',
          'yes',
          'no',
          'hi',
        ]);
      });

      it('return null if not an array', () => {
        expect(funcs.addItemToFront(1)).toBeNull();
      });
    }); //add items to the front
  }); //add items to an array

  describe('words to sentences', () => {
    it('the correct value', () => {
      const words = ['hi', 'how', 'are', 'you'];
      expect(funcs.wordsToSentence(words)).toEqual('hi how are you');
    });

    it('return null make sure all of the values are a string', () => {
      expect(funcs.wordsToSentence(['hi', 5, 'are', 'you'])).toBeNull();
    });

    it('return null if not an array', () => {
      expect(funcs.addItemToFront(1)).toBeNull();
    });
  }); //words added to sentence

  describe('contains', () => {
    it('how many items in the array', () => {
      const arr = ['mom', 'mom', 'what', 'hi'];

      expect(funcs.contains(arr, 'mom')).toBeTruthy();
    });

    it('none of the item returns false in the array', () => {
      const arr = ['mom', 'mom', 'what', 'hi'];

      expect(funcs.contains(arr, 'you')).toBeFalsy();
    });

    it('return null if not an array', () => {
      expect(funcs.contains(1)).toBeNull();
    });
  }); //contians

  describe('add number array', () => {
    it('add number array together', () => {
      const numbers = [1, 5, 3, 6, 9];

      expect(funcs.addNumbers(numbers)).toBe(24);
    });

    it('return null if there are non number in the array', () => {
      expect(funcs.addNumbers([4, 6, '7'])).toBeNull();
    });

    it('return 0 if not an array', () => {
      expect(funcs.addNumbers(1)).toBe(0);
    });
  }); //add number array

  describe('average test score', () => {
    it('average test score', () => {
      const testScores = [100, 46, 78, 23, 90];

      expect(funcs.averageTestScore(testScores)).toBeCloseTo(67.4, 2);
    });

    it('one test score in array', () => {
      const testScores = [77];
      expect(funcs.averageTestScore(testScores)).toBe(77);
    });

    it('return null if not in an array', () => {
      const testScores = 100;
      expect(funcs.averageTestScore(testScores)).toBeNull();
    });

    it('return null if there are non number in testScores', () => {
      expect(funcs.averageTestScore([4, 6, '7'])).toBeNull();
    });
  }); //average test scores

  describe('largest nummber', () => {
    it('check for larget number', () => {
      const numbers = [1, 5, 3, 6, 20, 7];

      expect(funcs.largestNumber(numbers)).toBe(20);
    });

    it('one number with array', () => {
      const numbers = [1];

      expect(funcs.largestNumber(numbers)).toBe(1);
    });

    it('return null if not an array', () => {
      const numbers = 1;

      expect(funcs.largestNumber(numbers)).toBeNull();
    });

    it('return null if there are non number in numbers', () => {
      expect(funcs.largestNumber([4, 6, '7'])).toBeNull();
    });
  }); //largest number
}); //project-2
