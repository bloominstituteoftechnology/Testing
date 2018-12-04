const helpers = require('./project-1');


describe('Jest', ()=> {
  test('Jest works', () => {

  })
})

describe('The tests in this here thing', () => {

  it('multiplys by ten', ()=> {
    const result = helpers.multiplyByTen(2)
    expect(result).toBe(20)
  })

  it('subtracts five', ()=> {
    const result = helpers.subtractFive(10)
    expect(result).toBe(5)
  })

  it('shows two strings are the same length', ()=>{
    const result = helpers.areSameLength('hello', 'hello')
    expect(result).toBe(true)

  })

  it('Shows the two numbers are equal', ()=> {
    const result = helpers.areEqual(2, 2)
    expect(result).toBe(true)
  })

  it('returns a number less than nintey', () => {
    const result = helpers.lessThanNinety(89)
    expect(result).toBe(true)

  })

  it('shows a number is greater than 50', ()=>{
    const result = helpers.greaterThanFifty(51)
      expect(result).toBe(true)
  })

  it('should add two numbers', ()=>{

    expect(helpers.add(2, 2)).toBe(4)


  })

  it('should subtract two numbers', ()=>{
    expect(helpers.subtract(4, 2)).toBe(2)
  })

  it('should divide two numbers', ()=>{
    expect(helpers.divide(4, 2)).toBe(2)
  })

  it('should multiply two numbers', ()=>{
    expect(helpers.multiply(4, 2)).toBe(8)
  })

  it('should get remainder', ()=>{
    expect(helpers.getRemainder(5, 2)).toBe(1)
  })

  it('should check for an even number', ()=>{
    expect(helpers.isEven(2)).toBe(true)
  })

  it('should check for an odd number', ()=>{
    expect(helpers.isOdd(3)).toBe(true)
  })

  it('should check that a number is squared', ()=>{
    expect(helpers.square(3)).toBe(9)
  })

  it('should check for cubed number', ()=>{
    expect(helpers.cube(3)).toBe(27)
  })

  it('should raise the number to a power', ()=>{
    expect(helpers.cube(3, 3)).toBe(27)
  })

  it('should check for a round number', ()=>{
    expect(helpers.roundNumber(3.5)).toBe(4)
  })

  it('should check that the number rounds up ', ()=>{
    expect(helpers.roundUp(3.5)).toBe(4)
  })

  it('should check the string for an exclamation point ', ()=>{
    expect(helpers.addExclamationPoint('hello')).toBe('hello!')
  })

  it('should check that the strings combine ', ()=>{
    expect(helpers.combineNames('ed', 'grooberman')).toBe('ed grooberman')
  })

  it('should check for a greeting string ', ()=>{
    expect(helpers.getGreeting('ed')).toBe('Hello ed!')
  })

  it('should get rectangle area', ()=>{
    expect(helpers.getRectangleArea(2, 2)).toBe(4)
  })

  it('should get triangle area', ()=>{
    expect(helpers.getTriangleArea(2, 2)).toBe(2)
  })

  it('should get circle area', ()=>{
    expect(helpers.getCircleArea(5)).toBe(78.53981633974483)
  })

  it('should get rectangular prisim volume', ()=>{
    expect(helpers.getRectangularPrismVolume(2, 2, 2)).toBe(8)
  })
})
