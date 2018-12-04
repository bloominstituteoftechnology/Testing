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
} = require('./project-1');

// start testing!
describe('multiplyByTen', ()=>{
  it('multiplys a number by ten', ()=>{
    expect(2+2).toBe(4)

  }) 

  test('multiplyByTen', () => {

    const input = 5;

    const expected = 50;

    const result = multiplyByTen(input)

    expect(result).toBe(expected)
  })
})


describe('subtractFive', ()=>{
  it('Subtracts five from a number', ()=>{
    expect(2+2).toBe(4)

  }) 

  test('subtract five from 20', () => {

    const input = 20;

    const expected = 15;

    const result = subtractFive(input)

    expect(result).toBe(expected)
  })
})

describe('areSameLength', () => {
  it('compares the length of two strings', () => {
    expect(2+2).toBe(4)

  })

  test('\'apple\' and \'bears\' should return true', () => {
 
    const input1 = 'apple';
    const input2 = 'bears';


    const result = areSameLength(input1, input2)

    expect(result).toBe(true)   
  })
})


describe('areEqual', () => {
  it('compares the length of two inputs', () => {
    expect(2+2).toBe(4)

  })

  test('true and true are equal', () => {
 
    const result = areEqual(true, true)

    expect(result).toBe(true)   
  })
  test('strings', () => {
  
    const input1 = 'apple';

    const input2 = 'bears';

    const result = areEqual(input2, input1)

    expect(result).toBe(false)   
  })
})

describe('lessThanNinety', ()=>{
  it('returns true when it\'s input is less then ninety', ()=>{
    expect(2+2).toBe(4)

  }) 

  test('3 is lessThenNinety', () => {

    const input = 3;

    const expected = true;

    const result = lessThanNinety(input)

    expect(result).toBe(expected)
  })

  test('100 isn\'t lessThenNinety', () => {

    const input = 100;

    const expected = false;

    const result = lessThanNinety(input)

    expect(result).toBe(expected)
  })
})


describe('greaterThanFifty', ()=>{
it('returns true when it\'s input is less then fifty', ()=>{
  expect(2+2).toBe(4)

}) 

  test('5 is less then fifty', () => {

    const input = 5;

    const expected = false;

    const result = greaterThanFifty(input)

    expect(result).toBe(expected)
  })

  test('51 is greater then fifty', () => {

    const input = 51;

    const expected = true;

    const result = greaterThanFifty(input)

    expect(result).toBe(expected)
  })


})



describe('add', ()=>{
it('adds two numbers', ()=>{
  expect(add(2,2)).toBe(4)

}) 

  test('3 and 4 equal 7', () => {

    const input = [3, 4];

    const expected = 7;

    const result = add(...input)

    expect(result).toBe(expected)
  })
})
describe('subtract', ()=>{
  it('subtracts one number from another number', ()=>{
    expect(subtract(2,2)).toBe(0)

  }) 

  test('5 subtracted from 4 is -1', () => {

    const input = [4, 5];

    const expected = -1;

    const result = subtract(...input)

    expect(result).toBe(expected)
  })
})
describe('divide', ()=>{
it('divides a number', ()=>{
  expect(divide(8, 2)).toBe(4)

}) 

  test('20 divided by 5 is 4', () => {

    const input = [20, 5];

    const expected = 4;

    const result = divide(...input)

    expect(result).toBe(expected)
  })
})

describe('multiply', ()=>{
it('multiplys a number by another number', ()=>{
  expect(multiply(2,2)).toBe(4)

}) 

  test('3 multiplied by 5 is 15', () => {

    const input = [3, 5];

    const expected = 15;

    const result = multiply(input)

    expect(result).toBe(expected)
  })
})

describe('getRemainder', ()=>{
it('applys modulo to number by another number', ()=>{
  expect(getRemainder(3,2)).toBe(1)

}) 

  test('the remainder of 7 / 2 is 1', () => {

    const input = [7, 2];

    const expected = 1;

    const result = getRemainder(...input)

    expect(result).toStrictEqual(1)
  })
})

describe('isEven', ()=>{
it('return true if even', ()=>{
  expect(isEven(2)).toBe(true)

}) 

  test('4 is even', () => {

    const input = 4;

    const expected = true;

    const result = isEven(input)

    expect(result).toBeEven(expected)
  })

})
describe('isOdd', ()=>{
it('return true if odd', ()=>{
  expect(isOdd(7)).toBe(true)

}) 


  test('33 is odd', () => {

    const input = 33;

    const expected = true;

    const result = isOdd(input)

    expect(result).toBe(expected)
  })



  test('44 is not odd', () => {

    const input = 44;

    const expected = false;

    const result = isOdd(input)

    expect(result).toBe(expected)
  })
})

describe('square', ()=>{
it('description', ()=>{
  expect(2+2).toBe(4)

}) 

  test('should return the square of an input', () => {
    const input = 5;
    const expected = 50;
    const result = square(input)
    expect(result).toBe(expected)
    expect(5).toBe(25)
    expect(3).toBe(9)
    expect(4).toBe(16)
  })


})
describe('cube', ()=>{
it('description', ()=>{
  expect(2+2).toBe(4)

}) 

  test('test', () => {

    const input = 5;

    const expected = 50;

    const result = cube(input)

    expect(result).toBe(expected)
  })
})
describe('raiseToPower', ()=>{
it('description', ()=>{
  expect(2+2).toBe(4)

}) 

  test('test', () => {

    const input = 5;

    const expected = 50;

    const result = raiseToPower(input)

    expect(result).toBe(expected)
  })
})
describe('roundNumber', ()=>{
it('description', ()=>{
  expect(2+2).toBe(4)

}) 

  test('test', () => {

    const input = 5;

    const expected = 50;

    const result = roundNumber(input)

    expect(result).toBe(expected)
  })
})
describe('roundUp', ()=>{
it('description', ()=>{
  expect(2+2).toBe(4)

}) 

  test('test', () => {

    const input = 5;

    const expected = 50;

    const result = roundUp(input)

    expect(result).toBe(expected)
  })
})
describe('addExclamationPoint', ()=>{
it('description', ()=>{
  expect(2+2).toBe(4)

}) 

  test('test', () => {

    const input = 5;

    const expected = 50;

    const result = addExclamationPoint(input)

    expect(result).toBe(expected)
  })
})
describe('combineNames', ()=>{
it('description', ()=>{
  expect(2+2).toBe(4)

}) 

  test('test', () => {

    const input = 5;

    const expected = 50;

    const result = combineNames(input)

    expect(result).toBe(expected)
  })
})
describe('getGreeting', ()=>{
it('description', ()=>{
  expect(2+2).toBe(4)

}) 

  test('test', () => {

    const input = 5;

    const expected = 50;

    const result = getGreeting(input)

    expect(result).toBe(expected)
  })
})
describe('getRectangleArea', ()=>{
it('description', ()=>{
  expect(2+2).toBe(4)

}) 

  test('test', () => {

    const input = 5;

    const expected = 50;

    const result = getRectangleArea(input)

    expect(result).toBe(expected)
  })
})
describe('getTriangleArea', ()=>{
it('description', ()=>{
  expect(2+2).toBe(4)

}) 

  test('test', () => {

    const input = 5;

    const expected = 50;

    const result = getTriangleArea(input)

    expect(result).toBe(expected)
  })
})
describe('getCircleArea', ()=>{
it('description', ()=>{
  expect(2+2).toBe(4)

}) 

  test('test', () => {

    const input = 5;

    const expected = 50;

    const result = getCircleArea(input)

    expect(result).toBe(expected)
  })
})
describe('getRectangularPrismVolume', ()=>{
it('description', ()=>{
  expect(2+2).toBe(4)

}) 

  test('test', () => {

    const input = 5;

    const expected = 50;

    const result = getRectangularPrismVolume(input)

    expect(result).toBe(expected)
  })
})
