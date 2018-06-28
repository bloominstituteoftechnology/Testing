const arrayFunctions = require('./arrays');
const mockCB = jest.fn();
beforeEach(() => {
    const arr = [1, 2, 3, 4];
})

describe('Arrays', () => {
    describe('each', () => {
      it('must be a function', () => {
          const instanceOfEach = arrayFunctions.each;
          expect(typeof instanceOfEach).toBe('function');
      });
      it('should invoke callback on each item in array', () => {
          arrayFunctions.each(arr, mockCB);
          expect(mockCB.mock.calls.length).toBe(4);
      })
    })
});
