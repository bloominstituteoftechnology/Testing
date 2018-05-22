const funcs = require('./project-1');

describe('Project 1', () => {

it('should multiply by 10', () => {
    expect(funcs.multiplyByTen(5)).toBe(50)
})

it('should subtract five', () => {
    expect(funcs.subtractFive(10)).toBe(5)
})

it('check that strings are same length', () => {
    expect(funcs.areSameLength('str1', 'str2')).toBe(true)
    expect(funcs.areSameLength('str1', 'string2')).toBe(false)
})

it('check if numbers are equal', () => {
    expect(funcs.areEqual(5, 5)).toBe(true)
    expect(funcs.areEqual(5, 1)).toBe(false)
})

it('should multiply by 10', () => {
    expect(funcs.multiplyByTen(5)).toBe(50)
})

it('check if number is less than 90', () => {
    expect(funcs.lessThanNinety(1)).toBe(true)
    expect(funcs.lessThanNinety(91)).toBe(false)
})

it('check if number is greater than 50', () => {
    expect(funcs.greaterThanFifty(55)).toBe(true)
    expect(funcs.greaterThanFifty(45)).toBe(false)
})

it('should add a number to another', () => {
    expect(funcs.add(5, 5)).toBe(10)
})

it('should subtract a number from another', () => {
    expect(funcs.subtract(5, 5)).toBe(0)
})

it('should divide a number by another', () => {
    expect(funcs.divide(5, 5)).toBe(1)
})

it('should multiply a number by another', () => {
    expect(funcs.subtract(5, 5)).toBe(0)
})

it('should get the remainder', () => {
    expect(funcs.getRemainder(1, 5)).toBe(1)
})

it('should check if even', () => {
    expect(funcs.isEven(10)).toBe(true)
    expect(funcs.isEven(5)).toBe(false)
})

it('should check if odd', () => {
    expect(funcs.isOdd(5)).toBe(true)
    expect(funcs.isOdd(10)).toBe(false)
})

it('should square number', () => {
    expect(funcs.square(5)).toBe(25)
})

it('should cube number', () => {
    expect(funcs.cube(5)).toBe(125)
})

it('should raise number to a power', () => {
    expect(funcs.raiseToPower(5, 2)).toBe(25)
})

it('should round to nearest number', () => {
    expect(funcs.roundNumber(.5)).toBe(1)
    expect(funcs.roundNumber(1.2)).toBe(1)
})

it('should round number up', () => {
    expect(funcs.roundUp(.5)).toBe(1)
    expect(funcs.roundUp(1.2)).toBe(2)
})

it('should add ! to end of string', () => {
    expect(funcs.addExclamationPoint('Join the darkside')).toBe('Join the darkside!')
})

it('should combine two strings, firstName and lastName, into one string', () => {
    expect(funcs.combineNames('Justin', 'Faulkenberry')).toBe('Justin Faulkenberry')
})

it('should return greeting with a name', () => {
    expect(funcs.getGreeting('Faulkenberry')).toBe('Hello Faulkenberry!')
})

it('should return the rectangles area', () => {
    expect(funcs.getRectangleArea(5, 5)).toBe(25)
})

it('should return the triangles area', () => {
    expect(funcs.getTriangleArea(10, 2)).toBe(10)
})

it('should return the circles area', () => {
    expect(funcs.getCircleArea(5, 5)).toBe(25 * Math.PI)
})

it('should return the rectangular prisms volume', () => {
    expect(funcs.getRectangularPrismVolume(5, 5, 5)).toBe(125)
})

})