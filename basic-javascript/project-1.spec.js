const helpers = require('./project-1');

// start testing!

describe('project-1.js', () => {
    describe('jest', () => {});
    test('should run tests', () => {});

    describe('multiplyByTen', () => {
        it('should multiply by ten', () => {
            const expected = 120;
            const actual = helpers.multiplyByTen(12);
            expect(actual).toEqual(expected);
        })
    }) // multiplybyten
    describe('subtractFive', () => {
        it('should subtract by five', () => {
        const expected = 5;
        const actual = helpers.subtractFive(10);
        expect(actual).toEqual(expected);
    })
    }) // subtractfive
    describe('areSameLength', () => {
        it('should return if the same length', () => {
            const expected = true;
            const answer = helpers.areSameLength('hola', 'ball');
            expect(answer).toBe(expected)
        })
    }) // areSameLength
    describe('areEqual', () => {
        it('should say if eqyal', () => {
            const expected = true;
            const answer = helpers.areSameLength('100', '100');
            expect(answer).toBe(expected)
        })
    }) // areEqual

}) // project js
