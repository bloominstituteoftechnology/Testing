const helpers = require('./project-1');

// start testing!

// Testing multiplyByTen

it('should multiply by 10', () => {

    const numTimesTen = helpers.multiplyByTen;
    const value1 = numTimesTen(2);
    const value2 = numTimesTen(5);
    const value3 = numTimesTen(-4);
    const value4 = numTimesTen('3');
    const value5 = numTimesTen(undefined);

    expect(value1).toEqual(20);
    expect(value2).toEqual(50);
    expect(value3).toEqual(-40);
    expect(value4).toEqual(30);
    expect(value5).toBe(false); 
})


