# Spying 

### Calling Other Functions

In unit testing, we often encounter scenarios where a function doesn't just return a value. Sometimes, functions make calls to other functions, so to properly test how they work we need to check when and how these secondary functions are invoked. 

Also, to maintain the purity of our unit tests and ensure they run in isolation, we want to prevent the actual execution of these dependent functions. 

### Solving this with Spies

This is where spying comes into play. Spy functionality allows us to intercept calls to other functions, replacing a particular function with a "spy" (a surrogate or placeholder function). Since the function will instead be invoking this Jest spy, Jest can track information about those calls, like how often it gets called and what arguments are passed. 

Also, this will prevent the original function from being called, so it helps keep our unit test isolated from the rest of the code.

### An Example of Spying

### Implement a Spy Yourself

### Next up: [Mocking](MOCK.md)

demo: battle2 (isDead)
work: greeting1 (console.log), greenGlassDoor2 (track correct/incorrect)