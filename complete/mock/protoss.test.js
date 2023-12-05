import { getAffordableUnits, getRandomVoiceLine } from './protoss.js';

describe('Mock > getAffordableUnits', () => {

    
    it("Should return with some units", () => {
        expect(getAffordableUnits(100, 300)).toEqual(["Zealot", "Templar"]);
        expect(getAffordableUnits(500, 100)).toEqual(["Zealot", "Dragoon"]);
        expect(getAffordableUnits(1500, 1000)).toEqual(["Zealot", "Templar", "Dragoon", "Scout", "Carrier"]);
      });
    
      it("should return an empty array if nothing is affordable", () => {
        expect(getAffordableUnits(0,0)).toEqual([]);
      });

});


describe('Mock > getRandomVoiceLine', () => {

    beforeAll(() => {
        // Mock random() to make it reliably return the same value
        jest.spyOn(Math, 'random').mockReturnValue(0.99);
    });

    afterAll(() => {
        // Restore the random function
        jest.spyOn(Math, 'random').mockRestore();
    });

  it("Should return a voice line for specified unit", () => {
    expect(getRandomVoiceLine("Zealot")).toEqual("I long for combat.");
    expect(getRandomVoiceLine("Dragoon")).toEqual("Zauk comodoss!");
    expect(getRandomVoiceLine("Templar")).toEqual("Serra-hah.");
  });

  it("should return an invalid message if the unit name isn't recognized", () => {
    expect(getRandomVoiceLine("Overlord")).toEqual("Invalid Unit");
  });

});