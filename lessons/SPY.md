# Spying 

Sometimes a function doesn't just return a value. 
Sometimes it calls other functions, and we want to track when and how they're called.
Also, we want to test in isolation, so we'd rather those functions didn't actually run.
Spy functionality lets us accomplish this by intercepting calls to other functions

demo: battle2 (isDead)
work: greeting1 (console.log), greenGlassDoor2 (track correct/incorrect)