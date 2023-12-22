import { greeting, DateUtils } from './greeting2.js';


describe('greeting1 > log greeting', () => {
  const originalDateGetHourOfDay = DateUtils.getHourOfDay;
  
  it("logs good morning in the morning", () => {
    DateUtils.getHourOfDay = jest.fn(() => 8);

    const myGreeting = greeting("Dave");
    expect(myGreeting).toBe(`Good morning, Dave! How's it going?`);
    DateUtils.getHourOfDay = originalDateGetHourOfDay;
  });

  it("logs good afternoon in the afternoon", () => {
    DateUtils.getHourOfDay = jest.fn(() => 14);

    const myGreeting = greeting("Dave");
    expect(myGreeting).toBe(`Good afternoon, Dave! How's it going?`);
    DateUtils.getHourOfDay = originalDateGetHourOfDay;
  });

  it("logs good evening in the evening", () => {
    DateUtils.getHourOfDay = jest.fn(() => 20);

    const myGreeting = greeting("Dave");
    expect(myGreeting).toBe(`Good evening, Dave! How's it going?`);
    DateUtils.getHourOfDay = originalDateGetHourOfDay;
  });

});