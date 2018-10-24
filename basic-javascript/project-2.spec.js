const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe.only('project-2.spec.js', () => {
  
  describe('getBiggest()', () => {
    it('should return biggest value between x and y', () => {
      const expected = 5;
      expect(funcs.getBiggest(2,5)).toBe(expected);      
    });

    it('should return an error if x or y is not a number/missing/undefined', () => {
      const expected = 'Please enter an x-value and a y-value that is a number';
      expect(funcs.getBiggest([], {})).toBe(expected);
      expect(funcs.getBiggest([], undefined)).toBe(expected);
      expect(funcs.getBiggest([], null)).toBe(expected);
    });

    it('should return the: same-value message if x and y are the same', () => {
      const expected = 'Same Value';
      expect(funcs.getBiggest(5,5)).toBe(expected);
      expect(funcs.getBiggest(4.01,4.01)).toBe(expected);
    });
  });

  // describe('greeting()', () => {
  //   it('should return correct greeting from specified language', () => {
  //     const expected = 'Guten Tag!';

  //     expect(funcs.greeting('German')).toBe(expected);
  //     expect(funcs.greeting('Spanish')).toBe('Hola!');
  //   });

  //   it('should return an error if the language does not exist', () => {
  //     const expected = 'Please enter either: German, or Spanish';

  //     expect(funcs.greeting('French')).toBe(expected);
  //   });
  // })

  describe('isTenOrFive()', () => {
    it('should return true, if number is 10 or 5', () => {
      const expected = true;
      expect(funcs.isTenOrFive(10)).toBe(expected);
      expect(funcs.isTenOrFive(5)).toBe(expected);
    });

    it('should return an error if typeof num is not a number', () => {
      const expected = 'Please enter a number';
      expect(funcs.isTenOrFive('5', '10')).toBe(expected);
      expect(funcs.isTenOrFive()).toBe(expected);
    });
  });

  describe('isInRange()', () => {
    it('should return true if 20 < num < 50', () => {
      const expected = true;
      expect(funcs.isInRange(45)).toBe(expected);
    });

    it('should return false if num is NOT in between 20 and 50', () => {
      const expected = false;
      expect(funcs.isInRange(1)).toBe(expected);
      expect(funcs.isInRange(50.0000000000001)).toBe(expected);
    });

    it('should return an error if typeof num is not a number, or is missing', () => {
      const expected = 'Please enter a number';
      expect(funcs.isInRange('oof')).toBe(expected);
      expect(funcs.isInRange({})).toBe(expected);
      expect(funcs.isInRange(undefined)).toBe(expected);
    });
  });

  describe('isInterger()', () => {
    it('should return true if num is an integer', () => {
      const expected = true;
      expect(funcs.isInteger(5)).toEqual(expected);
      expect(funcs.isInteger(4)).toEqual(expected);
    });

    it('should return an error if typeof num is not an integer/is missing', () => {
      const expected = 'Please enter an integer (number with no decimal values)';
      expect(funcs.isInteger()).toEqual(expected);
      expect(funcs.isInteger({})).toBe(expected);
      expect(funcs.isInteger(5.01)).toBe(expected);
      expect(funcs.isInteger('oof')).toBe(expected);
    });
  });

  describe('fizzBuzz()', () => {
    it('should return fizzbus, buzz, or fizz, depending on conditionals', () => {
      const expected = 'fizzbuzz';

      expect(funcs.fizzBuzz(15)).toEqual(expected);
      expect(funcs.fizzBuzz(25)).toEqual('buzz');
      expect(funcs.fizzBuzz(9)).toEqual('fizz');
    });

    it('should return an error when not given a number', () => {
      const expected = 'Please enter a number';

      expect(funcs.fizzBuzz('oof')).toEqual(expected);
      expect(funcs.fizzBuzz(undefined)).toEqual(expected);
    });
  });

  describe('returnFirst()', () => {
    it('should return first item in given array', () => {
      const expected = 'wizard';

      expect(funcs.returnFirst(['wizard', 'rogue', 'priest', 'warrior'])).toEqual(expected);
    });

    it('should return an error if given something that is not an array', () => {
      const expected = 'Please give an array';

      expect(funcs.returnFirst()).toEqual(expected);
      expect(funcs.returnFirst(newClass = {name: 'Samurai'})).toEqual(expected);
    });
  });

  describe('returnLast()', () => {
    it('should return last item in array', () => {
      const expected = 'warrior';

      expect(funcs.returnLast(['wizard', 'rogue', 'priest', 'warrior'])).toEqual(expected);
    });

    it('should return an error when given something that is not an array', () => {
      const expected = 'Please give an array';

      expect(funcs.returnLast()).toEqual(expected);
      expect(funcs.returnLast(newClass = {name: 'Necromancer'})).toEqual(expected);
    });
  });

  describe('getArrayLength()', () => {
    it('should return the length of any given array', () => {
      const expected = 4;

      expect(funcs.getArrayLength(['wizard', 'rogue', 'priest', 'warrior'])).toEqual(expected);
      expect(funcs.getArrayLength(['wizard', 'rogue', 'priest', 'warrior', 'paladin', 'knight'])).toEqual(6);
    });

    it('should return an error when given something that is not an array', () => {
      const expected = 'Please give an array';

      expect(funcs.getArrayLength()).toEqual(expected);
      expect(funcs.getArrayLength(newClass = {name: 'Ninja'})).toEqual(expected);
    });
  });

  describe('incrementByOne()', () => {
    it('should increment all items in array by one', () => {
      const expected = [2,3,4,5,6];

      expect(funcs.incrementByOne([1,2,3,4,5])).toEqual(expected);
      expect(funcs.incrementByOne([2,3,4,5,6])).toEqual([3,4,5,6,7]);
    });

    it('should return an error if not an array, or if no array is given', () => {
      const expected = 'Please give an array';

      expect(funcs.incrementByOne('oof')).toEqual(expected);
      expect(funcs.incrementByOne(newClass = {name: 'mystic'})).toEqual(expected);
      expect(funcs.incrementByOne(undefined)).toEqual(expected);
    });

    it('should return an error if item in array is NOT a number', () => {
      const expected = 'Please make items in array, a number';

      expect(funcs.incrementByOne(['oof', 'oOoof', 'oOOOOoooOF', 'OOF'])).toEqual(expected);
      expect(funcs.incrementByOne([null])).toEqual(expected);
      expect(funcs.incrementByOne([{}, {}])).toEqual(expected);
    });
  });

  describe('addItemToArray()', () => {
    it('should push an item to a given array', () => {
      const expected = ['warrior', 'paladin', 'knight'];

      expect(funcs.addItemToArray(expected, 'knight')).toEqual(expected);
    });

    it('should return an error when not given an array, item, or if the array given, is not an array', () => {
      const expected = 'Please ensure to: give an array AND an item to add to the array';

      expect(funcs.addItemToArray({}, 'priest')).toEqual(expected);
      expect(funcs.addItemToArray(oof = {oof: 'oof'}, 'priest')).toEqual(expected);
    });
  });

  describe('addItemToFront()', () => {
    it('should add item to front of list', () => {
      const expected = ['warrior', 'paladin', 'knight'];

      expect(funcs.addItemToFront(['paladin', 'knight'], 'warrior')).toEqual(expected);
    });

    it('should return an error when not given an array, item, or if the array given, is not an array', () => {
      const expected = 'Please ensure to: give an array AND an item to add to the array';

      expect(funcs.addItemToFront({}, 'priest')).toEqual(expected);
      expect(funcs.addItemToFront(oof = {oof: 'oof'}, 'priest')).toEqual(expected);
    });
  });

  describe('wordsToSentence()', () => {
    it('should return a sentence when given an array of strings', () => {
      const expected = 'Then the legendary man said OOF';

      expect(funcs.wordsToSentence(['Then', 'the', 'legendary', 'man', 'said', 'OOF'])).toEqual(expected);
    });

    it('should return an error if it is not given an array, nor if the items in the array are not strings, or if the array is empty', () => {
      const expected = 'Please give an array of STRINGS, so we can STRING together a sweet sentence for you!';

      expect(funcs.wordsToSentence('oof')).toEqual(expected);
      expect(funcs.wordsToSentence({})).toEqual(expected);
      expect(funcs.wordsToSentence([1,2,3,4, 'how many monsters are knocking at my door'])).toEqual(expected);
      expect(funcs.wordsToSentence([])).toEqual(expected);
    });
  });

  describe('contains()', () => {
    it('should return true if the item is inside the array', () => {
      const expected = true;

      expect(funcs.contains(['warrior', 'paladin', 'knight'], 'warrior')).toEqual(expected);
    });

    it('should return false if given item is not in array', () => {
      const expected = false;

      expect(funcs.contains(['warrior'], 'oof')).toEqual(expected);
      expect(funcs.contains(['oof'], 'warrior')).toEqual(expected);
    });

    it('should return an error if an array is not given, or if an item is never given', () => {
      const expected = 'Please give an array and/or an item to check for';

      expect(funcs.contains('oof', 'oof')).toEqual(expected);
      expect(funcs.contains({}, 'oof')).toEqual(expected);
    });
  });

  describe('addNumbers()', () => {
    it('should add all numbers in a given array together', () => {
      const expected = 10;

      expect(funcs.addNumbers([1,2,3,4])).toEqual(expected);
      expect(funcs.addNumbers([5,5])).toEqual(expected);
    });

    it('should return an error if numbers is not an array, or if items in the array are not numbers', () => {
      const expected = 'Please give an ARRAY of NUMBERS';

      expect(funcs.addNumbers(['one', 'two'])).toEqual(expected);
      expect(funcs.addNumbers([])).toEqual(expected);
    });
  });

  describe('averageTestScore()', () => {
    it('should return the average test score from a given array of numbers', () => {
      const expected = 2;

      expect(funcs.averageTestScore([2,2])).toEqual(expected);      
    });

    it('should return an error if no array is given, or if items in the array are not numbers', () => {
      const expected = 'Please give an ARRAY of NUMBERS';

      expect(funcs.averageTestScore()).toEqual(expected);
      expect(funcs.averageTestScore(['oof', 'twoof', {}, []])).toEqual(expected);
    });
  });

  describe('largestNumber()', () => {
    it('should return the largest number in a given array', () => {
      const expected = 6;

      expect(funcs.largestNumber([1,2,6,4,5])).toEqual(expected);
    });

    it('should return an error if numbers is not an array, or if the items in the array are not numbers', () => {
      const expected = 'Please give an ARRAY of NUMBERS';

      expect(funcs.largestNumber([[], 'oof', undefined])).toEqual(expected);
    });
  });

});