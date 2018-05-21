const funcs = require('./project-1');

// write your tests here




describe('default', () => {
  it('runs the test', () => {})
})


describe('multiply by ten', () => {
  it('should multiply number by ten', () => {
    const multiply = funcs.multiplyByTen

    const actual = multiply(2);
    const expected = 20;

    expect(actual).toBe(expected);
  })
})


describe('areSameLength', () => {
  it('should check for length of 2 strings if they are of same length', () => {

    const actual = funcs.areSameLength('abcd', '1234');
    expect(actual).toBeTruthy()
  })
})


describe('areEqual', () => {
  it('checkes for eaulity', () => {
    const actual = funcs.areEqual(5, 5);
    expect(actual).toBeTruthy()
  } )
})



describe('lessThanNinety', () => {
  it('checkes if a number is less then ninty', () => {
    const actual = funcs.lessThanNinety(65);
    expect(actual).toBeTruthy()
  } )
})



describe('greaterThanFifty', () => {
  it('checks if a number is greater then fifty', () => {
    const  actual = funcs.greaterThanFifty(100);
    expect(actual).toBeTruthy();
  })

  it('checks if a number is greater then fifty', () => {
    const  actual = funcs.greaterThanFifty(45);
    expect(actual).toBeFalsy();
  })
})


describe('add', () => {
  it('checks if it adds 2 number', () => {
    const actual = funcs.add(4, 5);
    const expected = 9;
    expect(actual).toEqual(expected)

  })
})



describe('subtract', () => {
  it('checks if it subtracts two number', () => {

    const four = funcs.subtract(8, 4);
    const negFour = funcs.subtract(4, 8);

    expect(four).toEqual(4)
    expect(negFour).toEqual(-4)


  })
})


describe('divide', () => {
  it('checks for division of 2 numbers', () => {
    const four = funcs.divide(8,2);
    expect(four).toEqual(4)
  })
})

describe('multiply', () => {
  it('checks for multiplication for 2 numbers', () => {

    const six = funcs.multiply(3,2);
    expect(six).toEqual(6)
  })
})



describe('getRemainder', () => {
  it('checks if for a Remainder of 2 numbers', () => {
    const actual = funcs.getRemainder(8, 5);
    expect(actual).toEqual(3)
  })
})

describe('isEven', () => {

  it('checks for a even number', () => {
    const isEven = funcs.isEven(10);
    expect(isEven).toBeTruthy();

  })

  it('checks for a even number', () => {
    const isOdd = funcs.isEven(7)
    expect(isOdd).toBeFalsy()
  })
})


describe('isOdd', () => {

  it('checks for a Odd number', () => {
    const isEven = funcs.isOdd(10);
    expect(isEven).toBeFalsy()
  })

  it('checks for a Odd number', () => {
    const isOdd = funcs.isOdd(7)
    expect(isOdd).toBeTruthy()
  })
})


describe('square', () => {
  it('checks if the function returns the square of a given number', () => {
    const actual = funcs.square(5);
    expect(actual).toEqual(25);
  })
})




describe('cube', () => {
  it('checks if the function returns the cube of a given number', () => {
    const actual = funcs.cube(2);
    expect(actual).toEqual(8)
  })
})
