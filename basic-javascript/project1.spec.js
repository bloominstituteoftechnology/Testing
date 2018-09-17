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

describe('cube', () => {
    test("should cube the number", () => {
        expect(helpers.cube(3)).toEqual(27); 
        expect(helpers.cube(10)).toEqual(1000); 
        expect(helpers.cube(undefined)).toEqual(false); 
    })
})

describe('raise to power', () => {
    test("should give number and exponent and multiply itself that many times", () => {
        expect(helpers.raiseToPower(2, 4)).toEqual(16); 
        expect(helpers.raiseToPower(3, 5)).toEqual(243); 
        expect(helpers.raiseToPower(undefined, 4)).toEqual(false); 
    })
})

describe('round number', () => {
    test("should round a number up or down", () => {
        expect(helpers.roundNumber(3.5)).toEqual(4);
        expect(helpers.roundNumber(4.3)).toEqual(4); 
        expect(helpers.roundNumber(undefined)).toEqual(false); 
    })
})

describe('round up', () => {
    test("should round a number up", () => {
        expect(helpers.roundUp(3.5)).toEqual(4);
        expect(helpers.roundUp(4.3)).toEqual(5); 
        expect(helpers.roundUp(undefined)).toEqual(false); 
    })
})

describe("add exclamation point", () => {
    test("should return a exclamation point to the end of a string", () =>{
        expect(helpers.addExclamationPoint("Hi")).toEqual("Hi!"); 
        expect(helpers.addExclamationPoint(undefined)).toEqual(false); 
    })
})

describe("combine names", () => {
    test("should combine the names", () => {
        expect(helpers.combineNames("keith", "kennedy")).toEqual("keith kennedy"); 
        expect(helpers.combineNames(undefined, "smith")).toEqual(false); 
    }) 
})

describe("got greeting", () => {
    test("should say hello and then name", () =>{
        expect(helpers.getGreeting("keith")).toEqual("Hello keith!"); 
        expect(helpers.getGreeting(undefined)).toEqual(false); 
    })
})

describe("get rectangle area", () => {
    test("should multiply the length and width to get area", () => {
        expect(helpers.getRectangleArea(2, 5)).toEqual(10); 
        expect(helpers.getRectangleArea(undefined, 6)).toEqual(false); 
    })
})

describe("get triangle area", () => {
    test("should multiply the base and height to get area", () => {
        expect(helpers.getTriangleArea(2, 5)).toEqual(5); 
        expect(helpers.getTriangleArea(undefined, 6)).toEqual(false); 
    })
})

describe("get circle radius", () => {
    test("should get the area of a circle", () => {
        expect(helpers.getCircleArea(10)).toEqual(314.1592653589793); 
        expect(helpers.getCircleArea(undefined)).toEqual(false); 
    })
})

describe("get the rectangluar prism volume", () => {
    test("should return the volume of the rectangular prism", () => {
        expect(helpers.getRectangularPrismVolume(2, 4, 10)).toEqual(80); 
        expect(helpers.getRectangularPrismVolume(undefined, 10, 3)).toEqual(false); 
    })
})


