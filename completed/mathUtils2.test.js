import { isPrime, factorial, triangular, median } from './mathUtils2.js';

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


describe('median', () => {
  it('should return null for an empty array', () => {
    const result = median([]);
    expect(result).toBeNull();
  });

  it('should return null for non-array input', () => {
    const result = median('not an array');
    expect(result).toBeNull();
  });

  it('should return the middle value for an odd-length array', () => {
    const result = median([1, 3, 2, 5, 4]);
    expect(result).toBe(3);
  });

  it('should return the average of middle values for an even-length array', () => {
    const result = median([1, 3, 2, 5, 4, 6]);
    expect(result).toBe(3.5);
  });

  it('should not modify the original array', () => {
    const numbers = [1, 3, 2, 5, 4];
    const result = median(numbers);
    expect(numbers).toEqual([1, 3, 2, 5, 4]); // Original array should not be modified
  });

  it('should handle negative numbers', () => {
    const result = median([-1, -3, -2, -5, -4]);
    expect(result).toBe(-3);
  });

  it('should handle decimal numbers', () => {
    const result = median([1.5, 3.5, 2.5, 5.5, 4.5]);
    expect(result).toBe(3.5);
  });

  it('should handle a single-element array', () => {
    const result = median([42]);
    expect(result).toBe(42);
  });
});


describe('triangular', () => {
  it('should return null for negative numbers', () => {
    const result = triangular(-5);
    expect(result).toBeNull();
  });

  it('should return null for NaN input', () => {
    const result = triangular(NaN);
    expect(result).toBeNull();
  });

  it('should return 0 for 0', () => {
    const result = triangular(0);
    expect(result).toBe(0);
  });

  it('should return the triangular number for positive integers', () => {
    const result1 = triangular(1);
    const result2 = triangular(2);
    const result3 = triangular(3);
    const result4 = triangular(4);

    expect(result1).toBe(1);
    expect(result2).toBe(3);
    expect(result3).toBe(6);
    expect(result4).toBe(10);
  });

  it('should handle non-integer positive input', () => {
    const result = triangular(5.5);
    // The triangular number for 5.5 is the same as for 5
    expect(result).toBe(15);
  });
});