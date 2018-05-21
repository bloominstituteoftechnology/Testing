const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
it('is a test', () => {
  expect('test').toEqual('test')
})

it('does something', () => {
  const largest = funcs.getBiggest;

  const sample1 = largest(2, 3);
  const sample2 = largest(5, 1);
  const sample3 = largest('big', 'bigger');

  expect(sample1).toEqual(3);
  expect(sample2).toEqual(5);
  expect(sample3).toEqual('bigger');
})