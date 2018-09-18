const enhancer = require('./enhancer.js');

describe('actions', () => {
    describe('attempt enhance', () => {
        describe('sucess', () => {
            it('should increase level by one', () => {
                const item = { level: 0 }
        
                const actual = enhancer.enhance(item); //should be 1
        
                expect(actual.level).toBe(1);
                expect(enhancer.enhance(actual).level).toBe(2);
                expect(enhancer.enhance(actual).level).toBe(3);
            })
        })

        describe('fail', () => {
            it('should return fail +1 if level is < 16', () => {
                const item = { level: 0, failCount: 0 }
                const actual = enhancer.fail(item);
    
                expect(actual.failCount).toBe(1);
                expect(enhancer.fail(actual).failCount).toBe(2);
            })
    
            it('should return fail +2 if level is = 16', () => {
                const item = { level: 16, failCount: 4 }
                const actual = enhancer.fail(item);
    
                expect(actual.failCount).toBe(6);
            })
    
            it('should return fail +3 if level is = 17', () => {
                const item = { level: 17, failCount: 6 }
                const actual = enhancer.fail(item);
    
                expect(actual.failCount).toBe(9);
            })
    
            it('should return fail +4 if level is = 18', () => {
                const item = { level: 18, failCount: 3 }
                const actual = enhancer.fail(item);
    
                expect(actual.failCount).toBe(7);
            })
    
            it('should return fail +5 if level is = 19', () => {
                const item = { level: 19, failCount: 9 }
                const actual = enhancer.fail(item);
    
                expect(actual.failCount).toBe(14);
            })
        })

    })

    describe('repair', () => {
        it('should return durability plus 10', () => {
            const item = { durability: 40 }
            const actual = enhancer.repair(item);

            expect(actual.durability).toBe(50);
        })
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