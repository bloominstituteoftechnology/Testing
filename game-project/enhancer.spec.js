const enhancer = require('./enhancer.js');

describe('actions', () => {
    describe('attempt enhance', () => {
        
        describe('sucess', () => {
            it('should increase level by one', () => {
                const item = { level: 0 }
                const actual = enhancer.enhance(item);
                expect(actual.level).toBe(1);
                expect(enhancer.enhance(actual).level).toBe(2);
                expect(enhancer.enhance(actual).level).toBe(3);
            })
        })

        describe('fail', () => {
            it('should return fail +1 if level is < 16', () => {
                const item = { level: 0, failCount: 0, durability:100 }
                const actual = enhancer.fail(item);
                expect(actual.failCount).toBe(1);
                expect(actual.level).toBe(0);
                expect(actual.durability).toBe(95);
                expect(enhancer.fail(actual).failCount).toBe(2);
                expect(enhancer.fail(actual).level).toBe(0);
                expect(enhancer.fail(actual).durability).toBe(90);
            })
    
            it('should return fail +2 if level is = 16', () => {
                const item = { level: 'I', failCount: 4, durability:85}
                const actual = enhancer.fail(item);
                expect(actual.failCount).toBe(6);
                expect(actual.level).toBe('I');
                expect(actual.durability).toBe(80);
            })
    
            it('should return fail +3 if level is = 17', () => {
                const item = { level: 'II', failCount: 6, durability: 60 }
                const actual = enhancer.fail(item);
                expect(actual.failCount).toBe(9);
                expect(actual.level).toBe('II');
                expect(actual.durability).toBe(55);
                expect(enhancer.fail(actual).durability).toBe(50);
            })
    
            it('should return fail +4 if level is = 18', () => {
                const item = { level: 'III', failCount: 3, durability: 50  }
                const actual = enhancer.fail(item);
                expect(actual.failCount).toBe(7);
                expect(actual.durability).toBe(45);
            })
    
            it('should return fail +5 if level is = 19', () => {
                const item = { level: 'IV', failCount: 9 }
                const actual = enhancer.fail(item);
                expect(actual.failCount).toBe(14);
            })
        })
    })

    describe('repair', () => {
        it('should return durability plus 10 if less or equal to 90', () => {
            const item = { durability: 40 }
            const actual = enhancer.repair(item);
            expect(actual.durability).toBe(50);
        })
        it('should return durability of 100 if durability is between 91-100', () => {
            const item = { durability: 91 }
            const actual = enhancer.repair(item);
            expect(actual.durability).toBe(100);
        })
        it('should return current durability if durability is 100', () => {
            const item = { durability: 100 }
            const actual = enhancer.repair(item);
            expect(actual.durability).toBe(100);
        })
    })  
})
