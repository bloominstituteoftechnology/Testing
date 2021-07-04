it('runs', () => {
    // arrange
    const   expected = 42;
    
    // act
    const actual = add(40, 2);

    // assert
    expect(actual).toEqual(expected);
})

function add(a, b){
    return a + b;
}