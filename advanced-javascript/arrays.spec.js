const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {

    describe('map', () => {
        it('should be a function', () => {
            const map = arrayFunctions.map;
            const A = [2, 3, 5, 7];
            let B = [];
            let i = 0;

            const cb = (array) => {
                return array;

                B.push(array);
                // expect(B).toEqual(A);
                expect(typeof B).toBe('object');
                expect(B[i]).toEqual(array);
                // console.log(B)   
                i++

            }

            const mprod = map(A, cb);
            expect(typeof map).toBe('function');


        });


    });

    describe('each', () => {
        it('should be a function', () => {
            const each = arrayFunctions.each;
            const A = [2, 3, 5, 7];
            let B = [];
            let C = [];

            const cb = (value, index) => {
                let obj = { value: value, index: index };
                B.push(obj);
                expect(B[index]).toEqual(obj);
                expect(typeof B).toBe('object');
            };
            const cb2 = (value, index) => {
                C.push(value);
                expect(C[index]).toEqual(value);
                // expect(Array.isArray(B)).toBe('aay')
                expect(typeof C).toBe('object');
            };
            const cb3 = (value, index) => {

            }

            const eprod = each(A, cb);
            const e2prod = each(A, cb2);

            expect(typeof each).toBe('function');

        });
    });

    describe('reduce', () => {
        it('should be a function', () => {
            const reduce = arrayFunctions.reduce;
            const A = [2, 3, 5, 7];
            let B = [];
            const cb = (memoV, value) => {
                return memoV + value;
                console.log('this is the memo and value: ', memoV, value);
                B = A.shift();
                // return memo()

                expect(A[0]).toBe(3);
                // console.log('this is the value: ', value)
            }
            const memo = (data) => {
                console.log('This is the memo callback: ', data)
            }

            // Not resolving properly

            rprod = reduce(A, cb);

            expect(rprod).toBe(17)


            expect(typeof reduce).toBe('function');

        });
    });

    describe('find', () => {
        it('should be a function', () => {
            const find = arrayFunctions.find;
            const A = [2, 3, 5, 7];
            let B = [];
            let i = 0;
            const cb = (value) => {
                return value;
                B.push(value);
                expect(B[i]).toEqual(value);
                expect(typeof B).toBe('object');
                i++
            }

            const fprod = find(A,cb);
            // expect(fprod).toEqual
            expect(typeof find).toBe('function');
        });
    });

    describe('filter', () => {
        it('should be a function', () => {
            const filter = arrayFunctions.filter;
            const A = [2, 3, 5, 7];
            let B = [];
            let i = 0;
            const cb = (item) => {
                return item;
                B.push(item);
                expect(B[i]).toEqual(item);
                expect(typeof B).toBe('object');
                i++

                // console.log("Filter returned item: ", item);
            }
            const filterProd = filter(A, cb);
            expect(filterProd).toEqual(A);
            expect(typeof filter).toBe('function');
        });
    });

    describe('flatten', () => {
        it('should be a function', () => {
            const flatten = arrayFunctions.flatten;
            expect(typeof flatten).toBe('function');
            const A = [2, 3, 5, 7, [3,7,9,12]];
            let B = [];
            const flatProd = flatten(A);
            expect(flatProd).toEqual([2,3,5,7,3,7,9,12]);


        });
    });


});
