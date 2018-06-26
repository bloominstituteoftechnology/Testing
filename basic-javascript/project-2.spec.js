const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('project-2', () => {
    describe('getBiggest', () => {
        it('arg1 must be larger than arg2', () => {
            const expected = 87;
            const actual = funcs.getBiggest(87, 4);

            expect(actual).toEqual(expected);
        })
        it('arg1 and arg2 must be a number', () => {
            const expected = NaN;
            const actual = funcs.getBiggest(NaN, NaN);

            expect(actual).toEqual(expected);
        })
    });

    describe('greeting', () => {
        it('return Guten Tag if language is German', () => {
            const expected = 'Guten Tag!';
            const actual = funcs.greeting('German');

            expect(actual).toEqual(expected);
        });
        it('return Guten Tag if language is German', () => {
            const expected = 'Hola!';
            const actual = funcs.greeting('Spanish');

            expect(actual).toEqual(expected);
        });
    });

    describe('isInRange', () => {
        it('arg is true if it is in range of less than 50 and larger than 20', () => {
            const expected = true;
            const actual = funcs.isInRange(34);

            expect(actual).toEqual(expected);
        });
        it('num false if it is less than 50 and larger than 20', () => {
            const expected = false;
            const actual = funcs.isInRange(5);

            expect(actual).toEqual(expected);
        });
    });


});
