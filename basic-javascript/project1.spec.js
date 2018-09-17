const helpers = require('./project1');

// start testing!
describe('multiply by ten', () => {
    test('Should multiply a number by ten', () => {
      expect(helpers.multiplyByTen(2)).toEqual(20);
      expect(helpers.multiplyByTen(10)).toEqual(100);
      expect(helpers.multiplyByTen(6.5)).toEqual(65);
      expect(helpers.multiplyByTen(-2)).toEqual(-20);
    })
    test('Should return false if value is undefined', () => {
      expect(helpers.multiplyByTen(undefined)).toEqual(false)
    })
  })

  describe('subtract by five', () => {
      test('Should subtract a number by five', () => {
          expect(helpers.subtractFive(10)).toEqual(5);
          expect(helpers.subtractFive(5)).toEqual(0); 
          expect(helpers.subtractFive(-10)).toEqual(-15); 
      })
  })

  describe('are same length', () => {
      test('should return true if strings are equal in length', () => {
          expect(helpers.areSameLength('dog', 'cat')).toEqual(true); 
          expect(helpers.areSameLength('ant', 'ladybug')).toEqual(false); 
          expect(helpers.areSameLength(2, 'two')).toEqual(false); 
      })
  })

  describe('are equal', ()=>{
      test("should return true if x and y are equal", () => {
          expect(helpers.areEqual(2, 2)).toEqual(true); 
          expect(helpers.areEqual(3, 5)).toEqual(false); 
          expect(helpers.areEqual(undefined, 3)).toEqual(false); 
      })
  })

  describe('less than ninety', ()=>{
      test('should return true if number is less than ninety', () =>{
          expect(helpers.lessThanNinety(9)).toEqual(true); 
          expect(helpers.lessThanNinety(100)).toEqual(false); 
          expect(helpers.lessThanNinety("nine")).toEqual(false); 
      })
  })

  describe('greater than fifty', ()=>{
    test('should return true if number is greater than fifty', () =>{
        expect(helpers.greaterThanFifty(55)).toEqual(true); 
        expect(helpers.greaterThanFifty(10)).toEqual(false); 
        expect(helpers.greaterThanFifty("five")).toEqual(false); 
    })
})

describe('add', () => {
    test('add two numbers together', () => {
        expect(helpers.add(2, 3)).toEqual(5); 
        expect(helpers.add(undefined, 3)).toEqual(false); 
    })
})

describe('subtract', () => {
    test('subtract two numbers together', () => {
        expect(helpers.subtract(5, 3)).toEqual(2); 
        expect(helpers.subtract(undefined, 3)).toEqual(false); 
    })
})

describe('divide', () => {
    test('divide two numbers together', () => {
        expect(helpers.divide(6, 3)).toEqual(2); 
        expect(helpers.divide(undefined, 3)).toEqual(false); 
    })
})

describe('multiply', () => {
    test('multiply two numbers together', () => {
        expect(helpers.multiply(5, 5)).toEqual(25); 
        expect(helpers.multiply(undefined, 3)).toEqual(false); 
    })
})

describe('get remainder', () => {
    test('get the remainder of two numbers together', () => {
        expect(helpers.getRemainder(10, 5)).toEqual(0); 
        expect(helpers.getRemainder(24, 5)).toEqual(4); 
        expect(helpers.getRemainder(undefined, 3)).toEqual(false); 
    })
})

describe('is even', () => {
    test("return true if the number is even", () => {
        expect(helpers.isEven(2)).toEqual(true); 
        expect(helpers.isEven(11)).toEqual(false); 
        expect(helpers.isEven(undefined)).toEqual(false); 
    })
})

describe('is odd', () => {
    test("return true if the number is odd", () => {
        expect(helpers.isOdd(2)).toEqual(false); 
        expect(helpers.isOdd(11)).toEqual(true); 
        expect(helpers.isOdd(undefined)).toEqual(false); 
    })
})

describe('square', () => {
    test("should square the number", () => {
        expect(helpers.square(2)).toEqual(4); 
        expect(helpers.square(6)).toEqual(36); 
        expect(helpers.square(undefined)).toEqual(false); 
    })
})

