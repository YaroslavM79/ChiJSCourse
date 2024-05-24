  
function validateNumber(event) {
    const char = String.fromCharCode(event.which);
    if (!/[-.0-9]/.test(char)) {
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
}
