const funcs = require('./project-2');



describe('getBiggest', () => {
    it('returns biggest number', () => {
        expect(funcs.getBiggest(3, 4)).toBe(4);
        expect(funcs.getBiggest(-3, 0)).toBe(0);
        expect(funcs.getBiggest(100, 100)).toBe(100);
    });
});

describe('greeting', () => {
    it('returns greeting in language case provided', () => {
        expect(funcs.greeting('German')).toBe('Guten Tag!');
        expect(funcs.greeting('')).toBe('Hello!');
        expect(funcs.greeting('Spanish')).toBe('Hola!');
        expect(funcs.greeting('language')).toBe('Hello!');
        expect(funcs.greeting('76')).toBe('Hello!');
        expect(funcs.greeting(76)).toBe('Hello!');
        expect(funcs.greeting(true)).toBe('Hello!');
        expect(funcs.greeting(null)).toBe('Hello!');
    });
});

describe('isTenOrFive', () => {
    it('returns true if number is 10 or 5', () => {
      expect(funcs.isTenOrFive(10)).toBeTruthy();
      expect(funcs.isTenOrFive(5)).toBeTruthy();
      expect(funcs.isTenOrFive(1)).toBeFalsy();
    });
    it('returns NaN for a non numeric value', () => {
        expect(funcs.isTenOrFive('two')).toBeFalsy();
        expect(funcs.isTenOrFive(undefined)).toBeFalsy();
    });
  });

  describe('inInRange', () => {
    it('returns boolean if num is between 21 and 49', () => {
      expect(funcs.isInRange(21)).toBeTruthy();
      expect(funcs.isInRange(49)).toBeTruthy();
      expect(funcs.isInRange(0)).toBeFalsy();
      expect(funcs.isInRange(.4)).toBeFalsy();
    })
    it('returns NaN for a non numeric value', () => {
        expect(funcs.isInRange('two')).toBeFalsy();
        expect(funcs.isInRange(undefined)).toBeFalsy();
    });
  });

  describe('isInteger', () => {
    it('returns boolean is num is a whole number', () => {
      expect(funcs.isInteger(7)).toBeTruthy();
      expect(funcs.isInteger(8.3)).toBeFalsy();
      expect(funcs.isInteger(0)).toBeTruthy();
    })
    it('returns NaN for a non numeric value', () => {
        expect(funcs.isInteger('two')).toBeFalsy();
        expect(funcs.isInteger(undefined)).toBeFalsy();
    });
  });

  describe('fizzbuzz', () => {
    it('returns the right version of the word fizzbuzz', () => {
      expect(funcs.fizzBuzz(5)).toEqual('buzz');
      expect(funcs.fizzBuzz(3)).toEqual('fizz');
      expect(funcs.fizzBuzz(2)).toEqual(2);
    })
  });

  describe('isPrime', () => {
    it('returns boolean if number is prime', () => {
      expect(funcs.isPrime(11)).toBeTruthy();
      expect(funcs.isPrime(12)).toBeFalsy();
    })
  })

  describe('returnFirst', () => {
    it('returns the first index of an array', () => {
      expect(funcs.returnFirst([23, 4, 3, 7])).toEqual(23);
      expect(funcs.returnFirst(['hi', 'hello'])).toEqual('hi');
    });
  });

  describe('returnLast', () => {
    it('returns the last index of an array', () => {
      expect(funcs.returnLast([8, 2, 4, 5])).toEqual(5);
      expect(funcs.returnLast(['hi', 'hello'])).toEqual('hello');
    })
  });

  describe('getArrayLength', () => {
    it('returns the length of an array or string', () => {
      expect(funcs.getArrayLength([1, 2, 3, 4, 5, 6])).toEqual(6);
      expect(funcs.getArrayLength('Anne')).toEqual(4);
      expect(funcs.getArrayLength(['Anne', 2])).toEqual(2);
    })
  });

  describe('incrementByOne', () => {
    it('increments each index by one', () => {
      expect(funcs.incrementByOne([4, 5, 6])).toEqual([5, 6, 7]);
    });
  });

  describe('addItemToArray', () => {
    it('pushes new values into array', () => {
      expect(funcs.addItemToArray([23, 4, 1], 8)).toEqual([23, 4, 1, 8]);
      expect(funcs.addItemToArray(['hi', 'hello', 'morning'],'afternoon')).toEqual(['hi', 'hello', 'morning','afternoon']);
    })
  });


  describe('addItemToFront', () => {
    it('adds a new value to the beginning of array', () => {
      expect(funcs.addItemToFront([1, 2, 3], 4)).toEqual([4, 1, 2, 3]);
    })
  });


  describe('wordsToSentence', () => {
    it('returns an array of strings sentence', () => {
      expect(funcs.wordsToSentence(['Cute', 'cat!'])).toEqual('Cute cat!');
    })
  });

  describe('contains', () => {
    it('returns true if item is found in array', () => {
      expect(funcs.contains([2, 2, 1], 1)).toBeTruthy();
      expect(funcs.contains([2, 2, 2], 4)).toBeFalsy();
      expect(funcs.contains(['cat'], 'cat')).toBeTruthy();
    })
  });

  describe('addNumbers', () => {
    it('returns the sum from an array of nums', () => {
      expect(funcs.addNumbers([2, 2])).toEqual(4);
      expect(funcs.addNumbers([20, .5])).toEqual(20.5);
    })
  });

  describe('averageTestScore', () => {
    it('returns the average from an array of nums', () => {
      expect(funcs.averageTestScore([4, 5, 6])).toEqual(5);
      expect(funcs.averageTestScore([-5, 0, 5])).toEqual(0);
    })
  });

  describe('largestNumber', () => {
    it('returns the largest number from an array of nums', () => {
      expect(funcs.largestNumber([50, 5, 33])).toEqual(50);
      expect(funcs.largestNumber([0, 0, 0])).toEqual(0);
      expect(funcs.largestNumber([.5, -5, 0])).toEqual(.5);
    })
  });

// module.exports = {
//     getBiggest,
//     greeting,
//     isTenOrFive,
//     isInRange,
//     isInteger,
//     fizzBuzz,
//     isPrime,
//     returnFirst,
//     returnLast,
//     getArrayLength,
//     incrementByOne,
//     addItemToArray,
//     addItemToFront,
//     wordsToSentence,
//     contains,
//     addNumbers,
//     averageTestScore,
//     largestNumber
//   };
  