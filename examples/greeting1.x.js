import { greeting } from './greeting1.js';


describe('greeting1 > log greeting', () => {

  beforeEach(() => {
    jest.spyOn(console, 'log');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  
  it("logs a greeting when provided a name", () => {
    greeting("Dave");
    //TODO: assert that console.log is called once
    //TODO: assert that console.log is called with the expected argument value. You'll need to research how to do this.
  });

  it("doesn't log anything when nothing provided", () => {
    greeting();
    expect(console.log).not.toHaveBeenCalled();
  });

  //TODO: write a test to confirm that log does not get called when an empty string is provided

});