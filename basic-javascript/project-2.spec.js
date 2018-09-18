const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
it('should take in a number x and a number y and return the larger of the two',()=>{
    expect(funcs.getBiggest(39,78)).toBe(78);
    expect(funcs.getBiggest(100,100)).toBe(100);
    expect(funcs.getBiggest(100,99)).toBe(100);
})
it('should return a greeting given a language string',()=>{
    expect(funcs.greeting('German')).toBe('Guten Tag!');
    expect(funcs.greeting('Spanish')).toBe('Hola!');
    expect(funcs.greeting()).toBe('Hello!')
})
it('should return true given 5 or 10 else return false',()=>{
    expect(funcs.isTenOrFive(5)).toBe(true);
    expect(funcs.isTenOrFive(5)).toBe(true);
    expect(funcs.isTenOrFive()).toBe(false);
})
it('should return true for a number between 20 and 50 else return false',()=>{
    expect(funcs.isInRange(50)).toBe(false);
    expect(funcs.isInRange(20)).toBe(false);
    expect(funcs.isInRange(30)).toBe(true);
})
it('should return true for an integer else return false',()=>{
    expect(funcs.isInteger(8.99)).toBe(false);
    expect(funcs.isInteger(9)).toBe(true);
    expect(funcs.isInteger(10)).toBe(true);
})