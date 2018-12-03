const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('jest', () => {
    test('Jest runs', () => {

    });
});

describe('funcs', () => {
    beforeEach(() => {
        console.log('running');
    })

    describe('getBiggest', () => {
        test('get the biggest number', () => {
            expect(funcs.getBiggest(5, 3)).toBe(5);
            expect(funcs.getBiggest(8, 8)).toBe(8);
            expect(funcs.getBiggest(2, 4)).toBe(4);
        });
    })

    describe('greeting', () => {
        test('get a greeting in different language', () => {
            expect(funcs.greeting('German')).toBe('Guten Tag!');
            expect(funcs.greeting('Spanish')).toBe('Hola!');
            expect(funcs.greeting('English')).toBe('Hello!');
        });
    })
    

})