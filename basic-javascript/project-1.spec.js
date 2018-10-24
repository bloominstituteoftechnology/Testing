const helpers = require('./project-1');

// start testing!

it('multiplies numbers by 10 isn\'t working', () => {
	
const value = helpers.multiplyByTen(7);
expect(value).toEqual(70);
	
});

it('expected to subtract by 5', () => {

const value = helpers.subtractFive(5);
expect(value).toEqual(0);

});

it('string of length 1 is equal to string of length 0', () => {

const value = helpers.areSameLength('i','');
expect(value).toEqual(false);

});

it('string of length 0 is unequal to string of length 0', () => {

const value = helpers.areSameLength('','');
expect(value).toEqual(true);

});


it('5 is equal to 4', () => {

const value = helpers.areEqual(5,4);
expect(value).toEqual(false);

});

it('5 is not equal to 5', () => {

const value = helpers.areEqual(5,5);
expect(value).toEqual(true);

});

it('50 is less than 90', () => {

const value = helpers.lessThanNinety(50);
expect(value).toEqual(true);

});

it('91 is greater than 90', () => {

const value = helpers.lessThanNinety(91);
expect(value).toEqual(false);

});

it('50 is greater than 50', () => {

const value = helpers.greaterThanFifty(50);
expect(value).toEqual(false);

});

it('51 is not greater than 50', () => {

const value = helpers.greaterThanFifty(51);
expect(value).toEqual(true);

});

it('7+8 should equal 15', () => {
const value = helpers.add(7,8);
expect(value).toEqual(15);
})

it('7-8 should equal -1', () => {
const value = helpers.subtract(7,8);
expect(value).toEqual(0-1);
})

it('10/5 should equal 2', () => {
const value = helpers.divide(10,5);
expect(value).toEqual(2);
})

it('10*5 should equal 50', () => {
const value = helpers.multiply(10,5);
expect(value).toEqual(50);
})

it('remainder of 10/2 should be 0', () => {
const value = helpers.getRemainder(10,2);
expect(value).toEqual(0);
})

it('even numbers should return true, and odd numbers should return false', () => {
expect(helpers.isEven(1)).toEqual(false);
expect(helpers.isEven(2)).toEqual(true);
})

it('even numbers should return false, and odd numbers should return true', () => {
expect(helpers.isOdd(1)).toEqual(true);
expect(helpers.isOdd(2)).toEqual(false);
})

it('4^2 should equal 16', () => {
expect(helpers.square(4)).toEqual(16);
})

it('4^3 should equal 64', () => {
expect(helpers.cube(4)).toEqual(64);
})

it('any number raised to 0 should equal 1', () => {
expect(helpers.raiseToPower(0,0)).toEqual(1);
expect(helpers.raiseToPower(1,0)).toEqual(1);
})

it('expected 6^6 to equal 46656', () => {
expect(helpers.raiseToPower(6,6)).toEqual(46656);
})

it('expected 2.9 to round to 3', () => {
expect(helpers.roundNumber(2.9)).toEqual(3);
})

it('expected 2.2 ro round to 3', () => {
expect(helpers.roundUp(2.2)).toEqual(3);
})

it('expected \'hotdog\' to become \'hotdog!\'', () => {
expect(helpers.addExclamationPoint('hotdog')).toEqual('hotdog!');
})

it('expected \'david\' and \'layman\' to become \'david layman\'', () => {
expect(helpers.combineNames('david','layman')).toEqual('david layman');
})

it('expected \'david\' to become \'Hello, david!\'', () => {
expect(helpers.getGreeting('david')).toEqual('Hello david!');
})

it('expected 0 if width or height is 0', () => {
expect(helpers.getRectangleArea(1,0)).toEqual(0);
expect(helpers.getRectangleArea(0,1)).toEqual(0);
})

it('expected width 7 and height 6 to be 42', () => {
expect(helpers.getRectangleArea(7,6)).toEqual(42);
})

it('expected 0 if width or height is 0', () => {
expect(helpers.getTriangleArea(1,0)).toEqual(0);
expect(helpers.getTriangleArea(0,1)).toEqual(0);
})

it('expected width 7 and height 6 to be 21', () => {
expect(helpers.getTriangleArea(7,6)).toEqual(21);
})

it('expected radius of 4 to equal 50.26548245743669', () => {
expect(helpers.getCircleArea(4)).toEqual(50.26548245743669);
})

it('expected 0 if width, height, or length is 0', () => {
expect(helpers.getRectangularPrismVolume(1,0,1)).toEqual(0);
expect(helpers.getRectangularPrismVolume(0,1,1)).toEqual(0);
expect(helpers.getRectangularPrismVolume(1,1,0)).toEqual(0);
})

it('expected width 7, height 6, and length 3 to be 126', () => {
expect(helpers.getRectangularPrismVolume(7,6,3)).toEqual(126);
})


