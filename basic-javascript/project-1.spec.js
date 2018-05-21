const funcs = require('./project-1');

it('multiplies any number by 10', () => {
  const nTimesTen = funcs.multiplyByTen;

  const timesTwo = nTimesTen(2);
  const timesFive = nTimesTen(5);
  const timesTen = nTimesTen(10);

  expect(timesTwo).toEqual(20);
  expect(timesFive).toEqual(50);
  expect(timesTen).toEqual(100);
})

it('subtracts five from any number', () => {
  const minus5 = funcs.subtractFive;

  const three = minus5(3);
  const five = minus5(5);
  const ten = minus5(10);

  expect(three).toEqual(-2);
  expect(five).toEqual(0);
  expect(ten).toEqual(5);
})

it('tests equality of lengths of two values', () => {
  const sameLength = funcs.areSameLength;

  const sample1 = sameLength('ayyyy', '12345');
  const sample2 = sameLength('123', '4567');

  expect(sample1).toEqual(true);
  expect(sample2).toEqual(false);
})

it('tests equality between two values', () => {
  const equal = funcs.areEqual;

  const sample1 = equal(5, 10-5);
  const sample2 = equal('equal', 'equal');
  const sample3 = equal({}, {});

  expect(sample1).toEqual(true);
  expect(sample2).toEqual(true);
  expect(sample3).toEqual(false);
})

it('is a value less than 90?', () => {
  const less90 = funcs.lessThanNinety;

  const sample1 = less90(89);
  const sample2 = less90(90);
  const sample3 = less90(91);

  expect(sample1).toEqual(true);
  expect(sample2).toEqual(false);
  expect(sample3).toEqual(false);
})

it('tests', () => {
  const testFunction = funcs.greaterThanFifty;

  const sample1 = testFunction(49);
  const sample2 = testFunction(50);
  const sample3 = testFunction(51);

  expect(sample1).toEqual(false);
  expect(sample2).toEqual(false);
  expect(sample3).toEqual(true);
})
/*
it('tests', () => {
  const testFunction = funcs.___;

  const sample1 = testFunction();
  const sample2 = testFunction();
  const sample3 = testFunction();

  expect(sample1).toEqual();
  expect(sample2).toEqual();
  expect(sample3).toEqual();
})

// it('tests', () => {
  const testFunction = funcs.___;

  const sample1 = testFunction();
  const sample2 = testFunction();
  const sample3 = testFunction();

  expect(sample1).toEqual();
  expect(sample2).toEqual();
  expect(sample3).toEqual();
// })

// it('tests', () => {
  const testFunction = funcs.___;

  const sample1 = testFunction();
  const sample2 = testFunction();
  const sample3 = testFunction();

  expect(sample1).toEqual();
  expect(sample2).toEqual();
  expect(sample3).toEqual();
// })

// it('tests', () => {
  const testFunction = funcs.___;

  const sample1 = testFunction();
  const sample2 = testFunction();
  const sample3 = testFunction();

  expect(sample1).toEqual();
  expect(sample2).toEqual();
  expect(sample3).toEqual();
// })

// it('tests', () => {
  const testFunction = funcs.___;

  const sample1 = testFunction();
  const sample2 = testFunction();
  const sample3 = testFunction();

  expect(sample1).toEqual();
  expect(sample2).toEqual();
  expect(sample3).toEqual();
// })

// it('tests', () => {
  const testFunction = funcs.___;

  const sample1 = testFunction();
  const sample2 = testFunction();
  const sample3 = testFunction();

  expect(sample1).toEqual();
  expect(sample2).toEqual();
  expect(sample3).toEqual();
// })

// it('tests', () => {
  const testFunction = funcs.___;

  const sample1 = testFunction();
  const sample2 = testFunction();
  const sample3 = testFunction();

  expect(sample1).toEqual();
  expect(sample2).toEqual();
  expect(sample3).toEqual();
// })

// it('tests', () => {
  const testFunction = funcs.___;

  const sample1 = testFunction();
  const sample2 = testFunction();
  const sample3 = testFunction();

  expect(sample1).toEqual();
  expect(sample2).toEqual();
  expect(sample3).toEqual();
// })

// it('tests', () => {
  const testFunction = funcs.___;

  const sample1 = testFunction();
  const sample2 = testFunction();
  const sample3 = testFunction();

  expect(sample1).toEqual();
  expect(sample2).toEqual();
  expect(sample3).toEqual();
// })

// it('tests', () => {
  const testFunction = funcs.___;

  const sample1 = testFunction();
  const sample2 = testFunction();
  const sample3 = testFunction();

  expect(sample1).toEqual();
  expect(sample2).toEqual();
  expect(sample3).toEqual();
// })

// it('tests', () => {
  const testFunction = funcs.___;

  const sample1 = testFunction();
  const sample2 = testFunction();
  const sample3 = testFunction();

  expect(sample1).toEqual();
  expect(sample2).toEqual();
  expect(sample3).toEqual();
// })

// it('tests', () => {
  const testFunction = funcs.___;

  const sample1 = testFunction();
  const sample2 = testFunction();
  const sample3 = testFunction();

  expect(sample1).toEqual();
  expect(sample2).toEqual();
  expect(sample3).toEqual();
// })

// it('tests', () => {
  const testFunction = funcs.___;

  const sample1 = testFunction();
  const sample2 = testFunction();
  const sample3 = testFunction();

  expect(sample1).toEqual();
  expect(sample2).toEqual();
  expect(sample3).toEqual();
// })

// it('tests', () => {
  const testFunction = funcs.___;

  const sample1 = testFunction();
  const sample2 = testFunction();
  const sample3 = testFunction();

  expect(sample1).toEqual();
  expect(sample2).toEqual();
  expect(sample3).toEqual();
// })

// it('tests', () => {
  const testFunction = funcs.___;

  const sample1 = testFunction();
  const sample2 = testFunction();
  const sample3 = testFunction();

  expect(sample1).toEqual();
  expect(sample2).toEqual();
  expect(sample3).toEqual();
// })

// it('tests', () => {
  const testFunction = funcs.___;

  const sample1 = testFunction();
  const sample2 = testFunction();
  const sample3 = testFunction();

  expect(sample1).toEqual();
  expect(sample2).toEqual();
  expect(sample3).toEqual();
// })

// it('tests', () => {
  const testFunction = funcs.___;

  const sample1 = testFunction();
  const sample2 = testFunction();
  const sample3 = testFunction();

  expect(sample1).toEqual();
  expect(sample2).toEqual();
  expect(sample3).toEqual();
// })

// it('tests', () => {
  const testFunction = funcs.___;

  const sample1 = testFunction();
  const sample2 = testFunction();
  const sample3 = testFunction();

  expect(sample1).toEqual();
  expect(sample2).toEqual();
  expect(sample3).toEqual();
// })

// it('tests', () => {
  const testFunction = funcs.___;

  const sample1 = testFunction();
  const sample2 = testFunction();
  const sample3 = testFunction();

  expect(sample1).toEqual();
  expect(sample2).toEqual();
  expect(sample3).toEqual();
// })
*/