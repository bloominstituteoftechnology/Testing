const helpers = require('./project-1');

// start testing!
describe('project-1.js', () => {
   describe('multiplyByTen', () => {
       it('should multiply provided number by ten', () => {
           const expected = 100;

           const actual = helpers.multiplyByTen(10);

           expect(actual).toEqual(expected);
       });

       it('should return 0 when called with no value', () => {
           const product = helpers.multiplyByTen();

           expect(product).toBe(0);
       });

       it('should throw an error when called with a string', () => {
           expect( () => { helpers.multiplyByTen('five') }).toThrow();
       });
   });

    describe('subtractFive', () => {
        it('should subtract a number by five', () => {
            const expected = 5;

            const actual = helpers.subtractFive(10);

            expect(actual).toEqual(expected);
        });

        it('should return 0 when called with no value', () => {
            const product = helpers.subtractFive();

            expect(product).toBe(0);
        });

        it('should throw an error when called with a string', () => {
            expect( () => { helpers.subtractFive('five') }).toThrow();
        });
    });

    describe('areTheSameLength', () => {
        it('should return true if same length, false if not', () => {
            const expected = true;

            const actual = helpers.areSameLength(5, 5);

            expect(actual).toEqual(expected);
        });

        it('should return false when called with no value', () => {
            const product = helpers.areSameLength();

            expect(product).toBe(false);
        });
    });

    describe('areEqual', () => {
        it('should return true if values are the same', () => {
            const expected = true;

            const actual = helpers.areEqual(5, 5);

            expect(actual).toEqual(expected);
        });

        it('should return false when called with no value', () => {
            const product = helpers.areEqual();

            expect(product).toBe(false);
        });
    });
});