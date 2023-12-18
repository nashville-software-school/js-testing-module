import {checkGuess} from './greenGlassDoor2.js';

describe('greenGlassDoor2 > log guesses', () => {

  beforeEach(() => {
    jest.spyOn(console, 'log');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  
  it("calls the track function with a true value for double words", () => {
    checkGuess("puppy");
    expect(console.log).toHaveBeenCalledWith("");
    checkGuess("moose");
    checkGuess("kittens");
    expect(console.log).toHaveBeenCalledTimes(3);
  });

});