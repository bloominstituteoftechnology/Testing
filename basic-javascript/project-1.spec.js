const helpers = require('./project-1');

// start testing!

describe('default', () => {
  it('run the tests', () => {});
})

describe('project 1 testing', () => {
  it('should multiply by 10', () => {
    const multiplyByTen = helpers.multiplyByTen;

    const oneHundred = multiplyByTen(10);
    const oneFifty = multiplyByTen(15);
    const twenty = multiplyByTen(2);

    expect(oneHundred).toBe(100);
    expect(oneFifty).toBe(150);
    expect(twenty).toBe(20);

  })

  it('should subtract 5', () => {
    const subtractFive = helpers.subtractFive;

    const five = subtractFive(10);
    const twenty = subtractFive(25);
    const fifty = subtractFive(55);

    expect(five).toBe(5);
    expect(twenty).toBe(20);
    expect(fifty).toBe(50);

  })

  it('should be the same length', () => {
    const armSameLength = helpers.areSameLength;

    const fruit = "Apple";
    const fish = "Salmon";
    const drink = "Pepsi";

    expect(fruit,drink).toBe(true);
    expect(fruit,fish).toBe(false);
    expect(drink,fruit).toBe(true);
    
  })
})