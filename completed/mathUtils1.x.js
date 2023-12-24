import { isPrime, factorial } from './mathUtils1.js';

describe('mathUtils > isPrime', () => {
  it("returns true for a prime number", () => {
    expect( isPrime(2) ).toBe(true);
    expect( isPrime(5) ).toBe(true);
    expect( isPrime(53) ).toBe(true);
  });
  it("returns false for a non-prime number", () => {
    expect( isPrime(15) ).toBe(false);
    expect( isPrime(100000) ).toBe(false);
  });

  it("returns false for anything less than two", () => {
    expect( isPrime(0) ).toBe(false);
    expect( isPrime(1) ).toBe(false);
    expect( isPrime(-5) ).toBe(false);
  });
});

describe('mathUtils > factorial', () => {
  it("returns the correct factorial for a positive number", () => {
    expect( factorial(1) ).toBe(1);
    expect( factorial(3) ).toBe(6);
    expect( factorial(6) ).toBe(720);
    expect( factorial(10) ).toBe(3628800);
  });

  it("returns 1 for zero", () => {
    expect( factorial(0) ).toBe(1);
  });

  it("returns null for negative numbers", () => {
    expect( factorial(-5) ).toBe(null);
  });
});