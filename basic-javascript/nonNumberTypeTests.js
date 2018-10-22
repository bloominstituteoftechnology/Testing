module.exports = function(testFunction) {
	const nonNumberTypeError = 'Value must be a number.';

	it('should throw an error when called with a non-number type', () => {
		expect(() => {
			testFunction('one');
		}).toThrow(nonNumberTypeError);

		expect(() => {
			testFunction(false);
		}).toThrow(nonNumberTypeError);

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

		expect(() => {
			const testFunc = () => { return true; };
			testFunction(testFunc);
		}).toThrow(nonNumberTypeError);

		expect(() => {
			testFunction(undefined);
		}).toThrow(nonNumberTypeError);
	});
};
