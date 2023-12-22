import {checkGuess} from './greenGlassDoor2.js';

describe('greenGlassDoor2 > log guesses', () => {

  beforeAll(() => {
    jest.spyOn(console, 'log');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  
  it("logs a message for correct guesses", () => {
    checkGuess("puppy");
    checkGuess("moose");
    checkGuess("kitten");
    expect(console.log).toHaveBeenCalledWith("You have made 3 guesses");
    expect(console.log).toHaveBeenCalledTimes(3);
  });

  it("logs a message for incorrect guesses", () => {
    checkGuess("chicken");
    checkGuess("mouse");
    checkGuess("cat");
    expect(console.log).toHaveBeenCalledTimes(3); //only count the calls in this test
    expect(console.log).toHaveBeenCalledWith("You have made 6 guesses"); //we didn't actually reset the data, only jest's own counter
  });

});