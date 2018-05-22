const funcs = require('./project-2');

describe('project-2 tests', () => {
	test('getBiggest', () => {
		const biggest = funcs.getBiggest(2, 1);
		const biggest1 = funcs.getBiggest(-2, 1);
		const biggest2 = funcs.getBiggest(0, 1);

		expect(biggest).toEqual(2);
		expect(biggest1).toEqual(1);
		expect(biggest2).toEqual(1);
	});
	test('greeting', () => {
		const German = funcs.greeting();

		expect(German).toBe('Guten Tag!');
	});
});
