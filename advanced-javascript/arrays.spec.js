const arrayFunctions = require('./arrays');
const mockCB = jest.fn();

describe('Arrays', () => {
    it('each', () => {
        const callBack = (elem, indx) => {
            elem += indx;  
        }
        const arr = [1, 2, 3, 4];
        arrayFunctions.each(arr, callBack);
        expect(arr).toEqual([1, 3, 5, 7]);
    })
});
