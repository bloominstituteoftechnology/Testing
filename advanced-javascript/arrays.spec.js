const arrayFunctions = require('./arrays');
const mockCB = jest.fn();


describe('Arrays', () => {
    let arr;
    let callBack;
    beforeAll(() => {
        callBack = (e) => {
            return e += 1;
        }
    })
    beforeEach(() => {
        arr = [1, 2, 3, 4];
    })
    describe('each', () => {
      it('should be a function', () => {
          const instanceOfEach = arrayFunctions.each;
          expect(typeof instanceOfEach).toBe('function');
      });
      it('should invoke callback on each item in array', () => {
          arrayFunctions.each(arr, mockCB);
          expect(mockCB.mock.calls.length).toBe(4);
      });
    });
    describe('map', () => {
        it('should be a function', () => {
            const instanceOfMap = arrayFunctions.map;
            expect(typeof instanceOfMap).toBe('function');
        })
        it('should return mapped array', () => {
            expect(arrayFunctions.map(arr, callBack)).toEqual([2, 3, 4, 5]);
        });
    });
    describe('reduce', () => {
        it('should be a function', () => {
            const instanceOfReduce = arrayFunctions.reduce;
            expect(typeof instanceOfReduce).toBe('function');
        });
        it('should return memo from reduce', () => {
           // going to have to come back to this one...
        })
    });
    describe('find', () => {
        it('should be a function', () => {
            const instanceOfFind = arrayFunctions.find;
            expect(typeof instanceOfFind).toBe('function');
        });
        it('should return element if found', () => {
            const isMatch = (searchedFor) => {
                if (searchedFor === 4) {
                    return true;
                } else {
                    return false;
                }
            }
            expect(arrayFunctions.find(arr, isMatch)).toBe(4);
        });
    });
    describe('filter', () => {
        it('should be a function', () => {
            const instanceOfFilter = arrayFunctions.filter;
            expect(typeof instanceOfFilter).toBe('function');
        });
        it('should return filtered array', () => {
            const filterCB = (e) =>  {
                if (e % 2 === 0) {
                    return true;
                } else {
                    return false;
                }
            };
            expect(arrayFunctions.filter(arr, filterCB)).toEqual([2, 4]);
        });
    });
    describe('flatten', () => {
        it('should be a function', () => {
            const instanceOfFlatten = arrayFunctions.flatten;
            expect(typeof instanceOfFlatten).toBe('function');
        }); // so I'm going to move on for now but will come back  
    });
});
