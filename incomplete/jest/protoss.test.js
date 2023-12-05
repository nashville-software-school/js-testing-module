import { getAffordableUnits } from './protoss.js';

describe('Jest > getAffordableUnits', () => {

  it("Should return with some units", () => {
    expect(getAffordableUnits(100, 300)).toEqual(["Probe", "Zealot", "Templar", "Observer"]);
    expect(getAffordableUnits(1500, 1000)).toEqual(["Probe", "Zealot", "Templar", "Dragoon", "Reaver", "Scout", "Observer", "Carrier"]);
    //write an assertion to check that passing 500 minerals and 100 gas yields an array with Probe, Zealot, Dragoon, Reaver, and Observer
  });

  it("should return an empty array if nothing is affordable", () => {
    //write an assertion to check that passing 0 minerals and 0 gas yields an empty array
  });

});