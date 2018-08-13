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
