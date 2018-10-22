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

    
})