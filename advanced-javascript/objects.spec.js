const objectFunctions = require('../advanced-javascript/objects.js');

// whoops.. there is no test suite for this file. You'll simply just have to
// create one :/
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
});

it('Should return object values', () => {
  const obj = {
    fumo: 'soft',
    sakuya: 'maid',
    reimu: 'shrine maiden'
  }
  expect(objectFunctions.values(obj)).toEqual(['soft', 'maid', 'shrine maiden'])
});

it('Should map over object and return changed value based on function', () => {
  const mapObject = objectFunctions.mapObject;
  const numbers = {
    alpha: 1,
    beta: 2,
    charlie: 3
  }

  expect(mapObject(numbers, val => val * 2)).toEqual({alpha: 2, beta: 4, charlie: 6});
});

it('Should return key value pairs into arrays', () => {
  const pairs = objectFunctions.pairs;
  const obj = {
    fumo: 'soft',
    sakuya: 'maid',
    reimu: 'shrine maiden'
  }
  expect(pairs(obj)).toEqual([
    [
      'fumo', 'soft'
    ],
    [
      'sakuya', 'maid'
    ],
    ['reimu', 'shrine maiden']
  ]);
})

it('Should invert key value pairings', () => {
  const invert = objectFunctions.invert;
  const obj = {
    fumo: 'soft',
    sakuya: 'maid',
    reimu: 'shrine maiden'
  }
  expect(invert(obj)).toEqual({"maid": "sakuya", "shrine maiden": "reimu", "soft": "fumo"})
});

it('Should return default values of an object', () => {
  const defaults = objectFunctions.defaults;
  const obj = {
    fumo: 'soft',
    sakuya: 'maid',
    reimu: 'shrine maiden'
  }
  expect(defaults(obj, {mokou: 'immortal'})).toEqual({fumo: 'soft', mokou: 'immortal', sakuya: 'maid', reimu: 'shrine maiden'})
});

