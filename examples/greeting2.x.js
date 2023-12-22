import { greeting, DateUtils } from './greeting2.js';


describe('greeting1 > log greeting', () => {
  const originalDateGetHourOfDay = DateUtils.getHourOfDay;
  
  it("logs good morning in the morning", () => {
    DateUtils.getHourOfDay = jest.fn(() => 8);

    const myGreeting = greeting("Dave");
    expect(myGreeting).toBe(`Good morning, Dave! How's it going?`);
    DateUtils.getHourOfDay = originalDateGetHourOfDay;
  });

  //TODO: write a test that confirms greeting will log the correct message during afternoon

  //TODO: write a test that confirms greeting will log the correct message at night

});