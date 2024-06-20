function printNumbersDivisibleBy3NotBy2(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      let num = numbers[i];
  
      // Check if the number is divisible by 3 and not divisible by 2
      if (num % 3 === 0 && num % 2 !== 0) {
        console.log(num);
      }
    }
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  console.log("Numbers divisible by 3 but not by 2:");
  printNumbersDivisibleBy3NotBy2(numbers);
  