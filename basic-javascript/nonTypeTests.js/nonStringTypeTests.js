module.exports = function(testFunction) {
	// Note: It is assumed testFunction will take in two arguments.
	const nonStringTypeError = 'Values must be strings.';

	it('should throw an error when called with a non-string type', () => {
		expect(() => {
			testFunction(1, 2);
		}).toThrow(nonStringTypeError);

		expect(() => {
			testFunction(true, false);
		}).toThrow(nonStringTypeError);

		expect(() => {
			testFunction({ one: 1 }, { two: 2 });
		}).toThrow(nonStringTypeError);

		expect(() => {
			testFunction([ 1, 'one' ], [ 2, 'two' ]);
		}).toThrow(nonStringTypeError);

		expect(() => {
			testFunction(new Date(), new Date());
		}).toThrow(nonStringTypeError);

		expect(() => {
			testFunction(null, null);
		}).toThrow(nonStringTypeError);

		expect(() => {
			const myFunc = () => { return true; };
			testFunction(myFunc, myFunc);
		}).toThrow(nonStringTypeError);

		expect(() => {
			testFunction(undefined, undefined);
		}).toThrow(nonStringTypeError);
	});
};
