const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

// describe('Arrays()', () => {
//   describe('map', () => {
//     it('should be a function', () => {
//       const map = arrayFunctions.map;
//       expect(typeof map).toBe('object');
//     });
//   });
// });
describe( 'Each(arr, cb)', function ()
{
  it( 'should pass all array items one by one to cb', function ()
  {
    var nums = [];
    arrayFunctions.Each( [ 1, 2, 3, 4, 5 ], function ( num )
    {
      nums.push( num );
    } );
    expect( nums ).toEqual( [ 1, 2, 3, 4, 5 ] );
  } );
} );
