import { checkGuess } from './greenGlassDoor1.js';

describe('greenGlassDoor1 > checkGuess', () => {
  
  it("returns true when the guess is correct", () => {
    expect(checkGuess("cookies")).toBe(true);
    expect(checkGuess("bubblegum")).toBe(true);
  });

  it("returns false when the guess is incorrect", () => {
    expect(checkGuess("medicine")).toBe(false);
    expect(checkGuess("chairs")).toBe(false);
  });

});
