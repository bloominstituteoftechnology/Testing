const helpers = require('./project-1');

// start testing!
describe('project-1', () => {
  describe('multiplyByTen', () => {
    it('returns NaN when given a non Num Value', () => {
      expect(helpers.multiplyByTen(undefined)).toBeNaN();
      expect(helpers.multiplyByTen('test')).toBeNaN();
      
    });
    it('should return number multi by 10', () => {
      expect(helpers.multiplyByTen(10)).toEqual(100);
      expect(helpers.multiplyByTen(0)).toBe(0);
    })
  })

  describe('subtractFive', () => {
    it('should return a num with 5 removed', () => {
      expect(helpers.subtractFive(10)).toEqual(5);
    })
  })

  describe('areSameLength', () => {
    it('length of strings should equal', () => {
      expect(helpers.areSameLength("abcd","ksld")).toBeTruthy();
      expect(helpers.areSameLength("abcd","kslasdfd")).toBeFalsy();
    })
  })

  describe('areEqual', () => {
    it('numbers should equal', () => {
      expect(helpers.areEqual(512,512)).toBeTruthy();
      expect(helpers.areEqual(5,4)).toBeFalsy();
    })
  })

  describe('lessThanNinety', () => {
    it('lessThanNinety', () => {
      expect(helpers.lessThanNinety(89)).toBeTruthy();
      expect(helpers.lessThanNinety(90)).toBeFalsy();
    })
  })

  describe('greaterThanFifty', () => {
    it('greaterThanFifty', () => {
      expect(helpers.greaterThanFifty(89)).toBeTruthy();
      expect(helpers.greaterThanFifty(40)).toBeFalsy();
    })
  })

  describe('add', () => {
    it('returns NaN when given a non Num Value', () => {
      expect(helpers.add(undefined,2)).toBeNaN();
      expect(typeof(helpers.add('test',4))).toBe('string');
      
    });
    it('should add ', () => {
      expect(helpers.add(10,10)).toEqual(20);
      expect(helpers.add(70,-1)).toBe(69);
    });
  });

  describe('subtract', () => {
    it('returns NaN when given a non Num Value', () => {
      expect(helpers.subtract(undefined,2)).toBeNaN();
      expect(helpers.subtract('test',4)).toBeNaN();
      
    });
    it('should subtract ', () => {
      expect(helpers.subtract(10,10)).toEqual(0);
      expect(helpers.subtract(70,-1)).toBe(71);
    });
  });

  describe('divide', () => {
    it('returns NaN when given a non Num Value', () => {
      expect(helpers.divide(undefined,2)).toBeNaN();
      expect(helpers.divide('test',4)).toBeNaN();
      
    });
    it('should divide ', () => {
      expect(helpers.divide(10,10)).toEqual(1);
      expect(helpers.divide(700,10)).toBe(70);
    })
  })

  describe('multiply', () => {
    it('returns NaN when given a non Num Value', () => {
      expect(helpers.multiply(undefined,2)).toBeNaN();
      expect(helpers.multiply('test',4)).toBeNaN();
      
    });
    it('should multiply ', () => {
      expect(helpers.multiply(10,10)).toEqual(100);
      expect(helpers.multiply(700,10)).toBe(7000);
    })
  })

})


