const helpers = require('./project-1');

// start testing!
describe('My Math Library', () => {
    describe('the `multiplyByTen()` function/method', () => {
        it('should multiply each number by 10', ()=> {
            expect(helpers.multiplyByTen(10)).toBe(100);
            expect(helpers.multiplyByTen(5)).toBe(50);

        });
        // it('should return an error if not a number', () => {
        //     expect(helpers.multiplyByTen("10")).not.toThrow(error);
        //.toBeFalsy()
        // });

    });

    describe('the `subtractFive()` function/method', () => {
        it('should subtract five from any number of input', () => {
            expect(helpers.subtractFive(10)).toEqual(5);
            expect(helpers.subtractFive(7)).toEqual(2);
            expect(helpers.subtractFive(2)).toEqual(-3);
            expect(helpers.subtractFive(2)).not.toEqual(-300);
            
        })

    });

    describe('the `areSameLength()` method', () => {
        it('should return true if the two strings are the asme length', () => {
            expect(helpers.areSameLength('alls', 'tatt')).toBe(true);

        });

        it('should return false if the two strings are the asme length', () => {
            expect(helpers.areSameLength('allss', 'tatt')).toBe(false);
        });
        it('should return an false if the input are not strings', () => {
            expect(helpers.areSameLength(10, 'tatt')).toBe(false);
            expect(helpers.areSameLength(4, 'tatt')).toBe(false);

        });
    });

    describe('the `areEqual()` function.', () => {
        test('if the vales are equal to each other', () => {
            expect(helpers.areEqual(10, 1)).toBe(false);
            expect(helpers.areEqual(710, 710)).toBe(true);
            
            expect(helpers.areEqual('10', 10)).toBe(false);
            expect(helpers.areEqual(10, 10)).toBe(true);
        });
    });

    describe('the `lessThanNinety()` function.', () => {
        it('should return tru if a number is less than or  90', () => {
            expect(helpers.lessThanNinety(70)). toEqual(true);
        });

        it('should return false if a number is greater than or equal to 90', () => {
            expect(helpers.lessThanNinety(170)). toEqual(false);
        });
    });

    describe('the `greaterThanFifty()` function.', () => {
        it('should be false if not greate r than 50', () => {
            expect(helpers.greaterThanFifty(10)).toBe(false);
        });
        it('should be true if greater than 50', () => {
            expect(helpers.greaterThanFifty(100)).toBe(true);
        });
    });

    describe('the add() method', () => {
        // test happy path
        test('adds two numbers correctly', () => {
            //assertion using matchers
            expect(helpers.add(22, 2)).toEqual(24);

            // expext(helpers.add(12, 1)).toBe(13);
            
        });
    });


    describe('', () => {

    });

    describe('', () => {});

    describe('', () => {});

    describe('', () => {});

    describe('', () => {});

    describe('', () => {});

    describe('', () => {});


});