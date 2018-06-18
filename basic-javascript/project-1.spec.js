
const helpers = require('./project-1');

// start testing!
describe('project-1', () => {
  describe('multiplyByTen', () => {
    it('returns NaN when given a non numeric value', () => {
      expect(helpers.multiplyByTen(undefined)).toBeNaN();
      expect(helpers.multiplyByTen('two')).toBeNaN();
    });

    it('should return the given number multiplied by 10', () => {});
  });
});

// describe('subtractFive', () => {
//    it(, () => {

//    })
// })

// describe('areSameLength', () => {
//     it(, () => {
 
//     })
//  })

//  describe('areEqual', () => {
//     it(, () => {
 
//     })
//  })

//  describe('lessThanNinety', () => {
//     it(, () => {
 
//     })
//  })

//  describe('greaterThanFifty', () => {
//     it(, () => {
 
//     })
//  })

//  describe('add', () => {
//     it(, () => {
 
//     })
//  })

//  describe('divide', () => {
//     it(, () => {
 
//     })
//  })

//  describe('subtract', () => {
//     it(, () => {
 
//     })
//  })

//  describe('multiply', () => {
//     it(, () => {
 
//     })
//  })

//  describe('getRemainder', () => {
//     it(, () => {
 
//     })
//  })

 describe('isOdd', () => {
    it('should return true for odd numbers', () => {
       expect(helpers.isOdd(3)).toBeTruthy();
       expect(helpers.isOdd(-1)).toBeTruthy();
    })
    it('should return false for even numbers', () => {
        expect(helpers.isOdd(6)).toBeFalsy();
        expect(helpers.isOdd(0)).toBeFalsy();
 
    })
 })

//  describe('subtract', () => {
//     it(, () => {
 
//     })
//  })

describe('isEven', () => {
  it('should return true for even numbers', () => {
    expect(helpers.isEven(4)).toBeTruthy();
    expect(helpers.isEven(0)).toBeTruthy();
  });
  it('should return false for odd numbers', () => {
    expect(helpers.isEven(3)).toBeFalsy();
    expect(helpers.isEven(-1)).toBeFalsy();
  });
});


