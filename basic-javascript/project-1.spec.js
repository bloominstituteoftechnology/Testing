const helpers = require('./project-1');

// start testing!
describe('project 1', () => {
  it('multiplyByTen', () => {
    const multTen = helpers.multiplyByTen;
    const negThree = multTen(-3);
    const two = multTen(2);
    const thirteen = multTen(13);

    expect(negThree).toBe(-30);
    expect(two).toBe(20);
    expect(thirteen).toBe(130);
  });

  it('subtracts five from any number', () => {
    const subFive = helpers.subtractFive;
    const negOne = subFive(-1);
    const fifteen = subFive(15);

    expect(negOne).toBe(-6);
    expect(fifteen).toBe(10);
  });

  it('compares length of two strings', () => {
    const sameLength = helpers.areSameLength;

    const string = sameLength('bbbbb', '987');
    const string2 = sameLength('xyz', 'abc');

    expect(string).toEqual(false);
    expect(string2).toEqual(true);
  });
});
