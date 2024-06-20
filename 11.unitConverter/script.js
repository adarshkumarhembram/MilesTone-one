function celsiusToFahrenheit(celsius) {
    // Convert Celsius to Fahrenheit using the formula: F = C * 9/5 + 32
    let fahrenheit = celsius * 9/5 + 32;
    // Return the result (Fahrenheit temperature)
    return fahrenheit;
  }
  
  // Example usage:
  let celsiusTemperature = 20; // Example Celsius temperature
  let fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
  console.log(`${celsiusTemperature} degrees Celsius is ${fahrenheitTemperature} degrees Fahrenheit.`);
  