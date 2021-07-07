const helpers = require('./project-1');

describe('Should multiply number by ten', () => {
  test('Should multiply by ten', () => {
    expect(helpers.multiplyByTen(4)).toEqual(40)
  })
  test('Should return false if value is undefined', () => {
    expect(helpers.multiplyByTen(undefined)).toEqual(false)
  })
  // test('Should return false if value is NaN', () => {
  //   expect(helpers.multiplyByTen('hello')).toEqual(false)
  // })
})
describe('Should subtract five from number', () => {
  test('Should subtract five', () => {
    expect(helpers.subtractFive(82)).toEqual(77)
  })
  test('Should return false if value is undefined', () => {
    expect(helpers.subtractFive(undefined)).toEqual(false)
  })
  // test('Should return false if value is NaN', () => {
  //   expect(helpers.subtractFive(NaN)).toEqual(false)
  // })
})
describe('Strings are same length', () => {
  test('Both strings should be same length', () => {
    expect(helpers.areSameLength('String 1', 'String 2')).toEqual(true)
    expect(helpers.areSameLength('String 11', 'String 2')).toEqual(false)
  })
  test('Should return false if a value is undefined', () => {
    expect(helpers.areSameLength(undefined, 'String 2')).toEqual(false)
  })
  // Should return false if value is NaN
})
describe('Numbers are equal', () => {
  test('Both numbers should be same equal', () => {
    expect(helpers.areEqual(146, 146)).toEqual(true)
    expect(helpers.areEqual(153, 178)).toEqual(false)
  })
  test('Should return false if a value is undefined', () => {
    expect(helpers.areEqual(undefined, 13)).toEqual(false)
  })
  // Should return false if value is NaN
})
describe('Number is less then ninety', () => {
  test('Number should be less then ninety', () => {
    expect(helpers.lessThanNinety(64)).toEqual(true)
    expect(helpers.lessThanNinety(97)).toEqual(false)
  })
  test('Should return false if a value is undefined', () => {
    expect(helpers.lessThanNinety(undefined)).toEqual(false)
  })
  // Should return false if value is NaN
})
describe('Number is greater then fifty', () => {
  test('Number should be greater then fifty', () => {
    expect(helpers.greaterThanFifty(64)).toEqual(true)
    expect(helpers.greaterThanFifty(23)).toEqual(false)
  })
  test('Should return false if a value is undefined', () => {
    expect(helpers.greaterThanFifty(undefined)).toEqual(false)
  })
  // Should return false if value is NaN
})
describe('Add two numbers', () => {
  test('Numbers should be added together', () => {
    expect(helpers.add(6, 4)).toEqual(10)
  })
  test('Should return false if a value is undefined', () => {
    expect(helpers.add(undefined, 3)).toEqual(false)
  })
  // Should return false if value is NaN
})
describe('Subtract two numbers', () => {
  test('Numbers should be subtracted from each other', () => {
    expect(helpers.subtract(6, 4)).toEqual(2)
  })
  test('Should return false if a value is undefined', () => {
    expect(helpers.subtract(undefined, 3)).toEqual(false)
  })
  // Should return false if value is NaN
})
describe('Divide two numbers', () => {
  test('Numbers should be divide from each other', () => {
    expect(helpers.divide(12, 4)).toEqual(3)
  })
  test('Should return false if a value is undefined', () => {
    expect(helpers.divide(undefined, 3)).toEqual(false)
  })
  // Should return false if value is NaN
})
describe('Multiply two numbers', () => {
  test('Numbers should be multiplied together', () => {
    expect(helpers.multiply(3, 4)).toEqual(12)
  })
  test('Should return false if a value is undefined', () => {
    expect(helpers.multiply(undefined, 3)).toEqual(false)
  })
  // Should return false if value is NaN
})
describe('Remainder of two numbers', () => {
  test('Should return remaind of two numbers', () => {
    expect(helpers.getRemainder(100, 5)).toEqual(0)
  })
  test('Should return false if a value is undefined', () => {
    expect(helpers.getRemainder(undefined, 5)).toEqual(false)
  })
  // Should return false if value is NaN
})
describe('Number is even', () => {
  test('Number should be even', () => {
    expect(helpers.isEven(64)).toEqual(true)
    expect(helpers.isEven(97)).toEqual(false)
  })
  test('Should return false if a value is undefined', () => {
    expect(helpers.isEven(undefined)).toEqual(false)
  })
  // Should return false if value is NaN
})
describe('Number is odd', () => {
  test('Number should be odd', () => {
    expect(helpers.isOdd(67)).toEqual(true)
    expect(helpers.isOdd(94)).toEqual(false)
  })
  test('Should return false if a value is undefined', () => {
    expect(helpers.isOdd(undefined)).toEqual(false)
  })
  // Should return false if value is NaN
})
describe('Number squared', () => {
  test('Number should be squared', () => {
    expect(helpers.square(5)).toEqual(25)
  })
  test('Should return false if a value is undefined', () => {
    expect(helpers.square(undefined)).toEqual(false)
  })
  // Should return false if value is NaN
})
describe('Number cubed', () => {
  test('Number should be cubed', () => {
    expect(helpers.cube(3)).toEqual(27)
  })
  test('Should return false if a value is undefined', () => {
    expect(helpers.cube(undefined)).toEqual(false)
  })
  // Should return false if value is NaN
})
describe('Number raise to power', () => {
  test('Number should be raised to the power', () => {
    expect(helpers.raiseToPower(8, 4)).toEqual(4096)
  })
  test('Should return false if a value is undefined', () => {
    expect(helpers.raiseToPower(undefined)).toEqual(false)
  })
  // Should return false if value is NaN
})
describe('Number rounded to int', () => {
  test('Number should be rounded to nearest integer', () => {
    expect(helpers.roundNumber(67.89)).toEqual(68)
  })
  test('Should return false if a value is undefined', () => {
    expect(helpers.roundNumber(undefined)).toEqual(false)
  })
  // Should return false if value is NaN
})
describe('Number rounded up', () => {
  test('Number should be rounded up', () => {
    expect(helpers.roundNumber(67.89)).toEqual(68)
  })
  test('Should return false if a value is undefined', () => {
    expect(helpers.roundNumber(undefined)).toEqual(false)
  })
  // Should return false if value is NaN
})
describe('Add exclamation point', () => {
  test('String should have an exclamation point', () => {
    expect(helpers.addExclamationPoint('Hello world')).toEqual('Hello world!')
  })
  test('Should return false if a value is undefined', () => {
    expect(helpers.addExclamationPoint(undefined)).toEqual(false)
  })
  // Should return false if value is NaN
})
describe('Combine names', () => {
  test('Strings should combine to one string', () => {
    expect(helpers.combineNames('John', 'Smith')).toEqual('John Smith')
  })
  test('Should return false if a value is undefined', () => {
    expect(helpers.combineNames(undefined, 'Smith')).toEqual(false)
  })
  // Should return false if value is NaN
})
describe('Get greeting', () => {
  test('Should return a greeting with', () => {
    expect(helpers.getGreeting('John')).toEqual('Hello John!')
  })
  test('Should return false if a value is undefined', () => {
    expect(helpers.getGreeting(undefined)).toEqual(false)
  })
  // Should return false if value is NaN
})
describe('Get rectangle area', () => {
  test('Should return the area of a rectangle', () => {
    expect(helpers.getRectangleArea(6, 8)).toEqual(48)
  })
  test('Should return false if a value is undefined', () => {
    expect(helpers.getRectangleArea(undefined)).toEqual(false)
  })
  // Should return false if value is NaN
})
describe('Get triangle area', () => {
  test('Should return the area of a triangle', () => {
    expect(helpers.getTriangleArea(6, 8)).toEqual(24)
  })
  test('Should return false if a value is undefined', () => {
    expect(helpers.getTriangleArea(undefined)).toEqual(false)
  })
  // Should return false if value is NaN
})
describe('Get circle area', () => {
  test('Should return the area of a circle', () => {
    expect(helpers.getCircleArea(6)).toEqual(113.09733552923255)
  })
  test('Should return false if a value is undefined', () => {
    expect(helpers.getCircleArea(undefined)).toEqual(false)
  })
  // Should return false if value is NaN
})
describe('Get rectangular prism volume', () => {
  test('Should return the volume of a rectangular prism', () => {
    expect(helpers.getRectangularPrismVolume(6, 4, 3)).toEqual(72)
  })
  test('Should return false if a value is undefined', () => {
    expect(helpers.getRectangularPrismVolume(undefined)).toEqual(false)
  })
  // Should return false if value is NaN
})
