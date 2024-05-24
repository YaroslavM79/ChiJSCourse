const calculatorData = {
  num1: '',
  num2: '',
  operation: ''
};

function updateData(field, value) {
  calculatorData[field] = value;
}

function clearOperation() {
  const num1 = document.getElementById('num1');
  num1.value = '';
  updateData('num1', '');
  const num2 = document.getElementById('num2');
  num2.value = '';
  updateData('num2', '');
  const operationInput = document.getElementById('operation');
  operationInput.value = '';
  updateData('operation', '');
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

function showError(message) {
  const historyField = document.getElementById('history');
  historyField.value += `${message}\n`;
}

function inputDigit(digit) {
  const focusedElement = document.activeElement;
  if (focusedElement.id === 'num1' || focusedElement.id === 'num2') {
    focusedElement.value += digit;
    updateData(focusedElement.id, focusedElement.value);
  }
}

function inputOperation(op) {
  const operationInput = document.getElementById('operation');
  operationInput.value = op;
  updateData('operation', op);
}

function updateOperation(value) {
  if (value.length > 1) {
    const lastCharacter = value[value.length - 1];
    const operationInput = document.getElementById('operation');
    operationInput.value = lastCharacter;
    updateData('operation', lastCharacter);
  } else {
    updateData('operation', value);
  }
}