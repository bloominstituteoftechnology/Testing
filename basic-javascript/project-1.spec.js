const {
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
  getCircleArea,
  getRectangularPrismVolume
} = require('./project-1')

// start testing!

describe('multiplyByTen', () => {
  it('should multiply number by 10', () => {
    expect(multiplyByTen(5)).toBe(50)
    expect(multiplyByTen(0)).toBe(0)
  })
  it('should return false if argument is undefined', () => {
    expect(multiplyByTen(undefined)).toBe(false)
  })
})

describe('subtractFive', () => {
  it('should subtract 5 from number', () => {
    expect(subtractFive(8)).toBe(3)
    expect(subtractFive(-5)).toBe(-10)
  })
  it('should return false if argument is not a number', () => {
    expect(subtractFive('notanumber')).toBe(false)
  })
  it('it should return a number', () => {
    expect(typeof subtractFive(-5)).toBe('number')
  })
})

describe('areSameLength', () => {
  it('should be a function', () => {
    expect(typeof areSameLength).toBe('function')
  })
  it('should return a boolean', () => {
    const result = areSameLength('this', 'false')
    expect(typeof result).toBe('boolean')
  })
  it('areSameLength("this", "false") should return false', () => {
    const result = areSameLength('this', 'false')
    expect(result).toBe(false)
  })
})

describe('areEqual', () => {
  it('should be a function', () => {
    expect(typeof areEqual).toBe('function')
  })
  it('should return a boolean', () => {
    const result = areEqual('this', 'false')
    expect(typeof result).toBe('boolean')
  })
  it('areEqual("this", "false") should return false', () => {
    const result = areEqual('this', 'false')
    expect(result).toBe(false)
  })
  it('areEqual("equal", "equal") should return true', () => {
    const result = areEqual('equal', 'equal')
    expect(result).toBe(true)
  })
})

describe('lessThanNinety', () => {
  it('should be a function', () => {
    expect(typeof lessThanNinety).toBe('function')
  })
  it('should return a boolean', () => {
    const result = lessThanNinety(80)
    expect(typeof result).toBe('boolean')
  })
  it('lessThanNinety(80) should return true', () => {
    const result = lessThanNinety(80)
    expect(result).toEqual(true)
  })
  it('lessThanNinety(90) should return false', () => {
    const result = lessThanNinety(90)
    expect(result).toEqual(false)
  })
})

describe('greaterThanFifty', () => {
  it('should be a function', () => {
    expect(typeof greaterThanFifty).toBe('function')
  })
  it('should return a boolean', () => {
    const result = greaterThanFifty(80)
    expect(typeof result).toBe('boolean')
  })
  it('greaterThanFifty(80) should return true', () => {
    const result = greaterThanFifty(80)
    expect(result).toEqual(true)
  })
  it('greaterThanFifty(90) should return false', () => {
    const result = greaterThanFifty(40)
    expect(result).toEqual(false)
  })
})

describe('add', () => {
  it('should be a function', () => {
    expect(typeof add).toBe('function')
  })
  it('should return a number', () => {
    const result = add(3, 4)
    expect(typeof result).toBe('number')
  })
  it('should add two numbers', () => {
    const result = add(1, 9)
    expect(result).toBe(10)
  })
})

describe('subtract', () => {
  it('should be a function', () => {
    expect(typeof subtract).toBe('function')
  })
  it('should return a number', () => {
    const result = subtract(3, 4)
    expect(typeof result).toBe('number')
  })
  it('should subtract two numbers', () => {
    const result = subtract(1, 9)
    expect(result).toBe(-8)
  })
})

describe('divide', () => {
  it('should be a function', () => {
    expect(typeof divide).toBe('function')
  })
  it('should return a number', () => {
    const result = divide(3, 4)
    expect(typeof result).toBe('number')
  })
  it('should divide two numbers', () => {
    const result = divide(1, 9)
    expect(result).toBe(1 / 9)
  })
  it('should throw an error if second argument is 0', () => {
    const result = () => divide(5, 0)
    expect(result).toThrow()
  })
})

describe('multiply', () => {
  it('should be a function', () => {
    expect(typeof multiply).toBe('function')
  })
  it('should return a number', () => {
    const result = multiply(3, 4)
    expect(typeof result).toBe('number')
  })
  it('should multiply two numbers', () => {
    const result = multiply(2, 9)
    expect(result).toBe(18)
  })
})

describe('getRemainder', () => {
  it('should be a function', () => {
    expect(typeof getRemainder).toBe('function')
  })
  it('should return a number', () => {
    const result = getRemainder(3, 4)
    expect(typeof result).toBe('number')
  })
  it('should return the remainder', () => {
    const result = getRemainder(5, 2)
    expect(result).toBe(1)
  })
  it('should throw an error if second argument is 0', () => {
    const result = () => getRemainder(5, 0)
    expect(result).toThrow()
  })
})

describe('isEven', () => {
  it('should be a function', () => {
    expect(typeof isEven).toBe('function')
  })
  it('should return a boolean', () => {
    const result = isEven(7)
    expect(typeof result).toBe('boolean')
  })
  it('should determine if an integer is even', () => {
    expect(isEven(3)).toBe(false)
    expect(isEven(9)).toBe(false)
    expect(isEven(0)).toBe(true)
    expect(isEven(2)).toBe(true)
  })
})

describe('isOdd', () => {
  it('should be a function', () => {
    expect(typeof isOdd).toBe('function')
  })
  it('should return a boolean', () => {
    const result = isOdd(7)
    expect(typeof result).toBe('boolean')
  })
  it('should determine if an integer is odd', () => {
    expect(isOdd(3)).toBe(true)
    expect(isOdd(9)).toBe(true)
    expect(isOdd(0)).toBe(false)
    expect(isOdd(2)).toBe(false)
  })
})

describe('square', () => {
  it('should be a function', () => {
    expect(typeof square).toBe('function')
  })
  it('should return a number', () => {
    const result = square(3)
    expect(typeof result).toBe('number')
  })
  it('should return square of the number', () => {
    expect(square(5)).toBe(25)
  })
})

describe('cube', () => {
  it('should be a function', () => {
    expect(typeof cube).toBe('function')
  })
  it('should return a number', () => {
    const result = cube(3)
    expect(typeof result).toBe('number')
  })
  it('should return cube of the number', () => {
    expect(cube(5)).toBe(125)
  })
})

describe('raiseToPower', () => {
  it('should be a function', () => {
    expect(typeof raiseToPower).toBe('function')
  })
  it('should return a number', () => {
    const result = raiseToPower(3, 3)
    expect(typeof result).toBe('number')
  })
  it('should return first argument raised to second argument', () => {
    expect(raiseToPower(3, 3)).toBe(27)
  })
})

describe('roundNumber', () => {
  it('should be a function', () => {
    expect(typeof roundNumber).toBe('function')
  })
  it('should return an integer', () => {
    const result = roundNumber(2.6)
    expect(Number.isInteger(result)).toBe(true)
  })
  it('should round the number', () => {
    expect(roundNumber(2.1)).toBe(2)
    expect(roundNumber(3.9)).toBe(4)
    expect(roundNumber(5.0)).toBe(5)
  })
})

describe('roundUp', () => {
  it('should be a function', () => {
    expect(typeof roundUp).toBe('function')
  })
  it('should return an integer', () => {
    const result = roundUp(2.6)
    expect(Number.isInteger(result)).toBe(true)
  })
  it('should round the number', () => {
    expect(roundUp(2.1)).toBe(3)
    expect(roundUp(3.9)).toBe(4)
    expect(roundUp(5.0)).toBe(5)
  })
})

describe('addExclamationPoint', () => {
  it('should be a function', () => {
    expect(typeof addExclamationPoint).toBe('function')
  })
  it('should return a string', () => {
    const result = addExclamationPoint('cesar')
    expect(typeof result).toBe('string')
  })
  it('should add an exclamation point to string', () => {
    expect(addExclamationPoint('cesar')).toBe('cesar!')
    expect(addExclamationPoint('soboring')).toBe('soboring!')
    expect(addExclamationPoint('killmenow')).toBe('killmenow!')
  })
})

describe('combineNames', () => {
  it('should be a function', () => {
    expect(typeof combineNames).toBe('function')
  })
  it('should return a string', () => {
    const result = combineNames('cesar', 'mejia')
    expect(typeof result).toBe('string')
  })
  it('should combine strings with a space in between', () => {
    expect(combineNames('cesar', 'mejia')).toBe('cesar mejia')
    expect(combineNames('luis', 'martinez')).toBe('luis martinez')
    expect(combineNames('ana', 'leiva')).toBe('ana leiva')
  })
  it('combine string must have string1.length + string2.length + 1', () => {
    const string1 = 'cesar'
    const string2 = 'mejia'
    const combineLength = string1.length + string2.length + 1
    expect(combineNames('cesar', 'mejia')).toHaveLength(combineLength)
  })
})

describe('getGreeting', () => {
  it('should be a function', () => {
    expect(typeof getGreeting).toBe('function')
  })
  it('should return a string', () => {
    const result = getGreeting('cesar')
    expect(typeof result).toBe('string')
  })
  it('should greet argument', () => {
    expect(getGreeting('cesar')).toBe('Hello cesar!')
    expect(getGreeting('ted')).toBe('Hello ted!')
    expect(getGreeting('bacon')).toBe('Hello bacon!')
  })
})

describe('getRectangleArea', () => {
  it('should be a function', () => {
    expect(typeof getRectangleArea).toBe('function')
  })
  it('should return a number', () => {
    const result = getRectangleArea(4, 3)
    expect(typeof result).toBe('number')
  })
  it('should return the area of the rectangle given dimensions', () => {
    expect(getRectangleArea(4, 3)).toBe(12)
    expect(getRectangleArea(5, 5)).toBe(25)
    expect(getRectangleArea(0, 3)).toBe(0)
  })
})

describe('getTriangleArea', () => {
  it('should be a function', () => {
    expect(typeof getTriangleArea).toBe('function')
  })
  it('should return a number', () => {
    const result = getTriangleArea(4, 3)
    expect(typeof result).toBe('number')
  })
  it('should return the area of the triangle given dimensions', () => {
    expect(getTriangleArea(4, 3)).toBe(6)
    expect(getTriangleArea(5, 5)).toBe(25 / 2)
    expect(getTriangleArea(0, 3)).toBe(0)
  })
})

describe('getCircleArea', () => {
  it('should be a function', () => {
    expect(typeof getCircleArea).toBe('function')
  })
  it('should return a number', () => {
    const result = getCircleArea(4)
    expect(typeof result).toBe('number')
  })
  it('should return the area of the circle given the radius', () => {
    expect(getCircleArea(4)).toBeCloseTo(Math.PI * 4 * 4)
    expect(getCircleArea(5)).toBe(Math.PI * 5 * 5)
    expect(getCircleArea(0)).toBe(0)
  })
})

describe('getRectangularPrismVolume', () => {
  it('should be a function', () => {
    expect(typeof getRectangularPrismVolume).toBe('function')
  })
  it('should return a number', () => {
    const result = getRectangularPrismVolume(4, 3, 2)
    expect(typeof result).toBe('number')
  })
  it('should return the area of the circle given the radius', () => {
    expect(getRectangularPrismVolume(4, 3, 2)).toBeCloseTo(24)
    expect(getRectangularPrismVolume(5, 5, 5)).toBe(125)
    expect(getRectangularPrismVolume(0, 5, 5)).toBe(0)
  })
})
