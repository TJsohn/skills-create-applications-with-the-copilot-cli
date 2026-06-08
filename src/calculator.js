// Supported operations: addition, subtraction, multiplication, division, modulo, power, square root

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

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed.');
  }

  return a % b;
}

function power(base, exponent) {
  return base ** exponent;
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of negative numbers is not allowed.');
  }

  return Math.sqrt(n);
}

function toNumber(value, name) {
  const parsed = Number(value);

  if (Number.isNaN(parsed)) {
    throw new Error(`${name} must be a valid number.`);
  }

  return parsed;
}

function calculate(left, operator, right) {
  if (operator === 'sqrt') {
    const operand = toNumber(left, 'Operand');
    return squareRoot(operand);
  }

  const first = toNumber(left, 'Left operand');
  const second = toNumber(right, 'Right operand');

  switch (operator) {
    case '+':
      return add(first, second);
    case '-':
      return subtract(first, second);
    case '*':
      return multiply(first, second);
    case '/':
      return divide(first, second);
    case '%':
      return modulo(first, second);
    case '^':
      return power(first, second);
    default:
      throw new Error(`Unsupported operator: ${operator}`);
  }
}

function main(argv) {
  if (argv.length === 2 && argv[0] === 'sqrt') {
    const result = calculate(argv[1], 'sqrt');
    console.log(result);
    return;
  }

  if (argv.length !== 3) {
    throw new Error('Usage: node src/calculator.js <number> <operator> <number> OR node src/calculator.js sqrt <number>');
  }

  const [left, operator, right] = argv;
  const result = calculate(left, operator, right);
  console.log(result);
}

if (require.main === module) {
  try {
    main(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
  calculate,
  main,
};
