const helpers = require('./project-1');

// start testing!
describe('project-1.js', () => {

    it('should multiply provided num by 10', () => {
        expect(helpers.multiplyByTen(10)).toBe(100);
        expect(helpers.multiplyByTen('10')).toBe(100);
        expect(helpers.multiplyByTen(undefined)).toBe(undefined);
        
      
      });

    it('should subtract 5 from a num', () => {
        expect(helpers.subtractFive(10)).toBe(5);
        expect(helpers.subtractFive('10')).toBe(5);
        expect(helpers.subtractFive(undefined)).toBe(undefined);
        
    })

    describe('check if strings are same length', () => {

        it('should check if same length', () => {
            const expected = true;

            const actual = helpers.areSameLength('ted', 'red');

            expect(actual).toBe(expected);
        })

        it('should return false if called with strings of the different length', () => {
        
            expect(helpers.areSameLength('ab', 'a')).toBe(false);
        })
    
        it('should return null if one orboth arguments are undefined', () => {
            expect(helpers.areSameLength()).toBe(null);
            expect(helpers.areSameLength('a')).toBe(null);
            expect(helpers.areSameLength(undefined, 'a')).toBe(null);
        })
    
        it('should return null if called with a non string argument', () => {
            expect(helpers.areSameLength({}, 'a')).toBe(null);
        })

    })

    it('should check to see if x and y are equal', () => {
        expect(helpers.areEqual('a', 'a')).toBe(true);
        expect(helpers.areEqual(1,1)).toBe(true);
        expect(helpers.areEqual(undefined, undefined)).toBe(false);
        expect(helpers.areEqual(null, null)).toBe(false);
    })
    
    it('should see if num is less than ninety', () => {
        const expected = true;

        const actual = helpers.lessThanNinety(89);
        expect(actual).toBe(expected);

        expect(helpers.lessThanNinety('89')).toBe(true);
        expect(helpers.lessThanNinety(undefined)).toBe(undefined);
    })

    it('should check to see if num is greater than fifety', () => {
        const expected = true;

        const actual = helpers.greaterThanFifty(51);
        expect(actual).toBe(expected);
        expect(helpers.greaterThanFifty('89')).toBe(true);
        expect(helpers.greaterThanFifty(undefined)).toBe(undefined);
    })

    it('should add x and y', () => {
        const expected = 10;

        const actual = helpers.add(5,5);
        expect(actual).toEqual(expected);
        expect(helpers.add(undefined, 5)).toBe(null);
        expect(helpers.add(5, undefined)).toBe(null);
        expect(helpers.add(5)).toBe(null);

    })

    it('should subtract x from y', () => {
        const expected = 9;

        const actual = helpers.subtract(30, 21);
        expect(actual).toEqual(expected);
        expect(helpers.subtract(undefined, 5)).toBe(null);
        expect(helpers.subtract(5, undefined)).toBe(null);
        expect(helpers.subtract(5)).toBe(null);
    })

    it('should divide x by y', () => {
        const expected = 4;

        const actual = helpers.divide(24, 6);
        expect(actual).toEqual(expected);
        expect(helpers.divide(undefined, 5)).toBe(null);
        expect(helpers.divide(5, undefined)).toBe(null);
        expect(helpers.divide(5)).toBe(null);
    })


    it('should multipy x by y', () => {
        const expected = 9;

        const actual = helpers.multiply(3, 3);
        expect(actual).toEqual(expected);
        expect(helpers.multiply(undefined, 5)).toBe(null);
        expect(helpers.multiply(5, undefined)).toBe(null);
        expect(helpers.multiply(5)).toBe(null);
    })


    it('should get remainder of x divided by y', () => {
        const expected = 3;

        const actual = helpers.getRemainder(24, 7);
        expect(actual).toEqual(expected);
        expect(helpers.getRemainder(undefined, 5)).toBe(null);
        expect(helpers.getRemainder(5, undefined)).toBe(null);
        expect(helpers.getRemainder(5)).toBe(null);
    })

    it('should check to see if num is even', () => {
        const expected = true;

        const actual = helpers.isEven(6);
        expect(actual).toBe(expected);
        expect(helpers.isEven('six')).toBe(null);
        expect(helpers.isEven(undefined)).toBe(null);

        
    })

    it('should check to see if num is odd', () => {
        const expected = true;

        const actual = helpers.isOdd(7);
        expect(actual).toBe(expected);
        expect(helpers.isOdd(undefined)).toBe(null);
        expect(helpers.isOdd('six')).toBe(false);
    })

    it('should find square of num', () => {
        const expected = 16;

        const actual = helpers.square(4);
        expect(actual).toEqual(expected);
        expect(helpers.square(undefined)).toBe(null);
        expect(helpers.square('six')).toBe(null);
    })

    it('should find num cubed', () => {
        const expected = 27;

        const actual = helpers.cube(3);
        expect(actual).toEqual(expected);
        expect(helpers.cube(undefined)).toBe(null);
        expect(helpers.cube('six')).toBe(null);
    })

    it('should raise num to the power of exponent', () => {
        const expected = 27;

        const actual = helpers.raiseToPower(3, 3);
        expect(actual).toEqual(expected);
        expect(helpers.raiseToPower('seven', 3)).toBe(null);
        expect(helpers.raiseToPower(3,'seven')).toBe(null);
        expect(helpers.raiseToPower(3)).toBe(null);
        
    })

    it('should round num', () => {
        const expected = 10;

        const actual = helpers.roundNumber(9.8);
        expect(actual).toEqual(expected);
        expect(helpers.roundNumber(undefined)).toBe(null);
        expect(helpers.roundNumber('six')).toBe(null);
    })

    it('should round num up', () => {
        const expected = 10;

        const actual = helpers.roundUp(9.8);
        expect(actual).toEqual(expected);
        expect(helpers.roundUp(undefined)).toBe(null);
        expect(helpers.roundUp('six')).toBe(null);
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