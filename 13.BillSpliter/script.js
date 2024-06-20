function calculateTotalBillAndPerPersonCost(costPerDish, numPeopleSharing) {
    // Calculate the total bill
    let totalBill = costPerDish * numPeopleSharing;
  
    // Calculate the bill per person
    let billPerPerson = totalBill / numPeopleSharing;
  
    // Return an object containing both total bill and bill per person
    return {
      totalBill: totalBill,
      billPerPerson: billPerPerson
    };
  }
  
  // Example usage:
  let costPerDish = 250; // Cost of each dish in rupees
  let numPeopleSharing = 4; // Number of people sharing the dish
  
  let billInfo = calculateTotalBillAndPerPersonCost(costPerDish, numPeopleSharing);
  console.log("Total bill:", billInfo.totalBill);
  console.log("Bill per person:", billInfo.billPerPerson);
  