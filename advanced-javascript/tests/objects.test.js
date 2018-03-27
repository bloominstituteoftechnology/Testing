const expect = require('chai').expect;
const objectFunctions = require('../src/objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
	describe('`keys`', () => {
    	it('should be an function', () => {
  			const keys = objectFunctions.keys;
  			expect(keys).to.be.an('function');
  		});
  		it('should return key1', () => {
  			const keys = objectFunctions.keys;
  			const result = keys({key1: 'one', key2: 'two'});
  			expect(result[0]).to.equal('key1');
  		});
  	});
  	describe('`values`', () => {
    	it('should be an object', () => {
  			const values = objectFunctions.values;
  			expect(values).to.be.an('function');
  		});
  		it('should return one', () => {
  			const values = objectFunctions.values;
  			const result = values({key1: 'one', key2: 'two'});
  			expect(result[0]).to.equal('one');
  		});
  	});
  	describe('`mapObject`', () => {
    	it('should be an function', () => {
  			const mapObject = objectFunctions.mapObject;
  			expect(mapObject).to.be.an('function');
  		});
  		it('should return', () => {
  			const mapObject = objectFunctions.mapObject;
  			const result = mapObject({key1: 'one', key2: 'two'}, (value)=>{
  				return value;
  			});
  			expect(result['key2']).to.equal('two');
  		});
  	});
});
