const helpers = require('./project-1');

// start testing!
describe('project-1', () => {
   
    describe('multiplyByTen() ', () => {
        it('should provide right answer when mutiply by 10', () => {
            expect(helpers.multiplyByTen(10)).toEqual(100);
        });

        it('should return 0 when no number is calling', () => {
            expect(helpers.multiplyByTen()).toBe(0);
        })
        it('should throw err when call other than number', () => {
            expect(() => {
                helpers.multiplyByTen('five')})
                .toThrow();
            expect(() => {
                helpers.multiplyByTen('/,.')})
                .toThrow();
        })
    })

    describe('subtractFive() ', () => {
        it('shou provide right answer when subract 5', () => {
            expect(helpers.subtractFive(10)).toEqual(5);
        })

        it('should throw err when calling other than number', () => {
            expect(() => {
                helpers.subtractFive('ten')
            }).toThrow();
        })
    })

    describe('areSameLenghth() ', () => {
        it('shoud provide right answer when provide same number', () => {
            expect(helpers.areSameLength(5,5)).toBe(true);
        })
    }) 

    describe('areEqual() ', () => {
        it('should be equal ', () => {
            expect(helpers.areEqual(5,5)).toBe(true);
        })
    })

    describe('lessThanNinety() ', () => {
        it('lessThanNinety works properly', () => {
            expect(helpers.lessThanNinety(80)).toBe(true)
        })
    })
})
