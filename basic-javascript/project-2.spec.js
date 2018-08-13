const funcs = require('./project-2');

describe(`${funcs.getBiggest.name}`, () => {
    const getBiggest = funcs.getBiggest;
    it('should return the x value if x is bigger than y', () => {
        expect(getBiggest(40,20)).toBe(40);
        expect(getBiggest(30,20)).toBe(30);
    })
    it('should return the y value if y is bigger than x', () => {
        expect(getBiggest(10,20)).toBe(20);
        expect(getBiggest(-5,20)).toBe(20);
    })
})

describe(`${funcs.greeting.name}`, () => {
    const greeting = funcs.greeting;
    it('should return the proper greeting depending on the input', () => {
        expect(greeting('German')).toBe('Guten Tag!');
        expect(greeting('Spanish')).toBe('Hola!');
        expect(greeting('Unknown')).toBe('Hello!');
    })
})
// whoops.. there is no test suite for this file. You'll simply just have to create one :/
