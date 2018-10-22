const helpers = require('./project-1');

// start testing!
describe('project-1.js', () => {

    it('should multiply provided num by 10', () => {
        const expected = 100;
      
        const actual = helpers.multiplyByTen(10);
      
        expect(actual).toEqual(expected)
      
      });

    it('should subtract 5 from a num', () => {
        const expected = 5;

        const actual = helpers.subtractFive(10);

        expect(actual).toEqual(expected);
    })

    it('should check if same length', () => {
        const expected = true;

        const actual = helpers.areSameLength('ted', 'red');

        expect(actual).toBe(expected);
    })

    it('should check to see if x and y are equal', () => {
        const expected = true;

        const actual = helpers.areEqual('ted', 'ted');
        expect(actual).toBe(expected);
    })
    
    it('should see if num is less than ninety', () => {
        const expected = true;

        const actual = helpers.lessThanNinety(89);
        expect(actual).toBe(expected);
    })

    it('should check to see if num is greater than fifety', () => {
        const expected = true;

        const actual = helpers.greaterThanFifty(51);
        expect(actual).toBe(expected);
    })

    it('should add x and y', () => {
        const expected = 10;

        const actual = helpers.add(5,5);
        expect(actual).toEqual(expected);

    })

    it('should subtract x from y', () => {
        const expected = 9;

        const actual = helpers.subtract(30, 21);
        expect(actual).toEqual(expected);
    })

    it('should divide x by y', () => {
        const expected = 4;

        const actual = helpers.divide(24, 6);
        expect(actual).toEqual(expected);
    })


    it('should multipy x by y', () => {
        const expected = 9;

        const actual = helpers.multiply(3, 3);
        expect(actual).toEqual(expected);
    })


    it('should get remainder of x divided by y', () => {
        const expected = 3;

        const actual = helpers.getRemainder(24, 7);
        expect(actual).toEqual(expected);
    })

    it('should check to see if num is even', () => {
        const expected = true;

        const actual = helpers.isEven(6);
        expect(actual).toBe(expected);
    })

    it('should check to see if num is odd', () => {
        const expected = true;

        const actual = helpers.isOdd(7);
        expect(actual).toBe(expected);
    })

    it('should find square of num', () => {
        const expected = 16;

        const actual = helpers.square(4);
        expect(actual).toEqual(expected);
    })

    it('should find num cubed', () => {
        const expected = 27;

        const actual = helpers.cube(3);
        expect(actual).toEqual(expected);
    })

    it('should raise num to the power of exponent', () => {
        const expected = 27;

        const actual = helpers.raiseToPower(3, 3);
        expect(actual).toEqual(expected);
    })

    it('should round num', () => {
        const expected = 10;

        const actual = helpers.roundNumber(9.8);
        expect(actual).toEqual(expected);
    })

    it('should round num up', () => {
        const expected = 10;

        const actual = helpers.roundUp(9.8);
        expect(actual).toEqual(expected);
    })

    it('should add exclamation point to end of str', () => {
        const expected = 'hello!';

        const actual = helpers.addExclamationPoint('hello');
        expect(actual).toBe(expected);
    })

    it('should combine first and last name', () => {
        const expected = 'Austin Pendergrast';

        const actual = helpers.combineNames('Austin', 'Pendergrast');
        expect(actual).toEqual(expected);
    })

    it('should return Hello name!', () => {
        const expected = 'Hello Austin!';

        const actual = helpers.getGreeting('Austin');
        expect(actual).toEqual(expected);
    })

    it('should get Area using length and width', () => {
        const expected = 16;

        const actual = helpers.getRectangleArea(4,4);
        expect(actual).toEqual(expected);
    })

    it('should get triangle area using base and height', () => {
        const expected = 5;

        const actual = helpers.getTriangleArea(2, 5);
        expect(actual).toEqual(expected);
    })

    it('should get circle area using radius', () => {
        const expected = 78.53981633974483;

        const actual = helpers.getCircleArea(5);
        expect(actual).toEqual(expected);
    })

    
    it('should get rectangular prism volume using len wid height', () => {
        const expected = 27;

        const actual = helpers.getRectangularPrismVolume(3, 3, 3);
        expect(actual).toEqual(expected);
    })

})