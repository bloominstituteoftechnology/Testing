const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('project-2', () => {
    describe('getBiggest function', () => {
        it('If x is bigger than y, it should return x', () => {
            expect(funcs.getBiggest(5,1)).toBe(5);
        })
        it('If y is bigger than x, it should return y', () => {
            expect(funcs.getBiggest(1,5)).toBe(5);
        })
        it('If x is equal to y, it should return y', () => {
            expect(funcs.getBiggest(5,5)).toBe(5);
        })
        it('If x or y is NaN, it shold return null', () => {
            expect(funcs.getBiggest('5',5)).toBe(null);
        })
    })

    describe('gretting Function', () => {
        it('language other than German and Spanish, it should return Hello!', () => {
            expect(funcs.greeting('english')).toBe('Hello!');
        })
        it('If Spanish was enter, it should return Hola!', () => {
            expect(funcs.greeting('Spanish')).toBe('Hola!');
        })
        it('If spanish was enter, it should return Hola!', () => {
            expect(funcs.greeting('spanish')).toBe('Hola!');
        })
        it('If German was enter, it should return Guten Tag!', () => {
            expect(funcs.greeting('German')).toBe('Guten Tag!');
        })
        it('If german was enter, it should return Guten Tag!', () => {
            expect(funcs.greeting('german')).toBe('Guten Tag!');
        })
    })
})