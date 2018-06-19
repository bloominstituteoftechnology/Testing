const objectFunctions = require('./objects');

// // whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
    describe('keys', () => {
        it('should return object keys in a new array', () => {
            const keys = objectFunctions.keys;
            const newObj = keys({ 'mickey': 'mouse', 'donald': 'duck', 'fuzzy': 'lumpkins' });
            expect(newObj).toEqual(['mickey', 'donald', 'fuzzy']);
        });
    });

    describe('values', () => {
        it('should return object values in a new array', () => {
            const values = objectFunctions.values;
            const newObj = values({ 'mickey': 'mouse', 'donald': 'duck', 'fuzzy': 'lumpkins' });
            expect(newObj).toEqual(['mouse', 'duck', 'lumpkins']);
        });
    });

    describe('mapObject', () => [
        it('should map over the object and manipulate its value according to the given cb', () => {
            const mapObject = objectFunctions.mapObject;
            const newObj = mapObject({ 'mickey': 'mouse', 'donald': 'duck', 'fuzzy': 'lumpkins' }, val => val.length);
            expect(newObj).toEqual({ 'mickey': 5, 'donald': 4, 'fuzzy': 8});
        })
    ]);

    describe('pairs', () => {
        it('should return each key-value pair in a separate array', () => {
            const pairs = objectFunctions.pairs;
            const newObj = pairs({ 'mickey': 'mouse', 'donald': 'duck', 'fuzzy': 'lumpkins' });
            expect(newObj).toEqual([['mickey', 'mouse'], ['donald', 'duck'], ['fuzzy', 'lumpkins']]);
        });
    });
    
    describe('invert', () => {
        it('should switch each key with its value', () => {
            const invert = objectFunctions.invert;
            const newObj = invert({ 'mickey': 'mouse', 'donald': 'duck', 'fuzzy': 'lumpkins' });
            expect(newObj).toEqual({ 'mouse': 'mickey', 'duck': 'donald', 'lumpkins': 'fuzzy' });
        });
    });

    describe('defaults', () => {
        it('should set defaults within a given object', () => {
            const defaults = objectFunctions.defaults;
            const newObj = defaults({ 'mickey': 'mouse', 'donald': 'duck', 'fuzzy': 'lumpkins' }, { 'walt': 'disney'});
            expect(newObj).toEqual({ 'mickey': 'mouse', 'donald': 'duck', 'fuzzy': 'lumpkins', 'walt': 'disney' });
        })
    })

});
