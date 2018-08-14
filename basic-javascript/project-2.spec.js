const funcs = require('./project-2');
require('jest-extended');


// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('project-2', () => {

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
})
