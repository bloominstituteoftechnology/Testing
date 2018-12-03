const helpers = require('./project-1');

// start testing!
describe('project-1', () => {
    describe('multiplyByTen', () => {
        it('should provide right answer when mutiply by 10', () => {
            expect(helpers.multiplyByTen(10)).toEqual(100);
        })
    })

    
})
