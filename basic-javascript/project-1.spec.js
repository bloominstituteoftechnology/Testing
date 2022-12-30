const helpers = require('./project-1');

// start testing!

describe('multiply by ten', () => {
  it('should multiply a number by ten', () => {
    expect(helpers.multiplyByTen(0)).toEqual(0);
    expect(helpers.multiplyByTen(1)).toEqual(10);
    expect(helpers.multiplyByTen(10)).toEqual(100);
  });
   it('should check if argument is a number', () => {
    expect(helpers.multiplyByTen(' ')).toEqual(undefined);
    expect(helpers.multiplyByTen('4')).toEqual(undefined);
    expect(helpers.multiplyByTen('q')).toEqual(undefined);
    expect(helpers.multiplyByTen(undefined)).toEqual(undefined);
  });
});
 describe('subtract five from argument', () => {
  it('should subtract five from argument', () => {
    expect(helpers.subtractFive(0)).toEqual(-5);
    expect(helpers.subtractFive(5)).toEqual(0);
    expect(helpers.subtractFive(10)).toEqual(5);
  });
   it('should check if argument is a number', () => {
    expect(helpers.subtractFive(' ')).toEqual(undefined);
    expect(helpers.subtractFive('4')).toEqual(undefined);
    expect(helpers.subtractFive('q')).toEqual(undefined);
    expect(helpers.subtractFive(undefined)).toEqual(undefined);
  });
});
 describe('check equivalence of string lengths', () => {
  it('should check equivalence of string lengths', () => {
    expect(helpers.areSameLength('', '  ')).toEqual(false);
    expect(helpers.areSameLength('abc', 'abc')).toEqual(true);
    expect(helpers.areSameLength('ab', 'abc')).toEqual(false);
  });
   it('should return false when one of the arguments is undefined', () => {
    expect(helpers.areSameLength(undefined, 'abc')).toEqual(false);
  });
   it('should return false if one or both arguments are not strings', () => {
    expect(helpers.areSameLength(6, 'abc')).toEqual(false);
  });
});
 describe('check equivalence', () => {
  it('should check equivalence', () => {
    expect(helpers.areEqual('abc', 'abc')).toEqual(true);
    expect(helpers.areEqual('ab', 'abc')).toEqual(false);
    expect(helpers.areEqual(8, 'abc')).toEqual(false);
    expect(helpers.areEqual(8, 8)).toEqual(true);
  });
   it('should return false when one of the arguments is undefined', () => {
    expect(helpers.areEqual(undefined, 'abc')).toEqual(false);
  });
});
 describe('check if a number is less than 90', () => {
  it('should check if a number is less than 90', () => {
    expect(helpers.lessThanNinety(91)).toEqual(false);
    expect(helpers.lessThanNinety(90)).toEqual(false);
    expect(helpers.lessThanNinety(89)).toEqual(true);
  });
   it('should check if argument is a number', () => {
    expect(helpers.lessThanNinety(' ')).toEqual(undefined);
    expect(helpers.lessThanNinety('4')).toEqual(undefined);
    expect(helpers.lessThanNinety('q')).toEqual(undefined);
    expect(helpers.lessThanNinety(undefined)).toEqual(undefined);
  });
});
 describe('check if a number is greater than 50', () => {
  it('should check if a number is greater than 50', () => {
    expect(helpers.greaterThanFifty(51)).toEqual(true);
    expect(helpers.greaterThanFifty(50)).toEqual(false);
    expect(helpers.greaterThanFifty(49)).toEqual(false);
  });
   it('should check if argument is a number', () => {
    expect(helpers.greaterThanFifty(' ')).toEqual(undefined);
    expect(helpers.greaterThanFifty('4')).toEqual(undefined);
    expect(helpers.greaterThanFifty('q')).toEqual(undefined);
    expect(helpers.greaterThanFifty(undefined)).toEqual(undefined);
  });
});

// add
describe('Add', () => {
  it('knows that 1 plus 1 is 2', () => {
    expect(helpers.add(1, 1)).toBe(2);
  });
  it('knows that -5 plus -3 is -8', () => {
    expect(helpers.add(-5, -3)).toBe(-8);
  });
  it(`knows that 'one' plus 1 is not a number`, () => {
    expect(helpers.add('one', 1)).toBeFalsy();
  });
});
 // subtract
describe('Subtract', () => {
  it('knows that 1 minus 1 is 0', () => {
    expect(helpers.subtract(1, 1)).toBe(0);
  });
  it('knows that -5 minus -3 is -2', () => {
    expect(helpers.subtract(-5, -3)).toBe(-2);
  });
  it(`knows that 'one' minus 1 is not a number`, () => {
    expect(helpers.subtract('one', 1)).toBeFalsy();
  });
});
 // divide
describe('Divide', () => {
  it('knows that 12 divided by 3 is 4', () => {
    expect(helpers.divide(12, 3)).toBe(4);
  });
  it('knows that 1 divided by -4 is -.25', () => {
    expect(helpers.divide(1, -4)).toBe(-.25);
  });
  it(`knows that 'one' divided by 1 is not a number`, () => {
    expect(helpers.divide('one', 1)).toBeFalsy();
  });
  it(`knows that 100 divided by 0 is indeterminate`, () => {
    expect(helpers.divide(100, 0)).toBe(undefined);
  });
});
 // multiply
describe('Multiply', () => {
  it('knows that 12 times 3 is 36', () => {
    expect(helpers.multiply(12, 3)).toBe(36);
  });
  it('knows that 0 times 4 is 0', () => {
    expect(helpers.multiply(0, 4)).toBe(0);
  });
  it(`knows that 'one' times 1 is not a number`, () => {
    expect(helpers.multiply('one', 1)).toBeFalsy();
  });
});
 // getRemainder 
describe('Get remainder', () => {
  it('knows that the remainder of 17 and 10 is 7', () => {
    expect(helpers.getRemainder(17, 10)).toBe(7);
  });
  it('knows that the remainder of 5 and 5 is 0', () => {
    expect(helpers.getRemainder(5, 5)).toBe(0);
  });
  it(`knows that the remainder of 4 and 'two' is not a number`, () => {
    expect(helpers.getRemainder(4, 'two')).toBeFalsy();
  });
});
 // isEven
describe('Is even', () => {
  it('knows that 4 is even', () => {
    expect(helpers.isEven(4)).toBeTruthy();
  });
  it('knows that 3 is not even', () => {
    expect(helpers.isEven(3)).toBeFalsy();
  });
  it(`knows that 'banana' is not even`, () => {
    expect(helpers.isEven('banana')).toBeFalsy();
  });
});

describe('Is odd', () => {
  it('knows that 3 is odd', () => {
    expect(helpers.isOdd(3)).toBeTruthy();
  });
  it('knows that 4 is not odd', () => {
    expect(helpers.isOdd(4)).toBeFalsy();
  });
  it(`knows that 'banana' is not even`, () => {
    expect(helpers.isOdd('banana')).toBeFalsy();
  });
});
//  // square
describe('Square', () => {
  it('knows that 3 squared is 9', () => {
    expect(helpers.square(3)).toBe(9);
  });
  it('knows that -10 squared is 100', () => {
    expect(helpers.square(-10)).toBe(100);
  });
  it(`knows that 'potato' squared is not a number`, () => {
    expect(helpers.square('potato')).toBeFalsy();
  });
});

 // cube
describe('Cube', () => {
  it('knows that 3 cubed is 27', () => {
    expect(helpers.cube(3)).toBe(27);
  });
  it('knows that -10 cubed is -1000', () => {
    expect(helpers.cube(-10)).toBe(-1000);
  });
  it(`knows that 'potato' cubed is not a number`, () => {
    expect(helpers.cube('potato')).toBeFalsy();
  });
});
 // raiseToPower
describe('Raise to power', () => {
  it('knows that 3 to the power of 3 is 27', () => {
    expect(helpers.raiseToPower(3, 3)).toBe(27);
  });
  it('knows that -10 to the power of 2 is 100', () => {
    expect(helpers.raiseToPower(-10, 2)).toBe(100);
  });
  it(`knows that 'potato' to the power of 12 is not a number`, () => {
    expect(helpers.raiseToPower('potato', 12)).toBeFalsy();
  });
});
 // roundNumber
describe('Round number', () => {
  it('knows that 3.14 rounded is 3', () => {
    expect(helpers.roundNumber(3.14)).toBe(3);
  });
  it('knows that 3.9 rounded is 4', () => {
    expect(helpers.roundNumber(3.9)).toBe(4);
  });
  it(`knows that 'pizza' rounded is not a number`, () => {
    expect(helpers.roundNumber('pizza')).toBeFalsy();
  });
});
 // roundUp
describe('Round up', () => {
  it('knows that 3.14 rounded up is 4', () => {
    expect(helpers.roundUp(3.14)).toBe(4);
  });
  it('knows that 3.9 rounded up is 4', () => {
    expect(helpers.roundUp(3.9)).toBe(4);
  });
  it(`knows that 'pizza' rounded up is not a number`, () => {
    expect(helpers.roundUp('pizza')).toBeFalsy();
  });
});
 // addExclamationPoint
describe('Add exclamation point', () => {
  it(`knows that 'hello' with an exclamation point is 'hello!'`, () => {
    expect(helpers.addExclamationPoint('hello')).toBe('hello!');
  });
  it(`knows that 0 with an exclamation point is '0!'`, () => {
    expect(helpers.addExclamationPoint(0)).toBe('0!');
  });
  it(`knows that '!!' with an exclamation point is '!!!'`, () => {
    expect(helpers.addExclamationPoint('!!')).toBe('!!!');
  });
});
 // combineNames
describe('Combine names', () => {
  it(`knows that 'Tyson' and 'G are 'Tyson G'`, () => {
    expect(helpers.combineNames('Tyson', 'G')).toBe('Tyson G');
  });
  it(`knows that 'Mimi' and 'ImFurst' are 'Mimi ImFurst'`, () => {
    expect(helpers.combineNames('Mimi', 'ImFurst')).toBe('Mimi ImFurst');
  });
  it(`knows that 0 and '-san' are '0 -san'`, () => {
    expect(helpers.combineNames(0, '-san')).toBe('0 -san');
  });
});
 // getGreeting
describe('Get greeting', () => {
  it(`knows that 'Tyson' becomes 'Hello Tyson!'`, () => {
    expect(helpers.getGreeting('Tyson')).toBe('Hello Tyson!');
  });
  it(`knows that 0 becomes 'Hello 0!'`, () => {
    expect(helpers.getGreeting(0)).toBe('Hello 0!');
  });
  it(`knows that 'hello' becomes 'Hello, hello!'`, () => {
    expect(helpers.getGreeting('hello')).toBe('Hello hello!');
  });
});
 // getRectangleArea
describe('Get rectangle area', () => {
  it('knows that the area of a 3x3 rectangle is 9', () => {
    expect(helpers.getRectangleArea(3, 3)).toBe(9);
  });
  it('knows that the area of a -10x2 rectangle does not exist', () => {
    expect(helpers.getRectangleArea(-10, 2)).toBeFalsy();
  });
  it(`knows that the area of a 'potato'x12 rectangle does not exist`, () => {
    expect(helpers.getRectangleArea('potato', 12)).toBeFalsy();
  });
});
 // getTriangleArea
describe('Get triangle area', () => {
  it('knows that the area of a triangle with a base of 3 and a height of 3 is 4.5', () => {
    expect(helpers.getTriangleArea(3, 3)).toBe(4.5);
  });
  it(`knows that the area of a triangle with a base of 'potato' and a height of 3 does not exist`, () => {
    expect(helpers.getTriangleArea('potato', 3)).toBeFalsy();
  });
});
//  // getCircleArea
it('should return the area of a circle using the argument as the radius', () => {
  const pi =  3.141592653589793;
   expect(helpers.getCircleArea(3)).toEqual(9*pi);
  expect(helpers.getCircleArea(4)).toEqual(16*pi);
  expect(helpers.getCircleArea(5)).toEqual(25*pi);
})
// describe('Get triangle area', () => {
//   it('knows that the area of a circle with a radius of 3 is 28.27', () => {
//     expect(helpers.getCircleArea(3)).toBe(28.27);
//   });
//   it('knows that the area of a circle with a radius of -10 does not exist', () => {
//     expect(helpers.getCircleArea(-10)).toBeFalsy()
//   });
//   it(`knows that the area of a circle with a radius of 'potato' does not exist`, () => {
//     expect(helpers.getCircleArea('potato')).toBeFalsy();
//   });
// });


//  // getRectangularPrismVolume
it('should return the volume of a rectangular prism using the arguments for the dimensions', () => {
  expect(helpers.getRectangularPrismVolume(2,4,6)).toEqual(48);
})
// describe('Get rectangular prism volumn', () => {
//   it('knows that the volume of a rectangular prism with a length of 1, width of 2 and height of 3 is 6', () => {
//     expect(helpers.getRectangularPrismVolume(1,2,3)).toBe(6);
//   });
//   it('knows that the volume of a rectangular prism with a length of -10, width of 2 and height of 3 does not exist', () => {
//     expect(helpers.getRectangularPrismVolume(-10,2,3)).toBeFalsy();
//   });
//   it(`knows that the volume of a rectangular prism with a length of 'potato', width of 5 and height of 120 does not exist`, () => {
//     expect(helpers.getRectangularPrismVolume('potato',5,120)).toBeFalsy();
//   });
// });