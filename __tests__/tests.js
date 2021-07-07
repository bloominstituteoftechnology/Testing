
describe.skip('addition helpers', () => {
    describe('add', () => {

        it('can add two numbers', () => {
            //arrange
            
            const expected = 42;
            //act
            const actual = add(40, 2);
            
            //assert
            expect(actual).toEqual(expected)
            
        })
    })
})

describe.skip('mutliplication helpers', () => {
    describe('multiply', () => {

it('can multiply numbers', () => {
    //arrange

   const expected = 42;
    //act
const actual = mutliply(21, 2);
    
    //assert
expect(actual).toEqual(expected)

})

})
})


function add(a, b) {
    return a + b;
}

function mutliply(a, b) {
    return a * b;
}