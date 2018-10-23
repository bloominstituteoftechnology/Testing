const helpers = require('./project-1.js');

describe('project-1.js', () => {

    describe('jest', () => {
        test('should run tests', () => {
            //test everything
        });
        
        it('should run tests using it() in addition to test()', () => {
            // Arrange : set up the world
            // Act : execute the code you're testing
            // Assert : check that it works
        });
    });

    // describe('checkForNumber', () => {
    //     it('should return 0 when called with no value', () => {
    //         const product = helpers.multiplyByTen();
        
    //         expect(product).toBe(0);
    //     });

    //     it('should throw error when called with a string', () => {
    //         expect(() => { helpers.multiplyByTen('five') }).toThrow();
    //     });
    // });
    
    describe('multiplyByTen()', () => {
        it('should multiply provided number by 10', () => {
            const expected = 100;
        
            const actual = helpers.multiplyByTen(10);
        
            expect(actual).toEqual(expected);
        });
        
        it('should return 0 when called with no value', () => {
            const product = helpers.multiplyByTen();
        
            expect(product).toBe(0);
        });

        it('should throw error when called with a string', () => {
            expect(() => { helpers.multiplyByTen('five') }).toThrow();
        });
    });

    describe('subtractFive', () => {
        it('should subtract 5 from provided number', () => {
            const expected = 5;

            const actual = helpers.subtractFive(10);

            expect(actual).toEqual(expected);
        });

        it('should return 0 when called with no value', () => {
            const product = helpers.multiplyByTen();
        
            expect(product).toBe(0);
        });
        
        it('should throw error when called with a string', () => {
            expect(() => { helpers.multiplyByTen('five') }).toThrow();
        });
    });
    
    // describe('areSameLength', () => {
    //     it('should return false if strings have different lengths', () => {
    //         const expected = false;

    //         const actual = helpers.areSameLength('hello', 'hey');

    //         expect(actual).toEqual(expected);
    //     });

    //     it('should return true if strings have equal lengths', () => {
    //         const expected = true;

    //         const actual = helpers.areSameLength('hello', 'phone');

    //         expect(actual).toEqual(expected);
    //     });
    // });

    describe('areSameLength', () => {
        it('should return true if called with strings of the same length', () => {
          const str1 = 'foo';
          const str2 = 'bar';
    
          const actual = helpers.areSameLength(str1, str2);
    
          expect(actual).toBe(true);
        });
    
        it('should return false if called with strings of different length', () => {
          expect(helpers.areSameLength('ab', 'a')).toBe(false);
        });
    
        it('should return null if one or both arguments is null or undefined', () => {
          expect(helpers.areSameLength()).toBe(null);
          expect(helpers.areSameLength('a')).toBe(null);
          expect(helpers.areSameLength(undefined, 'a')).toBe(null);
          expect(helpers.areSameLength(null, 'a')).toBe(null);
          expect(helpers.areSameLength('a', null)).toBe(null);
        });
    
        it('should return null if called with a non string argument', () => {
          expect(helpers.areSameLength({}, 'a')).toBe(null);
          expect(helpers.areSameLength([], 'a')).toBe(null);
          expect(helpers.areSameLength(false, 'a')).toBe(null);
          expect(helpers.areSameLength('a', {})).toBe(null);
          expect(helpers.areSameLength('a', [])).toBe(null);
          expect(helpers.areSameLength('a', true)).toBe(null);
          expect(helpers.areSameLength(1, 3)).toBe(null);
          expect(helpers.areSameLength(() => {})).toBe(null);
        });
      });

    describe('areEqual', () => {
        it('should return false if numbers are not equal', () => {
            const expected = false;

            const actual = helpers.areEqual(5, 6);

            expect(actual).toEqual(expected);
        });

        it('should return true if numbers are equal', () => {
            const expected = true;

            const actual = helpers.areEqual(5, 5);

            expect(actual).toEqual(expected);
        });
    });

    describe('lessThanNinety', () => {
        it('should return false if the number is greater than or equal to 90', () => {
            const expected = false;

            const actual = helpers.lessThanNinety(91);

            expect(actual).toEqual(expected);
        });

        it('should return true if the number is less than 90', () => {
            const expected = true;

            const actual = helpers.lessThanNinety(89);

            expect(actual).toEqual(expected);
        });
    });

    describe('greaterThanFifty', () => {
        it('should return true if the number is greater than 50', () => {
            const expected = true;

            const actual = helpers.greaterThanFifty(51);

            expect(actual).toEqual(expected);
        });

        it('should return true if the number is less than or equal to 50', () => {
            const expected = true;

            const actual = helpers.lessThanNinety(50);

            expect(actual).toEqual(expected);
        });
    });



    
    
    // it ('should check deep equality', () => {
    //     const a = { foo: 'bar' };
    //     const b = {foo: 'bar' };
    
    //     expect(a).toEqual(b);
    // });
});
