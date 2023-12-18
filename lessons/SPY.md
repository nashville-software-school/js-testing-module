# Spying 

### Calling Other Functions

In unit testing, we often encounter scenarios where a function doesn't just return a value. Sometimes, functions make calls to other functions, so to properly test how they work we need to check when and how these secondary functions are invoked. This is where spying comes into play. Spy functionality allows Jest to watch when particular functions get called.

### An Example of Spying
To see this in action, open the battle2 example (and rename the test file so it will run). Here, we've added a basic die() method, and we want to test whether it's called when it should be. Now, we could simply assert that isAlive is set to false, since we know that'll only happen if the function is called. But then we'd be testing both of the functions, not testing in isolation. Instead, we can have Jest spy on that function, and then we can check how many times the function was called.

We do this using a couple of the functions provided by expect(). We also need to set this up using the spyOn() function, and we reset the counter after each test with clearAllMocks(). Also, note that we've put this setup and cleanup code in special functions that will run before and after each test. 

### Implement a Spy Yourself
greeting1 (console.log)
greenGlassDoor2 (track correct/incorrect)


### Next up: [Mocking](MOCK.md)
