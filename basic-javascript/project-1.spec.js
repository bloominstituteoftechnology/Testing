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
   test('number', ()=>{
       expect(helpers.getRemainder(7,2)).toBe(1)
   }) 
})
describe('isEven', ()=>{
    test('true', ()=>{
        expect(helpers.isEven(6)).toBe(true)
    })
    test('false',()=>{
        expect(helpers.isEven(5)).toBe(false)
    })
})
describe('isOdd', ()=>{
    test('true', ()=>{
        expect(helpers.isOdd(5)).toBe(true)
    })
    test('false',()=>{
        expect(helpers.isOdd(6)).toBe(false)
    })
})
describe('square',()=>{
    test('positive',()=>{
        expect(helpers.square(5)).toBe(25)
    })
    test('negative',()=>{
        expect(helpers.square(-5)).toBe(25)
    })
})
describe('cube',()=>{
    test('positive',()=>{
        expect(helpers.cube(5)).toBe(125)
    })
    test('negative', ()=>{
        expect(helpers.cube(-5)).toBe(-125)
    })
})
describe('raisePower',()=>{
    test('positive',()=>{
        expect(helpers.raiseToPower(3,2)).toBe(9)
    })
    test('negative',()=>{
        expect(helpers.raiseToPower(-3,2)).toBe(9)
    })
})
describe('roundNumber',()=>{
    test('under5',()=>{
        expect(helpers.roundNumber(10.4)).toBe(10)
    })
    test('above5',()=>{
        expect(helpers.roundNumber(10.5)).toBe(11)
    })
})
describe('roundUp',()=>{
    test('under5',()=>{
        expect(helpers.roundUp(10.4)).toBe(11)
    })
    test('above5',()=>{
        expect(helpers.roundUp(10.5)).toBe(11)
    })
})
describe('addExclaimationPoint',()=>{
    test('string',()=>{
        expect(helpers.addExclamationPoint('Hello')).toBe('Hello!')
    })
})
describe('combineName',()=>{
    test('name',()=>{
        expect(helpers.combineNames('Quan','Nguyen')).toBe('Quan Nguyen')
    })
})
describe('getGreeting',()=>{
    test('hello',()=>{
        expect(helpers.getGreeting('Quan')).toBe('Hello Quan')
    })
})
describe('getRectangle',()=>{
    test('area',()=>{
        expect(helpers.getRectangleArea(5,4)).toBe(20)
    })
})
describe('getTriangle',()=>{
    test('area',()=>{
        expect(helpers.getTriangleArea(5,4)).toBe(10)
    })
})
describe('getCircle',()=>{
    test('area',()=>{
        test('number',()=>{
            expect(helpers.getCircleArea(5)).toBeCloseTo(78.53)
        })
    })
})
describe('getPrism',()=>{
    test('area',()=>{
        expect(helpers.getRectangularPrismVolume(5,4,3)).toBe(60)
    })
})
// start testing!
