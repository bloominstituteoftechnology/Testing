const helpers = require('./project-1');

// start testing!
describe('project-1.js', () => {
   describe('multiplyByTen', () => {
       it('should multiply provided number by ten', () => {
           const expected = 100;

           const actual = helpers.multiplyByTen(10);

           expect(actual).toEqual(expected)
       });
   });

    describe('subtractFive', () => {
        it('should subtract a number by five', () => {
            const expected = 5;

            const actual = helpers.subtractFive(10);

            expect(actual).toEqual(expected)
        });
    });
});