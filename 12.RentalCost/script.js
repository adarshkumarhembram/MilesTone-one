function calculateRentalCost(daysRented, carType) {
    let rentalCostPerDay = 0;
  
    // Determine the rental cost per day based on the car type
    switch (carType.toLowerCase()) {
      case 'economy':
        rentalCostPerDay = 4000; // Rs. 4,000 per day
        break;
      case 'midsize':
        rentalCostPerDay = 15000; // Rs. 15,000 per day
        break;
      case 'luxury':
        rentalCostPerDay = 25000; // Rs. 25,000 per day
        break;
      default:
        return 'Invalid car type. Please choose from Economy, Midsize, or Luxury.';
    }
  
    // Calculate the total rental cost
    let totalRentalCost = rentalCostPerDay * daysRented;
  
    // Return the total rental cost
    return totalRentalCost;
  }
  
  // Example usage:
  let daysRented = 5;
  let carType = 'midsize';
  let totalCost = calculateRentalCost(daysRented, carType);
  console.log(`Total rental cost for ${daysRented} days of ${carType} car: Rs. ${totalCost}/-`);
  