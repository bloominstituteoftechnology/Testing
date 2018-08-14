const helpers = require('./project-1');

// start testing!

describe('Basic JS Helpers', () => {
  
  describe('The function multiplyByTen(input)', () => {
    it('should multiply the input by 10', () => {
      expect(helpers.multiplyByTen(3)).toEqual(30);
      expect(helpers.multiplyByTen(0)).toEqual(0);
      expect(helpers.multiplyByTen('1234')).toEqual('the input must be a number');
      expect(helpers.multiplyByTen(undefined)).toEqual('the input must be a number');
      expect(helpers.multiplyByTen()).toEqual('the input must be a number');
    })
  })

  describe('The function subtractFive(input)', () => {
    it('should subtract five from the input', () => {
      expect(helpers.subtractFive(3)).toEqual(-2);
      expect(helpers.subtractFive(0)).toEqual(-5);
      expect(helpers.subtractFive('1234')).toEqual('the input must be a number');
      expect(helpers.subtractFive(undefined)).toEqual('the input must be a number');
      expect(helpers.subtractFive()).toEqual('the input must be a number');
    })
  })

  describe('The function areSameLength(str1, str2)', () => {
    it('should test if str1 and str2 have the same length', () => {
      expect(helpers.areSameLength('test', 'fest')).toEqual(true);
      expect(helpers.areSameLength('frog','smog')).toEqual(true);
      expect(helpers.areSameLength('frog','froggy')).toEqual(false);
      expect(helpers.areSameLength('1234')).toEqual('two strings are required as inputs');
      expect(helpers.areSameLength('1234', 50)).toEqual('both inputs must be a string');
      expect(helpers.areSameLength(undefined)).toEqual('two strings are required as inputs');
      expect(helpers.areSameLength()).toEqual('two strings are required as inputs');
    })
  })

  describe('The function areEqual(x, y)', () => {
    it('should test if x and y number are equal', () => {
      expect(helpers.areEqual(5, 5)).toEqual(true);
      expect(helpers.areEqual(-5, -5)).toEqual(true);
      expect(helpers.areEqual(5,'5')).toEqual('both inputs must be a number');
      expect(helpers.areEqual(5)).toEqual('two numbers are required as inputs');
      expect(helpers.areEqual()).toEqual('two numbers are required as inputs');
    })
  })

  describe('The function lessThanNinety(input)', () => {
    it('should test if input is less than 90', () => {
      expect(helpers.lessThanNinety(89)).toEqual(true);
      expect(helpers.lessThanNinety(-89)).toEqual(true);
      expect(helpers.lessThanNinety(91)).toEqual(false);
      expect(helpers.lessThanNinety('5')).toEqual('the input must be a number');
      expect(helpers.lessThanNinety()).toEqual('a number is required as input');
    })
  })

  describe('The function greaterThanFifty(input)', () => {
    it('should test if input is greater than 50', () => {
      expect(helpers.greaterThanFifty(89)).toEqual(true);
      expect(helpers.greaterThanFifty(-89)).toEqual(false);
      expect(helpers.greaterThanFifty('5')).toEqual('the input must be a number');
      expect(helpers.greaterThanFifty()).toEqual('a number is required as input');
    })
  })

  describe('The function add(x,y)', () => {
    it('should test if the sum of x and y is correct', () => {
      expect(helpers.add(4,5)).toEqual(9);
      expect(helpers.add(-5,5)).toEqual(0);
      expect(helpers.add(-5,"5")).toEqual('both inputs must be a number');
      expect(helpers.add('5')).toEqual('two numbers are required as inputs');
      expect(helpers.add()).toEqual('two numbers are required as inputs');
    })
  })

  describe('The function subtract(x,y)', () => {
    it('should test if the difference of x and y is correct', () => {
      expect(helpers.subtract(4,5)).toEqual(-1);
      expect(helpers.subtract(-5,5)).toEqual(-10);
      expect(helpers.subtract(-5,"5")).toEqual('both inputs must be a number');
      expect(helpers.subtract('5')).toEqual('two numbers are required as inputs');
      expect(helpers.subtract()).toEqual('two numbers are required as inputs');
    })
  })

  describe('The function divide(x,y)', () => {
    it('should test if the quotient of x and y is correct', () => {
      expect(helpers.divide(1,2)).toEqual(0.5);
      expect(helpers.divide(1,3)).toEqual(0.3333333333333333);
      expect(helpers.divide(0,5)).toEqual(0);
      expect(helpers.divide(5,0)).toEqual('divisor can not be zero');
      expect(helpers.divide(-5,"5")).toEqual('both inputs must be a number');
      expect(helpers.divide('5')).toEqual('two numbers are required as inputs');
      expect(helpers.divide()).toEqual('two numbers are required as inputs');
    })
  })

  describe('The function multiply(x,y)', () => {
    it('should test if the product of x and y is correct', () => {
      expect(helpers.multiply(1,2)).toEqual(2);
      expect(helpers.multiply(-5,3)).toEqual(-15);
      expect(helpers.multiply(0,5)).toEqual(0);
      expect(helpers.multiply(-5,"5")).toEqual('both inputs must be a number');
      expect(helpers.multiply('5')).toEqual('two numbers are required as inputs');
      expect(helpers.multiply()).toEqual('two numbers are required as inputs');
    })
  })

  describe('The function getRemainder(x,y)', () => {
    it('should test if the product of x and y is correct', () => {
      expect(helpers.getRemainder(1,2)).toEqual(1);
      expect(helpers.getRemainder(2,0)).toEqual('divisor can not be zero');
      expect(helpers.getRemainder(0,5)).toEqual(0);
      expect(helpers.getRemainder(-5,"5")).toEqual('both inputs must be a number');
      expect(helpers.getRemainder('5')).toEqual('two numbers are required as inputs');
      expect(helpers.getRemainder()).toEqual('two numbers are required as inputs');
    })
  })

  describe('The function isEven(num)', () => {
    it('should test if num is even', () => {
      expect(helpers.isEven(2)).toEqual(true);
      expect(helpers.isEven(3)).toEqual(false);
      expect(helpers.isEven(0)).toEqual(true);
      expect(helpers.isEven("5")).toEqual('the input must be a number');
      expect(helpers.isEven()).toEqual('a number is required as input');
    })
  })

})