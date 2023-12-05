# Test Driven Design

It's useful to write tests that will check our function and make sure it works in the future, after we've changed it.
Tests can also be used as part of the coding process. By writing our tests first, we can specify the kind of behavior we want from a function. Then we can go and write the code that satisfies those tests. 
This process is called Test Driven Design, and it's based around three phases: Red, green and blue.
In the red phase, we start by considering what a piece of functionality should do and writing tests that assert that it works. Then we run our tests and see that they fail, putting us in the red.
In the green phase, we write the code to make those tests pass, putting us in the green. Importantly, we shouldn't write any additional code that isn't related to those tests.
In the blue phase, we refactor: clean things up, reorganize or rename as needed. These changes should never change what the code does, they just improve how it's structured and styled.
Then, we start over by considering some additional functionality, writing tests for that, making those pass, etc.
This process can be tedious, but it helps structure the process by separating design decisions from the coding process, and it assures that all code will be accompanied by fairly comprehensive tests.

demo: battle4 (healing)
work: greenGlassDoor (getScore), getRandomIntArray (pass in length and max value)


