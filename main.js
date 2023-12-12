function sumOfMultiples(number) {
    // Check if the number is negative
    if (number < 0) {
      return 0;
    }
  
    // Initialize the sum
    let totalSum = 0;
  
    // Iterate through all natural numbers below the given number
    for (let i = 0; i < number; i++) {
      // Check if the number is a multiple of 3 or 5
      if (i % 3 === 0 || i % 5 === 0) {
        // Add the multiple to the sum
        totalSum += i;
      }
    }
  
    return totalSum;
  }
  
  // Example usage:
  let result = sumOfMultiples(10);
  console.log(result);  // Output: 23