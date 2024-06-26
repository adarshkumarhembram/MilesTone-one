const calculateTotalCost = (cart) => {
    let totalCost = 0;
    cart.forEach(item => {
        totalCost += item.unitPrice * item.quantity;
    });
    return totalCost;
};

// Example usage:
const cart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 5, quantity: 4 },
    { unitPrice: 8, quantity: 1 }
];

const totalCost = calculateTotalCost(cart);
console.log("Total cost:", totalCost); // Output: Total cost: 48
