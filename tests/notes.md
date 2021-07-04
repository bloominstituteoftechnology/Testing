describe('addition helpers', () => {
    describe('add', () => {
        it('can add two numbers', () => {
            //arrange
            const expected = 41;

            //act
            const actual = add(40, 1);

            //assert
            expect(actual).toEqual(expected);
        });
    })
})

describe('multiplication helpers', () => {
    it('can multiply numbers', () => {
        const expected = 42;
        const max = Math.max;

        const actual = multiply(21, 2);

        expect(actual).toEqual(expected);
        expect(multiply(max, 3)).toBeNaN();
    })
})

function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}