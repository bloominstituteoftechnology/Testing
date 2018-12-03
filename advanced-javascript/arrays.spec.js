const aF = require('./arrays.js');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

test('each', () => {
  expect(
    aF.each(['brandon', 'test'], (item, index) => {
      return item;
    })
  ).toBe();
});

test('map', () => {
  expect(
    aF.map(['brandon', 'test'], item => {
      return item;
    })
  ).toEqual(['brandon', 'test']);
});

test('reduce', () => {
  expect(
    aF.reduce(['brandon', 'test'], item => {
      return item;
    })
  ).toEqual('brandon');
});

test('find', () => {
  expect(
    aF.find(['brandon', 'test'], item => {
      return item === 'brandon' ? item : null;
    })
  ).toBe('brandon');
});

test('filter', () => {
  expect(
    aF.filter(['brandon', 'test'], item => {
      return item === 'brandon' ? item : null;
    })
  ).toEqual(['brandon']);
});

test('flatten', () => {
  expect(aF.flatten(['brandon', 'test'])).toEqual(['brandon', 'test']);
});