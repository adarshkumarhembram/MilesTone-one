function removeDuplicates() {
    // Get the cart input value and split by commas to create an array
    let cartInput = document.getElementById('cartInput').value.trim();
    let items = cartInput.split(',').map(item => item.trim());
  
    // Create a new Set to automatically remove duplicates
    let uniqueItems = [...new Set(items)];
  
    // Display the unique items in the result section
    displayUniqueItems(uniqueItems);
  }
  
  function displayUniqueItems(items) {
    let uniqueItemsList = document.getElementById('uniqueItems');
    uniqueItemsList.innerHTML = '';
  
    items.forEach(item => {
      let li = document.createElement('li');
      li.textContent = item;
      uniqueItemsList.appendChild(li);
    });
  }
  