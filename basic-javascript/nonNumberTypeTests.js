module.exports = function(testFunction) {
	const nonNumberTypeError = 'Value must be a number.';

	it('should throw an error when called with a string type', () => {
		expect(() => {
			testFunction('one');
		}).toThrow(nonNumberTypeError);
	});

	it('should throw an error when called with a boolean type', () => {
		expect(() => {
			testFunction(false);
		}).toThrow(nonNumberTypeError);
	});

	// Note: objects, arrays, dates, and null will all be object types in JS.
	it('should throw an error when called with an oject type', () => {
		expect(() => {
			testFunction({ one: 1 });
		}).toThrow(nonNumberTypeError);

		expect(() => {
			testFunction([ 1, 'one' ]);
		}).toThrow(nonNumberTypeError);

		expect(() => {
			testFunction(new Date());
		}).toThrow(nonNumberTypeError);

		expect(() => {
			testFunction(null);
		}).toThrow(nonNumberTypeError);
	});

	it('should throw an error when called with a function type', () => {
		expect(() => {
			const testFunc = () => { return true; };
			testFunction(testFunc);
		}).toThrow(nonNumberTypeError);
	});

	it('should throw an error when called with an undefined type', () => {
		expect(() => {
			testFunction(undefined);
		}).toThrow(nonNumberTypeError);
	});
};
