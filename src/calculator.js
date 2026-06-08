#!/usr/bin/env node

/**
 * Supported operations: addition (+), subtraction (-), multiplication (*), and division (/).
 */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }

  return a / b;
}

function calculate(left, operator, right) {
  const a = Number(left);
  const b = Number(right);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error('Both operands must be valid numbers.');
  }

  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      throw new Error(`Unsupported operation: ${operator}`);
  }
}

function main(argv) {
  const [left, operator, right] = argv.slice(2);

  if (!left || !operator || !right) {
    console.error('Usage: node src/calculator.js <number> <operator> <number>');
    process.exitCode = 1;
    return;
  }

  try {
    const result = calculate(left, operator, right);
    console.log(result);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

if (require.main === module) {
  main(process.argv);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  calculate,
};
