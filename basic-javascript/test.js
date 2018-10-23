//generate test function
generate = (title) => {
    return (
        `//${title}
describe('${title}()', () => {
    it('should ${title}', () => {
        const expected = 100;
        const actual = helpers.${title}(10);
        expect(actual).toEqual(expected);
    });
});`
    )
} 

console.log(generate('largestNumber'));