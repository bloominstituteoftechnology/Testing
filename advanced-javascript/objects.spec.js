const objectFunctions = require('./objects');

// // whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
    describe('keys', () => {
        it('should return object keys in a new array', () => {
            const keys = objectFunctions.keys;
            const newObj = keys({ 'mickey': 'mouse', 'donald': 'duck', 'fuzzy': 'lumpkins' });
            const freshObj = keys({ 'joe': 'shmoe', 'dapper': 'dan', 'lucky': 'lisa', 'joyful': 'jane' })
            expect(newObj).toEqual(['mickey', 'donald', 'fuzzy']);
            expect(freshObj).toEqual(['joe', 'dapper', 'lucky', 'joyful']);
        });
    });

    describe('values', () => {
        it('should return object values in a new array', () => {
            const values = objectFunctions.values;
            const newObj = values({ 'mickey': 'mouse', 'donald': 'duck', 'fuzzy': 'lumpkins' });
            const freshObj = values({ 'joe': 'shmoe', 'dapper': 'dan', 'lucky': 'lisa', 'joyful': 'jane' })
            expect(newObj).toEqual(['mouse', 'duck', 'lumpkins']);
            expect(freshObj).toEqual(['shmoe', 'dan', 'lisa', 'jane']);
        });
    });

    describe('mapObject', () => [
        it('should map over the object and manipulate its value according to the given cb', () => {
            const mapObject = objectFunctions.mapObject;
            const newObj = mapObject({ 'mickey': 'mouse', 'donald': 'duck', 'fuzzy': 'lumpkins' }, val => val.length);
            const freshObj = mapObject({ 'joe': 'shmoe', 'dapper': 'dan', 'lucky': 'lisa', 'joyful': 'jane' }, val => val.length);
            expect(newObj).toEqual({ 'mickey': 5, 'donald': 4, 'fuzzy': 8});
            expect(freshObj).toEqual({ 'joe': 5, 'dapper': 3, 'lucky': 4, 'joyful': 4 });
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
