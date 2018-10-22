const helpers = require('./project-1');

// start testing!

describe('project-1.js', () => {

    describe('multiplyByTen()', () => {

        it('should multiply provided number by ten', () => {
            
            const expected = 100;
            
            const actual = helpers.multiplyByTen(10);
            
            expect(actual).toEqual(expected);
        });
        
    })

    describe('subtractFive()', () => {

        it('should subtract provided number by five', () => {
            const expected = 95;
            
            const actual = helpers.subtractFive(100);
            
            expect(actual).toEqual(expected);
        });
    })
    
    it ('should return true of both strings are the same length', () => {
        const expected = true;
        
        const actual = helpers.areSameLength('hello', 'teach');
        
        expect(actual).toEqual(expected);
    });
    
    
});