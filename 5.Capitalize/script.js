function capitalizeFirstLetter() {
    // Get the input value from the user
    let name = document.getElementById('nameInput').value.trim();
  
    // Check if the first character is lowercase
    let modifiedName = name.charAt(0).toUpperCase() + name.slice(1);
  
    // Display the result
    document.getElementById('result').textContent = modifiedName;
  }
  