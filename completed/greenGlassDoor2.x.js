import { checkGuess } from './greenGlassDoor2.js';

describe('greenGlassDoor2 > update score', () => {

  beforeEach(() => {
    jest.spyOn(console, 'log');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  
  it("logs a greeting when provided a name", () => {
    greeting("Dave");
    expect(console.log).toHaveBeenCalledTimes(1);
  });

  it("doesn't log anything when nothing provided", () => {
    greeting();
    expect(console.log).not.toHaveBeenCalled();
  });

  it("doesn't log anything when an empty string is provided", () => {
    greeting("");
    expect(console.log).not.toHaveBeenCalled();
  });

});