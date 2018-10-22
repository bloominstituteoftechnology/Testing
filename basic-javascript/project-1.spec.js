const helpers = require('./project-1');

// Some things to test:
// 
// Type Handling (string, number, boolean, etc)


/// --- Project One Tests ---
describe('project-1.js', () => {
    // -- Multiply by 10 --
    describe('Multiply by 10', () => {

        it('Should return the provided input multiplied by 10', () => {
            let expected = 900;
            expect(helpers.multiplyByTen(90)).toBe(expected);
        })
    })


})