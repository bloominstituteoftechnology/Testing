const funcs = require('./project-1');

// write your tests here
 
describe("Project 1 test runs", () => {
it('should multiply by 10', () =>{
    //arrange
    const multBy10 = funcs.multiplyByTen; 
    //act
    const five = multBy10(5); 
    const negfour = multBy10(-4); 

    //assert 
    expect(five).toBe(50);
    expect(negfour).toBe(-40); 

})

it('should sub by 5', () =>{
    //arrange
    const subBy5 = funcs.subtractFive; 
    //act
    const five = subBy5(5); 
    const negfour = subBy5(-4); 

    //assert 
    expect(five).toBe(0);
    expect(negfour).toBe(-9); 

})

it('should be same length', () =>{
    //arrange
    const rSameL = funcs.areSameLength; 
    //act
    const same = rSameL('str1', 'str2'); 
    const different = rSameL('4', ''); 

    //assert 
    expect(same).toBe(true);
    expect(different).toBe(false); 
})
it('are equal', () =>{
    //arrange
    const rEqual = funcs.areEqual; 
    //act
    const isTrue = rEqual(5, 5); 
    const isFalse = rEqual(-4, 4); 

    //assert 
    expect(isTrue).toBe(true);
    expect(isFalse).toBe(false); 

})


it('is less than 90', () =>{
    //arrange
    const lessThan90 = funcs.lessThanNinety; 
    //act
    const isTrue = lessThan90(89); 
    const isFalse = lessThan90(91); 

    //assert 
    expect(isTrue).toBe(true);
    expect(isFalse).toBe(false); 

})

it('is greater than 50', () =>{
    //arrange
    const greaterThan50 = funcs.greaterThanFifty; 
    //act
    const isTrue = greaterThan50(89); 
    const isFalse = greaterThan50(49); 

    //assert 
    expect(isTrue).toBe(true);
    expect(isFalse).toBe(false); 

})
it('should add two numbers', () => {
    //arrange
    const add = funcs.add; 

    //act 
    const seven = add(3, 4); 
    const four = add(0, 4); 
    const minusThree = add(1, -4); 

    //assert 
    expect(seven).toBe(7); 
    expect(four).toBe(4); 
    expect(minusThree).toBe(-3); 
});

it('should subtract two numbers', () => {
    //arrange
    const sub = funcs.subtract; 

    //act 
    const negOne = sub(3, 4); 
    const negFour = sub(0, 4); 
    const minusNeg = sub(1, -4); 

    //assert 
    expect(negOne).toBe(-1); 
    expect(negFour).toBe(-4); 
    expect(minusNeg).toBe(5); 
});

it('should divide two numbers', () => {
    //arrange
    const div = funcs.divide; 

    //act 
    const one = div(4, 4); 
    const negFour = div(-16, 4); 
   
    //assert 
    expect(one).toBe(1); 
    expect(negFour).toBe(-4); 
   
});

it('should multiply two numbers', () => {
    //arrange
    const mult = funcs.multiply; 

    //act 
    const one = mult(1, 1); 
    const negFour = mult(1, -4); 
   
    //assert 
    expect(one).toBe(1); 
    expect(negFour).toBe(-4); 
   
});

it('should give remainder', () => {
    //arrange
    const getRem = funcs.getRemainder; 

    //act 
    const one = getRem(16, 5); 

    //assert 
    expect(one).toBe(1); 
    
});
it('should be even', () => {
    //arrange
    const isEv = funcs.isEven; 

    //act 
    const zero = isEv(16, 2); 

    //assert 
    expect(zero).toBe(true); 
    
});
it('should be odd', () => {
    //arrange
    const isOd = funcs.isOdd; 

    //act 
    const one = isOd(17, 2); 

    //assert 
    expect(one).toBe(true); 
});
it('should square', () => {
    //arrange
    const squ = funcs.square; 

    //act 
    const nine = squ(3); 

    //assert 
    expect(nine).toBe(9); 
});
it('should cube', () => {
    //arrange
    const cu = funcs.cube; 

    //act 
    const twentySeven = cu(3); 

    //assert 
    expect(twentySeven).toBe(27); 
});
it('should raise to the power', () => {
    //arrange
    const toPower = funcs.raiseToPower; 

    //act 
    const twentySeven = toPower(3, 3); 

    //assert 
    expect(twentySeven).toBe(27); 
});
it('should round a number', () => {
    //arrange
    const round = funcs.roundNumber; 

    //act 
    const twentySeven = round(26.5); 

    //assert 
    expect(twentySeven).toBe(27); 
});
it('should round up', () => {
    //arrange
    const round = funcs.roundUp; 

    //act 
    const twentySeven = round(26.1); 

    //assert 
    expect(twentySeven).toBe(27); 
});
it('should add exclamation point', () => {
    //arrange
    const addE = funcs.addExclamationPoint; 

    //act 
    const hello = addE('hello'); 

    //assert 
    expect(hello).toBe('hello!'); 
});
it('should combine names', () => {
    //arrange
    const combNames = funcs.combineNames; 

    //act 
    const hello = combNames('hello','!'); 

    //assert 
    expect(hello).toBe('hello !'); 
});
it('should add greeting', () => {
    //arrange
    const addGreet = funcs.getGreeting; 

    //act 
    const hello = addGreet(''); 

    //assert 
    expect(hello).toBe('Hello !'); 
});
it('should get rectangle area', () => {
    //arrange
    const getRec = funcs.getRectangleArea; 

    //act 
    const twenty = getRec(4, 5); 

    //assert 
    expect(twenty).toBe(20); 
});
it('should get triangle area', () => {
    //arrange
    const getTri = funcs.getTriangleArea; 

    //act 
    const twenty = getTri(4, 10); 

    //assert 
    expect(twenty).toBe(20); 
});
it('should get circle area', () => {
    //arrange
    const getCir = funcs.getCircleArea; 

    //act 
    const twenty = getCir(4); 

    //assert 
    expect(twenty).toBeCloseTo(50.27, 2); 
});

it('should get Rectangular Prism Volume', () => {
    //arrange
    const getRecPris = funcs.getRectangularPrismVolume; 

    //act 
    const sixty = getRecPris(4, 5, 3); 

    //assert 
    expect(sixty).toBe(60); 
});
})