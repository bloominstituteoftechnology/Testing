const funcs = require('./project-1');

// write your tests here

describe ('default', () => {
    it('run the tests', () => {});
});

describe('multiplyByTen', () => {
    it('should multiply by 10', () => {
        
      //arrange
      const multiply = funcs.multiplyByTen;

      // act
      const fourty = multiply(4);


      //assert
      expect(fourty).toBe(40);

    })
})

describe('subtractFive', () => {
    it('should subtract five from sum', () => {
        const subtract = funcs.subtractFive;

        const ten = subtract(15);

        expect(ten).toBe(10);
    })
})

describe('areSameLength', () => {
    it('should check if strings are same length', () => {
      const sameLength = funcs.areSameLength;
      const stringLength1 = 'joe';
      const stringLength2 = 'bob';

      const areSameLength = funcs.areSameLength(stringLength1, stringLength2);

      expect(areSameLength).toEqual(true);
    })
}) 