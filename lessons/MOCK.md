# Mocking

### The Problem

Often, a function's behavior is intertwined with the behavior of other functions it calls. This interdependence poses a challenge when testing a specific function in isolation, because the values returned by other functions or external errors can introduce variability and complicate our assessment of the targeted function.

### The Solution

To isolate a function for testing, we can use mocking to intercept calls to other functions within the unit under test and substitute them with preset values. This lets us create controlled testing environments without external influences, so our tests are consistent, reliable and focused on the functionality we're testing.

### Isolating, Optimizing, and Protecting

Mocking is particularly valuable in scenarios where external dependencies, such as database calls or network requests, are involved. By simulating these dependencies through mocking, we can create controlled environments that don't use the actual external services. This improves efficiency of the testing process, it helps us catch issues earlier (before those other components are built), and lets us test repeatedly without changing persistent data. 

### Looking at an Example


### Try it Yourself

### Next up: [Test Driven Design](lessons/TDD.md)

demo: battle3 (?)
work: greeting2 (date for time of day), greenGlassDoor3 (check word)