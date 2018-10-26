In Jest, what are the differences between describe() and it() globals, and what are good uses for them?
- describe and it provide ways to organize your tests. One can use describe with it tests nested to create a block of tests that map to an object (or more generally just map to a more complicated function structure). it is a method that then triggers the test. 

What is the point of Test Driven Development? What do you think about this approach?
- TDD can help us develop in a way that maps to user journeys. As we test aspects of our code we can expose gaps in our logic that may have not been obvious....these gaps in logic are necessary to understand as we compose code that will lead users on the journey (usage of our product) that we have not only we have designed, but that they expect.
What are mocks? What are a good use cases for them?
- Mocks simulate behavior without necessitating us to actually write that code in our application. Mocks are important as we think about ways to effectively develop using TDD. As we think of a feature, we can introduce it and test for it without commiting that code to the code base. Another good use case for them is testing a variety of scenarios that might require a huge refactor if enacted. (So we already have code written but want to inexpensively explore other directions/options.)
Mention three types of automated tests.
- Unit, Functional, Regression (the later is SUPER interesting to me)