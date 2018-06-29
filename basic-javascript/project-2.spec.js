const funcs = require('./project-2');
require('jest-extended');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe.skip('project-2', () => {

  describe('getBiggest', () => {
    const expected = 10;
    const actual = funcs.getBiggest(9, 10);
    it('should return 10 given 9 and 10', () => {
      expect(actual).toBe(expected);
    })  
  })

  describe('greeting', () => {
    const expected = 'Hello!';
    const actual = funcs.greeting('Hey');
    it('should return hello given Hey', () => {
      expect(actual).toBe(expected)
    })
  })

  describe('isTenOrFive', () => {
    const actual = funcs.isTenOrFive(7);
    it('should return false given 7', () => {
      expect(actual).toBeFalse();
    })
  })

  describe('isInRange', () => {
    it('should return true given 30', () => {
      let expected = 30;
      expect(expected).toBeWithin(20, 50);
    })
    it('should return true given 30', () => {
      let actual = funcs.isInRange(30);
      expect(actual).toBeTrue();
    })
  })

  describe('isInteger', () => {
    const actual = funcs.isInteger(5.2);
    it('should return false given 5.2', () => {
      expect(actual).toBeFalse();
    })
  })

  describe('fizzBuzz', () => {
    it('should return fizzbuzz given 30', () => {
      let expected = 'fizzbuzz';
      let actual = funcs.fizzBuzz(30);
      expect(actual).toBe(expected);
    })
    it('should return buzz given 20', () => {
      let expected = 'buzz'
      let actual = funcs.fizzBuzz(20);
      expect(actual).toBe(expected);
    })
    it('should return fizz given 9', () => {
      let expected = 'fizz'
      let actual = funcs.fizzBuzz(9);
      expect(actual).toBe(expected);
    })
    it('should return 86 given 86', () => {
      let actual = funcs.fizzBuzz(86);
      expect(actual).not.toBe('fizzbuzz');
      expect(actual).not.toBe('buzz');
      expect(actual).not.toBe('fizz');
    })
    it('should return 133 given 133', () => {
      let actual = funcs.fizzBuzz(133);
      expect(actual).not.toBe('fizzbuzz');
      expect(actual).not.toBe('buzz');
      expect(actual).not.toBe('fizz');
    })
  })

  describe('isPrime', () => {
    it('should return true given 26', () => {
      let expected = 26;
      let actual = funcs.isPrime(expected);
      expect(actual).toBeFalse();
    })
  })

  describe('returnFirst', () => {
    it('should return 1 given [1,2,3]', () => {
      let expected = 1;
      let actual = funcs.returnFirst([1, 2, 3]);
      expect(actual).toBe(1);
    })
  })

  describe('returnLast', () => {
    it('should return 3 given [1,2,3]', () => {
      let expected = 3;
      let actual = funcs.returnLast([1, 2, 3]);
      expect(actual).toBe(expected);
    })
  })

  describe('getArrayLength', () => {
    it('should return 4 given [1,2,3,4]', () => {
      let arr = [1,2,3,4];
      let actual = funcs.getArrayLength(arr);
      expect(arr).toBeArrayOfSize(actual);
    })
  })
  
  describe('incrementByOne', () => {
    it('should return [2,3,4] given [1,2,3]', () => {
      let expected = [2,3,4];
      let actual = funcs.incrementByOne([1,2,3]);
      expect(actual).toEqual(expected);
    })
  })

  describe('addItemToArray', () => {
    it('should return [1,2,3] given [1,2] and 3', () => {
      let expected = [1,2,3];
      let actual = funcs.addItemToArray([1,2], 3);
      expect(actual).toEqual(expected);
    })
  })

  describe('addItemToFront', () => {
    it('should return [1,2,3,4] given [2,3,4] and 1', () => {
      let expected = [1,2,3,4];
      let actual = funcs.addItemToFront([2,3,4], 1);
      expect(actual).toEqual(expected);
    })
  })

  describe('contains', () => {
    it('should return true given [1,2,3,4] and 2', () => {
      let actual = funcs.contains([1,2,3,4], 2);
      expect(actual).toBeTrue();
    })
    it('should return false given [1,2,3,4] and 5', () => {
      let actual = funcs.contains([1,2,3,4], 5);
      expect(actual).toBeFalse();
    })
  })

  describe('largestNumber', () => {
    it('should return 5 given [1,5,3,4]', () => {
      let arr = [1,5,3,4];
      let expected = arr.reduce((acc, num) => acc > num ? acc : num);
      let actual = funcs.largestNumber(arr);
      expect(actual).toBe(expected);
    })
  })  

})