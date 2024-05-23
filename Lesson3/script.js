const calculatorData = {
    num1: '',
    num2: '',
    operation: ''
  };
  
  function updateData(field, value) {
    calculatorData[field] = value;
  }
  
  function calculate() {
    const { num1, num2, operation } = calculatorData;
  
    if (num1 === '' || num2 === '' || operation === '') {
      showError("Please enter both numbers and an operation.");
      return;
    }
  
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
  
    if (operation === '/' && number2 === 0) {
      showError("Cannot divide by zero.");
      return;
    }
  
    let result;
  
    switch (operation) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      case '/':
        result = number1 / number2;
        break;
      default:
        showError("Invalid operation.");
        return;
    }
  
    const historyField = document.getElementById('history');
    historyField.value += `${num1} ${operation} ${num2} = ${result}\n`;
  }
  
  function inputDigit(digit) {
    const focusedElement = document.activeElement;
    if (focusedElement.id !== 'num1' || focusedElement.id !== 'num2') {
      focusedElement.value += digit;
      updateData(focusedElement.id, focusedElement.value);
    }
  }
  
  function inputOperation(op) {
    const operationInput = document.getElementById('operation');
    operationInput.value = op;
    updateData('operation', op);
  }
  
  function clearOperation() {
    const operationInput = document.getElementById('operation');
    operationInput.value = '';
    updateData('operation', '');
  }
  
  function validateNumber(event) {
    const char = String.fromCharCode(event.which);
    if (!/[-0-9]/.test(char)) {
      event.preventDefault();
    }
  }
  
  function validateOperation(event) {
    const operationInput = document.getElementById('operation');
    const char = String.fromCharCode(event.which);
  
    if (!/[-+*/]/.test(char)) {
      event.preventDefault();
      return;
    }
  
    operationInput.value = char;
    event.preventDefault();
  }
  
  function showError(message) {
    const historyField = document.getElementById('history');
    historyField.value += `${message}\n`;
  }
  