const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('getBiggest', () => {
    const testFunc = funcs.getBiggest;

    it('returns type number given type numbers', () => {

        const expected = "number";
        
        const actual = typeof testFunc(5, 7);
        expect(actual).toBe(expected);
    });

    describe('identifies bigger number', () => {
        it('returns 5 given -1, 5', () => {
    
            const expected = 5;
            
            const actual = testFunc(-1, 5);

            expect(actual).toBe(expected);
        });
        it('returns -3 given -11, ', () => {
    
            const expected = -3;
            
            const actual = testFunc(-3, -11);

            expect(actual).toBe(expected);
        });
    });
});

describe('greeting', () => {
    const testFunc = funcs.greeting;

    it('returns type string', () => {

        const expected = "string";
        const actual = typeof testFunc();
        expect(actual).toBe(expected);
    });
