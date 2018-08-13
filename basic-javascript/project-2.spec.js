const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
it('if x > y return x otherwise return y', () => {
    expect(funcs.getBiggest(20, 10)).toEqual(20);
    expect(funcs.getBiggest(20,22)).toEqual(22);
})

it('switch greeting according to language spanish or german', () => {
    expect(funcs.greeting('German')).toEqual('Guten Tag!');
    expect(funcs.greeting('Spanish')).toEqual('Hola!');
    expect(funcs.greeting('Armenian')).toEqual('Hello!');
})

it('if number 10 or 5 return true', () => {
    expect(funcs.isTenOrFive(23)).toEqual(false);
    expect(funcs.isTenOrFive(10 || 5)).toEqual(true);
})

it('if number is between 50 and 20', () => {
    expect(funcs.isInRange(32)).toEqual(true);
    expect(funcs.isInRange(100)).toEqual(false);
})

it('is an integer', () => {
    expect(funcs.isInteger(10)).toEqual(true);
    expect(funcs.isInteger(-10)).toEqual(true);
    expect(funcs.isInteger('10')).toEqual(false);
})

it('if number is % by 3 & 5 return fizzbuzz otherwise % 5 = buzz and % 3 = fizz', () => {
    const numbers = [10, 13, 15, 22, 33];
    
})