const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe( 'getBiggest(x, y)', function ()
{
    it( 'should return x if it is larger than y', function ()
    {
        expect(funcs.getBiggest( 10, 5 ) ).toBe( 10 );
    } );
    it( 'should return y if it is larger than x', function ()
    {
        expect(funcs.getBiggest( 50, 100 ) ).toBe( 100 );
    } );
    it( 'should return either one if they are the same', function ()
    {
        expect(funcs.getBiggest( 1000, 1000 ) ).toBe( 1000 );
    } );
} );

describe( 'greeting(language)', function ()
{
    it( 'should return \'Guten Tag!\' for German', function ()
    {
        expect(funcs.greeting( 'German' ) ).toBe( 'Guten Tag!' );
    } );
    it( 'should return \'Hola!\' for Spanish', function ()
    {
        expect(funcs.greeting( 'Spanish' ) ).toBe( 'Hola!' );
    } );
    it( 'should return \'Hello!\' for English', function ()
    {
        expect(funcs.greeting( 'English' ) ).toBe( 'Hello!' );
    } );
    it( 'should return \'Hello!\' if no argument is passed in or if a language beyond Spanish, English, and German is passed in.', function ()
    {
        expect(funcs.greeting( 'French' ) ).toBe( 'Hello!' );
        expect(funcs.greeting() ).toBe( 'Hello!' );
    } );
} );

describe( 'isTenOrFive(num)', function ()
{
    it( 'should return true if num is 10 or 5', function ()
    {
        expect(funcs.isTenOrFive( 10 ) ).toBe( true );
        expect(funcs.isTenOrFive( 5 ) ).toBe( true );
    } );
    it( 'should return false if num is not 10 or 5', function ()
    {
        expect(funcs.isTenOrFive( 11 ) ).toBe( false );
        expect(funcs.isTenOrFive( 6 ) ).toBe( false );
        expect(funcs.isTenOrFive( 0 ) ).toBe( false );
        expect(funcs.isTenOrFive( 5.01 ) ).toBe( false );
    } );
} );

describe( 'isInRange(num)', function ()
{
    it( 'should return true if num is inside range', function ()
    {
        expect(funcs.isInRange( 35.5 ) ).toBe( true );
        expect(funcs.isInRange( 40 ) ).toBe( true );
        expect(funcs.isInRange( 49 ) ).toBe( true );
        expect(funcs.isInRange( 21 ) ).toBe( true );
    } );
    it( 'should return false if outside of range', function ()
    {
        expect(funcs.isInRange( 10 ) ).toBe( false );
        expect(funcs.isInRange( 20 ) ).toBe( false );
        expect(funcs.isInRange( 50 ) ).toBe( false );
        expect(funcs.isInRange( 100 ) ).toBe( false );
    } );
} );

describe( 'isInteger(num)', function ()
{
    it( 'should return true if num is 5', function ()
    {
        expect(funcs.isInteger( 5 ) ).toBe( true );
    } );
    it( 'should return false if num is 0.5', function ()
    {
        expect(funcs.isInteger( 0.5 ) ).toBe( false );
    } );
    it( 'should return true if num is -20', function ()
    {
        expect(funcs.isInteger( -20 ) ).toBe( true );
    } );
    it( 'should return true for 0', function ()
    {
        expect(funcs.isInteger( 0 ) ).toBe( true );
    } );
} );

describe( 'fizzBuzz(num)', function ()
{
    it( 'should return fizz if divisible by 3', function ()
    {
        expect(funcs.fizzBuzz( 9 ) ).toBe( 'fizz' );
    } );
    it( 'should return buzz if divisible by 5', function ()
    {
        expect(funcs.fizzBuzz( 10 ) ).toBe( 'buzz' );
    } );
    it( 'should return fizzbuzz if divisible by 3 and 5', function ()
    {
        expect(funcs.fizzBuzz( 15 ) ).toBe( 'fizzbuzz' );
    } );
    it( 'should return num if not divisible by 3 or 5', function ()
    {
        expect(funcs.fizzBuzz( 4 ) ).toBe( 4 );
    } );
} );

describe( 'isPrime(num)', function ()
{
    it( 'should return true if num is prime', function ()
    {
        expect(funcs.isPrime( 7 ) ).toBe( true );
        expect( funcs.isPrime( 97 ) ).toBe( true );
    } );
    it( 'should return false if num is not prime', function ()
    {
        expect(funcs.isPrime( 10 ) ).toBe( false );
        expect(funcs.isPrime( 100 ) ).toBe( false );
        expect(funcs.isPrime( 0 ) ).toBe( false );
        expect(funcs.isPrime( 1 ) ).toBe( false );
    } );
} );
describe( 'returnFirst(arr)', function ()
{
    it( 'should return the first item in the array', function ()
    {
        expect( funcs.returnFirst( [ 10, 10, 16, 12 ] ) ).toBe( 10 );
        expect( funcs.returnFirst( [ 97, 100, 80, 55, 72, 94 ] ) ).toBe( 97 );
    } );
} );

describe( 'returnLast(arr)', function ()
{
    it( 'should return the last item in the array', function ()
    {
        expect( funcs.returnLast( [ 10, 10, 16, 12 ] ) ).toBe( 12 );
        expect( funcs.returnLast( [ 97, 100, 80, 55, 72, 94 ] ) ).toBe( 94 );
        expect( funcs.returnLast( [ 'hi', 'there', 'how', 'are', 'you', 'doing?' ] ) ).toBe( 'doing?' );
    } );
} );
describe( 'getArrayLength(arr)', function ()
{
    it( 'should return the length of the array', function ()
    {
        expect( funcs.getArrayLength( [ 10, 10, 16, 12 ] ) ).toBe( 4 );
        expect( funcs.getArrayLength( [ 97, 100, 80, 55, 72, 94 ] ) ).toBe( 6 );
        expect( funcs.getArrayLength( [ 'hi', 'there', 'how', 'are', 'you', 'doing?' ] ) ).toBe( 6 );
    } );
} );

describe( 'incrementByOne(arr)', function ()
{
    it( 'should return the array with each value incremented by one', function ()
    {
        expect( funcs.incrementByOne( [ 10, 10, 16, 12 ] ) ).toEqual( [ 11, 11, 17, 13 ] );
        expect( funcs.incrementByOne( [ 97, 100, 80, 55, 72, 94 ] ) ).toEqual( [ 98, 101, 81, 56, 73, 95 ] );
        expect( funcs.incrementByOne( [] ) ).toEqual( [] );
    } );
} );
describe( 'addItemToArray(arr, item)', function ()
{
    it( 'should return the array with the item added to the end', function ()
    {
        expect( funcs.addItemToArray( [ 10, 10, 16, 12 ], 10 ) ).toEqual( [ 10, 10, 16, 12, 10 ] );
        expect( funcs.addItemToArray( [ 97, 100, 80, 55, 72, 94 ], 'Hello' ) ).toEqual( [ 97, 100, 80, 55, 72, 94, 'Hello' ] );
        expect( funcs.addItemToArray( [], true ) ).toEqual( [ true ] );
    } );
} );

describe( 'addItemToFront(arr, item)', function ()
{
    it( 'should return the array with the item added to the front', function ()
    {
        expect( funcs.addItemToFront( [ 10, 10, 16, 12 ], 10 ) ).toEqual( [ 10, 10, 10, 16, 12 ] );
        expect( funcs.addItemToFront( [ 97, 100, 80, 55, 72, 94 ], 'Hello' ) ).toEqual( [ 'Hello', 97, 100, 80, 55, 72, 94 ] );
        expect( funcs.addItemToFront( [], true ) ).toEqual( [ true ] );
    } );
} );

describe( 'wordsToSentence(words)', function ()
{
    it( 'should return a string that has all of the words from the array separated by spaces', function ()
    {
        expect( funcs.wordsToSentence( [ 'LambdaSchool', 'JavaScript', 'Class' ] ) ).toBe( 'LambdaSchool JavaScript Class' );
        expect( funcs.wordsToSentence( [ 'LambdaSchool' ] ) ).toBe( 'LambdaSchool' );
    } );

} );
describe( 'contains(arr, item)', function ()
{
    it( 'should return true if the array contains the item', function ()
    {
        expect( funcs.contains( [ 10, 10, 16, 12 ], 10 ) ).toBe( true );
        expect( funcs.contains( [ 97, 100, 80, 55, 72, 94 ], 'Hello' ) ).toBe( false );
        expect( funcs.contains( [], true ) ).toBe( false );
    } );
} );

describe( 'addNumbers(numbers)', function ()
{
    it( 'should add all of the numbers in the array together and return the sum', function ()
    {
        expect( funcs.addNumbers( [ 10, 10, 16 ] ) ).toBe( 36 );
        expect( funcs.addNumbers( [ 97, 100 ] ) ).toBe( 197 );
        expect( funcs.addNumbers( [ 0 ] ) ).toBe( 0 );
    } );
} );


describe( 'averageTestScore(testScores)', function ()
{
    it( 'should return the average test score', function ()
    {
        expect( funcs.averageTestScore( [ 10, 10, 16, 12 ] ) ).toBe( 12 );
        expect( funcs.averageTestScore( [ 97, 100, 80, 55, 72, 94 ] ) ).toBe( 83 );
    } );
} );

describe( 'largestNumber(numbers)', function ()
{
    it( 'should return the largest number', function ()
    {
        expect( funcs.largestNumber( [ 10, 10, 16, 12 ] ) ).toBe( 16 );
        expect( funcs.largestNumber( [ 97, 100, 80, 55, 72, 94 ] ) ).toBe( 100 );
        expect( funcs.largestNumber( [ 97, 10000, 80, 55, 7.2, -94 ] ) ).toBe( 10000 );
    } );
} );
