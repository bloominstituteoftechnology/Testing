const expect = require('chai').expect;
const objectFunctions = require('../src/objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {

	describe('keys', () => {
		it('should return an array', () => {
  		const { keys } = objectFunctions;
  		const obj = {
  			hello: 'world'
  		};
  		const result = keys(obj);
  		expect(result).to.be.an('array');
  	});
		it('should return the keys of the object', () => {
			const { keys } = objectFunctions;
  		const obj = {
  			hello: 'world',
  			name: 'Guelmis',
  			favMovie: 'The Matrix'
  		};
  		const result = keys(obj);
  		expect(result).to.deep.equal(['hello', 'name', 'favMovie']);
		});
	});

	describe('values', () => {
		it('should retun the values of the object', () => {
  		const { values } = objectFunctions;
  		const obj = {
  			hello: 'world',
  			name: 'Guelmis',
  			favMovie: 'The Matrix'
  		};
  		const result = values(obj);
  		expect(result).to.deep.equal(['world', 'Guelmis', 'The Matrix']);
  	});
		it('should return an array', () => {
  		const { values } = objectFunctions;
  		const obj = {
  			hello: 'world'
  		};
  		const result = values(obj);
  		expect(result).to.be.an('array');
  	});
	});

	describe('mapObject', () => {
		it('should retun an object', () => {
  		const { mapObject } = objectFunctions;
  		const obj = {
  			hello: 'world',
  			name: 'Guelmis',
  			favMovie: 'The Matrix'
  		};
  		const result = mapObject(obj, () => (null));
  		expect(result).to.be.an('object');
  	});
		it('should return an object with all values mapped', () => {
  		const { mapObject } = objectFunctions;
  		const obj = {
  			a: 5,
  			b: 9,
  			c: 3
  		};
  		const result = mapObject(obj, (num) => (num - 1));
  		expect(result).to.deep.equal({ a: 4, b: 8, c: 2 });
  	});
	});

	describe('pairs', () => {
		it('should retun an array of arrays', () => {
  		const { pairs } = objectFunctions;
  		const obj = {
  			hello: 'world',
  			name: 'Guelmis'
  		};
  		const result = pairs(obj);
  		expect(result).to.be.an('array');
  		expect(result[0]).to.be.an('array');
  		expect(result[1]).to.be.an('array');
  	});
		it('should return key value pairs that match the object', () => {
  		const { pairs } = objectFunctions;
  		const obj = {
  			a: 5,
  			b: 9,
  			c: 3
  		};
  		const result = pairs(obj);
  		expect(result).to.deep.equal([['a', 5], ['b', 9], ['c', 3]]);
  	});
	});

	describe('invert', () => {
		it('should retun an object', () => {
  		const { invert } = objectFunctions;
  		const obj = {
  			hello: 'world',
  		};
  		const result = invert(obj);
  		expect(result).to.be.an('object');
  	});
		it('should return an object with inverted keys and values', () => {
  		const { invert } = objectFunctions;
  		const obj = {
  			a: 5,
  			b: 9,
  			c: 3
  		};
  		const result = invert(obj);
  		expect(result).to.deep.equal({ '5': 'a', '9': 'b', '3': 'c' });
  	});
	});

	describe('defaults', () => {
		it('should retun an object', () => {
  		const { defaults } = objectFunctions;
  		const obj = {
  			hello: 'world',
  		};
  		const result = defaults(obj, {});
  		expect(result).to.be.an('object');
  	});
		it('should return an object with default values', () => {
  		const { defaults } = objectFunctions;
  		const obj = {
  			name: 'Guelmis'
  		};
  		const defaultVals = {
  			lastname: 'Cortina',
  			favMovie: 'The Matrix'
  		}
  		const result = defaults(obj, defaultVals);
  		expect(result).to.deep.equal({
  			name: 'Guelmis',
  			lastname: 'Cortina',
  			favMovie: 'The Matrix'
  		});
  	});
  	it('should not overwrite values', () => {
  		const { defaults } = objectFunctions;
  		const obj = {
  			name: 'Guelmis'
  		};
  		const defaultVals = {
  			lastname: 'Cortina',
  			name: 'Jordan'
  		}
  		const result = defaults(obj, defaultVals);
  		expect(result).to.deep.equal({
  			name: 'Guelmis',
  			lastname: 'Cortina'
  		});
  	});
	});

});
