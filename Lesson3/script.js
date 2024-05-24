const calculatorData = {
  num1: '',
  num2: '',
  operation: '',
  text_box: ''
};

function clearTextBox(){
  calculatorData['text_box'] = '';
}

function updateData(field, value) {
  console.log(field, value);
  calculatorData[field] = value;
  if (field === 'num1' || field === 'num2') {
    calculatorData['text_box'] = field;
  }
  console.log(calculatorData);
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
  clearTextBox();
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
  clearTextBox();

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
  if (calculatorData['text_box'] === 'num1') {
    const num1 = document.getElementById('num1');
    num1.value += digit;
    updateData(num1.id, num1.value);
    num1.focus()
  }

  if (calculatorData['text_box'] === 'num2') {
    const num2 = document.getElementById('num2');
    num2.value += digit;
    updateData(num2.id, num2.value);
    num2.focus()
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