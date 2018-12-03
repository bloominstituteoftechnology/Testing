const helpers = require('./project-1');

// start testing!

test('should run tests', () => {});


describe('project-1.js', () => {

    describe('multiplyByTen', () => {
	it('should multiply number by 10', () => {
	    const expected = 100;
	    const actual = helpers.multiplyByTen(10);
	    expect(actual).toEqual(expected);
	});
    });
});