// Complete the following functions.

/* eslint-disable no-unused-vars */

const nFibonacci = n => {
	if (n <= 1) return 1;
	return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = n => {
	if (n < 1) return 1;
	return n * nFactorial(n - 1);
};

const checkMatchingLeaves = obj => {
	let val;
	let allMatch = true;
	const checkLeaves = object => {
		Object.keys(object).forEach(key => {
			if (val === undefined && typeof key !== 'object') {
				val = object[key];
				return undefined;
			}
			if (typeof object[key] === 'object') return checkLeaves(object[key]);
			if (object[key] !== val) {
				allMatch = false;
				return undefined;
			}
			return undefined;
		});
	};
	checkLeaves(obj);
	return allMatch;
};

/* eslint-enable no-unused-vars */

module.exports = {
	nFibonacci,
	nFactorial,
	checkMatchingLeaves
};
