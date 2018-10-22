const objectFunctions = require('./objects');
// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  it('should be an object', () => {});
});

describe('keys', () => {
	it('should return the keys', () => {
		keys = objectFunctions.keys
		//Arrange
		const expected = ['one','two','three','four']
		//Act
		const actual = keys({'one': 1, 'two': 2, 'three': 3, 'four': 4})
		//Assert
		expect(actual).toEqual(expected)
	})
})

describe('values', () => {
	it('should return the values', () => {
		values = objectFunctions.values
		//Arrange
		const expected = [1,2,3,4]
		//Act
		const actual = values({'one': 1, 'two': 2, 'three': 3, 'four': 4})
		//Assert
		expect(actual).toEqual(expected)
	})
})

describe('mapObject', () => {
	it('should map the the keys to the new object', () => {
		const mapObject = objectFunctions.mapObject
		const cb = function(x){
			return x + 1;
		}
		//Arrange
		const expected = {'one': 2, 'two': 3, 'three': 4}
		//Act
		const actual = mapObject({'one': 1, 'two': 2, 'three': 3}, cb)
		//Assert
		expect(actual).toEqual(expected);
	})
})

describe('pairs', () => {
	it('should return correct object pairs put into arrays', () => {
		const pairs = objectFunctions.pairs

		//Arrange
		const expected = [["item1", "frog"], ["item2", "frog"], ["item3", "turtle"]]
		//Act
		const actual = pairs({'item1': 'frog', 'item2': 'frog', 'item3': 'turtle'})
		//Assert
		expect(actual).toEqual(expected);

	})
})

describe('invert', () => {
	it('should switch the keys and values on the object', () => {
		const invert = objectFunctions.invert
		//Arrange
		const expected = {1: 'one', 2: 'two', 3: 'three'}
		//Act
		const actual = invert({'one': 1, 'two': 2, 'three': 3})
		//Assert
		expect(actual).toEqual(expected);
	})
})

describe('defaults', () => {
	it('should return correct value', () => {
		const obj1 = {'one': 1, 'two': 2, 'three': 3}
		const obj2 = {'ten': 10, 'twenty': 20, 'thirty': 30}
		const defaults = objectFunctions.defaults
		//Arrange
		const expected = {"one": 1, "ten": 10, "thirty": 30, "three": 3, "twenty": 20, "two": 2}
		//Act
		const actual = defaults(obj1, obj2)
		//Assert
		expect(actual).toEqual(expected)
	})
})