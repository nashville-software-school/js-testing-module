import { getAffordableUnits } from './protoss.js';

let originalLog;
beforeAll(() => {
  // Spy on console.log to capture its calls
  originalLog = console.log;
  console.log = jest.fn();
});

afterAll(() => {
  // Restore the original console.log after all tests
  console.log = originalLog;
});

describe('Spy > getAffordableUnits', () => {

  

  it("Should return with some units", () => {
    getAffordableUnits(100, 300);
    expect(console.log).toHaveBeenCalledWith(["Probe", "Zealot", "Templar", "Observer"]);
    getAffordableUnits(500, 100);
    expect(console.log).toHaveBeenCalledWith(["Probe", "Zealot", "Dragoon", "Reaver", "Observer"]);
    getAffordableUnits(1500, 1000);
    expect(console.log).toHaveBeenCalledWith(["Probe", "Zealot", "Templar", "Dragoon", "Reaver", "Scout", "Observer", "Carrier"]);

  });

  it("should return an empty array if nothing is affordable", () => {
    getAffordableUnits(0, 0);
    expect(console.log).toHaveBeenCalledWith([]);
  });

});