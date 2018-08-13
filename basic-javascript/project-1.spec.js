const helpers = require('./project-1');

// start testing!

it('should return number multiplied by ten', () => {
    //arange / setup
 
    // act / execute the System Under Test (SUT)

    //assert : check your assumptions
    expect(helpers.multiplyByTen(.3)).toEqual(3);
    expect(helpers.multiplyByTen(4)).toEqual(40);
    expect(helpers.multiplyByTen(100)).toEqual(1000);
    expect(helpers.multiplyByTen(0)).toEqual(0);
    expect(helpers.multiplyByTen(-20)).toEqual(-200);
});

it('should return number subtracted by five', () => {

  expect(helpers.subtractFive(10)).toEqual(5);
  expect(helpers.subtractFive(100)).toEqual(95);
  expect(helpers.subtractFive(0)).toEqual(-5);
  expect(helpers.subtractFive(555)).toEqual(550);
});


it('should return number subtracted by five', () => {

  const a10 = 'alphabet10';
  const d10 = '0123456789';
  const a5 = 'alpha';
  const first = 'first';

  expect(helpers.areSameLength(a10, d10)).toEqual(true);
  expect(helpers.areSameLength(a5, first)).toEqual(true);
  expect(helpers.areSameLength(a10, first)).toEqual(false);
  expect(helpers.areSameLength(a5, d10)).toEqual(false); 
});

it('should say whether or not these elements are equal to each other', () => {

  expect(helpers.areEqual(5, 'five')).toEqual(false);
  expect(helpers.areEqual(5, 2+3)).toEqual(true);

})

it('should let us know if the argument is less than 90', () => {
    expect(helpers.lessThanNinety(89)).toBe(true);
    expect(helpers.lessThanNinety(100)).toBe(false);

})

it('shoulder let us know if the argument is greater than 50', () => {
  expect(helpers.greaterThanFifty(51)).toBe(true);
  expect(helpers.greaterThanFifty(49)).toBe(false);    
})

it('should return the sum of the arguments', () => {
  expect(helpers.add(3,5)).toEqual(8);
  expect(helpers.add(0,5)).toEqual(5);
  expect(helpers.add(-1,100)).toEqual(99);
})

it('should return the result of the first number minus the second number', () => {
  expect(helpers.subtract(3,5)).toEqual(-2);
  expect(helpers.subtract(0,5)).toEqual(-5);
  expect(helpers.subtract(-1,100)).toEqual(-101);
})

it('shoulder return the result of the first number divided by the second number', () => {
  expect(helpers.divide(4,4)).toEqual(1);
  expect(helpers.divide(400,4)).toEqual(100);
  expect(helpers.divide(200,-4)).toEqual(-50);
})

it('shoulder return the product of the two supplied arguments', () => {
  expect(helpers.multiply(4,4)).toEqual(16);
  expect(helpers.multiply(99,99)).toEqual(9801);
  expect(helpers.multiply(-4,3)).toEqual(-12);
})

it('should return true or false depending if the number is even', () => {
  expect(helpers.isEven(222)).toEqual(true);
  expect(helpers.isEven(120)).toEqual(true);
  expect(helpers.isEven(3)).toEqual(false);
  expect(helpers.isEven(333)).toEqual(false);
})

it('should return true or false depending if the number is odd', () => {
  expect(helpers.isOdd(20)).toEqual(false);
  expect(helpers.isOdd(19)).toEqual(true);
  expect(helpers.isOdd(21)).toEqual(true);
})

it('should tell return the number squared', () => {
  expect(helpers.square(2)).toEqual(4);
  expect(helpers.square(3)).toEqual(9);
  expect(helpers.square(4)).toEqual(16);
  expect(helpers.square(-256)).toEqual(65536);
})

it('should return the number cubed', () => {
  expect(helpers.cube(2)).toEqual(8);
  expect(helpers.cube(3)).toEqual(27);
  expect(helpers.cube(-256)).toEqual(-16777216);
})




// it('should ', () => {
//   expect(helpers.().toEqual());
// })
