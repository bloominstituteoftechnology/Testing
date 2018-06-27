const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe.only( 'project-2', () =>
{
    describe( 'getBiggest', () =>
    {
        it( 'can multiply 2 numbers', () =>
        {
            // arrange
            const expected = 50;

            // act
            const actual = funcs.getBiggest( 50, 40 );

            // assert
            expect( actual ).toEqual( expected );
        } )
    } );

    describe( 'greeting', () =>
    {
        it( 'returned Spanish greeting', () =>
        {
            const expected = 'Hola!';
            const actual = funcs.greeting( 'Spanish' );

            expect( actual ).toEqual( expected );
        } )
    } );

    describe( 'isTenOrFive', () =>
    {
        it( 'is ten or 5', () =>
        {
            const expected = true;
            const actual = funcs.isTenOrFive( 5 );

            expect( actual ).toEqual( expected );
        } )
        it( 'is not 10 or 5', () =>
        {
            const expected = false;
            const actual = funcs.isTenOrFive( 7 );

            expect( actual ).toEqual( expected );
        } )
    } );

    describe( 'isInRange', () =>
    {
        it( 'is less than 50 and greater than 20', () =>
        {
            const expected = true;
            const actual = funcs.isInRange( 49 );

            expect( actual ).toEqual( expected );
        } )
    } );

    describe( 'isInteger', () =>
    {
        it( 'it is an integer', () =>
        {
            const expected = true;
            const actual = funcs.isInteger( 50 );

            expect( actual ).toEqual( expected );
        } )
    } );

    describe( 'fizzBuzz', () =>
    {
        it( 'executes fizz', () =>
        {
            const expected = 'fizz'
            const actual = funcs.fizzBuzz( 6 );

            expect( actual ).toEqual( expected );
        } )
        it( 'executes buzz', () =>
        {
            const expected = 'buzz'
            const actual = funcs.fizzBuzz( 5 );

            expect( actual ).toEqual( expected );
        } )
        it( 'executes fizzbuzz', () =>
        {
            const expected = 'fizzbuzz'
            const actual = funcs.fizzBuzz( 15 );

            expect( actual ).toEqual( expected );
        } )
    } );

    describe( 'isPrime', () =>
    {
        it( 'is a prime number', () =>
        {
            const expected = true;
            const actual = funcs.isPrime( 11 );

            expect( actual ).toEqual( expected );
        } )
    } );

    describe( 'returnFirst', () =>
    {
        it( 'returns first item in array', () =>
        {
            const array = [ 'a', 'b', 'c', 'd', 'e' ];
            const expected = 'a';
            const actual = funcs.returnFirst( array );

            expect( actual ).toEqual( expected );
        } )
    } );

    describe( 'returnLast', () =>
    {
        it( 'returns last item in array', () =>
        {
            const array = [ 'a', 'b', 'c', 'd', 'e' ];
            const expected = 'e';
            const actual = funcs.returnLast( array );

            expect( actual ).toEqual( expected );
        } )
    } );

    describe( 'getArrayLength', () =>
    {
        it( 'returns length of array', () =>
        {
            const array = [ 'a', 'b', 'c', 'd', 'e' ];
            const expected = array.length;
            const actual = funcs.getArrayLength( array );

            expect( actual ).toEqual( expected );
        } )
    } );

    describe( 'incrementByOne', () =>
    {
        it( 'returns array items increased by 1', () =>
        {
            const array = [ 1, 2, 3, 4, 5 ];
            const expected = [ 2, 3, 4, 5, 6 ];
            const actual = funcs.incrementByOne( array );

            expect( actual ).toEqual( expected );
        } )
    } );

    describe( 'addItemToArray', () =>
    {
        it( 'returns array with added item', () =>
        {
            const array = [ 'a', 'b', 'c', 'd', 'e' ];
            const expected = [ 'a', 'b', 'c', 'd', 'e', 'f' ];
            const actual = funcs.addItemToArray( array, 'f' );

            expect( actual ).toEqual( expected );
        } )
    } );

    describe( 'addItemToFront', () =>
    {
        it( 'returns array with new item at first position', () =>
        {
            const array = [ 'a', 'b', 'c', 'd', 'e' ];
            const expected = [ 'f', 'a', 'b', 'c', 'd', 'e' ];
            const actual = funcs.addItemToFront( array, 'f' );

            expect( actual ).toEqual( expected );
        } )
    } );

    describe( 'wordsToSentence', () =>
    {
        it( 'returns sentence with added word(s)', () =>
        {
            const array = [ 'This', 'is', 'my', 'sentence!' ];
            const expected = 'This is my sentence!';
            const actual = funcs.wordsToSentence( array );

            expect( actual ).toEqual( expected );
        } )
    } );

    describe( 'contains', () =>
    {
        it( 'array contains item', () =>
        {
            const array = [ 'a', 'b', 'c', 'd', 'e' ];
            const expected = true;
            const actual = funcs.contains( array, 'c' );

            expect( actual ).toEqual( expected );
        } )
    } );

    describe( 'addNumbers', () =>
    {
        it( 'returns sum of numbers in array', () =>
        {
            const array = [ 1, 2, 3, 4, 5 ];
            const expected = 15;
            const actual = funcs.addNumbers( array );

            expect( actual ).toEqual( expected );
        } )
    } );

    describe( 'averageTestScore', () =>
    {
        it( 'returns the average test score', () =>
        {
            const array = [ 50, 48, 52, 51, 49 ];
            const expected = ( 50 + 48 + 52 + 51 + 49 ) / 5;
            const actual = funcs.averageTestScore( array );

            expect( actual ).toEqual( expected );
        } )
    } );

    describe( 'largestNumber', () =>
    {
        it( 'returns the largest number', () =>
        {
            const array = [ 1, 2, 3, 4, 5 ];
            const expected = 5;
            const actual = funcs.largestNumber( array );

            expect( actual ).toEqual( expected );
        } )
    } );
} );
