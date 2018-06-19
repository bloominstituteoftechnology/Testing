it.skip('can add two numbers', () => {
    //arrange
    const expected = 42;
    //act
    const actual = add(40, 2);

    //assert
    expect(actual).toEqual(expected);
});

function add(a, b) {
    return a + b; 
}

describe.skip('multiplication helpers', () => {
    it('can multiply numbers', () => {
        const expected = 42;
        const actual = multiply(21, 2);
        expect(actual).toEqual(expected);
    });
});

function multiply(a, b) {
    return a * b;
}