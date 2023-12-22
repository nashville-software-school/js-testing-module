# Testing with Jest

Jest is a node package to easily define and run unit tests. Working with node packages is a separate subject, but in order to get this to work, you just need to navigate to the root directory (where the package.json file is) then type "npm install", which will download all the necessary files. Then type "npx jest" to run it. Jest will look for all the files with ".test" in the name, run all the tests defined there, and log a detailed report. 

For Jest to run your tests, they need to be written using the correct syntax, formatting them like JavaScript functions. See battle1.test.js for an example that does the same thing as our earlier hand-written tests. As you can see, we still have to import the production code we're testing. Then we use the keyword "describe" to create a group of tests with a description, followed by a function that defines the tests in that group. Each test is defined with the keyword "test" or "it" (they are identical) followed by a description of what is being asserted by the test, then a function with JS code to set things up, run the function we're testing, and then check one or more assertions. We will do this using the "expect" keyword, passing in some variable or property, then chaining the "toBe" keyword with the correct value. When we run the test, if any of these assertions are false, it will fail.

### Side Note: About the Exercises

When doing these exercises, it's fine to look at existing code elsewhere in the file or other examples you've seen, just don't copy-paste. When you think a test is complete, run your tests with "npx jest" in the root folder (where package.json is located). Then make a change to break that function and run your tests again to make sure they fail. When you're finished, you can compare your code with the version in the completed folder.

Note that each example is pared down to focus on the concepts discussed. In real-world situations, there are always lots of tests covering various functions.

Also, keep in mind that there can be more than one correct approach. We're focusing on the basics here, which will give a general understanding of the concepts and empower you to unit test most things properly. Jest offers a lot of options for structuring and formatting your tests. In future, you'll definitely see tests formatted differently, and might get confounded by the different ways to approach things. But Jest provides good documentation to reference if you see an example that looks different, or want to learn more about the many features and options available.

Finally, for these lessons, I've named the rest of the test files ".x.js" so that Jest won't find and run any that you haven't yet gotten to. When you start an exercise, rename that test file to end with ".test.js". If you want, you can rename each file back when you're finished with it, but this is optional. Jest has no trouble running tests spread across lots of different files.

### Practice on your Own

Take a look at the mathUtils example, based on two mathematical functions. Complete the unit tests there so that they pass for these functions as they're written, and then fail if you make changes to break them. Remember, to run your tests, open terminal and navigate to the root directory, then type "npx jest".

Next, try your hand at writing your own tests in the greenGlassDoor example. This function is based on a classic riddle, "What's behind the green glass door?". The player guesses things until they figure out the rule: any word with identical consecutive letters (eg. "food", "bubbles", "piggies") is behnd the door, and any non-double word (eg. "pickles", "chair", "piglets") is not. The tests should pass for the function as it is written and then fail if you break it.

### Next up: [Spying](SPY.md)
