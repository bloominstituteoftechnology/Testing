const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
it('should return the largest number or either number if they are equal', () => {
    expect(funcs.getBiggest(2, 8)).toBe(8);
    expect(funcs.getBiggest(-3, 1)).toBe(1);
    expect(funcs.getBiggest(5, 5)).toBe(5);
});

it('should return the largest number or the 2nd num if they are equal', () => {
    expect(funcs.greeting('German')).toBe('Guten Tag!');
    expect(funcs.greeting('Spanish')).toBe('Hola!');
    expect(funcs.greeting('')).toBe('Hello!');
});