const enhancer = require('./enhancer.js');

describe('enhance', () => {
    it('should increase level by one', () => {
        const item = {
            level: 0, 
        }

        const actual = enhancer.enhance(item); //should be 1

        expect(actual.level).toBe(1);
        expect(enhancer.enhance(actual).level).toBe(2);
        expect(enhancer.enhance(actual).level).toBe(3);
    })
})





// -ITEM
//   -fail count(no max, starts at 0)
//   -duribility(max 100, starts at 100)
//   -Level(max 20, 1-15[arabic], 16-20[roman])
//   

//     -enhance(attempt) (either adds to fail count or enhance)
//          -if fail(fail count increases(according to enhanceLevel), durability decreases by 5)
//          -if suceeds(failcount === 0)
//     -repair
            // -(durability+10)