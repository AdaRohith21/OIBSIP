const display = document.getElementById('result');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    const result = eval(display.value);
    if (isNaN(result) || !isFinite(result)) {
      display.value = 'Error: Invalid expression';
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = 'Error: Invalid expression';
  }
}
