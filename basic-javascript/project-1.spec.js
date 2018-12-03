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
        it('lessThanNinety should be true', () => {
            expect(helpers.lessThanNinety(80)).toBe(true)
        })
    })

    describe('greaterThanFifty() ', () => {
        it('greaterThanFifty should be true', () => {
            expect(helpers.greaterThanFifty(51)).toBe(true)
        })
    })

    describe('add() ', () => {
        it('should add and answer correct', () => {
            expect(helpers.add(5, 1)).toEqual(6)
        })
        it('should throw err when calling other than number', () => {
            expect(() => {
                helpers.add(5, 'ten')
            }).toThrow();
        })
    })

    describe('subtract() ', () => {
        it('should be able to correctly subtract', () => {
            expect(helpers.subtract(5,1)).toEqual(4);
        })
        it('should throw err when calling other than number', () => {
            expect(() => {
                helpers.subtract(5, 'ten')
            }).toThrow();
        })
    })

    describe('divide() ', () => {
        it('should be able to correctly divide', () => {
            expect(helpers.divide(6,2)).toEqual(3);
        })
        it('should throw err when calling other than number', () => {
            expect(() => {
                helpers.divide(5, 'ten')
            }).toThrow();
        })
    })

    describe('multiply() ', () => {
        it('should be able to correctly multiply', () => {
            expect(helpers.multiply(6,2)).toEqual(12);
        })
        it('should throw err when calling other than number', () => {
            expect(() => {
                helpers.multiply(5, 'ten')
            }).toThrow();
        })
    })
    
    describe('getRemainder() ', () => {
        it('should be able to correctly get remainder', () => {
            expect(helpers.getRemainder(5,2)).toEqual(1);
        })
        it('should throw err when calling other than number', () => {
            expect(() => {
                helpers.getRemainder(5, 'ten')
            }).toThrow();
        })
    })

})
