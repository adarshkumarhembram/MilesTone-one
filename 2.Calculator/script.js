function calculate() {
    // Get input values
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operator = document.getElementById('operator').value;
  
    // Variable to store the result
    var result;
  
    // Use switch statement to perform operation based on operator
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        console.log('Invalid operator');
        return;
    }
  
    // Display the result
    document.getElementById('result').textContent = 'Result: ' + result;
  }
  