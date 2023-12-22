
export const isPrime = (num) => {

        // Check if the number is less than 2
        if (num < 2) {
          return false;
        }
      
        // Check for divisibility from 2 to the square root of the number
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            // If the number is divisible by any number in this range, it's not prime
            return false;
          }
        }
      
        // If no divisors were found, the number is prime
        return true;
}


export const factorial = (n) => {

    //return null for a negative number
    if (n < 0) {
        return null 
    }

    // Base case: factorial of 0 is 1
    if (n === 0) {
      return 1;
    }
  
    // Initialize the result to 1
    let result = 1;
  
    // Multiply result by each integer from 1 to n
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
  
    return result;
}

export const triangular = (n) => {

  //return null for a negative number
  if (n < 0 || isNaN(n)) {
      return null 
  }

  // Initialize the result to 0
  let result = 0;

  // add all positive numbers up to and including n
  for (let i = 1; i <= n; i++) {
    result += i;
  }

  return result;
}

export const median = (numbers) => {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return null;
  }

  // Copy the array, then sort that in ascending order
  const sortedNumbers = numbers.slice().sort((a, b) => a - b);

  const middleIndex = Math.floor(sortedNumbers.length / 2);

  if (sortedNumbers.length % 2 === 0) {
    // If the array has an even number of elements, take the average of the middle two
    return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
  } else {
    // If the array has an odd number of elements, return the middle element
    return sortedNumbers[middleIndex];
  }
}



export const triangular2 = (n) => {
  if (n < 0 || isNaN(n)) {
    return null;
  }
  return (n * (n + 1)) / 2;
};