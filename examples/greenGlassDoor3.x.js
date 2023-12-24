import { checkGuess } from './greenGlassDoor3.js';

describe('greenGlassDoor3 > check guess and valid word', () => {
  const originalFetch = global.fetch;
  
  it("returns false if guess incorrect and word invalid", async () => {
    const mockData = { title: "No Definitions Found" };
    const mockResponse = { json: jest.fn().mockResolvedValue(mockData) };
    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    const reply = await checkGuess("flurg");
    expect(reply).toBe(false);
    global.fetch = originalFetch;
  });

  //test that checkGuess returns false if guess incorrect and word valid

  //test that checkGuess returns false if guess correct and word invalid

  //test that checkGuess returns true if guess correct and word valid

});