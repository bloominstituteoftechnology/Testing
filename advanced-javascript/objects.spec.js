const objectFunctions = require( './objects' );

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe( 'objects', () =>
{
  describe( 'keys', () =>
  {
    it( 'should return the keys', () =>
    {
      const keys = objectFunctions.keys;
      const actual = keys( { a: 'b', c: 'd', e: 'f', g: 'h' } );
      const expected = [ 'a', 'c', 'e', 'g' ]
      expect( actual ).toEqual( expected );
    } )
  } );

  describe( 'values', () =>
  {
    it( 'should return the values', () =>
    {
      const values = objectFunctions.values;
      const actual = values( { a: 'b', c: 'd', e: 'f', g: 'h' } );
      const expected = [ 'b', 'd', 'f', 'h' ]
      expect( actual ).toEqual( expected );
    } )
  } );

  describe( 'mapObject', () =>
  {
    const cb = item =>
    {
      return item + 1;
    }
    const obj = {
      'a': 1,
      'b': 2,
      'c': 3,
      'd': 4,
      'e': 5
    }
    const mapObject = objectFunctions.mapObject;
    const actual = mapObject( obj, cb );
    it( 'should return each item incremented by 1', () =>
    {
      const expected = {
        'a': 2,
        'b': 3,
        'c': 4,
        'd': 5,
        'e': 6
      }
      expect( actual ).toEqual( expected );
    } )
    it( 'should return an object', () =>
    {
      expect( typeof actual ).toBe( 'object' );
    } )
  } );

  describe( 'pairs', () =>
  {
    const obj = {
      'a': 1,
      'b': 2,
      'c': 3,
      'd': 4,
      'e': 5
    }
    const pairs = objectFunctions.pairs;
    const actual = pairs( obj );
    const expected = [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', 4 ], [ 'e', 5 ] ];
    it( 'should return subarrays of the key value pairs', () =>
    {
      expect( actual ).toEqual( expected );
    } )
    it( 'should return an array', () =>
    {
      expect( actual instanceof Array ).toBeTruthy();
    } )
    it( 'should return a length of 5', () =>
    {
      expect( actual ).toHaveLength( 5 );
    } )
  } );

  describe( 'invert', () =>
  {
    const obj = {
      'a': 1,
      'b': 2,
      'c': 3,
      'd': 4,
      'e': 5
    }
    const invert = objectFunctions.invert;
    const actual = invert( obj );
    const expected = {
      '1': 'a',
      '2': 'b',
      '3': 'c',
      '4': 'd',
      '5': 'e'
    }
    it( 'should return an object with inverted key value pairs', () =>
    {
      expect( actual ).toEqual( expected );
    } )
    it( 'should return an object', () =>
    {
      expect( typeof actual ).toBe( 'object' );
    } )
  } );

  describe( 'defaults', () =>
  {
    const obj = {
      'a': 1,
      'b': 2,
      'c': 3
    }
    const defaultProps = {
      'a': 3,
      'b': 4,
      'c': 5,
      'd': 6,
      'e': 7
    }
    const defaults = objectFunctions.defaults;
    const actual = defaults( obj, defaultProps );
    const expected = {
      'a': 1,
      'b': 2,
      'c': 3,
      'd': 6,
      'e': 7
    }
    it( 'should return an object without duplicate keys', () =>
    {
      expect( actual ).toEqual( expected );
    } )
    it( 'should return an object', () =>
    {
      expect( typeof actual ).toBe( 'object' );
    } )
  } )
} );
