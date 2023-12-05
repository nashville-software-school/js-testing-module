# Mocking

Sometimes a function depends on calls to other functions.
We really want to test our function in isolation, and we don't want changing values from other functions or outside errors to confound our unit tests
Mocking lets us intercept a call to another function and provide a specified return value, so we can consistently and reliably test the function we're focused on.

demo: battle3 (?)
work: greeting2 (date for time of day), greenGlassDoor3 (check word)