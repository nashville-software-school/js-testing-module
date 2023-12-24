# Mocking

### The Problem

Often, a function's behavior is intertwined with the behavior of other functions it calls. This interdependence poses a challenge when testing a specific function in isolation, because the values returned by other functions or external errors can introduce variability and complicate our assessment of the targeted function. 

### The Solution

To isolate a function for testing, we can use mocking to intercept calls to other functions within the unit under test and substitute them with preset values. This lets us create controlled testing environments without external influences, so our tests are consistent, reliable and focused on the functionality we're testing.

### Isolating, Optimizing, and Protecting

Mocking is particularly valuable in scenarios where external dependencies, such as database calls or network requests, are involved. By simulating these dependencies through mocking, we can create controlled environments that don't use the actual external services. This improves efficiency of the testing process, it helps us catch issues earlier (before those other components are built), and lets us test repeatedly without changing persistent data. 

### Looking at an Example

Let's take a look at the **<code>battle3</code>** example. Here, we've added a dexterity value, which will let the hero randomly dodge attacks. Because we're using Math.random(), our test results will vary depending on what that returns. In **<code>battle3_spy.test.js</code>**, we use a spy like before and we call mockReturnValue() to make each invocation return the specified value. Then, as before, we make sure to return everything to normal after our tests.

That's how we can implement a mock using our spy functionality. There's another way to mock a function by directly replacing it with another function. In **<code>battle3_fn.test.js</code>**, the tests are the same, but our setup functions are different. We use **<code>jest.fn</code>** to define a new function that we can temporarily assign to override the original. When we're finished, we need to restore the original, so we have to be sure to save a reference to that before we start.

https://github.com/nashville-software-school/js-testing-module/assets/138717917/6aad0d98-d8d9-41da-a1eb-34d550ac9936

### Try it Yourself

Take a look at the **<code>greeting2</code>** example, which makes the greeting more specific, depending on the time of day. Here, the function we're testing is calling another function in a separate utility object. Because that return value will vary, we can mock that function so that the function we're testing behaves predictably. Note that in these examples, we're setting up the mock within the test because we want to use a different mock function in each test. Write the remaining tests using **<code>jest.fn()</code>** to mock.

The next example, **<code>greenGlassDoor3</code>**, upgrades our game to check that the guess is a real word. To do this, our function needs to make an asynchronous **<code>fetch</code>** call to a dictionary API. We don't want to make a lot of extra calls while testing, and we don't want our unit tests to depend on that third-party service, so we will mock the **<code>fetch</code>** function. This is more complicated because **<code>fetch</code>** returns a promise for a response object, which is generally unpacked using the **<code>json</code>** function. So to mock it, we have to mock its response to include a function that will, in turn, return our mock value. If this clicks, great. If not, don't worry about it. Just write the remaining tests based on existing code. With practice, this will become more intuitive.

### Next up: [Test Driven Design](TDD.md)
