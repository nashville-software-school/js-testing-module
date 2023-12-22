# Spying 

### Calling Other Functions

In unit testing, we often encounter scenarios where a function doesn't just return a value. Sometimes, functions make calls to other functions, so to properly test how they work we need to check when and how these secondary functions are invoked. This is where spying comes into play. Spy functionality allows Jest to watch when particular functions get called.

### An Example of Spying
To see this in action, open the battle2 example (and rename the test file so it will run). Here, we've added a basic die() method, and we want to test whether it's called when it should be. Now, we could simply assert that isAlive is set to false, since we know that'll only happen if the function is called. But then we'd be testing both of the functions, not testing in isolation. Instead, we can have Jest spy on that function, and then we can check how many times the function was called.

We do this using a couple of the functions provided by expect(). We also need to set this up using the spyOn() function, and we reset the counter after each test with clearAllMocks(). Also, note that we've put this setup and cleanup code in special functions that will run before and after each test. 

### Implement a Spy Yourself
Take a look at the greeting1 example. This function doesn't return anything, but it does sometimes call console.log. Use Jest's spy functionality to check when and how it is called.

Next, try your hand at greenGlassDoor2. Implement the tests as described. Keep in mind that while clearAllMocks does reset Jest's counters, it won't reset any changes we've made within our code.


### Next up: [Mocking](MOCK.md)
