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
describe('Multiply by ten', ()=>{
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
 
    const result = areSameLength(true, true)

    expect(result).toBe(true)   
  })
  test('', () => {
  
    const input1 = 'apple';

    const input2 = 'bears';

    const expected = ''

    const result = areSameLength(true, true)

    expect(result).toBe(true)   
  })
})

describe('lessThanNinety', ()=>{
it('description', ()=>{
  expect(2+2).toBe(4)

}) 

  test('test', () => {

    const input = 5;

    const expected = 50;

    const result = lessThanNinety(input)

    expect(result).toBe(expected)
  })
})


describe('greaterThanFifty', ()=>{
it('description', ()=>{
  expect(2+2).toBe(4)

}) 

  test('test', () => {

    const input = 5;

    const expected = 50;

    const result = greaterThanFifty(input)

    expect(result).toBe(expected)
  })
})
describe('add', ()=>{
it('description', ()=>{
  expect(2+2).toBe(4)

}) 

  test('test', () => {

    const input = 5;

    const expected = 50;

    const result = add(input)

    expect(result).toBe(expected)
  })
})
describe('subtract', ()=>{
it('description', ()=>{
  expect(2+2).toBe(4)

}) 

  test('test', () => {

    const input = 5;

    const expected = 50;

    const result = subtract(input)

    expect(result).toBe(expected)
  })
})
describe('divide', ()=>{
it('description', ()=>{
  expect(2+2).toBe(4)

}) 

  test('test', () => {

    const input = 5;

    const expected = 50;

    const result = divide(input)

    expect(result).toBe(expected)
  })
})
describe('multiply', ()=>{
it('description', ()=>{
  expect(2+2).toBe(4)

}) 

  test('test', () => {

    const input = 5;

    const expected = 50;

    const result = multiply(input)

    expect(result).toBe(expected)
  })
})
describe('getRemainder', ()=>{
it('description', ()=>{
  expect(2+2).toBe(4)

}) 

  test('test', () => {

    const input = 5;

    const expected = 50;

    const result = getRemainder(input)

    expect(result).toBe(expected)
  })
})
describe('isEven', ()=>{
it('description', ()=>{
  expect(2+2).toBe(4)

}) 

  test('test', () => {

    const input = 5;

    const expected = 50;

    const result = isEven(input)

    expect(result).toBe(expected)
  })
})
describe('isOdd', ()=>{
it('description', ()=>{
  expect(2+2).toBe(4)

}) 

  test('test', () => {

    const input = 5;

    const expected = 50;

    const result = isOdd(input)

    expect(result).toBe(expected)
  })
})
describe('square', ()=>{
it('description', ()=>{
  expect(2+2).toBe(4)

}) 

  test('test', () => {

    const input = 5;

    const expected = 50;

    const result = square(input)

    expect(result).toBe(expected)
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
