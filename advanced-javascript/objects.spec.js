const objectFunctions = require('../advanced-javascript/objects.js');


// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  it('should be an object', () => {});
});

it('Should return a object keys', () => {
  const obj = {
    fumo: 'soft',
    sakuya: 'maid',
    reimu: 'shrine maiden'
  }
  expect(objectFunctions.keys(obj)).toEqual(['fumo', 'sakuya', 'reimu'])
})

it('Should return object values', () => {
  const obj = {
    fumo: 'soft',
    sakuya: 'maid',
    reimu: 'shrine maiden'
  }
  expect(objectFunctions.values(obj)).toEqual(['soft', 'maid', 'shrine maiden'])
})
