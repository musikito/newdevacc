function multiplyNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
  
    // Input validation (optional): Check if both numbers are valid
    if (isNaN(num1) || isNaN(num2)) {
      alert('Please enter valid numbers.');
      return;
    }
  
    const result = num1 * num2;
    const resultEl = document.getElementById('result');
    resultEl.textContent = `The result is: ${result}`;
  }
  