const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.
// map_.map( list, iteratee, [ context ] ) Alias: collect
// Produces a new array of values by mapping each value in list through a transformation function ( iteratee ).The iteratee is passed three arguments: the value, then the index( or key ) of the iteration, and finally a reference to the entire list.

//     _.map( [ 1, 2, 3 ], function ( num ) { return num * 3; } );
// => [ 3, 6, 9 ]
// _.map( { one: 1, two: 2, three: 3 }, function ( num, key ) { return num * 3; } );
// => [ 3, 6, 9 ]
// _.map( [ [ 1, 2 ], [ 3, 4 ] ], _.first );
// => [ 1, 3 ]

describe('Arrays', () => {
    describe('map(array, callback)', () => {
        it('should be a function', () => {
            const map = arrayFunctions.map;
            expect(typeof map).toBe('function');
        });
        it('should return an array of processed array elements', () => {
            const map = arrayFunctions.map;
            const doubles = map([2, 4, 6, 8, 10], function(element) {
                return element * 2;
            });
            expect(doubles).toEqual([4, 8, 12, 16, 20]);
        });
    } );
    
//     each_.each( list, iteratee, [ context ] ) Alias: forEach
//     Iterates over a list of elements, yielding each in turn to an iteratee function.The iteratee is bound to the context object, if one is passed.Each invocation of iteratee is called with three arguments: ( element, index, list ).If list is a JavaScript object, iteratee's arguments will be (value, key, list). Returns the list for chaining.

//     _.each( [ 1, 2, 3 ], alert );
// => alerts each number in turn...
//     _.each( { one: 1, two: 2, three: 3 }, alert );
// => alerts each number value in turn...
    describe('each(array, callback)', () => {
        it('should be a function', () => {
            const each = arrayFunctions.each;
            expect(typeof each).toBe('function');
        });
        it('should iterate through each element in the array and pass each element into a callback', () => {
            const nums = [];
            const each = arrayFunctions.each;
            each([11, 22, 33, 44, 55, 66, 77], function(num) {
                nums.push(num);
            });
            expect(nums).toEqual([11, 22, 33, 44, 55, 66, 77]);
        });
    } );
    
//     filter_.filter( list, predicate, [ context ] ) Alias: select
//     Looks through each value in the list, returning an array of all the values that pass a truth test( predicate ).predicate is transformed through iteratee to facilitate shorthand syntaxes.

//     var evens = _.filter( [ 1, 2, 3, 4, 5, 6 ], function ( num ) { return num % 2 == 0; } );
// => [ 2, 4, 6 ]
    
    describe('filter(array, cb)', () => {
        const filter = arrayFunctions.filter;
        it('should be a function', () => {
            const filter = arrayFunctions.filter;
            expect(typeof filter).toBe('function');
        });

        it('returns only array elements that satisfy a predicate', function() {
            const filter = arrayFunctions.filter; 

            expect(filter([11, 33, 44, 55, 66, 77, 101], (item => item === 33))).toEqual([33])
        });
    });

//     find_.find( list, predicate, [ context ] ) Alias: detect
//     Looks through each value in the list, returning the first one that passes a truth test( predicate ), or undefined if no value passes the test.The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list. predicate is transformed through iteratee to facilitate shorthand syntaxes.

//     var even = _.find( [ 1, 2, 3, 4, 5, 6 ], function ( num ) { return num % 2 == 0; } );
// => 2


    describe('find', function() {
        it('should be a function', function() {
            const find = arrayFunctions.find;
            expect(typeof find).toBe('function');
        });

        it('returns the element if found', function() {
            const find = arrayFunctions.find;
            expect(find(['bee', 'me', 'mike'], element => element === 'bee')).toEqual('bee');
        });
    } );
    
//     flatten_.flatten( array, [ shallow ] )
//     Flattens a nested array( the nesting can be to any depth ).If you pass shallow, the array will only be flattened a single level.

//         _.flatten( [ 1, [ 2 ], [ 3, [ [ 4 ] ] ] ] );
// => [ 1, 2, 3, 4 ];

//     _.flatten( [ 1, [ 2 ], [ 3, [ [ 4 ] ] ] ], true );
// => [ 1, 2, 3, [ [ 4 ] ] ];    

    describe('flatten', function() {
        it('should be a function', function() {
            const flatten = arrayFunctions.flatten;
            expect(typeof flatten).toBe('function');
        });

        it('returns all the elements flattend', function() {
            const flatten = arrayFunctions.flatten;
            expect(flatten([33, 44, 55, [11]])).toEqual([33, 44, 55, 11]);
        })
    });

    describe('reduce', function() {
        const reduce = arrayFunctions.reduce;
        expect(typeof reduce).toBe('function');
    });

    it('returns the sum of nums in the array', function() {
        const reduce = arrayFunctions.reduce;
        expect(reduce([3, 3, 3], (memo, num) => {
            return memo + num;
        })).toBe(9);
    });

});
