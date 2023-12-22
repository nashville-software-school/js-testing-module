import { greeting } from './greeting1.js';


describe('greeting1 > log greeting', () => {

  beforeAll(() => {
    jest.spyOn(console, 'log');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  
  it("logs a greeting when provided a name", () => {
    greeting("Dave");
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(`Hello, Dave! How's it going?`);
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