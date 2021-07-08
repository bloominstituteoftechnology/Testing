WHy test?
verfity correctness
cofidence in the sense of trusting your code
saftey net
prevents regressions
what could happen if i have no test
test manually as the app grows the time needed will not scale 
regressions code that used to work breaks
you just dont know if the code is correct for all cases including edge/corner cases
adding new features becomes slow 
angry customers => product fail

describe('additiom helpers', () =>{
describe('add', () =>{

it('can add two number', ()=>{
    //arrange
    const expected = 42;


    //act
    const actual = add(40, 2)

    //assert
    expect(actual).toEqual(expected); 
    });

    });
});

description('multiplication helpers', () =>{
    describe('multiply numbers', () =>{

   

it('can add multiply   number', ()=>{
    //arrange
    const expected = 42;
    comst max = Math.max;

    //act
    const actual = multiply(21,2);

    //assert
    expect(actual).toEqual(expected);
    expect(mulitply(max,3)).toEqual(45);
});
});
 });
function add (a, b){
    return a + b;
}
function multiply(a, b){
    return a * b;
}


const helpers = require('./project-1);
 describe('project-1', ()=> {
     describe('multiplyByTen', () => {
       it('returns NAN when given a non numeric value',() =>{
expect(helpers.multipyByten(undefinedtoBeNan();
expect(helpers.multipyByten(undefinedtoBeNan();
expect(helpers.multipyByten(undefinedtoBeNan();
expect(helpers.multipyByten(undefinedtoBeNan();
     });  
   
   it('should return given number mulplied by 10', () =>{
        
      });  
    });
