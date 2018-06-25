const helpers = require('./project-1');

// start testing!
// are equal
describe( 'areEqual(x, y)', function ()
{
    it( 'should return true if the arguments are equal', function ()
    {
        expect( helpers.areEqual( 15, 15 ) ).toBe( true );
        expect( helpers.areEqual( 90, 50 ) ).toBe( false );
        expect( helpers.areEqual( 'test', 'test' ) ).toBe( true );
    } );
} );
// are same length
describe( 'areSameLength(str1, str2)', function ()
{
    it( 'should return true if the arguments have the same length', function ()
    {
        expect( helpers.areSameLength( 'hi', 'there' ) ).toBe( false );
        expect( helpers.areSameLength( 'javascript', 'bumfuzzled' ) ).toBe( true );
    } );
} );
//lessthan ninety
describe('lessThanNinety(num)', function() {
  it('should return true if the argument is less than ninety', function() {
    expect(helpers.lessThanNinety(15)).toBe(true);
    expect(helpers.lessThanNinety(90)).toBe(false);
    expect(helpers.lessThanNinety(100)).toBe(false);
  });
});

// greaterthanfifty
describe('greaterThanFifty(num)', function() {
  it('should return true if the argument is greater than fifty', function() {
    expect(helpers.greaterThanFifty(15)).toBe(false);
    expect(helpers.greaterThanFifty(50)).toBe(false);
    expect(helpers.greaterThanFifty(60)).toBe(true);
  });
} );
//add
describe( 'add(x, y)', function ()
{
    it( 'should return the sum of the two arguments', function ()
    {
        expect( helpers.add( 5, 5 ) ).toBe( 10 );
        expect( helpers.add( -1, 5 ) ).toBe( 4 );
    } );
} );
//subract
describe( 'subtract(x, y)', function ()
{
    it( 'should return the difference of the two arguments', function ()
    {
        expect( helpers.subtract( 5, 5 ) ).toBe( 0 );
        expect( helpers.subtract( -1, 5 ) ).toBe( -6 );
        expect( helpers.subtract( 5, -5 ) ).toBe( 10 );
        expect( helpers.subtract( 0, 0 ) ).toBe( 0 );
    } );
} );
//divide
describe( 'divide(x, y)', function ()
{
    it( 'should return the quotient of the two arguments', function ()
    {
        expect( helpers.divide( 5, 5 ) ).toBe( 1 );
        expect( helpers.divide( 10, 5 ) ).toBe( 2 );
        expect( helpers.divide( 11, 2 ) ).toBe( 5.5 );
    } );
} );
//multiply
describe( 'multiply(x, y)', function ()
{
    it( 'should return the product of the two arguments', function ()
    {
        expect( helpers.multiply( 5, 5 ) ).toBe( 25 );
        expect( helpers.multiply( 10, -5 ) ).toBe( -50 );
        expect( helpers.multiply( 11, 0 ) ).toBe( 0 );
    } );
} );
//get remainder
describe('getRemainder(x, y)', function() {
  it('should return the division remainder of the two arguments', function() {
    expect(helpers.getRemainder(5, 5)).toBe(0);
    expect(helpers.getRemainder(10, 5)).toBe(0);
    expect(helpers.getRemainder(11, 2)).toBe(1);
  });
});
//is even
describe('isEven(num)', function() {
  it('should return the bool true if the argument is even, false otherwise', function() {
    expect(helpers.isEven(6)).toBe(true);
    expect(helpers.isEven(7)).toBe(false);
    expect(helpers.isEven(0)).toBe(true);
  });
});
//is odd
describe('isOdd(num)', function() {
  it('should return the bool true if the argument is odd, false otherwise', function() {
    expect(helpers.isOdd(6)).toBe(false);
    expect(helpers.isOdd(7)).toBe(true);
    expect(helpers.isOdd(0)).toBe(false);
  });
});
//is square
describe('square(num)', function() {
  it('should return the argument after squaring it', function() {
    expect(helpers.square(6)).toBe(36);
    expect(helpers.square(7)).toBe(49);
    expect(helpers.square(0)).toBe(0);
    expect(helpers.square(-5)).toBe(25);
  });
});
//is cube
describe('cube(num)', function() {
  it('should return the argument after cubing it', function() {
    expect(helpers.cube(3)).toBe(27);
    expect(helpers.cube(0)).toBe(0);
    expect(helpers.cube(-5)).toBe(-125);
  });
});
//raisetopower

describe('raiseToPower(num, exponent)', function() {
  it('should return the argument after raising it to the exponent\'s power', function() {
    expect(helpers.raiseToPower(2, 2)).toBe(4);
    expect(helpers.raiseToPower(2, 3)).toBe(8);
    expect(helpers.raiseToPower(0, 5)).toBe(0);
    expect(helpers.raiseToPower(10, 1)).toBe(10);
  });
});
//round number
describe('roundNumber(num)', function() {
  it('should return the argument after rounding it', function() {
    expect(helpers.roundNumber(1.5)).toBe(2);
    expect(helpers.roundNumber(2)).toBe(2);
    expect(helpers.roundNumber(0.1)).toBe(0);
  });
});
//
describe('roundUp(num)', function() {
  it('should return the argument after rounding it up', function() {
    expect(helpers.roundUp(1.5)).toBe(2);
    expect(helpers.roundUp(2)).toBe(2);
    expect(helpers.roundUp(0.1)).toBe(1);
  });
});

describe('addExclamationPoint(str)', function() {
  it('should add an exclamation point to the end of the string', function() {
    expect(helpers.addExclamationPoint('hello world')).toBe('hello world!');
    expect(helpers.addExclamationPoint('LambdaSchool')).toBe('LambdaSchool!');
  });
});

describe('combineNames(firstName, lastName)', function() {
  it('should return the two strings combined into one with a space separating them', function() {
    expect(helpers.combineNames('hello', 'world')).toBe('hello world');
    expect(helpers.combineNames('Lambda', 'School')).toBe('Lambda School');
  });
});

describe('getGreeting(name)', function() {
  it('should return the string \'Hello {name}!\'', function() {
    expect(helpers.getGreeting('Ben')).toBe('Hello Ben!');
    expect(helpers.getGreeting('LambdaSchool')).toBe('Hello LambdaSchool!');
  });
});

describe('getRectangleArea(length, width)', function() {
  it('should return the correct area', function() {
    expect(helpers.getRectangleArea(2, 2)).toBe(4);
    expect(helpers.getRectangleArea(3, 6)).toBe(18);
    expect(helpers.getRectangleArea(0, 2)).toBe(0);
  });
});

describe('getTriangleArea(base, height)', function() {
  it('should return the correct area', function() {
    expect(helpers.getTriangleArea(2, 2)).toBe(2);
    expect(helpers.getTriangleArea(0, 2)).toBe(0);
  });
});
