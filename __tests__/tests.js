// __tests__/tests.js

describe('addition helpers', () => {
    describe('add', () => {
        it('can add two numbers', () => {
            //arrange
            const expected = 42;

            //act
            const actual = add(40, 2);

            //assert
            expect(actual).toEqual(expected);
        });
    });
});

describe('multiplication helpers', () => {
    it('can multiply numbers', () => {
        //arrange
        const expected = 42;
        const max = Math.max;

        //act
        const actual = multiply(21, 2);

        //assert
        expect(actual).toEqual(expected);
        expect(multiply(max, 2)).toBeNaN();
    });
});

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}