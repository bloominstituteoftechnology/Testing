const helpers = require('./project-1');

// multiplyByTen
describe('Multiplication by 10', () => {
  it('knows that 0 x 10 is 0', () => {
    expect(helpers.multiplyByTen(0)).toBe(0);
  });
  it('knows that 1 x 10 is 10', () => {
    expect(helpers.multiplyByTen(1)).toBe(10);
  });
  it('knows that 10 x 10 is 100', () => {
    expect(helpers.multiplyByTen(10)).toBe(100);
  });
  it(`knows that 'tyson' x 10 is not a number`, () => {
    expect(helpers.multiplyByTen('tyson')).toBeFalsy();
  });
});

// subtractFive
describe('Subtract 5', () => {
  it('knows that 0 - 5 is -5', () => {
    expect(helpers.subtractFive(0)).toBe(-5);
  });
  it('knows that 1 - 5 is -4', () => {
    expect(helpers.subtractFive(1)).toBe(-4);
  });
  it('knows that 10 - 5 is 5', () => {
    expect(helpers.subtractFive(10)).toBe(5);
  });
  it(`knows that 'tyson' - 5 is not a number`, () => {
    expect(helpers.subtractFive('tyson')).toBeFalsy();
  });
});

// areSameLength
describe('Are the same length', () => {
  it('knows that 0 and 1 are the same length', () => {
    expect(helpers.areSameLength(0, 1)).toBeTruthy();
  });
  it(`knows that 'hello' and 'goodbye' are not the same length`, () => {
    expect(helpers.areSameLength('hello', 'goodbye')).toBeFalsy();
  });
  it(`knows that 'hi' and 'si' are the same length`, () => {
    expect(helpers.areSameLength('hi', 'si')).toBeTruthy();
  });
});

// areEqual
describe('Are exactly equal', () => {
  it('knows that 0 and false are not exactly equal', () => {
    expect(helpers.areEqual(0, false)).toBeFalsy();
  });
  it('knows that 1 and 1 are exactly equal', () => {
    expect(helpers.areEqual(1, 1)).toBeTruthy();
  });
  it(`knows that 'hi' and 'hi' are exactly equal`, () => {
    expect(helpers.areEqual('hi', 'hi')).toBeTruthy();
  });
});

// lessThanNinety
describe('Less than ninety', () => {
  it('knows that 0 is less than 90', () => {
    expect(helpers.lessThanNinety(0)).toBeTruthy();
  });
  it('knows that 91 is not less than 90', () => {
    expect(helpers.lessThanNinety(91)).toBeFalsy();
  });
  it(`knows that 'one' is not less than 90`, () => {
    expect(helpers.lessThanNinety('one')).toBeFalsy();
  });
});

// greaterThanFifty
describe('Greater than fifty', () => {
  it('knows that 0 is not greater than 50', () => {
    expect(helpers.greaterThanFifty(0)).toBeFalsy();
  });
  it('knows that 51 is greater than 50', () => {
    expect(helpers.greaterThanFifty(51)).toBeTruthy();
  });
  it(`knows that 'one' is not greater than 50`, () => {
    expect(helpers.greaterThanFifty('one')).toBeFalsy();
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
    expect(helpers.divide(100, 0)).toBe(Infinity);
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
  it(`knows that 'potato' is not even`, () => {
    expect(helpers.isEven('potato')).toBeFalsy();
  });
});

// isOdd
describe('Is odd', () => {
  it('knows that 3 is odd', () => {
    expect(helpers.isOdd(3)).toBeTruthy();
  });
  it('knows that 4 is not odd', () => {
    expect(helpers.isOdd(4)).toBeFalsy();
  });
  it(`knows that 'potato' is not odd`, () => {
    expect(helpers.isOdd('potato')).toBeFalsy();
  });
});

// square
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
  it('knows that the area of a triangle with a base of -10 and a height of 4 does not exist', () => {
    expect(helpers.getTriangleArea(-10, 4)).toBeFalsy()
  });
  it(`knows that the area of a triangle with a base of 'potato' and a height of 3 does not exist`, () => {
    expect(helpers.getTriangleArea('potato', 3)).toBeFalsy();
  });
});

// getCircleArea
describe('Get triangle area', () => {
  it('knows that the area of a circle with a radius of 3 is 28.27', () => {
    expect(helpers.getCircleArea(3)).toBe(28.27);
  });
  it('knows that the area of a circle with a radius of -10 does not exist', () => {
    expect(helpers.getCircleArea(-10)).toBeFalsy()
  });
  it(`knows that the area of a circle with a radius of 'potato' does not exist`, () => {
    expect(helpers.getCircleArea('potato')).toBeFalsy();
  });
});

// getRectangularPrismVolume
describe('Get rectangular prism volumn', () => {
  it('knows that the volume of a rectangular prism with a length of 1, width of 2 and height of 3 is 6', () => {
    expect(helpers.getRectangularPrismVolume(1,2,3)).toBe(6);
  });
  it('knows that the volume of a rectangular prism with a length of -10, width of 2 and height of 3 does not exist', () => {
    expect(helpers.getRectangularPrismVolume(-10,2,3)).toBeFalsy();
  });
  it(`knows that the volume of a rectangular prism with a length of 'potato', width of 5 and height of 120 does not exist`, () => {
    expect(helpers.getRectangularPrismVolume('potato',5,120)).toBeFalsy();
  });
});