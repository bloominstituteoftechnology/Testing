const helpers = require('./project-1');

// start testing!
it('should multiply a number by 10', () => {
    expect(helpers.multiplyByTen(4)).toBe(40);
  });
it('should subtract a number by 5',()=>{
    expect(helpers.subtractFive(4)).toBe(-1);
})
it('should return a bool of whether lengths are equal',()=>{
    expect(helpers.areSameLength('words','words')).toBe(true);
    expect(helpers.areSameLength('words!','words')).toBe(false);
})
it('should return a bool on whether two numbers are equal',()=>{
    expect(helpers.areEqual(4,5)).toBe(false);
    expect(helpers.areEqual(4,4)).toBe(true);
})
it('should return a bool of whether or not a number is less than 90',()=>{
    expect(helpers.lessThanNinety(45)).toBe(true);
    expect(helpers.lessThanNinety(100)).toBe(false);
    expect(helpers.lessThanNinety(90)).toBe(false);
})
it('should return a bool on wehther a number is greater than 50',()=>{
    expect(helpers.greaterThanFifty(55)).toBe(true);
    expect(helpers.greaterThanFifty(50)).toBe(false);
    expect(helpers.greaterThanFifty(45)).toBe(false);
})
it ('should add two numbers together.',()=>{
    expect(helpers.add(3,5)).toBe(8);
})
it ('should subtract two numbers',()=>{
    expect(helpers.subtract(3,5)).toBe(-2);
})
it ('should divide two numbers',()=>{
    expect(helpers.divide(1,4)).toBe(0.25);
})
it ('should multiply two numbers',()=>{
    expect(helpers.multiply(2,4)).toBe(8);
})
it ('should get remainder after division',()=>{
    expect(helpers.getRemainder(4,3)).toBe(1);
})