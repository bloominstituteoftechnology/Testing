const helpers = require('./project-1');

// start testing!
describe('project-1', () => {
   
    describe('multiplyByTen()', () => {
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

    describe('subtractFive', () => {
        it('shou provide right answer when subract 5', () => {
            expect(helpers.subtractFive(10)).toEqual(5);
        })

        it('should throw err when calling other than number', () => {
            expect(() => {
                helpers.subtractFive('ten')
            }).toThrow();
        })
        
    })


})
