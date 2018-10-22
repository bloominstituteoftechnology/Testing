const helpers = require('./project-1');

// Some things to test:
// 
// Type Handling (string, number, boolean, etc)


/// --- Project One Tests ---
describe('project-1.js', () => {
    // -- Multiply by 10 --
    describe('Multiply by 10', () => {
        // Return Value After Expected Input
        it('Should return the provided number multiplied by 10', () => {
            let expected = 420;
            const actual = helpers.multiplyByTen(42);
            expect(actual).toBe(expected);
        })

        // Return Value After Empty Input
        it('Should return 0 if no input is provided', () => {
            let expected = 0;
            const actual = helpers.multiplyByTen();
            expect(actual).toBe(expected);
        })

        // Return Values After Unexpected Inputs
        describe('Unexpected Inputs', () => {
            // Return Value After Boolean Input
            it('Should throw an error if a boolean is provided', () => {
                const actual = () => { helpers.multiplyByTen(true) };
                expect(actual).toThrow();
            })
            // Return Value After String Input
            it('Should throw an error if a string is provided', () => {
                const actual = () => { helpers.multiplyByTen('test') };
                expect(actual).toThrow();
            })
            // Return Value After Array Input
            it('Should throw an error if an array is provided', () => {
                const actual = () => { helpers.multiplyByTen([42]) };
                expect(actual).toThrow();
            })
            // Return Value After Object Input
            it('Should throw an error if an object is provided', () => {
                const actual = () => { helpers.multiplyByTen({number: 42}) };
                expect(actual).toThrow();
            })
            // Return Value After Function Input
            it('Should throw an error if a function is provided', () => {
                const actual = () => { helpers.multiplyByTen(() => 42) };
                expect(actual).toThrow();
            })           
        });
    })

    // -- Subtract by 5 --
    describe('Subtract by 5', () => {
        // Return Value After Expected Input
        it('Should return the provided number multiplied by 10', () => {
            let expected = 37;
            const actual = helpers.subtractFive(42);
            expect(actual).toBe(expected);
        })

        // Return Value After Empty Input
        it('Should return 0 if no input is provided', () => {
            let expected = 0;
            const actual = helpers.subtractFive();
            expect(actual).toBe(expected);
        })

        // Return Values After Unexpected Inputs
        describe('Unexpected Inputs', () => {
            // Return Value After Boolean Input
            it('Should throw an error if a boolean is provided', () => {
                const actual = () => { helpers.subtractFive(true) };
                expect(actual).toThrow();
            })
            // Return Value After String Input
            it('Should throw an error if a string is provided', () => {
                const actual = () => { helpers.subtractFive('test') };
                expect(actual).toThrow();
            })
            // Return Value After Array Input
            it('Should throw an error if an array is provided', () => {
                const actual = () => { helpers.subtractFive([42]) };
                expect(actual).toThrow();
            })
            // Return Value After Object Input
            it('Should throw an error if an object is provided', () => {
                const actual = () => { helpers.subtractFive({number: 42}) };
                expect(actual).toThrow();
            })
            // Return Value After Function Input
            it('Should throw an error if a function is provided', () => {
                const actual = () => { helpers.subtractFive(() => 42) };
                expect(actual).toThrow();
            })           
        });
    })

    //         // -- Multiply by 10 --
    // describe('Multiply by 10', () => {
    //     // Return Value After Expected Input
    //     it('Should return the provided number multiplied by 10', () => {
    //         let expected = 420;
    //         const actual = helpers.multiplyByTen(42);
    //         expect(actual).toBe(expected);
    //     })

    //     // Return Value After Empty Input
    //     it('Should return 0 if no input is provided', () => {
    //         let expected = 0;
    //         const actual = helpers.multiplyByTen();
    //         expect(actual).toBe(expected);
    //     })

    //     // Return Values After Unexpected Inputs
    //     describe('Unexpected Inputs', () => {
    //         // Return Value After Boolean Input
    //         it('Should throw an error if a boolean is provided', () => {
    //             const actual = () => { helpers.multiplyByTen(true) };
    //             expect(actual).toThrow();
    //         })
    //         // Return Value After String Input
    //         it('Should throw an error if a string is provided', () => {
    //             const actual = () => { helpers.multiplyByTen('test') };
    //             expect(actual).toThrow();
    //         })
    //         // Return Value After Array Input
    //         it('Should throw an error if an array is provided', () => {
    //             const actual = () => { helpers.multiplyByTen([42]) };
    //             expect(actual).toThrow();
    //         })
    //         // Return Value After Object Input
    //         it('Should throw an error if an object is provided', () => {
    //             const actual = () => { helpers.multiplyByTen({number: 42}) };
    //             expect(actual).toThrow();
    //         })
    //         // Return Value After Function Input
    //         it('Should throw an error if a function is provided', () => {
    //             const actual = () => { helpers.multiplyByTen(() => 42) };
    //             expect(actual).toThrow();
    //         })           
    //     });
    // })

    // // -- Multiply by 10 --
    // describe('Multiply by 10', () => {
    //     // Return Value After Expected Input
    //     it('Should return the provided number multiplied by 10', () => {
    //         let expected = 420;
    //         const actual = helpers.multiplyByTen(42);
    //         expect(actual).toBe(expected);
    //     })

    //     // Return Value After Empty Input
    //     it('Should return 0 if no input is provided', () => {
    //         let expected = 0;
    //         const actual = helpers.multiplyByTen();
    //         expect(actual).toBe(expected);
    //     })

    //     // Return Values After Unexpected Inputs
    //     describe('Unexpected Inputs', () => {
    //         // Return Value After Boolean Input
    //         it('Should throw an error if a boolean is provided', () => {
    //             const actual = () => { helpers.multiplyByTen(true) };
    //             expect(actual).toThrow();
    //         })
    //         // Return Value After String Input
    //         it('Should throw an error if a string is provided', () => {
    //             const actual = () => { helpers.multiplyByTen('test') };
    //             expect(actual).toThrow();
    //         })
    //         // Return Value After Array Input
    //         it('Should throw an error if an array is provided', () => {
    //             const actual = () => { helpers.multiplyByTen([42]) };
    //             expect(actual).toThrow();
    //         })
    //         // Return Value After Object Input
    //         it('Should throw an error if an object is provided', () => {
    //             const actual = () => { helpers.multiplyByTen({number: 42}) };
    //             expect(actual).toThrow();
    //         })
    //         // Return Value After Function Input
    //         it('Should throw an error if a function is provided', () => {
    //             const actual = () => { helpers.multiplyByTen(() => 42) };
    //             expect(actual).toThrow();
    //         })           
    //     });
    // })

    //         // -- Multiply by 10 --
    // describe('Multiply by 10', () => {
    //     // Return Value After Expected Input
    //     it('Should return the provided number multiplied by 10', () => {
    //         let expected = 420;
    //         const actual = helpers.multiplyByTen(42);
    //         expect(actual).toBe(expected);
    //     })

    //     // Return Value After Empty Input
    //     it('Should return 0 if no input is provided', () => {
    //         let expected = 0;
    //         const actual = helpers.multiplyByTen();
    //         expect(actual).toBe(expected);
    //     })

    //     // Return Values After Unexpected Inputs
    //     describe('Unexpected Inputs', () => {
    //         // Return Value After Boolean Input
    //         it('Should throw an error if a boolean is provided', () => {
    //             const actual = () => { helpers.multiplyByTen(true) };
    //             expect(actual).toThrow();
    //         })
    //         // Return Value After String Input
    //         it('Should throw an error if a string is provided', () => {
    //             const actual = () => { helpers.multiplyByTen('test') };
    //             expect(actual).toThrow();
    //         })
    //         // Return Value After Array Input
    //         it('Should throw an error if an array is provided', () => {
    //             const actual = () => { helpers.multiplyByTen([42]) };
    //             expect(actual).toThrow();
    //         })
    //         // Return Value After Object Input
    //         it('Should throw an error if an object is provided', () => {
    //             const actual = () => { helpers.multiplyByTen({number: 42}) };
    //             expect(actual).toThrow();
    //         })
    //         // Return Value After Function Input
    //         it('Should throw an error if a function is provided', () => {
    //             const actual = () => { helpers.multiplyByTen(() => 42) };
    //             expect(actual).toThrow();
    //         })           
    //     });
    // })

    // // -- Multiply by 10 --
    // describe('Multiply by 10', () => {
    //     // Return Value After Expected Input
    //     it('Should return the provided number multiplied by 10', () => {
    //         let expected = 420;
    //         const actual = helpers.multiplyByTen(42);
    //         expect(actual).toBe(expected);
    //     })

    //     // Return Value After Empty Input
    //     it('Should return 0 if no input is provided', () => {
    //         let expected = 0;
    //         const actual = helpers.multiplyByTen();
    //         expect(actual).toBe(expected);
    //     })

    //     // Return Values After Unexpected Inputs
    //     describe('Unexpected Inputs', () => {
    //         // Return Value After Boolean Input
    //         it('Should throw an error if a boolean is provided', () => {
    //             const actual = () => { helpers.multiplyByTen(true) };
    //             expect(actual).toThrow();
    //         })
    //         // Return Value After String Input
    //         it('Should throw an error if a string is provided', () => {
    //             const actual = () => { helpers.multiplyByTen('test') };
    //             expect(actual).toThrow();
    //         })
    //         // Return Value After Array Input
    //         it('Should throw an error if an array is provided', () => {
    //             const actual = () => { helpers.multiplyByTen([42]) };
    //             expect(actual).toThrow();
    //         })
    //         // Return Value After Object Input
    //         it('Should throw an error if an object is provided', () => {
    //             const actual = () => { helpers.multiplyByTen({number: 42}) };
    //             expect(actual).toThrow();
    //         })
    //         // Return Value After Function Input
    //         it('Should throw an error if a function is provided', () => {
    //             const actual = () => { helpers.multiplyByTen(() => 42) };
    //             expect(actual).toThrow();
    //         })           
    //     });
    // })

    //         // -- Multiply by 10 --
    // describe('Multiply by 10', () => {
    //     // Return Value After Expected Input
    //     it('Should return the provided number multiplied by 10', () => {
    //         let expected = 420;
    //         const actual = helpers.multiplyByTen(42);
    //         expect(actual).toBe(expected);
    //     })

    //     // Return Value After Empty Input
    //     it('Should return 0 if no input is provided', () => {
    //         let expected = 0;
    //         const actual = helpers.multiplyByTen();
    //         expect(actual).toBe(expected);
    //     })

    //     // Return Values After Unexpected Inputs
    //     describe('Unexpected Inputs', () => {
    //         // Return Value After Boolean Input
    //         it('Should throw an error if a boolean is provided', () => {
    //             const actual = () => { helpers.multiplyByTen(true) };
    //             expect(actual).toThrow();
    //         })
    //         // Return Value After String Input
    //         it('Should throw an error if a string is provided', () => {
    //             const actual = () => { helpers.multiplyByTen('test') };
    //             expect(actual).toThrow();
    //         })
    //         // Return Value After Array Input
    //         it('Should throw an error if an array is provided', () => {
    //             const actual = () => { helpers.multiplyByTen([42]) };
    //             expect(actual).toThrow();
    //         })
    //         // Return Value After Object Input
    //         it('Should throw an error if an object is provided', () => {
    //             const actual = () => { helpers.multiplyByTen({number: 42}) };
    //             expect(actual).toThrow();
    //         })
    //         // Return Value After Function Input
    //         it('Should throw an error if a function is provided', () => {
    //             const actual = () => { helpers.multiplyByTen(() => 42) };
    //             expect(actual).toThrow();
    //         })           
    //     });
    // })


})