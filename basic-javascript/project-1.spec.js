const helpers = require('./project-1');

// start testing!

describe('testing funtions in project-1.js', () => {

    it('test multiplyby10 function', () => {
        // arrange
        const exp = 2 * 10
        //act
        const result = helpers.multiplyByTen(2)
        //asert
        expect(result).toEqual(exp);
    })
    it('test areSameLength function', () => {
        // arrange
        const str1 = "testing"
        const str2 = "testing"
        //act
        const result = helpers.areSameLength(str2, str2)
        //asert
        expect(result).toEqual(true);
    })
    it('test subtractFive function', () => {
        // arrange
        const exp = 10 - 5;
        //act
        const result = helpers.subtractFive(10)
        //asert
        expect(result).toEqual(exp);

    })
    it('test areEqual function', () => {
        // arrange
        //act
        const result = helpers.areEqual(5, 5)
        //asert
        expect(result).toEqual(true);

    })
    it('test lessThanNinety function', () => {
        // arrange
        const exp = 88;
        //act
        const result = helpers.lessThanNinety(exp)
        //asert
        expect(result).toEqual(true);

    })
    it('test greaterThanFifty function', () => {
        // arrange
        //act
        const result = helpers.greaterThanFifty(55)
        //asert
        expect(result).toEqual(true);

    })
    it('test add function', () => {
        // arrange
        const exp = 10 + 5;
        //act
        const result = helpers.add(10, 5)
        //asert
        expect(result).toEqual(exp);

    })
    it('test subtract function', () => {
        // arrange
        const exp = 10 - 5;
        //act
        const result = helpers.subtract(10, 5)
        //asert
        expect(result).toEqual(exp);

    })
    it('test divide function', () => {
        // arrange
        const exp = 10 / 5;
        //act
        const result = helpers.divide(10, 5)
        //asert
        expect(result).toEqual(exp);

    })
    it('test multiply function', () => {
        // arrange
        const exp = 10 * 5;
        //act
        const result = helpers.multiply(10, 5)
        //asert
        expect(result).toEqual(exp);

    })
    it('test getRemainder function', () => {
        // arrange
        const exp = 10 % 5;
        //act
        const result = helpers.getRemainder(10, 5)
        //asert
        expect(result).toEqual(exp);

    })
    it('test isEven function', () => {
        // arrange
        //act
        const result = helpers.isEven(10)
        //asert
        expect(result).toEqual(true);

    })
    it('test isOdd function', () => {
        // arrange
        //act
        const result = helpers.isOdd(5)
        //asert
        expect(result).toEqual(true);

    })
    it('test square function', () => {
        // arrange
        const exp = 10 * 10;
        //act
        const result = helpers.square(10)
        //asert
        expect(result).toEqual(exp);

    })
    it('test cube function', () => {
        // arrange
        const exp = 10 * 10 * 10;
        //act
        const result = helpers.cube(10)
        //asert
        expect(result).toEqual(exp);

    })
    it('test raiseToPower function', () => {
        // arrange
        const exp = 10 ** 5;
        //act
        const result = helpers.raiseToPower(10, 5)
        //asert
        expect(result).toEqual(exp);

    })
    it('test roundNumber function', () => {
        // arrange
        const exp = Math.round(10.5);
        //act
        const result = helpers.roundNumber(10.5)
        //asert
        expect(result).toEqual(exp);

    })
    it('test roundUp function', () => {
        // arrange
        const exp = Math.ceil(5.5);
        //act
        const result = helpers.roundUp(5.5)
        //asert
        expect(result).toEqual(exp);

    })
    it('test addExclamationPoint function', () => {
        // arrange
        const exp = 'test!';
        //act
        const result = helpers.addExclamationPoint('test')
        //asert
        expect(result).toEqual(exp);

    })
    it('test combineNames  function', () => {
        // arrange
        const exp = 'First Last';
        //act
        const result = helpers.combineNames('First', 'Last')
        //asert
        expect(result).toEqual(exp);

    })
    it('test getGreetingfunction', () => {
        // arrange
        const exp = 'Hello test!';
        //act
        const result = helpers.getGreeting('test')
        //asert
        expect(result).toEqual(exp);

    })
    it('test getRectangleArea function', () => {
        // arrange
        const exp = 10 * 5;
        //act
        const result = helpers.getRectangleArea(10, 5)
        //asert
        expect(result).toEqual(exp);

    })
    it('test getTriangleArea function', () => {
        // arrange
        const exp = 0.5 * 10 * 5;
        //act
        const result = helpers.getTriangleArea(10, 5)
        //asert
        expect(result).toEqual(exp);

    })
    it('test multiplyby10 function', () => {
        // arrange
        const exp = 10 - 5;
        //act
        const result = helpers.subtractFive(10)
        //asert
        expect(result).toEqual(exp);

    })
    it('test getCircleArea function', () => {
        // arrange
        const exp = Math.PI * 10 * 10;
        //act
        const result = helpers.getCircleArea(10)
        //asert
        expect(result).toEqual(exp);

    })
    it('test getRectangularPrismVolume function', () => {
        // arrange
        const exp = 10 * 5 * 5;
        //act
        const result = helpers.getRectangularPrismVolume(10, 5, 5)
        //asert
        expect(result).toEqual(exp);

    })

})