function doubleQuantities(cart) {
    // Iterate through each item in the cart array
    for (let i = 0; i < cart.length; i++) {
      // Double the quantity of the current item
      cart[i] = cart[i] * 2;
    }
    
    // Optionally, you can return the modified cart array
    return cart;
  }
  
  // Example usage:
  let cart = [1, 2, 3, 4, 5];
  console.log("Original cart:", cart);
  
  let updatedCart = doubleQuantities(cart);
  console.log("Updated cart with doubled quantities:", updatedCart);
  