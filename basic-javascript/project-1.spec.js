const helpers = require('./project-1');

// start testing!


//multiplyByTen
it('should multiply both positive and negative by 10', () => {
    expect(helpers.multiplyByTen(2)).toBe(20);
    expect(helpers.multiplyByTen(-3)).toBe(-30);
    expect(helpers.multiplyByTen('-4')).toBe(-40);
    
});


//multiplyByTen
it('should multiply string parameter value', () => {
    expect(helpers.multiplyByTen('-4')).toBe(-40);
    expect(helpers.multiplyByTen('5')).toBe(50);
});

//subtractFive 
it('should subtract the number by 5', () => {
    expect(helpers.subtractFive(10)).toBe(5);
    expect(helpers.subtractFive(0)).toBe(-5);
});

//subtractFive 
it('should subtract the number by 5 even if string', () => {
    expect(helpers.subtractFive('15')).toBe(10);
});

//areSameLength
it('should return true if parameters are same length', () => {
    expect(helpers.areSameLength('hello', 'hi')).toBeFalsy();
    expect(helpers.areSameLength('yo', 'hi')).toBeTruthy();
});

//areEqual
it('should check if to parameters are the same', () => {
    expect(helpers.areEqual(8, 8)).toBeTruthy();
    expect(helpers.areEqual(8, 9)).toBeFalsy();
    expect(helpers.areEqual('abc', 'abc')).toBeTruthy();
    expect(helpers.areEqual('abc', 'cba')).toBeFalsy();
    expect(helpers.areEqual(456, '456')).toBe(false);
});



