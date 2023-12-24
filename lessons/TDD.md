# Test Driven Design

It's useful to write tests that will check our function and make sure it works in the future, after we've changed it.
Tests can also be used as part of the coding process. By writing our tests first, we can specify the kind of behavior we want from a function. Then we can go and write the code that satisfies those tests. 
This process is called Test Driven Design, and it's based around three phases: Red, green and blue.
In the red phase, we start by considering what a piece of functionality should do and writing tests that assert that it works. Then we run our tests and see that they fail, putting us in the red.
In the green phase, we write the code to make those tests pass, putting us in the green. Importantly, we shouldn't write any additional code that isn't related to those tests.
In the blue phase, we refactor: clean things up, reorganize or rename as needed. These changes should never change what the code does, they just improve how it's structured and styled.
Then, we start over by considering some additional functionality, writing tests for that, making those pass, etc.
This process can be tedious, but it helps structure the process by separating design decisions from the coding process, and it assures that all code will be accompanied by fairly comprehensive tests.

### An Example

First, take a look at the **<code>battle4</code>** example. In the test file, we have already written three tests for a new function. Run those tests and they will fail. That's OK in the red phase. But now that those are complete, we need to write a function that makes the tests pass, so we're in the green phase. As soon as they do, we could do some cleanup (blue phase) or progress to the next red phase, writing tests for another piece of functionality.

https://github.com/nashville-software-school/js-testing-module/assets/138717917/38dd49ad-f83c-4f5a-901d-b4bbe0fdf971

### Try it Yourself

Next, look at **<code>mathUtils2</code>** example. Here, we're going to build on the previous version and add three new functions. Each time, you should first write the tests for that function, then see them fail, and then write just enough code to make them all pass. Note: in these exercises, it's not important to implement these with perfect mathematical accuracy. What's important is that you decide how your function will work, test that, and then get your function to pass those. If you finish and find the completed version is different from yours, you could update your code and the tests accordingly, and consider that an exercise in the normal process of writing and updating code.

First, you should add a function called triangular() that will calculate the triangular number of an integer. A triangular number is the sum of all positive integers that are less than or equal to that number (you can iterate like we did for factorial, but using addition instead of multiplication). First, write a new group of tests that pass in positive numbers, negative numbers, non-integers, zero, and maybe even non-numbers. Then write the function to pass all your tests. Don't read any further until you've finished.

Next, add a function to calculate the median value of an array of numbers. As before, start by adding a group of tests. You should definitely test numbers out of order, including negative numbers and non-integers. If you want, you might consider how to handle non-numeric elements, or an empty array or non-array value. Once you're finished writing tests, implement the function. Don't read any further until you've finished.

Oh, boy! It turns out there's a quicker way to calculate a triangular number! Search for the mathematical formula, then update your code. Are you sure this works? No worries - just re-run your tests! We're often going back and changing code, so hopefully this illustrates how nice it is to have a set of tests to help assure that you don't break things.

### That's it!

That's the end of this module on unit testing with Jest. Now you know the fundamental concepts. To learn more about Jest, you can start exploring [the documentation](https://jestjs.io/docs/getting-started). Happy testing!
