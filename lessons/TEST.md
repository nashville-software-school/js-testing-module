# Testing Javascript

### Basic Unit Tests

You have probably tested a function by running it in your code and logging the result. This is a basic unit test. It's just regular program code, and it runs along with our application. This could be useful, since we want to re-test our code regularly.

To see an example, open battle0.mjs. Note the code at the bottom that sets up the value of health then calls the function and outputs the new value. This code helps verify that the function works, but otherwise it doesn't do anything for our program.

### Extreme Test Cases

If you want to properly test the function, you need to run it with a variety of inputs and not just one or two expected values. Our code needs to respond predictably to improper inputs. If we write a function to divide numbers, how will it act if we divide by zero? What if we input a string? We probably don't want a simple numeric output, but we do want to consider these possibilities, and be sure that the function acts as intended. This means that we'll need a number of tests for each function.

### Modularized Testing

If we want to have comprehensive tests for all our functions, that's going to really clutter things up. It'll make our files much bigger and harder to navigate. And it'll fill our console with lots of messages that we usually don't care about. We can solve this by modularizing our tests. By putting them in separate files that import the functions they test, we can keep that code out of our regular production code, and we can run them separately so we don't get a flood of messages every time we run the program. 

For an example, remove the console.logs from battle0.mjs, then look at battle0_test1.mjs. You can run this test by going into the examples folder and typing node battle1_test2.mjs. Now you have a file with just your production code, and a corresponding file with all your tests. And you won't see any test logs when you run your program; only when you run the tests.

### Streamlining how we Test

Having these simple console logs in their own file is a good start, but we can probably make these tests work better. For example, we don't really want to have to scan through a ton of logs to find some that indicate errors. It would be much better if our tests just reported which ones failed, with details about why. It could also be helpful to label and organize our tests, and maybe have a standard process for setting up the conditions for different tests. 

See battle0_test2.mjs for an example. Note that we're using a separate function to set up the conditions for each test, which could be very useful in more complicated examples. We're also logging lines to group some tests together, which would help with organization if we had a lot of different tests. And each test uses a conditional check, so it'll only give us detailed information if the test fails. 

We could write utility functions to handle all these helpful features (and more!), so that all our tests can just call those functions and remain concise and manageable. But we don't even have to do that! Some very smart people have already created this and written full documentation on how to use it, and millions of JavaScript developers like you use it every day. It's called Jest. And it's pretty darn pleasant to work with. You just need to get the hang of using it.

### Next up: [Testing with Jest](JEST.md)
