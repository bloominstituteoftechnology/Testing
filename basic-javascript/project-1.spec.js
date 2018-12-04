const helpers = require("./project-1");
describe("multiply by ten", () => {
  test("multiply by ten", () => {
    const test = 5;
    const result = helpers.multiplyByTen(test);
    expect(result).toBe(50);
  });
});
describe("subtract by 5", () => {
  test("subtract 5", () => {
    const result = helpers.subtractFive(15);
    expect(result).toBe(10);
  });
});
describe("areSameLength", () => {
  test(" areSameLength true", () => {
    const result = helpers.areSameLength("poppy", "lucky");
    expect(result).toBe(true);
  });
  test(" areSameLength false", () => {
    const result = helpers.areSameLength("popp", "lucky");
    expect(result).toBe(false);
  });
});
describe("areEqual", () => {
  test(" areEqualString false", () => {
    const result = helpers.areEqual("poppy", "lucky");
    expect(result).toBe(false);
  });
  test(" areEqualString true", () => {
    const result = helpers.areEqual("poppy", "poppy");
    expect(result).toBe(true);
  });
  test("areEqualIntTrue", ()=>{
      const result= helpers.areEqual(5,5);
      expect(result).toBe(true)
  })
  test("areEqualIntFalse", ()=>{
      expect(helpers.areEqual(4,5)).toBe(false)
  })
});
describe('lessThan90',()=>{
    test('true', ()=>{
        expect(helpers.lessThanNinety(5)).toBe(true)
    })
    test('false', ()=>{
        expect(helpers.lessThanNinety(91)).toBe(false)
    })
})
describe('greaterThan50',()=>{
    test('true', ()=>{
        expect(helpers.greaterThanFifty(51)).toBe(true)
    })
    test('false', ()=>{
        expect(helpers.greaterThanFifty(49)).toBe(false)
    })
})
describe('add',()=>{
    test('number',()=>{
        expect(helpers.add(5,4)).toBe(9)
    })
})
describe('subtract',()=>{
    test('number',()=>{
        expect(helpers.subtract(5,4)).toBe(1)
    })
})
describe('divide',()=>{
    test('number',()=>{
        expect(helpers.divide(5,1)).toBe(5)
    })
})
describe('multiply', ()=>{
    test('number', ()=>{
        expect(helpers.multiply(5,6)).toBe(30)
    })
})
describe('getRemainder',()=>{
    
})
// start testing!
