const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
    it('should be an object', () => {});

    // it('using ')
    // it('using promises', () => {
    // 	return new Promise(resolve => setTimeout(resolve, 2000));
    // });
    // it('using async/await', () => {});

    describe('keys()', () => {
	it('should provide key', () => {
	    const expected = ['foo'];
	    const actual = objectFunctions.keys({foo: 'bar'});
	    expect(actual).toEqual(expected);
	});
    });

    describe('values()', () => {
	it('should provide value', () => {
	    const expected = ['bar'];
	    const actual = objectFunctions.values({foo: 'bar'});
	    expect(actual).toEqual(expected);
	});
    });

    //unfinished
    // describe.only('mapObject()', () => {
    // 	it('should map the object', () => {
    // 	    const expected = ['bar'];
    // 	    const actual = objectFunctions.mapObject({foo: 'bar'});
    // 	    expect(actual).toEqual(expected);
    // 	});
    // });

    describe('pairs()', () => {
	it('should return an array with the key and value', () => {
	    const expected = [["foo", "bar"]];
	    const actual = objectFunctions.pairs({foo: 'bar'});
	    expect(actual).toEqual(expected);
	});
    });

    describe('invert()', () => {
	it('should map the object', () => {
	    const expected = {"bar": "foo"};
	    const actual = objectFunctions.invert({foo: 'bar'});
	    expect(actual).toEqual(expected);
	});
    });

    //unfinished
    describe('defaults()', () => {
    	it('should map the object', () => {
    	    const expected = {"bar": "foo"};
    	    const actual = objectFunctions.defaults({foo: 'bar'}, );
    	    expect(actual).toEqual(expected);
    	});
    });
});
