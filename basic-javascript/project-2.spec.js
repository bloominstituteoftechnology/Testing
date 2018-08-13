const funcs = require('./project-2');

it('should return the biggest of the 2 values passed, if equal return one of the values', () => {
    expect(funcs.getBiggest(2, 5)).toEqual(5);
    expect(funcs.getBiggest(10, 10)).toEqual(10);
    expect(funcs.getBiggest(500, 5)).toEqual(500);
})

describe('Return Greeting depending on value passed in', () => {
    it(`should return 'Guten Tag!`, () => {
        expect(funcs.greeting('German')).toEqual('Guten Tag!');
    })

    it('should return Hola!', () => {
        expect(funcs.greeting('Spanish')).toEqual('Hola!');
    })

    it('should return Hello!', () => {
        expect(funcs.greeting('Random Language!')).toEqual('Hello!');
    })
});

it('should return true if number passed is 10 or 5, otherwise return false', () => {
    expect(funcs.isTenOrFive(5)).toEqual(true);
    expect(funcs.isTenOrFive(10)).toEqual(true);
    expect(funcs.isTenOrFive(55)).toEqual(false);
})

it('should return true if number passed is less than 50 but greater than 20, otherwise return false', () => {
    expect(funcs.isInRange(50)).toEqual(false);
    expect(funcs.isInRange(20)).toEqual(false);
    expect(funcs.isInRange(49)).toEqual(true);
})

it('should return true if number passed is an integer, otherwise return false', () => {
    expect(funcs.isInteger(5.5)).toEqual(false);
    expect(funcs.isInteger('Hey')).toEqual(false);
    expect(funcs.isInteger(6)).toEqual(true);
})
